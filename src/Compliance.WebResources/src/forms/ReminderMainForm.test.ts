import { XrmSaveEventContextMock } from '../../test/XrmSaveEventContextMock';
import { Reminder } from './ReminderMainForm';
import { ReminderService } from '../services/ReminderService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

function GetMockedContext(): XrmSaveEventContextMock<Form.opc_reminder.Main.Information> {
    let mockContext = new XrmSaveEventContextMock<Form.opc_reminder.Main.Information>();

    mockContext.getFormContext().getAttribute("statecode").setValue(opc_notification_statecode.Active);
    mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
    mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(true);
    mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
    mockContext.getFormContext().getAttribute("opc_notifyme").setValue(true);
    mockContext.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").setVisible(false);

    return mockContext;
}

describe("when form is loading", () => {
    let mockContext: XrmSaveEventContextMock<Form.opc_reminder.Main.Information>;

    beforeEach(function () {
        mockContext = GetMockedContext();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display the section to add additional users if the user chooses to notify additional users", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let contextSpy = sandbox.spy(mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(true);
    });
    it("it should hide the section to add additional users if the user chooses not to notify additional users", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let contextSpy = sandbox.spy(mockContext);

        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(false);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(false);
    });
});

describe("when form is saving", () => {
    let mockContext: XrmSaveEventContextMock<Form.opc_reminder.Main.Information>;

    beforeEach(function () {
        mockContext = GetMockedContext()
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display notifications if the user chooses to notify the case owner but no case is related to the reminder", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let contextSpy = sandbox.spy(mockContext);

        mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);

        //We are calling initializeComponents to register the events and to be able to call save() on the entity, which will trigger the onsave event. Onsave is a private method.
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(1);
    });
    it("it should display notifications if the user have not selected someone to be notified", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let contextSpy = sandbox.spy(mockContext);

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
    it("it should cancel the save operation if the user have not selected someone to be notified", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let eventArgsSpy = sandbox.spy(mockContext.getEventArgs());

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
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let eventArgsSpy = sandbox.spy(mockContext.getEventArgs());

        mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().data.entity.save();

        // Assert
        eventArgsSpy.preventDefault.should.have.been.called;
    });
});

describe("when fields value changes", () => {
    let mockContext: XrmSaveEventContextMock<Form.opc_reminder.Main.Information>;

    beforeEach(function () {
        mockContext = GetMockedContext();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display the section to add additional users if the user chooses to notify additional users", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let contextSpy = sandbox.spy(mockContext);

        //We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").fireOnChange();

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(true);
    });
    it("it should hide the section to add additional users if the user chooses not to notify additional users", () => {
        // Arrange
        let service = new ReminderService();
        let form = new Reminder.Forms.MainForm(service);
        let contextSpy = sandbox.spy(mockContext);

        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").setValue(false);

        form.initializeComponents(mockContext);

        // Act
        mockContext.getFormContext().getAttribute("opc_notifyadditionalusers").fireOnChange();

        // Assert
        contextSpy.getFormContext().ui.tabs.get("tab_general").sections.get("section_additionalusers").getVisible().should.equal(false);
    });
});