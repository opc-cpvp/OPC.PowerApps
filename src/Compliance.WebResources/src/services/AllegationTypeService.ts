import { injectable } from "inversify";
import "reflect-metadata";
import { IAllegationTypeService } from ".././interfaces";

@injectable()
export class AllegationTypeService implements IAllegationTypeService {
    public getAllegationType(id: string): Promise<opc_allegationtype_Result> {
        return XrmQuery.retrieve(x => x.opc_allegationtypes, id).promise();
    }
}
