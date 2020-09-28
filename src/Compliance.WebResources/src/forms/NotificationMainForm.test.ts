import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Notification } from "./NotificationMainForm";
import { NotificationService } from "../services/NotificationService";
import { XrmSaveEventContextMock } from "../../test/XrmSaveEventContextMock";
import { XrmContextMock } from "../../test/XrmContextMock";
import { WindowHelper } from "../helpers/WindowHelper";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

function ReplaceFunctions(
    service: NotificationService,
    mockContext: XrmExecutionContextMock<Form.opc_notification.Main.Information, any>
): void {
    const markAsRead = sandbox.spy(() => {
        const attrStatusCode = mockContext.getFormContext().getAttribute("statuscode");
        attrStatusCode.setValue(opc_notification_statuscode.Read);
    });

    sandbox.replace(service, "markAsRead", markAsRead);
}
describe("Notification", () => {
    describe("when form is loading", () => {
        let service: NotificationService;
        let form: Notification.Forms.MainForm;
        let mockExecutionContext: XrmExecutionContextMock<Form.opc_notification.Main.Information, any>;
        let mockContext: XrmContextMock;

        let executionContextSpy: any;
        let serviceSpy: any;
        let replaceLocation: any;

        beforeEach(() => {
            service = new NotificationService();
            mockExecutionContext = new XrmSaveEventContextMock<Form.opc_notification.Main.Information>();
            mockContext = new XrmContextMock();
            form = new Notification.Forms.MainForm(service, mockContext);
            executionContextSpy = sandbox.spy(mockExecutionContext);
            serviceSpy = sandbox.spy(service);

            replaceLocation = sandbox.stub(WindowHelper, "replaceLocation");
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should display Complaint field if it is related to a Complaint", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
            mockExecutionContext.getFormContext().getControl("opc_complaintid").setVisible(false);
            ReplaceFunctions(service, mockExecutionContext);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            executionContextSpy.getFormContext().getControl("opc_complaintid").getVisible().should.equal(true);
        });

        it("it should not display Complaint field if it is not related to a Complaint", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
            mockExecutionContext.getFormContext().getControl("opc_complaintid").setVisible(false);
            ReplaceFunctions(service, mockExecutionContext);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            executionContextSpy.getFormContext().getControl("opc_complaintid").getVisible().should.equal(false);
        });

        it("it should mark the Notification as Read", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("statecode").setValue(opc_notification_statecode.Active);
            mockExecutionContext.getFormContext().getAttribute("statuscode").setValue(opc_notification_statuscode.Unread);
            ReplaceFunctions(service, mockExecutionContext);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            serviceSpy.markAsRead.should.have.been.called;
        });

        it("it should redirect user to Complaint page if it is related to a Complaint", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_complaintid").setValue("PA-000000");
            ReplaceFunctions(service, mockExecutionContext);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            replaceLocation.should.have.been.called;
        });

        it("it should not redirect user to Complaint page if it is not related to a Complaint", () => {
            // Arrange
            mockExecutionContext.getFormContext().getAttribute("opc_complaintid").setValue(null);
            ReplaceFunctions(service, mockExecutionContext);

            // Act
            form.initializeComponents(mockExecutionContext);

            // Assert
            replaceLocation.should.not.have.been.called;
        });
    });
});
