import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IContactService } from "../interfaces";

export namespace Contact.Forms {

    @injectable()
    export class MainForm implements IPowerForm<Form.contact.Main.ComplianceContact> {

        private _contactService: IContactService;

        constructor(@inject(nameof<IContactService>()) contactService: IContactService) {
            this._contactService = contactService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.contact.Main.ComplianceContact, any>): void {
            let formContext = <Form.contact.Main.ComplianceContact>initializationContext.getFormContext();

            this.multipleComplaintStrategy_setVisibleValues(formContext);
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
            let userSecurityRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
            let multipleComplaintStrategyValue = formContext.getAttribute("opc_multiplecomplaintstrategy").getValue();

            userSecurityRoles.forEach(x => { if (eval(x).name === intakeManagerRoleName) isIntakeManager = true });

            if (!isIntakeManager && multipleComplaintStrategyValue !== opc_multiplecomplaintstrategy.Applied) {
                formContext.getControl("opc_multiplecomplaintstrategy").removeOption(opc_multiplecomplaintstrategy.Applied);
            }
        }
    }
}