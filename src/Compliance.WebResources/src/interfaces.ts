import { injectable } from "inversify";

export interface IComplaintService {
    getComplaint(id: string): opc_complaint
}

export interface IAllegationService {
    getAllegation(id: string): opc_allegation
}

export interface IReminderService {
    getReminder(id: string): opc_reminder
}

export interface INotificationService {
    getNotification(id: string): opc_notification
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