import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { INamedComponent } from "./INamedComponent";
import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmControlMock } from "./XrmControlMock";

export class XrmLookupAttributeMock implements Xrm.LookupAttribute<any> {

    controls: Xrm.Collection<Xrm.LookupControl<any>>;

    private _value: any;

    getValue(): Xrm.EntityReference<any>[] {
        return this._value;
    }
    setValue(val?: Xrm.EntityReference<any>[]): void {
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
        throw new Error("Method not implemented.");
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
