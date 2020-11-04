import { injectable, inject } from "inversify";
import { IChecklistService } from "../../interfaces";
import { PowerIFrameControl } from "../PowerIFrameControl";
import { JQueryHelper } from "../../helpers/JQueryHelper";

export namespace Controls {
    @injectable()
    export class ChecklistControl extends PowerIFrameControl {
        private readonly _allegationId: string;
        private readonly _checklistService: IChecklistService;

        private _questionTypes: { id: string; type: string }[];
        private _visbilityToggles: { id: string; value: boolean }[] = [];
        private _placeholder: HTMLElement;
        private _isCurrentLanguageEnglish = true;
        private _checklist: ({ opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result)[];

        constructor(
            @inject(nameof<Xrm.context>()) xrmContext: Xrm.context,
            @inject(nameof<Document>()) documentContext: Document,
            @inject(nameof<IChecklistService>()) checklistService: IChecklistService
        ) {
            super(xrmContext, documentContext);

            // TODO: We should modify the model to have a checklist entity in between to have a generic implementation
            this._allegationId = this.xrmContext.getQueryStringParameters().id;
            this._placeholder = this.documentContext.getElementById("checklist");
            this._checklistService = checklistService;

            // REVISIT: Adding this here for now, but either multilangual plugin should handle it, or it should be at some other level in TS.
            this._isCurrentLanguageEnglish = xrmContext.userSettings.languageId === 1033;
        }

        public init(): void {
            // This registers an handler for the save-entity event dispatched from parent form
            super.init();

            // Fetch question type to cross reference later
            const qTypesPromise = this._checklistService
                .getQuestionTypes()
                .then(x => {
                    this._questionTypes = x;
                })
                .catch(() => console.error("error loading question types"));

            // Fetch checklist and create controls
            this._checklistService
                .getChecklist(this._allegationId)
                .then(
                    async crArray => {
                        // Both requests can run at the same time, but before processing results
                        // we want to make sure to have the question types.
                        await qTypesPromise;
                        crArray.forEach(cr => this.addQuestion(cr));
                        this._checklist = crArray;
                        JQueryHelper.initSelectElements();
                    },
                    reason => console.error(reason)
                )
                .catch(() => console.error("error loading checklist responses"));
        }

        public save(): void {
            const dirtyInputs = this._placeholder.getElementsByClassName("dirty");
            const doubleDirtyRadios: string[] = [];

            // Iterate over all dirty elements to persist the state
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < dirtyInputs.length; i++) {
                const id: string = dirtyInputs[i].getAttribute("data-responseid");
                let value: string = null;

                // Extract ID and Values based on type of inputs
                switch (dirtyInputs[i].tagName.toLowerCase()) {
                    case "input": {
                        const input = dirtyInputs[i] as HTMLInputElement;
                        value = input.value;

                        // Skip if its radio input and not the selected one
                        if (input.type === "radio") {
                            // If it's radio we want to ensure:
                            //  - We are not sending multiple updates
                            //  - We are updating to null when both values are unselected
                            if (!input.checked) {
                                // If all inputs of this group are unchecked, update response to null
                                const relatedInputs = Array.from(this.documentContext.getElementsByName(input.name));
                                if (
                                    relatedInputs.every(di => !(di as HTMLInputElement).checked) &&
                                    !doubleDirtyRadios.includes(input.name)
                                ) {
                                    value = null;
                                    doubleDirtyRadios.push(input.name);
                                } else {
                                    continue;
                                }
                            }
                        }

                        break;
                    }
                    case "textarea": {
                        value = (dirtyInputs[i] as HTMLTextAreaElement).value;
                        break;
                    }
                    case "select": {
                        const options = Array.from((dirtyInputs[i] as HTMLSelectElement).selectedOptions);

                        value = "";
                        options.forEach(x => {
                            value = value.concat(`${x.value}; `);
                        });

                        value = value.trim();

                        break;
                    }
                    default: {
                        console.log(`unsupported element type: ${dirtyInputs[i].tagName}`);
                        continue;
                    }
                }

                // Send update queries to checklist service
                this._checklistService
                    .updateChecklistResponse(id, value)
                    .then(() => {
                        dirtyInputs[i].classList.remove("dirty");
                    })
                    .catch(e => console.error("error updating questions", e));
            }

            this.updateCalculatedFields();
        }

        private addQuestion(cr: { opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result): void {
            // Check if there is a parent question in visibilitytoggles array and what's the loading state
            let isVisible = false;
            const visibleTuple = this._visbilityToggles.find(p => p.id === cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid);
            if (visibleTuple) {
                isVisible = visibleTuple.value;
            }

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
                if (isVisible) {
                    questionContainer.classList.add("show");
                }
                questionContainer.classList.add("collapse", `toggledby-${cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid}`);
            }

            // Create container used for indentation
            const indentingContainer = this.documentContext.createElement("div");
            indentingContainer.classList.add(`ml-${cr.opc_questiontemplateid.opc_parentquestiontemplateid_guid ? "5" : "3"}`);
            questionContainer.appendChild(indentingContainer);

            // Create controls based on type defined in question type entity
            switch (cr.opc_questiontemplateid.opc_questiontypeid_guid) {
                case this._questionTypes.find(qt => qt.type === "Text").id:
                    this.addInputQuestion(indentingContainer, cr, "text");
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
                    this.addInputQuestion(indentingContainer, cr, "date");
                    break;
                case this._questionTypes.find(qt => qt.type === "Number").id:
                    this.addInputQuestion(indentingContainer, cr, "number");
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

        private addInputQuestion(
            element: HTMLDivElement,
            cr: { opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result,
            inputType: string
        ) {
            const questionHtml = /* HTML */ `<label for="q-${cr.opc_checklistresponseid}"
                    >${cr.opc_questiontemplateid.opc_sequence} -
                    ${this._isCurrentLanguageEnglish
                        ? cr.opc_questiontemplateid.opc_nameenglish
                        : cr.opc_questiontemplateid.opc_namefrench}</label
                >
                <input
                    id="q-${cr.opc_checklistresponseid}"
                    type="${inputType}"
                    class="form-control"
                    value="${cr.opc_response || ""}"
                    data-responseid="${cr.opc_checklistresponseid}"
                />`;
            element.insertAdjacentHTML("beforeend", questionHtml);
        }

        private addTextAreaQuestion(
            element: HTMLDivElement,
            cr: { opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result
        ) {
            const questionHtml = /* HTML */ `<label for="q-${cr.opc_checklistresponseid}"
                    >${cr.opc_questiontemplateid.opc_sequence} -
                    ${this._isCurrentLanguageEnglish
                        ? cr.opc_questiontemplateid.opc_nameenglish
                        : cr.opc_questiontemplateid.opc_namefrench}</label
                >
                <textarea
                    id="q-${cr.opc_checklistresponseid}"
                    rows="3"
                    class="form-control"
                    data-responseid="${cr.opc_checklistresponseid}"
                >
${cr.opc_response || ""}</textarea
                >`;
            element.insertAdjacentHTML("beforeend", questionHtml);
        }

        private addTwoOptionsQuestion(
            element: HTMLDivElement,
            cr: { opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result
        ) {
            // We don't know if its a toggle, but just in case we add in the array
            this._visbilityToggles.push({ id: cr.opc_questiontemplateid_guid, value: cr.opc_response === "1" });

            const questionHtml = /* HTML */ `<div id="q-${cr.opc_checklistresponseid}">
                    ${cr.opc_questiontemplateid.opc_sequence} -
                    ${this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench}
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="q-${cr.opc_checklistresponseid}"
                        id="q-${cr.opc_checklistresponseid}-opt1"
                        value="1"
                        ${cr.opc_response === "1" ? "checked" : ""}
                        data-toggle="collapse"
                        data-target=".toggledby-${cr.opc_questiontemplateid_guid}"
                        data-responseid="${cr.opc_checklistresponseid}"
                    />
                    <label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt1"
                        >${this._isCurrentLanguageEnglish ? "Yes" : "Oui"}</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="q-${cr.opc_checklistresponseid}"
                        id="q-${cr.opc_checklistresponseid}-opt2"
                        value="0"
                        ${cr.opc_response === "0" ? "checked" : ""}
                        data-toggle="collapse"
                        data-target=".toggledby-${cr.opc_questiontemplateid_guid}"
                        data-responseid="${cr.opc_checklistresponseid}"
                    />
                    <label class="form-check-label" for="q-${cr.opc_checklistresponseid}-opt2"
                        >${this._isCurrentLanguageEnglish ? "No" : "Non"}</label
                    >
                </div>`;
            element.insertAdjacentHTML("beforeend", questionHtml);
        }

        private addSelectQuestion(
            element: HTMLDivElement,
            cr: { opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result,
            selectType: string
        ) {
            // Get the Additional Parameters string and separate the options.
            const options = cr.opc_questiontemplateid.opc_additionalparameters.split("\n");

            let optionsHtml = "";

            options.forEach(x => {
                const bilangualOptions = x.split("|");

                // I was looking if response included x before, but now I use one of the bilangual option just in case the formating of the options change over time.
                optionsHtml = optionsHtml.concat(
                    `<option value="${x}" ${cr.opc_response?.includes(bilangualOptions[0].trim()) ? "selected" : ""}>${
                        this._isCurrentLanguageEnglish ? bilangualOptions[0].trim() : bilangualOptions[1].trim()
                    }</option>`
                );
            });

            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${
                    this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench
                }</label>` +
                `<select multiple="multiple" class="form-control ${selectType}" id="q-${cr.opc_checklistresponseid}" data-responseid='${cr.opc_checklistresponseid}'>` +
                optionsHtml +
                `</select>`;

            element.insertAdjacentHTML("beforeend", questionHtml);
        }

        private addCalculatedFieldQuestion(
            element: HTMLDivElement,
            cr: { opc_questiontemplateid: opc_QuestionTemplate_Result } & opc_ChecklistResponse_Result
        ) {
            if (this.isISODate(cr.opc_response)) {
                // const date = new Date(cr.opc_response)
                // cr.opc_response = `${date.getUTCMonth()}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
                cr.opc_response = `${cr.opc_response.substring(5, 7)}/${cr.opc_response.substring(8, 10)}/${cr.opc_response.substring(
                    0,
                    4
                )}`;
            }

            const questionHtml =
                `<label for="q-${cr.opc_checklistresponseid}">${cr.opc_questiontemplateid.opc_sequence} - ${
                    this._isCurrentLanguageEnglish ? cr.opc_questiontemplateid.opc_nameenglish : cr.opc_questiontemplateid.opc_namefrench
                }</label>` +
                `<input id="q-${cr.opc_checklistresponseid}" type="text" class="form-control calculated-field" value="${
                    cr.opc_response || ""
                }" data-responseid='${cr.opc_checklistresponseid}' data-additionalparameters="${
                    cr.opc_questiontemplateid.opc_additionalparameters
                }" readonly />`;
            element.insertAdjacentHTML("beforeend", questionHtml);
        }

        private getResponseValue(sequenceNumber: string): string {
            const field = this._checklist.find(x => x.opc_questiontemplateid.opc_sequence === sequenceNumber);
            return (this.documentContext.getElementById(`q-${field.opc_checklistresponseid}`) as HTMLDataElement).value;
        }

        private isNullOrWhiteSpace(string: string): boolean {
            return string === null || /^ *$/.exec(string) !== null;
        }

        private isISODate(dateString: string): boolean {
            return /^\d{4}-\d{2}-\d{2}$/.exec(dateString) !== null;
        }

        private getDateDifferenceInDays(date1: Date, date2: Date): number {
            return (date1.valueOf() - date2.valueOf()) / (1000 * 60 * 60 * 24);
        }

        private subtractDaysFromDate(date: Date, days: number): Date {
            return new Date(date.valueOf() - days * 24 * 60 * 60 * 1000);
        }

        private addDaysToDate(date: Date, days: number): Date {
            return new Date(date.valueOf() + days * 24 * 60 * 60 * 1000);
        }

        private calculate(firstValue: string, operator: string, secondValue: string): string {
            let result: string = null;

            const firstValueParsed: any = this.isISODate(firstValue) ? new Date(firstValue) : Number.parseInt(firstValue);
            const secondValueParsed: any = this.isISODate(secondValue) ? new Date(secondValue) : Number.parseInt(secondValue);

            if (isNaN(firstValueParsed) || isNaN(secondValueParsed)) {
                return result;
            }

            switch (operator) {
                case "-":
                    if (firstValueParsed instanceof Date && secondValueParsed instanceof Date) {
                        result = this.getDateDifferenceInDays(new Date(firstValueParsed), new Date(secondValueParsed)).toString();
                    } else if (firstValueParsed instanceof Date && typeof secondValueParsed === "number") {
                        result = this.subtractDaysFromDate(new Date(firstValueParsed), secondValueParsed).toISOString().split("T")[0];
                    } else if (typeof firstValueParsed === "number" && typeof secondValueParsed === "number") {
                        result = (firstValueParsed - secondValueParsed).toString();
                    }
                    break;
                case "+":
                    if (firstValueParsed instanceof Date && typeof secondValueParsed === "number") {
                        result = this.addDaysToDate(new Date(firstValueParsed), secondValueParsed).toISOString().split("T")[0];
                    } else if (typeof firstValueParsed === "number" && typeof secondValueParsed === "number") {
                        result = (firstValueParsed + secondValueParsed).toString();
                    }
                    break;
                case "/":
                    if (typeof firstValueParsed === "number" && typeof secondValueParsed === "number") {
                        result = (firstValueParsed / secondValueParsed).toString();
                    }
                    break;
                case "*":
                    if (typeof firstValueParsed === "number" && typeof secondValueParsed === "number") {
                        result = (firstValueParsed * secondValueParsed).toString();
                    }
                    break;
                default:
                    break;
            }

            return result;
        }

        private updateCalculatedFields(): void {
            const calculatedFields = this._placeholder.getElementsByClassName("calculated-field");

            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < calculatedFields.length; i++) {
                const id: string = calculatedFields[i].getAttribute("data-responseid");
                let value: string = null;

                const input = calculatedFields[i] as HTMLInputElement;
                const formula = input.dataset.additionalparameters;

                const regex = /(?<operator>^|[-+/*])\s*(?<number>\d+(?:\.\d+)*)/g;
                const matches = Array.from(formula.matchAll(regex));

                const field1Value = this.getResponseValue(matches[0].groups.number);
                const field2Value = this.getResponseValue(matches[1].groups.number);

                // Check if the two first fields have a value
                if (!this.isNullOrWhiteSpace(field1Value) && !this.isNullOrWhiteSpace(field2Value)) {
                    value = this.calculate(field1Value, matches[1].groups.operator, field2Value);

                    for (const match of matches.slice(2)) {
                        const fieldValue = this.getResponseValue(match.groups.number);

                        if (!this.isNullOrWhiteSpace(value) && !this.isNullOrWhiteSpace(fieldValue)) {
                            value = this.calculate(value, match.groups.operator, fieldValue);
                        }
                    }
                }

                if (this.isISODate(value)) {
                    // const date = new Date(value)
                    // input.value = `${date.getUTCMonth()}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
                    input.value = `${value.substring(5, 7)}/${value.substring(8, 10)}/${value.substring(0, 4)}`;
                } else {
                    input.value = value;
                }

                // Send update queries to checklist service
                this._checklistService.updateChecklistResponse(id, value).catch(e => console.error("error updating calculated fields", e));
            }
        }
    }
}
