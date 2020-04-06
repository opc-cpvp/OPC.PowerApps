export class XrmUserSettingsMock implements Xrm.userSettings {
    dateFormattingInfo: Xrm.dateFormattingInfo;
    defaultDashboardId: string;
    isGuidedHelpEnabled: boolean;
    isHighContrastEnabled: boolean;
    isRTL: boolean;
    languageId: number;
    securityRolePrivileges: string[];
    roles: string[];
    userName: string;
    userId: string;

    getTimeZoneOffsetMinutes(): number {
        throw new Error("Method not implemented.");
    }
}
