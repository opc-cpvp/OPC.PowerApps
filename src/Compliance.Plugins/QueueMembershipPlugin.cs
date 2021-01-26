using Compliance.EarlyBound.Entities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Compliance.Plugins
{
    public partial class QueueMemberShipPlugin : PluginBase
    {
        public QueueMemberShipPlugin() : base(typeof(QueueMemberShipPlugin), runAsSystem: true)
        {
            // Triggered by the association/disassociation of a team to a a user
            // Triggered by the association/disassociation of a queue to a team
        }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            localContext.Trace($"Following action was regsitered: {localContext.PluginExecutionContext.MessageName}, the params are the following: {string.Join(",",localContext.PluginExecutionContext.InputParameters.Keys)}");

            try
            {
                // Those are the 3 input parameters for "Associate" and "Disassociate"
                if ((localContext.PluginExecutionContext.MessageName != PluginMessage.Associate && localContext.PluginExecutionContext.MessageName != PluginMessage.Disassociate) ||
                !(localContext.PluginExecutionContext.InputParameters["Target"] is EntityReference target) ||
                !(localContext.PluginExecutionContext.InputParameters["Relationship"] is Relationship relationship) ||
                !(localContext.PluginExecutionContext.InputParameters["RelatedEntities"] is EntityReferenceCollection refs))
                    return;

                if (relationship.SchemaName == "teammembership_association") HandleTeamMembership(localContext, target, refs);
                if (relationship.SchemaName == "opc_queues_teams_membership") HandleQueueMembership(localContext, target, refs);
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. MultiLanguage: {ex.Message}", ex);
            }
        }

        protected void HandleTeamMembership(LocalPluginContext localContext, EntityReference target, EntityReferenceCollection refs)
        {
            localContext.Trace($"Handling TeamMembership '{localContext.PluginExecutionContext.MessageName}' operation via 'teammembership_association'.");

            // Regardless of which side the relation was triggered; isolate teamIds and userIds
            Guid[] systemuserIds, affectedTeamIds, unaffectedTeamIds = null;
            systemuserIds = target.LogicalName == "systemuser" ? new[] { target.Id } : refs.Select(u => u.Id).ToArray();
            affectedTeamIds = target.LogicalName == "team" ? new[] { target.Id } : refs.Select(t => t.Id).ToArray();

            localContext.Trace($"There is {affectedTeamIds.Count()} affected teams ({string.Join(",", affectedTeamIds)})");
            localContext.Trace($"There is {systemuserIds.Count()} affected users ({string.Join(",", systemuserIds)})");

            // If it's a disassociate operation we will need all the teams associated to the user to ensure
            // the user does not have access through another team
            if (localContext.PluginExecutionContext.MessageName == PluginMessage.Disassociate)
            {
                // Build and execute fetch query to get all teams of the users which should not be affected by this change
                unaffectedTeamIds = FetchUnaffectedTeamsByUsers(localContext, systemuserIds, affectedTeamIds);
                localContext.Trace($"There is {unaffectedTeamIds.Count()} unaffected teams: {string.Join(",", unaffectedTeamIds)}");
            }

            // Build and execute fetch query to fetch all queues associated to teams but only keep the ones which are not referenced in unaffected teams
            var teamQueues = FetchAffectedQueues(localContext, unaffectedTeamIds, affectedTeamIds);
            localContext.Trace($"There are {teamQueues.Count()} team queues affected: ({string.Join(",", teamQueues)})");

            if (localContext.PluginExecutionContext.MessageName == PluginMessage.Associate)
            {
                // Build and execute query to fetch queues associated to users
                var userQueues = FetchQueueMembershipByUsers(localContext, systemuserIds);
                localContext.Trace($"There are {userQueues.Count()} user associated to affected queues: ({string.Join(",", userQueues)})");

                // Only get the delta of queues to be added based on the queues the user is already affected to.
                var toAdd = teamQueues.Except(userQueues)
                    .Select(q => new EntityReference("queue", q))
                    .ToList();

                foreach (var userid in systemuserIds)
                {
                    localContext.Trace($"Adding {toAdd.Count()} queues to user '{userid}'");
                    localContext.OrganizationService.Associate("systemuser", userid, new Relationship("queuemembership_association"), new EntityReferenceCollection(toAdd));
                }

            }
            else if (localContext.PluginExecutionContext.MessageName == PluginMessage.Disassociate)
            {
                var toRemove = teamQueues.Select(q => new EntityReference("queue", q)).ToList();
                foreach (var userid in systemuserIds)
                {
                    localContext.Trace($"Removing {toRemove.Count()} queues from user '{userid}'");
                    localContext.OrganizationService.Disassociate("systemuser", userid, new Relationship("queuemembership_association"), new EntityReferenceCollection(toRemove));
                }
            }

        }

        protected void HandleQueueMembership(LocalPluginContext localContext, EntityReference target, EntityReferenceCollection refs)
        {
            localContext.Trace($"Handling QueueMembership '{localContext.PluginExecutionContext.MessageName}' operation via 'opc_queues_teams_membership'.");

            // Regardless of which side the relation was triggered; isolate teamIds and queueIds
            Guid[] affectedTeamIds, queueIds, unaffectedTeamIds = null;
            affectedTeamIds = target.LogicalName == "team" ? new[] { target.Id } : refs.Select(t => t.Id).ToArray();
            queueIds = target.LogicalName == "queue" ? new[] { target.Id } : refs.Select(u => u.Id).ToArray();

            localContext.Trace($"There is {affectedTeamIds.Count()} affected teams ({string.Join(",", affectedTeamIds)})");
            localContext.Trace($"There is {queueIds.Count()} affected queues: {string.Join(",", queueIds)}");

            // If it's a disassociate operation we will need all the teams associated to the queue to ensure
            // the user does not have access through another team
            if (localContext.PluginExecutionContext.MessageName == PluginMessage.Disassociate)
            {
                // Build and execute query to get all queues of the teams that not be affected by this change
                unaffectedTeamIds = FetchUnaffectedTeamsByQueues(localContext, queueIds, affectedTeamIds);
                localContext.Trace($"There is {unaffectedTeamIds.Count()} unaffected teams ({string.Join(",", unaffectedTeamIds)})");
            }

            // Build and execute  fetch query to get all users associated to teams but only keep the ones which are not associated to unaffected teams
            var usersInTeams = FetchUsersByTeams(localContext, unaffectedTeamIds, affectedTeamIds);
            localContext.Trace($"There is {usersInTeams.Count()} users affected ({string.Join(",", usersInTeams)})");

            // Add queues to users who don't have the queue already.
            if (localContext.PluginExecutionContext.MessageName == PluginMessage.Associate)
            {
                // Build and execute query to get all users associated to the queues
                var usersInQueues = FetchQueueMembershipByQueues(localContext, queueIds);
                localContext.Trace($"There is {usersInQueues.Count()} users associated to affected queues: ({string.Join(",", usersInQueues)})");

                // Add queues to users who don't have the queue already.
                var toAdd = usersInTeams.Except(usersInQueues).Select(u => new EntityReference("systemuser", u)).ToList();
                foreach (var queueid in queueIds)
                {
                    localContext.Trace($"Adding {toAdd.Count()} users to queue '{queueid}'");
                    localContext.OrganizationService.Associate("queue", queueid, new Relationship("queuemembership_association"), new EntityReferenceCollection(toAdd));
                }
            }
            else if (localContext.PluginExecutionContext.MessageName == PluginMessage.Disassociate)
            {
                var toRemove = usersInTeams.Select(u => new EntityReference("systemuser", u)).ToList();
                foreach (var queueid in queueIds)
                {
                    localContext.Trace($"Removing {toRemove.Count()} users from queue '{queueid}'");
                    localContext.OrganizationService.Disassociate("queue", queueid, new Relationship("queuemembership_association"), new EntityReferenceCollection(toRemove));
                }
            }

        }

        private Guid[] FetchUnaffectedTeamsByUsers(LocalPluginContext localContext, Guid[] userGuids, Guid[] affectedTeamsFilter)
        {
            return localContext.OrganizationService.RetrieveMultiple(
                    new QueryExpression("teammembership")
                    {
                        Distinct = true,
                        ColumnSet = new ColumnSet("systemuserid", "teamid"),
                        Criteria = {
                            Filters = {
                                new FilterExpression(LogicalOperator.And) {
                                    Conditions = {
                                        new ConditionExpression("systemuserid", ConditionOperator.In, userGuids),
                                        new ConditionExpression("teamid", ConditionOperator.NotIn, affectedTeamsFilter)
                                    }
                                }
                            }
                        }
                    })
                    .Entities
                    .Select(q => (Guid)q.ToEntity<TeamMembership>().TeamId).ToArray();
        }

        private Guid[] FetchAffectedQueues(LocalPluginContext localContext, Guid[] unaffectedTeams, Guid[] affectedTeams)
        {
            return localContext.OrganizationService.RetrieveMultiple(
                new QueryExpression("opc_queues_teams")
                {
                    Distinct = true,
                    ColumnSet = new ColumnSet("queueid", "teamid"),
                    Criteria = {
                        Conditions = {
                            new ConditionExpression("teamid", ConditionOperator.In, unaffectedTeams?.Concat(affectedTeams).ToArray() ?? affectedTeams)
                        }
                    }
                })
                .Entities
                .Select(q => q.ToEntity<opc_queues_teams>())
                .GroupBy(q => q.queueid)
                .Where(g => unaffectedTeams == null || g.All(p => !unaffectedTeams.Contains((Guid)p.teamid))) // only keep groups where all elements are in affectedTeams
                .Select(g => (Guid)g.Key).ToArray();
        }

        private Guid[] FetchQueueMembershipByUsers(LocalPluginContext localContext, Guid[] users)
        {
            return localContext.OrganizationService.RetrieveMultiple(
                    new QueryExpression("queuemembership")
                    {
                        Distinct = true,
                        ColumnSet = new ColumnSet("queueid"),
                        Criteria = {
                            Conditions = {
                                new ConditionExpression("systemuserid", ConditionOperator.In, users)
                            }
                        }
                    })
                    .Entities
                    .Select(q => (Guid)q.ToEntity<QueueMembership>().QueueId).ToArray();
        }

        private Guid[] FetchUsersByTeams(LocalPluginContext localContext, Guid[] unaffectedTeams, Guid[] affectedTeams)
        {
            return localContext.OrganizationService.RetrieveMultiple(
                new QueryExpression("teammembership")
                {
                    Distinct = true,
                    ColumnSet = new ColumnSet("systemuserid", "teamid"),
                    Criteria = {
                        Conditions = {
                            new ConditionExpression("teamid", ConditionOperator.In, unaffectedTeams?.Concat(affectedTeams).ToArray() ?? affectedTeams)
                        }
                    }
                })
                .Entities
                .Select(q => q.ToEntity<TeamMembership>())
                .GroupBy(g => g.SystemUserId) // only consider for deletion if teamid is not in the teams that should not be affected
                .Where(g => unaffectedTeams == null || g.All(p => !unaffectedTeams.Contains((Guid)p.TeamId)))
                .Select(g => (Guid)g.Key)
                .ToArray();
        }

        private Guid[] FetchQueueMembershipByQueues(LocalPluginContext localContext, Guid[] queues)
        {
            return localContext.OrganizationService.RetrieveMultiple(
                    new QueryExpression("queuemembership")
                    {
                        Distinct = true,
                        ColumnSet = new ColumnSet("systemuserid"),
                        Criteria = {
                            Conditions = {
                                new ConditionExpression("queueid", ConditionOperator.In, queues)
                            }
                        }
                    })
                    .Entities
                    .Select(q => (Guid)q.ToEntity<QueueMembership>().SystemUserId)
                    .ToArray();
        }

        private Guid[] FetchUnaffectedTeamsByQueues(LocalPluginContext localContext, Guid[] queues, Guid[] affectedTeamsFilter)
        {
            return localContext.OrganizationService.RetrieveMultiple(
                    new QueryExpression("opc_queues_teams")
                    {
                        Distinct = true,
                        ColumnSet = new ColumnSet("teamid"),
                        Criteria = {
                            Filters = {
                                new FilterExpression(LogicalOperator.And)
                                {
                                    Conditions = {
                                        new ConditionExpression("queueid", ConditionOperator.In, queues),
                                        new ConditionExpression("teamid", ConditionOperator.NotIn, affectedTeamsFilter)
                                    }
                                }
                            }
                        }
                    })
                    .Entities
                    .Select(q => (Guid)q.ToEntity<opc_queues_teams>().teamid).ToArray();
        }
    }
}

