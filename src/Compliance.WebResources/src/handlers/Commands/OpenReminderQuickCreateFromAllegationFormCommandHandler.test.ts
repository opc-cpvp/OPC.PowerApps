import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { XrmNavigationMock } from "../../../test/XrmNavigationMock";
import { ExtendedXrmPageBase, ICommandHandler } from "../../interfaces";
import { OpenReminderQuickCreateFromAllegationFormCommandHandler } from "./OpenReminderQuickCreateFromAllegationFormCommandHandler";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { ComplaintService } from "../../services/ComplaintService";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe.only("OpenReminderQuickCreate from Allegation Form Command Handler", () => {
    describe("when command is executed", () => {
        let mockExecutionContext: XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>;
        let mockNavigation: XrmNavigationMock;
        let handler: ICommandHandler<ExtendedXrmPageBase>;
        let complaintService: ComplaintService;

        beforeEach(() => {
            mockExecutionContext = new XrmExecutionContextMock<Form.opc_allegation.Main.Information, any>();
            mockNavigation = new XrmNavigationMock();
            complaintService = new ComplaintService();
            handler = new OpenReminderQuickCreateFromAllegationFormCommandHandler(mockNavigation, complaintService);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should open the 'Reminder' Quick Create form", async () => {
            // Arrange
            const openForm = sandbox.spy(mockNavigation, "openForm");
            const getComplaint = sandbox.stub(complaintService, "getComplaint").resolves([]);

            mockExecutionContext
                .getFormContext()
                .getAttribute("opc_complaintid")
                .setValue([{ name: "complaintid", id: "test" }]);

            // Act
            handler.execute(mockExecutionContext.getFormContext());

            // Assert
            await Promise.resolve(getComplaint);
            openForm.should.have.been.calledOnce;
        });

        it("");
    });
});
