import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Issue } from "./IssueQuickCreateForm";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { AllegationType } from "../enums";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Issue - QuickCreate", () => {
    let mockContext: XrmExecutionContextMock<Form.opc_issue.QuickCreate.QuickCreate, any>;
    let formContext: XrmPageBaseMock<Form.opc_issue.QuickCreate.QuickCreate, undefined>;
    let contextSpy: any;
    let form: Issue.Forms.QuickCreate;

    function initializeMock() {
        mockContext = new XrmExecutionContextMock<Form.opc_issue.QuickCreate.QuickCreate, any>();
        contextSpy = sandbox.spy(mockContext);
        form = new Issue.Forms.QuickCreate();
        formContext = mockContext.getFormContext();
    }

    describe("when allegation type ", () => {
        beforeEach(() => {
            initializeMock();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("is changed to 'Access', it should ONLY SHOW relevant fields", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: AllegationType.Access }]);

            // Act
            form.initializeComponents(mockContext);
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(true);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(true);
        });

        it("is changed to other value than 'Access', it should ONLY SHOW relevant fields", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: "Test" }]);

            // Act
            form.initializeComponents(mockContext);
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(false);
        });

        it("has no value, it should ONLY SHOW relevant fields", () => {
            // Act
            form.initializeComponents(mockContext);
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_accessrequestnumber").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_contact").getVisible().should.equal(false);
        });
    });
});
