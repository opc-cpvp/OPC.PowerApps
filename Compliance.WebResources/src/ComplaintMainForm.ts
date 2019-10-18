import { getTypedFormContext } from "./helpers/XrmExtensions";

export namespace Complaint {
    export class MainForm {

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public static form_OnLoad(executionContext: Xrm.ExecutionContext<Form.opc_complaint.Main.Information>): void {

            let formContext = getTypedFormContext(executionContext);

            // Register handlers
            formContext.data.process.addOnStageChange(MainForm.process_OnStageChanged);
            MainForm.handle_StageStates(formContext);
            formContext.getAttribute("opc_recommendtoregistrar").addOnChange(MainForm.recommendtoregistrar_OnChange);
            formContext.getAttribute("opc_intakedisposition").addOnChange(MainForm.intakedisposition_OnChange);

            // Sequence matters
            formContext.getAttribute("opc_intakedisposition").fireOnChange();
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();
        }

        /**
        * Handles changes to the recommendtoregistrar yes/no value
        *
        * @event OnChanged
        */
        private static recommendtoregistrar_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<boolean>>): void {
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
        private static intakedisposition_OnChange(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_intakedisposition>>):void {
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
        private static process_OnStageChanged(executionContext?: Xrm.ExecutionContext<Xrm.ProcessModule>): void {
            // Relay context to reusable handler
            let formContext = <Form.opc_complaint.Main.Information>executionContext.getFormContext();
            MainForm.handle_StageStates(formContext);
        }

        /**
        * Handle ui changes related to business process stage changes
        *
        * @event OnStageChanged
        */
        private static handle_StageStates(formContext: Form.opc_complaint.Main.Information) {
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