import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IContactService } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";
import { i18n } from "i18next";
import { ContactType } from "../enums";
import { ContactHelper } from "../helpers/ContactHelper";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace Complaint.Forms {
    @injectable()
    export class MainForm implements IPowerForm<Form.opc_complaint.Main.Information> {
        private _contactService: IContactService;
        private _i18n: i18n;
        private _contactAttrs: { Type: ContactType; Attribute: Xrm.LookupAttribute<"contact"> }[] = [];

        constructor(@inject(nameof<i18n>()) i18n: i18n, @inject(nameof<IContactService>()) contactService: IContactService) {
            this._i18n = i18n;
            this._contactService = contactService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information, any>): void {
            const formContext = initializationContext.getFormContext() as Form.opc_complaint.Main.Information;

            // Register handlers
            formContext.data.process.addOnStageChange(x => this.process_OnStageChanged(x));
            this.handle_StageStates(formContext);
            formContext.getAttribute("opc_recommendtoregistrar").addOnChange(x => this.recommendtoregistrar_OnChange(x));
            formContext.getAttribute("opc_intakedisposition").addOnChange(x => this.intakedisposition_OnChange(x));
            formContext.getAttribute("opc_multiplecomplaintstrategy").addOnChange(x => this.multipleComplaintStrategy_OnChange(x));
            formContext.getAttribute("opc_complainantrep").addOnChange(x => this.complainantRep_OnChange(x));

            // Sequence matters
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();
            formContext.getAttribute("opc_intakedisposition").fireOnChange();
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            this.setupDuplicateContactChecking(formContext);
        }

        private setupDuplicateContactChecking(formContext: Form.opc_complaint.Main.Information) {
            formContext.getAttribute("opc_complainant").addOnChange(x => this.fetchContactNotifications(x, ContactType.Complainant));
            formContext
                .getAttribute("opc_complainantrep")
                .addOnChange(x => this.fetchContactNotifications(x, ContactType.ComplainantRepresentative));
            formContext
                .getAttribute("opc_complainantlegalrepresentative")
                .addOnChange(x => this.fetchContactNotifications(x, ContactType.ComplainantLegalRepresentative));
            formContext
                .getAttribute("opc_respondentrepresentative")
                .addOnChange(x => this.fetchContactNotifications(x, ContactType.RespondentRepresentative));
            formContext
                .getAttribute("opc_respondentlegalrepresentative")
                .addOnChange(x => this.fetchContactNotifications(x, ContactType.RespondentLegalRepresentative));

            formContext.getAttribute("opc_complainant").fireOnChange();
            formContext.getAttribute("opc_complainantrep").fireOnChange();
            formContext.getAttribute("opc_complainantlegalrepresentative").fireOnChange();
            formContext.getAttribute("opc_respondentrepresentative").fireOnChange();
            formContext.getAttribute("opc_respondentlegalrepresentative").fireOnChange();

            // Add mapping between types and attributes in case some contact are used multiple times and we need to update all attributes
            this._contactAttrs.push({ Type: ContactType.Complainant, Attribute: formContext.getAttribute("opc_complainant") });
            this._contactAttrs.push({
                Type: ContactType.ComplainantRepresentative,
                Attribute: formContext.getAttribute("opc_complainantrep")
            });
            this._contactAttrs.push({
                Type: ContactType.ComplainantLegalRepresentative,
                Attribute: formContext.getAttribute("opc_complainantlegalrepresentative")
            });
            this._contactAttrs.push({
                Type: ContactType.RespondentRepresentative,
                Attribute: formContext.getAttribute("opc_respondentrepresentative")
            });
            this._contactAttrs.push({
                Type: ContactType.RespondentLegalRepresentative,
                Attribute: formContext.getAttribute("opc_respondentlegalrepresentative")
            });
        }

        private fetchContactNotifications(
            context: Xrm.ExecutionContext<Xrm.LookupAttribute<"contact">, any>,
            contactType: ContactType
        ): void {
            const formContext = context.getFormContext() as Form.opc_complaint.Main.Information;
            const contactAttr = context.getEventSource();
            const contactValue = contactAttr.getValue();

            if (contactValue) {
                // Identify other attributes which may have same contact
                const otherAffectedAttributes = this._contactAttrs.filter(
                    c =>
                        c.Attribute.getValue() &&
                        c.Attribute.getValue()[0].name === contactValue[0].name &&
                        c.Attribute.getName() !== contactAttr.getName()
                );

                this._contactService
                    .getContact(contactValue[0].id)
                    .then(contactResult => {
                        // Show notification from contact base information
                        this.showBaseContactNotifications(formContext, contactType, contactResult);

                        // Get Potential duplicates to then show duplicate contact notifications
                        this._contactService
                            .getPotentialDuplicates(contactResult)
                            .then(x => {
                                if (x.length === 0) {
                                    XrmHelper.clearNotification(contactAttr);
                                    // Update other attribute that may use the same contact
                                    otherAffectedAttributes.forEach(c => XrmHelper.clearNotification(c.Attribute));
                                    return;
                                }

                                // Since first and last name already match, already a potential duplicate
                                let duplicateResult = opc_duplicatedetectionresult.Potentialduplicate;

                                // 3 matches for checked fields or more and we can consider the contact a duplicate
                                const mostLikelyDuplicate = ContactHelper.getMostLikelyDuplicate(contactResult, x);
                                if (mostLikelyDuplicate.numberOfFieldMatches >= 3) {
                                    duplicateResult = opc_duplicatedetectionresult.Duplicatefound;
                                }

                                // Update event source attribute
                                this.showContactDuplicateNotification(contactAttr, contactType, duplicateResult);

                                // Update other attribute that may use the same contact
                                otherAffectedAttributes.forEach(attr =>
                                    this.showContactDuplicateNotification(
                                        attr.Attribute,
                                        attr.Type,
                                        opc_duplicatedetectionresult.Potentialduplicate
                                    )
                                );
                            })
                            .catch(() => console.error(`error getting duplicates of ${contactType}`));
                    })
                    .catch(() => console.error(`error getting duplicate status of ${contactType}`));
            } else {
                XrmHelper.clearNotification(contactAttr);
            }

            formContext.ui.refreshRibbon(); // For merge ribbon buttons to re-evaluate if they should be enabled
        }

        private showBaseContactNotifications(
            formContext: Form.opc_complaint.Main.Information,
            contactType: ContactType,
            contactResult: Contact_Result
        ): void {
            if (contactType === ContactType.Complainant) {
                if (contactResult.opc_requireprivilegedcorrespondence) {
                    XrmHelper.setFormNotification(formContext, "INFO", this._i18n.t("contact:privilegedcorrespondence.warning"));
                }
            }
        }

        private showContactDuplicateNotification(
            contactAttr: Xrm.LookupAttribute<"contact">,
            contactType: ContactType,
            duplicateResult: opc_duplicatedetectionresult
        ) {
            if (duplicateResult === opc_duplicatedetectionresult.Potentialduplicate) {
                XrmHelper.setNotification(
                    contactAttr,
                    this._i18n.t("contact:duplicate.warning", { context: "potential", contactType: contactType }),
                    "WARNING"
                );
            } else if (duplicateResult === opc_duplicatedetectionresult.Duplicatefound) {
                XrmHelper.setNotification(
                    contactAttr,
                    this._i18n.t("contact:duplicate.warning", { context: "actual", contactType: contactType }),
                    "WARNING"
                );
            } else {
                XrmHelper.clearNotification(contactAttr);
            }
        }

        /**
         * Handles changes to the recommendtoregistrar yes/no value
         *
         * @event OnChanged
         */
        private recommendtoregistrar_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_yesorno>, any>): void {
            const formContext = context.getFormContext() as Form.opc_complaint.Main.Information;
            const isRecommending = formContext.getAttribute("opc_recommendtoregistrar").getValue();
            const closeReasons = formContext.getAttribute("opc_closereason").getOptions();

            formContext.getAttribute("opc_closereason").controls.forEach(control => {
                // Toggle visibility
                XrmHelper.toggle(
                    control,
                    isRecommending === opc_yesorno.No ||
                        formContext.getAttribute("opc_intakedisposition").getValue() === opc_intakedisposition.Close
                );

                // Clear options before adding the options valid for the current scenario
                control.clearOptions();
                if (isRecommending === opc_yesorno.Yes) {
                    control.addOption(closeReasons.find(p => p.value === opc_closereason.Redirection));
                    control.addOption(closeReasons.find(p => p.value === opc_closereason.Resolved));
                    control.addOption(closeReasons.find(p => p.value === opc_closereason.Withdrawn));
                } else if (isRecommending === opc_yesorno.No) {
                    control.addOption(closeReasons.find(p => p.value === opc_closereason.Createdinerror));
                    control.addOption(closeReasons.find(p => p.value === opc_closereason.Duplicate));
                    control.addOption(closeReasons.find(p => p.value === opc_closereason.Redirection));
                }
            });
            formContext.getAttribute("opc_closereason").setRequiredLevel(isRecommending === opc_yesorno.No ? "required" : "none");
            formContext
                .getAttribute("opc_intakedisposition")
                .controls.forEach(control => XrmHelper.toggle(control, isRecommending === opc_yesorno.Yes));
            formContext.getAttribute("opc_intakedisposition").setRequiredLevel(isRecommending === opc_yesorno.Yes ? "required" : "none");
        }

        /**
         * Handles changes to the intakedisposition dropdown
         *
         * @event OnChanged
         */
        private intakedisposition_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_intakedisposition>, any>): void {
            const formContext = context.getFormContext() as Form.opc_complaint.Main.Information;

            switch (formContext.getAttribute("opc_intakedisposition").getValue()) {
                case opc_intakedisposition.Close:
                    formContext.getAttribute("opc_closereason").controls.forEach(control => {
                        XrmHelper.toggleOn(control);
                    });
                    formContext.getAttribute("opc_closereason").setRequiredLevel("required");
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(c => c.setVisible(false));
                    formContext
                        .getAttribute("opc_representativeauthorizationprovided")
                        .controls.forEach(control => XrmHelper.toggleOff(control));
                    break;
                case opc_intakedisposition.Declinetoinvestigate:
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(c => c.setVisible(false));
                    formContext.getAttribute("opc_closereason").controls.forEach(control => XrmHelper.toggleOff(control));
                    formContext
                        .getAttribute("opc_representativeauthorizationprovided")
                        .controls.forEach(control => XrmHelper.toggleOff(control));
                    break;
                case opc_intakedisposition.MovetoEarlyResolution:
                case opc_intakedisposition.MovetoInvestigation:
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(c => c.setVisible(true));
                    formContext.getAttribute("opc_closereason").controls.forEach(control => XrmHelper.toggleOff(control));

                    // If there is a rep, we need to ensure we have the rep authorization signed before moving forward.
                    if (formContext.getAttribute("opc_complainantrep").getValue()) {
                        const repAuthAttr = formContext.getAttribute("opc_representativeauthorizationprovided");
                        repAuthAttr.controls.forEach(control => XrmHelper.toggle(control, true));
                        repAuthAttr.setRequiredLevel("required");

                        // If no value is set, set it to false to not block the save but still block the BPF
                        if (!repAuthAttr.getValue()) {
                            repAuthAttr.setValue(false);
                        }
                    }
                    break;
                default:
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(c => c.setVisible(false));
                    formContext
                        .getAttribute("opc_representativeauthorizationprovided")
                        .controls.forEach(control => XrmHelper.toggleOff(control));
                    break;
            }
        }

        /**
         * Relay the business process stage change to the StageStates handler
         *
         * @event OnStageChanged
         */
        private process_OnStageChanged(executionContext?: Xrm.StageChangeContext): void {
            // Relay context to reusable handler
            const formContext = executionContext.getFormContext() as Form.opc_complaint.Main.Information;
            this.handle_StageStates(formContext);
        }

        /**
         * Handle ui changes related to business process stage changes
         *
         * @event OnStageChanged
         */
        private handle_StageStates(formContext: Form.opc_complaint.Main.Information) {
            // Handle all visibility stuff related to process stages
            const currentStage = formContext.data.process.getActiveStage().getName().toLowerCase();
            switch (currentStage) {
                case "acceptance":
                case "triage":
                    formContext.getAttribute("opc_complainantperceivedpriorities").setRequiredLevel("none");
                    break;
                case "intake":
                    formContext.ui.tabs.get("tab_issues").setVisible(false);
                    formContext.ui.tabs.get("tab_recommendations").setVisible(false);
                    formContext.getAttribute("opc_complainantperceivedpriorities").setRequiredLevel("required");
                    break;
                case "early resolution":
                    formContext.ui.tabs.get("tab_issues").setVisible(true);
                    formContext.ui.tabs.get("tab_recommendations").setVisible(false);
                    break;
                case "investigation":
                    formContext.ui.tabs.get("tab_issues").setVisible(true);
                    formContext.ui.tabs.get("tab_recommendations").setVisible(true);
                    break;
                case "closed":
                    break;
            }
        }

        /**
         * Handles changes to Multiple Complaint Strategy attribute.
         *
         * @event OnChanged
         */
        private multipleComplaintStrategy_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = context.getFormContext() as Form.opc_complaint.Main.Information;
            const multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            const multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();

            // Clear Notification
            XrmHelper.clearNotification(multipleComplaintStrategyControl);

            // Check if Complainant is part of the Multiple Complaint Strategy
            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied) {
                // Display Notification
                XrmHelper.setNotification(multipleComplaintStrategyControl, this._i18n.t("contact:mcs.warning"), "INFO");
            }
        }

        private complainantRep_OnChange(context: Xrm.ExecutionContext<Xrm.LookupAttribute<"contact">, undefined>): void {
            const formContext = context.getFormContext() as Form.opc_complaint.Main.Information;
            const authRequired =
                formContext.getAttribute("opc_complainantrep").getValue() &&
                [opc_intakedisposition.MovetoEarlyResolution, opc_intakedisposition.MovetoInvestigation].includes(
                    formContext.getAttribute("opc_intakedisposition").getValue()
                );

            // If there is a rep, we need to ensure we have the rep authorization signed before moving forward.
            const repAuthAttr = formContext.getAttribute("opc_representativeauthorizationprovided");
            repAuthAttr.controls.forEach(control => XrmHelper.toggle(control, authRequired));
            repAuthAttr.setRequiredLevel(authRequired ? "required" : "none");

            // If no value is set, set it to false to not block the save but still block the BPF
            if (!repAuthAttr.getValue()) {
                repAuthAttr.setValue(false);
            }
        }
    }
}
