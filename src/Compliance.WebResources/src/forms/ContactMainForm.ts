import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";

export namespace Contact.Forms {
    enum ROLES_GUIDS {
        IntakeManager = "8fcba750-362e-ea11-a810-000d3af46757",
        SystemAdministrator = "34f59588-e306-ea11-a813-000d3af436d7",
        SystemCustomizer = "85f99588-e306-ea11-a813-000d3af436d7",
    }

    @injectable()
    export class MainForm implements IPowerForm<Form.contact.Main.ComplianceContact> {

        private _xrmUtility: Xrm.Utility;
        private _xrmNavigation: Xrm.Navigation;
        private _saveEventConfirmed: boolean = false;
        private _isIntakeManager: boolean;

        constructor(@inject(nameof<Xrm.Utility>()) xrmUtility: Xrm.Utility, @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation) {
            this._xrmUtility = xrmUtility;
            this._xrmNavigation = xrmNavigation;
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
            this._isIntakeManager = this.isIntakeManager();
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

            if (!this._isIntakeManager && multipleComplaintStrategyValue !== opc_multiplecomplaintstrategy.Applied) {
                formContext.getControl("opc_multiplecomplaintstrategy").removeOption(opc_multiplecomplaintstrategy.Applied);
            }
        }

        /**
        * Multiple Complaint Strategy notification display
        *
        * @event OnChange
        */
        private multipleComplaintStrategy_DisplayNotification(formContext: Form.contact.Main.ComplianceContact): void {
            const multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            const multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();
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
            const multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();

            // Check if Contact is part of the Multiple Complaint Strategy
            // and lock the field unless user role is Intake Manager, Sys Admin or Sys Customizer
            multipleComplaintStrategyControl.setDisabled(multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !this._isIntakeManager);
        }

        /**
        * Multiple Complaint Strategy confirm dialog.
        *
        * @event OnSave
        */
        private multipleComplaintStrategy_ConfirmDialog(context: Xrm.SaveEventContext<Xrm.PageEntity<Form.contact.Main.ComplianceContact.Attributes>>): void {
            const formContext = <Form.contact.Main.ComplianceContact>context.getFormContext();
            const multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            const multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();

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

        /**
        * Returns whether the current user is an Intake Manager, a System Administrator or a System Customizer
        *
        * @event OnChange
        */
        private isIntakeManager(): boolean {
            const userSecurityRoles: Xrm.Collection<Xrm.Role> = this._xrmUtility.getGlobalContext().userSettings.roles;
            const intakeManagerGuids: string[] = [ROLES_GUIDS.IntakeManager, ROLES_GUIDS.SystemAdministrator, ROLES_GUIDS.SystemCustomizer];
            let isIntakeManager: boolean = false;

            for (const role of userSecurityRoles.get()) {
                if (intakeManagerGuids.includes(role.id)) {
                    isIntakeManager = true;
                    break;
                }
            }

            return isIntakeManager;
        }
    }
}