using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Compliance.Plugins
{
    public partial class MultiLanguagePlugin : PluginBase
    {
        private const string preImageAlias = "PreImage";
        private const string isLocalizableAttribute = "opc_islocalizable";
        private const string prefix = "|^|";
        private const string userSettingsEntityName = "usersettings";
        private const string uiLanguageId = "uilanguageid";
        private const string UserLocaleId = "UserLocaleId";
        private readonly Dictionary<string, int> languages = new Dictionary<string, int> { { "english", 1033 }, { "french", 1036 } };

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

        ///
        /// Unpack the product name field
        ///
        protected string UnpackName(LocalPluginContext localContext, string name)
        {
            // Get the language of the user
            int userLanguageId;
            if (localContext.PluginExecutionContext.SharedVariables.ContainsKey(UserLocaleId))
            {
                // Get the user language from the pipeline cache
                userLanguageId = (int)localContext.PluginExecutionContext.SharedVariables[UserLocaleId];
            }
            else
            {
                try
                {
                    // The user language isn't cached in the pipline, so get it here
                    Entity userSettings = localContext.OrganizationService.Retrieve(
                        userSettingsEntityName,
                        localContext.PluginExecutionContext.InitiatingUserId,
                        new ColumnSet(uiLanguageId));
                    userLanguageId = userSettings.GetAttributeValue<int>(uiLanguageId);
                }
                catch (Exception ex)
                {
                    localContext.Trace($"There was an error while trying to find the calling user's language. Defaulting to English. Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                }
                finally 
                {
                    localContext.PluginExecutionContext.SharedVariables[UserLocaleId] = userLanguageId;
                }
            }
            // Remove identifying prefix
            name = name.Replace(prefix, string.Empty);

            // Split the name
            string[] labels = name.Split('|');

            // Which language is set for the user?
            int labelIndex = Array.IndexOf(languages.Values.ToArray(), userLanguageId);

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
            IPluginExecutionContext context = localContext.PluginExecutionContext;

            // Pack the translated labels into the name field
            if (!(localContext.PluginExecutionContext.InputParameters["Target"] is Entity target))
                return;

            Entity preImageEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains(preImageAlias)) ? context.PreEntityImages[preImageAlias] : null;

            bool targetLocalizable = target.Attributes.Contains(isLocalizableAttribute);
            bool preImageLocalizable = preImageEntity is null ? false : preImageEntity.Attributes.Contains(isLocalizableAttribute);

            if (!targetLocalizable && !preImageLocalizable)
                return;

            string[] names = new string[languages.Count];
            for (int i = 0; i < languages.Count; i++)
            {
                names[i] = GetAttributeValue<string>($"opc_name{languages.ElementAt(i).Key}", preImageEntity, target);
                if (string.IsNullOrWhiteSpace(names[i]))
                    throw new InvalidPluginExecutionException($"PackNameTranslations: An exception occured when trying to concatenate english and french name. The field 'opc_name{languages.ElementAt(i).Key}' of entity '{localContext.PluginExecutionContext.PrimaryEntityName}' must contain a value.");
            }

            // Store the packed value in the target entity
            target["opc_name"] = $"{prefix}{string.Join("|", names)}";
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
            if (businessEntity.Attributes.ContainsKey("opc_name") && businessEntity["opc_name"].ToString().Contains(prefix))
                businessEntity["opc_name"] = UnpackName(localContext, businessEntity.GetAttributeValue<string>("opc_name"));

            foreach (var attribute in businessEntity.Attributes.Where(x => x.Value is EntityReference entityReference && x.Key.EndsWith("id") && (entityReference.Name?.Contains(prefix) ?? false)))
            {
                var entityReference = (EntityReference)attribute.Value;
                entityReference.Name = UnpackName(localContext, businessEntity.GetAttributeValue<EntityReference>(attribute.Key).Name);
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
