using Microsoft.Xrm.Sdk;
using System;

namespace Compliance.Plugins
{
    /// <summary>
    /// PALegalConsultation Plugin.
    /// </summary>
    [CrmPluginRegistration(
        MessageNameEnum.Retrieve,
        "opc_complaint", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
        filteringAttributes: "", stepName: "MultiLanguageDisplayPlugin - opc_complaint - Retrieve", executionOrder: 1,
        isolationModel: IsolationModeEnum.Sandbox,
        Description = "MultiLanguageDisplayPlugin: Retrieve of opc_complaint",
        Id = "A5E0AFD0-365E-43FB-B65D-56AAFDC54603")]

    [CrmPluginRegistration(
        MessageNameEnum.RetrieveMultiple,
        "opc_complaint", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
        filteringAttributes: "", stepName: "MultiLanguageDisplayPlugin - opc_complaint - Retrieve Multiple", executionOrder: 1,
        isolationModel: IsolationModeEnum.Sandbox,
        Description = "MultiLanguageDisplayPlugin: Retrieve Multiple of opc_complaint",
        Id = "17BA8242-F8D3-473F-98C0-CCD85A08D50D")]

    public partial class MultiLanguageDisplayPlugin : PluginBase
    {
        public MultiLanguageDisplayPlugin()
            : base(typeof(MultiLanguageDisplayPlugin), runAsSystem: true)
        {
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            try
            {
                throw new InvalidPluginExecutionException("Hello World");
            }
            catch (Exception ex)
            {
                throw new InvalidPluginExecutionException($"{ex.Message}: {ex.StackTrace}");
            }
        }
    }
}
