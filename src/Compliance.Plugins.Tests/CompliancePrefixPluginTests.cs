﻿using System;
using System.Collections.Generic;
using Compliance.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class CompliancePrefixPluginTests
    {
        public class when_creating_complaint
        {
            public static ComplaintPrefixPlugin pluginInstance = null;

            public static IEnumerable<object[]> Legislations
            {
                get
                {
                    return new[]
                    {
                        new object[] { new opc_legislation { Id = Guid.NewGuid(), opc_acronym = "PA", opc_name = "Privacy Act" } },
                        new object[] { new opc_legislation { Id = Guid.NewGuid(), opc_acronym = "PIPEDA", opc_name = "Personal Information Protection and Electronic Documents Act" } }
                    };
                }
            }

            public static ComplaintPrefixPlugin PluginInstance
            {
                get
                {
                    if (pluginInstance is null)
                        pluginInstance = new ComplaintPrefixPlugin();

                    return pluginInstance;
                }
            }

            [Theory(DisplayName = "complaint number should change"), MemberData(nameof(Legislations))]
            public void complaint_number_should_change(opc_legislation legislation)
            {
                // Arrange
                var context = new XrmFakedContext();

                var complaintNumber = "0000100";
                var complaint = new opc_complaint
                {
                    Id = Guid.NewGuid(),
                    opc_number = complaintNumber,
                    opc_legislation = legislation.ToEntityReference()
                };

                context.Initialize(new List<Entity> { complaint, legislation });

                // Act
                context.ExecutePluginWithTarget(PluginInstance, complaint, "Create");

                // Assert
                complaint.opc_number.Should().NotBe(complaintNumber);
            }

            [Theory(DisplayName = "complaint number should be prefixed with legislation"), MemberData(nameof(Legislations))]
            public void complaint_number_should_be_prefixed_with_legislation(opc_legislation legislation)
            {
                // Arrange
                var context = new XrmFakedContext();

                var complaintNumber = "0000100";
                var complaint = new opc_complaint
                {
                    Id = Guid.NewGuid(),
                    opc_number = complaintNumber,
                    opc_legislation = legislation.ToEntityReference()
                };

                context.Initialize(new List<Entity> { complaint, legislation });

                // Act
                context.ExecutePluginWithTarget(PluginInstance, complaint, "Create");

                // Assert
                complaint.opc_number.Should().Be($"{legislation.opc_acronym}-{complaintNumber}");
            }
        }
    }
}


