using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Text;

namespace Compliance.Plugins
{
    //[CrmPluginRegistration(
    //    MessageNameEnum.Retrieve,
    //    "opc_complaint", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    //    filteringAttributes: "", stepName: "MultiLanguageDisplayPlugin - opc_complaint - Retrieve", executionOrder: 1,
    //    isolationModel: IsolationModeEnum.Sandbox,
    //    Description = "MultiLanguageDisplayPlugin: Retrieve of opc_complaint",
    //    Id = "A5E0AFD0-365E-43FB-B65D-56AAFDC54603")]

    //[CrmPluginRegistration(
    //    MessageNameEnum.RetrieveMultiple,
    //    "opc_complaint", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    //    filteringAttributes: "", stepName: "MultiLanguageDisplayPlugin - opc_complaint - Retrieve Multiple", executionOrder: 1,
    //    isolationModel: IsolationModeEnum.Sandbox,
    //    Description = "MultiLanguageDisplayPlugin: Retrieve Multiple of opc_complaint",
    //    Id = "17BA8242-F8D3-473F-98C0-CCD85A08D50D")]

    public partial class MultiLanguageDisplayPlugin : PluginBase
    {
        private readonly string preImageAlias = "PreImage";
        private readonly string[] languages = new string[] { "english", "french" }; // Languages Supported
        private readonly int[] locales = new int[] { 1033, 1036 }; // LCIDs of each language in the languages array

        public MultiLanguageDisplayPlugin()
            : base(typeof(MultiLanguageDisplayPlugin), runAsSystem: true)
        {
            // Registrations for Packing each translation field into the name field
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(20, "Create", "opc_bilingualitem",
                new Action<LocalPluginContext>(PackNameTranslations)));
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(20, "Update", "opc_bilingualitem",
                new Action<LocalPluginContext>(PackNameTranslations)));

            // Registrations for unpacking the name field on Retrieve of Bilingual Items
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(40, "Retrieve", "opc_bilingualitem",
                new Action<LocalPluginContext>(UnpackNameOnRetrieve)));
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(40, "RetrieveMultiple", "opc_bilingualitem",
                new Action<LocalPluginContext>(UnpackNameOnRetrieveMultiple)));

            // Registrations for unpacking the name field on related Complaints
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(40, "Retrieve", "opc_complaint",
                new Action<LocalPluginContext>(UnpackNameOnRetrieveRelated)));
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(40, "RetrieveMultiple", "opc_complaint",
                new Action<LocalPluginContext>(UnpackNameOnRetrieveMultipleRelated)));
        }

        //protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        //{
        //    try
        //    {
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new InvalidPluginExecutionException($"{ex.Message}: {ex.StackTrace}");
        //    }
        //}

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

            // Pack the translated labels into the name field en,de
            Entity target = (Entity)localContext.PluginExecutionContext.InputParameters["Target"];
            Entity preImageEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains(this.preImageAlias)) ? context.PreEntityImages[this.preImageAlias] : null;

            string[] names = new string[languages.Length];

            for (int i = 0; i < languages.Length; i++)
            {
                names[i] = GetAttributeValue<string>("opc_name" + languages[i], preImageEntity, target);

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
        ///
        /// Unpack the product lookup name when a related entity is Retrieved
        ///
        protected void UnpackNameOnRetrieveMultipleRelated(LocalPluginContext localContext)
        {
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            EntityCollection collection = (EntityCollection)localContext.PluginExecutionContext.OutputParameters["BusinessEntityCollection"];
            foreach (Entity e in collection.Entities)
            {
                if (e.Attributes.ContainsKey("opc_bilingualitemid"))
                {
                    ((EntityReference)e["opc_bilingualitemid"]).Name = UnpackName(localContext, e.GetAttributeValue<EntityReference>("opc_bilingualitemid").Name);
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
            if (target.Attributes.ContainsKey("opc_bilingualitemid"))
            {
                ((EntityReference)target["opc_bilingualitemid"]).Name = UnpackName(localContext, target.GetAttributeValue<EntityReference>("opc_bilingualitemid").Name);
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
