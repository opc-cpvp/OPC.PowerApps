import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Allegation } from "./AllegationMainForm";
import { AllegationService } from ".././services/AllegationService";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { AllegationType } from "../enums";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("Allegation - Main", () => {
    let allegationService: AllegationService;
    let mockContext: XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>;
    let formContext: XrmPageBaseMock<Form.opc_allegation.Main.Information, undefined>;
    let form: Allegation.Forms.MainForm;

    function initializeMock() {
        allegationService = new AllegationService();
        mockContext = new XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>();
        form = new Allegation.Forms.MainForm(allegationService);
        formContext = mockContext.getFormContext();
    }

    describe("when form is loading", () => {
        beforeEach(() => {
            initializeMock();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should ensure change of disposition is handled", () => {
            // Arrange
            const getAttribute = sandbox.spy(formContext, "getAttribute");
            const dispostionAttributeaddOnChange = sandbox.spy(formContext.getAttribute("opc_disposition"), "addOnChange");

            // Act
            form.initializeComponents(mockContext);

            // Assert
            getAttribute.should.have.been.calledWith("opc_disposition");
            dispostionAttributeaddOnChange.should.have.been.calledOnce;
        });

        it("it should ensure change of disposition reason is handled", () => {
            // Arrange
            const getAttribute = sandbox.spy(formContext, "getAttribute");
            const dispostionAttributeaddOnChange = sandbox.spy(formContext.getAttribute("opc_dispositionreasonid"), "addOnChange");

            // Act
            form.initializeComponents(mockContext);

            // Assert
            getAttribute.should.have.been.calledWith("opc_dispositionreasonid");
            dispostionAttributeaddOnChange.should.have.been.calledOnce;
        });

        it.skip("it should ensure disposition reason filtering is properly handled", () => {
            // TODO: Add mocking of LookupControls
            // Arrange
            const dispositionReason = formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            const addPreSearch = sandbox.stub(dispositionReason, "addPreSearch").callsFake(sinon.fake());

            // Act
            form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });

        it.skip("it should ensure disposition action filtering is properly handled", () => {
            // TODO: Add mocking of LookupControls
            // Arrange
            const dispositionAction = formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid");
            const addPreSearch = sandbox.stub(dispositionAction, "addPreSearch").callsFake(sinon.fake());

            // Act
            form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });
    });

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

            // Assert
            formContext.getAttribute("opc_referencenumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), true));
        });

        it("is changed to value other than 'Access', it should HIDE access request number", () => {
            // Arrange
            formContext.getAttribute("opc_allegationtypeid").setValue([{ id: "Test" }]);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            formContext.getAttribute("opc_referencenumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("has no value, it should HIDE access request number", () => {
            // Act
            form.initializeComponents(mockContext);

            // Assert
            formContext.getAttribute("opc_referencenumber").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });
    });

    describe("when disposition is changed", () => {
        beforeEach(() => {
            initializeMock();
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to 'Acceptable', it should HIDE disposition reason and disposition action", () => {
            // Arrange
            formContext.getAttribute("opc_disposition").setValue(opc_allegationdisposition.Acceptable);
            formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid").setVisible(true); // the get creates a record

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute("opc_dispositionreasonid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
            formContext.getAttribute("opc_dispositionactionid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("to 'Resolved', it should SHOW disposition reason and HIDE disposition action", () => {
            // Arrange
            formContext.getAttribute("opc_disposition").setValue(opc_allegationdisposition.Resolved);
            formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid").setVisible(true);

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute("opc_dispositionreasonid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), true));
            formContext.getAttribute("opc_dispositionactionid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("to 'Unacceptable', it should SHOW disposition reason and HIDE disposition action", () => {
            // Arrange
            formContext.getAttribute("opc_disposition").setValue(opc_allegationdisposition.Unacceptable);
            formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid").setVisible(true);

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute("opc_dispositionreasonid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), true));
            formContext.getAttribute("opc_dispositionactionid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("to 'Withdrawn', it should HIDE disposition reason and disposition action", () => {
            // Arrange
            formContext.getAttribute("opc_disposition").setValue(opc_allegationdisposition.Withdrawn);
            formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid").setVisible(true);

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute("opc_dispositionreasonid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
            formContext.getAttribute("opc_dispositionactionid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("and disposition reason and disposition action were set, it should reset both values", () => {
            // Arrange
            formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid");
            formContext.getAttribute("opc_dispositionreasonid").setValue([{ id: "val1" }]);
            formContext.getAttribute("opc_dispositionactionid").setValue([{ id: "val2" }]);

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            sinon.assert.match(formContext.getAttribute("opc_dispositionreasonid").getValue(), undefined);
            sinon.assert.match(formContext.getAttribute("opc_dispositionactionid").getValue(), undefined);
        });
    });

    describe("when disposition reason is changed", () => {
        beforeEach(() => {
            initializeMock();
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to 'Not a Privacy Complaint', it should SHOW disposition action", () => {
            // Arrange
            formContext.getAttribute("opc_dispositionreasonid").setValue([{ id: "{11DF9980-A76E-EA11-A811-000D3AF45A96}" }]);
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid");

            // Act
            formContext.getAttribute("opc_dispositionreasonid").fireOnChange();

            // Assert
            formContext.getAttribute("opc_dispositionactionid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), true));
        });

        it("to anything else, it should HIDE disposition action", () => {
            // Arrange
            formContext.getAttribute("opc_dispositionreasonid").setValue([{ id: "anything else" }]);
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionaction");

            // Act
            formContext.getAttribute("opc_dispositionreasonid").fireOnChange();

            // Assert
            formContext.getAttribute("opc_dispositionactionid").controls.forEach(ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("and disposition action was set, it should reset the value", () => {
            // Arrange
            formContext.getAttribute("opc_dispositionreasonid").controls.get("opc_dispositionreasonid");
            formContext.getAttribute("opc_dispositionactionid").controls.get("opc_dispositionactionid");
            formContext.getAttribute("opc_dispositionactionid").setValue([{ id: "val2" }]);

            // Act
            formContext.getAttribute("opc_dispositionreasonid").fireOnChange();

            // Assert
            sinon.assert.match(formContext.getAttribute("opc_dispositionactionid").getValue(), undefined);
        });
    });
});
