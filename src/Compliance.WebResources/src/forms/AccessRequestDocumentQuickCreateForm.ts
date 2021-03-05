import { injectable } from "inversify";
import "reflect-metadata";
import { PowerForm } from "./PowerForm";
import { XrmHelper } from "../helpers/XrmHelper";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace AccessRequestDocument.Forms {
    @injectable()
    export class QuickCreate extends PowerForm<Form.opc_accessrequestdocument.QuickCreate.QuickCreate> {
        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(
            initializationContext: Xrm.ExecutionContext<Form.opc_accessrequestdocument.QuickCreate.QuickCreate, any>
        ): void {
            super.initializeComponents(initializationContext);

            const formContext = initializationContext.getFormContext() as Form.opc_accessrequestdocument.QuickCreate.QuickCreate;

            formContext.getAttribute("opc_contestedbycomplainant").addOnChange(x => this.contestedByComplainant_OnChange(x));
            formContext.getAttribute("opc_contestedbycomplainant").fireOnChange();

            formContext.getAttribute("opc_correctlyappliedexemption").addOnChange(x => this.correctlyAppliedExemption_OnChange(x));
            formContext.getAttribute("opc_correctlyappliedexemption").fireOnChange();
        }

        private contestedByComplainant_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = context.getFormContext() as Form.opc_accessrequestdocument.QuickCreate.QuickCreate;

            const isContestedByComplainant = formContext.getAttribute("opc_contestedbycomplainant").getValue();
            XrmHelper.toggle(formContext.getControl("opc_correctlyappliedexemption"), isContestedByComplainant);

            if (!isContestedByComplainant) {
                XrmHelper.toggleOff(formContext.getControl("opc_rationale"));
            }
        }

        private correctlyAppliedExemption_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = context.getFormContext() as Form.opc_accessrequestdocument.QuickCreate.QuickCreate;

            const hasCorrectlyAppliedExemption = formContext.getAttribute("opc_correctlyappliedexemption").getValue() !== null;
            XrmHelper.toggle(formContext.getControl("opc_rationale"), hasCorrectlyAppliedExemption);
        }
    }
}
