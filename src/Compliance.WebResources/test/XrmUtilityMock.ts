import { XrmContextMock } from "./XrmContextMock";

export class XrmUtilityMock implements Xrm.Utility {
    private _context: XrmContextMock;

    constructor() {
        this._context = new XrmContextMock();
    }

    closeProgressIndicator(): void {
        throw new Error("Method not implemented.");
    }
    getAllowedStatusTransitions(entityName: string, stateCode: number): Promise<number[]> {
        throw new Error("Method not implemented.");
    }
    getEntityMetadata(entityName: string, attributes?: string[]): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getGlobalContext(): XrmContextMock {
        return this._context;
    }
    getLearningPathAttributeName(): string {
        throw new Error("Method not implemented.");
    }
    getResourceString(webResourceName: string, key: string): string {
        throw new Error("Method not implemented.");
    }
    invokeProcessAction(name: string, parameters?: any): Promise<undefined> {
        throw new Error("Method not implemented.");
    }
    lookupObjects(lookupOptions: Xrm.LookupOptions): Promise<Xrm.Lookup[]> {
        throw new Error("Method not implemented.");
    }
    refreshParentGrid(lookupOptions: Xrm.Lookup): void {
        throw new Error("Method not implemented.");
    }
    showProgressIndicator(message: string): void {
        throw new Error("Method not implemented.");
    }
}
