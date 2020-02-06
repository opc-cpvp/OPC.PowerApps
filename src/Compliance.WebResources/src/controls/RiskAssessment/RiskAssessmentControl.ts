import "reflect-metadata";

export namespace Controls {

    export class RiskAssessmentControl {
        constructor() {
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public static control_OnLoad(): void {
            let parameters = Xrm.Utility.getGlobalContext().getQueryStringParameters();

            let complaintId: string = parameters.id;
            XrmQuery.retrieveRelatedMultiple(x => x.opc_complaints, complaintId, x => x.opc_RiskAssessment_Complaint_opc_complain)
                .select(x => [x.opc_riskassessmentid, x.opc_name, x.createdon])
                .filter(x => Filter.equals(x.statuscode, opc_riskassessment_statuscode.Active))
                .promise()
                .then((riskAssessments) => {
                    for(let riskAssessment of riskAssessments) {
                        let riskAssessmentId = riskAssessment.opc_riskassessmentid;

                        XrmQuery.retrieveRelatedMultiple(x => x.opc_riskassessments, riskAssessmentId, x => x.opc_riskassessment_riskassessmentdefinitions_riskassessment)
                            .select(x => [x.opc_riskassessmentdefinitionid, x.opc_riskassessmentcategory_guid, x.opc_riskassessmentfactortemplate_guid, x.opc_riskassessmentdefinitiontemplate_guid, x.opc_isselected])
                            .filter(x => Filter.equals(x.statuscode, opc_riskassessmentdefinition_statuscode.Active))
                            .promise()
                            .then((riskDefinitions) => {
                                for(let riskDefinition of riskDefinitions) {
                                    console.dir(riskDefinition);                  
                                }
                            });
                    }
                })

            /*
            let serverUrl: string  = Xrm.Utility.getGlobalContext().getClientUrl();            
            let message: any = {};
            message.value = parameters.id;            
            window.parent.postMessage(JSON.stringify(message), serverUrl);
            */


        }
    }
}