/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmextensions/xrmextensions.d.ts" />
import { XrmUserSettingsMock } from "./XrmUserSettingsMock";

export class XrmContextMock implements Xrm.context {
    private _kvps: any;

    constructor() {
        this.userSettings = new XrmUserSettingsMock();
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setQueryStringParameters(keyvalues: any) {
        this._kvps = keyvalues;
    }
    /* END OF NEW MEMBERS */

    getQueryStringParameters() {
        return this._kvps;
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

    client: Xrm.client;
    userSettings: Xrm.userSettings;
    organizationSettings: Xrm.organizationSettings;
    getCurrentAppUrl(): string {
        return "https://fakeurl";
    }
}
