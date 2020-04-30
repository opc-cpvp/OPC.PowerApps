import { injectable } from "inversify";
import "reflect-metadata";
import { IUserService } from "../interfaces";
import { ROLES } from "../enums";

@injectable()
export class UserService implements IUserService {
    hasIntakeManagerPermissions(userSecurityRoles: Xrm.Collection<Xrm.Role>): boolean {
        const intakeManagerGuids: string[] = [ROLES.ComplianceIntakeManager, ROLES.SystemAdministrator, ROLES.SystemCustomizer];
        let hasIntakeManagerPermissions: boolean = false;
        for (const role of userSecurityRoles.get()) {
            if (intakeManagerGuids.includes(role.id)) {
                hasIntakeManagerPermissions = true;
                break;
            }
        }
        return hasIntakeManagerPermissions;
    }
}
