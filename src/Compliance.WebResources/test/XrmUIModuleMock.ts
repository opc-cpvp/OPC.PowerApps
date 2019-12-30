import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmPageTabMock } from "./XrmPageTabMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmBaseControlMock } from "./XrmBaseControlMock";

export class XrmUIModuleMock implements Xrm.UiModule<Xrm.TabCollection, Xrm.ControlCollection> {

    private _context: XrmExecutionContextMock<any>;

    tabs: XrmCollectionMock<XrmPageTabMock>;
    controls: XrmCollectionMock<XrmBaseControlMock>;
    navigation: Xrm.navigation;
    process: Xrm.UiProcessModule;
    formSelector: Xrm.FormSelector;

    constructor(executionContext: XrmExecutionContextMock<any>, uiprocess: Xrm.UiProcessModule) {
        this.process = uiprocess;
        this.tabs = new XrmCollectionMock<XrmPageTabMock>(XrmPageTabMock);
        this.controls = new XrmCollectionMock<XrmBaseControlMock>(XrmBaseControlMock, context);
        this._context = executionContext;
    }

    getFormType(): Xrm.FormType {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }
    setFormNotification(message: string, level: Xrm.NotificationLevel, uniqueId: string): boolean {
        throw new Error("Method not implemented.");
    }
    addOnLoad(myFunction: (context?: Xrm.ExecutionContext<this>) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnLoad(myFunction: Function): void {
        throw new Error("Method not implemented.");
    }
}

