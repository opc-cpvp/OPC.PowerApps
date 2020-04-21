import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, INotificationService } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";


export namespace Notification.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_notification.Main.Information> {

        private _notificationService: INotificationService;
        private _xrmNavigation: Xrm.Navigation;

        constructor(@inject(nameof<INotificationService>()) notificationService: INotificationService, @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation) {
            this._notificationService = notificationService;
            this._xrmNavigation = xrmNavigation;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_notification.Main.Information, any>): void {
            let formContext = <Form.opc_notification.Main.Information>initializationContext.getFormContext();
            let notificationIdValue = formContext.data.entity.getId();
            let complaintIdValue = formContext.getAttribute("opc_complaintid").getValue();
            let entityFormOptions = {entityName: "", entityId: ""};

            // Change the Status Reason of the notification from UNREAD to READ.
            if (formContext.getAttribute("statecode").getValue() == opc_notification_statecode.Active) {
                this._notificationService.markAsRead(notificationIdValue);
            }

            // Display the lookup field that contains the link to the related case if not empty.
            if (complaintIdValue != null) {
                XrmHelper.toggleOn(formContext.getControl("opc_complaintid"));
                entityFormOptions["entityName"] = "opc_complaint";
                entityFormOptions["entityId"] = complaintIdValue[0].id;
            }

            // Redirect to the related case if there is any.
            if (entityFormOptions.entityName !== "") {
                this._xrmNavigation.openForm(entityFormOptions);
            }
        }
    }
}