using Compliance.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using System;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using Microsoft.Xrm.Sdk.Query;

namespace Compliance.Plugins.Tests
{
    public class DuplicateMergeUpdateStatusPluginTests
    {
        public class when_merging_contacts
        {
            public static string MasterContactId = "A88AABE1-95B8-40E8-9611-400B801E9A36";

            public static Contact TestMasterContact
            {
                get
                {
                    return new Contact()
                    {
                        ContactId = Guid.Parse(MasterContactId),
                        opc_duplicatedetectionresult = new OptionSetValue((int)opc_duplicatedetectionresult.Potentialduplicate)
                    };
                }
            }

            [Fact]
            public void the_master_contact_records_duplicate_status_should_be_changed_to_none()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                context.Initialize(new[] { TestMasterContact });

                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference(Contact.EntityLogicalName, Guid.Parse(MasterContactId)) },
                };

                pluginContext.MessageName = PluginMessage.Merge;

                // Act
                context.ExecutePluginWith<DuplicateMergeUpdateStatusPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().Retrieve
                (
                    Contact.EntityLogicalName, Guid.Parse(MasterContactId), new ColumnSet("contactid", "opc_duplicatedetectionresult")
                )
                .ToEntity<Contact>().opc_duplicatedetectionresult.Value.Should().Be((int)opc_duplicatedetectionresult.None);
            }
        }
    }
}

