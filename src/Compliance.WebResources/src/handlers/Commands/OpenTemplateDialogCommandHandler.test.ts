import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { XrmNavigationMock } from "../../../test/XrmNavigationMock";
import { ICommandHandler } from "../../interfaces";
import { OpenTemplateDialogCommandHandler } from "./OpenTemplateDialogCommandHandler";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("OpenTemplateDialog Command Handler", () => {
    describe("when command is executed", () => {
        let mockExecutionContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
        let mockNavigation: XrmNavigationMock;
        let handler: ICommandHandler;
        let controlSpy: any;

        beforeEach(() => {
            mockExecutionContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
            mockNavigation = new XrmNavigationMock();
            handler = new OpenTemplateDialogCommandHandler(mockNavigation);
            controlSpy = sandbox.spy(mockExecutionContext.getFormContext().getControl("subgrid_documents"));
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should set focus on the documents subgrid", () => {
            // Arrange
            // Act
            handler.execute(mockExecutionContext.getFormContext());

            // Assert
            controlSpy.setFocus.should.have.been.calledOnce;
        });
        it("it should open the template dialog", () => {
            // Arrange
            const navigateTo = sandbox.spy(mockNavigation, "navigateTo");

            // Act
            handler.execute(mockExecutionContext.getFormContext());

            // Assert
            navigateTo.should.have.been.calledOnce;
        });
        it("it should refresh the documents subgrid when the template dialog is closed", async () => {
            // Arrange
            const navigateTo = sandbox.stub(mockNavigation, "navigateTo").resolves();

            // Act
            handler.execute(mockExecutionContext.getFormContext());
            await Promise.all(navigateTo.returnValues);

            // Assert
            controlSpy.refresh.should.have.been.calledOnce;
        });
    });
});
