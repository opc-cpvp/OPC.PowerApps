import { XrmExecutionContextMock } from "../../test/XrmExecutionContextMock";
import { XrmStageMock } from "../../test/XrmStageMock";
import { Complaint } from "./ComplaintMainForm";
import { ContactService } from "../services/ContactService";
import { IBaseContact } from "../interfaces";
import { ContactType } from "../enums";
import * as resources from "../resources.json";
import { XrmControlMock } from "../../test/XrmControlMock";
import i18next from "i18next";
import { XrmPageBaseMock } from "../../test/XrmPageBaseMock";

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
    let formContext: XrmPageBaseMock<Form.opc_complaint.Main.Information, undefined>;

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
        formContext = mockContext.getFormContext();

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
            formContext.getAttribute("opc_complainant").setValue();

            // Act
            form.initializeComponents(mockContext);

            // Assert
            getDuplicateDup.should.not.have.been.called;
            await Promise.all(getDuplicateDup.returnValues);
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        describe("and creating a new complaint", () => {
            it("it should set date received to today's date", () => {
                // Arrange
                formContext.ui.setFormType(Xrm.FormType.Create);

                // Act
                form.initializeComponents(mockContext);

                // Assert
                contextSpy.getFormContext().getAttribute("opc_complaintreceiveddate").getValue().should.not.equal(null);
            });
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
            emailaddress1: "test@test.com",
            opc_requireprivilegedcorrespondence: false
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

            formContext.getAttribute("opc_complainant").setValue(contactsLookup);
            formContext.getAttribute("opc_complainant").controls.collection.push(complainantControl);

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();

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
            formContext.getAttribute("opc_complainant").setValue(contactsLookup);
            formContext.getAttribute("opc_complainant").controls.collection.push(complainantControl);

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();

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

            formContext.getAttribute("opc_complainant").setValue(contactsLookup);
            formContext.getAttribute("opc_complainant").controls.collection.push(complainantControl);

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();

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

            formContext.getAttribute("opc_complainant").setValue(contactsLookup);

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();

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

            formContext.getAttribute("opc_complainant").setValue(contactsLookup);
            formContext.getAttribute("opc_complainantrep").setValue(contactsLookup);

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();
            formContext.getAttribute("opc_complainantrep").fireOnChange();

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

            formContext.getAttribute("opc_complainant").setValue(contactsLookup);
            formContext.getAttribute("opc_complainantrep").setValue(contactsLookup);
            formContext.getAttribute("opc_complainantlegalrepresentative").setValue(contactsLookup);
            formContext.getAttribute("opc_respondentrepresentative").setValue(contactsLookup);
            formContext.getAttribute("opc_respondentlegalrepresentative").setValue(contactsLookup);

            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_complainant");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_complainantrep");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_complainantlegalrepresentative");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_respondentrepresentative");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_respondentlegalrepresentative");

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();
            formContext.getAttribute("opc_complainantrep").fireOnChange();
            formContext.getAttribute("opc_complainantlegalrepresentative").fireOnChange();
            formContext.getAttribute("opc_respondentrepresentative").fireOnChange();
            formContext.getAttribute("opc_respondentlegalrepresentative").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should remove exsiting notifications when no contacts are found", async () => {
            // Arrange
            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([potentialDuplicate]);
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_complainant");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_complainantrep");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_complainantlegalrepresentative");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_respondentrepresentative");
            formContext.ui.setFormNotification("Test Notification", "WARNING", "opc_respondentlegalrepresentative");

            // Act
            formContext.getAttribute("opc_complainant").fireOnChange();
            formContext.getAttribute("opc_complainantrep").fireOnChange();
            formContext.getAttribute("opc_complainantlegalrepresentative").fireOnChange();
            formContext.getAttribute("opc_respondentrepresentative").fireOnChange();
            formContext.getAttribute("opc_respondentlegalrepresentative").fireOnChange();

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.not.have.been.called;
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        describe("and it's the complainant and it requires privileges correspondence", () => {
            it("it should display a form notification", async () => {
                // Arrange
                mockContext
                    .getFormContext()
                    .getAttribute("opc_complainant")
                    .setValue([{ name: "opc_complainant", id: "test" }]);
                complainant.opc_requireprivilegedcorrespondence = true;
                sandbox.stub(contactService, "getPotentialDuplicates").resolves([]);

                // Act
                formContext.getAttribute("opc_complainant").fireOnChange();

                // Assert
                await Promise.all([...getContact.returnValues]);
                contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(1);
            });
        });

        describe("and it's not the complainant but it requires privileges correspondence", () => {
            it("it should not display a form notification", async () => {
                // Arrange
                mockContext
                    .getFormContext()
                    .getAttribute("opc_complainant")
                    .setValue([{ name: "opc_complainant", id: "test" }]);
                complainant.opc_requireprivilegedcorrespondence = false;
                sandbox.stub(contactService, "getPotentialDuplicates").resolves([]);

                // Act
                formContext.getAttribute("opc_complainant").fireOnChange();

                // Assert
                await Promise.all([...getContact.returnValues]);
                contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
            });
        });
    });

    describe("when recommending to registrar", () => {
        beforeEach(() => {
            formContext.getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.Yes);
            form.initializeComponents(mockContext);
        });

        describe("and recommending to ER", () => {
            it("acceptance date should be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = formContext.getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));

                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoEarlyResolution);

                // Act
                formContext.getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(true);
            });

            describe("and complainant has a representative", () => {
                it("authorization form should be mandatory", () => {
                    // Arrange
                    const repAuthProvidedAttributeMock = mockContext
                        .getFormContext()
                        .getAttribute("opc_representativeauthorizationprovided");
                    const repAuthProvidedAttributeMockSpy = sandbox.spy(repAuthProvidedAttributeMock);
                    const repAuthProvidedControlMockSpy = sandbox.spy(
                        repAuthProvidedAttributeMock.controls.get("opc_representativeauthorizationprovided")
                    );
                    mockContext
                        .getFormContext()
                        .getAttribute("opc_intakedisposition")
                        .setValue(opc_intakedisposition.MovetoEarlyResolution);
                    formContext.getAttribute("opc_complainantrep").setValue(true);

                    // Act
                    formContext.getAttribute("opc_intakedisposition").fireOnChange();

                    // Assert
                    repAuthProvidedAttributeMockSpy.getRequiredLevel().should.equal("required");
                    repAuthProvidedAttributeMockSpy.getValue().should.equal(false);
                    repAuthProvidedControlMockSpy.getVisible().should.equal(true);
                });
            });
        });

        describe("and recommending to investigation", () => {
            it("acceptance date should be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = formContext.getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));
                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoInvestigation);

                // Act
                formContext.getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(true);
            });

            describe("and complainant has a representative", () => {
                it("authorization form should be mandatory", () => {
                    // Arrange
                    const repAuthProvidedAttributeMock = mockContext
                        .getFormContext()
                        .getAttribute("opc_representativeauthorizationprovided");
                    const repAuthProvidedAttributeMockSpy = sandbox.spy(repAuthProvidedAttributeMock);
                    const repAuthProvidedControlMockSpy = sandbox.spy(
                        repAuthProvidedAttributeMock.controls.get("opc_representativeauthorizationprovided")
                    );
                    formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoInvestigation);
                    formContext.getAttribute("opc_complainantrep").setValue(true);

                    // Act
                    formContext.getAttribute("opc_intakedisposition").fireOnChange();

                    // Assert
                    repAuthProvidedAttributeMockSpy.getRequiredLevel().should.equal("required");
                    repAuthProvidedAttributeMockSpy.getValue().should.equal(false);
                    repAuthProvidedControlMockSpy.getVisible().should.equal(true);
                });
            });
        });

        describe("and recommending to close", () => {
            it("acceptance date should not be visible", () => {
                // Arrange
                const acceptancedateAttributeMock = formContext.getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));
                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                formContext.getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                acceptancedateControlSpy.getVisible().should.equal(false);
            });

            it("reason to close should be required", () => {
                // Arrange
                const closeReasonAttribute = formContext.getAttribute("opc_closereason");
                const closeReasonAttributeSpy = sandbox.spy(closeReasonAttribute);
                closeReasonAttribute.controls.get("opc_closereason");
                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                formContext.getAttribute("opc_intakedisposition").fireOnChange();

                // Assert
                closeReasonAttributeSpy.getRequiredLevel().should.equal("required");
            });

            it("reasons to close should be [Createdinerror, Duplicate, Redirection]", () => {
                // Arrange
                const closeReasonAttribute = formContext.getAttribute("opc_closereason");
                const closeReasonControl = closeReasonAttribute.controls.get("opc_closereason");
                const closeReasonControlSpy = sandbox.spy(closeReasonControl);
                closeReasonAttribute.setOptions(closeReasons);

                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Close);

                // Act
                formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();

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
                const acceptancedateAttributeMock = formContext.getAttribute("opc_acceptancedate");
                const acceptancedateControlSpy = sandbox.spy(acceptancedateAttributeMock.controls.get("opc_acceptancedate"));
                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.Declinetoinvestigate);

                // Act
                formContext.getAttribute("opc_intakedisposition").fireOnChange();

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
            const closeReasonAttribute = formContext.getAttribute("opc_closereason");
            const closeReasonAttributeSpy = sandbox.spy(closeReasonAttribute);
            closeReasonAttribute.controls.get("opc_closereason");
            formContext.getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);

            // Act
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();

            // Assert
            closeReasonAttributeSpy.getRequiredLevel().should.equal("required");
        });

        it("reasons to close should be [Redirection, Resolved, Withdrawn]", () => {
            // Arrange
            const closeReasonAttribute = formContext.getAttribute("opc_closereason");
            const closeReasonControl = closeReasonAttribute.controls.get("opc_closereason");
            const closeReasonControlSpy = sandbox.spy(closeReasonControl);
            closeReasonAttribute.setOptions(closeReasons);
            formContext.getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);

            // Act
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();

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
            const intakeDispositionAttribute = formContext.getAttribute("opc_intakedisposition");
            const intakeDispositionAttributeSpy = sandbox.spy(intakeDispositionAttribute);
            formContext.getAttribute("opc_recommendtoregistrar").setValue(opc_yesorno.No);

            // Act
            formContext.getAttribute("opc_recommendtoregistrar").fireOnChange();

            // Assert
            intakeDispositionAttributeSpy.getRequiredLevel().should.equal("none");
        });
    });

    describe("when complaint stage is modified", () => {
        beforeEach(() => {
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("perceived priorities should be required if stage is intake", () => {
            // Arrange
            const perceivedPrioritiesAttributeMock = formContext.getAttribute("opc_complainantperceivedpriorities");
            const perceivedPrioritiesAttributeSpy = sandbox.spy(perceivedPrioritiesAttributeMock);
            const xrmIntakeStageMock = new XrmStageMock("intake", "intake");

            formContext.data.process.getActiveProcess().addStage(xrmIntakeStageMock);

            // Act
            formContext.data.process.setActiveStage("intake");

            // Assert
            perceivedPrioritiesAttributeSpy.getRequiredLevel().should.equal("required");
        });

        it("perceived priorities should not be required if stage is triage", () => {
            // Arrange
            const perceivedPrioritiesAttributeMock = formContext.getAttribute("opc_complainantperceivedpriorities");
            const perceivedPrioritiesAttributeSpy = sandbox.spy(perceivedPrioritiesAttributeMock);
            const xrmTriageStageMock = new XrmStageMock("triage", "triage");

            formContext.data.process.getActiveProcess().addStage(xrmTriageStageMock);

            // Act
            formContext.data.process.setActiveStage("triage");

            // Assert
            perceivedPrioritiesAttributeSpy.getRequiredLevel().should.equal("none");
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
            formContext.getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);
            // Act
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

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
            formContext.getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.NotApplied);

            // Act
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not display a form notification(if proposed)", () => {
            // Arrange
            formContext.getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Proposed);

            // Act
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });

        it("it should not display a form notification(if former)", () => {
            // Arrange
            formContext.getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Former);

            // Act
            formContext.getAttribute("opc_multiplecomplaintstrategy").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });

    describe("when a complainant representative is assigned", () => {
        beforeEach(() => {
            // We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);
            sandbox.stub(contactService, "getContact").resolves();
            sandbox.stub(contactService, "getPotentialDuplicates").resolves([]);
        });

        describe("and not recommending to ER or Investigation", () => {
            it("authorization form provided should not be visible", () => {
                // Arrange
                const repAuthProvidedAttributeMock = formContext.getAttribute("opc_representativeauthorizationprovided");
                const repAuthProvidedAttributeMockSpy = sandbox.spy(repAuthProvidedAttributeMock);
                const repAuthProvidedControlMockSpy = sandbox.spy(
                    repAuthProvidedAttributeMock.controls.get("opc_representativeauthorizationprovided")
                );

                // Act
                formContext.getAttribute("opc_complainantrep").fireOnChange();

                // Assert
                repAuthProvidedAttributeMockSpy.getRequiredLevel().should.equal("none");
                repAuthProvidedControlMockSpy.getVisible().should.equal(false);
            });
        });

        describe("and recommending to ER", () => {
            it("authorization form should be mandatory", () => {
                // Arrange
                const repAuthProvidedAttributeMock = formContext.getAttribute("opc_representativeauthorizationprovided");
                const repAuthProvidedAttributeMockSpy = sandbox.spy(repAuthProvidedAttributeMock);
                const repAuthProvidedControlMockSpy = sandbox.spy(
                    repAuthProvidedAttributeMock.controls.get("opc_representativeauthorizationprovided")
                );
                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoEarlyResolution);
                mockContext
                    .getFormContext()
                    .getAttribute("opc_complainantrep")
                    .setValue([{ name: "opc_complainantrep" }]);

                // Act
                formContext.getAttribute("opc_complainantrep").fireOnChange();

                // Assert
                repAuthProvidedAttributeMockSpy.getRequiredLevel().should.equal("required");
                repAuthProvidedAttributeMockSpy.getValue().should.equal(false);
                repAuthProvidedControlMockSpy.getVisible().should.equal(true);
            });
        });

        describe("and recommending to Investigation", () => {
            it("authorization form should be mandatory", () => {
                // Arrange
                const repAuthProvidedAttributeMock = formContext.getAttribute("opc_representativeauthorizationprovided");
                const repAuthProvidedAttributeMockSpy = sandbox.spy(repAuthProvidedAttributeMock);
                const repAuthProvidedControlMockSpy = sandbox.spy(
                    repAuthProvidedAttributeMock.controls.get("opc_representativeauthorizationprovided")
                );
                formContext.getAttribute("opc_intakedisposition").setValue(opc_intakedisposition.MovetoInvestigation);
                mockContext
                    .getFormContext()
                    .getAttribute("opc_complainantrep")
                    .setValue([{ name: "opc_complainantrep" }]);

                // Act
                formContext.getAttribute("opc_complainantrep").fireOnChange();

                // Assert
                repAuthProvidedAttributeMockSpy.getRequiredLevel().should.equal("required");
                repAuthProvidedAttributeMockSpy.getValue().should.equal(false);
                repAuthProvidedControlMockSpy.getVisible().should.equal(true);
            });
        });
    });

    describe("when the ER disposition is changed", () => {
        beforeEach(() => {
            // We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to UNSUCCESSFUL UNSUITABLE, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const furtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation");
            const reportRequestedAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportrequested");
            const resolutionAttrSpy = contextSpy.getFormContext().getAttribute("opc_resolution");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.UnsuccessfulUnsuitable);

            // Act
            formContext.getAttribute("opc_erdisposition").fireOnChange();

            // Assert
            furtherInvestigationAttrSpy.controls.get("opc_requiresfurtherinvestigation").getVisible().should.equal(true);
            reportRequestedAttrSpy.controls.get("opc_reportrequested").getVisible().should.equal(false);
            resolutionAttrSpy.controls.get("opc_resolution").getVisible().should.equal(false);
            furtherInvestigationAttrSpy.getRequiredLevel().should.equal("required");
        });

        it("to RESOLVED, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const furtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation");
            const reportRequestedAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportrequested");
            const resolutionAttrSpy = contextSpy.getFormContext().getAttribute("opc_resolution");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Resolved);

            // Act
            formContext.getAttribute("opc_erdisposition").fireOnChange();

            // Assert
            furtherInvestigationAttrSpy.controls.get("opc_requiresfurtherinvestigation").getVisible().should.equal(false);
            reportRequestedAttrSpy.controls.get("opc_reportrequested").getVisible().should.equal(false);
            resolutionAttrSpy.controls.get("opc_resolution").getVisible().should.equal(true);
            resolutionAttrSpy.getRequiredLevel().should.equal("required");
        });

        it("to DISCONTINUED, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const furtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation");
            const reportRequestedAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportrequested");
            const resolutionAttrSpy = contextSpy.getFormContext().getAttribute("opc_resolution");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Discontinued);

            // Act
            formContext.getAttribute("opc_erdisposition").fireOnChange();

            // Assert
            furtherInvestigationAttrSpy.controls.get("opc_requiresfurtherinvestigation").getVisible().should.equal(false);
            reportRequestedAttrSpy.controls.get("opc_reportrequested").getVisible().should.equal(true);
            resolutionAttrSpy.controls.get("opc_resolution").getVisible().should.equal(false);
            reportRequestedAttrSpy.getRequiredLevel().should.equal("required");
        });

        it("to WITHDRAWN, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const furtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation");
            const reportRequestedAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportrequested");
            const resolutionAttrSpy = contextSpy.getFormContext().getAttribute("opc_resolution");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Withdrawn);

            // Act
            formContext.getAttribute("opc_erdisposition").fireOnChange();

            // Assert
            furtherInvestigationAttrSpy.controls.get("opc_requiresfurtherinvestigation").getVisible().should.equal(false);
            reportRequestedAttrSpy.controls.get("opc_reportrequested").getVisible().should.equal(false);
            resolutionAttrSpy.controls.get("opc_resolution").getVisible().should.equal(false);
        });
    });

    describe("when requires further investigation is changed", () => {
        beforeEach(() => {
            // We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to YES and the ER disposition is DISCONTINUED, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const reasonFurtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_reasontorequirefurtherinvestigation");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Discontinued);
            contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation").setValue(true);

            // Act
            formContext.getAttribute("opc_requiresfurtherinvestigation").fireOnChange();

            // Assert
            reasonFurtherInvestigationAttrSpy.controls.get("opc_reasontorequirefurtherinvestigation").getVisible().should.equal(true);
            reasonFurtherInvestigationAttrSpy.getRequiredLevel().should.equal("required");
        });

        it("to NO and the ER disposition is DISCONTINUED, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const reasonFurtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_reasontorequirefurtherinvestigation");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Discontinued);
            contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation").setValue(false);

            // Act
            formContext.getAttribute("opc_requiresfurtherinvestigation").fireOnChange();

            // Assert
            reasonFurtherInvestigationAttrSpy.controls.get("opc_reasontorequirefurtherinvestigation").getVisible().should.equal(false);
        });

        it("to YES and the ER disposition is UNSUCCESSFUL UNSUITABLE, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const reasonFurtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_reasontorequirefurtherinvestigation");
            const reportRequestedAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportrequested");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.UnsuccessfulUnsuitable);
            contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation").setValue(true);

            // Act
            formContext.getAttribute("opc_requiresfurtherinvestigation").fireOnChange();

            // Assert
            reasonFurtherInvestigationAttrSpy.controls.get("opc_reasontorequirefurtherinvestigation").getVisible().should.equal(true);
            reportRequestedAttrSpy.controls.get("opc_reportrequested").getVisible().should.equal(false);
            reasonFurtherInvestigationAttrSpy.getRequiredLevel().should.equal("required");
        });

        it("to NO and the ER disposition is UNSUCCESSFUL UNSUITABLE, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const reasonFurtherInvestigationAttrSpy = contextSpy.getFormContext().getAttribute("opc_reasontorequirefurtherinvestigation");
            const reportRequestedAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportrequested");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.UnsuccessfulUnsuitable);
            contextSpy.getFormContext().getAttribute("opc_requiresfurtherinvestigation").setValue(false);

            // Act
            formContext.getAttribute("opc_requiresfurtherinvestigation").fireOnChange();

            // Assert
            reasonFurtherInvestigationAttrSpy.controls.get("opc_reasontorequirefurtherinvestigation").getVisible().should.equal(false);
            reportRequestedAttrSpy.controls.get("opc_reportrequested").getVisible().should.equal(true);
            reportRequestedAttrSpy.getRequiredLevel().should.equal("required");
        });
    });

    describe("when report requested is changed", () => {
        beforeEach(() => {
            // We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to YES, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const reportRedactorAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportredactor");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Discontinued);
            contextSpy.getFormContext().getAttribute("opc_reportrequested").setValue(true);

            // Act
            formContext.getAttribute("opc_reportrequested").fireOnChange();

            // Assert
            reportRedactorAttrSpy.controls.get("opc_reportredactor").getVisible().should.equal(true);
            reportRedactorAttrSpy.getRequiredLevel().should.equal("required");
        });

        it("to NO, it should ONLY SHOW relevant fields", () => {
            // Arrange
            const reportRedactorAttrSpy = contextSpy.getFormContext().getAttribute("opc_reportredactor");

            formContext.getAttribute("opc_erdisposition").setValue(opc_erdisposition.Discontinued);
            contextSpy.getFormContext().getAttribute("opc_reportrequested").setValue(false);

            // Act
            formContext.getAttribute("opc_reportrequested").fireOnChange();

            // Assert
            reportRedactorAttrSpy.controls.get("opc_reportredactor").getVisible().should.equal(false);
        });
    });

    describe("when the ER approval is changed", () => {
        beforeEach(() => {
            // We are calling initializeComponents to register the events and to be able to call fireOnChange() on the attribute, which will trigger the onchange event. Onchange is a private method.
            form.initializeComponents(mockContext);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it("to APPROVED REQUIRING REREVIEW, it should prevent the complaint stage from advancing", () => {
            // Arrange
            formContext.getAttribute("opc_erapproval").setValue(opc_erapproval.Requiresrereview);

            // Act
            formContext.getAttribute("opc_erapproval").fireOnChange();

            // Assert
            contextSpy
                .getFormContext()
                .ui.getFormNotification("opc_erapproval")
                .message.should.equal(i18next.t("complaint:process_flow.error.approved_rereview"));
        });

        it("to a state other than APPROVED REQUIRING REREVIEW, it should allow the complaint stage to advance", () => {
            // Arrange
            formContext.getAttribute("opc_erapproval").setValue(opc_erapproval.Approved);

            // Act
            formContext.getAttribute("opc_erapproval").fireOnChange();

            // Assert
            contextSpy.getFormContext().ui.getFormNotificationsLength().should.equal(0);
        });
    });
});
