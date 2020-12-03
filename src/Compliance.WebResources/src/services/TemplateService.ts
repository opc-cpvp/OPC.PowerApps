import { injectable } from "inversify";
import { AllegationWithChecklistResponse, ITemplateService, QuestionTemplateWithQuestionTypeId } from ".././interfaces";

@injectable()
export class TemplateService implements ITemplateService {
    getAllegationsWithChecklistResponses(complaintId: string): Promise<AllegationWithChecklistResponse[]> {
        return XrmQuery.retrieveRelatedMultiple(
            x => x.opc_complaints,
            complaintId,
            x => x.opc_complaint_allegations_complaint
        )
            .expand(
                x => x.opc_allegation_checklistresponses_allegation,
                x => [x.opc_name, x.opc_response, x.opc_questiontemplateid_guid]
            )
            .select(x => [x.opc_allegationtypeid_guid, x.opc_disposition, x.opc_referencenumber])
            .includeFormattedValues()
            .promise();
    }
    getAllQuestionTemplates(): Promise<QuestionTemplateWithQuestionTypeId[]> {
        return XrmQuery.retrieveMultiple(x => x.opc_questiontemplates)
            .select(x => [x.opc_questiontypeid_guid])
            .promise();
    }
    getSharePointSite(id: string): Promise<SharePointSite> {
        return XrmQuery.retrieve(x => x.sharepointsites, id)
            .select(x => [x.absoluteurl])
            .promise();
    }
}
