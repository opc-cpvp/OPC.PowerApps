/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmextensions/xrmextensions.d.ts" />
import { XrmUserSettingsMock } from "./XrmUserSettingsMock";

export class XrmContextMock implements Xrm.context {
    client: Xrm.client;
    userSettings: Xrm.userSettings;
    organizationSettings: Xrm.organizationSettings;

    private _kvps: any;

    constructor() {
        this.userSettings = new XrmUserSettingsMock();
    }

    /* NEW MEMBERS TO HELP MOCKING */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setQueryStringParameters(keyvalues: any): void {
        this._kvps = keyvalues;
    }
    /* END OF NEW MEMBERS */

    getQueryStringParameters(): any {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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

    getCurrentAppUrl(): string {
        return "https://fakeurl";
    }
}
