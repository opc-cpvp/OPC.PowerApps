import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Allegation } from './AllegationMainForm';
import { AllegationService } from '.././services/AllegationService';
import { XrmAttributeMock } from '../../test/XrmAttributeMock';
import { XrmControlMock } from '../../test/XrmControlMock';
import { XrmPageBaseMock } from '../../test/XrmPageBaseMock';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("Allegation", () => {
    describe("when form is loading", () => {
        let service : AllegationService;
        let form: Allegation.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>;
        let formContext: XrmPageBaseMock<Form.opc_allegation.Main.Information, undefined>;

        beforeEach(function () {
            service = new AllegationService();
            mockContext = new XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>();
            form = new Allegation.Forms.MainForm(service);
            formContext = mockContext.getFormContext();
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should ensure change of disposition is handled", () => {
            // Arrange
            let getAttribute = sandbox.spy(formContext, 'getAttribute');
            let dispostionAttributeaddOnChange = sandbox.spy(formContext.getAttribute('opc_disposition'), 'addOnChange');

            // Act
            form.initializeComponents(mockContext);

            // Assert
            getAttribute.should.have.been.calledWith('opc_disposition');
            dispostionAttributeaddOnChange.should.have.been.calledOnce;
        });

        it("it should ensure change of disposition reason is handled", () => {
            // Arrange
            let getAttribute = sandbox.spy(formContext, 'getAttribute');
            let dispostionAttributeaddOnChange = sandbox.spy(formContext.getAttribute('opc_dispositionreason'), 'addOnChange');

            // Act
            form.initializeComponents(mockContext);

            // Assert
            getAttribute.should.have.been.calledWith('opc_dispositionreason');
            dispostionAttributeaddOnChange.should.have.been.calledOnce;
        });

        it.skip("it should ensure disposition reason filtering is properly handled", () => {
            //TODO: Add mocking of LookupControls
            // Arrange
            let dispositionReason = formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason');
            let addPreSearch = sandbox.stub(dispositionReason, 'addPreSearch').callsFake(sinon.fake());

            // Act
            form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });

        it.skip("it should ensure disposition action filtering is properly handled", () => {
            //TODO: Add mocking of LookupControls
            // Arrange
            let dispositionAction = formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction');
            let addPreSearch = sandbox.stub(dispositionAction, 'addPreSearch').callsFake(sinon.fake());

            // Act
            form.initializeComponents(mockContext);

            // Assert
            addPreSearch.should.have.been.calledOnce;
        });

    });

    describe("when disposition is changed", () => {
        let service: AllegationService;
        let form: Allegation.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.opc_allegation.Main.Information, undefined>;
        let formContext: XrmPageBaseMock<Form.opc_allegation.Main.Information, undefined>;

        beforeEach(function () {
            service = new AllegationService();
            mockContext = new XrmExecutionContextMock<Form.opc_allegation.Main.Information, undefined>();
            form = new Allegation.Forms.MainForm(service);
            form.initializeComponents(mockContext);
            formContext = mockContext.getFormContext();
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("to 'Acceptable', it should HIDE disposition reason and disposition action", () => {
            // Arrange
            formContext.getAttribute('opc_disposition').setValue(opc_allegationdisposition.Acceptable);
            formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason');
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction').setVisible(true);//the get creates a record

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute('opc_dispositionreason').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
            formContext.getAttribute('opc_dispositionaction').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("to 'Resolved', it should SHOW disposition reason and HIDE disposition action", () => {
            // Arrange
            formContext.getAttribute('opc_disposition').setValue(opc_allegationdisposition.Resolved);
            formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason'); 
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction').setVisible(true);;

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute('opc_dispositionreason').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), true));
            formContext.getAttribute('opc_dispositionaction').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("to 'Unacceptable', it should SHOW disposition reason and HIDE disposition action", () => {
            // Arrange
            formContext.getAttribute('opc_disposition').setValue(opc_allegationdisposition.Unacceptable);
            formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason'); 
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction').setVisible(true);;

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute('opc_dispositionreason').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), true));
            formContext.getAttribute('opc_dispositionaction').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("to 'Withdrawn', it should HIDE disposition reason and disposition action", () => {
            // Arrange
            formContext.getAttribute('opc_disposition').setValue(opc_allegationdisposition.Withdrawn);
            formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason');
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction').setVisible(true);;

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            formContext.getAttribute('opc_dispositionreason').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
            formContext.getAttribute('opc_dispositionaction').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("and disposition reason and disposition action were set, it should reset both values", () => {
            // Arrange
            formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason');
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction');
            formContext.getAttribute('opc_dispositionreason').setValue([{ id: "val1" }]);
            formContext.getAttribute('opc_dispositionaction').setValue([{ id: "val2" }]);

            // Act
            formContext.getAttribute("opc_disposition").fireOnChange();

            // Assert
            sinon.assert.match(formContext.getAttribute('opc_dispositionreason').getValue(), undefined);
            sinon.assert.match(formContext.getAttribute('opc_dispositionaction').getValue(), undefined);
        });

    });

    describe("when disposition reason is changed", () => {
        let service: AllegationService;
        let form: Allegation.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.opc_allegation.Main.Information, undefined>;
        let formContext: XrmPageBaseMock<Form.opc_allegation.Main.Information, undefined>;

        beforeEach(function () {
            service = new AllegationService();
            mockContext = new XrmExecutionContextMock<Form.opc_allegation.Main.Information, undefined>();
            form = new Allegation.Forms.MainForm(service);
            form.initializeComponents(mockContext);
            formContext = mockContext.getFormContext();
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("to 'Not a Privacy Complaint', it should SHOW disposition action", () => {
            // Arrange
            formContext.getAttribute('opc_dispositionreason').setValue([{id:"{11DF9980-A76E-EA11-A811-000D3AF45A96}"}]);
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction');

            // Act
            formContext.getAttribute("opc_dispositionreason").fireOnChange();

            // Assert
            formContext.getAttribute('opc_dispositionaction').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), true));
        });

        it("to anything else, it should HIDE disposition action", () => {
            // Arrange
            formContext.getAttribute('opc_dispositionreason').setValue([{ id: "anything else" }]);
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction');

            // Act
            formContext.getAttribute("opc_dispositionreason").fireOnChange();

            // Assert
            formContext.getAttribute('opc_dispositionaction').controls.forEach(
                ctrl => sinon.assert.match(ctrl.getVisible(), false));
        });

        it("and disposition action was set, it should reset the value", () => {
            // Arrange
            formContext.getAttribute('opc_dispositionreason').controls.get('opc_dispositionreason');
            formContext.getAttribute('opc_dispositionaction').controls.get('opc_dispositionaction');
            formContext.getAttribute('opc_dispositionaction').setValue([{ id: "val2" }]);

            // Act
            formContext.getAttribute("opc_dispositionreason").fireOnChange();

            // Assert
            sinon.assert.match(formContext.getAttribute('opc_dispositionaction').getValue(), undefined);
        });
    });
});
