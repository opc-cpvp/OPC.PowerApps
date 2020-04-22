import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
    isIntakeManager(): boolean {
        enum ROLES_GUIDS {
            IntakeManager = "8fcba750-362e-ea11-a810-000d3af46757",
            SystemAdministrator = "34f59588-e306-ea11-a813-000d3af436d7",
            SystemCustomizer = "85f99588-e306-ea11-a813-000d3af436d7",
        }

        const userSecurityRoles: Xrm.Collection<Xrm.Role> = Xrm.Utility.getGlobalContext().userSettings.roles;
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