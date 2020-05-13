import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IUserService } from "../interfaces";
import { i18n } from "i18next";

export namespace Contact.Forms {
    @injectable()
    export class MainForm implements IPowerForm<Form.contact.Main.ComplianceContact> {

        private readonly _userService: IUserService;
        private readonly _xrmNavigation: Xrm.Navigation;
        private readonly _xrmContext: Xrm.context;
        private readonly _i18n: i18n;

        private _saveEventConfirmed: boolean = false;
        private _hasIntakeManagerPermissions: boolean = false;

        constructor(@inject(nameof<i18n>()) i18n: i18n, @inject(nameof<IUserService>()) userService: IUserService, @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation, @inject(nameof<Xrm.context>()) xrmContext: Xrm.context) {
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
            const formContext = <Form.contact.Main.ComplianceContact>initializationContext.getFormContext();

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
            const formContext = <Form.contact.Main.ComplianceContact>context.getFormContext();

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
            formContext.ui.clearFormNotification("formNotificationMCS");

            // Check if Contact is part of the Multiple Complaint Strategy
            const multipleComplaintStrategy = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();
            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied) {
                // Display Notification
                const firstName = formContext.getAttribute("firstname").getValue();
                const lastName = formContext.getAttribute("lastname").getValue();
                formContext.ui.setFormNotification(this._i18n.t("contact:mcs.warning", { context: 'main', fullname: (firstName ? firstName + " " : "") + lastName }), "INFO", "formNotificationMCS");
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
            multipleComplaintStrategyControl.setDisabled(multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !this._hasIntakeManagerPermissions);
        }

        /**
        * Multiple Complaint Strategy confirm dialog.
        *
        * @event OnSave
        */
        private multipleComplaintStrategy_ConfirmDialog(context: Xrm.SaveEventContext<Xrm.PageEntity<Form.contact.Main.ComplianceContact.Attributes>>): void {
            const formContext = <Form.contact.Main.ComplianceContact>context.getFormContext();
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

                this._xrmNavigation.openConfirmDialog(confirmStrings).then(
                    (success) => {
                        if (success.confirmed) {
                            this._saveEventConfirmed = true;
                            formContext.data.entity.save();
                        }
                        else {
                            this._saveEventConfirmed = false;
                        }
                    });
            }
        }
    }
}