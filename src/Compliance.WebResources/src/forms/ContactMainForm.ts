import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IUserService } from "../interfaces";

export namespace Contact.Forms {
    @injectable()
    export class MainForm implements IPowerForm<Form.contact.Main.ComplianceContact> {

        private _userService: IUserService;
        private _xrmNavigation: Xrm.Navigation;
        private _xrmContext: Xrm.context;
        private _saveEventConfirmed: boolean = false;
        private _hasIntakeManagerPermissions: boolean = false;

        constructor(@inject(nameof<IUserService>()) userService: IUserService, @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation, @inject(nameof<Xrm.context>()) xrmContext: Xrm.context) {
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
            const multipleComplaintStrategy = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();
            const firstName = formContext.getAttribute("firstname").getValue();
            const lastName = formContext.getAttribute("lastname").getValue();

            // Clear Notification
            formContext.ui.clearFormNotification("formNotificationMCS");

            // Check if Contact is part of the Multiple Complaint Strategy
            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied) {
                // Display Notification
                formContext.ui.setFormNotification(`${firstName ? firstName : ""} ${lastName} is part of the Multiple Complaint Strategy.`, "INFO", "formNotificationMCS");
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

            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !this._saveEventConfirmed) {
                const confirmStrings = {
                    text: "You are about to include this contact in the Multiple Complaint Strategy list. Would you like to proceed?",
                    title: "Multiple Complaint Strategy Confirmation"
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