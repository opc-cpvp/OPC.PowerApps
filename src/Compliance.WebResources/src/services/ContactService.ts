// Contact Service
import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
    // TODO: Pass the real value and not a promise for ease of use, also use a function dedicated to duplicate contact result to reduce the query size
    getContact(id: string): Promise<Contact_Result> {
        return XrmQuery.retrieve(x => x.contacts, id).promise();
    }

    //getContactDuplicateStatus(id: string, callback: (duplicateResult: opc_duplicatedetectionresult) => void): void {
    //    XrmQuery.retrieve(x => x.contacts, id).select(x => [x.opc_duplicatedetectionresult]).execute(d => callback(d.opc_duplicatedetectionresult));
    //}
}