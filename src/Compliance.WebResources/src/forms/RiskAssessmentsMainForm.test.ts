import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmSaveEventContextMock } from '../../test/XrmSaveEventContextMock';
import { RiskAssessment } from './RiskAssessmentMainForm';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("RiskAssessment", () => {
    let form: RiskAssessment.Forms.MainForm;
    let mockContext: XrmExecutionContextMock<Form.opc_riskassessment.Main.Information, any>;
    let contextSpy: any;

    beforeEach(function () {
        form = new RiskAssessment.Forms.MainForm();
        mockContext = new XrmSaveEventContextMock<Form.opc_riskassessment.Main.Information>();
        contextSpy = sandbox.spy(mockContext);
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("when bypass suggested risk appetite is selected", () => {
        it("it should display the additional bypass fields for the user", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_bypasssuggestedriskappetite").setValue(true);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_bypasssuggestedriskappetite").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_bypassinitiatedby").getVisible().should.equal(true);
            contextSpy.getFormContext().getAttribute("opc_bypassinitiatedby").getRequiredLevel().should.equal("required");

            contextSpy.getFormContext().getControl("opc_bypassrationale").getVisible().should.equal(true);
            contextSpy.getFormContext().getAttribute("opc_bypassrationale").getRequiredLevel().should.equal("required");

            contextSpy.getFormContext().getControl("opc_actualriskappetite").getVisible().should.equal(true);
            contextSpy.getFormContext().getAttribute("opc_actualriskappetite").getRequiredLevel().should.equal("required");



        });
    });

    describe("when bypass suggested risk appetite is not selected", () => {
        it("it should hide the additional bypass fields for the user", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_bypasssuggestedriskappetite").setValue(false);

            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_bypasssuggestedriskappetite").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_bypassinitiatedby").getVisible().should.equal(false);
            contextSpy.getFormContext().getAttribute("opc_bypassinitiatedby").getRequiredLevel().should.equal("none");

            contextSpy.getFormContext().getControl("opc_bypassrationale").getVisible().should.equal(false);
            contextSpy.getFormContext().getAttribute("opc_bypassrationale").getRequiredLevel().should.equal("none");

            contextSpy.getFormContext().getControl("opc_actualriskappetite").getVisible().should.equal(false);
            contextSpy.getFormContext().getAttribute("opc_actualriskappetite").getRequiredLevel().should.equal("none");
        });
    });
});