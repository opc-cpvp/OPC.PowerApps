import { injectable } from "inversify";
import "reflect-metadata";
import { IUserService } from "../interfaces";
import { Roles } from "../enums";

@injectable()
export class UserService implements IUserService {
    getUserEmail(id: string): Promise<string> {
        return XrmQuery.retrieve(x => x.systemusers, id)
            .promise()
            .then(x => {
                return x.internalemailaddress;
            });
    }
    hasIntakeManagerPermissions(userSecurityRoles: Xrm.Collection<Xrm.Role>): boolean {
        const systemRoles: string[] = ["System Administrator", "System Customizer"];
        let hasIntakeManagerPermissions: boolean = false;
        for (const role of userSecurityRoles.get()) {
            if (role.id === Roles.ComplianceIntakeManager || systemRoles.includes(role.name)) {
                hasIntakeManagerPermissions = true;
                break;
            }
        }
        return hasIntakeManagerPermissions;
    }
}
