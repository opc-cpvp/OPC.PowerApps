import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmOptionMock } from "./XrmOptionMock";
import { XrmOptionSetAttributeMock } from "./XrmOptionSetAttributeMock";
import { XrmBaseControlMock } from "./XrmBaseControlMock";

export class XrmOptionSetControlMock extends XrmBaseControlMock implements Xrm.OptionSetControl<XrmOptionSetAttributeMock> {

    private _options: XrmOptionMock<any>[] = [];
    private _isDisabled: boolean = false;

    /* NEW MEMBERS TO HELP MOCKING */
    setOptions(options: XrmOptionMock<any>[]): void {
        this._options = options;
    }
    /* END OF NEW MEMBERS*/

    addOption(option: XrmOptionMock<XrmOptionSetAttributeMock>, index?: number): void {
        index ? this._options.splice(index, 0, option) : this._options.push(option);
    }
    clearOptions(): void {
        this._options = [];
    }
    removeOption(number: number): void {
        this._options = this._options.filter(f => f.value !== number);
    }
    getOptions(): XrmOptionMock<any>[] {
        return this._options;
    }
    getAttribute(): Xrm.OptionSetAttribute<XrmOptionSetAttributeMock> {
        throw new Error("Method not implemented.");
    }
    //getAttribute(): Xrm.Attribute<XrmOptionSetAttributeMock> {
    //    return this.context.getFormContext().getAttribute(this.getName());
    //}
    getDisabled(): boolean {
        return this._isDisabled;
    }
    setDisabled(disable: boolean): void {
        this._isDisabled = disable;
    }
}
