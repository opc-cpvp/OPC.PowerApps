import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { INamedComponent } from "./INamedComponent";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmControlMock } from "./XrmControlMock";

export class XrmAttributeMock implements Xrm.Attribute<any>, Xrm.OptionSetAttribute<any>, Xrm.LookupAttribute<any>, INamedComponent {
    controls: XrmCollectionMock<XrmControlMock>;

    private _executionContext: XrmExecutionContextMock<any, any>;
    private _name: string;
    private _value: any;
    private _onChangeHandlers: ((context?: Xrm.ExecutionContext<this, any>) => any)[] = [];
    private _requiredLevel: Xrm.AttributeRequiredLevel;
    private _options: Xrm.Option<any>[] = [];
    private _isDirty: boolean;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this._executionContext = executionContext;
        this.controls = new XrmCollectionMock<XrmControlMock>(XrmControlMock, executionContext);
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setName(name: string): void {
        this._name = name;
    }
    setOptions(options: Xrm.Option<any>[]): void {
        this._options = options;
        // Clone array into controls
        this.controls.forEach(a => a.setOptions([...options]));
    }
    setIsDirty(isDirty: boolean): void {
        this._isDirty = isDirty;
    }
    /* END OF NEW MEMBERS*/

    getValue(): any | null {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this._value;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
        return this._isDirty;
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
    // eslint-disable-next-line @typescript-eslint/ban-types
    removeOnChange(functionRef: Function): void {
        this._onChangeHandlers = this._onChangeHandlers.filter(f => f !== functionRef);
    }
    fireOnChange(): void {
        this._executionContext.setEventSource(this);
        this._onChangeHandlers.forEach(f => {
            f(this._executionContext);
        });
        this._executionContext.setEventSource(null);
    }
    getRequiredLevel(): Xrm.AttributeRequiredLevel {
        return this._requiredLevel;
    }
    setRequiredLevel(level: Xrm.AttributeRequiredLevel): void {
        this._requiredLevel = level;
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
    setIsValid(): void {
        throw new Error("Method not implemented.");
    }

    /* BEGIN OptionSetAttribute Members */
    getInitialValue(): any | null {
        throw new Error("Method not implemented.");
    }
    getText(): string {
        throw new Error("Method not implemented.");
    }
    getOption(value: string): Xrm.Option<any> | null;
    // eslint-disable-next-line @typescript-eslint/unified-signatures, @typescript-eslint/explicit-module-boundary-types
    getOption(value: any): Xrm.Option<any> | null;
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getOption(value: any): Xrm.Option<any> | null {
        return this._options.find(p => p.value === value);
    }
    getOptions(): Xrm.Option<any>[] {
        // TODO: Implement for testing
        return this._options;
    }
    getSelectedOption(): Xrm.Option<any> {
        throw new Error("Method not implemented.");
    }
    /* END OF OptionSetAttribte Members */
}
