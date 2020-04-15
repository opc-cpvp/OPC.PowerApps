import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmLookupAttributeMock } from '../../test/XrmLookupAttributeMock';
import { XrmUIModuleMock } from '../../test/XrmUIModuleMock';
import { XrmUIProcessModuleMock } from '../../test/XrmUIProcessModuleMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from '.././services/ComplaintService';
import { ContactService } from '../services/ContactService';
import { id } from 'inversify';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);


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
        contextSpy = sinon.spy(mockContext);
        sut = new Complaint.Forms.MainForm(complaintService, contactService);
        lookupAttribute = new XrmLookupAttributeMock();
        lookupAttribute.setValue(contacts);
    }

    describe("when initialized", () => {

        // Initialize the form for every test
        beforeEach(initializeMock);

        // SAMPLE TEST
        it("it should call load complaint", () => {
            // Arrange
            let getComplaint = sinon.fake.returns(null)
            let getContact = sinon.stub(contactService, nameof(contactService.getContactDuplicateStatus)).callsArgWith(1, opc_duplicatedetectionresult.None)
            let getEventSource = sinon.fake.returns(lookupAttribute);

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getContact);
            sinon.replace(mockContext, `${nameof(mockContext.getEventSource)}`, getEventSource);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
        });

        it("it should have notifications if a duplicate contacts exists", () => {
            // Arrange
            let getComplaint = sinon.fake.returns(null)
            let getContact = sinon.stub(contactService, nameof(contactService.getContactDuplicateStatus)).callsArgWith(1, opc_duplicatedetectionresult.Duplicatefound)
            let getEventSource = sinon.fake.returns(lookupAttribute);

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getContact);
            sinon.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [
                {
                    id: "asd",
                    name: "test",
                    entityType: "contact"
                }
            ];

            lookupAttribute.setValue(contacts);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(2);
        });

        it("it should not have notifications if no contacts have a duplication status", () => {
            // Arrange
            let getComplaint = sinon.fake.returns(null)
            let getContact = sinon.stub(contactService, nameof(contactService.getContactDuplicateStatus)).callsArgWith(1, opc_duplicatedetectionresult.None)
            let getEventSource = sinon.fake.returns(lookupAttribute);

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getContact);
            sinon.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [
                {
                    id: "asd",
                    name: "test",
                    entityType: "contact"
                }
            ];

            lookupAttribute.setValue(contacts);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not have notifications if no contacts exist", () => {
            // Arrange
            let getComplaint = sinon.fake.returns(null)
            let getContact = sinon.stub(contactService, nameof(contactService.getContactDuplicateStatus)).callsArgWith(1, opc_duplicatedetectionresult.Potentialduplicate)
            let getEventSource = sinon.fake.returns(lookupAttribute);

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getContact);
            sinon.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [];

            lookupAttribute.setValue(contacts);

            // Act
            sut.initializeComponents(mockContext);

            // Assert
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });

    describe("Contact on Change", () => {

        // Initialize the mocks for all tests
        beforeEach(initializeMock);

        it("it should remove all duplication notifications if no contacts exist", () => {
            // Arrange
            let getComplaint = sinon.fake.returns(null)
            let getContactPotentialDup = sinon.stub(contactService, nameof(contactService.getContactDuplicateStatus)).callsArgWith(1, opc_duplicatedetectionresult.Potentialduplicate);
            let getEventSource = sinon.fake.returns(lookupAttribute);

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getContactPotentialDup);
            sinon.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

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
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should remove all duplication notifications if contacts don't have duplication results", () => {
            // Arrange
            let getComplaint = sinon.fake.returns(null)
            let getContactPotentialDup = sinon.stub(contactService, nameof(contactService.getContactDuplicateStatus)).callsArgWith(1, opc_duplicatedetectionresult.None);
            let getEventSource = sinon.fake.returns(lookupAttribute);

            sinon.replace(complaintService, nameof(complaintService.getComplaint), getComplaint);
            sinon.replace(contactService, nameof(contactService.getContact), getContactPotentialDup);
            sinon.replace(mockContext, nameof(mockContext.getEventSource), getEventSource);

            contacts = [
                {
                    id: "asd",
                    name: "test",
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
            getComplaint.should.have.been.called;
            contextSpy.getFormContext.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
