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
            this._allegationService.getAllegation("test");
            let formContext = <Form.opc_allegation.Main.Information>initializationContext.getFormContext();
        }
    }
}