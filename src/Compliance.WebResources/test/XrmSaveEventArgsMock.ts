export class XrmSaveEventArgsMock implements Xrm.SaveEventArgs {
    private _defaultPrevented = false;

    getSaveMode(): Xrm.SaveMode {
        throw new Error("Method not implemented.");
    }
    isDefaultPrevented(): boolean {
        return this._defaultPrevented;
    }
    preventDefault(): void {
        this._defaultPrevented = true;
    }
}
