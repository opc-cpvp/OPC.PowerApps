using Compliance.Plugins.Entities;
using Microsoft.Xrm.Sdk;
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
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            if (!(localContext.PluginExecutionContext.InputParameters["Target"] is opc_complaint complaint))
                return;

            try
            {
                var acroynym = complaint.opc_complaints_legislation.opc_acronym;
                var number = complaint.opc_number;

                complaint.opc_number = $"{acroynym}-{number}";
            }
            catch (Exception ex)
            {
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. ComplaintPrefix: {ex.Message}", ex);
            }
        }
    }
}
