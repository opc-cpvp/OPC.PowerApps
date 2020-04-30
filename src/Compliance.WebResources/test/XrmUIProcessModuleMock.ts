export class XrmUIProcessModuleMock implements Xrm.UiProcessModule {
    private _displayState: Xrm.CollapsableDisplayState;
    private _isVisible: boolean;

    getDisplayState(): Xrm.CollapsableDisplayState {
        return this._displayState;
    }
    setDisplayState(val: Xrm.CollapsableDisplayState): void {
        this._displayState = val;
    }
    getVisible(): boolean {
        return this._isVisible;
    }
    setVisible(visible: boolean): void {
        this._isVisible = visible;
    }
}
