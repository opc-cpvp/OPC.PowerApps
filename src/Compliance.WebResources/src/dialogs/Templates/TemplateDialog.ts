import { injectable, inject } from "inversify";
import "whatwg-fetch";
import "core-js/features/url-search-params";
import * as Msal from "msal";
import { i18n } from "i18next";
import {
    IPowerDialog,
    IUserService,
    IEnvironmentVariableService,
    IComplaintService,
    IAuthService,
    ISharePointService,
    ComplaintWithRelationships,
    TemplateEnvironmentVariable
} from "../../interfaces";
import { DOMWindow } from "jsdom";

// TODO: Add a notification for the user when there is an error?
// TODO: Change the display of the template choices.
// We could start with the possibility to search with autocomplete (select2).
// We could also have categories in the dropdown or have some sort of tree view of the available templates.

export namespace Dialogs {
    @injectable()
    export class TemplateDialog implements IPowerDialog {
        private readonly _i18n: i18n;
        private readonly _userService: IUserService;
        private readonly _environmentVariableService: IEnvironmentVariableService;
        private readonly _complaintService: IComplaintService;
        private readonly _authService: IAuthService;
        private readonly _sharePointService: ISharePointService;
        private _placeholder: HTMLDivElement;
        private _complaint: ComplaintWithRelationships;
        private _allegations: AllegationWithChecklistResponse[];
        private _dialogSelect: HTMLSelectElement;
        private _globalContext: Xrm.context;
        private _windowContext: DOMWindow;
        private _documentContext: Document;
        private _templatesEnvironmentVariable: TemplateEnvironmentVariable;
        private _complaintId: string;
        private _accessToken: string;
        private _redirectUri: string;
        private _sharePointTemplatesSubFolderLocation: string;
        private _caseDocumentsLocationRelativeUrl: string;

        constructor(
            @inject(nameof<i18n>()) i18n: i18n,
            @inject(nameof<Xrm.context>()) xrmContext: Xrm.context,
            @inject(nameof<Window>()) windowContext: DOMWindow,
            @inject(nameof<IUserService>()) userService: IUserService,
            @inject(nameof<IEnvironmentVariableService>()) environmentVariableService: IEnvironmentVariableService,
            @inject(nameof<IComplaintService>()) complaintService: IComplaintService,
            @inject(nameof<IAuthService>()) authService: IAuthService,
            @inject(nameof<ISharePointService>()) sharePointService: ISharePointService
        ) {
            this._i18n = i18n;
            this._globalContext = xrmContext;
            this._userService = userService;
            this._environmentVariableService = environmentVariableService;
            this._complaintService = complaintService;
            this._authService = authService;
            this._sharePointService = sharePointService;
            this._windowContext = windowContext;
            this._documentContext = windowContext.document;
        }

        public async init(): Promise<void> {
            try {
                let loginHint: string;
                this._windowContext.parent.document.getElementById("defaultDialogChromeTitle").innerHTML = this._i18n.t(
                    "template:dialog.title"
                );
                this._placeholder = this._documentContext.getElementById("dialog") as HTMLDivElement;
                this._complaintId = this.getDataParameter();

                const promiseArray: [Promise<ComplaintWithRelationships>, Promise<string>, Promise<string>, Promise<any>] = [
                    this._complaintService.getComplaintWithRelationships(this._complaintId),
                    this._userService.getUserEmail(this._globalContext.userSettings.userId),
                    this._environmentVariableService.getEnvironmentVariable("opc_templatesapplication"),
                    this._complaintService.getAllegationsWithChecklistResponses(this._complaintId)
                ];

                await Promise.all(promiseArray).then(results => {
                        this._complaint = results[0];
                        loginHint = results[1];
                        this._templatesEnvironmentVariable = JSON.parse(results[2]);
                        this._allegations = results[3];
                    });

                this._sharePointTemplatesSubFolderLocation = this._complaint.opc_legislation.opc_acronym;
                this._redirectUri = this._globalContext.getClientUrl();

                await this.getAccessToken(loginHint).then(async response => {
                    this._accessToken = response;
                    await this.initializeHTMLSelectElement();
                });

                this.render();
                this.addEventListeners();
            } catch (error) {
                console.log("There was an error while loading the dialog.", error);
                this.closePage();
            }
        }

        private addEventListeners() {
            const cancelButton = this._documentContext.getElementById("template-cancel");

            cancelButton.addEventListener("click", () => this.closePage());
            this._documentContext.addEventListener("submit", x => {
                x.preventDefault();
                this.generateDocument_onClick().catch(error => {
                    console.error(error);
                });
            });
        }

        private render() {
            const modalHtml = /* HTML */ `<div
                class="modal show"
                id="dialog"
                role="dialog"
                aria-labelledby="dialogLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <form>
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="select-template" class="col-form-label"
                                        >${this._i18n.t("template:dialog.select_template")}</label
                                    >
                                    ${this._dialogSelect.outerHTML}
                                </div>
                                <div class="form-group">
                                    <label for="file-name" class="col-form-label">${this._i18n.t("template:dialog.file_name")}</label>
                                    <input type="text" class="form-control" id="file-name" required="required" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" id="template-cancel" class="btn btn-secondary">
                                    ${this._i18n.t("template:dialog.button_cancel")}
                                </button>
                                <button type="submit" id="template-comfirm" class="btn btn-primary">
                                    ${this._i18n.t("template:dialog.button_confirm")}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>`;

            this._placeholder.outerHTML = modalHtml;
        }

        private async generateDocument_onClick() {
            const selectElement: HTMLSelectElement = this._documentContext.getElementById("select-template") as HTMLSelectElement;
            const inputElement: HTMLInputElement = this._documentContext.getElementById("file-name") as HTMLInputElement;
            const xmlSerializer: XMLSerializer = new this._windowContext.XMLSerializer();
            const serializedXML = xmlSerializer.serializeToString(this.generateComplaintXml());

            await this._complaintService.getSharePointDocumentLocation(this._complaintId).then(documentLocation => {
                this._caseDocumentsLocationRelativeUrl = `/sites/PowerAppsSandbox/opc_complaint/${documentLocation.relativeurl}`;
                this._sharePointService
                    .generateDocumentFromTemplate(
                        this._accessToken,
                        this._caseDocumentsLocationRelativeUrl,
                        selectElement.value,
                        serializedXML,
                        inputElement.value,
                        this._templatesEnvironmentVariable.sharePointSiteUrl
                    )
                    .then(
                        result => {
                            if (result.ok) {
                                this.closePage();
                            }
                        },
                        error => {
                            const message = "There was an error while calling action GenerateDocumentFromTemplate";
                            if (error instanceof Error) {
                                console.log(`${message}: ${error.message} \n${error.stack}`);
                            } else {
                                console.log(message, error);
                            }

                            this.closePage();
                        }
                    );
            });
        }

        private closePage(): void {
            const button = parent.document.getElementById("defaultDialogChromeCloseIconButton") as HTMLButtonElement;
            button.click();
        }

        private getDataParameter(): string {
            const queryString = this._windowContext.location.search;
            const urlParams = new URLSearchParams(queryString);

            return urlParams.get("data");
        }

        private async initializeHTMLSelectElement() {
            const templatesArray = await this._sharePointService.getTemplates(
                this._templatesEnvironmentVariable.sharePointSiteUrl,
                `${this._templatesEnvironmentVariable.templatesFolderPath}${this._sharePointTemplatesSubFolderLocation}`,
                this._accessToken
            );

            this._dialogSelect = this._documentContext.createElement("select");
            this._dialogSelect.id = "select-template";
            this._dialogSelect.className = "custom-select";

            templatesArray.forEach(result => {
                this._dialogSelect.add(new Option(result.Name, result.ServerRelativeUrl));
            });
        }

        // Creating an xml that is compatible with the word template engine.
        private generateComplaintXml(): Document {
            const xmlDocument = this._documentContext.implementation.createDocument("", "", null);
            const opcElement = xmlDocument.createElement("cpvp_opc");
            const complaintElement = xmlDocument.createElement("opc_complaint");
            const allegationsElement = xmlDocument.createElement("opc_allegations");

            opcElement.setAttribute("xmlns", "CPVP-OPC");
            this.appendValidHTMLElements(xmlDocument, complaintElement, this._complaint);
            this.appendAllegations(xmlDocument, allegationsElement, this._allegations);

            complaintElement.appendChild(allegationsElement);
            opcElement.appendChild(complaintElement);
            xmlDocument.appendChild(opcElement);

            return xmlDocument;
        }

        private appendValidHTMLElements(xmlDocument: Document, parentElement: HTMLElement, propertyCollection: any) {
            for (const propertyName in propertyCollection) {
                if (["@odata.context", "@odata.etag"].some(value => value === propertyName)) {
                    continue;
                }

                let property: any = propertyCollection[propertyName];

                if (property) {
                    if (Array.isArray(property)) {
                        property = property[0];
                    }

                    const propertyElement: HTMLElement = xmlDocument.createElement(propertyName);

                    if (typeof property === "object") {
                        if (Object.prototype.toString.call(property) === "[object Date]") {
                            propertyElement.textContent = property.toLocaleString();
                        } else {
                            this.appendValidHTMLElements(xmlDocument, propertyElement, property);
                        }
                    } else {
                        propertyElement.textContent = property;
                    }

                    parentElement.appendChild(propertyElement);
                }
            }
        }

        private appendAllegations(xmlDocument: Document, parentElement: HTMLElement, propertyCollection: any) {
            for (let propertyName in propertyCollection) {
                let property: any = propertyCollection[propertyName];

                if (property &&
                    propertyName !== "@odata.context" &&
                    propertyName !== "@odata.etag") {

                    if (property.opc_allegationtypeid_formatted !== undefined) {
                        if (property.opc_allegationtypeid_formatted.indexOf("Access") !== -1)
                            propertyName = "allegation_access";
                        else if (property.opc_allegationtypeid_formatted.indexOf("Time Limit") !== -1)
                            propertyName = "allegation_timelimit";
                        else
                            propertyName = "allegation";
                    }

                    if (!isNaN(Number(propertyName)))
                        propertyName = `question_${propertyName}`;

                    const propertyElement: HTMLElement = xmlDocument.createElement(propertyName);

                    if (propertyName === 'opc_allegation_checklistresponses_allegation') {
                        let checklistResponses: opc_ChecklistResponse_Result[] = property;

                        checklistResponses.forEach(x => {
                            // TODO: We need to change this because if the response is of type text but the value is 1 or 0 it won't display the right value.
                            switch (x.opc_response) {
                                case "0": {
                                    x.opc_response = "No";
                                    break;
                                }
                                case "1": {
                                    x.opc_response = "Yes";
                                    break;
                                }
                                case null: {
                                    x.opc_response = "N/A";
                                    break;
                                }
                                default: {
                                    break;
                                }
                            }
                        });

                        checklistResponses.sort((a, b) => {
                            if (a.opc_name > b.opc_name)
                                return 1
                            else
                                return -1
                        });

                        property = checklistResponses
                    }

                    if (typeof property === 'object') {
                        if (Object.prototype.toString.call(property) === "[object Date]")
                            propertyElement.textContent = property.toLocaleString();
                        else
                            this.appendAllegations(xmlDocument, propertyElement, property);
                    }
                    else {
                        propertyElement.textContent = property;
                    }

                    parentElement.appendChild(propertyElement);
                }
            }
        }

        private async getAccessToken(loginHint: string) {
            const msalConfig: Msal.Configuration = {
                auth: {
                    clientId: this._templatesEnvironmentVariable.applicationId,
                    authority: `${this._templatesEnvironmentVariable.authorityBaseUrl}${this._templatesEnvironmentVariable.tenantId}`,
                    redirectUri: this._redirectUri
                }
            };
            const tokenRequest: Msal.AuthenticationParameters = {
                scopes: this._templatesEnvironmentVariable.tokenScope,
                loginHint: loginHint,
                authority: `${this._templatesEnvironmentVariable.authorityBaseUrl}${this._templatesEnvironmentVariable.tenantId}`
            };

            return this._authService.getAccessToken(msalConfig, tokenRequest);
        }
    }
}
