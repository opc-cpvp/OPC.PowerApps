import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";

export namespace Complaint.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_complaint.Main.Information> {

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information, any>): void {

            let formContext = <Form.opc_complaint.Main.Information>initializationContext.getFormContext();

            // Register handlers
            formContext.data.process.addOnStageChange(x => this.process_OnStageChanged(x));
            this.handle_StageStates(formContext);
            formContext.getAttribute("opc_recommendtoregistrar").addOnChange(x => this.recommendtoregistrar_OnChange(x));
            formContext.getAttribute("opc_intakedisposition").addOnChange(x => this.intakedisposition_OnChange(x));
            formContext.getAttribute("opc_multiplecomplaintstrategy").addOnChange(x => this.multipleComplaintStrategy_OnChange(x));

            // Sequence matters
            formContext.getAttribute("opc_intakedisposition").fireOnChange();
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();
        }

        /**
        * Handles changes to the recommendtoregistrar yes/no value
        *
        * @event OnChanged
        */
        private recommendtoregistrar_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_yesorno>, any>): void {
            const formContext = <Form.opc_complaint.Main.Information>context.getFormContext();
            const isRecommending = formContext.getAttribute("opc_recommendtoregistrar").getValue();
            const closeReasons = formContext.getAttribute("opc_closereason").getOptions();

            formContext.getAttribute("opc_intakedisposition").controls.forEach(control => XrmHelper.toggle(control, isRecommending === opc_yesorno.Yes));
            formContext.getAttribute("opc_closereason").controls.forEach(control => {

                console.log("recommendtoregistrar handler:" + isRecommending );
                // Toggle visibility
                XrmHelper.toggle(control, isRecommending === opc_yesorno.No || formContext.getAttribute("opc_intakedisposition").getValue() === opc_intakedisposition.Close)

                // Clear options before adding the options valid for the current scenario
                control.clearOptions();
                if (isRecommending === opc_yesorno.Yes) {
                    control.addOption(closeReasons.find(p => p.value == opc_closereason.Redirection));
                    control.addOption(closeReasons.find(p => p.value == opc_closereason.Resolved));
                    control.addOption(closeReasons.find(p => p.value == opc_closereason.Withdrawn));
                } else if (isRecommending === opc_yesorno.No) {
                    control.addOption(closeReasons.find(p => p.value == opc_closereason.Createdinerror));
                    control.addOption(closeReasons.find(p => p.value == opc_closereason.Duplicate));
                    control.addOption(closeReasons.find(p => p.value == opc_closereason.Redirection));
                }
            });
            formContext.getAttribute("opc_intakedisposition").setRequiredLevel(isRecommending === opc_yesorno.Yes ? "required" : "none");
            formContext.getAttribute("opc_closereason").setRequiredLevel(isRecommending === opc_yesorno.No ? "required" : "none");
        }

        /**
        * Handles changes to the intakedisposition dropdown
        *
        * @event OnChanged
        */
        private intakedisposition_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_intakedisposition>, any>): void {
            const formContext = <Form.opc_complaint.Main.Information>context.getFormContext();
            console.log("intakedisposition handler:" + formContext.getAttribute("opc_intakedisposition").getValue());
            switch (formContext.getAttribute("opc_intakedisposition").getValue()) {
                case opc_intakedisposition.Close:
                    formContext.getAttribute("opc_closereason").controls.forEach(control => {
                        XrmHelper.toggleOn(control);
                        // when closereason off filter reason based on stage.
                    });
                    formContext.getAttribute("opc_closereason").setRequiredLevel("required");
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => XrmHelper.toggleOff(control));
                    break;
                case opc_intakedisposition.Declinetoinvestigate:
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => XrmHelper.toggleOff(control));
                    formContext.getAttribute("opc_closereason").controls.forEach(control => XrmHelper.toggleOff(control));
                    formContext.getAttribute("opc_closereason").setRequiredLevel("none");
                    break;
                case opc_intakedisposition.MovetoEarlyResolution:
                case opc_intakedisposition.MovetoInvestigation:
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => XrmHelper.toggleOn(control));
                    formContext.getAttribute("opc_closereason").controls.forEach(control => XrmHelper.toggleOff(control));
                    formContext.getAttribute("opc_closereason").setRequiredLevel("none");
                    break;
                default:
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
            const formContext = <Form.opc_complaint.Main.Information>executionContext.getFormContext();
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
                case "triage":
                case "intake":
                case "acceptance":
                    formContext.ui.tabs.get("tab_issues").setVisible(false);
                    formContext.ui.tabs.get("tab_recommendations").setVisible(false);
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
            let formContext = <Form.opc_complaint.Main.Information>context.getFormContext();
            let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            let multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();
            let complainantEntityReference = formContext.getAttribute("opc_complainant").getValue();
            let complainantFullname = complainantEntityReference ? complainantEntityReference[0].name : "";

            // Clear Notification
            formContext.ui.clearFormNotification("formNotificationMCS");

            // Check if Complainant is part of the Multiple Complaint Strategy
            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied) {
                // Display Notification
                formContext.ui.setFormNotification(`The Complainant ${complainantFullname} is part of the Multiple Complaint Strategy.`, "INFO", "formNotificationMCS");
            }
        }
    }
}
