using System;
using Compliance.EarlyBound.Entities;
using FakeXrmEasy;
using FluentAssertions;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Xunit;

namespace Compliance.Plugins.Tests
{
    public class QueueMembershipPluginTests
    {
        public class when_a_team_is_associated_to_a_user
        {
            [Fact]
            public void team_queues_should_be_associated_to_user()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, targetUserGuid, queueGuid;

                context.Initialize(new[] {
                    new Entity("systemuser", targetUserGuid = Guid.NewGuid()),
                    new Entity("queue", queueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["teamid"] = targetTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Associate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("teammembership_association") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("systemuser", targetUserGuid) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, targetUserGuid)
                            }
                        }
                }).Entities.Count.Should().Be(1);
            }

            [Fact]
            public void team_queues_should_not_be_associated_to_users_who_are_member_through_another_team()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, targetUserGuid, queueGuid, startingTeamGuid;

                context.Initialize(new[] {
                    new Entity("systemuser", targetUserGuid = Guid.NewGuid()),
                    new Entity("queue", queueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new Entity("team", startingTeamGuid = Guid.NewGuid()),
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["teamid"] = targetTeamGuid },
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["teamid"] = startingTeamGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["systemuserid"] = targetUserGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = targetUserGuid, ["teamid"] = startingTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Associate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("teammembership_association") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("systemuser", targetUserGuid ) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, targetUserGuid)
                            }
                        }
                }).Entities.Count.Should().Be(1);
            }
        }

        public class when_a_team_is_dissociated_from_a_user
        {
            [Fact]
            public void team_queues_should_be_disassociated_from_user()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, targetUserGuid, queueGuid;

                context.Initialize(new[] {
                    new Entity("systemuser", targetUserGuid = Guid.NewGuid()),
                    new Entity("queue", queueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["teamid"] = targetTeamGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["systemuserid"] = targetUserGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = targetUserGuid, ["teamid"] = targetTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Disassociate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("teammembership_association") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("systemuser", targetUserGuid = Guid.NewGuid()) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, targetUserGuid)
                            }
                        }
                }).Entities.Count.Should().Be(0);

            }

            [Fact]
            public void team_queues_should_not_be_disassociated_from_users_who_are_member_through_another_team()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, targetUserGuid, queueGuid, startingTeamGuid;

                context.Initialize(new[] {
                    new Entity("systemuser", targetUserGuid = Guid.NewGuid()),
                    new Entity("queue", queueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new Entity("team", startingTeamGuid = Guid.NewGuid()),
                    new QueueMembership { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["systemuserid"] = targetUserGuid },
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["teamid"] = targetTeamGuid },
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = queueGuid, ["teamid"] = startingTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = targetUserGuid, ["teamid"] = targetTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = targetUserGuid, ["teamid"] = startingTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));


                pluginContext.MessageName = PluginMessage.Disassociate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("teammembership_association") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("systemuser", targetUserGuid) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, targetUserGuid)
                            }
                        }
                }).Entities.Count.Should().Be(1);

            }

        }

        public class when_a_queue_is_associated_to_a_team
        {
            [Fact]
            public void queue_should_be_associated_to_all_team_members()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, userGuid1, userGuid2, targetQueueGuid;

                context.Initialize(new[] {
                    new Entity("queue", targetQueueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new Entity("systemuser", userGuid1 = Guid.NewGuid()),
                    new Entity("systemuser", userGuid2 = Guid.NewGuid()),
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["teamid"] = targetTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["teamid"] = targetTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Associate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("opc_queues_teams_membership") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("queue", targetQueueGuid) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    Distinct = false,
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, new [] { userGuid1, userGuid2 })
                            }
                        }
                }).Entities.Count.Should().Be(2);

            }

            [Fact]
            public void queue_should_not_be_associated_to_users_who_are_member_through_another_team()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, startTeamGuid, userGuid1, userGuid2, targetQueueGuid;

                context.Initialize(new[] {
                    new Entity("queue", targetQueueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new Entity("team", startTeamGuid = Guid.NewGuid()),
                    new Entity("systemuser", userGuid1 = Guid.NewGuid()),
                    new Entity("systemuser", userGuid2 = Guid.NewGuid()),
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["teamid"] = targetTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["teamid"] = targetTeamGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["queueid"] = targetQueueGuid},
                    new QueueMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["queueid"] = targetQueueGuid },
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = targetQueueGuid, ["teamid"] = startTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Associate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("opc_queues_teams_membership") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("queue", targetQueueGuid) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    Distinct = false,
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, new [] { userGuid1, userGuid2 })
                            }
                        }
                }).Entities.Count.Should().Be(2);

            }
        }

        public class when_a_queue_is_disassociated_to_a_team
        {
            [Fact]
            public void queue_should_be_disassociated_from_all_team_members()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, userGuid1, userGuid2, targetQueueGuid;

                context.Initialize(new[] {
                    new Entity("queue", targetQueueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new Entity("systemuser", userGuid1 = Guid.NewGuid()),
                    new Entity("systemuser", userGuid2 = Guid.NewGuid()),
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["teamid"] = targetTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["teamid"] = targetTeamGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["queueid"] = targetQueueGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["queueid"] = targetQueueGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Disassociate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("opc_queues_teams_membership") },
                    { "RelatedEntities", new EntityReferenceCollection( new []{ new EntityReference("queue", targetQueueGuid) } ) }
                }; ;

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    Distinct = false,
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, new [] { userGuid1, userGuid2 })
                            }
                        }
                }).Entities.Count.Should().Be(0);

            }

            [Fact]
            public void queue_should_not_be_disassociated_from_users_who_are_member_through_another_team()
            {
                // Arrange
                var context = new XrmFakedContext();
                var pluginContext = context.GetDefaultPluginContext();
                Guid targetTeamGuid, userGuid1, userGuid2, targetQueueGuid, secondTeamGuid;

                context.Initialize(new[] {
                    new Entity("queue", targetQueueGuid = Guid.NewGuid()),
                    new Entity("team", targetTeamGuid = Guid.NewGuid()),
                    new Entity("team", secondTeamGuid = Guid.NewGuid()),
                    new Entity("systemuser", userGuid1 = Guid.NewGuid()),
                    new Entity("systemuser", userGuid2 = Guid.NewGuid()),
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["teamid"] = targetTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["teamid"] = targetTeamGuid },
                    new TeamMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["teamid"] = secondTeamGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid1, ["queueid"] = targetQueueGuid },
                    new QueueMembership { Id = Guid.NewGuid(), ["systemuserid"] = userGuid2, ["queueid"] = targetQueueGuid },
                    new opc_queues_teams { Id = Guid.NewGuid(), ["queueid"] = targetQueueGuid, ["teamid"] = secondTeamGuid }
                });
                context.AddRelationship("queuemembership_association", new XrmFakedRelationship("queuemembership", "queueid", "systemuserid", "queue", "systemuser"));

                pluginContext.MessageName = PluginMessage.Disassociate;
                pluginContext.InputParameters = new ParameterCollection {
                    { "Target", new EntityReference("team", targetTeamGuid) },
                    { "Relationship", new Relationship("opc_queues_teams_membership") },
                    { "RelatedEntities", new EntityReferenceCollection(new [] { new EntityReference("queue", targetQueueGuid) }) }
                };

                // Act
                context.ExecutePluginWith<QueueMemberShipPlugin>(pluginContext);

                // Assert
                context.GetOrganizationService().RetrieveMultiple(new QueryExpression("queuemembership")
                {
                    Distinct = false,
                    ColumnSet = new ColumnSet(false),
                    Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, new [] { userGuid1, userGuid2 })
                            }
                        }
                }).Entities.Count.Should().Be(1);

            }
        }
    }

}



