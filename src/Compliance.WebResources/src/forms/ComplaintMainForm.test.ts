import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from '.././services/ComplaintService';
import { ContactService } from '../services/ContactService';
import { XrmControlMock } from '../../test/XrmControlMock';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);
var sandbox = sinon.createSandbox();


describe("Complaint", () => {

    let contactService: ContactService;
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
    let contextSpy: any;
    let sut: Complaint.Forms.MainForm;

    function initializeMock() {
        contactService = new ContactService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        contextSpy = sandbox.spy(mockContext);
        sut = new Complaint.Forms.MainForm(contactService);

        // Run the Initialize first so that the form doesn't set notifications yet without a contact,
        // testing will be done when firing the on change
        sut.initializeComponents(mockContext);
    }


    // Initialize the form for every test
    beforeEach(() => {

        initializeMock()

    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("Contact on change", () => {

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

    describe("when recommending to registrar", () => {

        beforeEach(() => {
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.Yes);
        });

        describe("and recommending to ER", () => {
            it("acceptance date should be required", () => {
                // Arrange
                const acceptancedateAttributeSpy = sandbox.spy(mockContext.getFormContext().getAttribute("opc_acceptancedate"));
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoEarlyResolution);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateAttributeSpy.getRequiredLevel().should.equal("required");
            });
        });

        describe("and recommending to investigation", () => {

            it("acceptance date should be required", () => {
                // Arrange
                const acceptancedateAttributeSpy = sandbox.spy(mockContext.getFormContext().getAttribute("opc_acceptancedate"));
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoInvestigation);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateAttributeSpy.getRequiredLevel().should.equal("required");
            });
        });

        describe("and recommending to close", () => {
            it("acceptance date should not be required", () => {
                // Arrange
                const acceptancedateAttributeMock = mockContext.getFormContext().getAttribute("opc_acceptancedate");
                const acceptancedateAttributeSpy = sandbox.spy(acceptancedateAttributeMock);
                acceptancedateAttributeMock.controls.get("opc_acceptancedate");
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateAttributeSpy.getRequiredLevel().should.equal("none");
            });

            it("reason to close should be required", () => {
                // Arrange
                const closeReasonAttribute = mockContext.getFormContext().getAttribute("opc_closereason");
                const closeReasonAttributeSpy = sandbox.spy(closeReasonAttribute);
                closeReasonAttribute.controls.get("opc_closereason");
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                closeReasonAttributeSpy.getRequiredLevel().should.equal("required");
            });

            it("reasons to close should be [Createdinerror, Duplicate, Redirection]", () => {
                // Arrange
                const closeReasonAttribute = mockContext.getFormContext().getAttribute("opc_closereason");
                const closeReasonAttributeSpy = sandbox.spy(closeReasonAttribute);
                closeReasonAttribute.controls.get("opc_closereason");
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                closeReasonAttributeSpy.getOptions().length.should.equal(3);
                closeReasonAttributeSpy.getOptions().should.contain.deep.members([
                    { value: opc_closereason.Createdinerror },
                    { value: opc_closereason.Duplicate },
                    { value: opc_closereason.Redirection }
                ]);
            });
        });

        describe("and recommending to decline", () => {
            it("acceptance date should not be required", () => {
                // Arrange
                const acceptancedateAttributeMock = mockContext.getFormContext().getAttribute("opc_acceptancedate");
                const acceptancedateAttributeSpy = sandbox.spy(acceptancedateAttributeMock);
                acceptancedateAttributeMock.controls.get("opc_acceptancedate");
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Declinetoinvestigate);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateAttributeSpy.getRequiredLevel().should.equal("none");
            });
        });

    });


    describe("when not recommending to registrar", () => {

        it("reason to close should be required", () => {
            // Arrange
            const closeReasonAttribute = mockContext.getFormContext().getAttribute("opc_closereason");
            const closeReasonAttributeSpy = sandbox.spy(closeReasonAttribute);
            closeReasonAttribute.controls.get("opc_closereason");
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);


            // Act
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").fireOnChange();

            // Assert
            closeReasonAttributeSpy.getRequiredLevel().should.equal("required");
        });

        it("reasons to close should be [Redirection, Resolved, Withdrawn]", () => {
            // Arrange
            const closeReasonAttribute = mockContext.getFormContext().getAttribute("opc_closereason");
            const closeReasonAttributeSpy = sandbox.spy(closeReasonAttribute);
            closeReasonAttribute.controls.get("opc_closereason");
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);

            // Act
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").fireOnChange();

            // Assert
            closeReasonAttributeSpy.getOptions().length.should.equal(3);
            closeReasonAttributeSpy.getOptions().should.contain.deep.members([
                { value: opc_closereason.Redirection },
                { value: opc_closereason.Resolved },
                { value: opc_closereason.Withdrawn }
            ]);
        });

        it("intake disposition should not be required", () => {
            // Arrange
            const intakeDispositionAttribute = mockContext.getFormContext().getAttribute("opc_intakedisposition");
            const intakeDispositionAttributeSpy = sandbox.spy(intakeDispositionAttribute);
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);

            // Act
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").fireOnChange();

            // Assert
            intakeDispositionAttributeSpy.getRequiredLevel().should.equal("none");
        });

    });
});

