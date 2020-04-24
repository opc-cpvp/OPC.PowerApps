/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />

import { XrmPageBaseMock } from "./XrmPageBaseMock";

export class XrmExecutionContextMock<T, TArgs> implements Xrm.ExecutionContext<T, TArgs> {
    private _formContext: XrmPageBaseMock<T, TArgs>;
    protected args: TArgs;
    protected source: any;

    constructor() {
        this._formContext = new XrmPageBaseMock(this);
    }

    getContext(): Xrm.context {
        throw new Error("Method not implemented.");
    }
    getDepth(): number {
        throw new Error("Method not implemented.");
    }
    getEventArgs(): TArgs {
        return this.args;
    }
    setEventSource(source: any) {
        this.source = source;
    }
    getEventSource(): any {
        return this.source;
    }
    setSharedVariable(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }
    getSharedVariable(key: string) {
        throw new Error("Method not implemented.");
    }
    getUrl(): string {
        throw new Error("Method not implemented.");
    }
    getFormContext(): XrmPageBaseMock<T, TArgs> {
        return this._formContext;
    }
}