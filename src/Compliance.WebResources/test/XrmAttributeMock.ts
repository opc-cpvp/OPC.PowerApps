import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { INamedComponent } from "./INamedComponent";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmControlMock } from "./XrmControlMock";

export class XrmAttributeMock implements Xrm.Attribute<any>, INamedComponent {

    private _executionContext: XrmExecutionContextMock<any, any>;
    private _name: string;
    private _value: any;
    private _onChangeHandlers: ((context?: Xrm.ExecutionContext<this, any>) => any)[] = [];

    controls: XrmCollectionMock<XrmControlMock>;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this._executionContext = executionContext;
        this.controls = new XrmCollectionMock<XrmControlMock>(XrmControlMock, executionContext);
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setName(name: string): void {
        this._name = name;
    }
    /* END OF NEW MEMBERS*/

    getValue() {
        return this._value;
    }
    setValue(val?: any): void {
        this._value = val;
    }
    getAttributeType(): Xrm.AttributeType {
        throw new Error("Method not implemented.");
    }
    getFormat(): Xrm.AttributeFormat {
        throw new Error("Method not implemented.");
    }
    getIsDirty(): boolean {
        throw new Error("Method not implemented.");
    }
    getMaxLength(): number {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        return this._name;
    }
    getParent(): Xrm.PageEntity<Xrm.Collection<Xrm.Attribute<any>>> {
        throw new Error("Method not implemented.");
    }
    getUserPrivilege(): Xrm.UserPrivilege {
        throw new Error("Method not implemented.");
    }
    addOnChange(functionRef: (context?: Xrm.ExecutionContext<this, any>) => any): void {
        this._onChangeHandlers.push(functionRef);
    }
    removeOnChange(functionRef: Function): void {
        this._onChangeHandlers = this._onChangeHandlers.filter(f => f !== functionRef);
    }
    fireOnChange(): void {
        this._onChangeHandlers.forEach(f => f(this._executionContext));
    }
    getRequiredLevel(): Xrm.AttributeRequiredLevel {
        throw new Error("Method not implemented.");
    }
    setRequiredLevel(level: Xrm.AttributeRequiredLevel): void {
        throw new Error("Method not implemented.");
    }
    getSubmitMode(): Xrm.AttributeSubmitMode {
        throw new Error("Method not implemented.");
    }
    setSubmitMode(mode: Xrm.AttributeSubmitMode): void {
        throw new Error("Method not implemented.");
    }
    isValid(): boolean {
        throw new Error("Method not implemented.");
    }
    setIsValid(): void{
        throw new Error("Method not implemented.");
    }
}
