import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { XrmNavigationMock } from "../../../test/XrmNavigationMock";
import { ExtendedXrmPageBase, ICommandHandler } from "../../interfaces";
import { OpenIssueQuickCreateFromAllegationFormCommandHandler } from "./OpenIssueQuickCreateFromAllegationFormCommandHandler";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { AllegationService } from "../../services/AllegationService";
import { AllegationTypeService } from "../../services/AllegationTypeService";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("OpenIssueQuickCreate from Allegation Command Handler", () => {
    describe("when command is executed", () => {
        let mockExecutionContext: XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>;
        let mockNavigation: XrmNavigationMock;
        let handler: ICommandHandler<ExtendedXrmPageBase>;
        let allegationTypeService: AllegationTypeService;
        let allegationService: AllegationService;

        function initializeMock() {
            mockExecutionContext = new XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>();
            mockNavigation = new XrmNavigationMock();
            allegationTypeService = new AllegationTypeService();
            allegationService = new AllegationService();
            handler = new OpenIssueQuickCreateFromAllegationFormCommandHandler(mockNavigation, allegationTypeService, allegationService);

            mockExecutionContext
                .getFormContext()
                .getAttribute("opc_allegationtypeid")
                .setValue([{ name: "opc_allegationtypeid", id: "test" }]);

            mockExecutionContext
                .getFormContext()
                .getAttribute("opc_complaintid")
                .setValue([{ name: "opc_complaintid", id: "test" }]);
        }

        beforeEach(() => {
            initializeMock();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("should open Issue Quick Create Form", async () => {
            // Arrange
            const openForm = sandbox.spy(mockNavigation, "openForm");
            const getAllegationType = sandbox.stub(allegationTypeService, "getAllegationType").resolves([]);

            // Act
            handler.execute(mockExecutionContext.getFormContext());
            await Promise.resolve(getAllegationType);

            // Assert
            openForm.should.have.been.calledOnce;
        });
    });
});
