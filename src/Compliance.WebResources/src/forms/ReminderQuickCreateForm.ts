import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";
import { i18n } from "i18next";
import { XrmHelper } from "../helpers/XrmHelper";

export namespace Reminder.Forms {
    @injectable()
    export class QuickCreate implements IPowerForm<Form.opc_reminder.QuickCreate.QuickCreate> {
        private readonly _i18n: i18n;

        constructor(@inject(nameof<i18n>()) i18n: i18n) {
            this._i18n = i18n;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_reminder.QuickCreate.QuickCreate, any>): void {
            const formContext = <Form.opc_reminder.QuickCreate.QuickCreate>initializationContext.getFormContext();

            // Register handlers
            formContext.data.entity.addOnSave(x => this.form_OnSave(x));
            formContext.getAttribute("opc_notifycaseowner").addOnChange(x => this.control_OnChange_ClearAllNotifications(x));
            formContext.getAttribute("opc_notifyme").addOnChange(x => this.control_OnChange_ClearAllNotifications(x));
            formContext.getAttribute("opc_additionalusers").addOnChange(x => this.control_OnChange_ClearAllNotifications(x));
        }

        /**
         * Handles the form OnSave event.
         *
         * @event OnSave
         */
        private form_OnSave(context?: Xrm.SaveEventContext<Xrm.PageEntity<Form.opc_reminder.QuickCreate.QuickCreate.Attributes>>): void {
            const formContext = <Form.opc_reminder.QuickCreate.QuickCreate>context.getFormContext();

            // Get the controls and their values
            const notifyCaseOwnerControl = formContext.getControl("opc_notifycaseowner");
            const notifyReminderOwnerControl = formContext.getControl("opc_notifyme");
            const notifyAdditionalUsersControl = formContext.getControl("opc_additionalusers");
            const shouldNotifyCaseOwner = notifyCaseOwnerControl.getAttribute().getValue();
            const shouldNotifyReminderOwner = notifyReminderOwnerControl.getAttribute().getValue();
            const shouldNotifyAdditionalUsers = notifyAdditionalUsersControl.getAttribute().getValue();
            const containsComplaint = context.getContext().getQueryStringParameters()["parentrecordtype"] == "opc_complaint";

            // Check if at least one person is to be notified
            if (!shouldNotifyCaseOwner && !shouldNotifyReminderOwner && !shouldNotifyAdditionalUsers) {
                XrmHelper.setNotification(notifyCaseOwnerControl, this._i18n.t("reminder:error.nobody_selected"));
                XrmHelper.setNotification(notifyReminderOwnerControl, this._i18n.t("reminder:error.nobody_selected"));
                XrmHelper.setNotification(notifyAdditionalUsersControl, this._i18n.t("reminder:error.nobody_selected"));
                context.getEventArgs().preventDefault();
            }

            // Check if there is a case linked to the reminder if Notify Case Owner is checked.
            else if (shouldNotifyCaseOwner && !containsComplaint) {
                XrmHelper.setNotification(notifyCaseOwnerControl, this._i18n.t("reminder:error.case_must_be_linked"));
                context.getEventArgs().preventDefault();
            }
        }

        /**
         * Handles changes to controls on the form to clear all error notifications and allow a save event.
         *
         * @event OnChanged
         */
        private control_OnChange_ClearAllNotifications(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            XrmHelper.clearAllNotifications(context.getFormContext());
        }
    }
}
