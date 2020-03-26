import { injectable } from "inversify";
import "reflect-metadata";
import { IChecklistService } from ".././interfaces";

@injectable()
export class ChecklistService implements IChecklistService {


    getQuestionTypes(): Promise<{ id: string; type: string; }[]> {
        return XrmQuery.retrieveMultiple(x => x.opc_questiontypes)
            .select(x => [x.opc_name, x.opc_questiontypeid])
            .promise()
            .then(r => r.map((val) => {
                return { id: val.opc_questiontypeid, type: val.opc_name }
            }));
    }

    // TODO: change signature to an internal friendlier class with minimal selection to reduce payload?
    getChecklist(id: string): Promise<({ opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result)[]> {
        // TODO: This is querying allegation but should query checklist directly to generalize the solution.
        return XrmQuery.retrieveMultiple(x => x.opc_checklistresponses)
            //.select(x => [x.opc_checklistresponseid, x.opc_name, x.opc_response, x.opc_questionid_guid])
            .expand(x => x.opc_questionid, x => [x.opc_questiontemplateid, x.opc_name, x.opc_conditionalvisibility, x.opc_sequence, x.opc_questiontypeid_guid, x.opc_parentquestiontemplateid_guid])
            .filter(x => Filter.equals(x.opc_allegationid_guid, Filter.makeGuid(XQW.stripGUID(id))))
            .orderAsc(x => x.opc_name)
            .promise()
    }

    updateChecklistResponse(responseid: string, value: string): Promise<undefined> {
        return XrmQuery.update(x => x.opc_checklistresponses, responseid, { opc_response: value }).promise();
    }
}
