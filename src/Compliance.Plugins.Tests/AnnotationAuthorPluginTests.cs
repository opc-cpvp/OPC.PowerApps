using Compliance.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using System;
using System.Linq;
using System.Collections.Generic;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class AnnotationAuthorPluginTests
    {
        public static AnnotationAuthorPlugin pluginInstance = null;

        public static AnnotationAuthorPlugin PluginInstance
        {
            get
            {
                if (pluginInstance is null)
                    pluginInstance = new AnnotationAuthorPlugin();

                return pluginInstance;
            }
        }

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
                context.ExecutePluginWith<AnnotationAuthorPlugin>(pluginContext);

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
                context.ExecutePluginWith<AnnotationAuthorPlugin>(pluginContext);

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
                                Entities = {
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
                                    }.ToEntity<Annotation>(),
                                    new Entity {
                                        Id = Guid.NewGuid(),
                                        LogicalName = Annotation.EntityLogicalName,
                                        Attributes = new AttributeCollection() {
                                            new KeyValuePair<string, object>("subject", "Subject 2"),
                                            new KeyValuePair<string, object>("notetext", "Note 2"),
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
                context.ExecutePluginWith<AnnotationAuthorPlugin>(pluginContext);

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
                context.ExecutePluginWith<AnnotationAuthorPlugin>(pluginContext);

                // Assert
                var annotations = annotationCollection.Entities.Select(e => e.ToEntity<Annotation>());
                annotations.All(a => a.ModifiedOn == a.CreatedOn).Should().BeTrue();
            }
        }
    }
}


