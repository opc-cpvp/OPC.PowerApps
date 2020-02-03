import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, INotificationService } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";

export namespace Notification.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_notification.Main.Information> {

        private _notificationService: INotificationService;

        constructor(@inject(nameof<INotificationService>()) notificationService: INotificationService) {
            this._notificationService = notificationService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_notification.Main.Information, any>): void {
            let formContext = <Form.opc_notification.Main.Information>initializationContext.getFormContext();
            let complaintIdValue = formContext.getAttribute("opc_complaintid").getValue();
            let entityFormOptions = {entityName: "", entityId: ""};

            // Change the Status Reason of the notification from UNREAD to READ.
            if (formContext.getAttribute("statecode").getValue() == opc_notification_statecode.Active) {
                formContext.getAttribute("statuscode").setValue(opc_notification_statuscode.Read);
            }

            // Display the lookup field that contains the link to the related case if not empty.
            // And
            // Redirect to the related case if there is any.
            if (complaintIdValue != null) {
                XrmHelper.turnOn(formContext.getControl("opc_complaintid"));
                entityFormOptions["entityName"] = "opc_complaint";
                entityFormOptions["entityId"] = complaintIdValue[0].id;
            }

            // Tried using formContext.data.entity.save() because it is SYNC instead of formContext.data.save() that is ASYNC but it made no difference on the form.
            formContext.data.save().then(() => {
                Xrm.Navigation.openForm(entityFormOptions);
            });
        }
    }
}