import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Issue } from "./IssueMainForm";
import { ContactService } from "../services/ContactService";
import { ComplaintService } from "../services/ComplaintService";
import { AllegationType } from "../enums";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

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
    }

    describe("when allegation type", () => {
        beforeEach(() => {
            initializeMock();
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves([]);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("is changed to 'Access', it should ONLY SHOW releveant fields", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: AllegationType.Access }]);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(true);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(true);
            contextSpy.getFormContext().getControl("subgrid_accessrequestdocuments").getVisible().should.equal(true);
        });

        it("is changed to value other than 'Access', it should ONLY SHOW releveant fields", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: "Test" }]);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("subgrid_accessrequestdocuments").getVisible().should.equal(false);
        });

        it("has no value, it should ONLY SHOW releveant fields", () => {
            // Act
            form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("subgrid_accessrequestdocuments").getVisible().should.equal(false);
        });
    });

    describe("when form is loading", () => {
        beforeEach(() => {
            initializeMock();
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves([]);
        });

        it("it should ensure contact filtering is properly handled", () => {
            // TODO: Add mocking of LookupControls
            // Arrange
            const contactControl = mockContext.getFormContext().getControl("opc_contact");
            const addPreSearch = sandbox.stub(contactControl, "addPreSearch").callsFake(sinon.fake());

            // Act
            form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });
    });
});
