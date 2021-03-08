import { injectable } from "inversify";
import "reflect-metadata";
import { PowerForm } from "./PowerForm";

export namespace Industry.Forms {
    @injectable()
    export class MainForm extends PowerForm<Form.opc_industry.Main.Information> {
        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_industry.Main.Information, any>): void {
            super.initializeComponents(initializationContext);
        }
    }
}
