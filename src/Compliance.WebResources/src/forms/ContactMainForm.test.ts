import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmUtilityMock } from '../../test/XrmUtilityMock';
import { XrmOptionMock } from '../../test/XrmOptionMock';
import { XrmBaseControlMock } from '../../test/XrmBaseControlMock';
import { Contact } from './ContactMainForm';
import { ContactService } from '.././services/ContactService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Contact", () => {
    describe("after MCS field is loading", () => {
        let service: ContactService;
        let form: Contact.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>;
        let mockUtility: XrmUtilityMock;
        let mcsControl: XrmBaseControlMock;
        let controlSpy: any;
        let roleIntakeManager: { id: string, name: string } = { id: "8fcba750-362e-ea11-a810-000d3af46757", name: "Compliance - Intake Manager" };
        let roleNotIntakeManager: { id: string, name: string } = { id: "B2D7179F-913E-42B4-B040-84E375AF8831", name: "NOT Intake Manager" };
        let mcsOptions: XrmOptionMock[] = [
            { text: "Not Applied", value: opc_multiplecomplaintstrategy.NotApplied },
            { text: "Proposed", value: opc_multiplecomplaintstrategy.Proposed },
            { text: "Applied", value: opc_multiplecomplaintstrategy.Applied },
            { text: "Former", value: opc_multiplecomplaintstrategy.Former }
        ];

        beforeEach(function () {
            service = new ContactService();
            mockUtility = new XrmUtilityMock();
            form = new Contact.Forms.MainForm(service, mockUtility);
            mockContext = new XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>();
            mcsControl = mockContext.getFormContext().getControl("opc_multiplecomplaintstrategy");
            controlSpy = sandbox.spy(mcsControl);
            mcsControl.options = mcsOptions;
            mockContext.getFormContext().ui.formType = Xrm.FormType.Update;
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should contain option 'Applied' if user is Intake Manager", () => {
            // Arrange
            mockUtility.getGlobalContext().userSettings.roles = [<string><unknown>roleIntakeManager];

            // Act
            form.initializeComponents(mockContext);

            // Assert
            controlSpy.getOptions().should.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(4);
        });

        it("it should contain option 'Applied' if user is not Intake Manager BUT MCS value is already 'Applied'", () => {
            // Arrange
            mockUtility.getGlobalContext().userSettings.roles = [<string><unknown>roleNotIntakeManager]
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            controlSpy.getOptions().should.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(4);
        });

        it("it should not contain option 'Applied' if user is not Intake Manager", () => {
            // Arrange
            mockUtility.getGlobalContext().userSettings.roles = [<string><unknown>roleNotIntakeManager]

            // Act
            form.initializeComponents(mockContext);

            // Assert
            controlSpy.getOptions().should.not.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(3);
        });
    });
    describe("when the contact is part of the Multiple Complaint Strategy", () => {
        let service: ContactService;
        let form: Contact.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>;
        let mockUtility: XrmUtilityMock;
        let contextSpy: any;
        let roleIntakeManager: { id: string, name: string } = { id: "8fcba750-362e-ea11-a810-000d3af46757", name: "Compliance - Intake Manager" };
        let roleNotIntakeManager: { id: string, name: string } = { id: "B2D7179F-913E-42B4-B040-84E375AF8831", name: "NOT Intake Manager" };

        beforeEach(function () {
            service = new ContactService();
            mockUtility = new XrmUtilityMock();
            form = new Contact.Forms.MainForm(service, mockUtility);
            mockContext = new XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>();
            contextSpy = sandbox.spy(mockContext);
            mockContext.getFormContext().ui.formType = Xrm.FormType.Update;
            mockUtility.getGlobalContext().userSettings.roles = [];
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

        it("it should lock the field if user is not Intake Manager", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);
            mockUtility.getGlobalContext().userSettings.roles = [<string><unknown>roleNotIntakeManager]

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_multiplecomplaintstrategy").getDisabled().should.equal(true);
        });

        it("it should not lock the field if user is Intake Manager", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);
            mockUtility.getGlobalContext().userSettings.roles = [<string><unknown>roleIntakeManager]

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_multiplecomplaintstrategy").getDisabled().should.equal(false);
        });
    });
    describe("when the contact is not part of the Multiple Complaint Strategy", () => {
        let service: ContactService;
        let form: Contact.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>;
        let mockUtility: XrmUtilityMock;
        let contextSpy: any;

        beforeEach(function () {
            service = new ContactService();
            mockUtility = new XrmUtilityMock();
            form = new Contact.Forms.MainForm(service, mockUtility);
            mockContext = new XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>();
            contextSpy = sandbox.spy(mockContext);
            mockContext.getFormContext().ui.formType = Xrm.FormType.Update;
            mockUtility.getGlobalContext().userSettings.roles = [];
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
        it("it should not display a form notification(if former)", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Former);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
