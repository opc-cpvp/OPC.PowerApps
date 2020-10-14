import { INamedComponent } from "./INamedComponent";

export class XrmCollectionBaseMock<T extends INamedComponent> implements Xrm.CollectionBase<T> {
    /* NEW MEMBERS TO HELP MOCKING */
    collection: T[] = [];
    /* END OF NEW MEMBERS*/

    protected args: any[];
    protected type: new (...args: any[]) => T;

    constructor(type: new (...args: any[]) => T, ...args: any[]) {
        this.type = type;
        this.args = args;
    }

    forEach(delegate: Xrm.ForEach<T>): void {
        this.collection.forEach(delegate);
    }

    getLength(): number {
        return this.collection.length;
    }
}
