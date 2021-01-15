import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Allegation } from "./AllegationQuickCreateForm";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { AllegationType } from "../enums";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("Allegation - QuickCreate", () => {
    let mockContext: XrmExecutionContextMock<Form.opc_allegation.QuickCreate.QuickCreate, any>;
    let formContext: XrmPageBaseMock<Form.opc_allegation.QuickCreate.QuickCreate, undefined>;
    let form: Allegation.Forms.QuickCreate;

    function initializeMock() {
        mockContext = new XrmExecutionContextMock<Form.opc_allegation.QuickCreate.QuickCreate, any>();
        form = new Allegation.Forms.QuickCreate();
        formContext = mockContext.getFormContext();
    }

    describe("when allegation type ", () => {
        beforeEach(() => {
            initializeMock();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("is changed to 'Access', it should SHOW access request number", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: AllegationType.Access }]);

            // Act
            form.initializeComponents(mockContext);
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // Assert
            formContext.getAttribute("opc_referencenumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), true));
        });

        it("is changed to value other than 'Access', it should HIDE access request number", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: "Test" }]);

            // Act
            form.initializeComponents(mockContext);
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // Assert
            formContext.getAttribute("opc_referencenumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("has no value, it should HIDE access request number", () => {
            // Act
            form.initializeComponents(mockContext);
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // Assert
            formContext.getAttribute("opc_referencenumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });
    });
});
