using Compliance.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Compliance.Plugins
{
    /// <summary>
    /// Updates the Duplicate Detection Result of a master record after a merge. This ensures (to be tested) the flow that checks for duplicates will run and set the duplicate status correctly.
    /// </summary>
    public partial class DuplicateMergeUpdateStatusPlugin : PluginBase
    { 
        public DuplicateMergeUpdateStatusPlugin()
            : base(typeof(DuplicateMergeUpdateStatusPlugin), runAsSystem: false)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {

                // TODO: All of it

                // A bit of info on Merge Action (Not message but could be similar): https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/merge?view=dynamics-ce-odata-9

                var context = localContext.PluginExecutionContext;

                if (context.MessageName != PluginMessage.Merge) return;

                // This plugin will need to be run in post-operation, or else, the flow could run before the merge and give a false result. Make sure post-operation has all the values we need.
                
                // Get the two records (or only the master record as it's the only one that the flow does not get triggered on)

                // Simply update the master record by putting it's Duplicate Detection Result to "none".
                // Make sure if empty, or already at "none" for some reason, that it still triggers the flow as this could be a problem.
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. {nameof(ChangeEventPlugin)}: {ex.Message}", ex);
            }
        }
    }
}
