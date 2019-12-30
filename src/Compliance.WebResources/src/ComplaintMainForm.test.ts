/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/context.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/dg.xrmquery.web.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/metadata.d.ts" />

import { XrmExecutionContextMock } from '../test/XrmExecutionContextMock';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from './services/ComplaintService';
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("when initialized", () => {

    /*beforeEach(() => {
        XrmMockGenerator.initialise();
    });*/

    it("it should call load complaint", () => {
        // Arrange
        let service = new ComplaintService();
        let getComplaint = sinon.fake.returns(null)
        
        sinon.replace(service, "getComplaint", getComplaint);
        let sut = new Complaint.Forms.MainForm(service);

        let mockContext = new XrmExecutionContextMock<Form.opc_complaint.Main.Information>();
        let contextSpy = sinon.spy(mockContext);

        // Act
        sut.initializeComponents(mockContext);

        // Assert
        getComplaint.should.have.been.called;
        contextSpy.getFormContext.should.have.been.called;
    });

});