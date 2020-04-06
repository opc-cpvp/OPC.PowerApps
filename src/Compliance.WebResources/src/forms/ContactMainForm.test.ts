import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { XrmUtilityMock } from '../../test/XrmUtilityMock';
import { XrmOptionMock } from '../../test/XrmOptionMock';
import { XrmBaseControlMock } from '../../test/XrmBaseControlMock';
import { Contact } from './ContactMainForm';
import { ContactService } from '.././services/ContactService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("Contact", () => {
    describe("when MCS field is loading", () => {
        let service: ContactService;
        let form: Contact.Forms.MainForm;
        let mockContext: XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>;
        let mockUtility: XrmUtilityMock;
        let mcsControl: XrmBaseControlMock;
        let controlSpy: any;
        let mcsOptions: XrmOptionMock[] = [
            { text: "Not Applied", value: opc_multiplecomplaintstrategy.NotApplied },
            { text: "Proposed", value: opc_multiplecomplaintstrategy.Proposed },
            { text: "Applied", value: opc_multiplecomplaintstrategy.Applied }
        ];

        beforeEach(function () {
            service = new ContactService();
            mockUtility = new XrmUtilityMock();
            form = new Contact.Forms.MainForm(service, mockUtility);
            mockContext = new XrmExecutionContextMock<Form.contact.Main.ComplianceContact, any>();
            mcsControl = mockContext.getFormContext().getControl("opc_multiplecomplaintstrategy");
            controlSpy = sandbox.spy(mcsControl);
            mcsControl.options = mcsOptions;
        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should contain option 'Applied' if user is Intake Manager", () => {
            // Arrange
            mockUtility.getGlobalContext().userSettings.roles = ['{"name":"Compliance - Intake Manager"}']

            // Act
            form.initializeComponents(mockContext);

            // Assert
            controlSpy.getOptions().should.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(3);
        });

        it("it should contain option 'Applied' if user is not Intake Manager BUT MCS value is already 'Applied'", () => {
            // Arrange
            mockUtility.getGlobalContext().userSettings.roles = ['{"name":"NOT Intake Manager"}']
            mockContext.getFormContext().getAttribute("opc_multiplecomplaintstrategy").setValue(opc_multiplecomplaintstrategy.Applied);

            // Act
            form.initializeComponents(mockContext);

            // Assert
            controlSpy.getOptions().should.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(3);
        });

        it("it should not contain option 'Applied' if user is not Intake Manager", () => {
            // Arrange
            mockUtility.getGlobalContext().userSettings.roles = ['{"name":"NOT Intake Manager"}']

            // Act
            form.initializeComponents(mockContext);

            // Assert
            controlSpy.getOptions().should.not.contain.deep.members([{ text: "Applied", value: opc_multiplecomplaintstrategy.Applied }]);
            controlSpy.getOptions().length.should.equal(2);
        });
    });
});
