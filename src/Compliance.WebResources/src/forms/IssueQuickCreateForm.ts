import { injectable } from "inversify";
import "reflect-metadata";
import { XrmHelper } from "../helpers/XrmHelper";
import { IPowerForm } from "../interfaces";
import { AllegationType } from "../enums";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace Issue.Forms {
    @injectable()
    export class QuickCreate implements IPowerForm<Form.opc_issue.QuickCreate.QuickCreate> {
        initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_issue.QuickCreate.QuickCreate, any>): void {
            const formContext = initializationContext.getFormContext() as Form.opc_issue.QuickCreate.QuickCreate;

            // Register handlers
            formContext.getAttribute("opc_allegationtypeid").addOnChange(x => this.allegationtype_OnChange(x));
        }

        private allegationtype_OnChange(context: Xrm.ExecutionContext<Xrm.LookupAttribute<"opc_allegationtype">, undefined>) {
            const formContext = context.getFormContext() as Form.opc_issue.QuickCreate.QuickCreate;

            const allegationTypeValue = formContext.getAttribute("opc_allegationtypeid").getValue();
            const isAccessRequestNumberVisible = allegationTypeValue && allegationTypeValue[0].id === AllegationType.Access;

            formContext.getAttribute("opc_accessrequestnumber").controls.forEach(c => XrmHelper.toggle(c, isAccessRequestNumberVisible));
        }
    }
}
