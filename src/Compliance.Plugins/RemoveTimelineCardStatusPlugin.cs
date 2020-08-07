using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compliance.Plugins
{
    public class RemoveTimelineCardStatusPlugin : PluginBase
    {
        public RemoveTimelineCardStatusPlugin() : base(typeof(RemoveTimelineCardStatusPlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {

            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {
                if (localContext.PluginExecutionContext.MessageName == PluginMessage.RetrieveTimelineWallRecords
                 && localContext.PluginExecutionContext.InputParameters.ContainsKey("FetchXml"))
                {
                    var inputParams = localContext.PluginExecutionContext.InputParameters;

                    // Remove the state code attribute so we don't see the state on the timeline as it's useless
                    var newFetchXmlValue = inputParams["FetchXml"]?.ToString().Replace("<attribute name=\"statecode\"/>", "");

                    // the params are read only, we need remove and add the param we want to change
                    inputParams.Remove("FetchXml");
                    inputParams.Add(new KeyValuePair<string, object>("FetchXml", newFetchXmlValue));
                }
            }
            catch (Exception ex)
            {
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. MultiLanguage: {ex.Message}", ex);
            }
        }
    }
}
