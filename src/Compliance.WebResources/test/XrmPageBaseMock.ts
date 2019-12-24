import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmDataModuleMock } from "./XrmDataModuleMock";
import { XrmUIModuleMock } from "./XrmUIModuleMock";
import { XrmUIProcessModuleMock } from "./XrmUIProcessModuleMock";
import { XrmBaseControlMock } from "./XrmBaseControlMock";

export class XrmPageBaseMock<T> implements Xrm.BasicPage {

    private _executionContext: XrmExecutionContextMock<T>;
    private _ctrls: Xrm.AnyControl[] = [];
    private _attr: XrmAttributeMock[] = [];

    data: XrmDataModuleMock;
    ui: XrmUIModuleMock;

    constructor(executionContext: XrmExecutionContextMock<T>) {
        this._executionContext = executionContext;
        this.data = new XrmDataModuleMock(executionContext);
        this.ui = new XrmUIModuleMock(executionContext, new XrmUIProcessModuleMock());
    }

    getAttribute(attrName: string): XrmAttributeMock {
        // TODO: This should work, but i think because of the <any> it cannot call getFormContext()
        //return this.data.attributes.get(attrName);
        let attr = this._attr.find(a => a.getName() == attrName);
        if (!attr) {
            attr = new XrmAttributeMock(this._executionContext);
            this._attr.push(attr);
        }
        return attr;
    }

    getControl(ctrlName: string): Xrm.AnyControl {
        // TODO: This should work, but i think because of the <any> it cannot call getFormContext()
        //return this.ui.controls.get(ctrlName);
        let ctrl = this._ctrls.find(a => a.getName() == ctrlName);
        if (!ctrl) {
            ctrl = new XrmBaseControlMock(this._executionContext);
            this._ctrls.push(ctrl);
        }
        return ctrl;
    }
}
