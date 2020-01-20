using System.Xml;
using System.Xml.Serialization;

namespace Compliance.Package.Configuration
{
    public class ConfigImportMapFile
    {
        [XmlAttribute("filename")]
        public string FileName { get; set; }
    }
}