import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";

export class XrmControlMock extends XrmBaseControlMock implements Xrm.Control<any> {
    protected _isDisabled: boolean;

    getAttribute(): any {
        return this.context.getFormContext().getAttribute(this.getName());
    }
    getDisabled(): boolean {
        return this._isDisabled;
    }
    setDisabled(disable: boolean): void {
        this._isDisabled = disable;
    }
    addNotification(notification: Xrm.AddNotificationObject): void {
        throw new Error("Method not implemented.");
    }
}
