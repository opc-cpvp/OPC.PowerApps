/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/context.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/dg.xrmquery.web.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/metadata.d.ts" />

import 'ts-nameof';
import { XrmExecutionContextMock } from '../test/XrmExecutionContextMock';
import { describe } from 'mocha';
import { Complaint } from './ComplaintMainForm';
import { ComplaintService } from './services/ComplaintService';
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);


/**
* The MockOf type takes a class and an optional union of 
* public members which we don't want to have to implement in
* our mock.
*/
type MockOf<Class, Pick extends keyof Class = never> = {
    [Member in Extract<keyof Class, Pick>]: Class[Member];
}

/**
 * Our mock need only implement the members we need. Note that even the omitted members
 * are still type-safe: changing the name of "unimportantField" in MyClass will
 * result in a compiler error in the mock.
 */
/*class MockExecutionContext
    implements MockOf<Xrm.ExecutionContext<Xrm.BasicPage>, 'getFormContext'> {

    getFormContext(): Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase> {
        return new MockEntityPage();
    }

}*/

/*class MockEntityPage implements MockOf<Xrm.BasicPage, 'getAttribute' | 'getControl'> {
    getAttribute(attrName: string): Xrm.Attribute<any> | undefined {
        return null;
    };
    getControl(ctrlName: string): Xrm.AnyControl | undefined {
        return null;
    }
}*/


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
        getComplaint.should.have.been.calledOnce;
        contextSpy.getFormContext.should.have.been.called;
    });

});