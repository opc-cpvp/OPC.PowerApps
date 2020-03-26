import { injectable, inject } from "inversify";
import { PowerIFrameControl, IChecklistService } from "../../interfaces";

export namespace Controls {

    @injectable()
    export class ChecklistControl extends PowerIFrameControl {

        private readonly _allegationId: string;
        private readonly _checklistService: IChecklistService;

        private _questionTypes: { id: string, type: string }[];
        private _visbilityToggles: [string, boolean][] = [];
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
            super.initializeControl();

            // Fetch question type to cross reference later
            let qTypesPromise = this._checklistService.getQuestionTypes()
                .then(x => { this._questionTypes = x; })
                .catch(() => console.error("error loading question types"));

            // Fetch checklist and create controls
            this._checklistService.getChecklist(this._allegationId)
                .then(async crArray => {

                    // Both requests can run at the same time, but before processing results 
                    // we want to make sure to have the question types.
                    await qTypesPromise;

                    crArray.forEach(cr => {

                        // Create controls based on type defined in question type entity
                        switch (cr.opc_questionid.opc_questiontypeid_guid) {
                            case this._questionTypes.find(qt => qt.type === "Text").id:
                                this.addTextQuestion(cr);
                                break;
                            case this._questionTypes.find(qt => qt.type === "Text Area").id:
                                this.addTextAreaQuestion(cr);
                                break;
                            case this._questionTypes.find(qt => qt.type === "Two Options").id:
                                this.addTwoOptionsQuestion(cr);
                                break;
                            default:
                                console.log("control type not supported - not adding control");
                                break;
                        }
                    })
                }).catch(() => console.error("error loading checklist responses"));
        }

        private addTextQuestion(cr: { opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            let visibleTuple = this._visbilityToggles.find(p => p[0] === cr.opc_questionid.opc_parentquestiontemplateid_guid);
            let isVisible = false;
            if (visibleTuple) isVisible = visibleTuple[1];

            let questionHtml =
                `<div class="form-group border-bottom pb-4 ${cr.opc_questionid.opc_conditionalvisibility ? (isVisible ? "show " : "") + "collapse toggle-" + cr.opc_questionid.opc_parentquestiontemplateid_guid : ""}}">` +
                    `<div class="ml-${cr.opc_questionid.opc_parentquestiontemplateid_guid ? "5" : "3"}">` +
                        `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_name}</label>` +
                        `<input id="q-${cr.opc_checklistresponseid}" type="text" class="form-control" value="${cr.opc_response || ""}" />` +
                    '</div>' +
                '</div>';
            this._placeholder.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTextAreaQuestion(cr: { opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            let visibleTuple = this._visbilityToggles.find(p => p[0] === cr.opc_questionid.opc_parentquestiontemplateid_guid);
            let isVisible = false;
            if (visibleTuple) isVisible = visibleTuple[1];

            let questionHtml =
                `<div class="form-group border-bottom pb-4 ${cr.opc_questionid.opc_conditionalvisibility ? (isVisible ? "show " : "") + "collapse toggle-" + cr.opc_questionid.opc_parentquestiontemplateid_guid : ""} ">` +
                    `<div class="ml-${cr.opc_questionid.opc_parentquestiontemplateid_guid ? "5" : "3"}">` +
                        `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_name}</label>` +
                        `<textarea id="q-${cr.opc_checklistresponseid}" rows="3" class="form-control">${cr.opc_response || ""}</textarea>` +
                    '</div>' +
                '</div>';
            this._placeholder.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTwoOptionsQuestion(cr: { opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Result) {
            // We don't know if its a toggle, but just in case we add in the array
            this._visbilityToggles.push([cr.opc_questionid_guid, cr.opc_response == "1"]);

            // Check if there is a parent question in visibilitytoggles array and what's the loading state
            let visibleTuple = this._visbilityToggles.find(p => p[0] === cr.opc_questionid.opc_parentquestiontemplateid_guid);
            let isVisible = false;
            if (visibleTuple) isVisible = visibleTuple[1];

            let questionHtml =
                `<div class="form-group border-bottom pb-4 ${cr.opc_questionid.opc_conditionalvisibility ? (isVisible ? "show " : "") + "collapse toggle-" + cr.opc_questionid.opc_parentquestiontemplateid_guid : ""}">` +
                    `<div class="ml-${cr.opc_questionid.opc_parentquestiontemplateid_guid ? "5" : "3"}">` +
                        `<div id="q-${cr.opc_checklistresponseid}">${cr.opc_name}</div>` +
                        '<div class="form-check form-check-inline">' +
                            `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt1" value="1" ${cr.opc_response == "1" ? "checked" : ""} data-toggle='collapse' data-target='.toggle-${cr.opc_questionid_guid}'>` +
                            `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt1">Yes</label>` +
                        '</div>' +
                        '<div class="form-check form-check-inline">' +
                            `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt2" value="0" ${cr.opc_response == "0" ? "checked" : ""} data-toggle='collapse' data-target='.toggle-${cr.opc_questionid_guid}'>` +
                            `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt2">No</label>` +
                        '</div>' +
                    '</div>' +
                '</div>';
            this._placeholder.insertAdjacentHTML('beforeend', questionHtml);
        }

        protected save(): void {

            let dirtyInputs = this.documentContext.getElementsByClassName("dirty");
            for (let i = 0; i < dirtyInputs.length; i++) {
                let id: string = dirtyInputs[i].id.replace('q-','');
                let value: string = null;

                // Extract ID and Values based on type of inputs
                switch (dirtyInputs[i].tagName.toLowerCase()) {
                    case "input":
                        let input = <HTMLInputElement>dirtyInputs[i];
                        value = input.value;

                        // Skip if its radio input and not the selected one
                        if (input.type == "radio") {
                            if (!input.checked) continue;
                            id = input.name.replace("q-", "");
                        }

                        break;
                    case "textarea":
                        let textarea = <HTMLTextAreaElement>dirtyInputs[i];
                        value = textarea.value;
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