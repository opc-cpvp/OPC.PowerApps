import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Notification } from './NotificationMainForm';
import { NotificationService } from '../services/NotificationService';
import { XrmNavigationMock } from '../../test/XrmNavigationMock';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

function ReplaceFunctions(service: NotificationService, mockContext: XrmExecutionContextMock<Form.opc_notification.Main.Information, any>): void {

    let markAsRead = sandbox.fake(function () {
        let attrStatusCode = mockContext.getFormContext().getAttribute("statuscode");
        attrStatusCode.setName("statuscode");
        attrStatusCode.setValue(opc_notification_statuscode.Read);
    });

    sandbox.replace(service, "markAsRead", markAsRead);
}

describe("when form is loading", () => {
    let mockContext: XrmExecutionContextMock<Form.opc_notification.Main.Information, any>;

    beforeEach(function () {
        mockContext = new XrmExecutionContextMock<Form.opc_notification.Main.Information, any>();

        mockContext.getFormContext().getAttribute("statecode").setValue(opc_notification_statecode.Active);
        mockContext.getFormContext().getAttribute("statuscode").setValue(opc_notification_statuscode.Unread);
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
        mockContext.getFormContext().getControl("opc_complaintid").setVisible(false);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display Complaint field if it is related to a Complaint", () => {
        // Arrange
        let service = new NotificationService();
        let navigationMock = new XrmNavigationMock();
        let form = new Notification.Forms.MainForm(service, navigationMock);
        let contextSpy = sandbox.spy(mockContext);

        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().getControl("opc_complaintid").getVisible().should.equal(true);
    });

    it("it should call markAsRead", () => {
        // Arrange
        let service = new NotificationService();
        let navigationMock = new XrmNavigationMock();
        let form = new Notification.Forms.MainForm(service, navigationMock);
        let serviceSpy = sandbox.spy(service);

        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        serviceSpy.markAsRead.should.have.been.called;
    });

    it("it should change the status reason from unread to read", () => {
        // Arrange
        let service = new NotificationService();
        let navigationMock = new XrmNavigationMock();
        let form = new Notification.Forms.MainForm(service, navigationMock);
        let contextSpy = sandbox.spy(mockContext);

        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().getAttribute("statuscode").getValue().should.equal(opc_notification_statuscode.Read);
    });

    it("it should redirect user to Complaint page if it is related to a Complaint", () => {
        // Arrange
        let service = new NotificationService();
        let navigationMock = new XrmNavigationMock();
        let form = new Notification.Forms.MainForm(service, navigationMock);
        let navigationSpy = sandbox.spy(navigationMock);

        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        navigationSpy.openForm.should.have.been.called;
    });
});