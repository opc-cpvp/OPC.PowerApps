import { injectable, inject } from "inversify";
import { PowerIFrameControl, IChecklistService } from "../../interfaces";
import { JQueryHelper } from "../../helpers/JQueryHelper";

export namespace Controls {

    @injectable()
    export class ChecklistControl extends PowerIFrameControl {

        private readonly _allegationId: string;
        private readonly _checklistService: IChecklistService;

        private _questionTypes: { id: string, type: string }[];
        private _visbilityToggles: { id: string, value: boolean }[] = [];
        private _placeholder: HTMLElement;
        private _isCurrentLanguageEnglish: boolean = true;
        private _checklist: ({ opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result)[];

        constructor(
            @inject(nameof<Xrm.context>()) xrmContext: Xrm.context,
            @inject(nameof<Document>()) documentContext: Document,
            @inject(nameof<IChecklistService>()) checklistService: IChecklistService) {
            super(xrmContext, documentContext);

            // TODO: We should modify the model to have a checklist entity in between to have a generic implementation
            this._allegationId = this.xrmContext.getQueryStringParameters().id;
            this._placeholder = this.documentContext.getElementById("checklist");
            this._checklistService = checklistService;

            // REVISIT: Adding this here for now, but either multilangual plugin should handle it, or it should be at some other level in TS.
            this._isCurrentLanguageEnglish = xrmContext.userSettings.languageId === 1033;
        }

        public init() {
            // This registers an handler for the save-entity event dispatched from parent form
            super.init();

            // Fetch question type to cross reference later
            const qTypesPromise = this._checklistService.getQuestionTypes()
                .then(x => { this._questionTypes = x; })
                .catch(() => console.error("error loading question types"));

            // Fetch checklist and create controls
            this._checklistService.getChecklist(this._allegationId)
                .then(async crArray => {

                    // Both requests can run at the same time, but before processing results
                    // we want to make sure to have the question types.
                    await qTypesPromise;
                    crArray.forEach(cr => this.addQuestion(cr));

                    this._checklist = crArray;

                    JQueryHelper.initSelectElements();

                }, reason => console.error(reason)).catch(() => console.error("error loading checklist responses"));
        }

        private addQuestion(cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result): void {

            // Check if there is a parent question in visibilitytoggles array and what's the loading state
            let isVisible = false;
            const visibleTuple = this._visbilityToggles.find(p => p.id === cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid);
            if (visibleTuple) isVisible = visibleTuple.value;

            // Create question container/wrapper
            const questionContainer = this.documentContext.createElement("div");
            questionContainer.classList.add("form-group", "border-bottom", "pb-4");

            // Check whether or not the question should be hidden and managed internally
            if (cr.opc_questiontemplateid.opc_managedinternally) {
                questionContainer.classList.add("collapse");
            }
            // Check whether or not the question should be conditionally visible
            else if (cr.opc_questiontemplateid.opc_conditionalvisibility) {
                // If so set respective visibility and means for "parent" control to toggle visibility
                if (isVisible) questionContainer.classList.add("show");
                questionContainer.classList.add("collapse", `toggledby-${cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid}`);
            }

            // Create container used for indentation
            const indentingContainer = this.documentContext.createElement("div");
            indentingContainer.classList.add(`ml-${cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid ? "5" : "3"}`);
            questionContainer.appendChild(indentingContainer);

            // Create controls based on type defined in question type entity
            switch (cr.opc_questiontemplateid.opc_questiontypeid_guid) {
                case this._questionTypes.find(qt => qt.type === "Text").id:
                    this.addTextQuestion(indentingContainer, cr);
                    break;
                case this._questionTypes.find(qt => qt.type === "Text Area").id:
                    this.addTextAreaQuestion(indentingContainer, cr);
                    break;
                case this._questionTypes.find(qt => qt.type === "Two Options").id:
                    this.addTwoOptionsQuestion(indentingContainer, cr);
                    break;
                case this._questionTypes.find(qt => qt.type === "Multiselect").id:
                    this.addSelectQuestion(indentingContainer, cr, "multiselect");
                    break;
                case this._questionTypes.find(qt => qt.type === "Select").id:
                    this.addSelectQuestion(indentingContainer, cr, "select");
                    break;
                case this._questionTypes.find(qt => qt.type === "Date").id:
                    this.addDateQuestion(indentingContainer, cr);
                    break;
                case this._questionTypes.find(qt => qt.type === "Number").id:
                    this.addNumberTypeQuestion(indentingContainer, cr);
                    break;
                case this._questionTypes.find(qt => qt.type === "Calculated Field").id:
                    this.addCalculatedFieldQuestion(indentingContainer, cr);
                    break;
                default:
                    console.log("control type not supported - not adding control");
                    break;
            }

            // Append created question
            this._placeholder.appendChild(questionContainer);
        }

        private addCalculatedFieldQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</label>` +
                //`<label id="q-${cr.opc_checklistresponseid}" type="text" class="form-control calculated-field" data-additionalparameters="${cr.opc_questiontemplateid.opc_additionalparameters}" data-responseid='${cr.opc_checklistresponseid}'>${cr.opc_response || ""}</label>`;
                `<input id="q-${cr.opc_checklistresponseid}" type="text" class="form-control calculated-field" value="${cr.opc_response || ""}" data-responseid='${cr.opc_checklistresponseid}' data-additionalparameters="${cr.opc_questiontemplateid.opc_additionalparameters}" readonly />`;
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addNumberTypeQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</label>` +
                `<input id="q-${cr.opc_checklistresponseid}" type="number" class="form-control" value="${cr.opc_response || ""}" data-responseid='${cr.opc_checklistresponseid}' />`;
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTextQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</label>` +
                `<input id="q-${cr.opc_checklistresponseid}" type="text" class="form-control" value="${cr.opc_response || ""}" data-responseid='${cr.opc_checklistresponseid}' />`;
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTextAreaQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</label>` +
                `<textarea id="q-${cr.opc_checklistresponseid}" rows="3" class="form-control" data-responseid='${cr.opc_checklistresponseid}'>${cr.opc_response || ""}</textarea>`;
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTwoOptionsQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            // We don't know if its a toggle, but just in case we add in the array
            this._visbilityToggles.push({ id: cr.opc_questiontemplateid_guid, value: cr.opc_response == "1" });

            const questionHtml =
                `<div id="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</div>` +
                '<div class="form-check form-check-inline">' +
                `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt1" value="1" ${cr.opc_response == "1" ? "checked" : ""} data-toggle='collapse' data-target='.toggledby-${cr.opc_questiontemplateid_guid}' data-responseid='${cr.opc_checklistresponseid}'>` +
                `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt1">${this._isCurrentLanguageEnglish ? "Yes" : "Oui"}</label>` +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt2" value="0" ${cr.opc_response == "0" ? "checked" : ""} data-toggle='collapse' data-target='.toggledby-${cr.opc_questiontemplateid_guid}' data-responseid='${cr.opc_checklistresponseid}'>` +
                `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt2">${this._isCurrentLanguageEnglish ? "No" : "Non"}</label>` +
                '</div>';
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addSelectQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result, selectType: string) {
            // Get the Additional Parameters string and separate the options.
            const options = cr.opc_questiontemplateid.opc_additionalparameters.split("\n");

            let optionsHtml: string = "";

            options.forEach(x => {
                const bilangualOptions = x.split("|");

                // I was looking if response included x before, but now I use one of the bilangual option just in case the formating of the options change over time.
                optionsHtml = optionsHtml.concat(`<option value="${x}" ${cr.opc_response?.includes(bilangualOptions[0].trim()) ? "selected" : ""}>${this._isCurrentLanguageEnglish ? bilangualOptions[0].trim() : bilangualOptions[1].trim()}</option>`);
            });

            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</label>` +
                `<select multiple="multiple" class="form-control ${selectType}" id="q-${cr.opc_checklistresponseid}" data-responseid='${cr.opc_checklistresponseid}'>` +
                optionsHtml +
                `</select>`;

            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addDateQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}</label>` +
                `<input id="q-${cr.opc_checklistresponseid}" data-responseid='${cr.opc_checklistresponseid}' type="date" class="form-control" value="${cr.opc_response || ""}">`;

            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private isNullOrWhiteSpace(string: string): boolean {
            return (string === null || string.match(/^ *$/) !== null) ? true : false;
        }

        private getDateDifferenceInDays(date1: Date, date2: Date): number {
            return (date1.valueOf() - date2.valueOf()) / (1000 * 60 * 60 * 24);
        }

        public save(): void {

            const dirtyInputs = this._placeholder.getElementsByClassName("dirty");
            const calculatedFields = this._placeholder.getElementsByClassName("calculated-field");
            const doubleDirtyRadios: string[] = [];

            // Iterate over all dirty elements to persist the state
            for (let i = 0; i < dirtyInputs.length; i++) {
                const id: string = dirtyInputs[i].getAttribute("data-responseid");
                let value: string = null;

                // Extract ID and Values based on type of inputs
                switch (dirtyInputs[i].tagName.toLowerCase()) {
                    case "input":
                        const input = <HTMLInputElement>dirtyInputs[i];
                        value = input.value;

                        // Skip if its radio input and not the selected one
                        if (input.type == "radio") {

                            // If it's radio we want to ensure:
                            //  - We are not sending multiple updates
                            //  - We are updating to null when both values are unselected
                            if (!input.checked) {

                                // If all inputs of this group are unchecked, update response to null
                                const relatedInputs = Array.from(this.documentContext.getElementsByName(input.name));
                                if (relatedInputs.every(di => !(<HTMLInputElement>di).checked) && !doubleDirtyRadios.includes(input.name)) {
                                    value = null;
                                    doubleDirtyRadios.push(input.name);
                                }
                                else continue;
                            }
                        }

                        break;
                    case "textarea":
                        value = (<HTMLTextAreaElement>dirtyInputs[i]).value;
                        break;
                    case "select":
                        const options = Array.from((<HTMLSelectElement>dirtyInputs[i]).selectedOptions);

                        value = "";
                        options.forEach(x => {
                            value = value.concat(x.value);
                        });

                        break;
                    default:
                        console.log("unsupported element type:" + dirtyInputs[i].tagName);
                        continue;
                }

                // Send update queries to checklist service
                this._checklistService.updateChecklistResponse(id, value)
                    .then(() => {
                        dirtyInputs[i].classList.remove("dirty");
                    })
                    .catch(e => console.error("error updating questions:" + e));
            }

            for (let i = 0; i < calculatedFields.length; i++) {
                const id: string = calculatedFields[i].getAttribute("data-responseid");
                let value: string = null;

                // Get the additional parameters of the question template
                const input = <HTMLInputElement>calculatedFields[i];
                const formula = input.dataset.additionalparameters;

                // Split fields
                //[0] is whole formula, [1] is first value, [2] is the operator, [3] is the second value
                //const formulaArray = /(\d+(?:\.\d+)*)\s*([-+/\*])\s*(\d+(?:\.\d+)*)(?:\s*([-+/\*])\s*(\d+(?:\.\d+)*))?/g.exec(formula);
                const formulaArray = /(\d+(?:\.\d+)*)\s*([-+/\*])\s*(\d+(?:\.\d+)*)/g.exec(formula);


                // Retrieve associated fields
                const field1 = this._checklist.find(x => x.opc_questiontemplateid.opc_sequence === formulaArray[1]);
                const field2 = this._checklist.find(x => x.opc_questiontemplateid.opc_sequence === formulaArray[3]);


                const field1Value = (<HTMLDataElement>this.documentContext.getElementById(`q-${field1.opc_checklistresponseid}`)).value;
                const field2Value = (<HTMLDataElement>this.documentContext.getElementById(`q-${field2.opc_checklistresponseid}`)).value;

                // Check if both fields have a value
                if (!this.isNullOrWhiteSpace(field1Value) && !this.isNullOrWhiteSpace(field2Value)) {
                    // Switch-Case for the operator
                    switch (formulaArray[2]) {
                        case "-":
                            // Check if both fields are dates
                            if (!isNaN(Date.parse(field1Value)) && !isNaN(Date.parse(field2Value))) {
                                value = this.getDateDifferenceInDays(new Date(field1Value), new Date(field2Value)).toString();
                            }
                            break;
                        case "+":
                        case "/":
                        case "*":
                            break
                        default:
                            break;
                    }
                }

                input.value = value;

                // Send update queries to checklist service
                this._checklistService.updateChecklistResponse(id, value)
                    .catch(e => console.error("error updating questions:" + e));
            }

        }
    }
}