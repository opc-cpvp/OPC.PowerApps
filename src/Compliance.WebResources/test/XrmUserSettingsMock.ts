import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";

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
    securityRoles: string[];
    userName: string;
    getTimeZoneOffsetMinutes(): number {
        throw new Error("Method not implemented.");
    }
    userId: string;


}
