import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { XrmNavigationMock } from "../../../test/XrmNavigationMock";
import { ExtendedXrmPageBase, ICommandHandler } from "../../interfaces";
import { OpenIssueQuickCreateFromAllegationGridCommandHandler } from "./OpenIssueQuickCreateFromAllegationGridCommandHandler";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { AllegationService } from "../../services/AllegationService";
import { AllegationTypeService } from "../../services/AllegationTypeService";
import { XrmControlMock } from "../../../test/XrmControlMock";
import { XrmGridControlMock } from "../../../test/XrmGridControlMock";
import { XrmGridRowControlMock } from "../../../test/XrmGridRowControlMock";
import { XrmCollectionMock } from "../../../test/XrmCollectionMock";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("OpenIssueQuickCreate from Allegation Grid Command Handler", () => {
    describe("when command is executed", () => {
        let mockExecutionContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
        let mockGrid: XrmGridControlMock<any>;
        let mockNavigation: XrmNavigationMock;
        let handler: ICommandHandler<ExtendedXrmPageBase>;
        let allegationTypeService: AllegationTypeService;
        let allegationService: AllegationService;

        function initializeMock() {
            mockExecutionContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
            mockGrid = new XrmGridControlMock<any>();
            mockNavigation = new XrmNavigationMock();
            allegationTypeService = new AllegationTypeService();
            allegationService = new AllegationService();
            handler = new OpenIssueQuickCreateFromAllegationGridCommandHandler(mockNavigation, allegationTypeService, allegationService);
        }

        beforeEach(() => {
            initializeMock();

            const gridRows = new XrmCollectionMock<XrmGridRowControlMock<any>>(XrmGridRowControlMock, mockExecutionContext);
            const rows: XrmGridRowControlMock<any>[] = [new XrmGridRowControlMock<any>(true), new XrmGridRowControlMock<any>(false)];
            gridRows.collection = rows;

            mockGrid.setRows(gridRows);

            sandbox.stub(gridRows, "get").returns(new XrmGridRowControlMock<any>());

            const controlMock = new XrmControlMock(mockExecutionContext);
            controlMock.setName("subgrid_allegations");
            controlMock.setGrid(mockGrid);

            mockExecutionContext.getFormContext().addControl(controlMock);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("should open Issue Quick Create Form", () => {
            // Arrange
            const openForm = sandbox.spy(mockNavigation, "openForm");

            sandbox.stub(handler, "getAcceptableAllegationRows");

            // Act
            handler.execute(mockExecutionContext.getFormContext());

            // Assert
            openForm.should.have.been.calledOnce;
        });
    });
});
