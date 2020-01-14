using Compliance.Package.Configuration;
using Compliance.Package.Extensions;
using Microsoft.Xrm.Tooling.PackageDeployment.CrmPackageExtentionBase;

namespace Compliance.Package.Deployment
{
    public abstract class SolutionDeployment
    {
        public ImportExtension ImportExtension { get; private set; }
        public ConfigDataStorage Configuration { get; private set; }

        protected SolutionDeployment(ImportExtension importExtension)
        {
            ImportExtension = importExtension;
            Configuration = importExtension.LoadConfiguration();
        }

        public abstract bool AfterPrimaryImport();
        public abstract bool BeforeImportStage();
    }
}
