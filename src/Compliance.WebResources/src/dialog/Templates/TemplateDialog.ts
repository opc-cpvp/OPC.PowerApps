import 'whatwg-fetch';
import 'core-js/features/url-search-params';
import * as Msal from 'msal';


// TODO: Better handle errors/exceptions

export class TemplateDialogPage {
    private static _templateDialog: TemplateDialog;

    public static page_OnLoad(): void {
        const placeholder = <HTMLDivElement>document.getElementById("dialog");
        this._templateDialog = new TemplateDialog(placeholder);

        this._templateDialog.initializeDialog().then(() => {
            const confirmButton = document.getElementById("template-comfirm");
            const cancelButton = document.getElementById("template-cancel");

            confirmButton.addEventListener("click", () => this._templateDialog.generateTemplate_onClick());
            cancelButton.addEventListener("click", () => this.closePage());
        });
    }

    public static closePage(): void {
        const button = <HTMLButtonElement>parent.document.getElementById("defaultDialogChromeCloseIconButton");
        button.click();
    }
}

export class TemplateDialog {
    private readonly _placeholder: HTMLDivElement;
    private _complaint: (
        opc_complaint &
        { opc_legislation: opc_legislation_Result } &
        { opc_complainant: Contact_Result } &
        { opc_complaint_SharePointDocumentLocations: SharePointDocumentLocation_Result[]}
    );
    private _dialogSelect: HTMLSelectElement;
    private _complaintId: string;
    private _token: string;
    private _loginHint: string;
    private readonly _authorityBaseUrl: string = "https://login.microsoftonline.com/";
    private readonly _redirectUri: string = "https://opc-compliance-templates.crm3.dynamics.com";
    private readonly _tokenScope: string[] = ["https://096gc.sharepoint.com/Sites.ReadWrite.All"];
    private readonly _sharePointSiteUrl: string = "https://096gc.sharepoint.com/sites/PowerAppsSandbox/";
    private readonly _sharePointTemplatesFolderLocation: string = "/sites/PowerAppsSandbox/Shared Documents/Templates/";
    private _sharePointTemplatesSubFolderLocation: string;
    private _caseDocumentsLocationRelativeUrl: string;
    private _templatesEnvironmentVariable: { applicationId: string; tenantId: string; };

    constructor(placeholder: HTMLDivElement) {
        this._placeholder = placeholder;
    }

    public static ribbonButton_OnClick(PrimaryControl: Form.opc_complaint.Main.Information): void {
        const complaintId = PrimaryControl.data.entity.getId();
        PrimaryControl.ui.tabs.get("tab_documents").setFocus();

        Xrm.Navigation.navigateTo({ pageType: "webresource", webresourceName: "opc_compliance/template_dialog.html", data: complaintId }, { target: 2, position: 1, width: { value: 420, unit: "px" }, height: { value: 260, unit: "px" } });
    }

    public async initializeDialog() {
        this._complaintId = this.getDataParameter();
        this._complaint = await this.getComplaint();
        this._loginHint = await this.getUserEmail();
        this._templatesEnvironmentVariable = JSON.parse(await this.getEnvironmentVariable("opc_templatesapplicationids"));
        this._sharePointTemplatesSubFolderLocation = this._complaint.opc_legislation.opc_acronym;

        console.log(this._complaint);

        await this.getToken()
            .then(async response => {
                this._token = response.accessToken;
                await this.getTemplates();
            });

        this.render();
    }

    private render() {
        const modalHtml =
            `<div class="modal show" id="templateDialogModal" role="dialog" aria-labelledby="templateDialogModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                              <div class="modal-body">
                                  <div class="form-group">
                                    <label for="select-template" class="col-form-label">Select Template:</label>
                                    ${this._dialogSelect.outerHTML}
                                  </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" id="template-cancel" class="btn btn-secondary">Cancel</button>
                                <button type="button" id="template-comfirm" class="btn btn-primary">Generate Document</button>
                              </div>
                        </div>
                      </div>
                    </div>`;
        this._placeholder.outerHTML = modalHtml;
    }

    public async generateTemplate_onClick() {
        const selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select-template");
        const xmlSerializer: XMLSerializer = new XMLSerializer();
        const serializedXML = xmlSerializer.serializeToString(this.generateComplaintXml());

        this._caseDocumentsLocationRelativeUrl = `/sites/PowerAppsSandbox/opc_complaint/${this._complaint.opc_complaint_SharePointDocumentLocations[0].relativeurl}`;
        this.triggerActionToGenerateDocument(serializedXML, this._caseDocumentsLocationRelativeUrl, selectElement.value);
    }

    private getDataParameter(): string {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        return urlParams.get('data');
    }

    private async getComplaint() {
        return XrmQuery.retrieve(x => x.opc_complaints, this._complaintId)
            .expand(x => x.opc_complainant)
            .expand(x => x.opc_legislation, x => [x.opc_acronym])
            .expand(x => x.opc_complaint_SharePointDocumentLocations, x => [x.relativeurl])
            .promise();
    }

    private async getUserEmail() {
        return (await XrmQuery.retrieve(x => x.systemusers, Xrm.Utility.getGlobalContext().userSettings.userId)
            .promise()).domainname;
    }

    private async getEnvironmentVariable(schemaName: string) {
        return (await XrmQuery.retrieveMultiple(x => x.environmentvariabledefinitions)
            .expand(x => x.environmentvariabledefinition_environmentvariablevalue, x => [x.value])
            .filter(x => Filter.equals(x.schemaname, schemaName))
            .promiseFirst()).environmentvariabledefinition_environmentvariablevalue[0].value;
    }

    private async getTemplates() {
        const request = new Request(
            `${this._sharePointSiteUrl}_api/web/GetFolderByServerRelativeUrl('${this._sharePointTemplatesFolderLocation}${this._sharePointTemplatesSubFolderLocation}')/Files`
            , {
                method: 'GET',
                headers: new Headers({
                    "Accept": "application/json; odata=verbose",
                    "Authorization": `Bearer ${this._token}`
                })
            });

        return window.fetch(request)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Network response was not ok.');
                }
            }).then((data) => {
                const results: any[] = data.d.results;
                this._dialogSelect = document.createElement("select");
                this._dialogSelect.id = "select-template";
                this._dialogSelect.className = "custom-select";

                results.forEach(result => {
                    this._dialogSelect.add(new Option(result.Name, result.ServerRelativeUrl));
                });

            }).catch((error) => {
                console.log(error.message);
            });
    }

    private generateComplaintXml(): Document {
        const xmlDocument = document.implementation.createDocument("", "", null);
        const opcElement = xmlDocument.createElement("cpvp_opc");
        const complaintElement = xmlDocument.createElement("opc_complaint");

        opcElement.setAttribute("xmlns", "CPVP-OPC");
        this.appendValidHTMLElements(xmlDocument, complaintElement, this._complaint);

        opcElement.appendChild(complaintElement);
        xmlDocument.appendChild(opcElement);

        return xmlDocument;
    }

    private appendValidHTMLElements(xmlDocument: Document, parentElement: HTMLElement, propertyCollection: any) {
        for (const propertyName in propertyCollection) {
            let property: any = propertyCollection[propertyName];

            if (property && // Check for falsy values
                propertyName !== "@odata.context" &&
                propertyName !== "@odata.etag") {

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

    private triggerActionToGenerateDocument(xmlString: string, caseFolderPath: string, templateRelativeUrl: string) {
        const request = {
            Token: this._token,
            CaseFolderPath: caseFolderPath,
            TemplatePath: templateRelativeUrl,
            XMLData: xmlString,
            getMetadata: () => {
                return {
                    operationType: 0,
                    operationName: "opc_GenerateDocumentFromTemplate",
                    parameterTypes: {
                        Token: {
                            typeName: "Edm.String",
                            structuralProperty: 1
                        },
                        CaseFolderPath: {
                            typeName: "Edm.String",
                            structuralProperty: 1
                        },
                        TemplatePath: {
                            typeName: "Edm.String",
                            structuralProperty: 1
                        },
                        XMLData: {
                            typeName: "Edm.String",
                            structuralProperty: 1
                        }
                    },
                };
            }
        }
        console.log(request);
        Xrm.WebApi.online.execute(request).then(
            result => {
                if (result.ok) {
                    console.log(`Status: ${result.status} ${result.statusText}`);
                    TemplateDialogPage.closePage();
                }
            },
            error => {
                console.log(error.message);
            }
        );
    }
    private async getToken() {
        const msalConfig: Msal.Configuration = {
            auth: {
                clientId: this._templatesEnvironmentVariable.applicationId,
                authority: `${this._authorityBaseUrl}${this._templatesEnvironmentVariable.tenantId}`,
                redirectUri: this._redirectUri
            }
        };

        const msalInstance = new Msal.UserAgentApplication(msalConfig);

        const tokenRequest: Msal.AuthenticationParameters = {
            scopes: this._tokenScope,
            loginHint: this._loginHint,
            authority: `${this._authorityBaseUrl}${this._templatesEnvironmentVariable.tenantId}`
        };

        return msalInstance.acquireTokenSilent(tokenRequest);
    }
}