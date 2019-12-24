using Microsoft.Xrm.Sdk;
using System.Linq;

namespace Compliance.Plugins
{
    public partial class AnnotationAuthorPlugin : PluginBase
    {
        public AnnotationAuthorPlugin() : base(typeof(AnnotationAuthorPlugin), runAsSystem: true)
        {
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            var entities = new EntityCollection();

            // Get the annotation entities on retrieve / retrieve multiple.
            switch (localContext.PluginExecutionContext.MessageName)
            {
                case PluginMessage.Retrieve:
                    if (!localContext.PluginExecutionContext.OutputParameters.ContainsKey("BusinessEntity"))
                        break;

                    if (localContext.PluginExecutionContext.OutputParameters["BusinessEntity"] is Entity businessEntity)
                        entities.Entities.Add(businessEntity);
                    break;

                case PluginMessage.RetrieveMultiple:
                    if (!localContext.PluginExecutionContext.OutputParameters.ContainsKey("BusinessEntityCollection"))
                        break;

                    if (localContext.PluginExecutionContext.OutputParameters["BusinessEntityCollection"] is EntityCollection businessEntityCollection)
                        entities.Entities.AddRange(businessEntityCollection.Entities);
                    break;

                default:
                    break;
            }

            // Exit if we don't have any entities.
            if (!entities.Entities.Any())
                return;

            // Replace the annotation modified by user with the original author.
            foreach(var entity in entities.Entities)
            {
                var annotation = entity.ToEntity<Entities.Annotation>();

                entity["modifiedby"] = annotation.CreatedBy;
                entity["modifiedon"] = annotation.CreatedOn;
            }
        }
    }
}
