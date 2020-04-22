import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmRoleMock } from "./XrmRoleMock";

export class XrmUserSettingsMock implements Xrm.userSettings {

    constructor() {
        // Setting default
        this.languageId = 1033; // English
    }

    dateFormattingInfo: Xrm.dateFormattingInfo;
    defaultDashboardId: string;
    isGuidedHelpEnabled: boolean;
    isHighContrastEnabled: boolean;
    isRTL: boolean;
    languageId: number;
    securityRolePrivileges: string[];
    roles: XrmCollectionMock<XrmRoleMock>;
    userName: string;
    userId: string;

    getTimeZoneOffsetMinutes(): number {
        throw new Error("Method not implemented.");
    }
}
