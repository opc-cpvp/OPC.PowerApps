import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
export class XrmControlMock extends XrmBaseControlMock
    implements Xrm.Control<XrmAttributeMock> {
    private _isDisabled: boolean;
    getAttribute(): XrmAttributeMock {
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


//export class XrmOptionSetControlMock
//    extends XrmControlMock
//    implements Xrm.OptionSetControl<any> {

//    getAttribute() : Xrm.OptionSetAttribute<any> {
//        //return this.context.getFormContext().getAttribute(this.getName());
//        return null;
//    }

//    addOption(option: Xrm.Option<any>, index?: number): void {
//        throw new Error("Method not implemented.");
//    }
//    clearOptions(): void {
//        throw new Error("Method not implemented.");
//    }
//    removeOption(number: number): void {
//        throw new Error("Method not implemented.");
//    }
//    getOptions(): Xrm.Option<any>[] {
//        throw new Error("Method not implemented.");
//    }
    
//}