using Compliance.EarlyBound;
using DocumentFormat.OpenXml.Office2013.PowerPoint.Roaming;
using DocumentFormat.OpenXml.Office2016.Drawing.ChartDrawing;
using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
using System.Linq;
using System.Web.Script.Serialization;

namespace Compliance.Plugins
{
    public partial class TimelineTransformationsPlugin : PluginBase
    {
        public TimelineTransformationsPlugin() : base(typeof(TimelineTransformationsPlugin), runAsSystem: true)
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
                    // Pre-fetch of results
                    if (localContext.PluginExecutionContext.InputParameters.ContainsKey("FetchXml"))
                    {
                        var inputParams = localContext.PluginExecutionContext.InputParameters;

                        // Remove the state code attribute so we don't see the state on the timeline as it's useless
                        var newFetchXmlValue = inputParams["FetchXml"]?.ToString().Replace("<attribute name=\"statecode\"/>", "");

                        // the params are read only, we need remove and add the param we want to change
                        inputParams.Remove("FetchXml");
                        inputParams.Add(new KeyValuePair<string, object>("FetchXml", newFetchXmlValue));
                    }

                    // Post-fetch of results
                    if (localContext.PluginExecutionContext.OutputParameters.ContainsKey("TimelineWallRecords"))
                    {
                        var serializer = new JavaScriptSerializer();
                        var timelineWallRecords = serializer.Deserialize<TimelineRecords>(localContext.PluginExecutionContext.OutputParameters["TimelineWallRecords"]?.ToString());


                        // For each event entity, switch out the owner for the created on behalf user
                        foreach (var entity in timelineWallRecords.Entities)
                        {
                            TimelineAttribute createdOnBehalfAttribute = null;
                            TimelineAttribute ownerAttribute = null;

                            foreach (var attribute in entity.Attributes)
                            {
                                if (attribute.Key == "opc_event_createdonbehalfby")
                                    createdOnBehalfAttribute = attribute;

                                if (attribute.Key == "ownerid")
                                    ownerAttribute = attribute;
                            }

                            if (createdOnBehalfAttribute != null && ownerAttribute != null)
                            {
                                ownerAttribute.Value = createdOnBehalfAttribute.Value["Value"];
                            }
                        }

                        localContext.PluginExecutionContext.OutputParameters["TimelineWallRecords"] = serializer.Serialize(timelineWallRecords);
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

                entity["ownerid"] = annotation.CreatedBy;
                entity["modifiedby"] = annotation.CreatedBy;
                entity["modifiedon"] = annotation.CreatedOn;
            }
        }
    }
}