/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />

import { XrmCollectionMock } from "./XrmCollectionMock";
import { XrmStageMock } from "./XrmStageMock";

export class XrmProcessMock implements Xrm.Process {
    private _status: Xrm.ProcessStatus;
    private _stages: XrmCollectionMock<XrmStageMock>;

    constructor(id: string, name: string) {
        this.getId = () => id;
        this.getName = () => name;
        this._stages = new XrmCollectionMock<XrmStageMock>(XrmStageMock);
    }
    /* NEW MEMBERS TO HELP MOCKING */
    setStatus(status: Xrm.ProcessStatus): void {
        this._status = status;
    }
    addStage(stage: XrmStageMock): void {
        this._stages.collection.push(stage);
    }
    /* END OF NEW MEMBERS*/

    getId(): string {
        return null;
    }
    getName(): string {
        return null;
    }
    getStages(): XrmCollectionMock<XrmStageMock> {
        return this._stages;
    }
    isRendered(): boolean {
        throw new Error("Method not implemented.");
    }
    getStatus(): Xrm.ProcessStatus {
        return this._status;
    }
}
