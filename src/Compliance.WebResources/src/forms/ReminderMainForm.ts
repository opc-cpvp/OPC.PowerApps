import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";

export namespace Reminder.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_reminder.Main.Information> {

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_reminder.Main.Information, any>): void {
            const formContext = <Form.opc_reminder.Main.Information>initializationContext.getFormContext();

            // Register handlers
            formContext.data.entity.addOnSave(x => this.form_OnSave(x));
            formContext.getAttribute("opc_notifycaseowner").addOnChange(x => this.control_OnChange_ClearAllNotifications(x));
            formContext.getAttribute("opc_notifyme").addOnChange(x => this.control_OnChange_ClearAllNotifications(x));
            formContext.getAttribute("opc_notifyadditionalusers").addOnChange(x => this.control_OnChange_ClearAllNotifications(x));
            formContext.getAttribute("opc_notifyadditionalusers").addOnChange(x => this.notifyAdditionalUsers_OnChange(x));

            // Fire OnChanges
            formContext.getAttribute("opc_notifyadditionalusers").fireOnChange();
        }
        /**
        * Handles the form OnSave event.
        *
        * @event OnSave
        */
        private form_OnSave(context?: Xrm.SaveEventContext<Xrm.PageEntity<Form.opc_reminder.Main.Information.Attributes>>): void {
            const formContext = <Form.opc_reminder.Main.Information>context.getFormContext();

            //Get the controls and their values
            const notifyCaseOwnerControl = formContext.getControl("opc_notifycaseowner");
            const notifyReminderOwnerControl = formContext.getControl("opc_notifyme");
            const notifyAdditionalUsersControl = formContext.getControl("opc_notifyadditionalusers");
            const complaintIdControl = formContext.getControl("opc_complaintid");
            const shouldNotifyCaseOwner = notifyCaseOwnerControl.getAttribute().getValue();
            const shouldNotifyReminderOwner = notifyReminderOwnerControl.getAttribute().getValue();
            const shouldNotifyAdditionalUsers = notifyAdditionalUsersControl.getAttribute().getValue();
            const containsComplaint = complaintIdControl.getAttribute().getValue();

            //Check if at least one person is to be notified
            if (!shouldNotifyCaseOwner && !shouldNotifyReminderOwner && !shouldNotifyAdditionalUsers) {
                formContext.ui.setFormNotification("There is an error on the form.", "ERROR", "formNotificationError");
                notifyCaseOwnerControl.setNotification("You must select at least one person to notify.", "notifyCaseOwnerControlNotification");
                notifyReminderOwnerControl.setNotification("You must select at least one person to notify.", "notifyReminderOwnerAlert");
                notifyAdditionalUsersControl.setNotification("You must select at least one person to notify.", "notifyAdditionalUsersAlert");

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
        private control_OnChange_ClearAllNotifications(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = <Form.opc_reminder.Main.Information>context.getFormContext();
            formContext.ui.clearFormNotification("formNotificationError");
            formContext.ui.controls.forEach(control => control.clearNotification());
        }
        /**
        * Handles changes to "Notify Additional Users" control to display/hide additional users section.
        *
        * @event OnChanged
        */
        private notifyAdditionalUsers_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = <Form.opc_reminder.Main.Information>context.getFormContext();
            const shouldNotifyAdditionalUsers = formContext.getControl("opc_notifyadditionalusers").getAttribute().getValue();
            const gridAdditionalUsers = formContext.getControl("grid_additionalusers");
            gridAdditionalUsers.setVisible(shouldNotifyAdditionalUsers);
        }
    }
}