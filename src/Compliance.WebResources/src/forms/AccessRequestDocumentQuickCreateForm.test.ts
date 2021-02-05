import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { AccessRequestDocument } from "./AccessRequestDocumentQuickCreateForm";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("AccessRequestDocument - QuickCreate", () => {
    let mockContext: XrmExecutionContextMock<Form.opc_accessrequestdocument.QuickCreate.QuickCreate, any>;
    let formContext: XrmPageBaseMock<Form.opc_accessrequestdocument.Main.Information, undefined>;
    let contextSpy: any;
    let form: AccessRequestDocument.Forms.QuickCreate;

    function initializeMock() {
        mockContext = new XrmExecutionContextMock<Form.opc_accessrequestdocument.Main.Information, any>();
        contextSpy = sandbox.spy(mockContext);
        form = new AccessRequestDocument.Forms.QuickCreate();
        formContext = mockContext.getFormContext();
    }

    describe("when form is loading", () => {
        beforeEach(() => {
            initializeMock();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should HIDE correctly applied exemption and rationale", () => {
            // Act
            form.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().getControl("opc_correctlyappliedexemption").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(false);
        });
    });

    describe("when contested by complainant is changed", () => {
        beforeEach(() => {
            initializeMock();
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to TRUE, it should SHOW correctly applied exemption", () => {
            // Arrange
            formContext.getAttribute("opc_contestedbycomplainant").setValue(true);

            // Act
            formContext.getAttribute("opc_contestedbycomplainant").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_correctlyappliedexemption").getVisible().should.equal(true);
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(false);
        });

        it("to FALSE, it should HIDE correctly applied exemption", () => {
            // Arrange
            formContext.getAttribute("opc_contestedbycomplainant").setValue(false);

            // Act
            formContext.getAttribute("opc_contestedbycomplainant").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_correctlyappliedexemption").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(false);
        });

        /**
         * This simulates selecting TRUE for contested by complainant and correctly applied exemption followed by setting contested by complainant back to FALSE.
         */
        it("back to FALSE, it should HIDE correctly applied exemption", () => {
            // Arrange
            formContext.getAttribute("opc_contestedbycomplainant").setValue(true);
            formContext.getAttribute("opc_correctlyappliedexemption").setValue(true);
            formContext.getAttribute("opc_contestedbycomplainant").fireOnChange();
            formContext.getAttribute("opc_correctlyappliedexemption").fireOnChange();

            formContext.getAttribute("opc_contestedbycomplainant").setValue(false);

            // Act
            formContext.getAttribute("opc_contestedbycomplainant").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_correctlyappliedexemption").getVisible().should.equal(false);
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(false);
        });
    });

    describe("when correctly applied exemption is changed", () => {
        beforeEach(() => {
            initializeMock();
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to TRUE, it should SHOW rationale", () => {
            // Arrange
            formContext.getAttribute("opc_correctlyappliedexemption").setValue(true);

            // Act
            formContext.getAttribute("opc_correctlyappliedexemption").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(true);
        });

        it("to FALSE, it should SHOW rationale", () => {
            // Arrange
            formContext.getAttribute("opc_correctlyappliedexemption").setValue(false);

            // Act
            formContext.getAttribute("opc_correctlyappliedexemption").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(true);
        });

        it("to NULL, it should HIDE rationale", () => {
            // Arrange
            formContext.getAttribute("opc_correctlyappliedexemption").setValue();

            // Act
            formContext.getAttribute("opc_correctlyappliedexemption").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_rationale").getVisible().should.equal(false);
        });
    });
});
