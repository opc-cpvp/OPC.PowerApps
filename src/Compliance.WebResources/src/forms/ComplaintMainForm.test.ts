import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmSaveEventContextMock } from '../../test/XrmSaveEventContextMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from '.././services/ComplaintService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("Complaint", () => {
    describe("when the complainant is part of the Multiple Complaint Strategy", () => {
        let service: ComplaintService;
        let form: Complaint.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
        let contextSpy: any;

        beforeEach(function () {
            service = new ComplaintService();
            form = new Complaint.Forms.MainForm(service);
            mockContext = new XrmSaveEventContextMock<Form.opc_complaint.Main.Information>();
            contextSpy = sandbox.spy(mockContext);
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should display a form notification", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        });
    });
    describe("when the complainant is not part of the Multiple Complaint Strategy", () => {
        let service: ComplaintService;
        let form: Complaint.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
        let contextSpy: any;

        beforeEach(function () {
            service = new ComplaintService();
            form = new Complaint.Forms.MainForm(service);
            mockContext = new XrmSaveEventContextMock<Form.opc_complaint.Main.Information>();
            contextSpy = sandbox.spy(mockContext);
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should not display a form notification(if not applied)", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.NotApplied);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
        it("it should not display a form notification(if proposed)", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Proposed);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
