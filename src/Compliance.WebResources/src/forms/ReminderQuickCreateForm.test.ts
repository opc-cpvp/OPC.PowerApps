import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { XrmSaveEventContextMock } from "../../test/XrmSaveEventContextMock";
import { Reminder } from "./ReminderQuickCreateForm";

const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

const i18next = require("i18next");

describe("Reminder - QuickCreate", () => {
    let form: Reminder.Forms.QuickCreate;
    let mockContext: XrmExecutionContextMock<Form.opc_reminder.QuickCreate.QuickCreate, any>;
    let contextSpy: any;

    beforeEach(() => {
        form = new Reminder.Forms.QuickCreate(i18next);
        mockContext = new XrmSaveEventContextMock<Form.opc_reminder.QuickCreate.QuickCreate>();
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
            mockContext.getContext().setQueryStringParameters({ parentrecordtype: null });

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
            mockContext.getContext().setQueryStringParameters({ parentrecordtype: "opc_complaint" });

            // We are calling initializeComponents to register the events and to be able to call save() on the entity, which will trigger the onsave event. Onsave is a private method.
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
            contextSpy.getFormContext().getControl("opc_notifycaseowner").getNotificationsLength().should.equal(0);
        });

        it("it should display notifications if the user have not selected someone to be notified", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(false);
            mockContext.getFormContext().getAttribute("opc_notifyme").setValue(false);
            mockContext.getFormContext().getAttribute("opc_additionalusers").setValue();
            mockContext.getContext().setQueryStringParameters({ parentrecordtype: "opc_complaint" });
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(3);
        });

        it("it should not display notifications if the user have selected someone to be notified", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
            mockContext.getFormContext().getAttribute("opc_notifyme").setValue(true);
            mockContext.getFormContext().getAttribute("opc_additionalusers").setValue("someone");
            mockContext.getContext().setQueryStringParameters({ parentrecordtype: "opc_complaint" });
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should cancel the save operation if the user have not selected someone to be notified", async () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(false);
            mockContext.getFormContext().getAttribute("opc_notifyme").setValue(false);
            mockContext.getFormContext().getAttribute("opc_additionalusers").setValue();
            mockContext.getContext().setQueryStringParameters({ parentrecordtype: "opc_complaint" });
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            eventArgsSpy.preventDefault.should.have.been.called;
        });

        it("it should cancel the save operation if the user chooses to notify the case owner but no case is related to the reminder", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_notifycaseowner").setValue(true);
            mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
            mockContext.getFormContext().getAttribute("opc_additionalusers").setValue("someone");
            mockContext.getContext().setQueryStringParameters({ parentrecordtype: null });
            form.initializeComponents(mockContext);

            // Act
            mockContext.getFormContext().data.entity.save();

            // Assert
            eventArgsSpy.preventDefault.should.have.been.called;
        });
    });
});
