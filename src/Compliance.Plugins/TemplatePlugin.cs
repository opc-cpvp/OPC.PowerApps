using Microsoft.Xrm.Sdk;
using System;

namespace Compliance.Plugins
{
    public class TemplatePlugin : PluginBase
    {
        private SharePointService _sharepointService;

        public TemplatePlugin()
            : this(new SharePointService())
        { }

        public TemplatePlugin(SharePointService sharepointService)
            : base(typeof(TemplatePlugin), runAsSystem: true)
        {
            _sharepointService = sharepointService;
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {
                var pluginExecutionContext = localContext.PluginExecutionContext;
                var templatePath = (string)pluginExecutionContext.InputParameters["TemplatePath"];
                var xmlData = (string)pluginExecutionContext.InputParameters["XMLData"];
                var caseFolderPath = (string)pluginExecutionContext.InputParameters["CaseFolderPath"];
                var accessToken = (string)pluginExecutionContext.InputParameters["AccessToken"];
                var documentName = (string)pluginExecutionContext.InputParameters["DocumentName"];
                var sharePointSiteUrl = (string)pluginExecutionContext.InputParameters["SharePointSiteUrl"];

                var templateStream = _sharepointService.GetDocumentAsStream(accessToken, sharePointSiteUrl, templatePath).Result;
                var byteArray = _sharepointService.GenerateDocumentFromTemplate(templateStream, xmlData);

                _sharepointService.AddFileToSharePoint(accessToken, sharePointSiteUrl, caseFolderPath, documentName, byteArray).Wait();
            }
            catch (Exception ex)
            {
                var exceptionMessage = $"Exception: {ex.Message} \nInner Exception: {ex.InnerException} \nStack Trace: {ex.StackTrace}";

                localContext.Trace(exceptionMessage);
                throw new InvalidPluginExecutionException($"An error occurred in the TemplatePlugin. \n{exceptionMessage}", ex);
            }
        }
    }
}
