import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IAllegationService } from "../interfaces";

//export function symbolfor<T>(func?: (obj: T) => void) : symbol {
//    return Symbol.for(nameof<T>());
//}


export namespace Allegation.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_allegation.Main.Information> {

        private _allegationService: IAllegationService;

        constructor(@inject(nameof<IAllegationService>()) complaintService: IAllegationService) {
            this._allegationService = complaintService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_allegation.Main.Information, any>): void {
            let formContext = <Form.opc_allegation.Main.Information>initializationContext.getFormContext();

            // Register handlers
            formContext.data.entity.addOnSave(x => this.form_OnSave(x));
        }

        private form_OnSave(context: Xrm.SaveEventContext<Xrm.PageEntity<Form.opc_allegation.Main.Information.Attributes>>): void {
            let formContext = <Form.opc_allegation.Main.Information>context.getFormContext();

            // Retrieve the iframe and dispatch save event
            let iframe = <HTMLIFrameElement>formContext.getControl("WebResource_checklist").getObject();
            if (iframe) {
                // Note if iframe is not loaded, its not going to get in here.
                let event = new Event("entity-save");
                let success = (iframe.contentDocument || iframe.contentWindow.document).dispatchEvent(event);
            }
        }
    }
}