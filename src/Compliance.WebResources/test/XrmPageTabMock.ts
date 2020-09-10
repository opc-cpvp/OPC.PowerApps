import { XrmCollectionMock } from "./XrmCollectionMock";
import { INamedComponent } from "./INamedComponent";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmPageSectionMock } from "./XrmPageSectionMock";

export class XrmPageTabMock implements Xrm.PageTab<Xrm.SectionCollection>, INamedComponent {
    private _context: XrmExecutionContextMock<any, any>;
    private _name: string;
    private _label: string;
    private _isVisible: boolean;
    private _focus: boolean;

    sections: XrmCollectionMock<XrmPageSectionMock>;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this._context = executionContext;
        this.sections = new XrmCollectionMock<XrmPageSectionMock>(XrmPageSectionMock, executionContext);
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setName(name: string): void {
        this._name = name;
    }
    /* END OF NEW MEMBERS*/

    getName(): string {
        return this._name;
    }
    getDisplayState(): Xrm.CollapsableDisplayState {
        throw new Error("Method not implemented.");
    }
    setDisplayState(state: Xrm.CollapsableDisplayState): void {
        throw new Error("Method not implemented.");
    }
    getParent(): Xrm.UiModule<Xrm.Collection<Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>>, Xrm.Collection<Xrm.BaseControl>> {
        return this._context.getFormContext().ui;
    }
    getLabel(): string {
        throw new Error("Method not implemented.");
    }
    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }
    setFocus(): void {
        throw new Error("Method not implemented.");
    }
    setVisible(visibility: boolean): void {
        this._isVisible = visibility;
    }
    getVisible(): boolean {
        return this._isVisible;
    }
    addTabStateChange(reference: Function): void {
        throw new Error("Method not implemented.");
    }
}
