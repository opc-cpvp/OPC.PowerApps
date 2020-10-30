import { IBaseContact, IPotentialDuplicate } from "../interfaces";

export class ContactHelper {
    static getMostLikelyDuplicate(contact: Contact_Result, potentialDuplicates: IBaseContact[]): IPotentialDuplicate {
        const sortedPotentialDuplicates = potentialDuplicates
            .map(potentialDuplicate => ContactHelper.getNumberOfFieldMatches(contact, potentialDuplicate))
            .sort((dup1, dup2) => dup2.numberOfFieldMatches - dup1.numberOfFieldMatches);

        return sortedPotentialDuplicates[0];
    }

    static getNumberOfFieldMatches(contact: Contact_Result, potentialDuplicate: IBaseContact): IPotentialDuplicate {
        let numberOfFieldMatches = 0;
        if (contact.emailaddress1 && potentialDuplicate.emailaddress1 === contact.emailaddress1) {
            numberOfFieldMatches++;
        }
        // Phone number fields can be interchangeable
        if (
            contact.telephone1 &&
            (potentialDuplicate.telephone1 === contact.telephone1 || potentialDuplicate.telephone1 === contact.telephone2)
        ) {
            numberOfFieldMatches++;
        }
        if (
            contact.telephone2 &&
            (potentialDuplicate.telephone2 === contact.telephone1 || potentialDuplicate.telephone2 === contact.telephone2)
        ) {
            numberOfFieldMatches++;
        }
        if (contact.address1_postalcode && potentialDuplicate.address1_postalcode === contact.address1_postalcode) {
            numberOfFieldMatches++;
        }

        const potentialDuplicateWithMatches = potentialDuplicate as IPotentialDuplicate;
        potentialDuplicateWithMatches.numberOfFieldMatches = numberOfFieldMatches;

        return potentialDuplicateWithMatches;
    }
}
