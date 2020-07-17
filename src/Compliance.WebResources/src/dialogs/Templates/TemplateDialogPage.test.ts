
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("TemplateDialogPage", () => {
    describe("when page is loading", () => {
        beforeEach(function () {

        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should create a template dialog", () => {
            // Arrange

            // Act

            // Assert
        });
        it("it should initializa the template dialog", () => {
            // Arrange

            // Act

            // Assert
        });
    });
});