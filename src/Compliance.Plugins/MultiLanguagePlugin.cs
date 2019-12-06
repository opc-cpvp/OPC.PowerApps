using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Compliance.Plugins
{
    public partial class MultiLanguagePlugin : PluginBase
    {
        private readonly string preImageAlias = "PreImage";
        private readonly string[] languages = new string[] { "english", "french" }; // Languages Supported
        private readonly int[] locales = new int[] { 1033, 1036 }; // LCIDs of each language in the languages array
        private readonly string isLocalizableAttribute = "opc_islocalizable";
        private readonly string prefix = "|^|";

        public MultiLanguagePlugin()
            : base(typeof(MultiLanguagePlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {
                string messageName = localContext.PluginExecutionContext.MessageName;

                if (messageName == "Create" || messageName == "Update")
                    PackNameTranslations(localContext);

                if (messageName == "Retrieve")
                    UnpackNameOnRetrieve(localContext);

                if (messageName == "RetrieveMultiple")
                    UnpackNameOnRetrieveMultiple(localContext);
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
            int userLanguageId = 0;
            if (localContext.PluginExecutionContext.SharedVariables.ContainsKey("UserLocaleId"))
            {
                // Get the user language from the pipeline cache
                userLanguageId = (int)localContext.PluginExecutionContext.SharedVariables["UserLocaleId"];
            }
            else
            {
                // The user language isn't cached in the pipline, so get it here
                Entity userSettings = localContext.OrganizationService.Retrieve(
                    "usersettings",
                    localContext.PluginExecutionContext.InitiatingUserId,
                    new ColumnSet("uilanguageid"));
                userLanguageId = userSettings.GetAttributeValue<int>("uilanguageid");
                localContext.PluginExecutionContext.SharedVariables["uilanguageid"] = userLanguageId;
            }
            // Remove identifying prefix
            name = name.Replace(prefix, string.Empty);

            // Split the name
            string[] labels = name.Split('|');

            // Which language is set for the user?
            int labelIndex = Array.IndexOf(locales, userLanguageId);

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

            Entity preImageEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains(this.preImageAlias)) ? context.PreEntityImages[this.preImageAlias] : null;

            if (!target.Attributes.Contains(isLocalizableAttribute) && preImageEntity != null ? !preImageEntity.Attributes.Contains(isLocalizableAttribute) : false)
                return;

            string[] names = new string[languages.Length];

            for (int i = 0; i < languages.Length; i++)
            {
                names[i] = GetAttributeValue<string>($"opc_name{languages[i]}", preImageEntity, target);
                if (string.IsNullOrWhiteSpace(names[i]))
                    throw new InvalidPluginExecutionException($"PackNameTranslations: An exception occured when trying to concatenate english and french name. The field 'opc_name{languages[i]}' must contain a value.");
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

            // Re-write the name field in the retrieved entity
            if (businessEntity.Attributes.ContainsKey("opc_name") && businessEntity["opc_name"].ToString().Contains(prefix))
                businessEntity["opc_name"] = UnpackName(localContext, businessEntity.GetAttributeValue<string>("opc_name"));

            foreach (var attribute in businessEntity.Attributes)
            {
                if (attribute.Key.EndsWith("id") && businessEntity[attribute.Key] is EntityReference entityReference && entityReference.Name != null && entityReference.Name.Contains(prefix))
                {
                    entityReference.Name = UnpackName(localContext, businessEntity.GetAttributeValue<EntityReference>(attribute.Key).Name);
                }
            }
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

            if (businessEntityCollection.Entities.FirstOrDefault() == null)
                return;

            foreach (Entity businessEntity in businessEntityCollection.Entities)
            {
                if (businessEntity.Attributes.ContainsKey("opc_name") && businessEntity["opc_name"].ToString().Contains(prefix))
                {
                    businessEntity["opc_name"] = UnpackName(localContext, businessEntity.GetAttributeValue<string>("opc_name"));
                }

                foreach (var attribute in businessEntity.Attributes)
                {
                    if (attribute.Key.EndsWith("id") && businessEntity[attribute.Key] is EntityReference entityReference && entityReference.Name.Contains(prefix))
                    {
                        entityReference.Name = UnpackName(localContext, businessEntity.GetAttributeValue<EntityReference>(attribute.Key).Name);
                    }
                }
            }
        }

        /// <summary>
        /// Get a value from the target if present, otherwise from the preImage
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
