import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { HasAcceptableAllegationQueryHandler } from "./HasAcceptableAllegationQueryHandler";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { ComplaintService } from "../../services/ComplaintService";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Has Acceptable Allegation Handler", () => {
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
    let complaintService: ComplaintService;

    let handler: HasAcceptableAllegationQueryHandler;

    function initializeMock() {
        complaintService = new ComplaintService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        handler = new HasAcceptableAllegationQueryHandler(complaintService);
    }

    // Initialize the form for every test
    beforeEach(() => {
        initializeMock();
        mockContext.getFormContext().data.entity.setEntityName("opc_complaint");
        mockContext.getFormContext().data.entity.setId("");
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("when executing", () => {
        const allegationsWithDisposition: any = {
            opc_complaint_allegations_complaint: [
                {
                    opc_allegationid: "acceptable",
                    opc_disposition: opc_allegationdisposition.Acceptable
                },
                {
                    opc_allegationid: "notAcceptable",
                    opc_disposition: opc_allegationdisposition.Unacceptable
                }
            ]
        };

        it("it should return true if a selected item has Acceptable Disposition", async () => {
            // Arrange
            sandbox.stub(complaintService, "getComplaintWithRelationships").returns(allegationsWithDisposition);

            // Act
            const hasSelectedAcceptableAllegation = await handler.executeAsync(null, mockContext.getFormContext(), ["acceptable"]);

            // Assert
            hasSelectedAcceptableAllegation.should.equal(true);
        });

        it("it should return false if no selected items have Acceptable Disposition", async () => {
            // Arrange
            sandbox.stub(complaintService, "getComplaintWithRelationships").returns(allegationsWithDisposition);

            // Act
            const hasSelectedAcceptableAllegation = await handler.executeAsync(null, mockContext.getFormContext(), ["notAcceptable"]);

            // Assert
            hasSelectedAcceptableAllegation.should.equal(false);
        });

        it("it should return false if no items are selected", async () => {
            // Arrange
            sandbox.stub(complaintService, "getComplaintWithRelationships").returns(allegationsWithDisposition);

            // Act
            const hasSelectedAcceptableAllegation = await handler.executeAsync(null, mockContext.getFormContext(), []);

            // Assert
            hasSelectedAcceptableAllegation.should.equal(false);
        });
    });
});
