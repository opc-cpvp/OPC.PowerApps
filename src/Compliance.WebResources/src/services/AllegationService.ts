import { injectable } from "inversify";
import "reflect-metadata";
import { IAllegationService } from ".././interfaces";

@injectable()
export class AllegationService implements IAllegationService {
    getAllegation(id: string): opc_complaint {
        console.log("im returning a nice allegation");
        return null;
    }
}
