import { injectable } from "inversify";
import { IPowerControl } from "../interfaces";

@injectable()
export abstract class PowerIFrameControl implements IPowerControl {
    protected readonly documentContext: Document;
    protected readonly xrmContext: Xrm.context;

    constructor(xrmContext: Xrm.context, documentContext: Document) {
        this.documentContext = documentContext;
        this.xrmContext = xrmContext;
    }

    public init(): void {
        // Add listener for parent form trigerred save event
        this.documentContext.addEventListener("entity-save", e => {
            this.save();
        });
    }

    public abstract save(): void;
}
