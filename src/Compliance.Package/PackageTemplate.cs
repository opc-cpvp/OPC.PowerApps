using Compliance.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Uii.Common.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.PackageDeployment;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Tooling.PackageDeployment.CrmPackageExtentionBase;
using System.IO;
using System.Xml.Serialization;
using Compliance.Package.Configuration;
using System.IO.Compression;
using System.Xml.Linq;
using System.Xml.XPath;
using System.Xml;

namespace Compliance.Package
{
    /// <summary>
    /// Import package starter frame.
    /// </summary>
    [Export(typeof(IImportExtensions))]
    public class PackageTemplate : ImportExtension
    {
        private ConfigDataStorage _configuration;

        /// <summary>
        /// Called When the package is initialized.
        /// </summary>
        public override void InitializeCustomExtension()
        {
            // Load the configuration file
            var importConfigPath = Path.Combine(GetImportPackageDataFolderName, "ImportConfig.xml");
            if (!File.Exists(importConfigPath))
            {
                var message = "Failed to find the Import Configuration file.";
                RaiseFailEvent(message, new FileNotFoundException(message, importConfigPath));
                return;
            }

            using (var stream = File.OpenRead(importConfigPath))
            {
                var serializer = new XmlSerializer(typeof(ConfigDataStorage));
                _configuration = (ConfigDataStorage)serializer.Deserialize(stream);
            }
        }

        /// <summary>
        /// Called Before Import Completes.
        /// </summary>
        /// <returns></returns>
        public override bool BeforeImportStage()
        {
            if (_configuration is null)
            {
                var message = "Failed to read the Import Configuration file.";
                RaiseFailEvent(message, new NullReferenceException(message));
                return false;
            }

            if (string.IsNullOrEmpty(_configuration.CrmMigrationDataImportFile))
                return true;

            var query = new QueryExpression
            {
                EntityName = BusinessUnit.EntityLogicalName,
                ColumnSet = new ColumnSet("businessunitid", "name"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression
                        {
                            AttributeName = "parentbusinessunitid",
                            Operator = ConditionOperator.Null
                        }
                    }
                }
            };

            var rootBusinessUnit = CrmSvc.OrganizationServiceProxy.RetrieveMultiple(query).Entities.FirstOrDefault()?.ToEntity<BusinessUnit>();

            if (rootBusinessUnit is null)
            {
                var message = "Failed to find Root Business Unit.";
                RaiseFailEvent(message, new NullReferenceException(message));
                return false;
            }

            var dataImportPath = Path.Combine(GetImportPackageDataFolderName, _configuration.CrmMigrationDataImportFile);
            if (!File.Exists(dataImportPath))
            {
                var message = "Failed to find the CRM Migration Data file.";
                RaiseFailEvent(message, new FileNotFoundException(message, dataImportPath));
                return false;
            }

            var dataEntry = @"data.xml";
            using (var zipStream = File.OpenRead(dataImportPath))
            {
                using (var zipArchive = new ZipArchive(zipStream, ZipArchiveMode.Update))
                {
                    var zipEntry = zipArchive.Entries.FirstOrDefault(z => z.Name == dataEntry);

                    if (zipEntry is null) {
                        var message = $"Failed to find {dataEntry} in the CRM Migration Data file.";
                        RaiseFailEvent(message, new FileNotFoundException(message, dataEntry));
                        return false;
                    }

                    XDocument document;
                    using (var reader = zipEntry.Open())
                    {
                        document = XDocument.Load(reader, LoadOptions.None);
                    }

                    var businessUnits = document.XPathSelectElements($"/entities/entity[name='{BusinessUnit.EntityLogicalName}']/records/record");
                    foreach (var businessUnit in businessUnits)
                    {
                        var fields = businessUnit.XPathSelectElements("/field");
                        foreach (var field in fields)
                        {
                            var name = field.Attribute("name").Value;

                            if (name != "parentbusinessunitid")
                                continue;

                            field.Attribute("value").SetValue(rootBusinessUnit.Id);
                            field.Attribute("lookupentityname").SetValue(rootBusinessUnit.Name);
                        }
                    }

                    using (var writer = XmlWriter.Create(zipEntry.Open(), new XmlWriterSettings { OmitXmlDeclaration = true, Indent = true }))
                    {
                        document.WriteTo(writer);
                    }
                }
            }

            return true;
        }

        /// <summary>
        /// Called for each UII record imported into the system
        /// This is UII Specific and is not generally used by Package Developers
        /// </summary>
        /// <param name="app">App Record</param>
        /// <returns></returns>
        public override ApplicationRecord BeforeApplicationRecordImport(ApplicationRecord app)
        {
            return app;  // do nothing here.
        }

        /// <summary>
        /// Called during a solution upgrade while both solutions are present in the target CRM instance.
        /// This function can be used to provide a means to do data transformation or upgrade while a solution update is occurring.
        /// </summary>
        /// <param name="solutionName">Name of the solution</param>
        /// <param name="oldVersion">version number of the old solution</param>
        /// <param name="newVersion">Version number of the new solution</param>
        /// <param name="oldSolutionId">Solution ID of the old solution</param>
        /// <param name="newSolutionId">Solution ID of the new solution</param>
        public override void RunSolutionUpgradeMigrationStep(string solutionName, string oldVersion, string newVersion, Guid oldSolutionId, Guid newSolutionId)
        {

            base.RunSolutionUpgradeMigrationStep(solutionName, oldVersion, newVersion, oldSolutionId, newSolutionId);
        }

        /// <summary>
        /// Called after Import completes.
        /// </summary>
        /// <returns></returns>
        public override bool AfterPrimaryImport()
        {
            return true; // Do nothing here/
        }

        #region Properties

        /// <summary>
        /// Name of the Import Package to Use
        /// </summary>
        /// <param name="plural">if true, return plural version</param>
        /// <returns></returns>
        public override string GetNameOfImport(bool plural)
        {
            return "Package Short Name";
        }

        /// <summary>
        /// Folder Name for the Package data.
        /// </summary>
        public override string GetImportPackageDataFolderName
        {
            get
            {
                // WARNING this value directly correlates to the folder name in the Solution Explorer where the ImportConfig.xml and sub content is located.
                // Changing this name requires that you also change the correlating name in the Solution Explorer
                return "PkgFolder";
            }
        }

        /// <summary>
        /// Description of the package, used in the package selection UI
        /// </summary>
        public override string GetImportPackageDescriptionText
        {
            get { return "Package Description"; }
        }

        /// <summary>
        /// Long name of the Import Package.
        /// </summary>
        public override string GetLongNameOfImport
        {
            get { return "Package Long Name"; }
        }

        #endregion
    }
}
