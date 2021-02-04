using Compliance.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Compliance.Plugins
{
    public enum Language
    {
        English = 1033,
        French = 1036
    }

    public partial class MultiLanguagePlugin : PluginBase
    {
        private const string IsLocalizableAttribute = "opc_islocalizable";
        private const string PreImageAlias = "PreImage";
        private const string Prefix = "|^|";
        private const string Separator = "|";
        private const string LanguageKey = "uilanguageid";

        /// <summary>
        /// Regex to match strings used for the MultiLanguagePlugin.
        /// It first matches the double quote, followed by the prefix, then matches
        /// anything (inlcuding escaped quotes) until it matches the end of the other double quotes
        /// </summary>
        private readonly string MultiLanguagePattern = $"\"({Regex.Escape(Prefix)}(?:(?=(\\\\?))\\2.)*?)\"";
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
                        PackTranslations(localContext);
                        break;
                    case PluginMessage.Retrieve:
                        UnpackTranslationsOnRetrieve(localContext);
                        break;
                    case PluginMessage.RetrieveMultiple:
                        UnpackTranslationsOnRetrieveMultiple(localContext);
                        break;
                    case PluginMessage.RetrieveTimelineWallRecords:
                        UnpackTranslationsOnRetrieveTimelineWallRecords(localContext);
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
            // Check the shared variables to see if the language is set
            if (localContext.PluginExecutionContext.SharedVariables.ContainsKey(LanguageKey))
                return (Language)(int)localContext.PluginExecutionContext.SharedVariables[LanguageKey];

            // Check the user settings to see if the language is set
            var userSettings = localContext.OrganizationService.RetrieveMultiple(
                new QueryExpression(UserSettings.EntityLogicalName)
                {
                    ColumnSet = new ColumnSet("uilanguageid"),
                    Criteria =
                    {
                        Conditions =
                        {
                            new ConditionExpression("systemuserid", ConditionOperator.Equal, localContext.PluginExecutionContext.InitiatingUserId)
                        }
                    }
                }
            )
            .Entities
            .Select(e => e.ToEntity<UserSettings>())
            .FirstOrDefault();

            // Fallback to English if no other language was detected / supported
            if (!Enum.TryParse(userSettings?.UILanguageId?.ToString(), out Language userLanguage))
                userLanguage = Language.English;

            localContext.PluginExecutionContext.SharedVariables[LanguageKey] = (int)userLanguage;
            return userLanguage;
        }

        ///
        /// Unpack the product name field
        ///
        protected string UnpackTranslation(LocalPluginContext localContext, string value)
        {
            var language = GetUserLanguage(localContext);

            var labels = value.Substring(Prefix.Length).Split(new[] { Separator }, StringSplitOptions.None);
            var languageIndex = Array.IndexOf(LanguageSuffixes.Keys.ToArray(), language);

            var label = labels[languageIndex];

            // Return the label in the users language if it's not empty, otherwise return the first not empty value
            return !string.IsNullOrWhiteSpace(label) ? label : labels.FirstOrDefault(l => !string.IsNullOrWhiteSpace(l));
        }

        ///
        /// Pack the translations into the name field when a Bilingual Item is Created or Updated
        /// Each translated name is packed into a pipe separated string
        /// This field is unpacked when the Bilingual Item entity is retrieved or related records are retrieved
        ///
        protected void PackTranslations(LocalPluginContext localContext)
        {
            if (!(localContext.PluginExecutionContext.InputParameters[InputParameter.Target] is Entity target))
                return;

            Entity preImage = null;
            if (localContext.PluginExecutionContext.PreEntityImages.ContainsKey(PreImageAlias))
                preImage = localContext.PluginExecutionContext.PreEntityImages[PreImageAlias];

            var attributes = new AttributeCollection();
            attributes.AddRange(target.Attributes);

            if (preImage != null)
                attributes.AddRange(preImage.Attributes.Where(a => !attributes.ContainsKey(a.Key)));

            // Check if the entity supports translations
            if (!attributes.TryGetValue(IsLocalizableAttribute, out _))
                return;

            // Get the attributes for the current entity
            var response = localContext.OrganizationService.Execute(
                new RetrieveEntityRequest()
                {
                    EntityFilters = EntityFilters.Attributes,
                    LogicalName = localContext.PluginExecutionContext.PrimaryEntityName
                }
            ) as RetrieveEntityResponse;

            // Filter valid attributes
            var entityAttributes = response.EntityMetadata.Attributes
                .Where(a => a.AttributeType == AttributeTypeCode.String || a.AttributeType == AttributeTypeCode.Memo)
                .Select(a => a.LogicalName)
                .ToArray();

            var translatedAttributes = entityAttributes.Where(a => LanguageSuffixes.Values.Any(s => entityAttributes.Contains($"{a}{s}"))).ToArray();
            foreach (var attribute in translatedAttributes)
            {
                var translations = new List<object>();
                foreach (var suffix in LanguageSuffixes.Values)
                {
                    var translatedAttribute = $"{attribute}{suffix}";
                    attributes.TryGetValue(translatedAttribute, out var translation);
                    translations.Add(translation ?? string.Empty);
                }
                target[attribute] = $"{Prefix}{string.Join(Separator, translations)}";
            }
        }

        ///
        ///  Unpack the name field when a Bilingual Item is Retreived
        ///
        protected void UnpackTranslationsOnRetrieve(LocalPluginContext localContext)
        {
            if (!localContext.PluginExecutionContext.OutputParameters.ContainsKey(OutputParameter.BusinessEntity))
                return;

            if (!(localContext.PluginExecutionContext.OutputParameters[OutputParameter.BusinessEntity] is Entity businessEntity))
                return;

            SetLocalizableValue(localContext, businessEntity);
        }

        ///
        /// Unpack the name field when Bilingual Item are retrieved via Lookup Search or Advanced Find
        ///
        protected void UnpackTranslationsOnRetrieveMultiple(LocalPluginContext localContext)
        {
            if (!localContext.PluginExecutionContext.OutputParameters.ContainsKey(OutputParameter.BusinessEntityCollection))
                return;

            if (!(localContext.PluginExecutionContext.OutputParameters[OutputParameter.BusinessEntityCollection] is EntityCollection businessEntityCollection))
                return;

            foreach (var businessEntity in businessEntityCollection.Entities)
                SetLocalizableValue(localContext, businessEntity);
        }

        protected void UnpackTranslationsOnRetrieveTimelineWallRecords(LocalPluginContext localContext)
        {
            if (!localContext.PluginExecutionContext.OutputParameters.ContainsKey(OutputParameter.TimelineWallRecords))
                return;

            if (!(localContext.PluginExecutionContext.OutputParameters[OutputParameter.TimelineWallRecords] is string timelineWallRecords))
                return;

            // Get and replace all timeline wall record names that are meant to be bilingual using a regex pattern
            var languageTimeLineRecords = Regex.Replace(
                timelineWallRecords,
                MultiLanguagePattern,
                m => $"\"{UnpackTranslation(localContext, m.Groups[1].Value)}\"");

            // Remove and add as the property is readonly
            localContext.PluginExecutionContext.OutputParameters.Remove(OutputParameter.TimelineWallRecords);
            localContext.PluginExecutionContext.OutputParameters.Add(OutputParameter.TimelineWallRecords, languageTimeLineRecords);
        }

        private void SetLocalizableValue(LocalPluginContext localContext, Entity businessEntity)
        {
            // Only localize attributes if required
            var localizableAttributes = businessEntity.Attributes
                .Where(a => a.Value is string value && value.StartsWith(Prefix))
                .Select(a => new KeyValuePair<string, string>(a.Key, a.Value.ToString()))
                .ToArray();

            // Update localizable attributes
            var hasIsLocalizable = businessEntity.Attributes.TryGetValue(IsLocalizableAttribute, out var isLocalizable);
            foreach (var attribute in localizableAttributes)
            {
                if (hasIsLocalizable && !(bool)isLocalizable)
                    continue;

                businessEntity[attribute.Key] = UnpackTranslation(localContext, attribute.Value);
            }

            var entityReferences = businessEntity.Attributes.Values
                .Where(a => a is EntityReference entityReference && (entityReference.Name?.StartsWith(Prefix) ?? false))
                .Cast<EntityReference>()
                .ToArray();

            // Update names of entity references
            foreach (var entityReference in entityReferences)
                entityReference.Name = UnpackTranslation(localContext, entityReference.Name);

            // Update localizable attributes in related entities
            var relatedEntities = businessEntity.RelatedEntities.Values.SelectMany(e => e.Entities);
            foreach (var relatedEntity in relatedEntities)
                SetLocalizableValue(localContext, relatedEntity);
        }
    }
}