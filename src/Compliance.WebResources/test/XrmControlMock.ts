import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";

export class XrmControlMock extends XrmBaseControlMock
    implements Xrm.Control<XrmAttributeMock>, Xrm.OptionSetControl<any> {

    private _isDisabled: boolean;
    private _options: Xrm.Option<any>[] = [];

    /* NEW MEMBERS TO HELP MOCKING */
    setOptions(options: Xrm.Option<any>[]) {
        this._options = options;
    }
    /* END OF NEW MEMBERS*/


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

    /* OptionSetControl members */
    addOption(option: Xrm.Option<any>, index?: number): void {
        if (index) this._options = this._options.splice(index, 0, option);
        else this._options.push(option);
    }
    clearOptions(): void {
        this._options.splice(0, this._options.length);
    }
    removeOption(number: number): void {
        this._options = this._options.filter(f => f.value !== number);
    }
    getOptions(): Xrm.Option<any>[] {
        return this._options;
    }
    /* end of OptionSetControl members */
}