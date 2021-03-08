import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmGridRowControlMock } from "./XrmGridRowControlMock";

export class XrmGridControlMock<T extends string> implements Xrm.Grid<T> {
    private _gridRow = new XrmCollectionMock<XrmGridRowControlMock<T>>(XrmGridRowControlMock);
    /* NEW MEMBERS TO HELP MOCKING */
    addRow(row: XrmGridRowControlMock<T>): void {
        this._gridRow.collection.push(row);
    }
    setRows(rows: XrmCollectionMock<XrmGridRowControlMock<T>>): void {
        this._gridRow = rows;
    }
    /* END OF NEW MEMBERS*/
    getRows(): Xrm.Collection<Xrm.GridRow<T>> {
        return this._gridRow;
    }
    getSelectedRows(): Xrm.Collection<Xrm.GridRow<T>> {
        const selectedRows = new XrmCollectionMock<XrmGridRowControlMock<T>>(XrmGridRowControlMock);

        this._gridRow.forEach(x => {
            if (x.selected) {
                selectedRows.collection.push(x);
            }
        });
        return selectedRows;
    }
    getTotalRecordCount(): number {
        throw new Error("Method not implemented.");
    }
}
