import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IContactService } from "../interfaces";

export namespace Contact.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.contact.Main.ComplianceContact> {

        private _contactService: IContactService;
        private _xrmUtility: Xrm.Utility;

        constructor(@inject(nameof<IContactService>()) contactService: IContactService, @inject(nameof<Xrm.Utility>()) xrmUtility: Xrm.Utility) {
            this._contactService = contactService;
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

            // Execution sequence matters
            this.multipleComplaintStrategy_setVisibleValues(formContext);
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();
        }
        /**
        * Handles changes to "Notify Additional Users" control to display/hide additional users section.
        *
        * @event OnChanged
        */
        private multipleComplaintStrategy_setVisibleValues(formContext: Form.contact.Main.ComplianceContact): void {
            // Since the GUID will always be different depending on the environment, we will use the role name
            let intakeManagerRoleName = "Compliance - Intake Manager";
            let isIntakeManager: boolean = false;
            let userSecurityRoles = this._xrmUtility.getGlobalContext().userSettings.roles;
            let multipleComplaintStrategyValue = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();

            // TODO: I need to find a proper way to do this check instead of JSON.parse(JSON.stringify(x))
            //userSecurityRoles.forEach(x => { if (JSON.parse(JSON.stringify(x)).name === intakeManagerRoleName) isIntakeManager = true });
            userSecurityRoles.forEach(x => { if (JSON.stringify(x).includes(intakeManagerRoleName)) isIntakeManager = true });

            if (!isIntakeManager && multipleComplaintStrategyValue !== opc_multiplecomplaintstrategy.Applied) {
                formContext.getControl("opc_multiplecomplaintstrategy").removeOption(opc_multiplecomplaintstrategy.Applied);
            }
        }
        /**
        * Handles changes to Multiple Complaint Strategy attribute.
        *
        * @event OnChanged
        */
        private multipleComplaintStrategy_OnChange(context?: Xrm.ExecutionContext<Xrm.Attribute<any>, any>): void {
            let formContext = <Form.contact.Main.ComplianceContact>context.getFormContext();
            let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
            let multipleComplaintStrategy = multipleComplaintStrategyControl.getAttribute().getValue();
            let firstName = formContext.getAttribute("firstname").getValue();
            let lastName = formContext.getAttribute("lastname").getValue();

            if (formContext.ui.getFormType() === Xrm.FormType.Create)
                return;

            // Clear Notification
            formContext.ui.clearFormNotification("formNotificationMCS");

            // Check if Contact is part of the Multiple Complaint Strategy
            if (multipleComplaintStrategy === opc_multiplecomplaintstrategy.Applied) {
                // Display Notification
                formContext.ui.setFormNotification(`${firstName ? firstName : ""} ${lastName} is part of the Multiple Complaint Strategy.`, "INFO", "formNotificationMCS");
            }
        }
    }
}