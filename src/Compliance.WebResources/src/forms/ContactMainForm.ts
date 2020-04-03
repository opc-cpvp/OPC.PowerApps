import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IContactService } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";

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
        private multipleComplaintStrategy_setVisibleValues(): void {
            // Since the GUID will always be the same because it is hardcoded
            // SEE: OPC.PowerApps\src\Compliance.Package\Deployment\ComplianceDeployment.cs
            let intakeManagerRoleGuid = "194707af-f01d-4984-b8e2-4d7b5d54d565";

            // TODO: DEPRECATED IF YOU LOOK AT DOC ONLINE. SHOULD USE roles BUT IS NOT AVAILABLE.
            // I THINK THE RELEASE DATE IS April 24, 2020
            // LOOK INTO THIS https://docs.microsoft.com/en-us/power-platform/important-changes-coming
            let userSecurityRoles = Xrm.Utility.getGlobalContext().userSettings.securityRoles;
            let userRoles = Xrm.Utility.getGlobalContext().userSettings;

            console.log(Xrm.Utility.getGlobalContext().userSettings);
            console.log("YOOOOOOOOO JOJO");
            console.log(userSecurityRoles);
            console.log("!userSecurityRoles.includes(intakeManagerRoleGuid)");
            console.log(!userSecurityRoles.includes(intakeManagerRoleGuid));

            if (!userSecurityRoles.includes(intakeManagerRoleGuid)) {
                //let multipleComplaintStrategyControl = formContext.getControl("opc_multiplecomplaintstrategy");


            }
        }
    }
}