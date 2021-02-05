﻿import { XrmContextMock } from "../../../test/XrmContextMock";
import {
    IComplaintService,
    ITemplateService,
    IUserService,
    IEnvironmentVariableService,
    ISharePointService,
    IAuthService
} from "../../interfaces";
import { Dialogs } from "../../dialogs/Templates/TemplateDialog";
import { ComplaintService } from "../../services/ComplaintService";
import { TemplateService } from "../../services/TemplateService";
import { UserService } from "../../services/UserService";
import { EnvironmentVariableService } from "../../services/EnvironmentVariableService";
import { AuthService } from "../../services/AuthService";
import { SharePointService } from "../../services/SharePointService";
import * as resources from "../../resources.json";
import { DOMWindow, JSDOM as jsdom } from "jsdom";
import i18next from "i18next";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();

chai.should();
chai.use(sinonChai);

describe("TemplateDialog", () => {
    let xrmContext: XrmContextMock;
    let userService: IUserService;
    let environmentVariableService: IEnvironmentVariableService;
    let complaintService: IComplaintService;
    let templateService: ITemplateService;
    let authService: IAuthService;
    let sharePointService: ISharePointService;
    let windowContext: DOMWindow;
    let h1Element: HTMLElement;
    let divElement: HTMLDivElement;
    let templateDialog: Dialogs.TemplateDialog;

    const complaint = {
        "opc_legislation": { "opc_acronym": "" },
        "opc_complaint_SharePointDocumentLocations": [{ "relativeUrl": "", "sitecollectionid": "" }]
    };
    const environmentVariable = `{"applicationId": "", "tenantId": "", "templatesSharePointFolderAbsoluteUrl": "", "tokenScope": [""], "authorityBaseUrl": ""}`;
    const templates = [{ "Name": "templateName", "ServerRelativeUrl": "templateRelativeUrl" }];
    const sharepointSite = { "absoluteurl": "https://something.com/sites/test" };

    beforeEach(() => {
        xrmContext = new XrmContextMock();
        userService = new UserService();
        environmentVariableService = new EnvironmentVariableService();
        complaintService = new ComplaintService();
        templateService = new TemplateService();
        authService = new AuthService();
        sharePointService = new SharePointService();
        windowContext = new jsdom().window;
        global.Option = window.Option;
        h1Element = windowContext.document.createElement("h1");
        divElement = windowContext.document.createElement("div");
        h1Element.id = "defaultDialogChromeTitle-1";
        divElement.id = "dialog";
        windowContext.document.body.appendChild(h1Element);
        windowContext.document.body.appendChild(divElement);

        void i18next.init({
            resources: resources.resources,
            defaultNS: "common",
            fallbackLng: "en",
            lng: "en"
        });

        templateDialog = new Dialogs.TemplateDialog(
            i18next,
            xrmContext,
            windowContext,
            userService,
            environmentVariableService,
            complaintService,
            templateService,
            authService,
            sharePointService
        );
    });

    afterEach(() => {
        sandbox.restore();
        windowContext.document.body.removeChild(windowContext.document.getElementById("dialog"));
    });

    describe("when dialog is initialized", () => {
        let getUserEmailStub: any;
        let getAccessTokenStub: any;
        let getTemplatesStub: any;
        let getSharePointSiteStub: any;
        let getComplaintWithRelationshipsStub: any;
        let getAllegationsWithChecklistResponsesStub: any;
        let getAllQuestionTemplatesStub: any;
        let getEnvironmentVariableStub: any;
        let renderSpy: any;
        let addEventListenersSpy: any;

        beforeEach(() => {
            sandbox.stub(xrmContext, "getClientUrl").returns("");
            getUserEmailStub = sandbox.stub(userService, "getUserEmail").resolves("");
            getComplaintWithRelationshipsStub = sandbox.stub(complaintService, "getComplaintWithRelationships").resolves(complaint);
            getAllegationsWithChecklistResponsesStub = sandbox.stub(templateService, "getAllegationsWithChecklistResponses").resolves();
            getAllQuestionTemplatesStub = sandbox.stub(templateService, "getAllQuestionTemplates").resolves();
            getEnvironmentVariableStub = sandbox.stub(environmentVariableService, "getEnvironmentVariable").resolves(environmentVariable);
            getAccessTokenStub = sandbox.stub(authService, "getAccessToken").resolves("");
            getTemplatesStub = sandbox.stub(sharePointService, "getTemplates").resolves(templates);
            getSharePointSiteStub = sandbox.stub(templateService, "getSharePointSite").resolves(sharepointSite);
            renderSpy = sandbox.spy(templateDialog, "render");
            addEventListenersSpy = sandbox.spy(templateDialog, "addEventListeners");
        });

        it("it should retrieve the associated complaint and it's relations", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getComplaintWithRelationshipsStub.should.have.been.calledOnce;
        });
        it("it should retrieve the complaint's allegations and their checklist responses", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getAllegationsWithChecklistResponsesStub.should.have.been.calledOnce;
        });
        it("it should retrieve all question templates", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getAllQuestionTemplatesStub.should.have.been.calledOnce;
        });
        it("it should retrieve the user's email", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getUserEmailStub.should.have.been.calledOnce;
        });
        it("it should retrieve the environment variable for the templates application", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getEnvironmentVariableStub.should.have.been.calledOnce;
        });
        it("it should retrieve an access token", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getAccessTokenStub.should.have.been.called;
        });
        it("it should retrieve all available templates", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getTemplatesStub.should.have.been.called;
        });
        it("it should retrieve the sharepoint site associated to the case's document location", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            getSharePointSiteStub.should.have.been.called;
        });
        it("it should render the modal dialog on the page.", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            renderSpy.should.have.been.called;
        });
        it("it sould add event listeners on dialog buttons", async () => {
            // Arrange
            // Act
            await templateDialog.init();

            // Assert
            addEventListenersSpy.should.have.been.called;
        });
    });
    describe('when user click on "Generate Document"', () => {
        let generateDocumentOnClick: any;
        let generateDocumentFromTemplate: any;
        let getSharePointSiteStub: any;
        let windowClose: any;
        const xrmAPIResponse: any = {
            ok: true,
            status: 200,
            statusText: "Ok"
        };

        beforeEach(() => {
            sandbox.stub(xrmContext, "getClientUrl").returns("");
            sandbox.stub(userService, "getUserEmail").resolves("");
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves(complaint);
            sandbox.stub(templateService, "getAllegationsWithChecklistResponses").resolves();
            sandbox.stub(templateService, "getAllQuestionTemplates").resolves();
            sandbox.stub(environmentVariableService, "getEnvironmentVariable").resolves(environmentVariable);
            sandbox.stub(authService, "getAccessToken").resolves("");
            sandbox.stub(sharePointService, "getTemplates").resolves(templates);
            sandbox.stub(console, "log");

            getSharePointSiteStub = sandbox.stub(templateService, "getSharePointSite").resolves(sharepointSite);
            windowClose = sandbox.stub(templateDialog, "closePage");
            generateDocumentOnClick = sandbox.spy(templateDialog, "generateDocument_onClick");
            generateDocumentFromTemplate = sandbox.stub(sharePointService, "generateDocumentFromTemplate").resolves(xrmAPIResponse);
        });

        it("it should call generate document from template", async () => {
            // Arrange
            await templateDialog.init();

            // Act
            const submitButton = windowContext.document.getElementById("template-comfirm") as HTMLButtonElement;
            submitButton.click();

            // Assert
            generateDocumentOnClick.should.have.been.called;
        });
        it("it should retrieve the SharePoint Site associated to the complaint's document location", async () => {
            // Arrange
            await templateDialog.init();
            // Act
            const submitButton = windowContext.document.getElementById("template-comfirm") as HTMLButtonElement;
            submitButton.click();

            // Assert
            getSharePointSiteStub.should.have.been.called;
        });
        it("it should send a request to XRM Web API to trigger an action to generate a document", async () => {
            // Arrange
            await templateDialog.init();

            // Act
            const submitButton = windowContext.document.getElementById("template-comfirm") as HTMLButtonElement;
            submitButton.click();

            // Assert
            generateDocumentFromTemplate.should.have.been.called;
        });
        it("it should close the dialog after the document is created", async () => {
            // Arrange
            await templateDialog.init();

            // Act
            const submitButton = windowContext.document.getElementById("template-comfirm") as HTMLButtonElement;
            submitButton.click();

            await generateDocumentFromTemplate;

            // Assert
            windowClose.should.have.been.called;
        });
    });
    describe('when user click on "Cancel"', () => {
        beforeEach(() => {
            sandbox.stub(xrmContext, "getClientUrl").returns("");
            sandbox.stub(userService, "getUserEmail").resolves("");
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves(complaint);
            sandbox.stub(templateService, "getAllegationsWithChecklistResponses").resolves();
            sandbox.stub(templateService, "getAllQuestionTemplates").resolves();
            sandbox.stub(environmentVariableService, "getEnvironmentVariable").resolves(environmentVariable);
            sandbox.stub(authService, "getAccessToken").resolves("");
            sandbox.stub(sharePointService, "getTemplates").resolves(templates);
            sandbox.stub(templateService, "getSharePointSite").resolves(sharepointSite);
        });

        it("it should close the dialog", async () => {
            // Arrange
            await templateDialog.init();
            const windowClose = sandbox.stub(templateDialog, "closePage");

            // Act
            const cancelButton = windowContext.document.getElementById("template-cancel") as HTMLButtonElement;
            cancelButton.click();

            // Assert
            windowClose.should.have.been.called;
        });
    });
});
