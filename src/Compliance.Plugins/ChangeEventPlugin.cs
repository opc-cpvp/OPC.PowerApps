using Compliance.EarlyBound;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Compliance.Plugins
{
    /// <summary>
    /// Creates events in the timeline when a tracked entity and it's fields change
    /// </summary>
    public partial class ChangeEventPlugin : PluginBase
    {
        private const string ImagesAlias = "EntityImages";

        /// <summary>
        /// Entities and their Fields that should be tracked and create events when changed
        /// </summary>
        private readonly EntityChangeTracker[] trackedEntityChanges =
        {
            new EntityChangeTracker()
            {
                EntityLogicalName = nameof(opc_complaint),
                TrackedFields = new List<FieldChangeTracker>
                {
                    new FieldChangeTracker(nameof(opc_complaint.OwnerId).ToLower(), "Owner", "Propriétaire"),
                    new FieldChangeTracker(nameof(opc_complaint.opc_intakeofficer), "Intake Officer", "Agent d'admission")
                }
            }
        };

        public ChangeEventPlugin()
            : base(typeof(ChangeEventPlugin), runAsSystem: false)
        { }

        protected override void ExecuteCrmPlugin(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new InvalidPluginExecutionException("localContext", new ArgumentNullException(nameof(localContext)));

            try
            {
                var context = localContext.PluginExecutionContext;

                var preImageEntity = (context.PreEntityImages?.Contains(ImagesAlias) ?? false) ? context.PreEntityImages[ImagesAlias] :
                    throw new InvalidPluginExecutionException($"No pre-image with alias: {ImagesAlias}");
                var postImageEntity = (context.PostEntityImages?.Contains(ImagesAlias) ?? false) ? context.PostEntityImages[ImagesAlias] :
                    throw new InvalidPluginExecutionException($"No post-image with alias: {ImagesAlias}");

                var trackedFieldChanges = trackedEntityChanges?.FirstOrDefault(x => x.EntityLogicalName == context.PrimaryEntityName);

                if (trackedFieldChanges == null)
                {
                    localContext.Trace("Entity not being tracked for changes, stopping plugin execution.");
                    return;
                }

                foreach (var fieldChange in trackedFieldChanges.TrackedFields)
                {
                    if (!preImageEntity.Contains(fieldChange.FieldLogicalName) ||
                        !postImageEntity.Contains(fieldChange.FieldLogicalName))
                    {
                        localContext.Trace("Pre or post entity image does not contain field, skipping this field change");
                        continue;
                    }

                    var preImageFieldReference = preImageEntity.GetAttributeValue<EntityReference>(fieldChange.FieldLogicalName);
                    var postImageFieldReference = postImageEntity.GetAttributeValue<EntityReference>(fieldChange.FieldLogicalName);

                    // Check if the prior value and current value are different, if not the case, don't create the event
                    if (preImageFieldReference.Id == postImageFieldReference.Id) continue;

                    var initiatingUser = localContext.OrganizationService.Retrieve("systemuser", context.InitiatingUserId, new ColumnSet("fullname"))?.ToEntity<SystemUser>();

                    // Create an Event record based on the change of the field and relate it to the current record
                    var trackedEvent = new opc_event()
                    {
                        OwnerId = initiatingUser?.ToEntityReference(),
                        opc_nameenglish = fieldChange.GetChangePhraseEnglish(initiatingUser?.FullName, preImageFieldReference.Name, postImageFieldReference.Name),
                        opc_namefrench = fieldChange.GetChangePhraseFrench(initiatingUser?.FullName, preImageFieldReference.Name, postImageFieldReference.Name)
                    };

                    // Create and setup the event for a reference
                    var id = localContext.OrganizationService.Create(trackedEvent);
                    trackedEvent.Id = id;

                    localContext.OrganizationService.Associate
                    (
                        nameof(opc_complaint),
                        context.PrimaryEntityId,
                        new Relationship(nameof(opc_complaint.opc_complaint_opc_events)),
                        new EntityReferenceCollection(new List<EntityReference>() { trackedEvent.ToEntityReference() })
                    );
                }
            }
            catch (Exception ex)
            {
                // Trace and throw any exceptions
                localContext.Trace($"Exception: {ex.Message} - Stack Trace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"An error occurred in the plug-in. {nameof(ChangeEventPlugin)}: {ex.Message}", ex);
            }
        }
    }
}
