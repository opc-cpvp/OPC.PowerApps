import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmLookupControlMock } from "./XrmLookupControlMock";



export class XrmControlMock extends XrmBaseControlMock
    implements Xrm.Control<XrmAttributeMock>, Xrm.OptionSetControl<any>, XrmLookupControlMock {

    private _isDisabled: boolean;
    private _options: Xrm.Option<any>[] = [];
    private _onPreSearchHandlers: Function[] = [];

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

    /* OptionSetControl Members */
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

    /* LookupControl Members */
    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void {
        throw new Error("Method not implemented.");
    }
    getDefaultView(): string {
        throw new Error("Method not implemented.");
    }
    setDefaultView(guid: string): void {
        throw new Error("Method not implemented.");
    }
    addCustomFilter(fetchXml: string, entityType?: string): void {
        throw new Error("Method not implemented.");
    }
    addPreSearch(handler: Function): void {
        this._onPreSearchHandlers.push(handler);
    }
    removePreSearch(handler: Function): void {
        this._onPreSearchHandlers = this._onPreSearchHandlers.filter(f => f !== handler);
    }
    setEntityTypes(entityTypes: string[]): void {
        throw new Error("Method not implemented.");
    }
    getEntityTypes(): string[] {
        throw new Error("Method not implemented.");
    }
    /* end of LookupControl members */
}