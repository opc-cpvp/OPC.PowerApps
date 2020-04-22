import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmOptionMock } from "./XrmOptionMock";

export class XrmOptionSetControlMock implements Xrm.OptionSetControl<any> {
    private _options: XrmOptionMock<any>[] = [];
    private _isDisabled: boolean = false;

    /* NEW MEMBERS TO HELP MOCKING */
    setOptions(options: XrmOptionMock<any>[]): void {
        this._options = options;
    }
    /* END OF NEW MEMBERS*/

    addOption(option: XrmOptionMock<any>, index?: number): void {
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
    getAttribute(): Xrm.OptionSetAttribute<any> {
        throw new Error("Method not implemented.");
    }
    getDisabled(): boolean {
        return this._isDisabled;
    }
    setDisabled(disable: boolean): void {
        this._isDisabled = disable;
    }
    getControlType(): Xrm.ControlType {
        throw new Error("Method not implemented.");
    }
    setFocus(): void {
        throw new Error("Method not implemented.");
    }
    getParent(): Xrm.PageSection {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getLabel(): string {
        throw new Error("Method not implemented.");
    }
    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }
    getVisible(): boolean {
        throw new Error("Method not implemented.");
    }
    setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
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
