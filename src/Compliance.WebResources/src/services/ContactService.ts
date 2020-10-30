// Contact Service
import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService, IBaseContact } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
    getContact(id: string): Promise<Contact_Result> {
        return XrmQuery.retrieve(x => x.contacts, id).promise();
    }

    getDuplicateStatus(id: string): Promise<Contact_Fixed & { opc_duplicatedetectionresult: opc_duplicatedetectionresult }> {
        return XrmQuery.retrieve(x => x.contacts, id)
            .select(x => [x.opc_duplicatedetectionresult])
            .promise();
    }

    getPotentialDuplicates(contact: Contact_Result): Promise<IBaseContact[]> {
        return XrmQuery.retrieveMultiple(x => x.contacts)
            .select(x => [
                x.firstname,
                x.lastname,
                x.telephone1,
                x.telephone2,
                x.address1_postalcode,
                x.emailaddress1,
                x.statuscode,
                x.contactid
            ])
            .filter(x => Filter.equals(x.firstname, contact.firstname))
            .andFilter(x => Filter.equals(x.lastname, contact.lastname))
            .andFilter(x => Filter.equals(x.statuscode, contact_statuscode.Active))
            .andFilter(x => Filter.notEquals(x.contactid, Filter.makeGuid(XQW.stripGUID(contact.contactid))))
            .promise();
    }
}
