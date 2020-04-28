import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmOptionMock } from '../../test/XrmOptionMock';
import { XrmNavigationMock } from '../../test/XrmNavigationMock';
import { XrmOptionSetControlMock } from '../../test/XrmOptionSetControlMock';
import { Contact } from './ContactMainForm';
import { UserService } from '../services/UserService';
import { XrmContextMock } from '../../test/XrmContextMock';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Contact", () => {
    const mcsOptions: XrmOptionMock<any>[] = [
        { text: "Not Applied", value: opc_multiplecomplaintstrategy.NotApplied },
        { text: "Proposed", value: opc_multiplecomplaintstrategy.Proposed },
        { text: "Applied", value: opc_multiplecomplaintstrategy.Applied },
        { text: "Former", value: opc_multiplecomplaintstrategy.Former }
    ];

    let userService: UserService;
    let form: Contact.Forms.MainForm;
    let mockExecutionContext: XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>;
    let mockNavigation: XrmNavigationMock;
    let mockContext: XrmContextMock;
    let mcsControl: XrmOptionSetControlMock;
    let contextSpy: any;
    let controlSpy: any;
    let hasIntakeManagerPermissions: any;

    function initializeMock() {
        userService = new UserService();
        mockNavigation = new XrmNavigationMock();
        mockContext = new XrmContextMock();
        form = new Contact.Forms.MainForm(userService, mockNavigation, mockContext);
        mockExecutionContext = new XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>();
        contextSpy = sandbox.spy(mockExecutionContext);

        // We make sure it returns a value since it is called as soon as the form loads.
        // The user does not have Intake Manager permissions by default.
        hasIntakeManagerPermissions = sandbox.stub(userService, 'hasIntakeManagerPermissions');
        hasIntakeManagerPermissions.returns(false);
    }

    describe("after MCS field is loaded", () => {
        beforeEach(function () {
            initializeMock();
            mcsControl = new XrmOptionSetControlMock(mockExecutionContext);
            controlSpy = sandbox.spy(mcsControl);
            mcsControl.setOptions(mcsOptions);
            mcsControl.setName("opc_multiplecomplaintstrategy");
            mockExecutionContext.getFormContext().addControl(mcsControl);
            mockExecutionContext.getFormContext().ui.formType = Xrm.FormType.Update;
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should contain option 'Applied' if user is Intake Manager", () => {
            // Arrange
            hasIntakeManagerPermissions.returns(true);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            controlSpy.getOptions().should.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(4);
        });

        it("it should contain option 'Applied' if user is not Intake Manager BUT MCS value is already 'Applied'", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            controlSpy.getOptions().should.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(4);
        });

        it("it should not contain option 'Applied' if user is not Intake Manager", () => {
            // Arrange
            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            controlSpy.getOptions().should.not.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(3);
        });
    });
    describe("when the contact is part of the Multiple Complaint Strategy", () => {
        beforeEach(function () {
            initializeMock();
            mockExecutionContext.getFormContext().ui.formType = Xrm.FormType.Update;
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should display a form notification", () => {
            // Arrange
            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockExecutionContext);

            // Act
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        });

        it("it should lock the field if user is not Intake Manager", () => {
            // Arrange
            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockExecutionContext);

            // Act
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_multiplecomplaintstrategy").getDisabled().should.equal(true);
        });

        it("it should not lock the field if user is Intake Manager", () => {
            // Arrange
            hasIntakeManagerPermissions.returns(true);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockExecutionContext);

            // Act
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().getControl("opc_multiplecomplaintstrategy").getDisabled().should.equal(false);
        });
    });
    describe("when the contact is not part of the Multiple Complaint Strategy", () => {
        beforeEach(function () {
            initializeMock();
            mcsControl = new XrmOptionSetControlMock(mockExecutionContext);
            mcsControl.setOptions(mcsOptions);
            mcsControl.setName("opc_multiplecomplaintstrategy");
            mockExecutionContext.getFormContext().addControl(mcsControl);
            mockExecutionContext.getFormContext().ui.formType = Xrm.FormType.Update;
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should not display a form notification(if not applied)", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.NotApplied);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockExecutionContext);

            // Act
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
        it("it should not display a form notification(if proposed)", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Proposed);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockExecutionContext);

            // Act
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
        it("it should not display a form notification(if former)", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Former);

            //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockExecutionContext);

            // Act
            mockExecutionContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
