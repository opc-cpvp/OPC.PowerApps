import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Issue } from "./IssueMainForm";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";
import { ContactService } from "../services/ContactService";
import { ComplaintService } from "../services/ComplaintService";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { AllegationType } from "../enums";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Issue - Main", () => {
    let contactService: ContactService;
    let complaintService: ComplaintService;
    let mockContext: XrmExecutionContextMock<Form.opc_issue.Main.Information, any>;
    let formContext: XrmPageBaseMock<Form.opc_issue.Main.Information, undefined>;
    let form: Issue.Forms.MainForm;

    function initializeMock() {
        mockContext = new XrmExecutionContextMock<Form.opc_issue.Main.Information, any>();
        contactService = new ContactService();
        complaintService = new ComplaintService();
        form = new Issue.Forms.MainForm(complaintService, contactService);
        formContext = mockContext.getFormContext();
        formContext.getAttribute("opc_complaintid").setValue([{ id: "" }]);
    }

    describe("when allegation type ", () => {
        beforeEach(() => {
            initializeMock();
            sandbox.stub(complaintService, "getComplaintWithRelationships").resolves([]);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("is changed to 'Access', it should SHOW access request number", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: AllegationType.Access }]);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            formContext.getAttribute("opc_accessrequestnumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), true));
        });

        it("is changed to value other than 'Access', it should HIDE access request number", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: "Test" }]);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            formContext.getAttribute("opc_accessrequestnumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("has no value, it should HIDE access request number", () => {
            // Act
            form.initializeComponents(mockContext);

            // Assert
            formContext.getAttribute("opc_accessrequestnumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
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
            const contactControl = formContext.getControl("opc_contact");
            const addPreSearch = sandbox.stub(contactControl, "addPreSearch").callsFake(sinon.fake());

            // Act
            form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });
    });
});
