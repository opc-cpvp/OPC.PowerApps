import { injectable, inject } from "inversify";
import { PowerIFrameControl, IRiskAssessmentService } from "../../interfaces";

export namespace Controls {
    @injectable()
    export class RiskAssessmentControl extends PowerIFrameControl {
        private readonly _riskAssessmentId: string;
        private readonly _riskAssessmentService: IRiskAssessmentService;

        private readonly _placeholder: HTMLElement;
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

        constructor(
            @inject(nameof<Xrm.context>()) xrmContext: Xrm.context,
            @inject(nameof<Document>()) documentContext: Document,
            @inject(nameof<IRiskAssessmentService>()) riskAssessmentService: IRiskAssessmentService) {
            super(xrmContext, documentContext);

            this._riskAssessmentId = this.xrmContext.getQueryStringParameters().id;
            this._placeholder = this.documentContext.getElementById("risks");
            this._riskTable = document.createElement("table");
            this._riskTableBody = this._riskTable.createTBody();
            this._riskAssessmentService = riskAssessmentService;

            this._riskTable.classList.add("zui-table", "zui-table-highlight-all");
        }

        public async initializeControl() {
            // This registers an handler for the save-entity event dispatched from parent form
            super.initializeControl();

            // Fetch risk appetites to cross reference later
            const qRiskAppetitesPromise = this._riskAssessmentService.getRiskAppetites()
                .then(x => { this._riskAppetites = x; })
                .catch(() => console.error("error loading risk appetites"));

            // Fetch checklist and create controls
            this._riskAssessmentService.getRiskDefinitions(this._riskAssessmentId)
                .then(async riskDefinitions => {

                    // Both requests can run at the same time, but before processing results
                    // we want to make sure to have the risk appetites.
                    await qRiskAppetitesPromise;
                    this._riskDefinitions = riskDefinitions;

                    this.render();
                }, reason => console.error(reason)).catch(() => console.error("error loading risk definitions"));
        }

        private getCategories() {
            return this._riskDefinitions.map(x => x.opc_RiskAssessmentCategory)
                .filter((value, index, array) => {
                    return array.map(x => x.opc_riskassessmentcategoryid).indexOf(value.opc_riskassessmentcategoryid) === index;
                })
                .sort((a, b) => {
                    if (a.opc_sequence > b.opc_sequence) return 1;
                    if (a.opc_sequence < b.opc_sequence) return -1;
                    return 0;
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
                    return 0;
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
            const headers = ["Risk Measurement Categories", "Factors"].concat(appetites);

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
                const factor = factors[i];

                const tableRow = this._riskTableBody.insertRow();

                // Add the category header for the first factor.
                if (i == 0) {
                    const categoryHeader = document.createElement("th");
                    categoryHeader.textContent = category.opc_name;
                    categoryHeader.rowSpan = factors.length;
                    categoryHeader.scope = "row";
                    tableRow.appendChild(categoryHeader);
                }

                const factorHeader = document.createElement("th");
                factorHeader.textContent = factor.opc_name;
                factorHeader.scope = "row";
                tableRow.appendChild(factorHeader);

                const definitions = this.getCategoryFactorDefinitions(category, factor);
                for (let j = 0; j < this._riskAppetites.length; j++) {
                    const appetite = this._riskAppetites[j];
                    const definition = definitions.find(x => x.opc_RiskAssessmentDefinitionTemplate.opc_riskappetite_guid === appetite.opc_riskappetiteid);

                    // Add an empty cell if there's no matching defintions.
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

                    // Advance the index by the amount of matching definitions.
                    j += matchingDefinitions - 1;
                }
            }
        }

        private onDefinitionClick(ev: MouseEvent) {
            const cell = <HTMLTableCellElement>ev.target;

            const isSelected = !cell.classList.contains("is-selected");
            const definitionId = cell.getAttribute("data-guid");

            const currentRow = cell.closest("tr");
            const selectedCell = currentRow.querySelector("td[data-guid].is-selected");

            if (selectedCell) {
                const selectedDefinitionId = selectedCell.getAttribute("data-guid");
                this._riskAssessmentService.updateRiskAssessmentDefinition(selectedDefinitionId, false).then(() => {
                    selectedCell.classList.toggle("is-selected");
                })

                // Exit if we clicked on the selected cell.
                if (selectedDefinitionId === definitionId)
                    return;
            }

            this._riskAssessmentService.updateRiskAssessmentDefinition(definitionId, isSelected).then(() => {
                cell.classList.toggle("is-selected");
            });
        }

        public save(): void {
        }
    }
}