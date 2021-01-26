using Compliance.EarlyBound;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Compliance.Plugins
{
    /// <summary>
    /// Updates the Duplicate Detection Result of a master record after a merge.
    /// This ensures the flow that checks for duplicates will run and set the duplicate status correctly.
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
                var context = localContext.PluginExecutionContext;

                if (context.MessageName != PluginMessage.Merge) return;

                // The master record of the merge is referenced through the target entity reference
                if (!(localContext.PluginExecutionContext.InputParameters["Target"] is EntityReference masterRecordReference))
                    return;

                if (masterRecordReference.LogicalName == Contact.EntityLogicalName)
                {
                    // Update the duplicate status result to reset it due to a merge and consequencely trigger a flow to check for duplicates
                    var contact = new Contact()
                    {
                        Id = masterRecordReference.Id,
                        opc_duplicatedetectionresult = opc_DuplicateDetectionResult.None,
                    };
                    localContext.OrganizationService.Update(contact);
                }
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. {nameof(DuplicateMergeUpdateStatusPlugin)}: {ex.Message}", ex);
            }
        }
    }
}
