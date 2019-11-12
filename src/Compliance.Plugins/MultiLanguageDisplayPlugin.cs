using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Globalization;
using System.Linq;
using System.ServiceModel;
using System.Text;

namespace Compliance.Plugins
{
    public partial class MultiLanguageDisplayPlugin : PluginBase
    {
        private readonly string preImageAlias = "PreImage";
        private readonly string[] languages = new string[] { "english", "french" }; // Languages Supported
        private readonly int[] locales = new int[] { 1033, 1036 }; // LCIDs of each language in the languages array

        public MultiLanguageDisplayPlugin()
            : base(typeof(MultiLanguageDisplayPlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            string messageName = localContext.PluginExecutionContext.MessageName;

            if (messageName == "Create" || messageName == "Update")
                PackNameTranslations(localContext);

            if (messageName == "Retrieve")
                UnpackNameOnRetrieve(localContext);

            if (messageName == "RetrieveMultiple")
                UnpackNameOnRetrieveMultiple(localContext);
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
            Entity target = (Entity)localContext.PluginExecutionContext.InputParameters["Target"];
            Entity preImageEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains(this.preImageAlias)) ? context.PreEntityImages[this.preImageAlias] : null;

            string[] names = new string[languages.Length];

            for (int i = 0; i < languages.Length; i++)
            {
                names[i] = GetAttributeValue<string>($"opc_name{languages[i]}", preImageEntity, target);
            }

            // Store the packed value in the target entity
            target["opc_name"] = string.Join("|", names);
        }

        ///
        ///  Unpack the name field when a Bilingual Item is Retreived
        ///
        protected void UnpackNameOnRetrieve(LocalPluginContext localContext)
        {
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            Entity target = (Entity)context.OutputParameters["BusinessEntity"];

            // Re-write the name field in the retrieved entity
            target["opc_name"] = UnpackName(localContext, target.GetAttributeValue<string>("opc_name"));
        }

        ///
        /// Unpack the name field when Bilingual Item are retrieved via Lookup Search or Advanced Find
        ///
        protected void UnpackNameOnRetrieveMultiple(LocalPluginContext localContext)
        {
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            EntityCollection collection = (EntityCollection)localContext.PluginExecutionContext.OutputParameters["BusinessEntityCollection"];
            foreach (Entity e in collection.Entities)
            {
                if (e.Attributes.ContainsKey("opc_name"))
                {
                    e["opc_name"] = UnpackName(localContext, e.GetAttributeValue<string>("opc_name"));
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
