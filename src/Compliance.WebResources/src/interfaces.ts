import { injectable } from "inversify";

export interface IComplaintService {
}

export interface IAllegationService {
    getAllegation(id: string): opc_allegation
    getAllegationDispositionFilter(disposition: opc_allegationdisposition): string
    getAllegationDispositionActionFilter(dispositionReason: string): string
}

export interface IReminderService {
}

export interface INotificationService {
    markAsRead(id: string): void
}

export interface IContactService {
    getContact(id: string): Promise<Contact_Result>
    getDuplicateStatus(id: string): Promise<(Contact_Fixed & { opc_duplicatedetectionresult: opc_duplicatedetectionresult })>
}

export interface IChecklistService {
    getChecklist(id: string): Promise<({ opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result)[]>
    getQuestionTypes(): Promise<{ id: string, type: string }[]>
    updateChecklistResponse(responseid: string, value: string): Promise<undefined>
}

export interface IRiskAssessmentService {
    getRiskAppetites(): Promise<(opc_RiskAppetite_Fixed & { opc_riskappetiteid: string; } & { opc_name: string; } & { opc_value: number; })[]>
    getRiskDefinitions(id: string): Promise<(
        { opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result; } &
        { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result; } &
        { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result; } &
        opc_RiskAssessmentDefinition_Fixed &
        { opc_riskassessmentdefinitionid: string } &
        { opc_riskassessmentcategory_guid: string } &
        { opc_riskassessmentfactortemplate_guid: string } &
        { opc_riskassessmentdefinitiontemplate_guid: string } &
        { opc_isselected: boolean }
    )[]>
    updateRiskAssessmentDefinition(definitionid: string, value: boolean): Promise<undefined>
    updateSuggestedRisk(riskassessmentid: string, riskappetiteid: string | null): Promise<undefined>
}

export interface IUserService {
    hasIntakeManagerPermissions(userSecurityRoles: Xrm.Collection<Xrm.Role>): boolean
}

export interface IFormFactory {
    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(context: Xrm.ExecutionContext<TForm, any>): IPowerForm<TForm>
}

export interface IControlFactory {
    createControl<TControl extends IPowerControl>(controlName: string): TControl
}

export interface IPowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>> {
    initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void;
}

@injectable()
export abstract class PowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>
    implements IPowerForm<TForm>
{
    public initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void {

        // Automatically wire-up save event dispatching to iframes
        context.getFormContext().data.entity.addOnSave(ctx => this.handleIFrameSaves(ctx));

        context.getFormContext().ui.controls.forEach(ctrl => {
            if (!["webresource", "iframe"].find(c => c === ctrl.getControlType()))
                return;

            this.waitForWebResourceReady(ctrl, () => {
                let iframe = <HTMLIFrameElement>ctrl.getObject();
                if (iframe) {
                    (iframe.contentDocument || iframe.contentWindow.document).addEventListener("entity-save-completed", (e) => {
                        context.getFormContext().data.refresh();
                    });
                }
            });
        });
    }

    private handleIFrameSaves(ctx: Xrm.SaveEventContext<Xrm.PageEntity<Xrm.AttributeCollectionBase>>): any {
        // Find all iframes and dispatch save events
        ctx.getFormContext().ui.controls.forEach(ctrl => {
            // If control is a web resource or an iframe (basically same thing?)
            let ctype = ctrl.getControlType();
            if (ctype === "webresource" || ctype === "iframe") {
                // Retrieve the iframe and dispatch the custom save event
                let iframe = <HTMLIFrameElement>ctrl.getObject();
                if (iframe) {
                    // Note if iframe is not loaded, its not going to get in here.
                    let event = new Event("entity-save");
                    (iframe.contentDocument || iframe.contentWindow.document).dispatchEvent(event);
                }
            }
        });
    }

    private waitForWebResourceReady(ctrl: Xrm.AnyControl, functionRef: () => any): void {
        if (ctrl.getObject()?.contentDocument?.readyState !== "complete" ||
            ctrl.getObject()?.contentWindow?.location?.href?.indexOf("about:blank") > -1) {
            setTimeout(() => {
                this.waitForWebResourceReady(ctrl, functionRef)
            }, 20);
            return;
        }

        functionRef();
    }
}

@injectable()
export abstract class PowerIFrameControl implements IPowerControl {
    protected readonly documentContext: Document;
    protected readonly xrmContext: Xrm.context;

    constructor(xrmContext: Xrm.context, documentContext: Document) {
        this.documentContext = documentContext;
        this.xrmContext = xrmContext;
    }

    public initializeControl() {
        // Add listener for parent form trigerred save event
        this.documentContext.addEventListener("entity-save", (e) => {
            this.save(e)
        });
    }

    public abstract save(event: Event): void;
}

export interface IPowerControl {
    initializeControl(): void
}