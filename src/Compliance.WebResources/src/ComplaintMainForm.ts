import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IComplaintService } from "./interfaces";

export namespace Complaint.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_complaint.Main.Information> {

        private _complaintService: IComplaintService;

        constructor(@inject(nameof<IComplaintService>()) complaintService: IComplaintService) {
            this._complaintService = complaintService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information>): void {

            this._complaintService.getComplaint("test");
            let formContext = <Form.opc_complaint.Main.Information>initializationContext.getFormContext();

            // Register handlers
            formContext.data.process.addOnStageChange(this.process_OnStageChanged);
            this.handle_StageStates(formContext);
            formContext.getAttribute("opc_recommendtoregistrar").addOnChange(this.recommendtoregistrar_OnChange);
            formContext.getAttribute("opc_intakedisposition").addOnChange(this.intakedisposition_OnChange);

            // Sequence matters
            formContext.getAttribute("opc_intakedisposition").fireOnChange();
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();
        }

        /**
        * Handles changes to the recommendtoregistrar yes/no value
        *
        * @event OnChanged
        */
        private recommendtoregistrar_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<boolean>>): void {
            let formContext = <Form.opc_complaint.Main.Information>context.getFormContext();
            let isRecommending = formContext.getAttribute("opc_recommendtoregistrar").getValue();

            formContext.getAttribute("opc_intakedisposition").controls.forEach(control => Helpers.Xrm.turn(control, isRecommending));
            formContext.getAttribute("opc_complaintdisposition").controls.forEach(control => Helpers.Xrm.turn(control, !isRecommending));
            formContext.getAttribute("opc_declinereason").controls.forEach(control => control.setVisible(false));
        }

        /**
        * Handles changes to the intakedisposition dropdown
        *
        * @event OnChanged
        */
        private intakedisposition_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_intakedisposition>>): void {
            let formContext = <Form.opc_complaint.Main.Information>context.getFormContext();
            switch (formContext.getAttribute("opc_intakedisposition").getValue()) {
                case opc_intakedisposition.Declinetoinvestigate:
                    formContext.getAttribute("opc_complaintdisposition").controls.forEach(control => Helpers.Xrm.turnOff(control));
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => Helpers.Xrm.turnOff(control));
                    formContext.getAttribute("opc_declinereason").controls.forEach(control => Helpers.Xrm.turnOn(control));
                    break;
                case opc_intakedisposition.MovetoEarlyResolution:
                case opc_intakedisposition.MovetoInvestigation:
                default:
                    formContext.getAttribute("opc_complaintdisposition").controls.forEach(control => Helpers.Xrm.turnOff(control));
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => Helpers.Xrm.turnOn(control));
                    formContext.getAttribute("opc_declinereason").controls.forEach(control => Helpers.Xrm.turnOff(control));
                    break;
            }
        }

        /**
        * Relay the business process stage change to the StageStates handler
        *
        * @event OnStageChanged
        */
        private process_OnStageChanged(executionContext?: Xrm.ExecutionContext<Xrm.ProcessModule>): void {
            // Relay context to reusable handler
            let formContext = <Form.opc_complaint.Main.Information>executionContext.getFormContext();
            this.handle_StageStates(formContext);
        }

        /**
        * Handle ui changes related to business process stage changes
        *
        * @event OnStageChanged
        */
        private handle_StageStates(formContext: Form.opc_complaint.Main.Information) {
            // Handle all visibility stuff related to process stages
            let currentStage = formContext.data.process.getActiveStage().getName().toLowerCase();
            switch (currentStage) {
                case "intake":
                    formContext.ui.tabs.get("issues_tab").setVisible(false);
                    formContext.ui.tabs.get("recommendations_tab").setVisible(false);
                    break;
                case "acceptance":
                    formContext.ui.tabs.get("issues_tab").setVisible(false);
                    formContext.ui.tabs.get("recommendations_tab").setVisible(false);
                    break;
                case "early resolution":
                    formContext.ui.tabs.get("issues_tab").setVisible(true);
                    formContext.ui.tabs.get("recommendations_tab").setVisible(false);
                    break;
                case "investigation":
                    formContext.ui.tabs.get("issues_tab").setVisible(true);
                    formContext.ui.tabs.get("recommendations_tab").setVisible(true);
                    break;
                case "closed":
                    break;
            }
        }
    }
}