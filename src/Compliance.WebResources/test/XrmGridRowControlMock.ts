import { INamedComponent } from "./INamedComponent";

export class XrmGridRowControlMock<T extends string> implements Xrm.GridRow<T>, INamedComponent {
    /* NEW MEMBERS TO HELP MOCKING */
    public selected: boolean;
    /* END OF NEW MEMBERS*/

    data: Xrm.GridRowData<T>;

    constructor(selected: boolean = false) {
        this.selected = selected;
    }

    // TODO remove INamedComponent implementation which is bound by XrmCollectionMock
    getName(): string {
        throw new Error("Method not implemented.");
    }
    setName(name: string): void {
        throw new Error("Method not implemented.");
    }

    getData(): Xrm.GridRowData<T> {
        return this.data;
    }
}
