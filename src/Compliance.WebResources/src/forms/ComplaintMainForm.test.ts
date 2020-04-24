import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmSaveEventContextMock } from '../../test/XrmSaveEventContextMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from '.././services/ComplaintService';
import { ContactService } from '../services/ContactService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);


describe("Complaint", () => {  

    let complaintService: ComplaintService;
    let contactService: ContactService;
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
    let contextSpy: any;
    let sut: Complaint.Forms.MainForm;

    function initializeMock() {
        complaintService = new ComplaintService();
        contactService = new ContactService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        contextSpy = sandbox.spy(mockContext);
        sut = new Complaint.Forms.MainForm(complaintService, contactService);
        mockContext.getFormContext().getAttribute("opc_complainant").setValue([]);
        let getComplaint = sandbox.fake.returns(null);
        sandbox.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);

        // Run the Initialize first so that the form doesn't set notifications yet without a contact,
        // testing will be done when firing the on change
        sut.initializeComponents(mockContext);
    }

    describe("Contact on change", () => {

        // Initialize the form for every test
        beforeEach(() => initializeMock());

        afterEach(function () {
            sandbox.restore();
        });

        it("it should have notifications if a duplicate contacts exists", async () => {
            // Arrange
            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getDuplicateStatus))
                    .resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Duplicatefound });

            const contacts = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];
            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contacts);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();

            // Assert
            await getContactDup;
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        });

        it("it should not have a notification if a contact does not have a duplication status", async () => {
            // Arrange
            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getDuplicateStatus))
                    .resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.None });

            const contacts = [
                {
                    id: "0C0F0F9E-6E8E-4EBA-A58E-160C4D9CE970",
                    name: "Alexis Fortin",
                    entityType: "contact"
                }
            ];

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contacts);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();

            // Assert
            getContactDup.should.have.been.called;
            await getContactDup;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not have notifications if no contacts exist", async () => {
            // Arrange
            let getDuplicateDup = sandbox.stub(contactService, nameof(contactService.getDuplicateStatus)).resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Potentialduplicate });

            // No contact
            mockContext.getFormContext().getAttribute("opc_complainant").setValue([]);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            getDuplicateDup.should.not.have.been.called;
            await getDuplicateDup;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should have multiple notifications if multiple duplicate contacts exist", async () => {
            // Arrange
            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getDuplicateStatus))
                    .resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Duplicatefound });

            const contacts = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contacts);
            mockContext.getFormContext().getAttribute("opc_complainantrep").setValue(contacts);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();

            // Assert
            // Any better way?
            getContactDup.should.have.been.called;
            await getContactDup;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(2);
        });

        it("it should remove exsiting notifications when no duplicate status is found", async () => {
            // Arrange
            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getDuplicateStatus))
                    .resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.None });

            const contacts = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contacts);
            mockContext.getFormContext().getAttribute("opc_complainantrep").setValue(contacts);


            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "duplicateNotificationId - Complainant");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "duplicateNotificationId - Representative");

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();

            // Assert
            // Any better way?
            getContactDup.should.have.been.called;
            await getContactDup;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should remove exsiting notifications when no contacts are found", async () => {
            // Arrange
            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getDuplicateStatus))
                    .resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.None });

            // No contact
            mockContext.getFormContext().getAttribute("opc_complainant").setValue([]);

            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "duplicateNotificationId - Complainant");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "duplicateNotificationId - Representative");

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();

            // Assert
            // Any better way?
            getContactDup.should.not.have.been.called;
            await getContactDup;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
