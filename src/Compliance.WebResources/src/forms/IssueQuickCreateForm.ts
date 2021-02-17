import { injectable } from "inversify";
import "reflect-metadata";
import { XrmHelper } from "../helpers/XrmHelper";
import { IPowerForm } from "../interfaces";
import { AllegationType } from "../enums";
import { StringHelper } from "../helpers/StringHelper";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace Issue.Forms {
    @injectable()
    export class QuickCreate implements IPowerForm<Form.opc_issue.QuickCreate.QuickCreate> {
        initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_issue.QuickCreate.QuickCreate, any>): void {
            const formContext = initializationContext.getFormContext() as Form.opc_issue.QuickCreate.QuickCreate;

            // Register handlers
            formContext.getAttribute("opc_allegationtypeid").addOnChange(x => this.allegationtype_OnChange(x));
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();
        }

        private allegationtype_OnChange(context: Xrm.ExecutionContext<Xrm.LookupAttribute<"opc_allegationtype">, undefined>) {
            const formContext = context.getFormContext() as Form.opc_issue.QuickCreate.QuickCreate;

            const allegationType = formContext.getAttribute("opc_allegationtypeid").getValue();
            const hasAllegationType = allegationType && allegationType.length > 0;

            let isAllegationTypeAccess = false;
            if (hasAllegationType) {
                const allegationTypeId = allegationType[0].id;
                isAllegationTypeAccess = StringHelper.formatGuid(allegationTypeId) === AllegationType.Access;
            }

            XrmHelper.toggle(formContext.getControl("opc_accessrequestnumber"), isAllegationTypeAccess);
            XrmHelper.toggle(formContext.getControl("opc_contact"), isAllegationTypeAccess);
        }
    }
}
