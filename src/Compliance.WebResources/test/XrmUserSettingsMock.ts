import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmRoleMock } from "./XrmRoleMock";

export class XrmUserSettingsMock implements Xrm.userSettings {
    dateFormattingInfo: Xrm.dateFormattingInfo;
    defaultDashboardId: string;
    isGuidedHelpEnabled: boolean;
    isHighContrastEnabled: boolean;
    isRTL: boolean;
    languageId: number;
    roles: XrmCollectionMock<XrmRoleMock>;
    securityRolePrivileges: string[];
    userName: string;
    userId: string;

    constructor() {
        // Setting default
        this.languageId = 1033; // English
    }

    getTimeZoneOffsetMinutes(): number {
        throw new Error("Method not implemented.");
    }
}
