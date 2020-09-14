using DocumentFormat.OpenXml.Packaging;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Compliance.Plugins
{
    public class SharePointService
    {
        // This number includes the frontslash separating the CaseFolderPath and the actual FileName AND the .docx extension
        private const int sharepointFileNameAndPathMaxCharacters = 298;

        public SharePointService()
        { }

        public virtual async Task<Stream> GetDocumentAsStream(string accessToken, string sharePointSiteUrl, string documentPath)
        {
            var getUrl = $"{sharePointSiteUrl}_api/web/getfilebyserverrelativeurl('{documentPath}')/$value";

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

                var response = await client.GetAsync(getUrl);
                response.EnsureSuccessStatusCode();

                return await response.Content.ReadAsStreamAsync();
            }
        }

        public virtual async Task AddFileToSharePoint(string accessToken, string sharePointSiteUrl, string folderPath, string documentName, byte[] content)
        {
            documentName = GetValidDocumentName(documentName, folderPath);
            var postUrl = $"{sharePointSiteUrl}_api/web/GetFolderByServerRelativeUrl('{folderPath}')/Files/add(url='{documentName}.docx',overwrite=true)";

            using (var client = new HttpClient())
            using (var byteArray = new ByteArrayContent(content, 0, content.Length))
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

                var response = await client.PostAsync(postUrl, byteArray);
                response.EnsureSuccessStatusCode();
            }
        }

        public virtual string GetValidDocumentName(string name, string caseFolderPath)
        {
            // Remove SharePoint illegal characters
            name = Regex.Replace(name, "[*\\\\:<>?/|\"#%']", string.Empty);

            var nameMaxChar = sharepointFileNameAndPathMaxCharacters - caseFolderPath.Length;

            // Shorten the name of the file if it's too long
            if (name.Length > nameMaxChar)
            {
                // Truncate the filename.
                name = name.Substring(0, nameMaxChar);
            }

            return name;
        }

        public virtual byte[] GenerateDocumentFromTemplate(Stream templateStream, string xmlData)
        {

            using (MemoryStream memoryStream = new MemoryStream())
            {
                templateStream.CopyTo(memoryStream);

                using (WordprocessingDocument wordDoc = WordprocessingDocument.Open(memoryStream, true))
                {
                    var mainPart = wordDoc.MainDocumentPart;
                    mainPart.DeleteParts(mainPart.CustomXmlParts);
                    var myXmlPart = mainPart.AddCustomXmlPart(CustomXmlPartType.CustomXml);

                    var byteArray = Encoding.UTF8.GetBytes(xmlData);

                    using (MemoryStream stream = new MemoryStream(byteArray))
                    {
                        myXmlPart.FeedData(stream);
                    }

                    wordDoc.Save();
                    byteArray = memoryStream.ToArray();

                    return byteArray;
                }
            }
        }
    }
}
