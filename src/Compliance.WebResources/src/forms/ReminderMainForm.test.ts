import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Reminder } from './ReminderMainForm';
import { ReminderService } from '../services/ReminderService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("when initialized", () => {

    //it("it should call load reminder", () => {
    //    // Arrange
    //    let service = new ReminderService();
    //    let getReminder = sinon.fake.returns(null)

    //    sinon.replace(service, "getReminder", getReminder);
    //    let sut = new Reminder.Forms.MainForm(service);

    //    let mockContext = new XrmExecutionContextMock<Form.opc_reminder.Main.Information, any>();
    //    let contextSpy = sinon.spy(mockContext);

    //    // Act
    //    sut.initializeComponents(mockContext);

    //    // Assert
    //    getReminder.should.have.been.called;
    //    contextSpy.getFormContext.should.have.been.called;
    //});

    // WHAT ARE THE TESTS I SHOULD CREATE???
    /*
     * If Reason is Empty when save => should display a notification
     * If Reason is Empty when save => should cancel save
     * If Date is Empty when save => should display a notification
     * If Date is Empty when save => should cancel save
     * If Notify Case Owner is True & contains no case number => should display a notification
     * If Notify Case Owner is True & contains no case number => should cancel save
     * If No Notify is selected => should display a notification
     * If No Notify is selected => should cancel save
     * Should there be tests for flows??
     */

});
