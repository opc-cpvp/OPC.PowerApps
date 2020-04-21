import { INamedComponent } from "./INamedComponent";

export class XrmRoleMock implements Xrm.Role, INamedComponent {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}
