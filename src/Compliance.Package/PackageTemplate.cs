using Compliance.Entities;
using Compliance.Package.Configuration;
using Microsoft.Uii.Common.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.PackageDeployment.CrmPackageExtentionBase;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;
using System.Xml.XPath;

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
            var importConfigPath = Path.Combine(CurrentPackageLocation, GetImportPackageDataFolderName, "ImportConfig.xml");
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

            var rootBusinessUnit = GetRootBusinessUnit();

            if (rootBusinessUnit is null)
            {
                var message = "Failed to find Root Business Unit.";
                RaiseFailEvent(message, new NullReferenceException(message));
                return false;
            }

            var dataImportPath = Path.Combine(CurrentPackageLocation, GetImportPackageDataFolderName, _configuration.CrmMigrationDataImportFile);
            if (!File.Exists(dataImportPath))
            {
                var message = "Failed to find the CRM Migration Data file.";
                RaiseFailEvent(message, new FileNotFoundException(message, dataImportPath));
                return false;
            }

            var dataEntry = @"data.xml";
            using (var zipArchive = ZipFile.Open(dataImportPath, ZipArchiveMode.Update))
            {
                var zipEntry = zipArchive.GetEntry(dataEntry);

                if (zipEntry is null)
                {
                    var message = $"Failed to find {dataEntry} in the CRM Migration Data file.";
                    RaiseFailEvent(message, new FileNotFoundException(message, dataEntry));
                    return false;
                }

                XDocument document;
                using (var stream = zipEntry.Open())
                {
                    document = XDocument.Load(stream, LoadOptions.None);
                }

                if (document is null)
                {
                    var message = $"Failed to read {dataEntry}.";
                    RaiseFailEvent(message, new XmlException(message));
                    return false;
                }

                var businessUnits = document.XPathSelectElements($"/entities/entity[@name='{BusinessUnit.EntityLogicalName}']/records/record");
                foreach (var businessUnit in businessUnits)
                {
                    var fields = businessUnit.XPathSelectElements("./field");
                    foreach (var field in fields)
                    {
                        var name = field.Attribute("name").Value;

                        if (name != "parentbusinessunitid")
                            continue;

                        field.Attribute("value").SetValue(rootBusinessUnit.Id);
                        field.Attribute("lookupentityname").SetValue(rootBusinessUnit.Name);
                    }
                }

                using (var stream = zipEntry.Open())
                using (var writer = XmlWriter.Create(stream, new XmlWriterSettings { OmitXmlDeclaration = true, Indent = true }))
                {
                    document.WriteTo(writer);
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
            CreateTeams();
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

        private BusinessUnit GetRootBusinessUnit()
        {
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

            return CrmSvc.RetrieveMultiple(query).Entities.FirstOrDefault()?.ToEntity<BusinessUnit>();
        }

        private void CreateTeams()
        {
            var securityGroups = new Dictionary<string, Guid>
            {
                { "Compliance - Breach Response Manager", new Guid("270578ac-92f2-48c2-a0dd-9961962cd293") },
                { "Compliance - Breach Response Officer", new Guid("10a1cb92-e8da-4ed6-b0ed-4ab5540ec152") },
                { "Compliance - Compliance Monitoring Officer", new Guid("f26d2b4c-4ffa-46b5-86f6-92c0767201be") },
                { "Compliance - Deputy Commissioner", new Guid("3db5337b-94d9-4f55-8101-cc2d90ecd528") },
                { "Compliance - Director", new Guid("fd9e31b5-ec0c-42e5-bf23-422f07896fe0") },
                { "Compliance - Early Resolution Manager", new Guid("89d87885-9597-4442-b50c-01012b10e4f3") },
                { "Compliance - Early Resolution Officer", new Guid("b12c491a-98c8-4124-8af9-4c79d66896ce") },
                { "Compliance - Executive Director", new Guid("15121890-abc0-41fe-a2be-413f084acaef") },
                { "Compliance - Intake Manager", new Guid("194707af-f01d-4984-b8e2-4d7b5d54d565") },
                { "Compliance - Intake Officer", new Guid("e02f8e5e-7fd9-4ff3-8a18-0e3f6592077e") },
                { "Compliance - Investigations Clerk", new Guid("7bdc5d18-af5b-4b0f-b530-52edf0dace7a") },
                { "Compliance - Investigations Manager", new Guid("b91c2125-d4ac-4f63-b06d-4701df6f941e") },
                { "Compliance - Privacy Investigator", new Guid("ad098b38-ca02-445c-8b46-13444a6f06b8") },
                { "Compliance - Senior Advisor", new Guid("cca9d11b-6d4a-4c5f-b562-cb25880dd2ef") },
                { "Compliance - Senior Case Analyst", new Guid("ab1dbf17-b83e-4e1f-9f97-175a0b2f70de") },
                { "Compliance - Senior Privacy Investigator", new Guid("e8a747b2-12a5-4def-a1db-ccb09561e187") },
                { "Compliance - Strategic Advisor", new Guid("e46a895e-137e-48e7-b413-466dcd34ef43") }
            };

            var rootBusinessUnit = GetRootBusinessUnit();
            foreach (var securityGroup in securityGroups)
            {
                var name = securityGroup.Key;
                var azureActiveDirectoryObjectId = securityGroup.Value;

                var teamQuery = new QueryExpression
                {
                    EntityName = Team.EntityLogicalName,
                    ColumnSet = new ColumnSet("name", "azureactivedirectoryobjectid"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("azureactivedirectoryobjectid", ConditionOperator.Equal, azureActiveDirectoryObjectId)
                        }
                    }
                };

                var team = CrmSvc.RetrieveMultiple(teamQuery).Entities.FirstOrDefault()?.ToEntity<Team>();

                if (team != null)
                    continue;

                team = new Team
                {
                    Name = name,
                    TeamType = new OptionSetValue((int)TeamTeamType.AADSecurityGroup),
                    BusinessUnitId = new EntityReference(BusinessUnit.EntityLogicalName, rootBusinessUnit.Id),
                    AzureActiveDirectoryObjectId = azureActiveDirectoryObjectId
                };

                var roleQuery = new QueryExpression
                {
                    EntityName = Role.EntityLogicalName,
                    ColumnSet = new ColumnSet("name", "roleid"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("name", ConditionOperator.Equal, name)
                        }
                    }
                };

                var role = CrmSvc.RetrieveMultiple(roleQuery).Entities;
                var roleCollection = new EntityCollection(role)
                {
                    EntityName = Role.EntityLogicalName
                };

                var relationship = new Relationship("teamroles_association");
                team.RelatedEntities.Add(relationship, roleCollection);

                CrmSvc.Create(team);
            }
        }
    }
}
