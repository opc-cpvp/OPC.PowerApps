using System;
using System.Collections.Generic;
using Compliance.Plugins.Entities;
using FakeXrmEasy;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class CompliancePrefixPluginTests
    {
        [Fact]
        public void ComplaintNumberIsPrefixedWithLegislationAcronym()
        {
            // Arrange
            var context = new XrmFakedContext();

            var legislation = new opc_legislation
            {
                Id = Guid.NewGuid(),
                opc_acronym = "PA",
                opc_name = "Privacy Act"
            };

            var complaint = new opc_complaint
            {
                Id = Guid.NewGuid(),
                opc_number = "0000100",
                opc_legislation = legislation.ToEntityReference()
            };

            context.Initialize(new List<Entity> { complaint, legislation });

            var plugin = new ComplaintPrefixPlugin();

            // Act
            context.ExecutePluginWithTarget(plugin, complaint, "Create");

            // Assert
            Assert.Equal("PA-0000100", complaint.opc_number);
        }
    }
}


