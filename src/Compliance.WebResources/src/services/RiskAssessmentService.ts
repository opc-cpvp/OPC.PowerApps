import { injectable } from "inversify";
import "reflect-metadata";
import { IRiskAssessmentService } from ".././interfaces";

@injectable()
export class RiskAssessmentService implements IRiskAssessmentService {
    getRiskAppetites(): Promise<(opc_RiskAppetite_Fixed & { opc_riskappetiteid: string; } & { opc_name: string; })[]> {
        return XrmQuery.retrieveMultiple(x => x.opc_riskappetites)
            .select(x => [x.opc_riskappetiteid, x.opc_name])
            .filter(x => Filter.equals(x.statuscode, opc_riskappetite_statuscode.Active))
            .orderDesc(x => x.opc_name)
            .promise();
    }

    getRiskDefinitions(id: string): Promise<({ opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result; } & { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result; } & { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result; } & opc_RiskAssessmentDefinition_Fixed & { opc_riskassessmentdefinitionid: string; } & { opc_riskassessmentcategory_guid: string; } & { opc_riskassessmentfactortemplate_guid: string; } & { opc_riskassessmentdefinitiontemplate_guid: string; } & { opc_isselected: boolean; })[]> {
        return XrmQuery.retrieveRelatedMultiple(x => x.opc_riskassessments, id, x => x.opc_riskassessment_riskassessmentdefinitions_riskassessment)
            .select(x => [x.opc_riskassessmentdefinitionid, x.opc_riskassessmentcategory_guid, x.opc_riskassessmentfactortemplate_guid, x.opc_riskassessmentdefinitiontemplate_guid, x.opc_isselected])
            .expand(x => x.opc_RiskAssessmentCategory, x => [x.opc_name, x.opc_sequence])
            .expand(x => x.opc_RiskAssessmentFactorTemplate, x => [x.opc_name, x.opc_sequence])
            .expand(x => x.opc_RiskAssessmentDefinitionTemplate, x => [x.opc_name, x.opc_riskappetite_guid])
            .filter(x => Filter.equals(x.statuscode, opc_riskassessmentdefinition_statuscode.Active))
            .promise();
    }

    updateRiskAssessmentDefinition(definitionid: string, value: boolean): Promise<undefined> {
        return XrmQuery.update(x => x.opc_riskassessmentdefinitions, definitionid, { opc_isselected: value }).promise();
    }
}
