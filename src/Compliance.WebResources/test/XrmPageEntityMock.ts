import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";

export class XrmPageEntityMock<T, V> implements Xrm.PageEntity<any> {
    attributes: XrmCollectionMock<XrmAttributeMock>;

    private _executionContext: XrmExecutionContextMock<any, any>;
    private _id: string;
    private _onSaveHandlers: ((context?: Xrm.SaveEventContext<this>) => any)[] = [];

    constructor(executionContext: XrmExecutionContextMock<T, V>) {
        this._executionContext = executionContext;
        this.attributes = new XrmCollectionMock<XrmAttributeMock>(XrmAttributeMock, executionContext);
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setId(id: string): void {
        this._id = id;
    }
    /* END OF NEW MEMBERS*/

    addOnSave(functionRef: (context?: Xrm.SaveEventContext<this>) => any): void {
        this._onSaveHandlers.push(functionRef);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    removeOnSave(functionRef: Function): void {
        this._onSaveHandlers = this._onSaveHandlers.filter(f => f !== functionRef);
    }
    getId(): string {
        return this._id;
    }
    getDataXml(): string {
        throw new Error("Method not implemented.");
    }
    getEntityName(): string {
        throw new Error("Method not implemented.");
    }
    getIsDirty(): boolean {
        throw new Error("Method not implemented.");
    }
    getPrimaryAttributeValue(): string {
        throw new Error("Method not implemented.");
    }
    getEntityReference(): Xrm.Lookup {
        throw new Error("Method not implemented.");
    }
    isValid(): boolean {
        throw new Error("Method not implemented.");
    }
    save(saveOptions?: Xrm.saveOption): void {
        this._onSaveHandlers.forEach(x => {
            x(this._executionContext);
        });
    }
}
