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
    public class RemoveTimelineCardStatusPluginTests
    {
        public class when_retrieving_timeline_wall_records
        {
            [Fact]
            public void state_code_attribute_should_be_removed_from_fetchXml()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = new ParameterCollection {
                    { "FetchXml", "<attribute name=\"testAttribute\"/> <attribute name=\"statecode\"/> <attribute name=\"testAttribute2\"/>" },
                };

                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;

                // Act
                context.ExecutePluginWith<RemoveTimelineCardStatusPlugin>(pluginContext);

                // Assert
                pluginContext.InputParameters["FetchXml"].Should().Be("<attribute name=\"testAttribute\"/>  <attribute name=\"testAttribute2\"/>");
            }

            [Fact]
            public void fetchXml_should_stay_null_if_null()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = new ParameterCollection {
                    { "FetchXml", null },
                };

                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;

                // Act
                context.ExecutePluginWith<RemoveTimelineCardStatusPlugin>(pluginContext);

                // Assert
                pluginContext.InputParameters["FetchXml"].Should().Be(null);
            }
        }
    }
}
