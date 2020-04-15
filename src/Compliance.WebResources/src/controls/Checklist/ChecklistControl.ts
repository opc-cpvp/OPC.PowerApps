import { injectable, inject } from "inversify";
import { PowerIFrameControl, IChecklistService } from "../../interfaces";

export namespace Controls {

    @injectable()
    export class ChecklistControl extends PowerIFrameControl {

        private readonly _allegationId: string;
        private readonly _checklistService: IChecklistService;

        private _questionTypes: { id: string, type: string }[];
        private _visbilityToggles: { id: string, value: boolean }[] = [];
        private _placeholder: HTMLElement;

        constructor(@inject(nameof<Xrm.context>()) xrmContext: Xrm.context,
            @inject(nameof<Document>()) documentContext: Document,
            @inject(nameof<IChecklistService>()) checklistService: IChecklistService) {
            super(xrmContext, documentContext);

            // TODO: We should modify the model to have a checklist entity in between to have a generic implementation
            this._allegationId = this.xrmContext.getQueryStringParameters().id;
            this._placeholder = this.documentContext.getElementById("checklist");
            this._checklistService = checklistService;
        }

        public initializeControl() {
            // This registers an handler for the save-entity event dispatched from parent form
            super.initializeControl();

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

                }).catch(() => console.error("error loading checklist responses"));
        }

        private addQuestion(cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result): void {

            // Check if there is a parent question in visibilitytoggles array and what's the loading state
            let isVisible = false;
            const visibleTuple = this._visbilityToggles.find(p => p.id === cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid);
            if (visibleTuple) isVisible = visibleTuple.value;

            // Create question container/wrapper
            const questionContainer = this.documentContext.createElement("div");
            questionContainer.classList.add("form-group", "border-bottom", "pb-4");

            // Check whether or not the question should be conditionally visible
            if (cr.opc_questiontemplateid.opc_conditionalvisibility) {
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
                default:
                    console.log("control type not supported - not adding control");
                    break;
            }

            // Append created question
            this._placeholder.appendChild(questionContainer);
        }

        private addTextQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_name}</label>` +
                `<input id="q-${cr.opc_checklistresponseid}" type="text" class="form-control" value="${cr.opc_response || ""}" data-responseid='${cr.opc_checklistresponseid}' />`;
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTextAreaQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_name}</label>` +
                `<textarea id="q-${cr.opc_checklistresponseid}" rows="3" class="form-control" data-responseid='${cr.opc_checklistresponseid}'>${cr.opc_response || ""}</textarea>`;
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTwoOptionsQuestion(element: HTMLDivElement, cr: { opc_questiontemplateid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            // We don't know if its a toggle, but just in case we add in the array
            this._visbilityToggles.push({ id: cr.opc_questiontemplateid_guid, value: cr.opc_response == "1" });

            const questionHtml =
                `<div id="q-${cr.opc_checklistresponseid}">${cr.opc_name}</div>` +
                '<div class="form-check form-check-inline">' +
                `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt1" value="1" ${cr.opc_response == "1" ? "checked" : ""} data-toggle='collapse' data-target='.toggledby-${cr.opc_questiontemplateid_guid}' data-responseid='${cr.opc_checklistresponseid}'>` +
                    `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt1">Yes</label>` +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt2" value="0" ${cr.opc_response == "0" ? "checked" : ""} data-toggle='collapse' data-target='.toggledby-${cr.opc_questiontemplateid_guid}' data-responseid='${cr.opc_checklistresponseid}'>` +
                    `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt2">No</label>` +
                '</div>';
            element.insertAdjacentHTML('beforeend', questionHtml);
        }

        public save(): void {

            const dirtyInputs = this._placeholder.getElementsByClassName("dirty");
            const doubleDirtyRadios : string[] = [];

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

        }

    }
}