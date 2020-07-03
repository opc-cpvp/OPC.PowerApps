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

        it.skip("it should update the suggested risk", () => {
            // Arrange
            let updateSuggestedRisk = sandbox.stub(service, 'updateSuggestedRisk').resolves();
            sandbox.stub(service, 'getRiskAppetites').resolves([]);
            sandbox.stub(service, 'getRiskDefinitions').resolves([]);

            // Act
            control.initializeControl();
            control.save();

            // Assert
            updateSuggestedRisk.should.have.been.called;
        });
    });
});