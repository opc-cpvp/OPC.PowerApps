import { XrmPageBaseMock } from "./XrmPageBaseMock";
import { XrmContextMock } from "./XrmContextMock";

export class XrmExecutionContextMock<T, TArgs> implements Xrm.ExecutionContext<T, TArgs> {
    protected args: TArgs;
    protected source: T;

    private _formContext: XrmPageBaseMock<T, TArgs>;
    private _context: XrmContextMock;

    constructor() {
        this._formContext = new XrmPageBaseMock(this);
        this._context = new XrmContextMock();
    }

    getContext(): XrmContextMock {
        return this._context;
    }
    getDepth(): number {
        throw new Error("Method not implemented.");
    }
    getEventArgs(): TArgs {
        return this.args;
    }
    setEventSource(source: T): void {
        this.source = source;
    }
    getEventSource(): T {
        return this.source;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setSharedVariable(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }
    getSharedVariable(key: string): any {
        throw new Error("Method not implemented.");
    }
    getUrl(): string {
        throw new Error("Method not implemented.");
    }
    getFormContext(): XrmPageBaseMock<T, TArgs> {
        return this._formContext;
    }
}
