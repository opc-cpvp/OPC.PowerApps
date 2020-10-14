import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmSaveEventArgsMock } from "./XrmSaveEventArgsMock";

export class XrmSaveEventContextMock<T> extends XrmExecutionContextMock<T, XrmSaveEventArgsMock> {
    constructor() {
        super();
        this.args = new XrmSaveEventArgsMock();
    }
}
