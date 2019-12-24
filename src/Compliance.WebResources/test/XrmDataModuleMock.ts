import { XrmProcessModuleMock } from "./XrmProcessModuleMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";

export class XrmDataModuleMock implements Xrm.DataModule<XrmCollectionMock<XrmAttributeMock>> {

    entity: Xrm.PageEntity<XrmCollectionMock<XrmAttributeMock>>;
    process: XrmProcessModuleMock;
    attributes: XrmCollectionMock<XrmAttributeMock>;

    constructor(executionContext: XrmExecutionContextMock<any>) {
        this.process = new XrmProcessModuleMock();
        this.attributes = new XrmCollectionMock<XrmAttributeMock>(XrmAttributeMock, executionContext);
    }

    addOnLoad(myFunction: (context?: Xrm.ExecutionContext<this>) => any): void {
        throw new Error("Method not implemented.");
    }
    getIsDirty(): boolean {
        throw new Error("Method not implemented.");
    }
    isValid(): boolean {
        throw new Error("Method not implemented.");
    }
    removeOnLoad(myFunction: Function): void {
        throw new Error("Method not implemented.");
    }
    refresh(save?: boolean): Promise<undefined> {
        throw new Error("Method not implemented.");
    }
    save(saveOptions?: Xrm.SaveOptions): Promise<undefined> {
        throw new Error("Method not implemented.");
    }
}
