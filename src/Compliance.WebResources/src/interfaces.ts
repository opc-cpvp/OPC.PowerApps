import { injectable } from "inversify";

export interface IComplaintService {
    getComplaint(id:string): opc_complaint
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

export interface IChecklistService {
    getChecklist(id: string): Promise<({ opc_questionid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result)[]>
    getQuestionTypes(): Promise<{ id: string, type: string }[]>
    updateChecklistResponse(responseid: string, value: string): Promise<undefined>
}

export interface IFormFactory {
    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(context: Xrm.ExecutionContext<TForm, any>) : IPowerForm<TForm>
}

export interface IControlFactory {
     createControl<TControl extends IPowerControl>(controlName: string): TControl
}

export interface IPowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>> {
    initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void;
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
        document.addEventListener("entity-save", (e) => {
            this.save()
        });
    }

    protected abstract save(): void;
}

export interface IPowerControl {
    initializeControl() : void
}