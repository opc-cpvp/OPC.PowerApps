using Compliance.Package.Configuration;
using Microsoft.Xrm.Tooling.PackageDeployment.CrmPackageExtentionBase;
using System.IO;
using System.Xml.Serialization;

namespace Compliance.Package.Extensions
{
    public static class ImportExtensionExtensions
    {
        public static ConfigDataStorage LoadConfiguration(this ImportExtension importExtension)
        {
            var importConfigPath = Path.Combine(importExtension.CurrentPackageLocation, importExtension.GetImportPackageDataFolderName, "ImportConfig.xml");
            if (!File.Exists(importConfigPath))
            {
                throw new FileNotFoundException("Failed to find the Import Configuration file.", importConfigPath);
            }

            using (var stream = File.OpenRead(importConfigPath))
            {
                var serializer = new XmlSerializer(typeof(ConfigDataStorage));
                return (ConfigDataStorage)serializer.Deserialize(stream);
            }
        }
    }
}
