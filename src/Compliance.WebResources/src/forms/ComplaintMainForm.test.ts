import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmLookupAttributeMock } from '../../test/XrmLookupAttributeMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from '.././services/ComplaintService';
import { ContactService } from '../services/ContactService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);
var sandbox = sinon.createSandbox();


describe("Complaint", () => {
    // TODO: Mock GetEventSource to make tests easier     
    let contacts: Xrm.EntityReference<"contact">[];
    let complaintService: ComplaintService;
    let contactService: ContactService;
    let lookupAttribute: XrmLookupAttributeMock;
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
    let contextSpy: any;
    let sut: Complaint.Forms.MainForm;

    function initializeMock() {
        complaintService = new ComplaintService();
        contactService = new ContactService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        contextSpy = sandbox.spy(mockContext);
        sut = new Complaint.Forms.MainForm(complaintService, contactService);
        lookupAttribute = new XrmLookupAttributeMock();
        lookupAttribute.setValue(contacts);
    }

    describe("when initialized", () => {

        // Initialize the form for every test
        beforeEach(initializeMock);

        afterEach(function () {
            sandbox.restore();
        });


        it("it should have notifications if a duplicate contacts exists", async () => {
            // Arrange
            let getComplaint = sandbox.fake.returns(null);
            sandbox.stub(contactService, nameof(contactService.getDuplicateStatus)).resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Duplicatefound });
            let getEventSource = sandbox.fake.returns(lookupAttribute);

            sandbox.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sandbox.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            lookupAttribute.setValue(contacts);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            // Any better way?
            await contactService.getDuplicateStatus("fakeId").then(() =>
                contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(2)
            );             
        });

        it("it should not have notifications if no contacts have a duplication status", () => {
            // Arrange
            let getComplaint = sandbox.fake.returns(null)
            let getDuplicateStatus = sandbox.stub(contactService, nameof(contactService.getDuplicateStatus)).resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.None });
            let getEventSource = sandbox.fake.returns(lookupAttribute);

            sandbox.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sandbox.replace(contactService, nameof(contactService.getDuplicateStatus), getDuplicateStatus);
            sandbox.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [
                {
                    id: "0C0F0F9E-6E8E-4EBA-A58E-160C4D9CE970",
                    name: "Alexis Fortin",
                    entityType: "contact"
                }
            ];

            lookupAttribute.setValue(contacts);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not have notifications if no contacts exist", () => {
            // Arrange
            let getComplaint = sandbox.fake.returns(null)
            let getDuplicateStatus = sandbox.stub(contactService, nameof(contactService.getDuplicateStatus)).resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Potentialduplicate });
            let getEventSource = sandbox.fake.returns(lookupAttribute);

            sandbox.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sandbox.replace(contactService, nameof(contactService.getDuplicateStatus), getDuplicateStatus);
            sandbox.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [];

            lookupAttribute.setValue(contacts);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });

    describe("Contact on Change", () => {

        // Initialize the mocks for all tests
        beforeEach(initializeMock);

        afterEach(function () {
            sandbox.restore();
        });

        it("it should remove all duplication notifications if no contacts exist", () => {
            // Arrange
            let getComplaint = sandbox.fake.returns(null)
            let getContactPotentialDup = sandbox.stub(contactService, nameof(contactService.getDuplicateStatus)).resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Potentialduplicate });
            let getEventSource = sandbox.fake.returns(lookupAttribute);

            sandbox.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sandbox.replace(contactService, nameof(contactService.getContact), getContactPotentialDup);
            sandbox.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [];
            lookupAttribute.setValue(contacts);

            // Initialize the from, then set test notifications that will be removed when acting
            sut.initializeComponents(mockContext);
            mockContext.getFormContext().ui.setFormNotification("Test", "WARNING", "duplicateNotificationId - Representative");
            mockContext.getFormContext().ui.setFormNotification("Test", "WARNING", "duplicateNotificationId - Complainant");

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();

            // Assert
            getContactPotentialDup.should.not.have.been.called;

            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should remove all duplication notifications if contacts don't have duplication results", () => {
            // Arrange
            let getComplaint = sandbox.fake.returns(null)
            let getContactPotentialDup = sandbox.stub(contactService, nameof(contactService.getDuplicateStatus)).resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.None });
            let getEventSource = sandbox.fake.returns(lookupAttribute);

            sandbox.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sandbox.replace(contactService, nameof(contactService.getContact), getContactPotentialDup);
            sandbox.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [
                {
                    id: "700E2913-51B5-44B0-A5E1-EF48487C5DE3",
                    name: "Bruce Springsteen",
                    entityType: "contact"
                }
            ];
            lookupAttribute.setValue(contacts);

            // Initialize the form, then set test notifications that will be removed when acting
            sut.initializeComponents(mockContext);
            mockContext.getFormContext().ui.setFormNotification("Test", "WARNING", "duplicateNotificationId - Representative");
            mockContext.getFormContext().ui.setFormNotification("Test", "WARNING", "duplicateNotificationId - Complainant");

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();

            // Assert
            getContactPotentialDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
