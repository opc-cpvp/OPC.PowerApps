import { XrmExecutionContextMock } from '../../../test/XrmExecutionContextMock';
import { ContactService } from '../../services/ContactService';
import { IBaseContact, IQueryHandler } from '../../interfaces';
import { CheckDuplicatesQueryHandler } from './CheckDuplicatesQueryHandler';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Check Duplicates Handler", () => {

    let contactService: ContactService;
    let mockContext: XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>;

    let potentialDuplicate: IBaseContact = {
        firstname: "John",
        lastname: "Doe",
        address1_postalcode: "123 123",
        telephone1: "555-555-6666",
        telephone2: "666-666-6666",
        contactid: "42E7C26C-33D5-4A0C-A0D8-21D5563C4C96",
        emailaddress1: "test@test.com",
    }

    const complainantLookup = [
        {
            id: "233A4366-A101-4B59-9004-DA83CE087922",
            name: "Marc Dupre",
            entityType: "contact"
        }
    ];

    let handler: IQueryHandler;

    function initializeMock() {
        contactService = new ContactService();
        mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information, any>();
        handler = new CheckDuplicatesQueryHandler(contactService);

        mockContext.getFormContext().getAttribute("opc_complainant").setValue(complainantLookup);
    }

    // Initialize the form for every test
    beforeEach(() => {
        initializeMock();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("when executing", () => {

        it("it should return true if duplicates exist", async () => {
            // Arrange
            const getContact = sandbox.stub(contactService, nameof(contactService.getContact))
                .resolves({});

            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getPotentialDuplicates))
                    .resolves([potentialDuplicate]);

            // Act
            const duplicatesExist = await handler.executeAsync("opc_complainant", mockContext.getFormContext());

            // Assert
            await getContact;
            await getContactDup;
            getContactDup.should.have.been.called;
            duplicatesExist.should.equal(true);
        });

        it("it should return false if no duplicates exist", async () => {
            // Arrange
            const getContact = sandbox.stub(contactService, nameof(contactService.getContact))
                .resolves({});

            const getContactDup =
                sandbox.stub(contactService, nameof(contactService.getPotentialDuplicates))
                    .resolves([]);

            // Act
            const duplicatesExist = await handler.executeAsync("opc_complainant", mockContext.getFormContext());

            // Assert
            await getContact;
            await getContactDup;
            getContactDup.should.have.been.called;
            duplicatesExist.should.equal(false);
        });

        it("it should return false if no complainant exists", async () => {
            // Arrange
            mockContext.getFormContext().getAttribute("opc_complainant").setValue(null);
            const getContact = sandbox.stub(contactService, nameof(contactService.getContact))
                .resolves({});

            // Act
            const duplicatesExist = await handler.executeAsync("opc_complainant", mockContext.getFormContext());

            // Assert
            getContact.should.not.have.been.called;
            duplicatesExist.should.equal(false);
        });

    });
});