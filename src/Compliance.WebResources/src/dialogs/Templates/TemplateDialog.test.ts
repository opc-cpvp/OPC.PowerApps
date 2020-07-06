
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var sandbox = sinon.createSandbox();
chai.should();
chai.use(sinonChai);

describe("TemplateDialog", () => {
    describe("when dialog is initialized", () => {
        beforeEach(function () {

        });

        afterEach(function () {
            sandbox.restore();
        });

        it("it should get data parameter from the url", () => {
            // Arrange

            // Act

            // Assert
        });
        it("it should get the associated complaint", () => {
            // Arrange

            // Act

            // Assert
        });
        it("it should get the user's email", () => {
            // Arrange

            // Act

            // Assert
        });
        it("it should get the environment variable for the application id and tenant id", () => {
            // Arrange

            // Act

            // Assert
        });
        it("it should get an access token", () => {
            // Arrange

            // Act

            // Assert
        });
        it("it should render the modal on the page.", () => {
            // Arrange

            // Act

            // Assert
        });
    });
});