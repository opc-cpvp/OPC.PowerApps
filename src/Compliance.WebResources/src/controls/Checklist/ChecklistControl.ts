export namespace Controls {

    export class ChecklistControl {
        private readonly _placeholder: HTMLElement;
        private readonly _allegationId: string;
        private _questionTypes: (opc_QuestionType_Fixed & { opc_name: string; } & { opc_questiontypeid: string; })[];
        private _visbilityToggles: [string, boolean][] = [];


        constructor(placeholder: HTMLElement, allegationId: string) {
            // TODO: We should modify the model to have a checklist entity in between to have a generic implementation
            this._placeholder = placeholder;
            this._allegationId = allegationId;
        }

        public async initializeControl() {

            // TODO: put that in parent class
            document.addEventListener("entity-save", (e) => {
                this.save()
            });

            this.loadChecklistResponses().then((crArray) => {
                crArray.forEach(cr => {

                    switch (cr.opc_questionid.opc_questiontypeid_guid) {
                        case this._questionTypes.find(qt => qt.opc_name === "Text").opc_questiontypeid:
                            this.addTextQuestion(cr);
                            break;
                        case this._questionTypes.find(qt => qt.opc_name === "Text Area").opc_questiontypeid:
                            this.addTextAreaQuestion(cr);
                            break;
                        case this._questionTypes.find(qt => qt.opc_name === "Two Options").opc_questiontypeid:
                            this.addTwoOptionsQuestion(cr);
                            break;
                        default:
                            console.log("control type not supported - not adding control");
                            break;
                    }
                })
            }).catch(function () {
                console.error("error loading checklist responses");
            });

            this.loadQuestionTypes().then((x) => {
                this._questionTypes = x;
            }).catch(function () {
                console.error("error loading question types");
            });
        }

        private addTextQuestion(cr: { opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Fixed & { opc_checklistresponseid: string; } & { opc_name: string; } & { opc_response: string; } & { opc_questionid_guid: string; }) {
            let questionHtml =
                `<div class="form-group border-bottom pb-4 ${cr.opc_questionid.opc_conditionalvisibility ? "collapse" : ""}">` +
                    `<div class="ml-${cr.opc_questionid.opc_parentquestiontemplateid_guid?"5":"3"}">` +
                        `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_name}</label>` +
                        `<input id="q-${cr.opc_checklistresponseid}" type="text" class="form-control" value="${cr.opc_response || ""}" onchange="event.target.className+=' dirty'" />` +
                    '</div>'+
                '</div>';
            this._placeholder.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTextAreaQuestion(cr: { opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Fixed & { opc_checklistresponseid: string; } & { opc_name: string; } & { opc_response: string; } & { opc_questionid_guid: string; }) {
            let visibleTuple = this._visbilityToggles.find(p => p[0] === cr.opc_questionid.opc_parentquestiontemplateid_guid);
            let isVisible = false;
            if (visibleTuple) isVisible = visibleTuple[1];

            let questionHtml =
                `<div class="form-group border-bottom pb-4 ${cr.opc_questionid.opc_conditionalvisibility ? (isVisible?"show ":"") + "collapse toggle-" + cr.opc_questionid.opc_parentquestiontemplateid_guid : ""} ">` +
                    `<div class="ml-${cr.opc_questionid.opc_parentquestiontemplateid_guid ? "5" : "3"}">` +
                        `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_name}</label>` +
                        `<textarea id="q-${cr.opc_checklistresponseid}" rows="3" class="form-control" onchange="event.target.className+=' dirty'">${cr.opc_response||""}</textarea>` +
                    '</div>' +
                '</div>';
            this._placeholder.insertAdjacentHTML('beforeend', questionHtml);
        }

        private addTwoOptionsQuestion(cr: { opc_questionid: opc_QuestionTemplate_Result; } & opc_ChecklistResponse_Fixed & { opc_checklistresponseid: string; } & { opc_name: string; } & { opc_response: string; } & { opc_questionid_guid: string; }) {
            // We don't know if its a toggle, but just in case we push it.
            this._visbilityToggles.push([cr.opc_questionid_guid, cr.opc_response == "1"]);

            let questionHtml =
                `<div class="form-group border-bottom pb-4">` +
                    `<div class="ml-${cr.opc_questionid.opc_parentquestiontemplateid_guid ? "5" : "3"}">` +
                        `<div id="q-${cr.opc_checklistresponseid}">${cr.opc_name}</div>` +
                        '<div class="form-check form-check-inline">' +
                            `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt1" value="1" onchange="event.target.className+=' dirty'" ${cr.opc_response == "1" ? "checked" : ""} data-toggle='collapse' data-target='.toggle-${cr.opc_questionid_guid}'>` +
                            `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt1">Yes</label>`+
                        '</div>'+
                        '<div class="form-check form-check-inline">'+
                            `<input class="form-check-input" type="radio" name="q-${cr.opc_checklistresponseid}" id="q-${cr.opc_checklistresponseid}-opt2" value="0" onchange="event.target.className+=' dirty'" ${cr.opc_response == "0" ? "checked" : ""} data-toggle='collapse' data-target='.toggle-${cr.opc_questionid_guid}'>`+
                            `<label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt2">No</label>`+
                        '</div>'+
                    '</div>' +
                '</div>';
            this._placeholder.insertAdjacentHTML('beforeend', questionHtml);
        }

        private save() : void {

            // TODO: investigate async for way
            let dirtyInputs = document.getElementsByClassName("dirty");
            for (let i = 0; i < dirtyInputs.length; i++) {

                switch (dirtyInputs[i].tagName.toLowerCase()) {
                    case "input":
                        let input = <HTMLInputElement>dirtyInputs[i];

                        // If its radio input and not the selected input, skip
                        if (input.type == "radio" && !input.checked) continue;

                        let id = input.type == "radio" ? input.name : input.id;
                        XrmQuery.update(x => x.opc_checklistresponses, id.replace("q-", ""), { opc_response: input.value })
                            .execute(() => {
                                input.className = input.className.replace("dirty", "");
                            }, error => {
                                console.log("error:" + error);
                            });
                        break;
                    case "textarea":
                        let textarea = <HTMLTextAreaElement>dirtyInputs[i];
                        XrmQuery.update(x => x.opc_checklistresponses, textarea.id.replace("q-", ""), { opc_response: textarea.value })
                            .execute(() => {
                                textarea.className = textarea.className.replace("dirty", "");
                            }, error => {
                                console.log("error:" + error);
                            });
                    default: 
                        console.log("unsupported element type")
                        break;

                }
            }
        }

        private async loadChecklistResponses() {

            return XrmQuery.retrieveMultiple(x => x.opc_checklistresponses)
                .select(x => [x.opc_checklistresponseid, x.opc_name, x.opc_response, x.opc_questionid_guid])
                .expand(x => x.opc_questionid, x => [x.opc_questiontemplateid, x.opc_name, x.opc_conditionalvisibility, x.opc_sequence, x.opc_questiontypeid_guid, x.opc_parentquestiontemplateid_guid])
                .filter(x => Filter.equals(x.opc_allegationid_guid, Filter.makeGuid(XQW.stripGUID(this._allegationId))))
                .orderAsc(x => x.opc_name)
                .promise();
        }

        private async loadQuestionTypes() {
            return XrmQuery.retrieveMultiple(x => x.opc_questiontypes)
                .select(x => [x.opc_name, x.opc_questiontypeid])
                .promise();
        }
        
        public static control_OnLoad(): void {
            let parameters = Xrm.Utility.getGlobalContext().getQueryStringParameters();
            let control = new ChecklistControl(document.getElementById("checklist"), parameters.id);
            control.initializeControl();
        }
    }
}