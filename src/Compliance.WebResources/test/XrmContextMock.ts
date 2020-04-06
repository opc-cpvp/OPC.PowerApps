import { XrmUserSettingsMock } from "./XrmUserSettingsMock";
export class XrmContextMock implements Xrm.context {
    client: Xrm.client;
    userSettings: XrmUserSettingsMock;
    organizationSettings: Xrm.organizationSettings;

    constructor() {
        this.userSettings = new XrmUserSettingsMock();
    }
    getClientUrl(): string {
        throw new Error("Method not implemented.");
    }
    getCurrentTheme(): string {
        throw new Error("Method not implemented.");
    }
    prependOrgName(sPath: string): string {
        throw new Error("Method not implemented.");
    }
    getCurrentAppUrl(): string {
        throw new Error("Method not implemented.");
    }
    getQueryStringParameters() {
        throw new Error("Method not implemented.");
    }
}
