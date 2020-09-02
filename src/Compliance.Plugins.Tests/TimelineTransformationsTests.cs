using Compliance.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using System;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using System.IO;
using System.Web.Script.Serialization;

namespace Compliance.Plugins.Tests
{
    public class TimelineTransformationsTests
    {
        public static TimelineTransformationsPlugin pluginInstance = null;

        public static TimelineTransformationsPlugin PluginInstance =>
            pluginInstance ?? (pluginInstance = new TimelineTransformationsPlugin());

        public class when_retrieving_an_annotation
        {
            public static IEnumerable<object[]> Annotations
            {
                get
                {
                    return new[]
                    {
                        new object[] {
                            new Entity {
                                Id = Guid.NewGuid(),
                                LogicalName = Annotation.EntityLogicalName,
                                Attributes = new AttributeCollection() {
                                    new KeyValuePair<string, object>("subject", "Subject"),
                                    new KeyValuePair<string, object>("notetext", "Note"),
                                    new KeyValuePair<string, object>("createdby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                    new KeyValuePair<string, object>("createdon", DateTime.Now.AddDays(-1)),
                                    new KeyValuePair<string, object>("modifiedby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                    new KeyValuePair<string, object>("modifiedon", DateTime.Now)
                                }
                            }.ToEntity<Annotation>()
                        }
                    };
                }
            }

            [Theory, MemberData(nameof(Annotations))]
            public void modified_by_should_be_replaced_with_created_by(Annotation annotation)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { "BusinessEntity", annotation } };
                pluginContext.MessageName = PluginMessage.Retrieve;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                annotation.ModifiedBy.Should().Be(annotation.CreatedBy);
            }

            [Theory, MemberData(nameof(Annotations))]
            public void modified_on_should_be_replaced_with_created_on(Annotation annotation)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { "BusinessEntity", annotation } };
                pluginContext.MessageName = PluginMessage.Retrieve;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                annotation.ModifiedOn.Should().Be(annotation.CreatedOn);
            }
        }

        public class when_retrieving_multiple_annotations
        {
            public static IEnumerable<object[]> AnnotationCollection
            {
                get
                {
                    return new[]
                    {
                        new object[] {
                            new EntityCollection()
                            {
                                Entities =
                                {
                                    new Entity
                                    {
                                        Id = Guid.NewGuid(),
                                        LogicalName = Annotation.EntityLogicalName,
                                        Attributes = new AttributeCollection()
                                        {
                                            new KeyValuePair<string, object>("subject", "Subject"),
                                            new KeyValuePair<string, object>("notetext", "Note"),
                                            new KeyValuePair<string, object>("createdby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                            new KeyValuePair<string, object>("createdon", DateTime.Now.AddDays(-3)),
                                            new KeyValuePair<string, object>("modifiedby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                            new KeyValuePair<string, object>("modifiedon", DateTime.Now)
                                        }
                                    }.ToEntity<Annotation>(),
                                    new Entity
                                    {
                                        Id = Guid.NewGuid(),
                                        LogicalName = Annotation.EntityLogicalName,
                                        Attributes = new AttributeCollection()
                                        {
                                            new KeyValuePair<string, object>("subject", "Subject 2"),
                                            new KeyValuePair<string, object>("notetext", "Note 2"),
                                            new KeyValuePair<string, object>("createdby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                            new KeyValuePair<string, object>("createdon", DateTime.Now.AddDays(-2)),
                                            new KeyValuePair<string, object>("modifiedby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                            new KeyValuePair<string, object>("modifiedon", DateTime.Now)
                                        }
                                    }.ToEntity<Annotation>(),
                                    new Entity
                                    {
                                        Id = Guid.NewGuid(),
                                        LogicalName = Annotation.EntityLogicalName,
                                        Attributes = new AttributeCollection()
                                        {
                                            new KeyValuePair<string, object>("subject", "Subject 3"),
                                            new KeyValuePair<string, object>("notetext", "Note 3"),
                                            new KeyValuePair<string, object>("createdby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                            new KeyValuePair<string, object>("createdon", DateTime.Now.AddDays(-1)),
                                            new KeyValuePair<string, object>("modifiedby", new EntityReference(SystemUser.EntityLogicalName, Guid.NewGuid())),
                                            new KeyValuePair<string, object>("modifiedon", DateTime.Now)
                                        }
                                    }.ToEntity<Annotation>()
                                }
                            }
                        }
                    };
                }
            }

            [Theory, MemberData(nameof(AnnotationCollection))]
            public void modified_by_should_be_replaced_with_created_by(EntityCollection annotationCollection)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { "BusinessEntityCollection", annotationCollection } };
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var annotations = annotationCollection.Entities.Select(e => e.ToEntity<Annotation>());
                annotations.All(a => a.ModifiedBy == a.CreatedBy).Should().BeTrue();
            }

            [Theory, MemberData(nameof(AnnotationCollection))]
            public void modified_on_should_be_replaced_with_created_on(EntityCollection annotationCollection)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { "BusinessEntityCollection", annotationCollection } };
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var annotations = annotationCollection.Entities.Select(e => e.ToEntity<Annotation>());
                annotations.All(a => a.ModifiedOn == a.CreatedOn).Should().BeTrue();
            }

            [Theory, MemberData(nameof(AnnotationCollection))]
            public void annotations_should_be_sorted_by_created_in_descending_order(EntityCollection annotationCollection)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { "BusinessEntityCollection", annotationCollection } };
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var annotations = annotationCollection.Entities.Select(e => e.ToEntity<Annotation>()).ToArray();
                annotations[0].Subject.Should().Be("Subject 3");
                annotations[1].Subject.Should().Be("Subject 2");
                annotations[2].Subject.Should().Be("Subject");
            }
        }

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
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                pluginContext.InputParameters["FetchXml"].ToString().Should().NotContain("<attribute name=\"statecode\"/>");
            }

            [Fact]
            public void fetchXml_should_not_throw_if_null()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.InputParameters = new ParameterCollection {
                    { "FetchXml", null },
                };

                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;

                // Act
                var ex = Record.Exception(() => context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext));

                // Assert
                ex.Should().Be(null);
            }
        }

        public class after_retrieving_timeline_wall_records_json
        {
            private readonly string TimelineRecords = File.ReadAllText("timelinerecords.json");

            [Fact]
            public void owners_should_be_replaced_by_created_on_behalf()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection {
                    { "TimelineWallRecords", TimelineRecords },
                };

                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var serializer = new JavaScriptSerializer();
                var timelineWallRecords = serializer.Deserialize<TimelineRecords>(pluginContext.OutputParameters["TimelineWallRecords"].ToString());

                foreach (var entity in timelineWallRecords.Entities)
                {
                    var owner = entity.Attributes.First(x => x.Key == "ownerid").Value;
                    var createdOnBehalf = entity.Attributes.First(x => x.Key == "opc_event_createdonbehalfby").Value["Value"];

                    Assert.Equal(createdOnBehalf["Id"], owner["Id"]);
                }
            }
        }
    }
}


