import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmOptionSetControlMock } from "./XrmOptionSetControlMock";
import { XrmOptionMock } from "./XrmOptionMock";
import { XrmAttributeMock } from "./XrmAttributeMock";
import { XrmControlMock } from "./XrmControlMock";

export class XrmOptionSetAttributeMock /*extends XrmAttributeMock*/ implements Xrm.OptionSetAttribute<any> {
    private _options: XrmOptionMock<any>[] = [];
    private _name: string;
    controls: XrmCollectionMock<XrmOptionSetControlMock>;

    getInitialValue() {
        throw new Error("Method not implemented.");
    }
    getText(): string {
        throw new Error("Method not implemented.");
    }
    getOption(value: any): Xrm.Option<any> {
        throw new Error("Method not implemented.");
    }
    getOptions(): Xrm.Option<any>[] {
        throw new Error("Method not implemented.");
    }
    getSelectedOption(): Xrm.Option<any> {
        throw new Error("Method not implemented.");
    }
    getValue() {
        throw new Error("Method not implemented.");
    }
    setValue(val?: any): void {
        throw new Error("Method not implemented.");
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
    addOnChange(functionRef: (context?: Xrm.ExecutionContext<this, undefined>) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnChange(functionRef: Function): void {
        throw new Error("Method not implemented.");
    }
    fireOnChange(): void {
        throw new Error("Method not implemented.");
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
    setIsValid(bool: boolean, message?: string) {
        throw new Error("Method not implemented.");
    }
}
