import { injectable } from "inversify";
import "reflect-metadata";
import { ComplaintWithRelationships, IComplaintService, AllegationWithChecklistResponse } from ".././interfaces";

@injectable()
export class ComplaintService implements IComplaintService {
    getComplaint(id: string): Promise<opc_complaint> {
        return XrmQuery.retrieve(x => x.opc_complaints, id).promise();
    }
    getComplaintWithRelationships(id: string): Promise<ComplaintWithRelationships> {
        const contactAttributes = (x: Contact_Select): WebAttribute<Contact_Select, any, any>[] => [
            x.firstname,
            x.lastname,
            x.fullname,
            x.jobtitle,
            x.emailaddress1,
            x.telephone1,
            x.telephone2,
            x.fax,
            x.address1_line1,
            x.address1_line2,
            x.address1_line3,
            x.address1_city,
            x.address1_stateorprovince,
            x.address1_postalcode,
            x.address1_country
        ];
        const accountAttributes = (x: Account_Select): WebAttribute<Account_Select, any, any>[] => [
            x.name,
            x.telephone1,
            x.fax,
            x.websiteurl,
            x.address1_line1,
            x.address1_line2,
            x.address1_line3,
            x.address1_city,
            x.address1_stateorprovince,
            x.address1_postalcode,
            x.address1_country
        ];
        const userAttributes = (x: SystemUser_Select): WebAttribute<SystemUser_Select, any, any>[] => [
            x.firstname,
            x.lastname,
            x.fullname,
            x.title,
            x.domainname,
            x.internalemailaddress,
            x.address1_telephone1,
            x.mobilephone
        ];

        return XrmQuery.retrieve(x => x.opc_complaints, id)
            .expand(
                x => x.opc_legislation,
                x => [x.opc_acronym]
            )
            .expand(x => x.opc_opcpriorityid)
            .expand(
                x => x.opc_complaints_industries_relatedindustries,
                x => [x.opc_industryid, x.opc_name, x.opc_industryid]
            )
            .expand(x => x.opc_accountid, accountAttributes)
            .expand(x => x.opc_intakeofficer, userAttributes)
            .expand(x => x.owninguser, userAttributes)
            .expand(x => x.opc_complainant, contactAttributes)
            .expand(x => x.opc_complainantrep, contactAttributes)
            .expand(x => x.opc_complainantlegalrepresentative, contactAttributes)
            .expand(x => x.opc_complainantlegalrepresentativefirm, accountAttributes)
            .expand(x => x.opc_respondentrepresentative, contactAttributes)
            .expand(x => x.opc_respondentlegalrepresentative, contactAttributes)
            .expand(x => x.opc_respondentlegalrepresentativefirm, accountAttributes)
            .includeFormattedValues()
            .promise();
    }
    getSharePointDocumentLocation(id: string): Promise<SharePointDocumentLocation> {
        return XrmQuery.retrieveRelatedMultiple(
            x => x.opc_complaints,
            id,
            x => x.opc_complaint_SharePointDocumentLocations
        ).promiseFirst();
    }
    getAllegationsWithChecklistResponses(id: string): Promise<AllegationWithChecklistResponse[]> {
        return XrmQuery.retrieveRelatedMultiple(x => x.opc_complaints, id, x => x.opc_complaint_allegations_complaint)
            .expand(x => x.opc_allegation_checklistresponses_allegation, x => [x.opc_name, x.opc_response])
            .select(x => [x.opc_allegationtypeid_guid, x.opc_disposition, x.opc_referencenumber])
            .includeFormattedValues()
            .promise();
    }
}