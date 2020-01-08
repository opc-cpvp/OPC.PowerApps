using System.Xml;
using System.Xml.Serialization;

namespace Compliance.Package.Configuration
{
    public class ConfigSolutionFile
    {
        [XmlAttribute("solutionpackagefilename")]
        public string SolutionPackageFileName { get; set; }

        [XmlAttribute("overwriteunmanagedcustomizations")]
        public bool OverwriteUnmanagedCustomizations { get; set; } = false;

        [XmlAttribute("publishworkflowsandactivateplugins")]
        public bool PublishWorkflowsAndActivatePlugins { get; set; } = true;
    }
}
