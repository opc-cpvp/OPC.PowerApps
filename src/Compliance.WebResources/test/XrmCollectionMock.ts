import { INamedComponent } from "./INamedComponent";
import { XrmCollectionBaseMock } from "./XrmCollectionBaseMock";

export class XrmCollectionMock<T extends INamedComponent> extends XrmCollectionBaseMock<T> implements Xrm.Collection<T> {
    get(): T[];
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    get(index: number): T;
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    get(name: string): T;
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    get(chooser: Xrm.CollectionChooser<T>): T[];
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    get(param?: any): T | T[] | null {
        let obj: T;
        let objInCollection: T;
        if (param === undefined || param === null) {
            return null;
        }
        if (typeof param === "number") {
            objInCollection = this.collection[param];
            obj = objInCollection ? objInCollection : new this.type(...this.args);
            if (!objInCollection) {
                this.collection.push(obj);
            }
        }
        if (typeof param === "string") {
            objInCollection = this.collection.find(t => t.getName() === param);
            obj = objInCollection ? objInCollection : new this.type(...this.args);
            if (!objInCollection) {
                obj.setName(param);
                this.collection.push(obj);
            }
            return obj;
        } else {
            // For this method, results will have to be mocked manually.
            return this.collection.filter(param);
        }
    }
}
