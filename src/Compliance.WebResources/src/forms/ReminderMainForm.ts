import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IReminderService } from "../interfaces";

export namespace Reminder.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_reminder.Main.Information> {

        private _reminderService: IReminderService;

        constructor(@inject(nameof<IReminderService>()) reminderService: IReminderService) {
            this._reminderService = reminderService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_reminder.Main.Information, any>): void {
            let formContext = <Form.opc_reminder.Main.Information>initializationContext.getFormContext();
            formContext.data.entity.addOnSave(this.form_OnSave);
            formContext.getAttribute("opc_notifycaseowner").addOnChange(this.control_OnChange_ClearAllNotifications);
            formContext.getAttribute("opc_notifyme").addOnChange(this.control_OnChange_ClearAllNotifications);
        }
        /**
        * Handles the form OnSave event.
        *
        * @event OnSave
        */
        private form_OnSave(context?: Xrm.ExecutionContext<Xrm.PageEntity<Form.opc_reminder.Main.Information.Attributes>, any>): void {
            let formContext = <Form.opc_reminder.Main.Information>context.getFormContext();

            //Get the controls and their values
            let notifyCaseOwnerControl = formContext.getControl("opc_notifycaseowner");
            let notifyReminderOwnerControl = formContext.getControl("opc_notifyme");
            let complaintIdControl = formContext.getControl("opc_complaintid");

            let shouldNotifyCaseOwner = notifyCaseOwnerControl.getAttribute().getValue();
            let shouldNotifyReminderOwner = notifyReminderOwnerControl.getAttribute().getValue();
            let containsComplaint = complaintIdControl.getAttribute().getValue();

            //Check if at least one person is to be notified
            if (!shouldNotifyCaseOwner && !shouldNotifyReminderOwner) {
                formContext.ui.setFormNotification("There is an error on the form.", "ERROR", "formNotificationError");
                notifyCaseOwnerControl.setNotification("You must select at least one person to notify.", "notifyCaseOwnerControlNotification");
                notifyReminderOwnerControl.setNotification("You must select at least one person to notify.", "notifyReminderOwnerAlert");

                context.getEventArgs().preventDefault();
            }

            //Check if there is a case linked to the reminder if Notify Case Owner is checked.
            if (shouldNotifyCaseOwner && containsComplaint == null) {
                formContext.ui.setFormNotification("There is an error on the form.", "ERROR", "formNotificationError");
                notifyCaseOwnerControl.setNotification("To notify the case owner, you must have at least one case linked to the reminder.", "notifyCaseOwnerAlert");

                context.getEventArgs().preventDefault();
            }
        }

        /**
        * Handles changes to controls on the form to clear all error notifications and allow a save event.
        *
        * @event OnChanged
        */
        private control_OnChange_ClearAllNotifications(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<boolean>, any>): void {
            let formContext = <Form.opc_reminder.Main.Information>context.getFormContext();
            formContext.ui.clearFormNotification("formNotificationError");
            formContext.ui.controls.forEach(control => control.clearNotification());
        }
    }
}