using System.Collections.Generic;
using System.Xml;
using System.Xml.Serialization;

namespace Compliance.Package.Configuration
{
    [XmlRoot("configdatastorage")]
    class ConfigDataStorage
    {
        [XmlAttribute("installsampledata")]
        public bool InstallSampleData { get; set; } = false;

        [XmlAttribute("waitforsampledatatoinstall")]
        public bool WaitForSampleDataToInstall { get; set; } = true;

        [XmlAttribute("agentdesktopzipfile")]
        public string AgentDesktopZipFile { get; set; }

        [XmlAttribute("agentdesktopexename")]
        public string AgentDesktopExeName { get; set; }

        [XmlAttribute("crmmigdataimportfile")]
        public string CrmMigrationDataImportFile { get; set; }

        [XmlArray("solutions")]
        [XmlArrayItem("configsolutionfile", typeof(ConfigSolutionFile))]
        public List<ConfigSolutionFile> Solutions { get; set; }

        [XmlArray("filestoimport")]
        [XmlArrayItem("configimportfile", typeof(ConfigImportFile))]
        [XmlArrayItem("zipimportdetails", typeof(ZipImportDetail))]
        public List<object> FilesToImport { get; set; }

        [XmlArray("filesmapstoimport")]
        [XmlArrayItem("configimportmapfile", typeof(ConfigImportMapFile))]
        public List<ConfigImportMapFile> FilesMapsToImport { get; set; }
    }
}
