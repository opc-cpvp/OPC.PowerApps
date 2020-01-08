using System.Xml;
using System.Xml.Serialization;

namespace Compliance.Package.Configuration
{
    class ZipImportDetail
    {
        [XmlAttribute("filename")]
        public string FileName { get; set; }

        [XmlAttribute("filetype")]
        public string FileType { get; set; }

        [XmlAttribute("importtoentity")]
        public string ImportToEntity { get; set; }
    }
}