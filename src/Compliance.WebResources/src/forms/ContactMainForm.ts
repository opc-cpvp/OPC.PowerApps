import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IUserService } from "../interfaces";
import { i18n } from "i18next";
import { XrmHelper } from "../helpers/XrmHelper";
import { PowerForm } from "./PowerForm";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace Contact.Forms {
    @injectable()
    export class MainForm extends PowerForm<Form.contact.Main.ComplianceContact> {
        private readonly _userService: IUserService;
        private readonly _xrmNavigation: Xrm.Navigation;
        private readonly _xrmContext: Xrm.context;
        private readonly _i18n: i18n;

        private _saveEventConfirmed = false;
        private _hasIntakeManagerPermissions = false;

        constructor(
            @inject(nameof<i18n>()) i18n: i18n,
            @inject(nameof<IUserService>()) userService: IUserService,
            @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation,
            @inject(nameof<Xrm.context>()) xrmContext: Xrm.context
        ) {
            super();
            this._i18n = i18n;
            this._userService = userService;
            this._xrmNavigation = xrmNavigation;
            this._xrmContext = xrmContext;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.contact.Main.ComplianceContact, any>): void {
            super.initializeComponents(initializationContext);

            const formContext = initializationContext.getFormContext() as Form.contact.Main.ComplianceContact;

            // Register handlers
            formContext.getAttribute("opc_multiplecomplaintstrategy").addOnChange(x => this.multipleComplaintStrategy_OnChange(x));
            formContext.data.entity.addOnSave(x => this.form_OnSave(x));

            // Execution sequence matters
            this._hasIntakeManagerPermissions = this._userService.hasIntakeManagerPermissions(this._xrmContext.userSettings.roles);
            this.multipleComplaintStrategy_setVisibleValues(formContext);
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();
        }

        /**
         * Handles the form OnSave event.
         *
         * @event OnSave
         */
        private form_OnSave(context?: Xrm.SaveEventContext<Xrm.PageEntity<Form.contact.Main.ComplianceContact.Attributes>>): void {
            this.multipleComplaintStrategy_ConfirmDialog(context);
        }
        /**
         * Handles changes to Multiple Complaint Strategy attribute.
         *
         * @event OnChanged
         */
        private multipleComplaintStrategy_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            const formContext = context.getFormContext() as Form.contact.Main.ComplianceContact;

            if (formContext.ui.getFormType() !== Xrm.FormType.Create) {
                this.multipleComplaintStrategy_DisplayNotification(formContext);
                this.multipleComplaintStrategy_SetDisabled(formContext);
            }
        }

        /**
         * Multiple Complaint Strategy set visible values of option set
         *
         * @event OnChange
         */
        private multipleComplaintStrategy_setVisibleValues(formContext: Form.contact.Main.ComplianceContact): void {
            const multipleComplaintStrategyValue = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();

            if (!this._hasIntakeManagerPermissions && multipleComplaintStrategyValue !== opc_multiplecomplaintstrategy.Applied) {
                formContext.getControl("opc_multiplecomplaintstrategy").removeOption(opc_multiplecomplaintstrategy.Applied);
            }
        }

        /**
         * Multiple Complaint Strategy notification display
         *
         * @event OnChange
         */
        private multipleComplaintStrategy_DisplayNotification(formContext: Form.contact.Main.ComplianceContact): void {
            // Clear Notification
            XrmHelper.clearAllNotifications(formContext);

            // Check if Contact is part of the Multiple Complaint Strategy
            const multipleComplaintStrategy = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();
            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied) {
                // Display Notification
                XrmHelper.setFormNotification(formContext, "INFO", this._i18n.t("contact:mcs.warning", { context: "contact" }));
            }
        }

        /**
         * Multiple Complaint Strategy field set disabled.
         *
         * @event OnChange
         */
        private multipleComplaintStrategy_SetDisabled(formContext: Form.contact.Main.ComplianceContact): void {
            const multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            const multipleComplaintStrategy = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();

            // Check if Contact is part of the Multiple Complaint Strategy
            // and lock the field unless user role is Intake Manager, Sys Admin or Sys Customizer
            multipleComplaintStrategyControl.setDisabled(
                multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !this._hasIntakeManagerPermissions
            );
        }

        /**
         * Multiple Complaint Strategy confirm dialog.
         *
         * @event OnSave
         */
        private multipleComplaintStrategy_ConfirmDialog(
            context: Xrm.SaveEventContext<Xrm.PageEntity<Form.contact.Main.ComplianceContact.Attributes>>
        ): void {
            const formContext = context.getFormContext() as Form.contact.Main.ComplianceContact;
            const multipleComplaintStrategy = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();
            const mcsFieldIsDirty = formContext.getAttribute("opc_multiplecomplaintstrategy").getIsDirty();

            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !this._saveEventConfirmed && mcsFieldIsDirty) {
                const confirmStrings = {
                    title: this._i18n.t("contact:mcs.confirmation.title"),
                    text: this._i18n.t("contact:mcs.confirmation.text")
                };

                // We need to prevent the save event before opening the confirmation dialog because
                // the confirmation dialog is async and the save event will continue while the dialog is open.
                context.getEventArgs().preventDefault();

                this._xrmNavigation
                    .openConfirmDialog(confirmStrings)
                    .then(success => {
                        if (success.confirmed) {
                            this._saveEventConfirmed = true;
                            formContext.data.entity.save();
                        } else {
                            this._saveEventConfirmed = false;
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }
}
