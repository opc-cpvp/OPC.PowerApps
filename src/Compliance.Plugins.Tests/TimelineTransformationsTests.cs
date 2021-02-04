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

            [Theory(DisplayName = "modified by should be replaced with created by"), MemberData(nameof(Annotations))]
            public void modified_by_should_be_replaced_with_created_by(Annotation annotation)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { OutputParameter.BusinessEntity, annotation } };
                pluginContext.MessageName = PluginMessage.Retrieve;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                annotation.ModifiedBy.Should().Be(annotation.CreatedBy);
            }

            [Theory(DisplayName = "modified on should be replaced with created on"), MemberData(nameof(Annotations))]
            public void modified_on_should_be_replaced_with_created_on(Annotation annotation)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { OutputParameter.BusinessEntity, annotation } };
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

            [Theory(DisplayName = "modified by should be replaced with created by"), MemberData(nameof(AnnotationCollection))]
            public void modified_by_should_be_replaced_with_created_by(EntityCollection annotationCollection)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { OutputParameter.BusinessEntityCollection, annotationCollection } };
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var annotations = annotationCollection.Entities.Select(e => e.ToEntity<Annotation>());
                annotations.All(a => a.ModifiedBy == a.CreatedBy).Should().BeTrue();
            }

            [Theory(DisplayName = "modified on should be replaced with created on"), MemberData(nameof(AnnotationCollection))]
            public void modified_on_should_be_replaced_with_created_on(EntityCollection annotationCollection)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { OutputParameter.BusinessEntityCollection, annotationCollection } };
                pluginContext.MessageName = PluginMessage.RetrieveMultiple;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var annotations = annotationCollection.Entities.Select(e => e.ToEntity<Annotation>());
                annotations.All(a => a.ModifiedOn == a.CreatedOn).Should().BeTrue();
            }

            [Theory(DisplayName = "annotations should be sorted by created in descending order"), MemberData(nameof(AnnotationCollection))]
            public void annotations_should_be_sorted_by_created_in_descending_order(EntityCollection annotationCollection)
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection { { OutputParameter.BusinessEntityCollection, annotationCollection } };
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
            [Fact(DisplayName = "state code attribute should be removed from FetchXML")]
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

            [Fact(DisplayName = "FetchXML shouldn't throw if null")]
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
            private const string TimelineRecords = @"{
  'Entities': [
    {
      'LogicalName': 'activitypointer',
      'Id': '7554587c-e0e3-ea11-a813-000d3af46489',
      'Attributes': [
        {
          'Key': 'opc_event_createdonbehalfby',
          'Value': {
            'AttributeLogicalName': 'createdonbehalfby',
            'EntityLogicalName': 'opc_event',
            'Value': {
              'Id': 'b0274fa3-c407-ea11-a811-000d3af40c1d',
              'LogicalName': 'systemuser',
              'Name': 'Joey Delany',
              'KeyAttributes': [],
              'RowVersion': null
            },
            'NeedFormatting': true,
            'ReturnType': 7
          }
        },
        {
          'Key': 'ownerid',
          'Value': {
            'Id': '592DD628-4E43-43AF-9266-F3CF111F09EE',
            'LogicalName': 'systemuser',
            'Name': 'Sarah Heinz',
            'KeyAttributes': [],
            'RowVersion': null
          }
        }
      ],
      'EntityState': null,
      'FormattedValues': [],
      'RelatedEntities': [],
      'RowVersion': '16099215',
      'KeyAttributes': []
    },
    {
      'LogicalName': 'activitypointer',
      'Id': '7554587c-e0e3-ea11-a813-000d3af46489',
      'Attributes': [
        {
          'Key': 'opc_event_createdonbehalfby',
          'Value': {
            'AttributeLogicalName': 'createdonbehalfby',
            'EntityLogicalName': 'opc_event',
            'Value': {
              'Id': 'A496421F-6A09-46A3-B44B-1098CCD8038C',
              'LogicalName': 'systemuser',
              'Name': 'Scott Hamilton',
              'KeyAttributes': [],
              'RowVersion': null
            },
            'NeedFormatting': true,
            'ReturnType': 7
          }
        },
        {
          'Key': 'ownerid',
          'Value': {
            'Id': 'BB250613-3585-41A8-A4D1-E2B8586EB3AF',
            'LogicalName': 'systemuser',
            'Name': 'Jean Guy',
            'KeyAttributes': [],
            'RowVersion': null
          }
        }
      ],
      'EntityState': null,
      'FormattedValues': [],
      'RelatedEntities': [],
      'RowVersion': '16099215',
      'KeyAttributes': []
    }
  ],
  'MoreRecords': true,
  'PagingCookie': '',
  'MinActiveRowVersion': '-1',
  'TotalRecordCount': -1,
  'TotalRecordCountLimitExceeded': false,
  'EntityName': 'activitypointer'
}";

            [Fact(DisplayName = "owners should be replaced by created on behalf")]
            public void owners_should_be_replaced_by_created_on_behalf()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                pluginContext.OutputParameters = new ParameterCollection {
                    { OutputParameter.TimelineWallRecords, TimelineRecords },
                };

                pluginContext.MessageName = PluginMessage.RetrieveTimelineWallRecords;

                // Act
                context.ExecutePluginWith<TimelineTransformationsPlugin>(pluginContext);

                // Assert
                var serializer = new JavaScriptSerializer();
                var timelineWallRecords = serializer.Deserialize<TimelineRecords>(pluginContext.OutputParameters[OutputParameter.TimelineWallRecords].ToString());

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


