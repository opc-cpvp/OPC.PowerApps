import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmRoleMock } from "./XrmRoleMock";

export class XrmUserSettingsMock implements Xrm.userSettings {
    roles: XrmCollectionMock<XrmRoleMock>;
    dateFormattingInfo: Xrm.dateFormattingInfo;
    defaultDashboardId: string;
    isGuidedHelpEnabled: boolean;
    isHighContrastEnabled: boolean;
    isRTL: boolean;
    languageId: number;
    securityRolePrivileges: string[];
    userName: string;
    userId: string;

    getTimeZoneOffsetMinutes(): number {
        throw new Error("Method not implemented.");
    }
}