import { injectable } from "inversify";
import * as Msal from 'msal';

export interface IComplaintService {
    getComplaint(id: string): Promise<opc_complaint>
    getComplaintWithRelationships(id: string): Promise<ComplaintWithRelationships>
    getSharePointDocumentLocation(id: string): Promise<SharePointDocumentLocation>
    getAllegationsWithChecklistResponses(id: string): Promise<AllegationWithChecklistResponse[]>
}

export interface IAllegationService {
    getAllegation(id: string): opc_allegation
    getAllegationDispositionFilter(disposition: opc_allegationdisposition): string
    getAllegationDispositionActionFilter(dispositionReason: string): string
}

export interface IReminderService {
    hasAdditionalUsersToNotify(id: string): Promise<boolean>
}

export interface INotificationService {
    markAsRead(id: string): void
}

export interface IContactService {
    getContact(id: string): Promise<Contact_Result>
    getDuplicateStatus(id: string): Promise<(Contact_Fixed & { opc_duplicatedetectionresult: opc_duplicatedetectionresult })>
    getPotentialDuplicates(contact: Contact_Result): Promise<IBaseContact[]>
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
    getUserEmail(id: string): Promise<string>
}

export interface IEnvironmentVariableService {
    getEnvironmentVariable(schemaName: string): Promise<string>
}

export interface ISharePointService {
    getTemplates(sharePointSiteUrl: string, templatesFolderPath: string, accessToken: string): Promise<any[]>
    generateDocumentFromTemplate(accessToken: string, caseFolderPath: string, templatePath: string, xmlData: string, documentName: string, sharePointSiteUrl: string): Promise<Xrm.WebApiResponse>
}

export interface IAuthService {
    getAccessToken(msalConfig: Msal.Configuration, tokenRequest: Msal.AuthenticationParameters): Promise<string>
}

export interface IBaseContact {
    contactid: string,
    firstname: string,
    lastname: string,
    telephone1: string,
    telephone2: string,
    address1_postalcode: string,
    emailaddress1: string,
};

export type IPotentialDuplicate = IBaseContact & { numberOfFieldMatches: number }

export type WindowContext = Window & typeof globalThis

export type TemplateEnvironmentVariable = {
    applicationId: string;
    tenantId: string;
    sharePointSiteUrl: string;
    templatesFolderPath: string;
    tokenScope: string[];
    authorityBaseUrl: string;
}

export type AllegationWithChecklistResponse = opc_allegation & opc_allegation_FormattedResult & { opc_allegation_checklistresponses_allegation?: opc_ChecklistResponse_Result[] }

export type ComplaintWithRelationships = opc_complaint &
{ opc_legislation: opc_legislation_Result } &
{ opc_opcpriorityid: opc_opcpriority_Result } &
{ opc_sectorid: opc_sector_Result } &
{ opc_intakeofficer: SystemUser_Result } &
{ owninguser: SystemUser_Result } &
{ opc_complainant: Contact_Result } &
{ opc_complainantrep: Contact_Result } &
{ opc_complainantlegalrepresentative: Contact_Result } &
{ opc_complainantlegalrepresentativefirm: Account_Result } &
{ opc_accountid: Account_Result } &
{ opc_respondentlegalrepresentativefirm: Account_Result } &
{ opc_respondentrepresentative: Contact_Result } &
{ opc_respondentlegalrepresentative: Contact_Result }

export type ExtendedXrmPageBase = Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase> & { getAttribute(attributeName: string): Xrm.Attribute<any>, getControl(controlName: string): Xrm.AnyControl }

export interface IFormFactory {
    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(context: Xrm.ExecutionContext<TForm, any>): IPowerForm<TForm>
}

export interface IControlFactory {
    createControl<TControl extends IPowerControl>(controlName: string): TControl
}

export interface IDialogFactory {
    createDialog<TDialog extends IPowerDialog>(dialogName: string): TDialog
}

export interface IPowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>> {
    initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void;
}

export interface IQueryDispatcher {
    dispatchAsync<TForm extends ExtendedXrmPageBase>(command: string, field: string, context: TForm): Promise<any>
}

export interface IQueryHandler {
    executeAsync<TForm extends ExtendedXrmPageBase>(field: string, context: TForm): Promise<any>
}

export interface ICommandDispatcher {
    dispatch<TForm extends ExtendedXrmPageBase>(context: TForm, command: string, field?: string): void
}

export interface ICommandHandler {
    execute<TForm extends ExtendedXrmPageBase>(context: TForm, field?: string): void
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

    public init() {
        // Add listener for parent form trigerred save event
        this.documentContext.addEventListener("entity-save", (e) => {
            this.save()
        });
    }

    public abstract save(): void;
}

export interface IPowerControl {
    init(): void
}

export interface IPowerDialog {
    init(): void
}