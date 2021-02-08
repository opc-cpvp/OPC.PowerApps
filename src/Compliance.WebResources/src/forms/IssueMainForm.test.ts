import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Issue } from "./IssueMainForm";
import { ContactService } from "../services/ContactService";
import { ComplaintService } from "../services/ComplaintService";
import { AllegationType } from "../enums";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";
import { XrmViewSelectorMock } from "../../test/XrmViewSelectorMock";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { XrmControlMock } from "../../test/XrmControlMock";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Issue - Main", () => {
    let contactService: ContactService;
    let complaintService: ComplaintService;
    let mockContext: XrmExecutionContextMock<Form.opc_issue.Main.Information, any>;
    let formContext: XrmPageBaseMock<Form.opc_issue.QuickCreate.QuickCreate, undefined>;
    let contextSpy: any;
    let form: Issue.Forms.MainForm;

    function initializeMock() {
        contactService = new ContactService();
        complaintService = new ComplaintService();
        mockContext = new XrmExecutionContextMock<Form.opc_issue.Main.Information, any>();
        contextSpy = sandbox.spy(mockContext);
        form = new Issue.Forms.MainForm(complaintService, contactService);
        formContext = mockContext.getFormContext();
        formContext.getAttribute("opc_complaintid").setValue([{ id: "" }]);
        const control = formContext.getControl("subgrid_accessrequestdocuments") as XrmControlMock; // TODO: Change for correct control
        control.setViewSelector(new XrmViewSelectorMock({ entityType: "1039", id: "", name: "Test View" }, true));
    }

    describe("when allegation type", () => {
        beforeEach(() => {
            initializeMock();
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves([]);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("is changed to 'Access', it should ONLY SHOW releveant fields", async () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: AllegationType.Access }]);

            // Act
            await form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(true);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(true);
            contextSpy.getFormContext().getControl("subgrid_accessrequestdocuments").getVisible().should.equal(true);
        });

        it("is changed to value other than 'Access', it should ONLY SHOW releveant fields", async () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: "Test" }]);

            // Act
            await form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("subgrid_accessrequestdocuments").getVisible().should.equal(false);
        });

        it("has no value, it should ONLY SHOW releveant fields", async () => {
            // Act
            await form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("subgrid_accessrequestdocuments").getVisible().should.equal(false);
        });
    });

    describe("when form is loading", () => {
        beforeEach(() => {
            initializeMock();
        });

        it("it should ensure contact filtering is properly handled", async () => {
            // TODO: Add mocking of LookupControls
            // Arrange
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves([]);
            const contactControl = mockContext.getFormContext().getControl("opc_contact");
            const addPreSearch = sandbox.stub(contactControl, "addPreSearch").callsFake(sinon.fake());

            // Act
            await form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });

        // TODO: add tests when provision entity exists
        it("it should change the provisions subgrid view according to the parent legislation", async () => {
            // TODO: Add mocking of LookupControls
            // Arrange
            // const contactControl = mockContext.getFormContext().getControl("opc_contact");
            // const addPreSearch = sandbox.stub(contactControl, "addPreSearch").callsFake(sinon.fake());
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves({ opc_legislation: { opc_acronym: "PA" } });

            // Act
            await form.initializeComponents(mockContext);

            // Assert
            const control = formContext.getControl("subgrid_accessrequestdocuments") as XrmControlMock; // TODO: change to correct grid
            control.getViewSelector().getCurrentView().name.should.equal("Active PA Provisions");
        });
    });
});
