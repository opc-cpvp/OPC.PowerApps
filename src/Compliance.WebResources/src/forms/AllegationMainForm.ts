import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IAllegationService } from "../interfaces";
import { PowerForm } from "./PowerForm";
import { XrmHelper } from "../helpers/XrmHelper";

export namespace Allegation.Forms {
    @injectable()
    export class MainForm extends PowerForm<Form.opc_allegation.Main.Information> {
        private _allegationService: IAllegationService;
        private _initializing = false;

        constructor(@inject(nameof<IAllegationService>()) allegationService: IAllegationService) {
            super();
            this._allegationService = allegationService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_allegation.Main.Information, any>): void {
            super.initializeComponents(initializationContext);
            this._initializing = true;
            const formContext = initializationContext.getFormContext() as Form.opc_allegation.Main.Information;

            // If not in create mode, display checklist responses section containing iframe
            if (formContext.ui.getFormType() !== Xrm.FormType.Create) {
                formContext.ui.tabs.get("tab_general").sections.get("section_checklist_responses").setVisible(true);
            }

            formContext.getAttribute("opc_disposition").addOnChange(x => this.disposition_OnChange(x));
            formContext.getAttribute("opc_disposition").fireOnChange();

            formContext.getAttribute("opc_dispositionreasonid").addOnChange(x => this.dispositionreason_OnChange(x));
            formContext.getAttribute("opc_dispositionreasonid").fireOnChange();

            formContext
                .getAttribute("opc_dispositionreasonid")
                .controls.forEach(x => x.addPreSearch(() => this.dispositionreason_PreSearch(formContext)));
            formContext
                .getAttribute("opc_dispositionactionid")
                .controls.forEach(x => x.addPreSearch(() => this.dispositionaction_PreSearch(formContext)));
            this._initializing = false;
        }

        private dispositionreason_OnChange(context: Xrm.ExecutionContext<Xrm.LookupAttribute<"opc_dispositionreason">, undefined>): void {
            const formContext = context.getFormContext() as Form.opc_allegation.Main.Information;
            const value = formContext.getAttribute("opc_dispositionreasonid").getValue();

            // Only try to filter if there is a value
            if (value) {
                // Hardcoding reasons that have an action to save a query roundtrip
                const isActionAvailable = [/* not a privacy complaint */ "{11DF9980-A76E-EA11-A811-000D3AF45A96}"].includes(value[0].id);
                formContext.getAttribute("opc_dispositionactionid").controls.forEach(c => XrmHelper.toggle(c, isActionAvailable));
            } else {
                formContext.getAttribute("opc_dispositionactionid").controls.forEach(c => XrmHelper.toggleOff(c));
            }
        }

        private disposition_OnChange(context: Xrm.ExecutionContext<Xrm.OptionSetAttribute<opc_allegationdisposition>, undefined>): void {
            const formContext = context.getFormContext() as Form.opc_allegation.Main.Information;

            // Hardcoding dispositions that have reasons to save a query roundtrip
            const isReasonAvailable = [opc_allegationdisposition.Unacceptable, opc_allegationdisposition.Resolved].includes(
                formContext.getAttribute("opc_disposition").getValue()
            );
            formContext
                .getAttribute("opc_dispositionreasonid")
                .controls.forEach(c => XrmHelper.toggle(c, isReasonAvailable, !this._initializing));

            formContext.getAttribute("opc_dispositionreasonid").fireOnChange();
        }

        private dispositionaction_PreSearch(formContext: Form.opc_allegation.Main.Information) {
            formContext
                .getAttribute("opc_dispositionactionid")
                .controls.forEach(x =>
                    x.addCustomFilter(
                        this._allegationService.getAllegationDispositionActionFilter(
                            formContext.getAttribute("opc_dispositionreasonid").getValue()[0].id
                        ),
                        "opc_dispositionaction"
                    )
                );
        }

        private dispositionreason_PreSearch(formContext: Form.opc_allegation.Main.Information) {
            formContext
                .getAttribute("opc_dispositionreasonid")
                .controls.forEach(x =>
                    x.addCustomFilter(
                        this._allegationService.getAllegationDispositionFilter(formContext.getAttribute("opc_disposition").getValue()),
                        "opc_dispositionreason"
                    )
                );
        }
    }
}
