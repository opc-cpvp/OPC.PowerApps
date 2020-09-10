import { injectable } from "inversify";
import "reflect-metadata";
import { IEnvironmentVariableService } from "../interfaces";

@injectable()
export class EnvironmentVariableService implements IEnvironmentVariableService {
    getEnvironmentVariable(schemaName: string): Promise<string> {
        return XrmQuery.retrieveMultiple(x => x.environmentvariabledefinitions)
            .expand(x => x.environmentvariabledefinition_environmentvariablevalue, x => [x.value])
            .filter(x => Filter.equals(x.schemaname, schemaName))
            .promiseFirst()
            .then(x => {
                return x.environmentvariabledefinition_environmentvariablevalue[0].value;
            });
    }
}
