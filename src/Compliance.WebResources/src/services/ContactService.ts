// Contact Service
import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
    getContact(id: string): Promise<Contact_Result> {
        return XrmQuery.retrieve(x => x.contacts, id).promise();
    }

    getDuplicateStatus(id: string): Promise<(Contact_Fixed & { opc_duplicatedetectionresult: opc_duplicatedetectionresult})> {
        return XrmQuery.retrieve(x => x.contacts, id).select(x => [x.opc_duplicatedetectionresult])
            .promise();        
    }
}