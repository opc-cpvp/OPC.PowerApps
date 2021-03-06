﻿import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmPageTabMock } from "./XrmPageTabMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmFormNotificationMock } from "./XrmFormNotificationMock";

export class XrmUIModuleMock implements Xrm.UiModule<Xrm.TabCollection, Xrm.ControlCollection> {
    tabs: XrmCollectionMock<XrmPageTabMock>;
    controls: XrmCollectionMock<XrmBaseControlMock>;
    navigation: Xrm.navigation;
    process: Xrm.UiProcessModule;
    formSelector: Xrm.FormSelector;

    private _context: XrmExecutionContextMock<any, any>;
    private _formNotifications: XrmFormNotificationMock[] = [];
    private _formType: Xrm.FormType;

    constructor(executionContext: XrmExecutionContextMock<any, any>, uiprocess: Xrm.UiProcessModule) {
        this.process = uiprocess;
        this.tabs = new XrmCollectionMock<XrmPageTabMock>(XrmPageTabMock);
        this.controls = new XrmCollectionMock<XrmBaseControlMock>(XrmBaseControlMock, context);
        this._context = executionContext;
    }

    /* NEW MEMBERS TO HELP MOCKING */
    getFormNotificationsLength(): number {
        return this._formNotifications.length;
    }
    getFormNotification(uniqueId: string): XrmFormNotificationMock {
        return this._formNotifications.find(x => x.uniqueId === uniqueId);
    }
    getFormNotifications(): XrmFormNotificationMock[] {
        return this._formNotifications;
    }
    setFormType(formType: Xrm.FormType): void {
        this._formType = formType;
    }
    /* END OF NEW MEMBERS*/

    getFormType(): Xrm.FormType {
        return this._formType;
    }
    close(): void {
        throw new Error("Method not implemented.");
    }
    getCurrentControl(): Xrm.AnyControl {
        throw new Error("Method not implemented.");
    }
    refreshRibbon(): void {
        // Fake refresh
    }
    getViewPortHeight(): number {
        throw new Error("Method not implemented.");
    }
    getViewPortWidth(): number {
        throw new Error("Method not implemented.");
    }
    clearFormNotification(uniqueId: string): boolean {
        const notificationCountBefore = this._formNotifications.length;
        this._formNotifications = this._formNotifications.filter(f => f.uniqueId !== uniqueId);
        return this._formNotifications.length < notificationCountBefore;
    }
    setFormNotification(message: string, level: Xrm.NotificationLevel, uniqueId: string): boolean {
        // Only add notifications if its not there. This is CRM behavior.
        if (this._formNotifications.find(x => x.uniqueId === uniqueId)) {
            return true;
        }
        const notification = new XrmFormNotificationMock(message, level, uniqueId);
        return this._formNotifications.push(notification) > 0;
    }
    addOnLoad(myFunction: (context?: Xrm.OnLoadEventContext) => any): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    removeOnLoad(myFunction: Function): void {
        throw new Error("Method not implemented.");
    }
}
