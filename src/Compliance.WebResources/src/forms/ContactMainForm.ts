import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm } from "../interfaces";

export namespace Contact.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.contact.Main.ComplianceContact> {

        private _xrmUtility: Xrm.Utility;
        private _saveEventConfirmed: boolean = false;

        readonly intakeManagerGuid = "8fcba750-362e-ea11-a810-000d3af46757";
        readonly sysAdminRoleGuid = "34f59588-e306-ea11-a813-000d3af436d7";
        readonly sysCustomizerRoleGuid = "85f99588-e306-ea11-a813-000d3af436d7";

        constructor(@inject(nameof<Xrm.Utility>()) xrmUtility: Xrm.Utility) {
            this._xrmUtility = xrmUtility;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.contact.Main.ComplianceContact, any>): void {
            let formContext = <Form.contact.Main.ComplianceContact>initializationContext.getFormContext();

            // Register handlers
            formContext.getAttribute("opc_multiplecomplaintstrategy").addOnChange(x => this.multipleComplaintStrategy_OnChange(x));
            formContext.data.entity.addOnSave(x => this.form_OnSave(x));

            // Execution sequence matters
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
            let formContext = <Form.contact.Main.ComplianceContact>context.getFormContext();

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
            let isIntakeManager: boolean = this.isIntakeManager();

            let multipleComplaintStrategyValue = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();

            if (!isIntakeManager && multipleComplaintStrategyValue !== opc_multiplecomplaintstrategy.Applied) {
                formContext.getControl("opc_multiplecomplaintstrategy").removeOption(opc_multiplecomplaintstrategy.Applied);
            }
        }

        /**
        * Multiple Complaint Strategy notification display
        *
        * @event OnChange
        */
        private multipleComplaintStrategy_DisplayNotification(formContext: Form.contact.Main.ComplianceContact): void {
            let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            let multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();
            let firstName = formContext.getAttribute("firstname").getValue();
            let lastName = formContext.getAttribute("lastname").getValue();

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
            let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            let multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();
            let isIntakeManager: boolean = this.isIntakeManager();

            // Check if Contact is part of the Multiple Complaint Strategy
            // and lock the field unless user role is Intake Manager, Sys Admin or Sys Customizer
            multipleComplaintStrategyControl.setDisabled(multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !isIntakeManager);
        }

        /**
        * Multiple Complaint Strategy confirm dialog.
        *
        * @event OnSave
        */
        private multipleComplaintStrategy_ConfirmDialog(context: Xrm.SaveEventContext<Xrm.PageEntity<Form.contact.Main.ComplianceContact.Attributes>>): void {
            let formContext = <Form.contact.Main.ComplianceContact>context.getFormContext();
            let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            let multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();

            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied && !this._saveEventConfirmed) {
                let confirmStrings = {
                    text: "You are about to include this contact in the Multiple Complaint Strategy list. Would you like to proceed?",
                    title: "Multiple Complaint Strategy Confirmation"
                };

                // We need to prevent the save event before opening the confirmation dialog because
                // the confirmation dialog is async and the save event will continue while the dialog is open.
                context.getEventArgs().preventDefault();

                Xrm.Navigation.openConfirmDialog(confirmStrings).then(
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
            // Is supposed to return an array of objects containing id and name of each of the security role or teams that the user is associated with.
            // Only returns an array of string for now. Must be a bug.
            let userSecurityRoles = this._xrmUtility.getGlobalContext().userSettings.roles;
            let isIntakeManager: boolean = false;

            userSecurityRoles.forEach(role => {
                // Cast the string to the object it should be
                let roleObject = <{ id: string, name: string }><unknown>role;

                if (roleObject.id === this.intakeManagerGuid || roleObject.id === this.sysAdminRoleGuid || roleObject.id === this.sysCustomizerRoleGuid) {
                    isIntakeManager = true
                }
            });

            return isIntakeManager;
        }
    }
}