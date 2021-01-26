using Compliance.EarlyBound.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;

namespace Compliance.Plugins
{
    public partial class ComplaintPrefixPlugin : PluginBase
    {
        public ComplaintPrefixPlugin()
            : base(typeof(ComplaintPrefixPlugin), runAsSystem: true)
        {
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (!(localContext.PluginExecutionContext.InputParameters["Target"] is Entity target))
                return;

            try
            {
                // Convert the target entity to a complaint
                var complaint = target.ToEntity<opc_complaint>();

                // Get the linked legislation record
                var legislation = localContext.OrganizationService
                    .Retrieve("opc_legislation", complaint.opc_legislation.Id, new ColumnSet("opc_acronym"))
                    .ToEntity<opc_legislation>();

                // Set the complaint number
                complaint.opc_number = $"{legislation.opc_acronym}-{complaint.opc_number}";
            }
            catch(Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. ComplaintPrefix: {ex.Message}", ex);
            }
        }
    }
}
