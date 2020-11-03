import { XrmProcessModuleMock } from "./XrmProcessModuleMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmPageEntityMock } from "./XrmPageEntityMock";

export class XrmDataModuleMock implements Xrm.DataModule<XrmCollectionMock<XrmAttributeMock>> {
    entity: XrmPageEntityMock<any, any>;
    process: XrmProcessModuleMock;
    attributes: XrmCollectionMock<XrmAttributeMock>;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this.entity = new XrmPageEntityMock(executionContext);
        this.process = new XrmProcessModuleMock(executionContext);
        this.attributes = new XrmCollectionMock<XrmAttributeMock>(XrmAttributeMock, executionContext);
    }

    addOnLoad(myFunction: (context?: Xrm.OnLoadEventContext) => any): void {
        throw new Error("Method not implemented.");
    }
    getIsDirty(): boolean {
        throw new Error("Method not implemented.");
    }
    isValid(): boolean {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
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
