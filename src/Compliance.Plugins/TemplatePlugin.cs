using DocumentFormat.OpenXml.Packaging;
using Microsoft.Xrm.Sdk;
using System;
using System.IO;
using System.Net;
using System.Text;

namespace Compliance.Plugins
{
    public partial class TemplatePlugin : PluginBase
    {
        string resultMessage = "";

        public TemplatePlugin()
            : base(typeof(TemplatePlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            IPluginExecutionContext pluginExecutionContext = localContext.PluginExecutionContext;
            string templatePath = (string)pluginExecutionContext.InputParameters["TemplatePath"];
            string xmlData = (string)pluginExecutionContext.InputParameters["XMLData"];
            string caseFolderPath = (string)pluginExecutionContext.InputParameters["CaseFolderPath"];
            string token = (string)pluginExecutionContext.InputParameters["Token"];

            try
            {
                // I don't verify if these values exist because they are mandatory parameters to trigger the action.
                //if (pluginExecutionContext.InputParameters.Contains("TemplatePath") &&
                //    pluginExecutionContext.InputParameters.Contains("XMLData") &&
                //    pluginExecutionContext.InputParameters.Contains("CaseFolderPath"))
                //{
                    GenerateDocumentFromTemplate(templatePath, xmlData, caseFolderPath, token);
                //}
                //else
                //{
                //    resultMessage = "Failed. Missing input parameters.";
                //}
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. Template: {ex.Message}", ex);
            }

            pluginExecutionContext.OutputParameters["Result"] = resultMessage;
        }

        private void GenerateDocumentFromTemplate(string templatePath, string xmlData, string caseFolderPath, string token)
        {
            var getUrl = $"https://opcdev1.sharepoint.com/sites/opcdev1/_api/web/getfilebyserverrelativeurl('{templatePath}')/$value";
            var postUrl = $"https://opcdev1.sharepoint.com/sites/opcdev1/_api/web/GetFolderByServerRelativeUrl('{caseFolderPath}')/Files/add(url='result.docx',overwrite=true)";

            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(getUrl);
            httpWebRequest.Method = "GET";
            httpWebRequest.Headers.Add("Authorization", "Bearer " + token);
            HttpWebResponse httpWebResponse = (HttpWebResponse)httpWebRequest.GetResponse();

            using (MemoryStream memoryStream = new MemoryStream())
            {
                httpWebResponse.GetResponseStream().CopyTo(memoryStream);

                using (WordprocessingDocument wordDoc = WordprocessingDocument.Open(memoryStream, true))
                {
                    MainDocumentPart mainPart = wordDoc.MainDocumentPart;
                    mainPart.DeleteParts(mainPart.CustomXmlParts);
                    CustomXmlPart myXmlPart = mainPart.AddCustomXmlPart(CustomXmlPartType.CustomXml);

                    byte[] byteArray = Encoding.UTF8.GetBytes(xmlData);

                    using (MemoryStream stream = new MemoryStream(byteArray)) myXmlPart.FeedData(stream);

                    wordDoc.Save();

                    byteArray = memoryStream.ToArray();

                    httpWebRequest = (HttpWebRequest)WebRequest.Create(postUrl);
                    httpWebRequest.Method = "POST";
                    httpWebRequest.Headers.Add("Authorization", "Bearer " + token);
                    httpWebRequest.ContentLength = byteArray.Length;

                    using (Stream stream = httpWebRequest.GetRequestStream()) stream.Write(byteArray, 0, byteArray.Length);

                    // It is not necessary to get the response when creating the file, but I will use it to return a success or not to the action.
                    resultMessage = ((HttpWebResponse)httpWebRequest.GetResponse()).StatusCode.ToString();
                }
            }
        }
    }
}
