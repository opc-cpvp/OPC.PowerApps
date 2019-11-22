using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;

namespace Compliance.Plugins
{
    public partial class MultiLanguageRelatedPlugin : PluginBase
    {
        private readonly int[] locales = new int[] { 1033, 1036 }; // LCIDs of each language in the languages array
        private readonly string[] relatedBilingualFields = new string[] { "opc_themeid" }; // Related Bilingual Fields

        public MultiLanguageRelatedPlugin()
            : base(typeof(MultiLanguageRelatedPlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {
                string messageName = localContext.PluginExecutionContext.MessageName;

                if (messageName == "Retrieve")
                    UnpackNameOnRetrieveRelated(localContext);

                if (messageName == "RetrieveMultiple")
                    UnpackNameOnRetrieveMultipleRelated(localContext);
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. MultiLanguageRelated: {ex.Message}", ex);
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
            // Split the name
            string[] labels = name.Split('|');

            // Which language is set for the user?
            int labelIndex = Array.IndexOf(locales, userLanguageId);

            // Return the correct translation
            return labels[labelIndex];
        }

        ///
        /// Unpack the product lookup name when a related entity is Retrieved
        ///
        protected void UnpackNameOnRetrieveMultipleRelated(LocalPluginContext localContext)
        {
            EntityCollection collection = (EntityCollection)localContext.PluginExecutionContext.OutputParameters["BusinessEntityCollection"];
            foreach (Entity e in collection.Entities)
            {
                foreach (var relatedBilingualField in relatedBilingualFields)
                {
                    if (e.Attributes.ContainsKey(relatedBilingualField))
                    {
                        ((EntityReference)e[relatedBilingualField]).Name = UnpackName(localContext, e.GetAttributeValue<EntityReference>(relatedBilingualField).Name);
                    }
                }
            }
        }

        ///
        /// Unpack the product lookup name when related entities are retrieved via lookup searches or advanced find
        ///
        protected void UnpackNameOnRetrieveRelated(LocalPluginContext localContext)
        {
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            Entity target = (Entity)context.OutputParameters["BusinessEntity"];
            foreach (var relatedBilingualField in relatedBilingualFields)
            {
                if (target.Attributes.ContainsKey(relatedBilingualField))
                {
                    ((EntityReference)target[relatedBilingualField]).Name = UnpackName(localContext, target.GetAttributeValue<EntityReference>(relatedBilingualField).Name);
                }
            }
        }
    }
}
