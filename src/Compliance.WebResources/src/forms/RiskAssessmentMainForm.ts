import { injectable } from "inversify";
import "reflect-metadata";
import { PowerForm } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";

export namespace RiskAssessment.Forms {
    @injectable()
    export class MainForm extends PowerForm<Form.opc_riskassessment.Main.Information> {
        constructor() {
            super();
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_riskassessment.Main.Information, any>): void {
            super.initializeComponents(initializationContext);

            const formContext = <Form.opc_riskassessment.Main.Information>initializationContext.getFormContext();

            formContext.getAttribute("opc_bypasssuggestedriskappetite").addOnChange(x => this.bypassSuggestedRiskAppetite_OnChange(x));
            formContext.getAttribute("opc_bypasssuggestedriskappetite").fireOnChange();
        }

        /**
         * Handles changes to "Bypass Suggested Risk Appetite" control to display/hide bypass fields.
         *
         * @event OnChanged
         */
        private bypassSuggestedRiskAppetite_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = <Form.opc_riskassessment.Main.Information>context.getFormContext();

            const bypassSuggestedRiskAppetite = formContext.getAttribute("opc_bypasssuggestedriskappetite").getValue();

            // Toggle field visibility
            XrmHelper.toggle(formContext.getControl("opc_bypassinitiatedby"), bypassSuggestedRiskAppetite);
            XrmHelper.toggle(formContext.getControl("opc_bypassrationale"), bypassSuggestedRiskAppetite);
            XrmHelper.toggle(formContext.getControl("opc_actualriskappetite"), bypassSuggestedRiskAppetite);

            // Set required fields
            if (bypassSuggestedRiskAppetite) {
                formContext.getAttribute("opc_bypassinitiatedby").setRequiredLevel("required");
                formContext.getAttribute("opc_bypassrationale").setRequiredLevel("required");
                formContext.getAttribute("opc_actualriskappetite").setRequiredLevel("required");
            }
        }
    }
}
