import { injectable } from "inversify";
import "reflect-metadata";
import { IComplaintService } from ".././interfaces";

@injectable()
export class ComplaintService implements IComplaintService {
    getComplaint(id: string): opc_complaint {
        console.log("im returning a nice complaint");
        return null;
    }
}