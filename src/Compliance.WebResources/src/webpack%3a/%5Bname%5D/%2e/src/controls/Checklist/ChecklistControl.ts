export namespace Controls {

    export class ChecklistControl {
        private readonly _placeholder: HTMLDivElement;
        private readonly _allegationId: XQW.Guid;
        private readonly _riskTable: HTMLTableElement;
        private readonly _riskTableBody: HTMLTableSectionElement;

        constructor(placeholder: HTMLDivElement, allegationId: XQW.Guid) {
            // TODO: We should modify the model to have a checklist entity in between to have a generic implementation
            this._placeholder = placeholder;
            this._allegationId = allegationId;

            console.log(allegationId);
        }

        public async initializeControl() {
            // load risk responses
            // handle different displays
            // handle different saves???
            //


            //const appetitePromise = this.loadRiskAppetites();
            //const definitionPromise = this.loadRiskDefinitions();

            //this._riskAppetites = await appetitePromise;
            //this._riskDefinitions = await definitionPromise;

            //this.render();
            this.loadChecklistResponses().then(function (x) {
                console.log("retrieved this amount of entries: " + x.length);
            });;
        }

        private async loadChecklistResponses() {

            return XrmQuery.retrieveMultiple(x => x.opc_checklistresponses)
                .selectMore(x => [x.opc_allegationid_guid, x.opc_checklistresponseid, x.opc_name, x.opc_response, x.opc_questionid_guid])
                .expand(x => x.opc_questionid, x => [x.opc_questiontemplateid, x.opc_name, x.opc_conditionalvisibility, x.opc_conditionalvisibility, x.opc_sequence, x.opc_checklisttypeid_guid])
                .filter(x => Filter.equals(x.opc_allegationid_guid, this._allegationId))
                .promise();

                


            //                    return XrmQuery.retrieveMultiple(x => x.opc_questiontemplates)
            //    .select(x => [x.opc_name, x.opc_conditionalvisibility, x.opc_sequence])
            //    .expand(x => x.opc_questiontemplate_checklistresponses_quest, x => [x.opc_name, x.opc_response, x.opc_checklistresponseid])
            //    .expand(x => x.opc_questiontypeid, x => [x.opc_name, x.opc_questiontypeid])
            //    .orderAsc(x => x.opc_sequence)
            //    .promise();

            //return XrmQuery.retrieveRelatedMultiple(x => x.opc_allegations, this._allegationId, x => x.opc_allegation_checklistresponses_allegation)
            //    .selectMore(x => [x.opc_response, x.opc_checklistresponseid, x.opc_name, x.opc_questionid_guid])
            //    .expand(x => x.opc_questionid, x => [x.opc_name, x.opc_conditionalvisibility, x.opc_questiontypeid_guid, x.opc_questiontemplateid])
            //    .promise();


        }

        private async loadQuestionTypes() {
            return XrmQuery.retrieveMultiple(x => x.opc_questiontypes)
                .select(x => [x.opc_name, x.opc_questiontypeid])
                .promise();
        }

 

        private render() {
            this.renderHeader();
            this.renderBody();

            this._placeholder.appendChild(this._riskTable);
        }

        private renderHeader() {
            //const tableHead = this._riskTable.createTHead();
            //const tableRow = tableHead.insertRow();

            //const appetites = this._riskAppetites.map(x => x.opc_name);
            //const headers = ["Risk Measurement Categories", "Factors"].concat(appetites);

            //for (let header of headers) {
            //    const tableHeader = document.createElement("th");
            //    tableHeader.textContent = header
            //    tableRow.appendChild(tableHeader);
            //}
        }

        private renderBody() {
            //let categories = this.getCategories();

            //for (let category of categories) {
            //    let factors = this.getCategoryFactors(category);
            //    this.renderCategory(category, factors);
            //}
        }

        private renderCategory(category: opc_RiskAssessmentCategory_Result, factors: opc_RiskAssessmentFactorTemplate_Result[]) {
            //for (let i = 0; i < factors.length; i++) {
            //    const factor = factors[i];

            //    const tableRow = this._riskTableBody.insertRow();

            //    // Add the category header for the first factor.
            //    if (i == 0) {
            //        const categoryHeader = document.createElement("th");
            //        categoryHeader.textContent = category.opc_name;
            //        categoryHeader.rowSpan = factors.length;
            //        categoryHeader.scope = "row";
            //        tableRow.appendChild(categoryHeader);
            //    }

            //    const factorHeader = document.createElement("th");
            //    factorHeader.textContent = factor.opc_name;
            //    factorHeader.scope = "row";
            //    tableRow.appendChild(factorHeader);

            //    const definitions = this.getCategoryFactorDefinitions(category, factor);
            //    for (let j = 0; j < this._riskAppetites.length; j++) {
            //        const appetite = this._riskAppetites[j];
            //        const definition = definitions.find(x => x.opc_RiskAssessmentDefinitionTemplate.opc_riskappetite_guid === appetite.opc_riskappetiteid);

            //        // Add an empty cell if there's no matching defintions.
            //        if (!definition) {
            //            tableRow.insertCell();
            //            continue;
            //        }

            //        const definitionCell = tableRow.insertCell();
            //        const matchingDefinitions = definitions.filter(x => x.opc_RiskAssessmentDefinitionTemplate.opc_name === definition.opc_RiskAssessmentDefinitionTemplate.opc_name).length;

            //        definitionCell.textContent = definition.opc_RiskAssessmentDefinitionTemplate.opc_name;
            //        definitionCell.colSpan = matchingDefinitions;

            //        if (definition.opc_isselected)
            //            definitionCell.className = "is-selected";

            //        definitionCell.setAttribute("data-guid", definition.opc_riskassessmentdefinitionid);
            //        definitionCell.onclick = this.onDefinitionClick;

            //        // Advance the index by the amount of matching definitions.
            //        j += matchingDefinitions - 1;
            //    }
            //}
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

                // Exit if we clicked on the selected cell.
                if (selectedDefinitionId === definitionId)
                    return;
            }

            XrmQuery.update(x => x.opc_riskassessmentdefinitions, definitionId, { opc_isselected: isSelected }).execute(id => {
                cell.classList.toggle("is-selected");
            });
        }
        
        public static control_OnLoad(): void {
            let parameters = Xrm.Utility.getGlobalContext().getQueryStringParameters();

            let guid: XQW.Guid = parameters.id;            
            let placeholder = <HTMLDivElement>document.getElementById("checklist");

            let control = new ChecklistControl(placeholder, guid);
            control.initializeControl();
        }
    }
}