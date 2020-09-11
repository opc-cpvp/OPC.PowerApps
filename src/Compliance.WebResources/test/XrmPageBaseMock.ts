﻿import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmDataModuleMock } from "./XrmDataModuleMock";
import { XrmUIModuleMock } from "./XrmUIModuleMock";
import { XrmUIProcessModuleMock } from "./XrmUIProcessModuleMock";
import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmControlMock } from "./XrmControlMock";

export class XrmPageBaseMock<T, V> implements Xrm.BasicPage {
    data: XrmDataModuleMock;
    ui: XrmUIModuleMock;

    private _executionContext: XrmExecutionContextMock<T, V>;
    private _ctrls: XrmControlMock[] = [];
    private _attr: XrmAttributeMock[] = [];

    constructor(executionContext: XrmExecutionContextMock<T, V>) {
        this._executionContext = executionContext;
        this.data = new XrmDataModuleMock(executionContext);
        this.ui = new XrmUIModuleMock(executionContext, new XrmUIProcessModuleMock());
    }

    /* NEW MEMBERS TO HELP MOCKING */
    addAttribute(attribute: XrmAttributeMock): void {
        this._attr.push(attribute);
    }
    addControl(control: XrmControlMock): void {
        this._ctrls.push(control);
    }
    /* END OF NEW MEMBERS*/

    getAttribute(attrName: string): XrmAttributeMock {
        // TODO: Following line should work, but i think because of the <any> it cannot call getFormContext()
        // return this.data.attributes.get(attrName);

        let attr = this._attr.find(a => a.getName() === attrName);
        if (!attr) {
            attr = new XrmAttributeMock(this._executionContext);
            attr.setName(attrName);
            this._attr.push(attr);

            // We often refer back to controls from an attribute, so always adding a default one
            const ctrl = this.getControl(attrName) as XrmControlMock;
            attr.controls.collection.push(ctrl);
        }
        return attr;
    }

    getControl(ctrlName: string): XrmBaseControlMock {
        // TODO: Following line should work, but i think because of the <any> it cannot call getFormContext()
        // return this.ui.controls.get(ctrlName);

        let ctrl = this._ctrls.find(a => a.getName() === ctrlName);
        if (!ctrl) {
            ctrl = new XrmControlMock(this._executionContext);
            ctrl.setName(ctrlName);
            this._ctrls.push(ctrl);
        }
        return ctrl;
    }

    getUrl(): string {
        throw new Error("Method not implemented.");
    }
}
