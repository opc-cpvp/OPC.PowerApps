import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { XrmNavigationMock } from "../../../test/XrmNavigationMock";
import { ICommandHandler } from "../../interfaces";
import { OpenEntityDialogCommandHandler } from "./OpenEntityDialogCommandHandler";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("OpenEntityDialog Command Handler", () => {
    describe("when command is executed", () => {
        let mockExecutionContext: XrmExecutionContextMock<Form.opc_accessrequestdocument.Main.Information, any>;
        let mockNavigation: XrmNavigationMock;
        let handler: ICommandHandler<Xrm.ExecutionContext<any, any>>;

        beforeEach(() => {
            mockExecutionContext = new XrmExecutionContextMock<Form.opc_accessrequestdocument.Main.Information, any>();
            mockNavigation = new XrmNavigationMock();
            handler = new OpenEntityDialogCommandHandler(mockNavigation);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should open the entity dialog", () => {
            // Arrange
            const navigateTo = sandbox.spy(mockNavigation, "navigateTo");

            // Act
            handler.execute(mockExecutionContext);

            // Assert
            navigateTo.should.have.been.calledOnce;
        });

        it("it should ONLY open the entity dialog if another one isn't present", () => {
            // Arrange
            const navigateTo = sandbox.spy(mockNavigation, "navigateTo");

            // Act
            handler.execute(mockExecutionContext);
            handler.execute(mockExecutionContext);

            // Assert
            navigateTo.should.have.been.calledOnce;
        });
    });
});
