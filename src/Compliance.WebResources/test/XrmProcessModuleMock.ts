import { XrmStageMock } from "./XrmStageMock";
import { XrmProcessMock } from "./XrmProcessMock";
import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { XrmStageChangeContextMock } from "./XrmStageChangeContextMock";

export class XrmProcessModuleMock implements Xrm.ProcessModule {
    private _processes: XrmProcessMock[] = [];
    private _activeProcess: XrmProcessMock;
    private _onStageChangeHandlers: ((context?: Xrm.StageChangeContext) => any)[] = [];
    private _context: XrmExecutionContextMock<any, any>;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        // TODO: Remove this, temp.
        const mock = new XrmProcessMock("default-mock", "default-mock");
        mock.setStatus(Xrm.ProcessStatus.Active);
        this._activeProcess = mock;
        this._processes.push(mock);
        this._context = executionContext;
    }

    /* NEW MEMBERS TO HELP MOCKING */
    addProcess(process: XrmProcessMock): void {
        this._processes.push(process);
    }
    /* END OF NEW MEMBERS*/

    getActiveProcess(): XrmProcessMock {
        return this._activeProcess || (this._activeProcess = this._processes.find(p => p.getStatus() === Xrm.ProcessStatus.Active));
    }
    setActiveProcess(processId: string, callback?: (successOrInvalid: "success" | "invalid") => any): void {
        // TODO: Something with the other inactive processes? The class variable might be a temporary workaround
        const process = this._processes.find(p => p.getId() === processId);
        process.setStatus(Xrm.ProcessStatus.Active);
        this._activeProcess = process;
    }
    getActiveStage(): XrmStageMock {
        let stage = this._activeProcess.getStages().collection.find(s => s.getStatus() === "active");
        if (!stage) {
            stage = new XrmStageMock("default-mock", "default-mock");
            this._activeProcess.getStages().collection.push(stage);
        }
        return stage;
    }
    setActiveStage(stageId: string, callback?: (stringVal: Xrm.ProcessStageSetAnswer) => any): void {
        this._activeProcess.getStages().forEach(s => {
            if (s.getId() === stageId) {
                s.setStatus(Xrm.ProcessStatus.Active);
                this._onStageChangeHandlers.forEach(h => {
                    h(new XrmStageChangeContextMock(this._context));
                });
            } else {
                s.setStatus("inactive");
            }
        });
    }
    getActivePath(): Xrm.Collection<Xrm.Stage> {
        throw new Error("Method not implemented.");
    }
    getEnabledProcesses(callback: (enabledProcesses: Xrm.ProcessContainer) => any): void {
        throw new Error("Method not implemented.");
    }
    getSelectedStage(): Xrm.Stage {
        throw new Error("Method not implemented.");
    }
    addOnStageChange(handler: (context?: Xrm.StageChangeContext) => any): void {
        this._onStageChangeHandlers.push(handler);
    }
    removeOnStageChange(handler: (context?: Xrm.StageChangeContext) => any): void {
        this._onStageChangeHandlers = this._onStageChangeHandlers.filter(f => f !== handler);
    }
    addOnStageSelected(handler: (context?: Xrm.StageChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnStageSelected(handler: (context?: Xrm.StageChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    moveNext(callback?: (stringVal: Xrm.ProcessStageMoveAnswer) => any): void {
        throw new Error("Method not implemented.");
    }
    movePrevious(callback?: (stringVal: Xrm.ProcessStageMoveAnswer) => any): void {
        throw new Error("Method not implemented.");
    }
    addOnProcessStatusChange(handler: (context?: Xrm.ProcessStatusChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnProcessStatusChange(handler: (context?: Xrm.ProcessStatusChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    getInstanceId(): string {
        throw new Error("Method not implemented.");
    }
    getInstanceName(): string {
        throw new Error("Method not implemented.");
    }
    getStatus(): Xrm.ProcessStatus {
        throw new Error("Method not implemented.");
    }
    setStatus(status: Xrm.ProcessStatus, callbackFunction?: (status: Xrm.ProcessStatus) => any): Xrm.ProcessStatus {
        throw new Error("Method not implemented.");
    }
    addOnPreProcessStatusChange(handler: (context?: Xrm.PreProcessStatusChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnPreProcessStatusChange(handler: (context?: Xrm.PreProcessStatusChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    addOnPreStageChange(handler: (context?: Xrm.PreStageChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    removeOnPreStageChange(handler: (context?: Xrm.PreStageChangeContext) => any): void {
        throw new Error("Method not implemented.");
    }
    getProcessInstances(callbackFunction: (context?: Xrm.ProcessInstanceContext) => any): void {
        throw new Error("Method not implemented.");
    }
    setActiveProcessInstance(processInstanceId: string, callbackFunction?: (succesOrInvalid: "success" | "invalid") => any): void {
        throw new Error("Method not implemented.");
    }
}
