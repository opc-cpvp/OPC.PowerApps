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
    getPotentialDuplicates(contact: Contact_Result): Promise<IBaseContact[]>
}

export interface IChecklistService {
    getChecklist(id: string): Promise<({ opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result)[]>
    getQuestionTypes(): Promise<{ id: string, type: string }[]>
    updateChecklistResponse(responseid: string, value: string): Promise<undefined>
}

export interface IUserService {
    hasIntakeManagerPermissions(userSecurityRoles: Xrm.Collection<Xrm.Role>): boolean
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

export type ExtendedXrmPageBase = Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase> & { getAttribute(attributeName: string): Xrm.Attribute<any>, getControl(controlName: string): Xrm.AnyControl }

export interface IFormFactory {
    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(context: Xrm.ExecutionContext<TForm, any>): IPowerForm<TForm>
}

export interface IControlFactory {
    createControl<TControl extends IPowerControl>(controlName: string): TControl
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
    dispatch<TForm extends ExtendedXrmPageBase>(command: string, field: string, context: TForm): void
}

export interface ICommandHandler {
    execute<TForm extends ExtendedXrmPageBase>(field: string, context: TForm): void
}

@injectable()
export abstract class PowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>
    implements IPowerForm<TForm>
{
    public initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void {

        // Automatically wire-up save event dispatching to iframes
        context.getFormContext().data.entity.addOnSave(ctx => this.handleIFrameSaves(ctx));
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
            this.save()
        });
    }

    public abstract save(): void;
}

export interface IPowerControl {
    initializeControl(): void
}