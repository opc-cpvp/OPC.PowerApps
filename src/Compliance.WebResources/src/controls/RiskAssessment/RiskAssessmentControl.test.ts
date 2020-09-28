import { Controls } from "./RiskAssessmentControl";
import { XrmContextMock } from "../../../test/XrmContextMock";
import { IRiskAssessmentService } from "../../interfaces";
import { RiskAssessmentService } from "../../services/RiskAssessmentService";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

function generateRiskAppetite(
    guid: string,
    value: number
): opc_RiskAppetite_Fixed & { opc_riskappetiteid: string } & { opc_name: string } & { opc_value: number } {
    return {
        "@odata.etag": "",
        opc_riskappetiteid: guid,
        opc_name: "",
        opc_value: value
    };
}

function generateRiskAssessmentDefinition(
    guid: string,
    riskAssessmentGuid: string,
    riskAppetiteGuid: string,
    isSelected: boolean
): { opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result } & {
    opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result;
} & { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result } & opc_RiskAssessmentDefinition_Fixed & {
        opc_riskassessmentdefinitionid: string;
    } & { opc_riskassessmentcategory_guid: string } & { opc_riskassessmentfactortemplate_guid: string } & {
        opc_riskassessmentdefinitiontemplate_guid: string;
    } & { opc_isselected: boolean } {
    return {
        "@odata.etag": "",
        opc_RiskAssessmentDefinitionTemplate: {
            "@odata.etag": "",
            createdby_guid: "",
            createdonbehalfby_guid: "",
            modifiedby_guid: "",
            modifiedonbehalfby_guid: "",
            opc_riskappetite_guid: riskAppetiteGuid,
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
            opc_riskassessment_guid: riskAssessmentGuid,
            opc_riskassessmentcategorytemplate_guid: "",
            opc_riskassessmenttype_guid: "",
            opc_suggestedriskappetite_guid: "",
            ownerid_guid: "",
            owningbusinessunit_guid: "",
            owningteam_guid: "",
            owninguser_guid: ""
        },
        opc_riskassessmentdefinitionid: guid,
        opc_riskassessmentcategory_guid: "",
        opc_riskassessmentfactortemplate_guid: "",
        opc_riskassessmentdefinitiontemplate_guid: "",
        opc_isselected: isSelected
    };
}

describe("RiskAssessmentControl", () => {
    describe("when control is initialized", () => {
        let service: IRiskAssessmentService;
        let xrmContext: XrmContextMock;

        let documentContext: Document;
        let placeholderElement: HTMLElement;

        let control: Controls.RiskAssessmentControl;

        beforeEach(() => {
            service = new RiskAssessmentService();
            documentContext = document;
            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            placeholderElement = documentContext.createElement("div");
            placeholderElement.id = "risks";
            documentContext.body.appendChild(placeholderElement);

            control = new Controls.RiskAssessmentControl(xrmContext, documentContext, service);
        });

        afterEach(() => {
            sandbox.restore();
            document.body.removeChild(placeholderElement); // not a true dom reset, tried jsdom and had several issues
        });

        it("it should register handler for saving entity", () => {
            // Arrange
            const addEventListener = sandbox.stub(documentContext, "addEventListener");
            sandbox.stub(service, "getRiskAppetites").resolves([]);
            sandbox.stub(service, "getRiskDefinitions").resolves([]);

            // Act
            control.init();

            // Assert
            addEventListener.should.have.been.calledOnce;
            addEventListener.should.have.been.calledWith("entity-save");
        });

        it("it should load all risk appetites", () => {
            // Arrange
            const getRiskAppetites = sandbox.stub(service, "getRiskAppetites").resolves([]);
            sandbox.stub(service, "getRiskDefinitions").resolves([]);

            // Act
            control.init();

            // Assert
            getRiskAppetites.should.have.been.called;
        });

        it("it should load all risk definitions", () => {
            // Arrange
            const getRiskDefinitions = sandbox.stub(service, "getRiskDefinitions").resolves([]);
            sandbox.stub(service, "getRiskAppetites").resolves([]);

            // Act
            control.init();

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

        const riskAppetites: (opc_RiskAppetite_Fixed & { opc_riskappetiteid: string } & { opc_name: string } & { opc_value: number })[] = [
            generateRiskAppetite("guid-marginal", 1),
            generateRiskAppetite("guid-lower", 2),
            generateRiskAppetite("guid-moderate", 3),
            generateRiskAppetite("guid-higher", 4),
            generateRiskAppetite("guid-extreme", 5)
        ];

        beforeEach(() => {
            service = new RiskAssessmentService();
            documentContext = document;
            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            placeholderElement = documentContext.createElement("div");
            placeholderElement.id = "risks";
            documentContext.body.appendChild(placeholderElement);

            control = new Controls.RiskAssessmentControl(xrmContext, documentContext, service);
        });

        afterEach(() => {
            sandbox.restore();
            document.body.removeChild(placeholderElement); // not a true dom reset, tried jsdom and had several issues
        });

        it("it should clear the suggested risk if nothing's selected", async () => {
            // Arrange
            const updateSuggestedRisk = sandbox.stub(service, "updateSuggestedRisk").resolves();
            const getRiskDefinitions = sandbox.stub(service, "getRiskDefinitions").resolves([]);
            sandbox.stub(service, "getRiskAppetites").resolves([]);

            // Act
            await control.init();
            await getRiskDefinitions;
            control.save();
            await updateSuggestedRisk;

            // Assert
            updateSuggestedRisk.should.have.been.called;
            updateSuggestedRisk.should.have.been.calledWith("guid-test", null);
        });

        it("it should set the suggested risk to the highest selected value", async () => {
            const riskDefinitions: ({ opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result } & {
                opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result;
            } & { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result } & opc_RiskAssessmentDefinition_Fixed & {
                    opc_riskassessmentdefinitionid: string;
                } & { opc_riskassessmentcategory_guid: string } & { opc_riskassessmentfactortemplate_guid: string } & {
                    opc_riskassessmentdefinitiontemplate_guid: string;
                } & { opc_isselected: boolean })[] = [
                generateRiskAssessmentDefinition("guid-assessment-marginal", "guid-test", "guid-marginal", true),
                generateRiskAssessmentDefinition("guid-assessment-lower", "guid-test", "guid-lower", false)
            ];

            // Arrange
            const updateSuggestedRisk = sandbox.stub(service, "updateSuggestedRisk").resolves();
            const getRiskDefinitions = sandbox.stub(service, "getRiskDefinitions").resolves(riskDefinitions);
            sandbox.stub(service, "getRiskAppetites").resolves(riskAppetites);

            // Act
            await control.init();
            await getRiskDefinitions;
            control.save();
            await updateSuggestedRisk;

            // Assert
            updateSuggestedRisk.should.have.been.called;
            updateSuggestedRisk.should.have.been.calledWith("guid-test", "guid-marginal");
        });
    });
});
