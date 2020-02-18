import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { INamedComponent } from "./INamedComponent";
export class XrmBaseControlMock implements Xrm.BaseControl, INamedComponent {
    protected context: XrmExecutionContextMock<any, any>;
    private _type: Xrm.ControlType;
    private _isVisible: boolean;
    private _name: string;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this.context = executionContext;
    }
    /* NEW MEMBERS TO HELP MOCKING */
    setControlType(type: Xrm.ControlType) {
        this._type = type;
    }
    setName(name: string): void {
        this._name = name;
    }
    /* END OF NEW MEMBERS*/
    getControlType(): Xrm.ControlType {
        return this._type;
    }
    setFocus(): void {
        throw new Error("Method not implemented.");
    }
    getParent(): Xrm.PageSection {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        return this._name;
    }
    getLabel(): string {
        throw new Error("Method not implemented.");
    }
    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }
    getVisible(): boolean {
        return this._isVisible;
    }
    setVisible(visible: boolean): void {
        this._isVisible = visible;
    }
    setNotification(message: string, uniqueId?: string): boolean {
        throw new Error("Method not implemented.");
    }
    clearNotification(uniqueId?: string): boolean {
        throw new Error("Method not implemented.");
    }
    addNotification(notification: Xrm.AddNotificationObject): void {
        throw new Error("Method not implemented.");
    }
}
