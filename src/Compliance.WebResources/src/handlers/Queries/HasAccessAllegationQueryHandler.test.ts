import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { HasAccessAllegationQueryHandler } from "./HasAccessAllegationQueryHandler";
import { AllegationType } from "../../enums";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { ComplaintService } from "../../services/ComplaintService";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Has Access Allegation Handler", () => {
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
    let complaintService: ComplaintService;
    let handler: HasAccessAllegationQueryHandler;

    function initializeMock() {
        complaintService = new ComplaintService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        handler = new HasAccessAllegationQueryHandler(complaintService);
    }

    // Initialize the form for every test
    beforeEach(() => {
        initializeMock();
        mockContext.getFormContext().data.entity.setId("");
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("when executing", () => {
        const complaint: any = { opc_complaint_allegations_complaint: [] };
        const accessAllegation = { opc_allegationtypeid_guid: AllegationType.Access };
        const notAccessAllegation = { opc_allegationtypeid_guid: "notAccess" };

        beforeEach(() => {
            complaint.opc_complaint_allegations_complaint = [];
        });

        it("it should return true if a complaint has an access allegation", async () => {
            // Arrange
            complaint.opc_complaint_allegations_complaint.push(accessAllegation);
            sandbox.stub(complaintService, "getComplaintWithRelationships").returns(complaint);

            // Act
            const hasAccessAllegation = await handler.executeAsync(null, mockContext.getFormContext());

            // Assert
            hasAccessAllegation.should.equal(true);
        });

        it("it should return false if a complaint doesn't have an access allegation", async () => {
            // Arrange
            complaint.opc_complaint_allegations_complaint.push(notAccessAllegation);
            sandbox.stub(complaintService, "getComplaintWithRelationships").returns(complaint);

            // Act
            const hasAccessAllegation = await handler.executeAsync(null, mockContext.getFormContext());

            // Assert
            hasAccessAllegation.should.equal(false);
        });

        it("it should return false if a complaint doesn't have any allegations", async () => {
            // Arrange
            sandbox.stub(complaintService, "getComplaintWithRelationships").returns(complaint);

            // Act
            const hasAccessAllegation = await handler.executeAsync(null, mockContext.getFormContext());

            // Assert
            hasAccessAllegation.should.equal(false);
        });
    });
});
