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

export interface IFormFactory {
    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(context: Xrm.ExecutionContext<TForm, any>) : IPowerForm<TForm>
}

export interface IPowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>> {
    initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void;
}
