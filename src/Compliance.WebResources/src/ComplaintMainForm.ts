import { getTypedFormContext } from "./helpers/XrmExtensions";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IComplaintService } from "./interfaces";
import { lazyInject } from "./inversify.config";

//export function symbolfor<T>(func?: (obj: T) => void) : symbol {
//    return Symbol.for(nameof<T>());
//}
export namespace Complaint {
    export class MainForm {

        @lazyInject(nameof<IComplaintService>())
        private _complaintService: IComplaintService;

        /**
         * Create an instance of the Complaint MainForm. This is used for compatibility with CDS event binding.
         * @param executionContext
         */
        public static createInstance(executionContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information>) : MainForm {
            return new MainForm(executionContext); // can remove lazy inject?
        }

        constructor(executionContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information>) {
            this.form_OnLoad(executionContext);
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public form_OnLoad(executionContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information>): void {

            this._complaintService.getComplaint("test");
            let formContext = getTypedFormContext(executionContext);

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
            formContext.getAttribute("opc_intakedisposition").controls.forEach(control => control.setVisible(isRecommending));
            formContext.getAttribute("opc_complaintdisposition").controls.forEach(control => control.setVisible(!isRecommending));
            formContext.getAttribute("opc_declinereason").controls.forEach(control => control.setVisible(false));
        }

        /**
        * Handles changes to the intakedisposition dropdown
        *
        * @event OnChanged
        */
        private intakedisposition_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_intakedisposition>>):void {
            let formContext = <Form.opc_complaint.Main.Information>context.getFormContext();
            switch (formContext.getAttribute("opc_intakedisposition").getValue()) {
                case opc_intakedisposition.Declinetoinvestigate:
                    formContext.getAttribute("opc_complaintdisposition").controls.forEach(control => control.setVisible(false));
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => control.setVisible(false));
                    formContext.getAttribute("opc_declinereason").controls.forEach(control => control.setVisible(true));
                    break;
                case opc_intakedisposition.MovetoEarlyResolution:
                case opc_intakedisposition.MovetoInvestigation:
                default:
                    formContext.getAttribute("opc_complaintdisposition").controls.forEach(control => control.setVisible(false));
                    formContext.getAttribute("opc_acceptancedate").controls.forEach(control => control.setVisible(true));
                    formContext.getAttribute("opc_declinereason").controls.forEach(control => control.setVisible(false));
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