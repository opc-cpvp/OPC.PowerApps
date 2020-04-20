import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IAllegationService, PowerForm } from "../interfaces";

export namespace Allegation.Forms {

    @injectable()
    export class MainForm extends PowerForm<Form.opc_allegation.Main.Information> {

        private _allegationService: IAllegationService;
        private _initializing: boolean = false;

        constructor(@inject(nameof<IAllegationService>()) complaintService: IAllegationService) {
            super();
            this._allegationService = complaintService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_allegation.Main.Information, any>): void {
            super.initializeComponents(initializationContext);
            const formContext = <Form.opc_allegation.Main.Information>initializationContext.getFormContext();

            // If not in create mode, display checklist responses section containing iframe
            if (formContext.ui.getFormType() !== Xrm.FormType.Create) {
                formContext.ui.tabs.get("tab_general").sections.get("section_checklist_responses").setVisible(true);
            }
        }
    }
}