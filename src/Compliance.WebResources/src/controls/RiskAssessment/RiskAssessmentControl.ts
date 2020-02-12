import "reflect-metadata";

export namespace Controls {

    export class RiskAssessmentControl {
        private readonly _placeholder: HTMLDivElement;
        private readonly _riskAssessmentId: string;
        private readonly _riskTable: HTMLTableElement;
        private readonly _riskTableBody: HTMLTableSectionElement;

        private _riskAppetites: (opc_RiskAppetite_Fixed & { opc_riskappetiteid: string; } & { opc_name: string; })[];
        private _riskDefinitions: (
            { opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result; } &
            { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result; } &
            { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result; } &
            opc_RiskAssessmentDefinition_Fixed &
            { opc_riskassessmentdefinitionid: string } &
            { opc_riskassessmentcategory_guid: string } &
            { opc_riskassessmentfactortemplate_guid: string } &
            { opc_riskassessmentdefinitiontemplate_guid: string } &
            { opc_isselected: boolean }
        )[];

        constructor(placeholder: HTMLDivElement, riskAssessmentId: string) {
            this._placeholder = placeholder;
            this._riskAssessmentId = riskAssessmentId;
            this._riskTable = document.createElement("table");
            this._riskTableBody = this._riskTable.createTBody();

            this._riskTable.classList.add("zui-table", "zui-table-highlight-all");
        }

        public async initializeControl() {
            const appetitePromise = this.loadRiskAppetites();
            const definitionPromise = this.loadRiskDefinitions();

            this._riskAppetites = await appetitePromise;
            this._riskDefinitions = await definitionPromise;

            this.render();
        }

        private async loadRiskAppetites() {
            return XrmQuery.retrieveMultiple(x => x.opc_riskappetites)
                .select(x => [x.opc_riskappetiteid, x.opc_name])
                .filter(x => Filter.equals(x.statuscode, opc_riskappetite_statuscode.Active))
                .orderDesc(x => x.opc_name)
                .promise();
        }

        private async loadRiskDefinitions() {
            return XrmQuery.retrieveRelatedMultiple(x => x.opc_riskassessments, this._riskAssessmentId, x => x.opc_riskassessment_riskassessmentdefinitions_riskassessment)
                .select(x => [x.opc_riskassessmentdefinitionid, x.opc_riskassessmentcategory_guid, x.opc_riskassessmentfactortemplate_guid, x.opc_riskassessmentdefinitiontemplate_guid, x.opc_isselected])
                .expand(x => x.opc_RiskAssessmentCategory, x => [x.opc_name, x.opc_sequence])
                .expand(x => x.opc_RiskAssessmentFactorTemplate, x => [x.opc_name, x.opc_sequence])
                .expand(x => x.opc_RiskAssessmentDefinitionTemplate, x => [x.opc_name, x.opc_riskappetite_guid])
                .filter(x => Filter.equals(x.statuscode, opc_riskassessmentdefinition_statuscode.Active))
                .promise();
        }

        private getCategories() {
            return this._riskDefinitions.map(x => x.opc_RiskAssessmentCategory)
                .filter((value, index, array) => {
                    return array.map(x => x.opc_riskassessmentcategoryid).indexOf(value.opc_riskassessmentcategoryid) === index;
                })
                .sort((a, b) => {
                    if (a.opc_sequence > b.opc_sequence) return 1;
                    if (a.opc_sequence < b.opc_sequence) return -1;
                });
        }

        private getCategoryFactors(category: opc_RiskAssessmentCategory_Result) {
            return this._riskDefinitions.filter(x => x.opc_riskassessmentcategory_guid === category.opc_riskassessmentcategoryid)
                .map(x => x.opc_RiskAssessmentFactorTemplate)
                .filter((value, index, array) => {
                    return array.map(x => x.opc_riskassessmentfactortemplateid).indexOf(value.opc_riskassessmentfactortemplateid) === index;
                })
                .sort((a, b) => {
                    if (a.opc_sequence > b.opc_sequence) return 1;
                    if (a.opc_sequence < b.opc_sequence) return -1;
                });
        }

        private getCategoryFactorDefinitions(category: opc_RiskAssessmentCategory_Result, factor: opc_RiskAssessmentFactorTemplate_Result) {
            return this._riskDefinitions.filter(x => x.opc_riskassessmentcategory_guid === category.opc_riskassessmentcategoryid && x.opc_riskassessmentfactortemplate_guid === factor.opc_riskassessmentfactortemplateid);
        }

        private render() {
            this.renderHeader();
            this.renderBody();

            this._placeholder.appendChild(this._riskTable);
        }

        private renderHeader() {
            const tableHead = this._riskTable.createTHead();
            const tableRow = tableHead.insertRow();

            const appetites = this._riskAppetites.map(x => x.opc_name);
            const headers: string[] = ["Risk Measurement Categories", "Factors"].concat(appetites);

            for (let header of headers) {
                const tableHeader = document.createElement("th");
                tableHeader.textContent = header
                tableRow.appendChild(tableHeader);
            }
        }

        private renderBody() {
            let categories = this.getCategories();

            for (let category of categories) {
                let factors = this.getCategoryFactors(category);
                this.renderCategory(category, factors);
            }
        }

        private renderCategory(category: opc_RiskAssessmentCategory_Result, factors: opc_RiskAssessmentFactorTemplate_Result[]) {
            for (let i = 0; i < factors.length; i++) {
                let factor = factors[i];

                let tableRow = this._riskTableBody.insertRow();

                if (i == 0) {
                    let categoryHeader = document.createElement("th");
                    categoryHeader.textContent = category.opc_name;
                    categoryHeader.rowSpan = factors.length;
                    categoryHeader.scope = "row";
                    tableRow.appendChild(categoryHeader);
                }

                let factorHeader = document.createElement("th");
                factorHeader.textContent = factor.opc_name;
                factorHeader.scope = "row";
                tableRow.appendChild(factorHeader);

                let definitions = this.getCategoryFactorDefinitions(category, factor);
                for (let j = 0; j < this._riskAppetites.length; j++) {
                    const appetite = this._riskAppetites[j];
                    const definition = definitions.find(x => x.opc_RiskAssessmentDefinitionTemplate.opc_riskappetite_guid === appetite.opc_riskappetiteid);

                    if (!definition) {
                        tableRow.insertCell();
                        continue;
                    }

                    const definitionCell = tableRow.insertCell();
                    const matchingDefinitions = definitions.filter(x => x.opc_RiskAssessmentDefinitionTemplate.opc_name === definition.opc_RiskAssessmentDefinitionTemplate.opc_name).length;

                    definitionCell.textContent = definition.opc_RiskAssessmentDefinitionTemplate.opc_name;
                    definitionCell.colSpan = matchingDefinitions;

                    if (definition.opc_isselected)
                        definitionCell.className = "is-selected";

                    definitionCell.setAttribute("data-guid", definition.opc_riskassessmentdefinitionid);
                    definitionCell.onclick = this.onDefinitionClick;

                    j += matchingDefinitions - 1;
                }
            }
        }

        private onDefinitionClick(this: GlobalEventHandlers, ev: MouseEvent) {
            const cell = <HTMLTableCellElement>ev.target;

            const isSelected = !cell.classList.contains("is-selected");
            const definitionId = cell.getAttribute("data-guid");

            const currentRow = cell.closest("tr");
            const selectedCell = currentRow.querySelector("td[data-guid].is-selected");

            if (selectedCell) {
                const selectedDefinitionId = selectedCell.getAttribute("data-guid");
                XrmQuery.update(x => x.opc_riskassessmentdefinitions, selectedDefinitionId, { opc_isselected: false }).execute(id => {
                    selectedCell.classList.toggle("is-selected");
                });

                if (selectedDefinitionId === definitionId)
                    return;
            }

            XrmQuery.update(x => x.opc_riskassessmentdefinitions, definitionId, { opc_isselected: isSelected }).execute(id => {
                cell.classList.toggle("is-selected");
            });
        }
        
        public static control_OnLoad(): void {
            let parameters = Xrm.Utility.getGlobalContext().getQueryStringParameters();

            let complaintId: string = parameters.id;
            XrmQuery.retrieveRelatedMultiple(x => x.opc_complaints, complaintId, x => x.opc_RiskAssessment_Complaint_opc_complain)
                .select(x => [x.opc_riskassessmentid, x.opc_name, x.createdon])
                .filter(x => Filter.equals(x.statuscode, opc_riskassessment_statuscode.Active))
                .promise()
                .then((riskAssessments) => {
                    for (let riskAssessment of riskAssessments) {
                        let placeholder = <HTMLDivElement>document.getElementById("risks");

                        let control = new RiskAssessmentControl(placeholder, riskAssessment.opc_riskassessmentid)
                        control.initializeControl();
                    }
                });
        }
    }
}