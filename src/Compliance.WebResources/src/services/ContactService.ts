// Contact Service
import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
    getContact(id: string): Promise<Contact_Result> {
        return XrmQuery.retrieve(x => x.contacts, id).promise();
    }

    getContactDuplicateStatus(id: string, successCallback: (result: opc_duplicatedetectionresult) => void): void {
        XrmQuery.retrieve(x => x.contacts, id).select(x => [x.opc_duplicatedetectionresult])
            .promise().then(d => successCallback(d.opc_duplicatedetectionresult));
    }
}