import { interfaces, injectable } from "inversify";
import "reflect-metadata";
import { ICommandDispatcher, ICommandHandler, ExtendedXrmPageBase } from "../interfaces";

@injectable()
export class CommandDispatcher implements ICommandDispatcher {
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }
    dispatch<TForm extends ExtendedXrmPageBase>(command: string, field: string, context: TForm): void {
        let handler = this._container.get<ICommandHandler>(command);
        handler.execute(field, context);
    }
}