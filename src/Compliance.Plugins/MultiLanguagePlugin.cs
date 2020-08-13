using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Compliance.Plugins
{
    public enum Language
    {
        English = 1033,
        French = 1036
    }

    public partial class MultiLanguagePlugin : PluginBase
    {
        private const string PreImageAlias = "PreImage";
        private const string IsLocalizableAttribute = "opc_islocalizable";
        private const string Prefix = "|^|";

        private const string LanguageKey = "uilanguageid";
        private const string LanguageAttribute = "uilanguageid";

        private readonly Dictionary<Language, string> LanguageSuffixes = new Dictionary<Language, string> {
            { Language.English, "english" },
            { Language.French, "french" }
        };

        public MultiLanguagePlugin()
            : base(typeof(MultiLanguagePlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {
                switch (localContext.PluginExecutionContext.MessageName)
                {
                    case PluginMessage.Create:
                    case PluginMessage.Update:
                        PackNameTranslations(localContext);
                        break;
                    case PluginMessage.Retrieve:
                        UnpackNameOnRetrieve(localContext);
                        break;
                    case PluginMessage.RetrieveMultiple:
                        UnpackNameOnRetrieveMultiple(localContext);
                        break;
                    default:
                        break;
                }
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. MultiLanguage: {ex.Message}", ex);
            }
        }

        private Language GetUserLanguage(LocalPluginContext localContext)
        {
            // Check the plugin cache to see if the language is set
            if (localContext.PluginExecutionContext.SharedVariables.ContainsKey(LanguageKey))
                return (Language)(int)localContext.PluginExecutionContext.SharedVariables[LanguageKey];

            // Check the user settings to see if the language is set
            var query = new QueryExpression()
            {
                EntityName = Entities.UserSettings.EntityLogicalName,
                ColumnSet = new ColumnSet(LanguageAttribute),
                Criteria =
                {
                    Conditions =
                    {
                        new ConditionExpression("systemuserid", ConditionOperator.Equal, localContext.PluginExecutionContext.InitiatingUserId)
                    }
                }
            };

            var userSettings = localContext.OrganizationService.RetrieveMultiple(query);
            if (userSettings.Entities.Any())
            {
                // Check if the language is supported
                var userLanguage = userSettings.Entities.First().GetAttributeValue<int>(LanguageAttribute);
                if (Enum.IsDefined(typeof(Language), userLanguage) || userLanguage.ToString().Contains(","))
                {
                    localContext.PluginExecutionContext.SharedVariables[LanguageKey] = userLanguage;
                    return (Language)userLanguage;
                }
            }

            // Fallback to English if no other language was detected / supported
            var defaultLanguage = Language.English;
            localContext.PluginExecutionContext.SharedVariables[LanguageKey] = (int)defaultLanguage;
            return defaultLanguage;
        }

        ///
        /// Unpack the product name field
        ///
        protected string UnpackName(LocalPluginContext localContext, string name)
        {
            var language = GetUserLanguage(localContext);

            // Remove identifying prefix
            name = name.Replace(Prefix, string.Empty);

            // Split the name
            var labels = name.Split('|');

            // Get the index of the language
            var labelIndex = Array.IndexOf(LanguageSuffixes.Keys.ToArray(), language);

            // Return the correct translation
            return labels[labelIndex];
        }

        ///
        /// Pack the translations into the name field when a Bilingual Item is Created or Updated
        /// Each translated name is packed into a pipe separated string
        /// This field is unpacked when the Bilingual Item entity is retrieved or related records are retrieved
        ///
        protected void PackNameTranslations(LocalPluginContext localContext)
        {
            var context = localContext.PluginExecutionContext;

            // Pack the translated labels into the name field
            if (!(localContext.PluginExecutionContext.InputParameters["Target"] is Entity target))
                return;

            var preImageEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains(PreImageAlias)) ? context.PreEntityImages[PreImageAlias] : null;

            var targetLocalizable = target.Attributes.Contains(IsLocalizableAttribute);
            var preImageLocalizable = preImageEntity is null ? false : preImageEntity.Attributes.Contains(IsLocalizableAttribute);

            if (!targetLocalizable && !preImageLocalizable)
                return;

            var names = new string[LanguageSuffixes.Count];
            for (var i = 0; i < LanguageSuffixes.Count; i++)
            {
                var suffix = LanguageSuffixes.ElementAt(i).Value;
                var nameAttribute = $"opc_name{suffix}";

                names[i] = GetAttributeValue<string>(nameAttribute, preImageEntity, target);
                if (string.IsNullOrWhiteSpace(names[i]))
                    throw new InvalidPluginExecutionException($"PackNameTranslations: An exception occured when trying to concatenate english and french name. The field '{nameAttribute}' of entity '{localContext.PluginExecutionContext.PrimaryEntityName}' must contain a value.");
            }

            // Store the packed value in the target entity
            target["opc_name"] = $"{Prefix}{string.Join("|", names)}";
        }

        ///
        ///  Unpack the name field when a Bilingual Item is Retreived
        ///
        protected void UnpackNameOnRetrieve(LocalPluginContext localContext)
        {
            if (!localContext.PluginExecutionContext.OutputParameters.Contains("BusinessEntity"))
                return;

            if (!(localContext.PluginExecutionContext.OutputParameters["BusinessEntity"] is Entity businessEntity))
                return;

            SetLocalizableValue(localContext, businessEntity);
        }

        ///
        /// Unpack the name field when Bilingual Item are retrieved via Lookup Search or Advanced Find
        ///
        protected void UnpackNameOnRetrieveMultiple(LocalPluginContext localContext)
        {
            if (!localContext.PluginExecutionContext.OutputParameters.Contains("BusinessEntityCollection"))
                return;

            if (!(localContext.PluginExecutionContext.OutputParameters["BusinessEntityCollection"] is EntityCollection businessEntityCollection))
                return;

            if (businessEntityCollection.Entities == null)
                return;

            foreach (Entity businessEntity in businessEntityCollection.Entities)
            {
                SetLocalizableValue(localContext, businessEntity);
            }
        }

        private void SetLocalizableValue(LocalPluginContext localContext, Entity businessEntity)
        {
            if (businessEntity.Attributes.ContainsKey("opc_name") && businessEntity["opc_name"].ToString().Contains(Prefix))
                businessEntity["opc_name"] = UnpackName(localContext, businessEntity.GetAttributeValue<string>("opc_name"));

            var attributes = businessEntity.Attributes
                .Where(x => x.Value is EntityReference entityReference && x.Key.EndsWith("id") && (entityReference.Name?.Contains(Prefix) ?? false));

            var relatedEntities = businessEntity.RelatedEntities
                .Where(x => x.Key.ToString().Contains("id"))
                .SelectMany(x => x.Value.Entities
                    .Where(entity => entity.Contains("opc_name") && entity["opc_name"].ToString().Contains(Prefix))
                );

            foreach (var attribute in attributes)
            {
                var entityReference = (EntityReference)attribute.Value;
                entityReference.Name = UnpackName(localContext, businessEntity.GetAttributeValue<EntityReference>(attribute.Key).Name);
            }

            foreach (var entity in relatedEntities)
            {
                entity["opc_name"] = UnpackName(localContext, entity.GetAttributeValue<string>("opc_name"));
            }
        }

        /// <summary>
        /// Get a value from the target if present, otherwise from the preImage
        /// Used only in PackNameTranslation
        /// </summary>
        private T GetAttributeValue<T>(string attributeName, Entity preImage, Entity targetImage)
        {
            if (targetImage.Contains(attributeName))
            {
                return targetImage.GetAttributeValue<T>(attributeName);
            }
            else if (preImage != null)
                return preImage.GetAttributeValue<T>(attributeName);
            else
                return default(T);
        }
    }
}