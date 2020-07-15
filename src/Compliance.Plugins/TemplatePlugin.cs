using DocumentFormat.OpenXml.Packaging;
using Microsoft.Xrm.Sdk;
using System;
using System.IO;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace Compliance.Plugins
{
    public partial class TemplatePlugin : PluginBase
    {
        private const string SharePointWebAPIUrl = "https://096gc.sharepoint.com/sites/PowerAppsSandbox/_api/web";

        // This number includes the frontslash separating the CaseFolderPath and the actual FileName AND the .docx extension
        private const int sharepointFileNameAndPathMaxCharacters = 298;

        public TemplatePlugin()
            : base(typeof(TemplatePlugin), runAsSystem: true)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            var pluginExecutionContext = localContext.PluginExecutionContext;
            var templatePath = (string)pluginExecutionContext.InputParameters["TemplatePath"];
            var xmlData = (string)pluginExecutionContext.InputParameters["XMLData"];
            var caseFolderPath = (string)pluginExecutionContext.InputParameters["CaseFolderPath"];
            var accessToken = (string)pluginExecutionContext.InputParameters["AccessToken"];
            var documentName = (string)pluginExecutionContext.InputParameters["DocumentName"];

            try
            {
                pluginExecutionContext.OutputParameters["Result"] = GenerateDocumentFromTemplate(templatePath, xmlData, caseFolderPath, accessToken, documentName);
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. Template: {ex.Message}", ex);
            }
        }

        private string GenerateDocumentFromTemplate(string templatePath, string xmlData, string caseFolderPath, string accessToken, string documentName)
        {
            documentName = GetValidDocumentName(documentName, caseFolderPath, sharepointFileNameAndPathMaxCharacters);

            var getUrl = $"{SharePointWebAPIUrl}/getfilebyserverrelativeurl('{templatePath}')/$value";
            var postUrl = $"{SharePointWebAPIUrl}/GetFolderByServerRelativeUrl('{caseFolderPath}')/Files/add(url='{documentName}.docx',overwrite=true)";

            var httpWebRequest = (HttpWebRequest)WebRequest.Create(getUrl);
            httpWebRequest.Method = "GET";
            httpWebRequest.Headers.Add("Authorization", "Bearer " + accessToken);
            var httpWebResponse = (HttpWebResponse)httpWebRequest.GetResponse();

            using (MemoryStream memoryStream = new MemoryStream())
            {
                httpWebResponse.GetResponseStream().CopyTo(memoryStream);

                using (WordprocessingDocument wordDoc = WordprocessingDocument.Open(memoryStream, true))
                {
                    var mainPart = wordDoc.MainDocumentPart;
                    mainPart.DeleteParts(mainPart.CustomXmlParts);
                    var myXmlPart = mainPart.AddCustomXmlPart(CustomXmlPartType.CustomXml);

                    var byteArray = Encoding.UTF8.GetBytes(xmlData);

                    using (MemoryStream stream = new MemoryStream(byteArray)) myXmlPart.FeedData(stream);

                    wordDoc.Save();

                    byteArray = memoryStream.ToArray();

                    httpWebRequest = (HttpWebRequest)WebRequest.Create(postUrl);
                    httpWebRequest.Method = "POST";
                    httpWebRequest.Headers.Add("Authorization", "Bearer " + accessToken);
                    httpWebRequest.ContentLength = byteArray.Length;

                    using (Stream stream = httpWebRequest.GetRequestStream()) stream.Write(byteArray, 0, byteArray.Length);

                    // It is not necessary to get the response when creating the file, but I would like to use it to return a success or not to the action.
                    return ((HttpWebResponse)httpWebRequest.GetResponse()).StatusCode.ToString();
                }
            }
        }
        private string GetValidDocumentName(string name, string caseFolderPath, int maxLength)
        {
            // Remove SharePoint illegal characters
            name = Regex.Replace(name, "[*\\\\:<>?/|\"#%']", string.Empty);

            var nameMaxChar = maxLength - caseFolderPath.Length;

            // Shorten the name of the file if it's too long
            if (name.Length > nameMaxChar)
            {
                // Truncate the filename.
                name = name.Substring(0, nameMaxChar);
            }

            return name;
        }
    }
}
