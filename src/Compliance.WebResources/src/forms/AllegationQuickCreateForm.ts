import { injectable } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";
import { AllegationType } from "../enums";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace Allegation.Forms {
    @injectable()
    export class QuickCreate implements IPowerForm<Form.opc_allegation.QuickCreate.QuickCreate> {
        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_allegation.QuickCreate.QuickCreate, any>): void {
            const formContext = initializationContext.getFormContext() as Form.opc_allegation.QuickCreate.QuickCreate;

            formContext.getAttribute("opc_allegationtypeid").addOnChange(x => this.allegationtype_OnChange(x));
        }

        /**
         * Handles changes to the recommendtoregistrar yes/no value
         *
         * @event OnChanged
         */
        private allegationtype_OnChange(context: Xrm.ExecutionContext<Xrm.LookupAttribute<"opc_allegationtype">, undefined>) {
            const formContext = context.getFormContext() as Form.opc_allegation.QuickCreate.QuickCreate;

            const allegationTypeValue = formContext.getAttribute("opc_allegationtypeid").getValue();
            const isReferenceNumberVisible = allegationTypeValue && allegationTypeValue[0].id === AllegationType.Access;

            formContext.getAttribute("opc_referencenumber").controls.forEach(c => XrmHelper.toggle(c, isReferenceNumberVisible));
        }
    }
}
