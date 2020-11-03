import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
export class XrmStageChangeContextMock implements Xrm.StageChangeContext {
    private _context: XrmExecutionContextMock<any, any>;
    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this._context = executionContext;
    }
    getContext(): Xrm.context {
        return this._context.getContext();
    }
    getDepth(): number {
        throw new Error("Method not implemented.");
    }
    getEventArgs(): Xrm.StageChangeEventArguments {
        throw new Error("Method not implemented.");
    }
    getEventSource(): Xrm.Stage {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setSharedVariable(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }
    getSharedVariable(key: string): any {
        throw new Error("Method not implemented.");
    }
    getFormContext(): Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase> {
        return this._context.getFormContext();
    }
}
