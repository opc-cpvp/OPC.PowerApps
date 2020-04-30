import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmPageTabMock } from "./XrmPageTabMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmBaseControlMock } from "./XrmBaseControlMock";

export class XrmUIModuleMock implements Xrm.UiModule<Xrm.TabCollection, Xrm.ControlCollection> {
    private _context: XrmExecutionContextMock<any, any>;
    private _formNotifications: any[] = [];
    private _formType: Xrm.FormType;

    tabs: XrmCollectionMock<XrmPageTabMock>;
    controls: XrmCollectionMock<XrmBaseControlMock>;
    navigation: Xrm.navigation;
    process: Xrm.UiProcessModule;
    formSelector: Xrm.FormSelector;

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
    setFormType(formType: Xrm.FormType) {
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
        throw new Error("Method not implemented.");
    }
    getViewPortHeight(): number {
        throw new Error("Method not implemented.");
    }
    getViewPortWidth(): number {
        throw new Error("Method not implemented.");
    }
    clearFormNotification(uniqueId: string): boolean {
        let notificationCountBefore = this._formNotifications.length;
        this._formNotifications = this._formNotifications.filter(f => f.uniqueId !== uniqueId);
        return this._formNotifications.length < notificationCountBefore;
    }
    setFormNotification(message: string, level: Xrm.NotificationLevel, uniqueId: string): boolean {
        let notification = { message: message, level: level, uniqueId: uniqueId };
        return this._formNotifications.push(notification) > 0;
    }
    addOnLoad(myFunction: (context?: Xrm.OnLoadEventContext) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnLoad(myFunction: Function): void {
        throw new Error("Method not implemented.");
    }
}

