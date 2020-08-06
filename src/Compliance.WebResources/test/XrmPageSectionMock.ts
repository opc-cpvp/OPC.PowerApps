import { XrmCollectionMock } from "./XrmCollectionMock";
import { INamedComponent } from "./INamedComponent";
import { XrmBaseControlMock } from "./XrmBaseControlMock";
import { XrmControlMock } from "./XrmControlMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmPageTabMock } from "./XrmPageTabMock";

export class XrmPageSectionMock implements Xrm.PageSection, INamedComponent {
    private _context: XrmExecutionContextMock<any, any>;
    private _name: string;
    private _isVisible: boolean;
    private _parentTab: XrmPageTabMock;
    controls: XrmCollectionMock<XrmBaseControlMock>;
    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this._context = executionContext;
        this.controls = new XrmCollectionMock<XrmControlMock>(XrmControlMock, executionContext);
    }
    /* NEW MEMBERS TO HELP MOCKING */
    setName(name: string): void {
        this._name = name;
    }
    setParent(parentTab: XrmPageTabMock) {
        this._parentTab = parentTab;
    }
    /* END OF NEW MEMBERS*/
    getName(): string {
        return this._name;
    }
    getParent(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>> {
        if (!this._parentTab) {
            const parentTab = new XrmPageTabMock(this._context);
            parentTab.sections.collection.push(this);
            this._parentTab = parentTab;
        }
        return this._parentTab;
    }
    getLabel(): string {
        throw new Error("Method not implemented.");
    }
    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }
    setVisible(visibility: boolean): void {
        this._isVisible = visibility;
    }
    getVisible(): boolean {
        return this._isVisible;
    }
}
