import { interfaces, injectable } from "inversify";
import "reflect-metadata";
import { ICommandDispatcher, ICommandHandler, ExtendedXrmPageBase } from "../interfaces";

@injectable()
export class CommandDispatcher implements ICommandDispatcher {
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }
    dispatch<TContext extends ExtendedXrmPageBase | Xrm.ExecutionContext<any, any>>(
        context: TContext,
        command: string,
        field?: string
    ): void {
        const handler = this._container.get<ICommandHandler<TContext>>(command);
        handler.execute(context, field);
    }
}
