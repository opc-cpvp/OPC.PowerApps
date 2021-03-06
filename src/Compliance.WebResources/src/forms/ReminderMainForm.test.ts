﻿import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { XrmSaveEventContextMock } from "../../test/XrmSaveEventContextMock";
import { Reminder } from "./ReminderMainForm";
import { IReminderService } from "../interfaces";
import { ReminderService } from "../services/ReminderService";
import i18next from "i18next";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Reminder - Main", () => {
    let form: Reminder.Forms.MainForm;
    let mockContext: XrmExecutionContextMock<Form.opc_reminder.Main.Information, any>;
    let reminderService: IReminderService;
    let contextSpy: any;

    beforeEach(() => {
        form = new Reminder.Forms.MainForm(i18next, (reminderService = new ReminderService()));
        mockContext = new XrmSaveEventContextMock<Form.opc_reminder.Main.Information>();
        contextSpy = sandbox.spy(mockContext);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("when form is saving", () => {
        let eventArgsSpy: any;

        beforeEach(() => {
            eventArgsSpy = sandbox.spy(mockContext.getEventArgs());
        });

        it("it should display notifications if the user chooses to notify the case owner while no case is related to the reminder", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
            mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);

            // We are calling initializeComponents to register the events and to be able to call save() on the entity, which will trigger the onsave event. Onsave is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
            contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(1);
        });

        it("it should not display notifications if the user chooses to notify the case owner while a case is related to the reminder", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
            mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");

            // We are calling initializeComponents to register the events and to be able to call save() on the entity, which will trigger the onsave event. Onsave is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
            contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(0);
        });

        it("it should display notifications if the user have not selected someone to be notified", async () => {
            // Arrange
            const hasAdditionalUsersToNotifyStub = sandbox.stub(reminderService, "hasAdditionalUsersToNotify").resolves(false);
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(false);
            mockContext.getFormContext().getAttribute("opc_notifyme").setValue(false);
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            await Promise.all(hasAdditionalUsersToNotifyStub.returnValues);
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        });

        it("it should not display notifications if the user have selected someone to be notified", async () => {
            // Arrange
            const hasAdditionalUsersToNotifyStub = sandbox.stub(reminderService, "hasAdditionalUsersToNotify").resolves(true);
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
            mockContext.getFormContext().getAttribute("opc_notifyme").setValue(true);
            mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            await Promise.all(hasAdditionalUsersToNotifyStub.returnValues);
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should cancel the save operation if the user have not selected someone to be notified", async () => {
            // Arrange
            const hasAdditionalUsersToNotifyStub = sandbox.stub(reminderService, "hasAdditionalUsersToNotify").resolves(false);
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(false);
            mockContext.getFormContext().getAttribute("opc_notifyme").setValue(false);
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            await Promise.all(hasAdditionalUsersToNotifyStub.returnValues);
            eventArgsSpy.preventDefault.should.have.been.called;
        });

        it("it should cancel the save operation if the user chooses to notify the case owner but no case is related to the reminder", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
            mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            eventArgsSpy.preventDefault.should.have.been.called;
        });
    });
});
