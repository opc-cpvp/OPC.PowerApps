import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Notification } from './NotificationMainForm';
import { NotificationService } from '../services/NotificationService';
import { XrmNavigationMock } from '../../test/XrmNavigationMock';
import { XrmSaveEventContextMock } from '../../test/XrmSaveEventContextMock';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

function ReplaceFunctions(service: NotificationService, mockContext: XrmExecutionContextMock<Form.opc_notification.Main.Information, any>): void {
    let markAsRead = sandbox.fake(function () {
        let attrStatusCode = mockContext.getFormContext().getAttribute("statuscode");
        //attrStatusCode.setName("statuscode");
        attrStatusCode.setValue(opc_notification_statuscode.Read);
    });

    sandbox.replace(service, "markAsRead", markAsRead);
}

describe("when form is loading", () => {
    let service: NotificationService;
    let form: Notification.Forms.MainForm;
    let mockContext: XrmExecutionContextMock<Form.opc_notification.Main.Information, any>;
    let mockNavigation: XrmNavigationMock;
    let contextSpy: any;
    let serviceSpy: any;
    let navigationSpy: any;

    beforeEach(function () {
        service = new NotificationService();
        mockContext = new XrmSaveEventContextMock<Form.opc_notification.Main.Information>();
        mockNavigation = new XrmNavigationMock();
        form = new Notification.Forms.MainForm(service, mockNavigation);
        contextSpy = sandbox.spy(mockContext);
        serviceSpy = sandbox.spy(service);
        navigationSpy = sandbox.spy(mockNavigation);
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("it should display Complaint field if it is related to a Complaint", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
        mockContext.getFormContext().getControl("opc_complaintid").setVisible(false);
        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().getControl("opc_complaintid").getVisible().should.equal(true);
    });

    it("it should not display Complaint field if it is not related to a Complaint", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
        mockContext.getFormContext().getControl("opc_complaintid").setVisible(false);
        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().getControl("opc_complaintid").getVisible().should.equal(false);
    });

    it("it should call markAsRead", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("statecode").setValue(opc_notification_statecode.Active);
        mockContext.getFormContext().getAttribute("statuscode").setValue(opc_notification_statuscode.Unread);
        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        serviceSpy.markAsRead.should.have.been.called;
    });

    it("it should change the status reason from unread to read", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("statecode").setValue(opc_notification_statecode.Active);
        mockContext.getFormContext().getAttribute("statuscode").setValue(opc_notification_statuscode.Unread);
        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        contextSpy.getFormContext().getAttribute("statuscode").getValue().should.equal(opc_notification_statuscode.Read);
    });

    it("it should redirect user to Complaint page if it is related to a Complaint", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        navigationSpy.openForm.should.have.been.called;
    });

    it("it should not redirect user to Complaint page if it is not related to a Complaint", () => {
        // Arrange
        mockContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
        ReplaceFunctions(service, mockContext);

        // Act
        form.initializeComponents(mockContext);

        // Assert
        navigationSpy.openForm.should.not.have.been.called;
    });
});