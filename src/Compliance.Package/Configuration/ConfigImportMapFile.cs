using System.Xml;
using System.Xml.Serialization;

namespace Compliance.Package.Configuration
{
    class ConfigImportMapFile
    {
        [XmlAttribute("filename")]
        public string FileName { get; set; }
    }
}