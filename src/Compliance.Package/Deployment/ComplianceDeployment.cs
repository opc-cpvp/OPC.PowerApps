using Compliance.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Xml;
using System.Xml.Linq;
using System.Xml.XPath;

namespace Compliance.Package.Deployment
{
    class ComplianceDeployment : SolutionDeployment
    {
        private BusinessUnit _rootBusinessUnit = null;

        private readonly Dictionary<string, Guid> _securityGroups = new Dictionary<string, Guid>
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

        private readonly List<string> _defaultDuplicateRulesToDelete = new List<string>()
        {
            "Accounts with the same website",
            "Social profiles with same full name and social channel"
        };

        public ComplianceDeployment(PackageTemplate packageTemplate) : base(packageTemplate)
        {
            _rootBusinessUnit = GetRootBusinessUnit();
        }

        /// <summary>
        /// Called After Import Completes.
        /// </summary>
        /// <returns></returns>
        public override bool AfterPrimaryImport()
        {
            CreateTeams();
            return true;
        }

        /// <summary>
        /// Called Before Import Completes.
        /// </summary>
        /// <returns></returns>
        public override bool BeforeImportStage()
        {
            UpdateImportDataBusinessUnits();
            DeleteDefaultDuplicateRules();
            return true;
        }

        /// <summary>
        /// Retrieves the Root Bussiness Unit from CRM.
        /// </summary>
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

            return PackageTemplate.CrmSvc.RetrieveMultiple(query).Entities.FirstOrDefault()?.ToEntity<BusinessUnit>();
        }

        private void DeleteDefaultDuplicateRules()
        {
            // Get the specified rules to be deleted
            var duplicateRuleQuery = new QueryExpression
            {
                EntityName = DuplicateRule.EntityLogicalName,
                ColumnSet = new ColumnSet("name", "duplicateruleid"),
                Criteria = new FilterExpression
                {
                    Conditions = {
                                    new ConditionExpression("name", ConditionOperator.In, _defaultDuplicateRulesToDelete),
                                 }
                }
            };

            var duplicateRulesToDelete = PackageTemplate.CrmSvc.RetrieveMultiple(duplicateRuleQuery).Entities;

            // Delete all the specific rules we found
            foreach (var duplicateRuleToDelete in duplicateRulesToDelete)
            {
                PackageTemplate.CrmSvc.Delete(DuplicateRule.EntityLogicalName, duplicateRuleToDelete.Id);
            }
        }

        /// <summary>
        /// Updates CRM Migration Data Business Units with the correct parent Bussiness Unit ID.
        /// </summary>
        private void UpdateImportDataBusinessUnits()
        {
            PackageTemplate.PackageLog.Log("Updating Import Data Business Units");

            // Ensure that the Root Business Unit is defined.
            if (_rootBusinessUnit is null)
                throw new NullReferenceException("Failed to find Root Business Unit.");

            var dataImportPath = Path.Combine(PackageTemplate.CurrentPackageLocation, PackageTemplate.GetImportPackageDataFolderName, PackageTemplate.Configuration.CrmMigrationDataImportFile);

            // Ensure that the CRM Import Data file exists.
            if (!File.Exists(dataImportPath))
                throw new FileNotFoundException("Failed to find the CRM Migration Data file.", dataImportPath);

            var dataEntry = @"data.xml";
            using (var zipArchive = ZipFile.Open(dataImportPath, ZipArchiveMode.Update))
            {
                var zipEntry = zipArchive.GetEntry(dataEntry);

                if (zipEntry is null)
                    throw new FileNotFoundException($"Failed to find {dataEntry} in the CRM Migration Data file.", dataEntry);

                // Load the CRM Import Data XML file.
                XDocument document;
                using (var stream = zipEntry.Open())
                {
                    document = XDocument.Load(stream, LoadOptions.None);
                }

                if (document is null)
                    throw new XmlException($"Failed to read {dataEntry}.");

                // Locate the Business Units that require updates.
                var businessUnits = document.XPathSelectElements($"/entities/entity[@name='{BusinessUnit.EntityLogicalName}']/records/record");
                foreach (var businessUnit in businessUnits)
                {
                    var fields = businessUnit.XPathSelectElements("./field");
                    foreach (var field in fields)
                    {
                        var name = field.Attribute("name").Value;

                        // Check if we're working with the correct field.
                        if (name != "parentbusinessunitid")
                            continue;

                        // Update the ID and Lookup Name.
                        field.Attribute("value").SetValue(_rootBusinessUnit.Id);
                        field.Attribute("lookupentityname").SetValue(_rootBusinessUnit.Name);
                    }
                }

                // Save the changes to the CRM Import Data file.
                using (var stream = zipEntry.Open())
                using (var writer = XmlWriter.Create(stream, new XmlWriterSettings { OmitXmlDeclaration = true, Indent = true }))
                {
                    document.WriteTo(writer);
                }
            }
        }

        /// <summary>
        /// Creates the required Teams in CRM.
        /// </summary>
        private void CreateTeams()
        {
            PackageTemplate.PackageLog.Log("Creating Teams");

            // Ensure that the Root Business Unit is defined.
            if (_rootBusinessUnit is null)
                throw new NullReferenceException("Failed to find Root Business Unit.");

            foreach (var securityGroup in _securityGroups)
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
                            new ConditionExpression
                            {
                                AttributeName = "azureactivedirectoryobjectid",
                                Operator = ConditionOperator.Equal,
                                Values = { azureActiveDirectoryObjectId }
                            }
                        }
                    }
                };

                // Check if the Team already exists.
                if (PackageTemplate.CrmSvc.RetrieveMultiple(teamQuery).Entities.Any())
                {
                    PackageTemplate.PackageLog.Log($"Skipping Team: {name}");
                    continue;
                }

                var team = new Team
                {
                    Name = name,
                    TeamType = TeamTeamType.AADSecurityGroup,
                    BusinessUnitId = new EntityReference(BusinessUnit.EntityLogicalName, _rootBusinessUnit.Id),
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

                // Find the associated Role.
                var role = PackageTemplate.CrmSvc.RetrieveMultiple(roleQuery).Entities.FirstOrDefault()?.ToEntity<Role>();

                if (role is null)
                    throw new NullReferenceException($"Failed to find a matching Role for '{name}'.");

                PackageTemplate.PackageLog.Log($"Creating Team: {name}");

                // Create the Team.
                Guid? teamId = null;
                try
                {
                    teamId = PackageTemplate.CrmSvc.Create(team);
                }
                catch (Exception)
                {
                    PackageTemplate.PackageLog.Log($"Failed to create AD Security Team: {name}");
                    PackageTemplate.PackageLog.Log($"Attempting to create Owner Team: {name}");

                    try
                    {
                        team = new Team
                        {
                            Name = name,
                            TeamType = TeamTeamType.Owner,
                            BusinessUnitId = new EntityReference(BusinessUnit.EntityLogicalName, _rootBusinessUnit.Id)
                        };
                        teamId = PackageTemplate.CrmSvc.Create(team);
                        PackageTemplate.PackageLog.Log($"Owner Team {name} created.");
                    }
                    catch (Exception ex) when (ex.Message.Contains("An object with the specified name already exists"))
                    {
                        PackageTemplate.PackageLog.Log($"Failed to create Owner Team '{name}' because it already exists");
                        PackageTemplate.PackageLog.Log($"Attempting to fetch Owner Team '{name}'");

                        var ownerTeamQuery = new QueryExpression
                        {
                            EntityName = Team.EntityLogicalName,
                            ColumnSet = new ColumnSet("name", "teamid"),
                            Criteria = new FilterExpression
                            {
                                Conditions = {
                                    new ConditionExpression("name", ConditionOperator.Equal, name)
                                }
                            }
                        };

                        teamId = PackageTemplate.CrmSvc.RetrieveMultiple(ownerTeamQuery).Entities.FirstOrDefault()?.ToEntity<Team>()?.TeamId;
                        PackageTemplate.PackageLog.Log($"Owner Team {name} fetched.");
                    }
                    catch (Exception ex)
                    {
                        PackageTemplate.PackageLog.Log($"Exception: {ex.Message}");
                    }
                }

                if (teamId == null)
                {
                    PackageTemplate.PackageLog.Log($"Could not create or retrieve team {name}... skipping.");
                    continue;
                }

                try
                {
                    // Associate the Role to the Team.
                    PackageTemplate.CrmSvc.Associate(
                        Team.EntityLogicalName,
                        (Guid)teamId,
                        new Relationship("teamroles_association"),
                        new EntityReferenceCollection() { new EntityReference(Role.EntityLogicalName, role.Id) }
                    );
                }
                catch (Exception ex) when (ex.Message.Contains("Cannot insert duplicate key"))
                {
                    PackageTemplate.PackageLog.Log($"Role association to team was already done for {name}... skipping.");
                }


            }
        }
    }
}