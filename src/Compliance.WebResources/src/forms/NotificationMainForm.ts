import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, INotificationService } from "../interfaces";

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
            if (formContext.getAttribute("statecode").getValue() == opc_notification_statecode.Active) {
                formContext.getAttribute("statuscode").setValue(opc_notification_statuscode.Read);
                formContext.data.save();
            }
        }
    }
}