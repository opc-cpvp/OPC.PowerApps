import { Controls } from './RiskAssessmentControl';
import { XrmContextMock } from '../../../test/XrmContextMock';
import { IRiskAssessmentService } from '../../interfaces';
import { RiskAssessmentService } from '../../services/RiskAssessmentService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("RiskAssessmentControl", () => {
    describe("when control is initialized", () => {
        let service: IRiskAssessmentService;
        let xrmContext: XrmContextMock;

        let documentContext: Document;
        let placeholderElement: HTMLElement;

        let control: Controls.RiskAssessmentControl;

        beforeEach(function () {
            service = new RiskAssessmentService();
            documentContext = document;
            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            placeholderElement = documentContext.createElement("div");
            placeholderElement.id = 'risks';
            documentContext.body.appendChild(placeholderElement);

            control = new Controls.RiskAssessmentControl(xrmContext, documentContext, service);
        });

        afterEach(function () {
            sandbox.restore();
            document.body.removeChild(placeholderElement); // not a true dom reset, tried jsdom and had several issues
        });

        it("it should register handler for saving entity", () => {
            // Arrange
            let addEventListener = sandbox.stub(documentContext, 'addEventListener');
            sandbox.stub(service, 'getRiskAppetites').resolves([]);
            sandbox.stub(service, 'getRiskDefinitions').resolves([]);

            // Act
            control.initializeControl();

            // Assert
            addEventListener.should.have.been.calledOnce;
            addEventListener.should.have.been.calledWith('entity-save');
        });

        it("it should load all risk appetites", () => {
            // Arrange
            let getRiskAppetites = sandbox.stub(service, 'getRiskAppetites').resolves([]);
            sandbox.stub(service, 'getRiskDefinitions').resolves([]);

            // Act
            control.initializeControl();

            // Assert
            getRiskAppetites.should.have.been.called;
        });

        it("it should load all risk definitions", () => {
            // Arrange
            let getRiskDefinitions = sandbox.stub(service, 'getRiskDefinitions').resolves([]);
            sandbox.stub(service, 'getRiskAppetites').resolves([]);

            // Act
            control.initializeControl();

            // Assert
            getRiskDefinitions.should.have.been.called;
        });
    });

    describe("when form is saving", () => {
        let service: IRiskAssessmentService;
        let xrmContext: XrmContextMock;

        let documentContext: Document;
        let placeholderElement: HTMLElement;

        let control: Controls.RiskAssessmentControl;

        let riskAppetites: (
            opc_RiskAppetite_Fixed &
            { opc_riskappetiteid: string; } &
            { opc_name: string; } &
            { opc_value: number; }
        )[] = [
            {
                "@odata.etag": "",
                opc_riskappetiteid: "guid-marginal",
                opc_name: "Marginal",
                opc_value: 1
            },
            {
                "@odata.etag": "",
                opc_riskappetiteid: "guid-lower",
                opc_name: "Lower",
                opc_value: 2
            },
            {
                "@odata.etag": "",
                opc_riskappetiteid: "guid-moderate",
                opc_name: "Moderate",
                opc_value: 3
            },
            {
                "@odata.etag": "",
                opc_riskappetiteid: "guid-higher",
                opc_name: "Higher",
                opc_value: 4
            },
            {
                "@odata.etag": "",
                opc_riskappetiteid: "guid-extreme",
                opc_name: "Extreme",
                opc_value: 5
            }
        ];

        beforeEach(function () {
            service = new RiskAssessmentService();
            documentContext = document;
            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            placeholderElement = documentContext.createElement("div");
            placeholderElement.id = 'risks';
            documentContext.body.appendChild(placeholderElement);

            control = new Controls.RiskAssessmentControl(xrmContext, documentContext, service);
        });

        afterEach(function () {
            sandbox.restore();
            document.body.removeChild(placeholderElement); // not a true dom reset, tried jsdom and had several issues
        });

        it("it should clear the suggested risk if nothing's selected", async () => {
            // Arrange
            let updateSuggestedRisk = sandbox.stub(service, 'updateSuggestedRisk').resolves();
            let getRiskDefinitions = sandbox.stub(service, 'getRiskDefinitions').resolves([]);
            sandbox.stub(service, 'getRiskAppetites').resolves([]);

            // Act
            await control.initializeControl();
            await getRiskDefinitions;
            control.save();
            await updateSuggestedRisk;

            // Assert
            updateSuggestedRisk.should.have.been.called;
            updateSuggestedRisk.should.have.been.calledWith("guid-test", null);
        });

        it("it should set the suggested risk to the highest selected value", async () => {
            let riskDefinitions:(
                { opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result; } &
                { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result; } &
                { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result; } &
                opc_RiskAssessmentDefinition_Fixed &
                { opc_riskassessmentdefinitionid: string } &
                { opc_riskassessmentcategory_guid: string } &
                { opc_riskassessmentfactortemplate_guid: string } &
                { opc_riskassessmentdefinitiontemplate_guid: string } &
                { opc_isselected: boolean }
            )[] = [
                {
                    "@odata.etag": "",
                    opc_RiskAssessmentDefinitionTemplate: {
                        "@odata.etag": "",
                        createdby_guid: "",
                        createdonbehalfby_guid: "",
                        modifiedby_guid: "",
                        modifiedonbehalfby_guid: "",
                        opc_riskappetite_guid: "guid-marginal",
                        opc_riskassessmentfactortemplate_guid: "",
                        ownerid_guid: "",
                        owningbusinessunit_guid: "",
                        owningteam_guid: "",
                        owninguser_guid: ""
                    },
                    opc_RiskAssessmentFactorTemplate: {
                        "@odata.etag": "",
                        createdby_guid: "",
                        createdonbehalfby_guid: "",
                        modifiedby_guid: "",
                        modifiedonbehalfby_guid: "",
                        opc_riskassessmentcategorytemplate_guid: "",
                        ownerid_guid: "",
                        owningbusinessunit_guid: "",
                        owningteam_guid: "",
                        owninguser_guid: ""
                    },
                    opc_RiskAssessmentCategory: {
                        "@odata.etag": "",
                        createdby_guid: "",
                        createdonbehalfby_guid: "",
                        modifiedby_guid: "",
                        modifiedonbehalfby_guid: "",
                        opc_actualriskappetite_guid: "",
                        opc_bypassinitiatedby_guid: "",
                        opc_riskassessment_guid: "guid-test",
                        opc_riskassessmentcategorytemplate_guid: "",
                        opc_riskassessmenttype_guid: "",
                        opc_suggestedriskappetite_guid: "",
                        ownerid_guid: "",
                        owningbusinessunit_guid: "",
                        owningteam_guid: "",
                        owninguser_guid: ""
                    },
                    opc_riskassessmentdefinitionid: "guid-assessment-marginal",
                    opc_riskassessmentcategory_guid: "",
                    opc_riskassessmentfactortemplate_guid: "",
                    opc_riskassessmentdefinitiontemplate_guid: "",
                    opc_isselected: true
                },
                {
                    "@odata.etag": "",
                    opc_RiskAssessmentDefinitionTemplate: {
                        "@odata.etag": "",
                        createdby_guid: "",
                        createdonbehalfby_guid: "",
                        modifiedby_guid: "",
                        modifiedonbehalfby_guid: "",
                        opc_riskappetite_guid: "guid-lower",
                        opc_riskassessmentfactortemplate_guid: "",
                        ownerid_guid: "",
                        owningbusinessunit_guid: "",
                        owningteam_guid: "",
                        owninguser_guid: ""
                    },
                    opc_RiskAssessmentFactorTemplate: {
                        "@odata.etag": "",
                        createdby_guid: "",
                        createdonbehalfby_guid: "",
                        modifiedby_guid: "",
                        modifiedonbehalfby_guid: "",
                        opc_riskassessmentcategorytemplate_guid: "",
                        ownerid_guid: "",
                        owningbusinessunit_guid: "",
                        owningteam_guid: "",
                        owninguser_guid: ""
                    },
                    opc_RiskAssessmentCategory: {
                        "@odata.etag": "",
                        createdby_guid: "",
                        createdonbehalfby_guid: "",
                        modifiedby_guid: "",
                        modifiedonbehalfby_guid: "",
                        opc_actualriskappetite_guid: "",
                        opc_bypassinitiatedby_guid: "",
                        opc_riskassessment_guid: "guid-test",
                        opc_riskassessmentcategorytemplate_guid: "",
                        opc_riskassessmenttype_guid: "",
                        opc_suggestedriskappetite_guid: "",
                        ownerid_guid: "",
                        owningbusinessunit_guid: "",
                        owningteam_guid: "",
                        owninguser_guid: ""
                    },
                    opc_riskassessmentdefinitionid: "guid-assessment-lower",
                    opc_riskassessmentcategory_guid: "",
                    opc_riskassessmentfactortemplate_guid: "",
                    opc_riskassessmentdefinitiontemplate_guid: "",
                    opc_isselected: false
                }
            ];

            // Arrange
            let updateSuggestedRisk = sandbox.stub(service, 'updateSuggestedRisk').resolves();
            let getRiskDefinitions = sandbox.stub(service, 'getRiskDefinitions').resolves(riskDefinitions);
            sandbox.stub(service, 'getRiskAppetites').resolves(riskAppetites);

            // Act
            await control.initializeControl();
            await getRiskDefinitions;
            control.save();
            await updateSuggestedRisk;

            // Assert
            updateSuggestedRisk.should.have.been.called;
            updateSuggestedRisk.should.have.been.calledWith("guid-test", "guid-marginal");
        });
    });
});