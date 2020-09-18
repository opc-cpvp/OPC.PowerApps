import { injectable, inject } from "inversify";
import 'whatwg-fetch';
import 'core-js/features/url-search-params';
import * as Msal from 'msal';
import { i18n } from "i18next";
import { IPowerDialog, IUserService, IEnvironmentVariableService, IComplaintService, IAuthService, ISharePointService, WindowContext, ComplaintWithRelationships, TemplateEnvironmentVariable } from "../../interfaces";
import { setTimeout } from "timers";

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
        private _allegations: any;
        private _dialogSelect: HTMLSelectElement;
        private _globalContext: Xrm.context;
        private _windowContext: WindowContext;
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
            @inject(nameof<Window>()) windowContext: WindowContext,
            @inject(nameof<IUserService>()) userService: IUserService,
            @inject(nameof<IEnvironmentVariableService>()) environmentVariableService: IEnvironmentVariableService,
            @inject(nameof<IComplaintService>()) complaintService: IComplaintService,
            @inject(nameof<IAuthService>()) authService: IAuthService,
            @inject(nameof<ISharePointService>()) sharePointService: ISharePointService) {
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

        public async init() {
            try {
                let loginHint: string;
                this._windowContext.parent.document.getElementById("defaultDialogChromeTitle").innerHTML = this._i18n.t("template:dialog.title");
                this._placeholder = <HTMLDivElement>this._documentContext.getElementById("dialog");
                this._complaintId = this.getDataParameter();

                const promiseArray: [Promise<ComplaintWithRelationships>, Promise<string>, Promise<string>, Promise<any>] = [
                    this._complaintService.getComplaintWithRelationships(this._complaintId),
                    this._userService.getUserEmail(this._globalContext.userSettings.userId),
                    this._environmentVariableService.getEnvironmentVariable("opc_templatesapplication"),
                    this._complaintService.getAllegationsWithChecklistResponses(this._complaintId)

                ];

                await Promise.all(promiseArray)
                    .then(results => {
                        this._complaint = results[0];
                        loginHint = results[1];
                        this._templatesEnvironmentVariable = JSON.parse(results[2]);
                        this._allegations = results[3];
                    });

                this._sharePointTemplatesSubFolderLocation = this._complaint.opc_legislation.opc_acronym;
                this._redirectUri = this._globalContext.getClientUrl();

                await this.getAccessToken(loginHint)
                    .then(async response => {
                        this._accessToken = response;
                        await this.initializeHTMLSelectElement();
                    });

                this.render();
                this.addEventListeners();

            } catch (error) {
                console.log(`There was an error while loading the dialog. \nError: ${error}`);
                this.closePage();
            }
        }

        private addEventListeners() {
            const cancelButton = this._documentContext.getElementById("template-cancel");

            cancelButton.addEventListener("click", () => this.closePage());
            this._documentContext.addEventListener("submit", x => {
                x.preventDefault();
                this.generateDocument_onClick();
            });
        }

        private render() {
            const modalHtml =
                `<div class="modal show" id="dialog" role="dialog" aria-labelledby="dialogLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <form>
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="select-template" class="col-form-label">${this._i18n.t("template:dialog.select_template")}</label>
                                        ${this._dialogSelect.outerHTML}
                                    </div>
                                    <div class="form-group">
                                        <label for="file-name" class="col-form-label">${this._i18n.t("template:dialog.file_name")}</label>
                                        <input type="text" class="form-control" id="file-name" required='required'>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" id="template-cancel" class="btn btn-secondary">${this._i18n.t("template:dialog.button_cancel")}</button>
                                    <button type="submit" id="template-comfirm" class="btn btn-primary">${this._i18n.t("template:dialog.button_confirm")}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>`;

            this._placeholder.outerHTML = modalHtml;
        }

        private async generateDocument_onClick() {
            const selectElement: HTMLSelectElement = <HTMLSelectElement>this._documentContext.getElementById("select-template");
            const inputElement: HTMLInputElement = <HTMLInputElement>this._documentContext.getElementById("file-name");
            const xmlSerializer: XMLSerializer = new this._windowContext.XMLSerializer();
            const serializedXML = xmlSerializer.serializeToString(this.generateComplaintXml());

            this._complaintService.getSharePointDocumentLocation(this._complaintId)
                .then(documentLocation => {
                    this._caseDocumentsLocationRelativeUrl = `/sites/PowerAppsSandbox/opc_complaint/${documentLocation.relativeurl}`;
                    this._sharePointService.generateDocumentFromTemplate(this._accessToken, this._caseDocumentsLocationRelativeUrl, selectElement.value, serializedXML, inputElement.value, this._templatesEnvironmentVariable.sharePointSiteUrl)
                        .then(
                            result => {
                                if (result.ok) {
                                    this.closePage();
                                }
                            },
                            error => {
                                console.log(`There was an error while calling action GenerateDocumentFromTemplate: ${error.message} \n${error.raw}`);
                                this.closePage();
                            }
                        );
                });
        }

        private closePage(): void {
            const button = <HTMLButtonElement>parent.document.getElementById("defaultDialogChromeCloseIconButton");
            button.click();
        }

        private getDataParameter(): string {
            const queryString = this._windowContext.location.search;
            const urlParams = new URLSearchParams(queryString);

            return urlParams.get('data');
        }

        private async initializeHTMLSelectElement() {
            let templatesArray = await this._sharePointService
                .getTemplates(this._templatesEnvironmentVariable.sharePointSiteUrl, `${this._templatesEnvironmentVariable.templatesFolderPath}${this._sharePointTemplatesSubFolderLocation}`, this._accessToken);

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

            console.log(xmlDocument);

            return xmlDocument;
        }

        private appendValidHTMLElements(xmlDocument: Document, parentElement: HTMLElement, propertyCollection: any) {
            for (const propertyName in propertyCollection) {
                let property: any = propertyCollection[propertyName];

                if (property &&
                    propertyName !== "@odata.context" &&
                    propertyName !== "@odata.etag") {

                    // This will need to be changed. We have to go through all of the values in the array, not just the first.
                    if (Array.isArray(property))
                        property = property[0];

                    const propertyElement: HTMLElement = xmlDocument.createElement(propertyName);

                    if (typeof property === 'object') {
                        if (Object.prototype.toString.call(property) === "[object Date]")
                            propertyElement.textContent = property.toLocaleString();
                        else
                            this.appendValidHTMLElements(xmlDocument, propertyElement, property);
                    }
                    else {
                        propertyElement.textContent = property;
                    }

                    parentElement.appendChild(propertyElement);
                }
            }
        }

        private appendAllegations(xmlDocument: Document, parentElement: HTMLElement, propertyCollection: any, prefix?: string) {
            for (let propertyName in propertyCollection) {
                let property: any = propertyCollection[propertyName];

                if (property &&
                    propertyName !== "@odata.context" &&
                    propertyName !== "@odata.etag") {

                    if (!prefix)
                        propertyName = "allegation";

                    if (!isNaN(Number(propertyName)))
                        propertyName = `${prefix}_${propertyName}`;

                    const propertyElement: HTMLElement = xmlDocument.createElement(propertyName);

                    if (propertyName === 'opc_allegation_checklistresponses_allegation') {
                        let checklistResponses: opc_ChecklistResponse_Result[] = property;

                        checklistResponses.forEach(x => {
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
                            this.appendAllegations(xmlDocument, propertyElement, property, "question"); //I guess that's a little bit of a cheat?
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

            return this._authService.getAccessToken(msalConfig, tokenRequest)
        }
    }
}