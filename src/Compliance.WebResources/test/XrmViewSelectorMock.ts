/// <reference path="../typings/xrmdefinitelytyped/xrm.d.ts" />

export class XrmViewSelectorMock implements Xrm.ViewSelector {
    private _currentView: Xrm.EntityReference<string>;
    private _isVisible: boolean;

    constructor(currentView: Xrm.EntityReference<string>, isVisible: boolean) {
        this._currentView = currentView;
        this._isVisible = isVisible;
    }
    getCurrentView(): Xrm.EntityReference<string> {
        return this._currentView;
    }
    isVisible(): boolean {
        return this._isVisible;
    }
    setCurrentView(reference: Xrm.EntityReference<string>): void {
        this._currentView = reference;
    }
}
