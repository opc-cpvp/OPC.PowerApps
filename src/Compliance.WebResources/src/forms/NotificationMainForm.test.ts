﻿import { XrmExecutionContextMock } from '../../test/XrmExecutionContextMock';
import { Notification } from './NotificationMainForm';
import { NotificationService } from '../services/NotificationService';

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);

// SAMPLE TEST
describe("when initialized", () => {

    //it("it should call load notification", () => {
    //    // Arrange
    //    let service = new NotificationService();
    //    let getNotification = sinon.fake.returns(null)

    //    sinon.replace(service, "getNotification", getNotification);
    //    let sut = new Notification.Forms.MainForm(service);

    //    let mockContext = new XrmExecutionContextMock<Form.opc_notification.Main.Information, any>();
    //    let contextSpy = sinon.spy(mockContext);

    //    // Act
    //    sut.initializeComponents(mockContext);

    //    // Assert
    //    getNotification.should.have.been.called;
    //    contextSpy.getFormContext.should.have.been.called;
    //});

    // WHAT ARE THE TESTS I SHOULD CREATE???
    /*
     * If ComplaintID contains a value => it should display the field
     */

});
