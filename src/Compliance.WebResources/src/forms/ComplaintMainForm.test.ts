import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from '.././services/ComplaintService';
import { ContactService } from '../services/ContactService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("Complaint", () => {
    describe("when initialized", () => {

        it("it should call load complaint", () => {
            // Arrange
            let complaintService = new ComplaintService();
            let contactService = new ContactService();
            let getComplaint = sinon.fake.returns(null)

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getComplaint);

            let sut = new Complaint.Forms.MainForm(complaintService, contactService);

            let mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
            let contextSpy = sinon.spy(mockContext);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
        });

    });
});
