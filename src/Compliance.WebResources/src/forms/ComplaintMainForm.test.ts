import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { Complaint } from "./ComplaintMainForm";
import { ContactService } from "../services/ContactService";
import { IBaseContact } from "../interfaces";
import { ContactType } from "../enums";
import * as resources from "../resources.json";
import { XrmControlMock } from "../../test/XrmControlMock";
import i18next from "i18next";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Complaint", () => {
    let contactService: ContactService;
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;
    let contextSpy: any;
    let form: Complaint.Forms.MainForm;
    const closeReasons: Xrm.Option<any>[] = [
        { text: "Created in error", value: opc_closereason.Createdinerror },
        { text: "Duplicate", value: opc_closereason.Duplicate },
        { text: "Redirection", value: opc_closereason.Redirection },
        { text: "Resolved", value: opc_closereason.Resolved },
        { text: "Withdrawn", value: opc_closereason.Withdrawn }
    ];

    function initializeMock() {
        contactService = new ContactService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        contextSpy = sandbox.spy(mockContext);
        form = new Complaint.Forms.MainForm(i18next, contactService);

        void i18next.init({
            resources: resources.resources,
            defaultNS: "common",
            fallbackLng: "en",
            lng: "en"
        });
    }

    // Initialize the form for every test
    beforeEach(() => {
        initializeMock();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("when form is initializing", () => {
        it("it should not have duplicate contact notification if no contact exists", async () => {
            // Arrange
            const getDuplicateDup = sandbox
                .stub(contactService, "getDuplicateStatus")
                .resolves({ opc_duplicatedetectionresult: opc_duplicatedetectionresult.Potentialduplicate });
            mockContext.getFormContext().getAttribute("opc_complainant").setValue(null);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            getDuplicateDup.should.not.have.been.called;
            await Promise.all(getDuplicateDup.returnValues);
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });

    describe("when contact is modified", () => {
        const potentialDuplicate: IBaseContact = {
            firstname: "John",
            lastname: "Doe",
            address1_postalcode: "456 456",
            telephone1: "111-111-1111",
            telephone2: "666-666-6666",
            contactid: "1A798143-ADC2-4B0A-B8D6-92358BBD20C6",
            emailaddress1: "test@test.com"
        };

        const actualDuplicate: IBaseContact = {
            firstname: "John",
            lastname: "Doe",
            address1_postalcode: "123 123",
            telephone1: "555-555-5555",
            telephone2: "666-666-6666",
            contactid: "1A798143-ADC2-4B0A-B8D6-92358BBD20C6",
            emailaddress1: "test@test.com"
        };

        const complainant = {
            firstname: "John",
            lastname: "Doe",
            address1_postalcode: "123 123",
            telephone1: "555-555-5555",
            telephone2: "666-666-6666",
            contactid: "1A798143-ADC2-4B0A-B8D6-92358BBD20C6",
            emailaddress1: "test@test.com"
        };

        let getContact: any;

        beforeEach(() => {
            // Run the Initialize first so that the form doesn't set notifications yet without a contact,
            // testing will be done when firing the on change
            form.initializeComponents(mockContext);
            getContact = sandbox.stub(contactService, "getContact").resolves(complainant);
        });

        it("it should have notifications if a duplicate contacts exists", async () => {
            // Arrange

            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([potentialDuplicate]);
            const contactsLookup = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];
            const complainantControl = new XrmControlMock(mockContext);
            complainantControl.setName("opc_complainant");

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_complainant").controls.collection.push(complainantControl);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        });

        it("it should have a potential duplicate notification if less than all checked fields match", async () => {
            // Arrange

            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([potentialDuplicate]);

            const contactsLookup = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            const complainantControl = new XrmControlMock(mockContext);
            complainantControl.setName("opc_complainant");
            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_complainant").controls.collection.push(complainantControl);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
            contextSpy
                .getFormContext()
                .ui.getFormNotification("opc_complainant")
                .message.should.equal(
                    i18next.t("contact:duplicate.warning", { context: "potential", contactType: ContactType.Complainant })
                );
        });

        it("it should have a full duplicate notification if all checked fields match", async () => {
            // Arrange

            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([actualDuplicate]);

            const contactsLookup = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            const complainantControl = new XrmControlMock(mockContext);
            complainantControl.setName("opc_complainant");

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_complainant").controls.collection.push(complainantControl);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
            contextSpy
                .getFormContext()
                .ui.getFormNotification("opc_complainant")
                .message.should.equal(i18next.t("contact:duplicate.warning", { context: "actual", contactType: ContactType.Complainant }));
        });

        it("it should not have a notification if a contact does not have a duplication status", async () => {
            // Arrange
            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([]);

            const contactsLookup = [
                {
                    id: "0C0F0F9E-6E8E-4EBA-A58E-160C4D9CE970",
                    name: "Alexis Fortin",
                    entityType: "contact"
                }
            ];

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contactsLookup);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should have multiple notifications if multiple duplicate contacts exist", async () => {
            // Arrange

            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([potentialDuplicate]);

            const contactsLookup = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_complainantrep").setValue(contactsLookup);

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();

            // Assert
            // Any better way?
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(2);
        });

        it("it should remove exsiting notifications when no duplicate status is found", async () => {
            // Arrange

            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([]);

            const contactsLookup = [
                {
                    id: "233A4366-A101-4B59-9004-DA83CE087922",
                    name: "Marc Dupre",
                    entityType: "contact"
                }
            ];

            mockContext.getFormContext().getAttribute("opc_complainant").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_complainantrep").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_complainantlegalrepresentative").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_respondentrepresentative").setValue(contactsLookup);
            mockContext.getFormContext().getAttribute("opc_respondentlegalrepresentative").setValue(contactsLookup);

            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_complainant");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_complainantrep");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_complainantlegalrepresentative");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_respondentrepresentative");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_respondentlegalrepresentative");

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantlegalrepresentative").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_respondentrepresentative").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_respondentlegalrepresentative").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should remove exsiting notifications when no contacts are found", async () => {
            // Arrange

            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([potentialDuplicate]);

            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_complainant");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_complainantrep");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_complainantlegalrepresentative");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_respondentrepresentative");
            mockContext.getFormContext().ui.setFormNotification("Test Notification", "WARNING", "opc_respondentlegalrepresentative");

            // Act
            mockContext.getFormContext().getAttribute("opc_complainant").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantrep").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_complainantlegalrepresentative").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_respondentrepresentative").fireOnChange();
            mockContext.getFormContext().getAttribute("opc_respondentlegalrepresentative").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.not.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });

    describe("when recommending to registrar", () => {
        beforeEach(() => {
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.Yes);
            form.initializeComponents(mockContext);
        });

        describe("and recommending to ER", () => {
            it("acceptance date should be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = mockContext.getFormContext().getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));

                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoEarlyResolution);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(true);
            });
        });

        describe("and recommending to investigation", () => {
            it("acceptance date should be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = mockContext.getFormContext().getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoInvestigation);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(true);
            });
        });

        describe("and recommending to close", () => {
            it("acceptance date should not be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = mockContext.getFormContext().getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(false);
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
                const closeReasonControl = closeReasonAttribute.controls.get("opc_closereason");
                const closeReasonControlSpy = sandbox.spy(closeReasonControl);
                closeReasonAttribute.setOptions(closeReasons);

                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").fireOnChange();

                // Assert
                closeReasonControlSpy.getOptions().length.should.equal(3);
                closeReasonControlSpy.getOptions().should.have.deep.members([
                    { text: "Redirection", value: opc_closereason.Redirection },
                    { text: "Resolved", value: opc_closereason.Resolved },
                    { text: "Withdrawn", value: opc_closereason.Withdrawn }
                ]);
            });
        });

        describe("and recommending to decline", () => {
            it("acceptance date should not be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = mockContext.getFormContext().getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));
                mockContext.getFormContext().getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Declinetoinvestigate);

                // Act
                mockContext.getFormContext().getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(false);
            });
        });
    });

    describe("when not recommending to registrar", () => {
        beforeEach(() => {
            form.initializeComponents(mockContext);
        });

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
            const closeReasonControl = closeReasonAttribute.controls.get("opc_closereason");
            const closeReasonControlSpy = sandbox.spy(closeReasonControl);
            closeReasonAttribute.setOptions(closeReasons);
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);

            // Act
            mockContext.getFormContext().getAttribute("opc_recommendtoregistrar").fireOnChange();

            // Assert
            closeReasonControlSpy.getOptions().length.should.equal(3);
            closeReasonControlSpy.getOptions().should.have.deep.members([
                { text: "Created in error", value: opc_closereason.Createdinerror },
                { text: "Duplicate", value: opc_closereason.Duplicate },
                { text: "Redirection", value: opc_closereason.Redirection }
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

    describe("when the complainant is part of the Multiple Complaint Strategy", () => {
        beforeEach(() => {
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should display a form notification", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);
            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
        });
    });

    describe("when the complainant is not part of the Multiple Complaint Strategy", () => {
        beforeEach(() => {
            // We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("it should not display a form notification(if not applied)", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.NotApplied);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not display a form notification(if proposed)", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Proposed);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not display a form notification(if former)", () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Former);

            // Act
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
