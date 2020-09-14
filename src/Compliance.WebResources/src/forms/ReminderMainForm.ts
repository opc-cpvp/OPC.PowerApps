import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IReminderService } from "../interfaces";
import { i18n } from "i18next";
import { XrmHelper } from "../helpers/XrmHelper";

export namespace Reminder.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.opc_reminder.Main.Information> {

        private readonly _i18n: i18n;
        private readonly _reminderService: IReminderService;

        constructor(@inject(nameof<i18n>()) i18n: i18n, @inject(nameof<IReminderService>()) reminderService: IReminderService) {
            this._i18n = i18n;
            this._reminderService = reminderService;
        }

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
        }

        /**
        * Handles the form OnSave event.
        *
        * @event OnSave
        */
        private async form_OnSave(context?: Xrm.SaveEventContext<Xrm.PageEntity<Form.opc_reminder.Main.Information.Attributes>>) : Promise<void> {
            const formContext = <Form.opc_reminder.Main.Information>context.getFormContext();

            // Because we cannot hook an onChange on the grid, we are pre-clearing on the save.
            XrmHelper.clearAllNotifications(formContext);

            //Get the controls and their values
            const notifyCaseOwnerControl = formContext.getControl("opc_notifycaseowner");
            const notifyReminderOwnerControl = formContext.getControl("opc_notifyme");
            const complaintIdControl = formContext.getControl("opc_complaintid");
            const shouldNotifyCaseOwner = notifyCaseOwnerControl.getAttribute().getValue();
            const shouldNotifyReminderOwner = notifyReminderOwnerControl.getAttribute().getValue();
            const containsComplaint = complaintIdControl.getAttribute().getValue();

            //Check if at least one person is to be notified
            if (!shouldNotifyCaseOwner && !shouldNotifyReminderOwner) {

                // Only query for additional user check if the two other fields are not selected to minimize API calls.
                const hasAdditionalUsersToNotify = this._reminderService.hasAdditionalUsersToNotify(formContext.data.entity.getId());
                if (!await hasAdditionalUsersToNotify) {

                    // Only setting form notifications because there does not seem to be away to set a notification for the
                    // underlaying pcf (it throws an error on SetNotification)
                    XrmHelper.setFormNotification(formContext, "ERROR", this._i18n.t("reminder:error.nobody_selected"))
                    context.getEventArgs().preventDefault();
                }
            }

            // Check if there is a case linked to the reminder if Notify Case Owner is checked.
            else if (shouldNotifyCaseOwner && !containsComplaint) {
                XrmHelper.setNotification(notifyCaseOwnerControl, this._i18n.t("reminder:error.case_must_be_linked"))
                context.getEventArgs().preventDefault();
            }
        }

        /**
        * Handles changes to controls on the form to clear all error notifications and allow a save event.
        *
        * @event OnChanged
        */
        private control_OnChange_ClearAllNotifications(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any> | Xrm.ExecutionContext<Xrm.BaseControl, any>) : void {
            XrmHelper.clearAllNotifications(context.getFormContext());
        }
    }
}