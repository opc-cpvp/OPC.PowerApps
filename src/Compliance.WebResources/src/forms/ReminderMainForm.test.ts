import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmSaveEventContextMock } from '../../test/XrmSaveEventContextMock';
import { Reminder } from './ReminderMainForm';
import { ReminderService } from '../services/ReminderService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("when form is loading", () => {
    let service: ReminderService;
    let form: Reminder.Forms.MainForm;
    let mockContext: XrmExecutionContextMock<Form.opc_reminder.Main.Information, any>;
    let contextSpy: any;

    beforeEach(function () {
        service = new ReminderService();
        form = new Reminder.Forms.MainForm(service);
        mockContext = new XrmSaveEventContextMock<Form.opc_reminder.Main.Information>();
        contextSpy = sandbox.spy(mockContext);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display the section to add additional users if the user chooses to notify additional users", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(true);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(true);
    });

    it("it should hide the section to add additional users if the user chooses not to notify additional users", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(false);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(false);
    });
});

describe("when form is saving", () => {
    let service: ReminderService;
    let form: Reminder.Forms.MainForm;
    let mockContext: XrmExecutionContextMock<Form.opc_reminder.Main.Information, any>;
    let contextSpy: any;
    let eventArgsSpy: any;

    beforeEach(function () {
        service = new ReminderService();
        form = new Reminder.Forms.MainForm(service);
        mockContext = new XrmSaveEventContextMock<Form.opc_reminder.Main.Information>();
        contextSpy = sandbox.spy(mockContext);
        eventArgsSpy = sandbox.spy(mockContext.getEventArgs());
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display notifications if the user chooses to notify the case owner but no case is related to the reminder", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);

        //We are calling initializeComponents to register the events and to be able to call save() on the entity, which will trigger the onsave event. Onsave is a private method.
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(1);
    });

    it("it should not display notifications if the user chooses to notify the case owner and has a case is related to the reminder", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");

        //We are calling initializeComponents to register the events and to be able to call save() on the entity, which will trigger the onsave event. Onsave is a private method.
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(0);
    });

    it("it should display notifications if the user have not selected someone to be notified", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(false);
        mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(false);
        mockContext.getFormContext().getAttribute("opc_notifyme").setValue(false);
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(1);
        contextSpy.getFormContext().getControl("opc_notifyme").getNotificationsLength().should.equal(1);
        contextSpy.getFormContext().getControl("opc_notifyadditionalusers").getNotificationsLength().should.equal(1);
    });

    it("it should not display notifications if the user have selected someone to be notified", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(true);
        mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
        mockContext.getFormContext().getAttribute("opc_notifyme").setValue(true);
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(0);
        contextSpy.getFormContext().getControl("opc_notifyme").getNotificationsLength().should.equal(0);
        contextSpy.getFormContext().getControl("opc_notifyadditionalusers").getNotificationsLength().should.equal(0);
    });

    it("it should cancel the save operation if the user have not selected someone to be notified", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(false);
        mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(false);
        mockContext.getFormContext().getAttribute("opc_notifyme").setValue(false);
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        eventArgsSpy.preventDefault.should.have.been.called;
    });

    it("it should cancel the save operation if the user chooses to notify the case owner but no case is related to the reminder", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        eventArgsSpy.preventDefault.should.have.been.called;
    });
});

describe("when fields value changes", () => {
    let service: ReminderService;
    let form: Reminder.Forms.MainForm;
    let mockContext: XrmExecutionContextMock<Form.opc_reminder.Main.Information, any>;
    let contextSpy: any;

    beforeEach(function () {
        service = new ReminderService();
        form = new Reminder.Forms.MainForm(service);
        mockContext = new XrmSaveEventContextMock<Form.opc_reminder.Main.Information>();
        contextSpy = sandbox.spy(mockContext);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display the section to add additional users if the user chooses to notify additional users", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(true);

        //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").fireOnChange();

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(true);
    });

    it("it should hide the section to add additional users if the user chooses not to notify additional users", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(false);

        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").fireOnChange();

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(false);
    });
});