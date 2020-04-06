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
            this.multipleComplaintStrategy_setVisibleValues();
        }
        /**
        * Handles changes to "Notify Additional Users" control to display/hide additional users section.
        *
        * @event OnChanged
        */
        private multipleComplaintStrategy_setVisibleValues(context?: Xrm.ExecutionContext<Xrm.OptionSetAttribute<boolean>, any>): void {
            let formContext = <Form.contact.Main.Information>context.getFormContext();

            // Since the GUID will always be different depending on the environment, we will use the role name
            let intakeManagerRoleName = "Compliance - Intake Manager";
            let userSecurityRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
            let isIntakeManager: boolean = false;
            userSecurityRoles.forEach(x => { if (eval(x).name === intakeManagerRoleName) isIntakeManager = true });

            if (!isIntakeManager) {
                let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");
                //let optionSetValues = multipleComplaintStrategyControl.getAttribute().getOptions();


            }
        }
    }
}