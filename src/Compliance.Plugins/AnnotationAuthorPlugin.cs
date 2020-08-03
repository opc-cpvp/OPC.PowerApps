using Compliance.Entities;
using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
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
                    {
                        // Sort the the collection as the order in which they come makes a difference
                        // Can't completely squish the Entities property as it's read only, so need to clear and re-add the sorted references
                        var sortedAnnotations = businessEntityCollection.Entities.OrderByDescending(x => x["createdon"]).ToList();
                        businessEntityCollection.Entities.Clear();
                        businessEntityCollection.Entities.AddRange(sortedAnnotations);

                        // Prepare a new list to switch certain values later
                        entities.Entities.AddRange(businessEntityCollection.Entities);
                    }
                    break;
                case PluginMessage.RetrieveTimelineWallRecords:
                    if (localContext.PluginExecutionContext.InputParameters.ContainsKey("FetchXml"))
                    {
                        // the params are read only, we need remove and add the param we want to change
                        var InputParams = localContext.PluginExecutionContext.InputParameters;

                        // Remove the state code attribute so we don't see the state on the timeline as it's useless
                        var newFetchXmlValue = InputParams["FetchXml"].ToString().Replace("<attribute name=\"statecode\"/>", "");
                        InputParams.Remove("FetchXml");
                        InputParams.Add(new KeyValuePair<string, object>("FetchXml", newFetchXmlValue));
                    }
                    break;
                default:
                    break;
            }

            // Exit if we don't have any entities.
            if (!entities.Entities.Any())
                return;

            // Replace the annotation modified by user with the original author.
            foreach (var entity in entities.Entities)
            {
                var annotation = entity.ToEntity<Annotation>();

                localContext.Trace($"{annotation.Subject}: {annotation.CreatedOn}");

                entity["modifiedby"] = annotation.CreatedBy;
                entity["modifiedon"] = annotation.CreatedOn;
            }
        }
    }
}