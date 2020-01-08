using System;
using System.Xml;
using System.Xml.Serialization;

namespace Compliance.Package.Configuration
{
    public class ConfigImportFile
    {
        [XmlAttribute("filename")]
        public string FileName { get; set; }

        [XmlAttribute("filetype")]
        public string FileType { get; set; }

        [XmlAttribute("associatedmap")]
        public string AssociatedMap { get; set; }

        [XmlAttribute("importtoentity")]
        public string ImportToEntity { get; set; }

        [XmlAttribute("datadelimiter")]
        public string DateDelimiter { get; set; }

        [XmlAttribute("fielddelimiter")]
        public string FieldDelimiter { get; set; }

        [XmlAttribute("enableduplicatedetection")]
        public bool EnableDuplicateDetection { get; set; } = false;

        [XmlAttribute("isfirstrowheader")]
        public bool IsFirstRowHeader { get; set; } = false;

        [XmlAttribute("isrecordownerateam")]
        public bool IsRecordOwnerATeam { get; set; } = false;

        [XmlAttribute("owneruser")]
        public Guid OwnerUser { get; set; } = Guid.Empty;

        [XmlAttribute("waitforimporttocomplete")]
        public bool WaitForImportToComplete { get; set; } = true;
    }
}
