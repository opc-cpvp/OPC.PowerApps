import 'whatwg-fetch';
import 'core-js/features/url-search-params';
import * as Msal from 'msal';
import { TemplateDialogPage } from './TemplateDialogPage';

// TODO: Refactor for tests
// TODO: Better handle errors/exceptions
// TODO: Change the display of the template choices. Either have categories in the dropdown or have some sort of tree view of the available templates.
// TODO: Add something that will show that the app is loading.

export class TemplateDialog {
    private readonly _placeholder: HTMLDivElement;
    private _complaint: (
        opc_complaint &
        { opc_legislation: opc_legislation_Result } &
        { opc_opcpriorityid: opc_opcpriority_Result } &
        { opc_sectorid: opc_sector_Result } &
        { opc_intakeofficer: SystemUser_Result } &
        { owninguser: SystemUser_Result } &
        { opc_complainant: Contact_Result } &
        { opc_complainantrep: Contact_Result } &
        { opc_complainantlegalrepresentative: Contact_Result } &
        { opc_complainantlegalrepresentativefirm: Account_Result } &
        { opc_accountid: Account_Result } &
        { opc_respondentlegalrepresentativefirm: Account_Result } &
        { opc_respondentrepresentative: Contact_Result } &
        { opc_respondentlegalrepresentative: Contact_Result } &
        { opc_complaint_SharePointDocumentLocations: SharePointDocumentLocation_Result[]}
    );
    private _dialogSelect: HTMLSelectElement;
    private _globalContext: Xrm.context;
    private _complaintId: string;
    private _accessToken: string;
    private _loginHint: string;
    private _redirectUri: string;
    private _sharePointTemplatesSubFolderLocation: string;
    private _caseDocumentsLocationRelativeUrl: string;
    private _templatesEnvironmentVariable: { applicationId: string; tenantId: string; sharePointSiteUrl: string; templatesFolderPath: string; tokenScope: string[]; authorityBaseUrl: string;};

    constructor(placeholder: HTMLDivElement) {
        this._placeholder = placeholder;
    }

    // TODO: Move this to ComplaintMainForm.ts after changes from duplicate-contact gets merged into master.
    public static ribbonButton_OnClick(formContext: Form.opc_complaint.Main.Information): void {
        const complaintId = formContext.data.entity.getId();

        formContext.ui.tabs.get("tab_documents").setFocus();

        setTimeout(() => {
            Xrm.Navigation.navigateTo({ pageType: "webresource", webresourceName: "opc_compliance/template_dialog.html", data: complaintId }, { target: 2, position: 1, width: { value: 420, unit: "px" }, height: { value: 355, unit: "px" } })
                .then(() => {
                    formContext.getControl("SubgridControl1570557025307").refresh();
                });
        }, 200);
    }

    // TODO: Refactor to make this faster.
    // It should probably call as much async methods as possible and before getting the token and rendering the page, it should wait for all of them to finish.
    public async initializeDialog() {
        this._globalContext = Xrm.Utility.getGlobalContext();
        this._complaintId = this.getDataParameter();
        this._complaint = await this.getComplaint();
        this._loginHint = await this.getUserEmail();
        this._templatesEnvironmentVariable = JSON.parse(await this.getEnvironmentVariable("opc_templatesapplication"));
        this._sharePointTemplatesSubFolderLocation = this._complaint.opc_legislation.opc_acronym;
        this._redirectUri = this._globalContext.getClientUrl();

        await this.getAccessToken()
            .then(async response => {
                this._accessToken = response.accessToken;
                await this.getTemplates();
            });

        this.render();
    }

    private render() {
        const modalHtml =
            `<div class="modal show" id="templateDialogModal" role="dialog" aria-labelledby="templateDialogModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form>
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="select-template" class="col-form-label">Select Template:</label>
                                    ${this._dialogSelect.outerHTML}
                                </div>
                                <div class="form-group">
                                    <label for="file-name" class="col-form-label">File name:</label>
                                    <input type="text" class="form-control" id="file-name" required='required'>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" id="template-cancel" class="btn btn-secondary">Cancel</button>
                                <button type="submit" id="template-comfirm" class="btn btn-primary">Generate Document</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>`;
        this._placeholder.outerHTML = modalHtml;
    }

    public async generateTemplate_onClick() {
        const selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select-template");
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("file-name");
        const xmlSerializer: XMLSerializer = new XMLSerializer();
        const serializedXML = xmlSerializer.serializeToString(this.generateComplaintXml());

        this._caseDocumentsLocationRelativeUrl = `/sites/PowerAppsSandbox/opc_complaint/${this._complaint.opc_complaint_SharePointDocumentLocations[0].relativeurl}`;
        this.triggerActionToGenerateDocument(serializedXML, this._caseDocumentsLocationRelativeUrl, selectElement.value, inputElement.value);
    }

    private getDataParameter(): string {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        return urlParams.get('data');
    }

    private async getComplaint() {
        return XrmQuery.retrieve(x => x.opc_complaints, this._complaintId)
            .expand(x => x.opc_legislation, x => [x.opc_acronym])
            .expand(x => x.opc_opcpriorityid)
            .expand(x => x.opc_sectorid)
            .expand(x => x.opc_accountid, x => [x.name, x.telephone1, x.fax, x.websiteurl, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_intakeofficer, x => [x.firstname, x.lastname, x.fullname, x.title, x.domainname, x.internalemailaddress, x.address1_telephone1, x.mobilephone])
            .expand(x => x.owninguser, x => [x.firstname, x.lastname, x.fullname, x.title, x.domainname, x.internalemailaddress, x.address1_telephone1, x.mobilephone])
            .expand(x => x.opc_complainant, x => [x.firstname, x.lastname, x.fullname, x.jobtitle, x.emailaddress1, x.telephone1, x.telephone2, x.fax, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_complainantrep, x => [x.firstname, x.lastname, x.fullname, x.jobtitle, x.emailaddress1, x.telephone1, x.telephone2, x.fax, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_complainantlegalrepresentative, x => [x.firstname, x.lastname, x.fullname, x.jobtitle, x.emailaddress1, x.telephone1, x.telephone2, x.fax, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_complainantlegalrepresentativefirm, x => [x.name, x.telephone1, x.fax, x.websiteurl, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_respondentrepresentative, x => [x.firstname, x.lastname, x.fullname, x.jobtitle, x.emailaddress1, x.telephone1, x.telephone2, x.fax, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_respondentlegalrepresentative, x => [x.firstname, x.lastname, x.fullname, x.jobtitle, x.emailaddress1, x.telephone1, x.telephone2, x.fax, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_respondentlegalrepresentativefirm, x => [x.name, x.telephone1, x.fax, x.websiteurl, x.address1_line1, x.address1_line2, x.address1_line3, x.address1_city, x.address1_stateorprovince, x.address1_postalcode, x.address1_country])
            .expand(x => x.opc_complaint_SharePointDocumentLocations, x => [x.relativeurl])
            .includeFormattedValues()
            .promise();
    }

    private async getUserEmail() {
        return (await XrmQuery.retrieve(x => x.systemusers, this._globalContext.userSettings.userId)
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
            `${this._templatesEnvironmentVariable.sharePointSiteUrl}_api/web/GetFolderByServerRelativeUrl('${this._templatesEnvironmentVariable.templatesFolderPath}${this._sharePointTemplatesSubFolderLocation}')/Files`
            , {
                method: 'GET',
                headers: new Headers({
                    "Accept": "application/json; odata=verbose",
                    "Authorization": `Bearer ${this._accessToken}`
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

    private triggerActionToGenerateDocument(xmlString: string, caseFolderPath: string, templateRelativeUrl: string, documentName: string) {
        const request = {
            AccessToken: this._accessToken,
            CaseFolderPath: caseFolderPath,
            TemplatePath: templateRelativeUrl,
            XMLData: xmlString,
            DocumentName: documentName,
            SharePointSiteUrl: this._templatesEnvironmentVariable.sharePointSiteUrl,
            getMetadata: () => {
                return {
                    operationType: 0,
                    operationName: "opc_generatedocumentfromtemplate",
                    parameterTypes: {
                        AccessToken: {
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
                        },
                        DocumentName: {
                            typeName: "Edm.String",
                            structuralProperty: 1
                        },
                        SharePointSiteUrl: {
                            typeName: "Edm.String",
                            structuralProperty: 1
                        }
                    },
                };
            }
        }

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
    private async getAccessToken() {
        const msalConfig: Msal.Configuration = {
            auth: {
                clientId: this._templatesEnvironmentVariable.applicationId,
                authority: `${this._templatesEnvironmentVariable.authorityBaseUrl}${this._templatesEnvironmentVariable.tenantId}`,
                redirectUri: this._redirectUri
            }
        };

        const msalInstance = new Msal.UserAgentApplication(msalConfig);
        const tokenRequest: Msal.AuthenticationParameters = {
            scopes: this._templatesEnvironmentVariable.tokenScope,
            loginHint: this._loginHint,
            authority: `${this._templatesEnvironmentVariable.authorityBaseUrl}${this._templatesEnvironmentVariable.tenantId}`
        };

        return msalInstance.acquireTokenSilent(tokenRequest)
            .catch(error => {
                console.log(error);
                return msalInstance.acquireTokenPopup(tokenRequest);
            });
    }
}