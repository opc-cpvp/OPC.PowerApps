namespace Compliance.Package.Deployment
{
    public abstract class SolutionDeployment
    {
        public PackageTemplate PackageTemplate { get; private set; }

        protected SolutionDeployment(PackageTemplate packageTemplate)
        {
            PackageTemplate = packageTemplate;
        }

        public abstract bool AfterPrimaryImport();
        public abstract bool BeforeImportStage();
    }
}
