import { interfaces, injectable } from "inversify";
import { IQueryDispatcher, IQueryHandler, ExtendedXrmPageBase } from "../interfaces";

// TODO: See if might need some non async version of this later on
// TODO: For all Dispatchers, make them more generic so that they don't have a dependency on a field, maybe some JSON object would do the trick
@injectable()
export class QueryDispatcher implements IQueryDispatcher {
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }
    async dispatchAsync<TForm extends ExtendedXrmPageBase, TReturn>(command: string, field: string, context: TForm): Promise<TReturn> {
        const handler = this._container.get<IQueryHandler<TReturn>>(command);
        return await handler.executeAsync(field, context);
    }
}
