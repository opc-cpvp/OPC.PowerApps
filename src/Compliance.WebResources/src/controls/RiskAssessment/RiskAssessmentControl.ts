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

                        XrmQuery.retrieveMultiple(x => x.opc_riskappetites)
                            .select(x => [x.opc_riskappetiteid, x.opc_name])
                            .orderDesc(x => x.opc_name)
                            .promise()
                            .then((riskAppetites) => {
                                let riskTable = <HTMLTableElement> document.getElementById("risks");

                                XrmQuery.retrieveRelatedMultiple(x => x.opc_riskassessments, riskAssessmentId, x => x.opc_riskassessment_riskassessmentdefinitions_riskassessment)
                                    .select(x => [x.opc_riskassessmentdefinitionid, x.opc_riskassessmentcategory_guid, x.opc_riskassessmentfactortemplate_guid, x.opc_riskassessmentdefinitiontemplate_guid, x.opc_isselected])
                                    .expand(x => x.opc_RiskAssessmentCategory, x => [x.opc_name, x.opc_sequence])
                                    .expand(x => x.opc_RiskAssessmentFactorTemplate, x => [x.opc_name, x.opc_sequence])
                                    .expand(x => x.opc_RiskAssessmentDefinitionTemplate, x => [x.opc_name, x.opc_riskappetite_guid])
                                    .filter(x => Filter.equals(x.statuscode, opc_riskassessmentdefinition_statuscode.Active))
                                    .promise()
                                    .then((riskDefinitions) => {
                                        let currentCategory = "";
                                        let categories = riskDefinitions.map(x => x.opc_RiskAssessmentCategory)
                                            .filter((value, index, array) => {
                                                return array.map(x => x.opc_riskassessmentcategoryid).indexOf(value.opc_riskassessmentcategoryid) === index;
                                            })
                                            .sort((a, b) => {
                                                if (a.opc_sequence > b.opc_sequence) return 1;
                                                if (a.opc_sequence < b.opc_sequence) return -1;
                                            });

                                        for (let category of categories) {                                            
                                            let currentFactor = "";
                                            let previousDefinition = "";
                                            let factors = riskDefinitions.filter(x => x.opc_riskassessmentcategory_guid === category.opc_riskassessmentcategoryid)
                                                .map(x => x.opc_RiskAssessmentFactorTemplate)
                                                .filter((value, index, array) => {
                                                    return array.map(x => x.opc_riskassessmentfactortemplateid).indexOf(value.opc_riskassessmentfactortemplateid) === index;
                                                })
                                                .sort((a, b) => {
                                                    if (a.opc_sequence > b.opc_sequence) return 1;
                                                    if (a.opc_sequence < b.opc_sequence) return -1;
                                                });

                                            for (let factor of factors) {
                                                let definitions = riskDefinitions.filter(x => x.opc_riskassessmentcategory_guid === category.opc_riskassessmentcategoryid && x.opc_riskassessmentfactortemplate_guid === factor.opc_riskassessmentfactortemplateid);

                                                let tableRow = riskTable.tBodies[0].insertRow();

                                                if (currentCategory !== category.opc_name) {
                                                    currentCategory = category.opc_name;

                                                    let categoryHeader = document.createElement("th");
                                                    categoryHeader.textContent = currentCategory;
                                                    categoryHeader.rowSpan = factors.length;
                                                    categoryHeader.scope = "row";
                                                    tableRow.appendChild(categoryHeader);
                                                }

                                                if (currentFactor !== factor.opc_name) {
                                                    currentFactor = factor.opc_name;

                                                    let factorHeader = document.createElement("th");
                                                    factorHeader.textContent = currentFactor;
                                                    factorHeader.scope = "row";
                                                    tableRow.appendChild(factorHeader);
                                                }

                                                for (let appetite of riskAppetites) {
                                                    let riskDefinitions = definitions.filter(x => x.opc_RiskAssessmentDefinitionTemplate.opc_riskappetite_guid === appetite.opc_riskappetiteid);
                                                    let riskDefinition = riskDefinitions[0];

                                                    if (riskDefinitions.length < 1) {
                                                        tableRow.insertCell();
                                                        continue;
                                                    }

                                                    if (previousDefinition === riskDefinition.opc_RiskAssessmentDefinitionTemplate.opc_name)
                                                        continue;

                                                    let definitionCell = tableRow.insertCell();

                                                    previousDefinition = riskDefinition.opc_RiskAssessmentDefinitionTemplate.opc_name;

                                                    let matchingDefinitions = definitions.filter(x => x.opc_RiskAssessmentDefinitionTemplate.opc_name === riskDefinition.opc_RiskAssessmentDefinitionTemplate.opc_name).length;

                                                    definitionCell.textContent = riskDefinition.opc_RiskAssessmentDefinitionTemplate.opc_name;
                                                    definitionCell.colSpan = matchingDefinitions;

                                                    if (riskDefinition.opc_isselected)
                                                        definitionCell.className = "is-selected";

                                                    definitionCell.setAttribute("data-guid", riskDefinition.opc_riskassessmentdefinitionid);
                                                    definitionCell.onclick = function(this, ev) {
                                                        let cell = <HTMLTableCellElement> ev.target;

                                                        let isSelected = !cell.classList.contains("is-selected");
                                                        let riskDefinitionGuid = cell.getAttribute("data-guid");

                                                        let row = cell.closest("tr");
                                                        let selectedCell = row.querySelector("td[data-guid].is-selected");

                                                        if (selectedCell) {
                                                            let selectedGuid = selectedCell.getAttribute("data-guid");
                                                            XrmQuery.update(x => x.opc_riskassessmentdefinitions, selectedGuid, { opc_isselected: false }).execute(id => {
                                                                selectedCell.classList.toggle("is-selected");
                                                            });

                                                            if (selectedGuid === riskDefinitionGuid)
                                                                return;
                                                        }

                                                        XrmQuery.update(x => x.opc_riskassessmentdefinitions, riskDefinitionGuid, { opc_isselected: isSelected }).execute(id => {
                                                            cell.classList.toggle("is-selected");
                                                        });
                                                    };
                                                }
                                            }
                                        }
                                    });
                            });
                    }
                });
        }
    }
}