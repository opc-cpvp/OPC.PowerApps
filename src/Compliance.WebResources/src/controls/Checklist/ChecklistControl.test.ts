import { Controls } from './ChecklistControl';
import { XrmContextMock } from '../../../test/XrmContextMock';
import { IChecklistService } from '../../interfaces';
import { ChecklistService } from '../../services/ChecklistService';
import { JQueryHelper } from '../../helpers/JQueryHelper';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("ChecklistControl", () => {
    describe("when control is initialized", () => {
        let service: IChecklistService;
        let xrmContext: XrmContextMock;

        let documentContext: Document;
        let formElement: HTMLElement;
        let clock = sandbox.useFakeTimers();

        let control: Controls.ChecklistControl;

        beforeEach(function () {
            service = new ChecklistService();
            documentContext = document;
            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe
            sandbox.stub(JQueryHelper, "initSelectElements").resolves();

            formElement = documentContext.createElement("form");
            formElement.id = 'checklist';
            documentContext.body.appendChild(formElement);

            control = new Controls.ChecklistControl(xrmContext, documentContext, service);
        });

        afterEach(function () {
            sandbox.restore();
            document.body.removeChild(formElement); // not a through dom reset, tried jsdom and had several issues
        });

        it("it should register handler for saving entity", () => {
            // Arrange
            let addEventListener = sandbox.stub(documentContext, 'addEventListener');
            sandbox.stub(service, 'getChecklist').resolves([]);
            sandbox.stub(service, 'getQuestionTypes').resolves([]);

            // Act
            control.init();

            // Assert
            addEventListener.should.have.been.calledOnce;
            addEventListener.should.have.been.calledWith('entity-save');
        });

        it("it should load all question types", () => {
            // Arrange
            let getQuestionTypes = sandbox.stub(service, 'getQuestionTypes').resolves([]);
            sandbox.stub(service, 'getChecklist').resolves([]);

            // Act
            control.init();

            // Assert
            getQuestionTypes.should.have.been.called;
        });


        it("it should load all question responses", () => {
            // Arrange
            let getChecklist = sandbox.stub(service, 'getChecklist').resolves([]);
            sandbox.stub(service, 'getQuestionTypes').resolves([]);

            // Act
            control.init();

            // Assert
            getChecklist.should.have.been.called;
        });

        it.skip("it should only load all question responses when question types are loaded", async () => {

            let checklistResponses: Array<any>[] = [null];
            let qTypes: { id: string, type: string }[] = [{ id: "1", type: "Text" }];
            let forEachFake = sandbox.stub(checklistResponses, 'forEach').callsFake(sinon.fake());
            sandbox.stub(service, 'getChecklist').resolves(checklistResponses);
            sinon.stub(service, "getQuestionTypes").returns(new Promise((resolve, reject) => {
                setTimeout(() => resolve(qTypes), 10);
            }));

            // Act
            control.init();

            // Assert
            forEachFake.should.not.have.been.called;
            clock.tick(15);
            forEachFake.should.have.been.called;
        });

        it.skip("it should initialize the select/multiselect elements using the bootstrap-multiselect plugin", async () => {
            // Arrange
            sandbox.stub(service, 'getChecklist').resolves([]);
            sandbox.stub(service, 'getQuestionTypes').resolves([]);

            // Act
            control.init();

            // Assert
        });

    });

    describe("when form is saving", () => {
        let service: ChecklistService;
        let xrmContext: XrmContextMock;

        let formElement: HTMLElement;
        let documentContext: Document;

        let control: Controls.ChecklistControl;

        beforeEach(function () {
            service = new ChecklistService();
            sandbox.stub(service, 'getQuestionTypes').resolves([]);
            sandbox.stub(service, 'getChecklist').resolves([]);
            sandbox.stub(JQueryHelper, "initSelectElements");

            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            documentContext = document;
            formElement = documentContext.createElement("form");
            formElement.id = 'checklist';
            documentContext.body.appendChild(formElement);

            control = new Controls.ChecklistControl(xrmContext, documentContext, service);
            control.init();
        });

        afterEach(function () {
            sandbox.restore();
            documentContext.body.removeChild(formElement); // not a true dom reset, tried jsdom and had several issues
        });

        it("it should only update input text marked dirty", () => {
            // Arrange
            let updateQuestionResponseStub = sandbox.stub(service, 'updateChecklistResponse').resolves();

            formElement.insertAdjacentHTML("beforeend", "<input type='text' id='q-1' data-responseid='1' value='val' class='dirty'/>")
            formElement.insertAdjacentHTML("beforeend", "<input type='text' id='q-2' data-responseid='2' value='val' />")

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1");
        });


        it("it should only update textareas marked dirty", () => {
            // Arrange
            let updateQuestionResponseStub = sandbox.stub(service, 'updateChecklistResponse').resolves();
            formElement.insertAdjacentHTML("beforeend", "<textarea id='q-1' data-responseid='1' class='dirty'>update</textarea>")
            formElement.insertAdjacentHTML("beforeend", "<textarea id='q-2' data-responseid='2'>do not update</textarea>")

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "update");
        });


        it("it should only update 'yes/no' input radios marked dirty", () => {
            // Arrange
            let updateQuestionResponseStub = sandbox.stub(service, 'updateChecklistResponse').resolves();
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt1' name='q-1' data-responseid='1' value='1' class='dirty' checked />")
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt2' name='q-1' data-responseid='1' value='0' />")
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-2-opt1' name='q-2' data-responseid='2' value='1' />")
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-2-opt2' name='q-2' data-responseid='2' value='0' />")

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "1");
        });

        it("it should update dirty 'yes/no' options to null if none are selected", () => {
            // Arrange
            let updateQuestionResponseStub = sandbox.stub(service, 'updateChecklistResponse').resolves();
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt1' data-responseid='1' name='q-1' value='1' class='dirty' />")
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt2' data-responseid='1' name='q-1' value='0' class='dirty' />")

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", null);
        });

        it("it should only update dirty 'yes/no' selected option", () => {
            // Arrange
            let updateQuestionResponseStub = sandbox.stub(service, 'updateChecklistResponse').resolves();
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt1' data-responseid='1' name='q-1' value='1' class='dirty' checked />")
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt2' data-responseid='1' name='q-1' value='0' class='dirty' />")

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "1");
        });

    });
});