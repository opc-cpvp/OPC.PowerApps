import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmOptionMock } from "./XrmOptionMock";
import { XrmOptionSetAttributeMock } from "./XrmOptionSetAttributeMock";
import { XrmControlMock } from "./XrmControlMock";

export class XrmOptionSetControlMock extends XrmControlMock implements Xrm.OptionSetControl<XrmOptionSetAttributeMock> {
    private _options: XrmOptionMock<any>[] = [];

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
}
