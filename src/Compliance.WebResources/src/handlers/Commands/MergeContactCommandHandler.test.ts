import { XrmExecutionContextMock } from "../../../test/XrmExecutionContextMock";
import { ContactService } from "../../services/ContactService";
import { IBaseContact, ICommandHandler } from "../../interfaces";
import { WindowHelper } from "../../helpers/WindowHelper";
import { MergeContactCommandHandler } from "./MergeContactCommandHandler";
import { XrmContextMock } from "../../../test/XrmContextMock";
import * as resources from "../../resources.json";
import i18next from "i18next";

import chai from "chai";
import sinon, { SinonStub } from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Merge Contact Handler", () => {
    let contactService: ContactService;
    let mockContext: XrmContextMock;
    let mockExecutionContext: XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>;

    const potentialDuplicate: IBaseContact = {
        firstname: "John",
        lastname: "Doe",
        address1_postalcode: "123 123",
        telephone1: "555-555-6666",
        telephone2: "666-666-6666",
        contactid: "42E7C26C-33D5-4A0C-A0D8-21D5563C4C96",
        emailaddress1: "test@test.com"
    };

    const complainantLookup = [
        {
            id: "233A4366-A101-4B59-9004-DA83CE087922",
            name: "Marc Dupre",
            entityType: "contact"
        }
    ];

    const complainant = {
        firstname: "John",
        lastname: "Doe",
        address1_postalcode: "123 123",
        telephone1: "555-555-5555",
        telephone2: "666-666-6666",
        contactid: "1A798143-ADC2-4B0A-B8D6-92358BBD20C6",
        emailaddress1: "test@test.com"
    };

    let handler: ICommandHandler;

    function initializeMock() {
        void i18next.init({
            resources: resources.resources,
            defaultNS: "common",
            fallbackLng: "en",
            lng: "en"
        });

        contactService = new ContactService();
        mockContext = new XrmContextMock();
        mockExecutionContext = new XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>();
        handler = new MergeContactCommandHandler(i18next, contactService, mockContext);

        mockExecutionContext.getFormContext().getAttribute("opc_complainant").setValue(complainantLookup);
    }

    let getContact: SinonStub<any[], PromiseLike<any>>;
    let windowOpen: any;
    const fakeClientUrl = "fakeUrl";

    beforeEach(() => {
        initializeMock();

        windowOpen = sandbox
            .stub(WindowHelper, "openWindow")
            .returns({ addEventListener(str: string, listener: EventListenerOrEventListenerObject) {} });

        sandbox.stub(mockContext, "getClientUrl").returns(fakeClientUrl);

        getContact = sandbox.stub(contactService, "getContact").resolves(complainant);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("when executed", () => {
        it("it should open the merge window when a duplicate is found", async () => {
            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([potentialDuplicate]);

            // Act
            handler.execute(mockExecutionContext.getFormContext(), "opc_complainant");

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            windowOpen.should.have.been.called;
        });

        it("it should merge the most likely duplicate", async () => {
            const mostLikelyDuplicate: IBaseContact = {
                firstname: "John",
                lastname: "Doe",
                address1_postalcode: "123 123",
                telephone1: "555-555-5555",
                telephone2: "666-666-6666",
                contactid: "5D10FF55-9717-403B-A708-FFC9E0903796",
                emailaddress1: "test@test.com"
            };

            const leastLikelyDuplicate: IBaseContact = {
                firstname: "John",
                lastname: "Doe",
                address1_postalcode: "123 123",
                telephone1: "555-555-4444",
                telephone2: "666-666-5555",
                contactid: "4913C9AE-46E4-4389-BFB0-F2FE6A84BF48",
                emailaddress1: "test@test.com"
            };

            const getContactDup = sandbox
                .stub(contactService, "getPotentialDuplicates")
                .resolves([potentialDuplicate, mostLikelyDuplicate, leastLikelyDuplicate]);

            const mergeUrl =
                fakeClientUrl +
                `/_grid/cmds/dlg_merge.aspx?dType=1&iObjType=2&iTotal=2&sIds=${complainant.contactid};${mostLikelyDuplicate.contactid}`;

            mockExecutionContext.getFormContext().getAttribute("opc_complainant").setValue(complainantLookup);

            // Act
            handler.execute(mockExecutionContext.getFormContext(), "opc_complainant");

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            windowOpen.should.have.been.calledWith(mergeUrl, "_blank", 900, 700);
        });

        it("it should not merge if no duplicates are found", async () => {
            const getContactDup = sandbox.stub(contactService, "getPotentialDuplicates").resolves([]);

            mockExecutionContext.getFormContext().getAttribute("opc_complainant").setValue(complainantLookup);

            // Act
            handler.execute(mockExecutionContext.getFormContext(), "opc_complainant");

            // Assert
            await Promise.all([...getContact.returnValues, ...getContactDup.returnValues]);
            getContactDup.should.have.been.called;
            windowOpen.should.not.have.been.called;
        });
    });
});
