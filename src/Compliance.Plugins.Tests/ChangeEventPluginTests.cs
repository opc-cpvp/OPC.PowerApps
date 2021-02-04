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
    public class ChangeEventPluginTests
    {
        public class when_updating_entity_with_tracked_field
        {
            public static Entity PreImageEntity
            {
                get
                {
                    return new Entity("opc_complaint", Guid.NewGuid())
                    {
                        Attributes = new AttributeCollection()
                        {
                            { "ownerid",  new EntityReference("systemuser", Guid.Parse("1BB42A40-DE6B-4308-AB10-7DBD895FFEFF") ) { Name = "John Doe"} }
                        }
                    };
                }
            }

            public static string TestUserId = "6cecee3c-ca7d-4072-ba17-502e8cb6a29a";
            public static Entity TestUser
            {
                get => new Entity("systemuser", Guid.Parse(TestUserId));
            }

            [Fact(DisplayName = "an event should be created for tracked changed field")]
            public void an_event_should_be_created_for_tracked_changed_field()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                context.Initialize(new[] {
                    TestUser
                });

                var preImageEntity = PreImageEntity;
                var postImageEntity = new Entity("opc_complaint", Guid.NewGuid())
                {
                    Attributes = new AttributeCollection()
                    {
                        { "ownerid",  new EntityReference("systemuser", Guid.NewGuid() ) { Name = "Johna Doey"} }
                    }
                };

                pluginContext.PreEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", preImageEntity));
                pluginContext.PostEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", postImageEntity));
                pluginContext.InitiatingUserId = TestUser.Id;
                context.AddRelationship("opc_complaint_opc_events", new XrmFakedRelationship("opc_complaint_opc_events", "opc_complaint_opc_events", "opc_complaint", "opc_event"));
                pluginContext.InputParameters = new ParameterCollection {
                    { InputParameter.Target, new EntityReference("opc_complaint", preImageEntity.Id) },
                };

                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<ChangeEventPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression(opc_event.EntityLogicalName)
                {
                    ColumnSet = new ColumnSet(false)
                }).Entities.Count.Should().Be(1);
            }

            [Fact(DisplayName = "two events should be created for two tracked changed fields")]
            public void two_events_should_be_created_for_two_tracked_changed_fields()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                context.Initialize(new[] {
                    TestUser
                });

                var preImageEntity = new Entity("opc_complaint", Guid.NewGuid())
                {
                    Attributes = new AttributeCollection()
                    {
                        { "ownerid",  new EntityReference("systemuser", Guid.NewGuid() ) { Name = "John Doe"} },
                        { nameof(opc_complaint.opc_intakeofficer),  new EntityReference("systemuser", Guid.NewGuid() ) { Name = "John Doe 2"} }
                    }
                };

                var postImageEntity = new Entity("opc_complaint", Guid.NewGuid())
                {
                    Attributes = new AttributeCollection()
                    {
                        { "ownerid",  new EntityReference("systemuser", Guid.NewGuid() ) { Name = "Johna Doey"} },
                        { "opc_intakeofficer",  new EntityReference("systemuser", Guid.NewGuid() ) { Name = "Johna Doey 2"} }
                    }
                };

                pluginContext.PreEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", preImageEntity));
                pluginContext.PostEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", postImageEntity));
                pluginContext.InitiatingUserId = TestUser.Id;
                context.AddRelationship("opc_complaint_opc_events", new XrmFakedRelationship("opc_complaint_opc_events", "opc_complaint_opc_events", "opc_complaint", "opc_event"));
                pluginContext.InputParameters = new ParameterCollection {
                    { InputParameter.Target, new EntityReference("opc_complaint", Guid.NewGuid()) },
                };

                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<ChangeEventPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression(opc_event.EntityLogicalName)
                {
                    ColumnSet = new ColumnSet(false)
                }).Entities.Count.Should().Be(2);
            }

            [Fact(DisplayName = "an event should not be created for tracked field with no changes")]
            public void an_event_should_not_be_created_for_tracked_field_with_no_changes()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();

                var preImageEntity = PreImageEntity;
                var postImageEntity = PreImageEntity;

                pluginContext.PreEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", preImageEntity));
                pluginContext.PostEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", postImageEntity));
                context.AddRelationship("opc_complaint_opc_events", new XrmFakedRelationship("opc_complaint_opc_events", "opc_complaint_opc_events", "opc_complaint", "opc_event"));
                pluginContext.InputParameters = new ParameterCollection {
                    { InputParameter.Target, new EntityReference("opc_complaint", preImageEntity.Id) },
                };

                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<ChangeEventPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression(opc_event.EntityLogicalName)
                {
                    ColumnSet = new ColumnSet(false)
                }).Entities.Count.Should().Be(0);
            }

            [Fact(DisplayName = "an event should not be created for non tracked changed field")]
            public void an_event_should_not_be_created_for_non_tracked_changed_field()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid complaintId, preOwnerId, postOwnerId;

                var preImageEntity = new Entity("opc_complaint", complaintId = Guid.NewGuid())
                {
                    Attributes = new AttributeCollection()
                    {
                        { nameof(opc_complaint.opc_complainantrep),  new EntityReference("Contact", preOwnerId = Guid.NewGuid() ) { Name = "John Doe"} }
                    }
                };

                var postImageEntity = new Entity("opc_complaint", complaintId = Guid.NewGuid())
                {
                    Attributes = new AttributeCollection()
                    {
                        { nameof(opc_complaint.opc_complainantrep),  new EntityReference("Contact", postOwnerId = Guid.NewGuid() ) { Name = "Johna Doey"} }
                    }
                };

                pluginContext.PreEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", preImageEntity));
                pluginContext.PostEntityImages.Add(new KeyValuePair<string, Entity>("EntityImages", postImageEntity));
                context.AddRelationship("opc_complaint_opc_events", new XrmFakedRelationship("opc_complaint_opc_events", "opc_complaint_opc_events", "opc_complaint", "opc_event"));
                pluginContext.InputParameters = new ParameterCollection {
                    { InputParameter.Target, new EntityReference("opc_complaint", complaintId) },
                };

                pluginContext.MessageName = PluginMessage.Update;

                // Act
                context.ExecutePluginWith<ChangeEventPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression(Annotation.EntityLogicalName)
                {
                    ColumnSet = new ColumnSet(false)
                }).Entities.Count.Should().Be(0);
            }
        }
    }
}
