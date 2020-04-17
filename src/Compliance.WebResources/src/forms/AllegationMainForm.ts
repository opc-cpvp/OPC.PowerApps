import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";

export namespace Allegation.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_allegation.Main.Information> {

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_allegation.Main.Information, any>): void {
            let formContext = <Form.opc_allegation.Main.Information>initializationContext.getFormContext();
        }
    }
}