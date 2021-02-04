import { INamedComponent } from "./INamedComponent";

export class XrmStageMock implements Xrm.Stage, INamedComponent {
    private _status: Xrm.StageStatus;
    private _name: string;
    private _id: string;
    private _steps: Xrm.StageStep[];

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setStatus(status: Xrm.StageStatus): void {
        this._status = status;
    }
    setName(name: string): void {
        this._name = name;
    }
    setId(id: string): void {
        this._id = id;
    }
    /* END OF NEW MEMBERS*/
    getId(): string {
        return this._id;
    }
    getName(): string {
        return this._name;
    }
    getSteps(): Xrm.StageStep[] {
        return this._steps;
    }
    getCategory(): Xrm.IStageCategory {
        throw new Error("Method not implemented.");
    }
    getEntityName(): string {
        throw new Error("Method not implemented.");
    }
    getStatus(): Xrm.StageStatus {
        return this._status;
    }
    getNavigationBehavior(): Xrm.NavigationBehaviorObject {
        throw new Error("Method not implemented.");
    }
}
