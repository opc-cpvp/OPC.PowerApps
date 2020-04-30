import { INamedComponent } from "./INamedComponent";

export class XrmCollectionBaseMock<T extends INamedComponent> implements Xrm.CollectionBase<T> {

    protected args: any[];
    protected type: { new(...args: any[]): T; };

    constructor(type: { new(...args: any[]): T; }, ...args: any[]) {
        this.type = type;
        this.args = args;
    }

    /* NEW MEMBERS TO HELP MOCKING */
    collection: T[] = []
    /* END OF NEW MEMBERS*/

    forEach(delegate: Xrm.ForEach<T>): void {
        this.collection.forEach(delegate);
    }

    getLength(): number {
        return this.collection.length;
    }
}

export class XrmCollectionMock<T extends INamedComponent> extends XrmCollectionBaseMock<T> implements Xrm.Collection<T> {
    get(): T[];
    get(index: number): T;
    get(name: string): T;
    get(chooser: Xrm.CollectionChooser<T>): T[];
    get(param?: any) {
        let obj: T;
        let objInCollection: T;
        if (param === undefined || param === null)
            return null;
        if (typeof param === "number") {
            objInCollection = this.collection[param];
            obj = objInCollection ? objInCollection : new this.type(...this.args);
            if (!objInCollection) this.collection.push(obj);
        }
        if (typeof param === "string") {
            objInCollection = this.collection.find(t => t.getName() == param);
            obj = objInCollection ? objInCollection : new this.type(...this.args);
            if (!objInCollection) {
                obj.setName(param);
                this.collection.push(obj);
            }
            return obj;
        }
        else {
            // For this method, results will have to be mocked manually.
            return this.collection.filter(param);
        }
    }
}

