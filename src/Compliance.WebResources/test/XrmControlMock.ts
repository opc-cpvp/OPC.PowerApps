import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmLookupControlMock } from "./XrmLookupControlMock";

export class XrmControlMock
    extends XrmBaseControlMock
    implements Xrm.Control<XrmAttributeMock>, Xrm.OptionSetControl<any>, XrmLookupControlMock, Xrm.SubGridControl<any> {
    private _isDisabled: boolean;
    private _options: Xrm.Option<any>[] = [];
    private _grid: Xrm.Grid<any>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    private _onPreSearchHandlers: Function[] = [];

    /* NEW MEMBERS TO HELP MOCKING */
    setOptions(options: Xrm.Option<any>[]): void {
        this._options = options;
    }
    setGrid(grid: Xrm.Grid<any>): void {
        this._grid = grid;
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
        if (index) {
            this._options = this._options.splice(index, 0, option);
        } else {
            this._options.push(option);
        }
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
    /* END OF OptionSetControl MEMBERS */

    /* SubGridControl MEMBERS */
    refresh(): void {}
    addOnLoad(functionRef: (context?: Xrm.ExecutionContext<this, any>) => any): void {
        throw new Error("Method not implemented.");
    }
    getEntityName(): string {
        throw new Error("Method not implemented.");
    }
    getGrid(): Xrm.Grid<any> {
        return this._grid;
    }
    getViewSelector(): Xrm.ViewSelector {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    removeOnLoad(reference: Function): void {
        throw new Error("Method not implemented.");
    }
    getRelationshipName(): string {
        throw new Error("Method not implemented.");
    }
    getFetchXml(): string {
        throw new Error("Method not implemented.");
    }
    getRelationship(): Xrm.EntityFormRelationship {
        throw new Error("Method not implemented.");
    }
    getGridType(): Xrm.GridType {
        throw new Error("Method not implemented.");
    }
    getUrl(client?: Xrm.SubGridControlClientType): string {
        throw new Error("Method not implemented.");
    }
    openRelatedGrid(): void {
        throw new Error("Method not implemented.");
    }
    refreshRibbon(): void {
        throw new Error("Method not implemented.");
    }
    /* END OF SubGridControl MEMBERS */

    /* LookupControl Members */
    addCustomView(
        viewId: string,
        entityName: string,
        viewDisplayName: string,
        fetchXml: string,
        layoutXml: string,
        isDefault: boolean
    ): void {
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
    // eslint-disable-next-line @typescript-eslint/ban-types
    addPreSearch(handler: Function): void {
        this._onPreSearchHandlers.push(handler);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    removePreSearch(handler: Function): void {
        this._onPreSearchHandlers = this._onPreSearchHandlers.filter(f => f !== handler);
    }
    setEntityTypes(entityTypes: string[]): void {
        throw new Error("Method not implemented.");
    }
    getEntityTypes(): string[] {
        throw new Error("Method not implemented.");
    }
    addOnLookupTagClick(myFunction: (context?: Xrm.OnLookupTagClickContext) => any): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    removeOnLookupTagClick(functionRef: Function): void {
        throw new Error("Method not implemented.");
    }
    /* end of LookupControl members */

    /* GridControl members */
    getRows(): Xrm.Collection<Xrm.GridRow<any>> {
        throw new Error("Method not implemented.");
    }
    getSelectedRows(): Xrm.Collection<Xrm.GridRow<any>> {
        throw new Error("Method not implemented.");
    }
    getTotalRecordCount(): number {
        throw new Error("Method not implemented.");
    }
    /* End of GridControl members */
}
