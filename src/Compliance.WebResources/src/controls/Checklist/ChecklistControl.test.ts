import { Controls } from "./ChecklistControl";
import { XrmContextMock } from "../../../test/XrmContextMock";
import { IChecklistService } from "../../interfaces";
import { ChecklistService } from "../../services/ChecklistService";
import { JQueryHelper } from "../../helpers/JQueryHelper";

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("ChecklistControl", () => {
    describe("when control is initialized", () => {
        let service: IChecklistService;
        let xrmContext: XrmContextMock;

        let documentContext: Document;
        let formElement: HTMLElement;
        const clock = sandbox.useFakeTimers();

        let control: Controls.ChecklistControl;

        beforeEach(() => {
            service = new ChecklistService();
            documentContext = document;
            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            formElement = documentContext.createElement("form");
            formElement.id = "checklist";
            documentContext.body.appendChild(formElement);

            control = new Controls.ChecklistControl(xrmContext, documentContext, service);
        });

        afterEach(() => {
            sandbox.restore();
            document.body.removeChild(formElement); // not a through dom reset, tried jsdom and had several issues
        });

        it("it should register handler for saving entity", () => {
            // Arrange
            const addEventListener = sandbox.stub(documentContext, "addEventListener");
            sandbox.stub(service, "getChecklist").resolves([]);
            sandbox.stub(service, "getQuestionTypes").resolves([]);
            sandbox.stub(JQueryHelper, "initSelectElements");

            // Act
            control.init();

            // Assert
            addEventListener.should.have.been.calledOnce;
            addEventListener.should.have.been.calledWith("entity-save");
        });

        it("it should load all question types", () => {
            // Arrange
            const getQuestionTypes = sandbox.stub(service, "getQuestionTypes").resolves([]);
            sandbox.stub(service, "getChecklist").resolves([]);
            sandbox.stub(JQueryHelper, "initSelectElements");

            // Act
            control.init();

            // Assert
            getQuestionTypes.should.have.been.called;
        });

        it("it should load all question responses", () => {
            // Arrange
            const getChecklist = sandbox.stub(service, "getChecklist").resolves([]);
            sandbox.stub(service, "getQuestionTypes").resolves([]);
            sandbox.stub(JQueryHelper, "initSelectElements");

            // Act
            control.init();

            // Assert
            getChecklist.should.have.been.called;
        });

        it.skip("it should only load all question responses when question types are loaded", () => {
            const checklistResponses: any[][] = [null];
            const qTypes: { id: string; type: string }[] = [{ id: "1", type: "Text" }];
            const forEachFake = sandbox.stub(checklistResponses, "forEach").callsFake(sinon.fake());
            sandbox.stub(service, "getChecklist").resolves(checklistResponses);
            sinon.stub(service, "getQuestionTypes").returns(
                new Promise((resolve, reject) => {
                    setTimeout(() => resolve(qTypes), 10);
                })
            );

            // Act
            control.init();

            // Assert
            forEachFake.should.not.have.been.called;
            clock.tick(15);
            forEachFake.should.have.been.called;
        });

        // The reason why it doesn't work is because getChecklist doesn't finish before the assertion happens.
        it("it should initialize the select/multiselect elements using the bootstrap-multiselect plugin", async () => {
            // Arrange
            const initSelectElementsStub = sandbox.stub(JQueryHelper, "initSelectElements");
            const checklistStub = sandbox.stub(service, "getChecklist").resolves([]);
            const getQuestionTypesStub = sandbox.stub(service, "getQuestionTypes").resolves([]);

            // Act
            control.init();
            await Promise.resolve(getQuestionTypesStub);
            await Promise.resolve(checklistStub);
            await Promise.resolve(initSelectElementsStub); // Very weird

            // Assert
            initSelectElementsStub.should.have.been.called;
        });
    });

    describe("when form is saving", () => {
        let service: ChecklistService;
        let xrmContext: XrmContextMock;

        let formElement: HTMLElement;
        let documentContext: Document;

        let control: Controls.ChecklistControl;

        beforeEach(() => {
            service = new ChecklistService();
            sandbox.stub(service, "getQuestionTypes").resolves([]);
            sandbox.stub(service, "getChecklist").resolves([]);
            sandbox.stub(JQueryHelper, "initSelectElements");

            xrmContext = new XrmContextMock();
            xrmContext.setQueryStringParameters({ id: "guid-test" }); // this is the format that is passed to the iframe

            documentContext = document;
            formElement = documentContext.createElement("form");
            formElement.id = "checklist";
            documentContext.body.appendChild(formElement);

            control = new Controls.ChecklistControl(xrmContext, documentContext, service);
            control.init();
        });

        afterEach(() => {
            sandbox.restore();
            documentContext.body.removeChild(formElement); // not a true dom reset, tried jsdom and had several issues
        });

        it("it should only update input text marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();

            formElement.insertAdjacentHTML("beforeend", "<input type='text' id='q-1' data-responseid='1' value='val' class='dirty'/>");
            formElement.insertAdjacentHTML("beforeend", "<input type='text' id='q-2' data-responseid='2' value='val' />");

            // Act
            // documentContext.dispatchEvent(new Event("entity-save"));
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1");

            // sandbox.restore();
            // document.body.removeChild(formElement);
        });

        it("it should only update textareas marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            formElement.insertAdjacentHTML("beforeend", "<textarea id='q-1' data-responseid='1' class='dirty'>update</textarea>");
            formElement.insertAdjacentHTML("beforeend", "<textarea id='q-2' data-responseid='2'>do not update</textarea>");

            // Act
            // documentContext.dispatchEvent(new Event("entity-save"));
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "update");
        });

        it("it should only update 'yes/no' input radios marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            formElement.insertAdjacentHTML(
                "beforeend",
                "<input type='radio' id='q-1-opt1' name='q-1' data-responseid='1' value='1' class='dirty' checked />"
            );
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-1-opt2' name='q-1' data-responseid='1' value='0' />");
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-2-opt1' name='q-2' data-responseid='2' value='1' />");
            formElement.insertAdjacentHTML("beforeend", "<input type='radio' id='q-2-opt2' name='q-2' data-responseid='2' value='0' />");

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "1");
        });

        it("it should update dirty 'yes/no' options to null if none are selected", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            formElement.insertAdjacentHTML(
                "beforeend",
                "<input type='radio' id='q-1-opt1' data-responseid='1' name='q-1' value='1' class='dirty' />"
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                "<input type='radio' id='q-1-opt2' data-responseid='1' name='q-1' value='0' class='dirty' />"
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", null);
        });

        it("it should only update dirty 'yes/no' selected option", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            formElement.insertAdjacentHTML(
                "beforeend",
                "<input type='radio' id='q-1-opt1' data-responseid='1' name='q-1' value='1' class='dirty' checked />"
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                "<input type='radio' id='q-1-opt2' data-responseid='1' name='q-1' value='0' class='dirty' />"
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "1");
        });

        it("it should only update input select marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            formElement.insertAdjacentHTML(
                "beforeend",
                '<select multiple="multiple" class="form-control select dirty" id="q-1" data-responseid="1"><option value="Opt1">Opt1</option><option value="Opt2" selected>Opt2</option><option value="Opt3">Opt3</option></select>'
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                '<select multiple="multiple" class="form-control select" id="q-2" data-responseid="2"><option value="Opt1">Opt1</option><option value="Opt2">Opt2</option><option value="Opt3">Opt3</option></select>'
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "Opt2;");
        });

        it("it should only update input multiselect marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            formElement.insertAdjacentHTML(
                "beforeend",
                '<select multiple="multiple" class="form-control multiselect dirty" id="q-1" data-responseid="1"><option value="Opt1" selected>Opt1</option><option value="Opt2" selected>Opt2</option><option value="Opt3">Opt3</option><option value="Opt">Opt</option></select>'
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                '<select multiple="multiple" class="form-control multiselect" id="q-2" data-responseid="2"><option value="Opt1">Opt1</option><option value="Opt2">Opt2</option><option value="Opt3">Opt3</option><option value="Opt">Opt</option></select>'
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "Opt1; Opt2;");
        });

        it("it should only update input date marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();

            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-1" data-responseid="1" type="date" class="form-control dirty" value="2020-10-23" />'
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-2" data-responseid="2" type="date" class="form-control" value="2020-10-24" />'
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "2020-10-23");
        });

        it("it should only update input number marked dirty", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();

            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-1" data-responseid="1" type="number" class="form-control dirty" value="819" />'
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-2" data-responseid="2" type="number" class="form-control" value="101" />'
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledOnce;
            updateQuestionResponseStub.should.have.been.calledWith("1", "819");
        });

        it("it should update all input calculated field", () => {
            // Arrange
            const updateQuestionResponseStub = sandbox.stub(service, "updateChecklistResponse").resolves();
            sandbox.stub(control, "getResponseValue");
            sandbox.stub(control, "isNullOrWhiteSpace").returns(false);
            sandbox.stub(control, "calculate").returns("newValue");

            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-4" data-responseid="4" type="text" class="form-control calculated-field" data-additionalparameters="1 - 2" />'
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-5" data-responseid="5" type="text" class="form-control calculated-field" data-additionalparameters="1 + 2" />'
            );
            formElement.insertAdjacentHTML(
                "beforeend",
                '<input id="q-6" data-responseid="6" type="text" class="form-control calculated-field" data-additionalparameters="2 + 3-4 * 8.2.3.4.5 / 2.1" />'
            );

            // Act
            control.save();

            // Assert
            updateQuestionResponseStub.should.have.been.calledThrice;
            updateQuestionResponseStub.should.have.been.calledWith("4", "newValue");
            updateQuestionResponseStub.should.have.been.calledWith("5", "newValue");
            updateQuestionResponseStub.should.have.been.calledWith("6", "newValue");
        });

        describe("and a calculated field is updated", () => {
            it("it should call calculate as much as there are operators in the formula", () => {
                // Arrange
                const calculateStub = sandbox.stub(control, "calculate").returns("newValue");

                sandbox.stub(service, "updateChecklistResponse").resolves();
                sandbox.stub(control, "getResponseValue");
                sandbox.stub(control, "isNullOrWhiteSpace").returns(false);

                formElement.insertAdjacentHTML(
                    "beforeend",
                    '<input id="q-6" data-responseid="6" type="text" class="form-control calculated-field" data-additionalparameters="2 + 3 - 4 * 8.2.3.4.5 / 2.1" />'
                );

                // Act
                control.save();

                // Assert
                calculateStub.should.have.been.callCount(4);
            });
        });
    });
});
