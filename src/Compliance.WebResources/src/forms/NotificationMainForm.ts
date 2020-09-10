import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, INotificationService } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";
import { WindowHelper } from "../helpers/WindowHelper";

export namespace Notification.Forms {
    @injectable()
    export class MainForm implements IPowerForm<Form.opc_notification.Main.Information> {
        private _notificationService: INotificationService;
        private readonly _context: Xrm.context;

        constructor(
            @inject(nameof<INotificationService>()) notificationService: INotificationService,
            @inject(nameof<Xrm.context>()) context: Xrm.context
        ) {
            this._notificationService = notificationService;
            this._context = context;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_notification.Main.Information, any>): void {
            const formContext = <Form.opc_notification.Main.Information>initializationContext.getFormContext();
            const notificationIdValue = formContext.data.entity.getId();
            const complaintIdValue = formContext.getAttribute("opc_complaintid").getValue();
            const entityFormOptions = { entityName: "", entityId: "" };

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
                // Use location replace instead of a OOB feature to remove this current page from the browsing history
                const url =
                    this._context.getCurrentAppUrl() +
                    `&pagetype=entityrecord&etn=${entityFormOptions["entityName"]}&id=${encodeURIComponent(entityFormOptions["entityId"])}`;
                WindowHelper.replaceLocation(url);
            }
        }
    }
}
