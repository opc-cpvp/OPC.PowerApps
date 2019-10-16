///// <reference path="../test/xrmpage.d.ts" />
//import { should, assert } from 'chai';
//import { PaFile } from '../ts/PaFileMainForm';
//import "../test/XrmPage.js";
//import "../test/Attribute.js";
//import "../test/Control.js";
//import { describe, Test } from 'mocha';
//should();

//import * as sinon from 'sinon';
//import * as chai from 'chai';

//const expect = chai.expect;
//import * as sinonChai from 'sinon-chai';
//import * as TestHelper from '../test/common';
//import * as Ci2 from "./common";

//chai.use(sinonChai);

//declare var Xrm: Xrm<Form.cms_pafile.Main.Information>;

//describe(TestHelper.formatTitle("PaFile.MainForm.form_OnSave (@event OnSave)"), () => {
//    describe("When the form type is Create", () => {
//        it("set transflagreceived (cms_transflagreceived) to true", () => {
//            // arrange
//            let mock = CreateMockForm();
//            mock.Page.ui.getFormType = () => FormType.Create;
//            Xrm.Page.getAttribute("cms_transflagreceived").setValue = sinon.fake();

//            // act
//            PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//            // assert
//            expect(Xrm.Page.getAttribute("cms_transflagreceived").setValue).calledOnceWithExactly(true);
//        });
//    });
//    describe("When the form type is not Create (e.g. ReadOnly)", () => {
//        it("set transflagreceived (cms_transflagreceived) to false", () => {
//            // arrange
//            let mock = CreateMockForm();
//            mock.Page.ui.getFormType = () => FormType.ReadOnly;
//            Xrm.Page.getAttribute("cms_transflagreceived").setValue = sinon.fake();

//            // act
//            PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//            // assert
//            expect(Xrm.Page.getAttribute("cms_transflagreceived").setValue).calledOnceWithExactly(false);
//        });
//        describe(TestHelper.formatSection("Validate Form"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.ui.getFormType = () => FormType.ReadOnly;
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility = sinon.fake((<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility);

//                // act
//                PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//                // assert
//                expect((<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility).calledOnce;
//            });
//        });
//        describe("When validation is valid", () => {
//            describe(TestHelper.formatSection("PaFile.MainForm.SetClosedDate"), () => {
//                describe("When Date 'Close - Follow Up (cms_closeddatefollowup)' is the most recent date (e.g. Today's)", () => {
//                    it("Set 'Last Date Close (cms_dateclosed)' value to 'Close - Follow Up (cms_closeddatefollowup)' and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(newest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").getValue().toDateString()).equals(newest.toDateString());
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                    it("Set 'Last Disposition (cms_dispositiontext)' value to equal 'Disposition (ms_dispositioninvestigation)' text and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(newest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dispositiontext").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setValue).calledOnceWithExactly("some cms_dispositionfollowup");
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                });
//                describe("When 'Date Closed - Investigation (cms_dateofdispositioninvestigation)' is the most recent date (e.g. Today's)", () => {
//                    it("Set 'Last Date Close (cms_dateclosed)' value to 'Date Closed - Investigation (cms_dateofdispositioninvestigation)' and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(newest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(oldest);;
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").getValue().toDateString()).equals(newest.toDateString());
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                    it("Set 'Last Disposition (cms_dispositiontext)' value to 'Disposition - Investigation (cms_dispositioninvestigation)' text and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(newest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(oldest);;
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dispositiontext").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setValue).calledOnceWithExactly("some cms_dispositioninvestigation");
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                });
//                describe("When 'Date Closed - Early Resolution (cms_closeddateearlyres)' is the most recent date (e.g. Today's)", () => {
//                    it("Set 'Last Date Close (cms_dateclosed) value to 'Date Closed - Early Resolution (cms_closeddateearlyres)' and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(newest);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").getText = () => "some cms_dispositionearlyresolution";
//                        Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").getValue().toDateString()).equals(newest.toDateString());
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                    it("Set 'Last Disposition (cms_dispositiontext)' value to 'Disposition - Early Resolution (cms_dispositionearlyresolution)' text and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(newest);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").getText = () => "some cms_dispositionearlyresolution";
//                        Xrm.Page.getAttribute("cms_dispositiontext").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setValue).calledOnceWithExactly("some cms_dispositionearlyresolution");
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                });
//                describe("When 'Date Closed - Intake (cms_closeddateintake)' is the most recent date (e.g. Today's)", () => {
//                    it("Set 'Last Date Close (cms_dateclosed)' value to 'Date Closed - Intake (cms_closeddateintake)' and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(newest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").getText = () => "some cms_dispositionearlyresolution";
//                        Xrm.Page.getAttribute("cms_dispositionintake").getText = () => "some cms_dispositionintake";
//                        Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").getValue().toDateString()).equals(newest.toDateString());
//                        expect(Xrm.Page.getAttribute("cms_dateclosed").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                    it("Set 'Last Disposition (cms_dispositiontext)' value to 'Disposition - Early Resolution (cms_dispositionearlyresolution) text and submit mode to 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let newest = new Date();
//                        let oldest = new Date(2000, 1, 1);
//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(oldest);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(newest);
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").getText = () => "some cms_dispositionfollowup";
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").getText = () => "some cms_dispositioninvestigation";
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").getText = () => "some cms_dispositionearlyresolution";
//                        Xrm.Page.getAttribute("cms_dispositionintake").getText = () => "some cms_dispositionintake";
//                        Xrm.Page.getAttribute("cms_dispositiontext").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetClosedDate();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setValue).calledOnceWithExactly("some cms_dispositionintake");
//                        expect(Xrm.Page.getAttribute("cms_dispositiontext").setSubmitMode).calledOnceWithExactly("always");
//                    });
//                });
//            });

//            describe(TestHelper.formatSection("PaFile.MainForm.SetSavedSectionFlag"), () => {
//                describe("When 'File Type (cms_filetype)' is 'Intake'", () => {
//                    it("Set 'Hast Intake (cms_hasintake) Value and SubmitMode to 'true' and 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                        Xrm.Page.getAttribute("cms_hasintake").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_hasintake").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetSavedSectionFlag();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_hasintake").setValue).calledOnceWithExactly(true);
//                        expect(Xrm.Page.getAttribute("cms_hasintake").setSubmitMode).calledOnceWithExactly("always");

//                    });
//                });
//                describe("When 'File Type (cms_filetype)' is 'Incident'", () => {
//                    it("Set 'Has Incident (cms_hasincident)' Value and SubmitMode to 'true' and 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                        Xrm.Page.getAttribute("cms_hasincident").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_hasincident").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetSavedSectionFlag();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_hasincident").setValue).calledOnceWithExactly(true);
//                        expect(Xrm.Page.getAttribute("cms_hasincident").setSubmitMode).calledOnceWithExactly("always");

//                    });
//                });
//                describe("When 'File Type (cms_filetype)' is 'Notification'", () => {
//                    it("Set 'Has 82m (cms_has82m)' Value and SubmitMode to 'true' and 'always'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                        Xrm.Page.getAttribute("cms_has82m").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_has82m").setSubmitMode = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).SetSavedSectionFlag();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_has82m").setValue).calledOnceWithExactly(true);
//                        expect(Xrm.Page.getAttribute("cms_has82m").setSubmitMode).calledOnceWithExactly("always");

//                    });
//                });
//                describe("When 'File Type (cms_filetype)' is 'Complaint'", () => {
//                    describe("When 'Complaint Phase (cms_complaintphase)' is 'EarlyResolution'", () => {
//                        it("Set 'Has Early Re (cms_hasearlyres)' Value and SubmitMode to 'true' and 'always'", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                            Xrm.Page.getAttribute("cms_hasearlyres").setValue = sinon.fake();
//                            Xrm.Page.getAttribute("cms_hasearlyres").setSubmitMode = sinon.fake();

//                            // act
//                            (<any>PaFile.MainForm).SetSavedSectionFlag();

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_hasearlyres").setValue).calledOnceWithExactly(true);
//                            expect(Xrm.Page.getAttribute("cms_hasearlyres").setSubmitMode).calledOnceWithExactly("always");

//                        });
//                    });
//                    describe("When 'Complaint Phase (cms_complaintphase)' is 'Investigation'", () => {
//                        it("Set 'Has Investigation (cms_hasinvestigation)' Value and SubmitMode to 'true' and 'always'", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                            Xrm.Page.getAttribute("cms_hasinvestigation").setValue = sinon.fake();
//                            Xrm.Page.getAttribute("cms_hasinvestigation").setSubmitMode = sinon.fake();

//                            // act
//                            (<any>PaFile.MainForm).SetSavedSectionFlag();

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_hasinvestigation").setValue).calledOnceWithExactly(true);
//                            expect(Xrm.Page.getAttribute("cms_hasinvestigation").setSubmitMode).calledOnceWithExactly("always");

//                        });
//                    });
//                    describe("When 'Complaint Phase (cms_complaintphase)' is 'Followup'", () => {
//                        it("Set 'Has FollowUp (cms_hasfollowup) Value and SubmitMode to 'true' and 'always'", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                            Xrm.Page.getAttribute("cms_hasfollowup").setValue = sinon.fake();
//                            Xrm.Page.getAttribute("cms_hasfollowup").setSubmitMode = sinon.fake();

//                            // act
//                            (<any>PaFile.MainForm).SetSavedSectionFlag();

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_hasfollowup").setValue).calledOnceWithExactly(true);
//                            expect(Xrm.Page.getAttribute("cms_hasfollowup").setSubmitMode).calledOnceWithExactly("always");

//                        });
//                    });
//                });
//            });

//            describe(TestHelper.formatSection("PaFile.MainForm.ClearTransitionFlags"), () => {
//                it("Clear transition flags:cms_transflagearlyres ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    mock.Page.ui.getFormType = () => FormType.Update;
//                    Xrm.Page.getAttribute("cms_transflagearlyres").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_transflaginvestigation").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_transflagfollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_transflag82m").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_transflagincident").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_transflagintake").setValue = sinon.fake();

//                    // act
//                    PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_transflagearlyres").setValue).calledOnceWithExactly(false);
//                    expect(Xrm.Page.getAttribute("cms_transflaginvestigation").setValue).calledOnceWithExactly(false);
//                    expect(Xrm.Page.getAttribute("cms_transflagfollowup").setValue).calledOnceWithExactly(false);
//                    expect(Xrm.Page.getAttribute("cms_transflag82m").setValue).calledOnceWithExactly(false);
//                    expect(Xrm.Page.getAttribute("cms_transflagincident").setValue).calledOnceWithExactly(false);
//                    expect(Xrm.Page.getAttribute("cms_transflagintake").setValue).calledOnceWithExactly(false);
//                });
//            });
//        });
//        describe("When form is not valid (e.g. 'intake failed check 1'", () => {
//            it("Display alert: (intake failed check 1)", () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.ui.getFormType = () => FormType.Update;
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                (<any>Xrm.Page.getControl("SubjectList")).getGrid = () => ({ getTotalRecordCount: () => 2 }); // more than one record (to avoid two alerts)
//                (<any>global).alert = sinon.fake();

//                // act
//                PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//                // assert
//                expect((<any>global).alert).calledWithMatch(sinon.match("(intake failed check 1)"));
//            });
//        });
//        describe("When no subjects entered ", () => {
//            it("Display alert: Please enter at least one subject.", () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.ui.getFormType = () => FormType.Update;
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                (<any>Xrm.Page.getControl("SubjectList")).getGrid = () => ({ getTotalRecordCount: () => 0 }); // more than one record (to avoid two alerts)
//                (<any>global).alert = sinon.fake();

//                // act
//                PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//                // assert
//                expect((<any>global).alert).calledWith("Please enter at least one subject.");
//            });
//        });
//        describe("When no Section/Principle entered (ER)", () => {
//            it("Display alert: Please enter at least one Section / Principle.", () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.ui.getFormType = () => FormType.ReadOnly;
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                (<any>Xrm.Page.getControl("PrivacySections")).getGrid = () => ({ getTotalRecordCount: () => 0 }); // more than one record (to avoid two alerts)
//                (<any>global).alert = sinon.fake();

//                // act
//                PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//                // assert
//                expect((<any>global).alert).calledWith("Please enter at least one Section/Principle.");
//            });
//        });
//        describe("When no Section/Principle entered (Investigation)", () => {
//            it("Display alert: Please enter at least one Section/Principle.", () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.ui.getFormType = () => FormType.ReadOnly;
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                (<any>Xrm.Page.getControl("PrivacySections")).getGrid = () => ({ getTotalRecordCount: () => 0 }); // more than one record (to avoid two alerts)
//                (<any>global).alert = sinon.fake();

//                // act
//                PaFile.MainForm.form_OnSave(TestHelper.fakeContext());

//                // assert
//                expect((<any>global).alert).calledWith("Please enter at least one Section/Principle.");
//            });
//        });

//    });
//});

//describe(TestHelper.formatTitle("PaFile.MainForm.form_OnLoad"), () => {
//    describe("When the form is loading in the create mode", () => {
//        it("Should save the file to get a file number", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.data.entity.save = sinon.fake();

//            // act
//            PaFile.MainForm.form_OnLoad();

//            // assert
//            expect(Xrm.Page.data.entity.save).to.have.been.called;
//        });
//    });

//    describe("When the form is loading in the update mode", () => {
//        it("Should not save the file to get a file number", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.data.entity.save = sinon.fake();
//            mock.Page.ui.setFormType(FormType.Update);

//            // act
//            PaFile.MainForm.form_OnLoad();

//            // assert
//            expect(Xrm.Page.data.entity.save).to.not.have.been.called;
//        });
//        it("Set 'File Type (cms_filetype)', 'Date Received (cms_datereceived)', 'Status Code (cms_status) as 'required'", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.data.entity.save = sinon.fake();
//            mock.Page.ui.setFormType(FormType.Update);

//            // act
//            PaFile.MainForm.form_OnLoad();

//            // assert
//            assert.equal(Xrm.Page.getAttribute("cms_filetype").getRequiredLevel(), "required");
//            assert.equal(Xrm.Page.getAttribute("cms_datereceived").getRequiredLevel(), "required");
//            assert.equal(Xrm.Page.getAttribute("cms_status").getRequiredLevel(), "required");
//        });

//        it("Should re-enable sections", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.data.entity.save = sinon.fake();
//            mock.Page.ui.setFormType(FormType.Update);
//            (<any>PaFile.MainForm).HideAllSections = sinon.fake((<any>PaFile.MainForm).HideAllSections);
//            (<any>PaFile.MainForm).EnableSections = sinon.fake((<any>PaFile.MainForm).EnableSections);

//            // act
//            PaFile.MainForm.form_OnLoad();

//            // assert
//            expect((<any>PaFile.MainForm).HideAllSections).called;
//            expect((<any>PaFile.MainForm).EnableSections).called;
//        });
//        it("Disable 'File Number (cms_filenumber)' and 'Open OFFICIUM (cms_openofficium)'", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.data.entity.save = sinon.fake();
//            mock.Page.ui.setFormType(FormType.Update);
//            Xrm.Page.getControl("cms_filenumber").setFocus = sinon.fake();
//            Xrm.Page.getControl("cms_filenumber").setDisabled = sinon.fake();
//            Xrm.Page.getControl("cms_openofficium").setDisabled = sinon.fake();
//            Xrm.Page.getAttribute("cms_openofficium").setValue = sinon.fake();

//            // act
//            PaFile.MainForm.form_OnLoad();

//            // assert
//            expect(Xrm.Page.getControl("cms_filenumber").setFocus).called,
//                expect(Xrm.Page.getControl("cms_filenumber").setDisabled).calledOnceWithExactly(true);
//            expect(Xrm.Page.getControl("cms_openofficium").setDisabled).calledOnceWithExactly(true);
//            expect(Xrm.Page.getAttribute("cms_openofficium").setValue).calledOnceWithExactly(false);

//        });
//        describe(TestHelper.formatSection("Set required level based on status"), () => {
//            it(TestHelper.formatSharedCodeAssert("setRequiredLevelBasedOnStatus"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.data.entity.save = sinon.fake();
//                mock.Page.ui.setFormType(FormType.Update);
//                (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus = sinon.fake((<any>PaFile.MainForm).setRequiredLevelBasedOnStatus);

//                // act
//                PaFile.MainForm.form_OnLoad();

//                // assert
//                expect((<any>PaFile.MainForm).setRequiredLevelBasedOnStatus).called;

//            });
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.fileType_OnChange"), () => {

//    describe(TestHelper.formatSection("Check file and phase"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.checkFileAndPhase"), function () {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).checkFileAndPhase = sinon.fake((<any>PaFile.MainForm).checkFileAndPhase);

//            // act
//            PaFile.MainForm.fileType_OnChange();

//            // assert
//            expect((<any>PaFile.MainForm).checkFileAndPhase).called;
//        });
//    });

//    it("The 'Complaint Phase (cms_complaintphase)' is hidden", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getControl("cms_complaintphase").setVisible(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        should().equal(mock.Page.getControl("cms_complaintphase").getVisible(), false);
//    });

//    it("Clear all Incident fields if the files was never saved as an Incident", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_hasintake").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        mock.Page.getAttribute("cms_incidenttype").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_reportedby").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_priorityincident").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_affectedpartiesnotified").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_occurencedate").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_numberofindividualsaffected").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_closeddateincident").setValue("Foo Bar");

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.isNull(mock.Page.getAttribute("cms_incidenttype").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_reportedby").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_priorityincident").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_affectedpartiesnotified").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_occurencedate").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_numberofindividualsaffected").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_closeddateincident").getValue());
//    });

//    it("Clear all Notification fields if the files was never saved as an Notification", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_has82m").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        mock.Page.getAttribute("cms_datedue82m").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_dateofanticipatedrelease").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_publicinterestdisclosureunderotherlegisla").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_closeddate82m").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_notificationtype").setValue("Foo Bar");

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.isNull(mock.Page.getAttribute("cms_datedue82m").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_dateofanticipatedrelease").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_publicinterestdisclosureunderotherlegisla").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_closeddate82m").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_notificationtype").getValue());
//    });

//    it("The Notification type field is not required if the files was never saved as an Notification", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_has82m").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        should().equal(mock.Page.getAttribute("cms_notificationtype").getRequiredLevel(), "none");
//    });

//    it("Clear all EarlyResolution fields if the files was never saved as an EarlyResolution", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_hasearlyres").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.isNull(mock.Page.getAttribute("cms_dispositionearlyresolution").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_datedueearlyres").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_closeddateearlyres").getValue());
//    });

//    it("Clear all Investigation fields if the files was never saved as an Investigation", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_hasinvestigation").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        mock.Page.getAttribute("cms_dispositioninvestigation").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_acknowledgmentlettersentdate").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_notificationlettersentdate").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_datesection33lettersent").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_datesection35lettersent").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_dateofdispositioninvestigation").setValue("Foo Bar");

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.isNull(mock.Page.getAttribute("cms_dispositioninvestigation").getValue(), "cms_dispositioninvestigation");
//        assert.isNull(mock.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").getValue(), "cms_dateofexpectedcompletioninvestigation");
//        assert.isNull(mock.Page.getAttribute("cms_acknowledgmentlettersentdate").getValue(), "cms_acknowledgmentlettersentdate");
//        assert.isNull(mock.Page.getAttribute("cms_notificationlettersentdate").getValue(), "cms_notificationlettersentdate");
//        assert.isNull(mock.Page.getAttribute("cms_datesection33lettersent").getValue(), "cms_datesection33lettersent");
//        assert.isNull(mock.Page.getAttribute("cms_datesection35lettersent").getValue(), "cms_datesection35lettersent");
//        assert.isNull(mock.Page.getAttribute("cms_dateofdispositioninvestigation").getValue(), "cms_dateofdispositioninvestigation");
//    });

//    it("Set Investigation's deemed denial to 'No' if the files was never saved as an Investigation", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_hasinvestigation").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.equal(mock.Page.getAttribute("cms_deemeddenial").getValue(), cms_pafile_cms_deemeddenial.No);
//    });

//    it("Clear all Follow Up fields if the files was never saved as a Follow Up", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_hasfollowup").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        mock.Page.getAttribute("cms_numberofrecommendations").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_dispositionfollowup").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_numberofrecommendationsimplemented").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_dateduefollowup").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_closeddatefollowup").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_descriptionfollowup").setValue("Foo Bar");

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.isNull(mock.Page.getAttribute("cms_numberofrecommendations").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_dispositionfollowup").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_numberofrecommendationsimplemented").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_dateduefollowup").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_closeddatefollowup").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_descriptionfollowup").getValue());
//    });

//    it("Clear all <generic??> investigation fields if the files was never saved as a Complaint", function () {
//        // arrange
//        let mock = CreateMockForm();
//        mock.Page.getAttribute("cms_has82m").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_hasinvestigation").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_hasfollowup").unitTesting_ResetInitValue(false);
//        mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Intake);

//        mock.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(new Date());
//        mock.Page.getAttribute("cms_complexity").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_prioritycomplaint").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_complainttypeid").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_parentinvestigationid").setValue("Foo Bar");
//        mock.Page.getAttribute("cms_jointparallelinvestigation").setValue("Foo Bar");

//        // act
//        PaFile.MainForm.fileType_OnChange();

//        // assert
//        assert.isNull(mock.Page.getAttribute("cms_dateofcomplaintacceptance").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_complexity").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_prioritycomplaint").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_complainttypeid").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_parentinvestigationid").getValue());
//        assert.isNull(mock.Page.getAttribute("cms_jointparallelinvestigation").getValue());
//    });

//    describe("When file type is Complaint", function () {
//        it("The complaint phase is visible", function () {
//            // arrange
//            let mock = CreateMockForm();
//            mock.Page.getControl("cms_complaintphase").setVisible(false);
//            mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Complaint);

//            // act
//            PaFile.MainForm.fileType_OnChange();

//            // assert
//            should().equal(mock.Page.getControl("cms_complaintphase").getVisible(), true);
//        });

//        it("The 'complaint phase' is required", function () {
//            // arrange
//            let mock = CreateMockForm();
//            mock.Page.getAttribute("cms_filetype").unitTesting_ResetInitValue(cms_pafile_cms_filetype.Complaint);

//            // act
//            PaFile.MainForm.fileType_OnChange();

//            // assert
//            should().equal(mock.Page.getAttribute("cms_complaintphase").getRequiredLevel(), "required");
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.complaintStage_OnChange"), () => {
//    describe("Check file and phase", function () {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.checkFileAndPhase"), function () {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//            (<any>PaFile.MainForm).checkFileAndPhase = sinon.fake((<any>PaFile.MainForm).checkFileAndPhase);

//            // act
//            PaFile.MainForm.complaintStage_OnChange();

//            // assert
//            expect((<any>PaFile.MainForm).checkFileAndPhase).called;
//        });
//    });
//    describe("When 'File Type (cms_filetype)' is Complaint and 'Complaint Phase (cms_complaintphase)' is Investigation", () => {
//        it("Set label of Investigation section", function () {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//            let selectedStage = Xrm.Page.getAttribute("cms_complaintphase").getText();
//            Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setLabel = sinon.fake();

//            // act
//            PaFile.MainForm.complaintStage_OnChange();

//            // assert
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setLabel).called;
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setLabel).calledWith(selectedStage);
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.complaintType_OnChange"), () => {
//    describe("Check investigation recommendations", function () {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.checkInvestigationRecommendations"), function () {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//            (<any>PaFile.MainForm).checkInvestigationRecommendations = sinon.fake((<any>PaFile.MainForm).checkInvestigationRecommendations);

//            // act
//            PaFile.MainForm.complaintStage_OnChange();

//            // assert
//            expect((<any>PaFile.MainForm).checkInvestigationRecommendations).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.openOfficium_OnChange"), () => {
//    describe("When cms_openofficium is true", () => {
//        it("Open a new browser window with a search filter equal to the 'File Number (cms_filenumber)'", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_openofficium").setValue(true);
//            Xrm.Page.getAttribute("cms_filenumber").setValue("1111");
//            window.open = sinon.fake();

//            // act
//            PaFile.MainForm.openOfficium_OnChange(null);

//            //// assert
//            expect(window.open).calledOnceWithExactly(`https://recherche-search/Pages/results.aspx?k=${Xrm.Page.getAttribute("cms_filenumber").getValue()}`);
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.intakeClosedDate_OnChange"), () => {
//    describe(TestHelper.formatSection("Check rules"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.intakeClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.incidentClosedDate_OnChange"), () => {
//    describe(TestHelper.formatSection("Enable sections"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.EnableSections"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).EnableSections = sinon.fake((<any>PaFile.MainForm).EnableSections);

//            // act
//            PaFile.MainForm.incidentClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).EnableSections).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.notificationClosedDate_OnChange"), () => {
//    describe(TestHelper.formatSection("Check rules"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.notificationClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.earlyResolutionClosedDate_OnChange"), () => {
//    describe(TestHelper.formatSection("Check rules"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.earlyResolutionClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.investigationClosedDate_OnChange"), () => {
//    describe(TestHelper.formatSection("Check rules"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.investigationClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//    describe(TestHelper.formatSection("Check investigation recommendations"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.checkInvestigationRecommendations"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).checkInvestigationRecommendations = sinon.fake((<any>PaFile.MainForm).checkInvestigationRecommendations);

//            // act
//            PaFile.MainForm.investigationClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            // assert
//            expect((<any>PaFile.MainForm).checkInvestigationRecommendations).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.followUpClosedDate_OnChange"), () => {
//    describe(TestHelper.formatSection("Check rules"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.followUpClosedDate_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.intakeDisposition_OnChange"), () => {
//    describe(TestHelper.formatSection("Check rules"), () => {
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.intakeDisposition_OnChange(TestHelper.fakeContext("cms_status"));

//            //// assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.investigationDisposition_OnChange"), () => {
//    describe("When 'Disposition - Investigation (cms_dispositioninvestigation) changes", () => {
//        it.skip("Check rules", () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.investigationDisposition_OnChange(TestHelper.fakeContext("cms_status"));

//            // assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.earlyResolutionDisposition_OnChange"), () => {
//    describe("When 'Disposition - Early Resolution (cms_dispositionearlyresolution)' changes", () => {
//        it("Check rules", () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.earlyResolutionDisposition_OnChange(TestHelper.fakeContext("cms_status"));

//            // assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.followUpDisposition_OnChange"), () => {
//    describe("When 'Disposition - Follow-up (cms_dispositionfollowup)' changes", () => {
//        it("Check rules", () => {
//            // arrange
//            let mock = CreateMockForm();
//            (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//            // act
//            PaFile.MainForm.followUpDisposition_OnChange(TestHelper.fakeContext("cms_status"));

//            // assert
//            expect((<any>PaFile.MainForm).CheckRules).called;
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.status_OnChange"), () => {
//    describe("When 'Status Code (cms_status)' changes", () => {
//        describe(TestHelper.formatSection("Unlock form"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.UnlockForm"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).UnlockForm = sinon.fake((<any>PaFile.MainForm).UnlockForm);

//                // act
//                PaFile.MainForm.status_OnChange(TestHelper.fakeContext("cms_status"));

//                // assert
//                expect((<any>PaFile.MainForm).UnlockForm).called;
//            });
//        });
//        describe(TestHelper.formatSection("Check rules"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckRules"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).CheckRules = sinon.fake((<any>PaFile.MainForm).CheckRules);

//                // act
//                PaFile.MainForm.status_OnChange(TestHelper.fakeContext("cms_status"));

//                // assert
//                expect((<any>PaFile.MainForm).CheckRules).called;
//            });
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.dateOfComplaintAcceptance_OnChange"), () => {
//    describe("When 'Date Complaint Acceptance (cms_dateofcomplaintacceptance)' changes", () => {
//        describe(TestHelper.formatSection("Check due date is populated"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckDueDateIsPopulated"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).CheckDueDateIsPopulated = sinon.fake((<any>PaFile.MainForm).CheckDueDateIsPopulated);

//                // act
//                PaFile.MainForm.dateOfComplaintAcceptance_OnChange();

//                // assert
//                expect((<any>PaFile.MainForm).CheckDueDateIsPopulated).called;
//            });
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.dateReceived_OnChange"), () => {
//    describe("When 'Date Received (cms_datereceived)' changes", () => {
//        describe(TestHelper.formatSection("Check due date is populated"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.CheckDueDateIsPopulated"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).CheckDueDateIsPopulated = sinon.fake((<any>PaFile.MainForm).CheckDueDateIsPopulated);

//                // act
//                PaFile.MainForm.dateReceived_OnChange();

//                // assert
//                expect((<any>PaFile.MainForm).CheckDueDateIsPopulated).called;
//            });
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.caseSumary_OnChange"), () => {
//    describe("When 'Case Summary (cms_casesummary)' is changed", () => {
//        it("Update 'Case Sumary (cms_casesummary)' with the 'Description (cms_descriptioncommon)' value", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_descriptioncommon").setValue("some value");
//            Xrm.Page.getAttribute("cms_casesummary").setValue = sinon.fake();

//            // act
//            PaFile.MainForm.caseSumary_OnChange();

//            // assert
//            expect(Xrm.Page.getAttribute("cms_casesummary").setValue).calledOnceWithExactly("some value");
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.caseSumary_OnChange"), () => {
//    describe(TestHelper.formatSection("When 'Case Summary (cms_casesummary)' changes"), () => {
//        it("Update 'Case Summary (cms_casesummary)' with the 'Description (cms_descriptioncommon)' value", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_descriptioncommon").setValue("some value");
//            Xrm.Page.getAttribute("cms_casesummary").setValue = sinon.fake();

//            // act
//            PaFile.MainForm.caseSumary_OnChange();

//            // assert
//            expect(Xrm.Page.getAttribute("cms_casesummary").setValue).calledOnceWithExactly("some value");
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.descriptionCommon_OnChange"), () => {
//    describe(TestHelper.formatSection("When 'Description (cms_descriptioncommon) changes"), () => {
//        it("Update 'Case Summary (cms_casesummary)' with the 'Description (cms_descriptioncommon)' value", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_descriptioncommon").setValue("some value");
//            Xrm.Page.getAttribute("cms_casesummary").setValue = sinon.fake();

//            // act
//            PaFile.MainForm.descriptionCommon_OnChange();

//            // assert
//            expect(Xrm.Page.getAttribute("cms_casesummary").setValue).calledOnceWithExactly("some value");
//        });
//    });
//});

//describe(TestHelper.formatTitle("PaFileMainForm.MainForm.documentCentre_TabStateChange"), () => {
//    describe("When 'Document Centre' tab state changes", () => {
//        describe("Set Ci2Officium iFrame URL", () => {
//            describe("When DocumentCentre is expanded", () => {
//                it("Set the SharePoint source of the Document Centre's files to type LC", () => {

//                    // arrange
//                    let mock = CreateMockForm();
//                    global.setTimeout = sinon.fake((callback: (...args: any[]) => void, ms: number, ...args: any[]) => {
//                        callback();
//                        return new Object();
//                    });
//                    let fileNumber = "111";
//                    mock.Page.getAttribute("cms_filenumber").setValue(fileNumber);
//                    Xrm.Page.ui.tabs.get("DocumentCentre").setDisplayState("expanded");

//                    Xrm.Page.ui.controls.get("IFRAME_Ci2Officium").getSrc = () => "about:blank";
//                    Xrm.Page.ui.controls.get("IFRAME_Ci2Officium").setSrc = sinon.fake();

//                    // act
//                    PaFile.MainForm.documentCentre_TabStateChange();

//                    //// assert
//                    expect(mock.Page.ui.controls.get("IFRAME_Ci2Officium").setSrc).calledOnceWithExactly(`${process.env.OFFICIUM_URL}?type=PA&case=${fileNumber}&IsDlg=1`);
//                });
//            });
//        });

//        describe("Set Stealth iFrame URL", () => {
//            describe("When 'Document Centre' is expanded", () => {
//                describe("When user has role 'Stealth'", () => {
//                    it("Set the SharePoint source of the Document Centre's files to type LC", () => {
//                        const officiumBaseUrl = "https://stealth/OPC.TS.Stealth/RemoteApp/Ci2/";
//                        // arrange
//                        let mock = CreateMockForm();
//                        global.setTimeout = sinon.fake((callback: (...args: any[]) => void, ms: number, ...args: any[]) => {
//                            callback();
//                            return new Object();
//                        });
//                        let fileNumber = "111";
//                        mock.Page.getAttribute("cms_filenumber").setValue(fileNumber);
//                        Xrm.Page.ui.tabs.get("DocumentCentre").setDisplayState("expanded");
//                        Xrm.Page.ui.controls.get("IFRAME_Stealth").getSrc = () => "about:blank";
//                        Xrm.Page.ui.controls.get("IFRAME_Stealth").setSrc = sinon.fake();
//                        mock.Page.context.getUserRoles = () => ["91534D83-D46F-480B-9390-257F40A98BE4"]; //Stealth
//                        //mock.Page.getAttribute("cms_name").setValue("111");

//                        // act
//                        PaFile.MainForm.documentCentre_TabStateChange();

//                        // assert
//                        expect(mock.Page.ui.controls.get("IFRAME_Stealth").setSrc).calledOnceWithExactly(`${officiumBaseUrl}${fileNumber}`);
//                    });
//                });
//            });
//        });
//    });
//});

//describe(TestHelper.formatTitle("Internal functionality (shared private functions)"), () => {
//    describe(TestHelper.formatSubtitle("PaFile.MainForm.isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility"), () => {
//        describe("When 'File Type (cms_filetype)' is not 'Investigation' (e.g. Incident)", () => {
//            it("set 'Complaint Phase (cms_complaintphase)' required level to 'none'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect(Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel).calledOnceWithExactly("none");
//            });
//        });

//        describe(TestHelper.formatSection("Sanitize Intake Section"), () => {
//            describe("When 'File Type (cms_filetype)' is changed to other than 'Intake' (e.g. Incident)", () => {
//                it("Clear Intake fields to null ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(false);
//                    Xrm.Page.getAttribute("cms_origin").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_province").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_referringinforequestid").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_origin").setValue, "'Origin (cms_origin)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_dispositionintake").setValue, "'Disposition - Intake (cms_dispositionintake)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_province").setValue, "'Province (cms_province)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_referringinforequestid").setValue, "'Related Info Request (cms_referringinforequestid)").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_closeddateintake").setValue, "'Date Closed - Intake (cms_closeddateintake)").calledOnceWithExactly(null);
//                });
//            });
//            it("Check Due Date populated (calls dateReceived_OnChange)", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                (<any>PaFile.MainForm).dateReceived_OnChange = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect((<any>PaFile.MainForm).dateReceived_OnChange).calledOnce;
//            });
//            it("Set the following fields required level to required: 'File Type (cms_filetype)', 'Complainant (cms_complainantid), 'Origin (cms_origin)', 'Province (cms_province)'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                Xrm.Page.getAttribute("cms_dispositionintake").setValue(cms_pafile_cms_dispositionintake.NoJurisdiction); //any value
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                Xrm.Page.getAttribute("cms_filetype").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_origin").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_province").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect(Xrm.Page.getAttribute("cms_filetype").setRequiredLevel).calledWithExactly("required");
//                expect(Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel).calledWithExactly("required");
//                expect(Xrm.Page.getAttribute("cms_origin").setRequiredLevel).calledWithExactly("required");
//                expect(Xrm.Page.getAttribute("cms_province").setRequiredLevel).calledWithExactly("required");
//            });
//            describe("When 'Code Status (cms_status) is 'Closed'", () => {
//                it("Set the 'Disposition - Intake (cms_dispositionintake) and 'Date Closed - Intake (cms_closeddateintake)' required level to 'required'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel).calledWithExactly("required");
//                });
//                describe("When 'Disposition - Intake (cms_dispositionintake)'  or 'Date Closed - Intake (cms_closeddateintake)' has no value", () => {
//                    it("Display the following validation error: '(intake failed check 1)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                        Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                        Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(intake failed check 1)") != -1).is.true;
//                    });
//                });
//            });
//            describe("When 'Disposition - Intake (cms_dispositionintake)' and 'Date Closed - Intake (cms_closeddateintake)' have  no values", () => {
//                it("Set the following fields required level to 'none': 'Disposition - Intake (cms_dispositionintake)', 'Date Closed - Intake (cms_closeddateintake)' ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel).calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel).calledWithExactly("none");
//                });
//                it("Set the following fields required level to 'required': 'Complainant (cms_complainantid)', 'Origin (cms_origin)', 'Province (cms_province)'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_origin").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_province").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_origin").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_province").setRequiredLevel).calledWithExactly("required");
//                });
//            });
//            describe("When 'Disposition - Intake (cms_dispositionintake)' and 'Date Closed - Intake (cms_closeddateintake)' have values", () => {
//                it("Set the following fields required level to 'none': 'Disposition - Intake (cms_dispositionintake)', 'Date Closed - Intake (cms_closeddateintake)' ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(cms_pafile_cms_dispositionintake.NoJurisdiction);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel).calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel).calledWithExactly("none");
//                });
//                it("Set the following fields required level to 'required': 'Complainant (cms_complainantid), 'Origin (cms_origin), 'Province (cms_province)'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(cms_pafile_cms_dispositionintake.NoJurisdiction);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_origin").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_province").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_origin").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_province").setRequiredLevel).calledWithExactly("required");
//                });
//            });
//            describe("When either 'Disposition - Intake (cms_dispositionintake)' or 'Date Closed - Intake (cms_closeddateintake) has no value (but not the other)", () => {
//                it("Set the following fields required level to 'required': cms_dispositionintake,cms_closeddateintake ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel).calledWithExactly("required");
//                });
//                it("Set the following field required level to 'none', value to null and visibility to false: 'Complaint Phase (cms_complaintphase)", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue = sinon.fake();
//                    Xrm.Page.getControl("cms_complaintphase").setVisible = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel).calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_complaintphase").setValue).calledWithExactly(null);
//                    expect(Xrm.Page.getControl("cms_complaintphase").setVisible).calledWithExactly(false);
//                });
//                it("Display the following validation error: (intake failed check 2)", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue = sinon.fake();
//                    Xrm.Page.getControl("cms_complaintphase").setVisible = sinon.fake();

//                    // act
//                    let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(intake failed check 2)") != -1).is.true;
//                });

//            });
//        });

//        describe(TestHelper.formatSection("Sanitize Incident Section"), () => {
//            describe("When 'File Type (cms_filetype)' is changed to other than 'Incident' (e.g. Intake)", () => {
//                it("Clear Incident fields", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_hasincident").setValue(false);
//                    Xrm.Page.getAttribute("cms_incidenttype").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_reportedby").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_priorityincident").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_affectedpartiesnotified").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_occurencedate").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_numberofindividualsaffected").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateincident").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_incidenttype").setValue, "'Incident Type (cms_incidenttype)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_reportedby").setValue, "'Reported By (cms_reportedby)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_priorityincident").setValue, "'Priority - Incident (cms_priorityincident)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_affectedpartiesnotified").setValue, "'Affected Parties Notified (cms_affectedpartiesnotified)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_occurencedate").setValue, "'Date of Occurence - Incident (cms_occurencedate)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_numberofindividualsaffected").setValue, "'Number of Individuals Affected (cms_numberofindividualsaffected)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_closeddateincident").setValue, "'Date Closed - Incident (cms_closeddateincident)'").calledOnceWithExactly(null);
//                });
//            });
//            it("Set the following fields required level to required: 'Respondent (cms_respondentid)', 'Incident Type (cms_incidenttype)', 'Priority - Incident (cms_priorityincident)'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_incidenttype").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_priorityincident").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect(Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel).calledWithExactly("required");
//                expect(Xrm.Page.getAttribute("cms_incidenttype").setRequiredLevel).calledWithExactly("required");
//                expect(Xrm.Page.getAttribute("cms_priorityincident").setRequiredLevel).calledWithExactly("required");
//            });
//            describe("When 'Status Code (cms_status) is 'Closed'", () => {
//                it("Set the 'Date Close - Incident (cms_closeddateincident)' required level to 'required'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_closeddateincident").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    //// assert
//                    expect(Xrm.Page.getAttribute("cms_closeddateincident").setRequiredLevel).calledWithExactly("required");
//                });
//                describe("When 'Date Close - Incident (cms_closeddateincident)' has no value", () => {
//                    it("Set the 'Complaint Phase (cms_complaintphase) value to null and hidden", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                        Xrm.Page.getAttribute("cms_closeddateincident").setValue(null);
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue = sinon.fake()
//                        Xrm.Page.getControl("cms_complaintphase").setVisible = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        //// assert
//                        expect(Xrm.Page.getAttribute("cms_filetype").setValue).calledWithExactly(cms_pafile_cms_filetype.Incident);
//                        expect(Xrm.Page.getAttribute("cms_complaintphase").setValue).calledWithExactly(null);
//                        expect(Xrm.Page.getControl("cms_complaintphase").setVisible).calledWithExactly(false);
//                    });
//                });
//            });
//        });

//        describe(TestHelper.formatSection("Sanitize Notification Section"), () => {
//            describe("When 'File Type (cms_filetype)' is changed to other than 'Notification' (e.g. Intake)", () => {
//                it("Set Notification fields to none", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_has82m").setValue(false);
//                    Xrm.Page.getAttribute("cms_dateofanticipatedrelease").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_publicinterestdisclosureunderotherlegisla").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddate82m").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_notificationtype").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_notificationtype").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dateofanticipatedrelease").setValue, "'Date of Anticipated Release (cms_dateofanticipatedrelease)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_publicinterestdisclosureunderotherlegisla").setValue, "'Public Interest Disclosure Under Other Legislation (cms_publicinterestdisclosureunderotherlegisla)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_closeddate82m").setValue, "'Date Closed - Notification (cms_closeddate82m)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_notificationtype").setValue, "'Notification Type (cms_notificationtype)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_notificationtype").setRequiredLevel, "'Notification Type (cms_notificationtype)'").calledOnceWithExactly("none");
//                });
//                it("Set 'Notification Type (cms_notificationtype)' required level to 'none' ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_has82m").setValue(false);
//                    Xrm.Page.getAttribute("cms_notificationtype").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_notificationtype").setRequiredLevel).calledOnceWithExactly("none");
//                });
//            });
//            it("Set the following fields required level to required: 'Respondent (cms_respondentid)', 'Notification Type (cms_notificationtype)'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_notificationtype").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect(Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel).calledWithExactly("required");
//                expect(Xrm.Page.getAttribute("cms_notificationtype").setRequiredLevel).calledWithExactly("required");
//            });
//            it("Set the following fields 'none; level to required: 'Complaint (cms_complainantid)'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect(Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel).calledWithExactly("none");
//            });
//            describe("When 'Status Code (cms_status)' is 'Closed'", () => {
//                it("Set the 'Date Closed - Notification (cms_closeddate82m)' required level to 'required'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_has82m").setValue(true);
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    //assert
//                    expect(Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel).calledWithExactly("required");
//                });
//                describe("When 'Date Closed - Notification (cms_closeddate82m)' is 'null'", () => {
//                    it("Set the 'Complaint Phase (cms_complaintphase)' value to null and not visible", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                        Xrm.Page.getAttribute("cms_closeddate82m").setValue(null);
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue = sinon.fake();
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue = sinon.fake()
//                        Xrm.Page.getControl("cms_complaintphase").setVisible = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        //// assert
//                        expect(Xrm.Page.getAttribute("cms_filetype").setValue).calledWithExactly(cms_pafile_cms_filetype.Notification);
//                        expect(Xrm.Page.getAttribute("cms_complaintphase").setValue).calledWithExactly(null);
//                        expect(Xrm.Page.getControl("cms_complaintphase").setVisible).calledWithExactly(false);
//                    });
//                });
//            });
//            it("Set 'Date Closed - Notification(cms_closeddate82m)' required level to 'none'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                Xrm.Page.getAttribute("cms_closeddate82m").setValue(null);
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                //// assert
//                expect(Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel).calledWithExactly("none");
//            });
//        });

//        describe(TestHelper.formatSection("Sanitize Early Resolution Section"), () => {
//            describe("When 'File Type (cms_filetype)' is changed to other than 'EarlyResolution' (e.g. Incident)", () => {
//                it("Clear Early Resolution fields to null ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(false);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_datedueearlyres").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue, "'Disposition - Early Resolution (cms_dispositionearlyresolution)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_datedueearlyres").setValue, "'Date Due - Early Resolution (cms_datedueearlyres)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setValue, "'Date Closed - Early Resolution (cms_closeddateearlyres)'").calledOnceWithExactly(null);
//                });
//            });
//            describe("When 'Status Code (cms_status)' is 'Closed'", () => {
//                it("Set cms_dispositionearlyresolution and cms_closeddateearlyres required level to 'required'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel, "'Dispostion - Early Resolution (cms_dispositionearlyresolution)'").calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel, "'Date Closed - Early Resolution (cms_closeddateearlyres)'").calledWithExactly("required");
//                });
//                describe("When 'Disposition - Early Resolution (cms_dispositionearlyresolution)' is 'null'", () => {
//                    it("Display the following validation error: (ER failed check 1)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                        Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(null);
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(null);
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(er failed check 1)") != -1).is.true;
//                    });
//                });
//            });
//            describe("When  and  have no value", () => {
//                it("Set  cms_dispositionearlyresolution and cms_closeddateearlyres fields required level to 'none'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(null);
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel, "'Disposition - Early Resolution (cms_dispositionearlyresolution)'").calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel, "'Date Closed - Early Resolution (cms_closeddateearlyres)'").calledWithExactly("none");
//                });
//            });
//            describe("When cms_dispositionearlyresolution and cms_closeddateearlyres are not null", () => {
//                it("Set the following fields required level to 'none': , ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(cms_pafile_cms_dispositionearlyresolution.Resolved);
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel, "'Disposition - Early Resolution (cms_dispositionearlyresolution)'").calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel, "'Date Closed - Early Resolution (cms_closeddateearlyres)'").calledWithExactly("none");
//                });
//            });
//            describe("When either cms_dispositionearlyresolution or cms_closeddateearlyres is null (but not the other)", () => {
//                it("Set the Eearly Resolution fields required level to 'required' ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel, "'Disposition - Early Resolution (cms_dispositionearlyresolution)'").calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel, "'Date Closed - Early Resolution (cms_closeddateearlyres)'").calledWithExactly("required");
//                });
//                it("Display the following validation error: (ER failed check 2)", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();

//                    // act
//                    let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(er failed check 2)") != -1).is.true;
//                });
//            });
//        });



//        describe(TestHelper.formatSection("Sanitize Complaint's Investigation Section"), () => {
//            describe("When 'File Type (cms_filetype) is changed to other than 'Complaint' (e.g. Incident)", () => {
//                it("Clear Investigation fields", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(false);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_deemeddenial").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_acknowledgmentlettersentdate").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_notificationlettersentdate").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_datesection33lettersent").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_datesection35lettersent").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue, "'Disposition - Investigation (cms_dispositioninvestigation)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_deemeddenial").setValue, "'Deemed Denial (cms_deemeddenial)'").calledOnceWithExactly(cms_pafile_cms_deemeddenial.No);
//                    expect(Xrm.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").setValue, "'Date of Expected Completion - Investigation (cms_dateofexpectedcompletioninvestigation)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_acknowledgmentlettersentdate").setValue, "'Date Acknowledgement Letter Sent (cms_acknowledgmentlettersentdate)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_notificationlettersentdate").setValue, "'Date Notification Letter Sent (cms_notificationlettersentdate)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_datesection33lettersent").setValue, "'Date Section 33 Letter Sent (cms_datesection33lettersent)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_datesection35lettersent").setValue, "'Date Section 35 Letter Sent (cms_datesection35lettersent)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue, "'Date Closed - Investigation (cms_dateofdispositioninvestigation)'").calledOnceWithExactly(null);
//                });
//            });
//            describe("When 'Status Code (cms_status) is 'Closed'", () => {
//                it("Set the 'Disposition - Investigation' and 'Date Closed - Investigation' required level to 'required'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel, "'Disposition - Investigation (cms_dispositioninvestigation)'").calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel, "'Date Closed - Investigation (cms_dateofdispositioninvestigation)'").calledWithExactly("required");
//                });
//                describe("When 'Disposition - Investigation' or 'Date Closed - Investigation' has no value", () => {
//                    it("Display the following validation error: (Investigation failed check 1)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                        Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(null);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(null);

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(investigation failed check 1)") != -1).is.true;
//                    });
//                });
//            });
//            describe("When 'Disposition - Investigation' and 'Date Closed - Investigation' have no value", () => {
//                it("Set cms_dispositioninvestigation and cms_dateofdispositioninvestigation following fields required level to 'none' ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(null);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(null);
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel, "'Disposition - Investigation (cms_dispositioninvestigation)'").calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel, " 'Date Closed - Investigation (cms_dateofdispositioninvestigation)'").calledWithExactly("none");
//                });
//            });
//            describe("When 'Disposition - Investigation' and 'Date Closed - Investigation' have a value", () => {
//                it("Set cms_dispositioninvestigation and cms_dateofdispositioninvestigation following fields required level to 'none': , ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.Resolved);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel, "'Disposition - Investigation (cms_dispositioninvestigation)").calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel, "'Date Closed - Investigation (cms_dateofdispositioninvestigation)'").calledWithExactly("none");
//                });
//            });
//            describe("When either 'Disposition - Investigation' or 'Date Closed - Investigation' has no value (but not the other)", () => {
//                it("Set cms_dispositioninvestigation and cms_dateofdispositioninvestigation'required': , ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(null);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel, "'Disposition - Investigation (cms_dispositioninvestigation)'").calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel, "'Date Closed - Investigation (cms_dateofdispositioninvestigation)'").calledWithExactly("required");
//                });
//                it("Display the following validation alert: (investigation failed check 2)", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(null);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();

//                    // act
//                    let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(investigation failed check 2)") != -1).is.true;
//                });
//            });
//        });

//        describe(TestHelper.formatSection("Sanitize Complaint's Follow Up Section"), () => {
//            describe("When 'File Type (cms_filetype)' is changed to anything other than 'Follow-Up' (e.g. Incident)", () => {
//                it("Clear Follow-Up fields", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(false);
//                    Xrm.Page.getAttribute("cms_numberofrecommendations").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_numberofrecommendationsimplemented").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateduefollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_descriptionfollowup").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_numberofrecommendations").setValue, "'No. of Recommendations (cms_numberofrecommendations)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setValue, "'Disposition - Follow-up (cms_dispositionfollowup)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_numberofrecommendationsimplemented").setValue, "'No. of Recommendations Implemented (cms_numberofrecommendationsimplemented)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_dateduefollowup").setValue, "'Date Due - Follow-up (cms_dateduefollowup)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setValue, "'Date Closed - Follow Up (cms_closeddatefollowup)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_descriptionfollowup").setValue, "'Description - Follow up (cms_descriptionfollowup)'").calledOnceWithExactly(null);
//                });
//            });
//            describe("When 'Status Code (cms_status)' is 'Closed'", () => {
//                it("Set the 'Disposition - Follow-up (cms_dispositionfollowup)' and 'Date Closed - Follow Up (cms_closeddatefollowup)' required level to 'required'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel).calledWithExactly("required");
//                });
//                describe("When 'Disposition - Follow-up (cms_dispositionfollowup)' or 'Date Closed - Follow Up (cms_closeddatefollowup)' has no value'", () => {
//                    it("Display the following validation error: (follow-up failed check 1)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                        Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(follow-up failed check 1)") != -1).is.true;
//                    });
//                });
//            });
//            describe("When 'Disposition - Follow-up (cms_dispositionfollowup)' and 'Date Closed - Follow Up (cms_closeddatefollowup)' have no value", () => {
//                it("Set the following fields required level to 'none': 'Disposition - Follow-up (cms_dispositionfollowup)', 'Date Closed - Follow Up (cms_closeddatefollowup)' ", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(null);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel).calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel).calledWithExactly("none");
//                });
//            });
//            describe("When 'Disposition - Follow-up (cms_dispositionfollowup)' and 'Date Closed - Follow Up (cms_closeddatefollowup)' have a value", () => {
//                it("Set the following fields required level to 'none': 'Disposition - Follow-up (cms_dispositionfollowup)', 'Date Closed - Follow Up (cms_closeddatefollowup)'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue(cms_pafile_cms_dispositionfollowup.Conditionallyresolvedsatisfactory);
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel).calledWithExactly("none");
//                    expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel).calledWithExactly("none");
//                });
//            });
//            describe("When either 'Disposition - Follow-up (cms_dispositionfollowup)' or 'Date Closed - Follow Up (cms_closeddatefollowup)' has no value (but not the other)", () => {
//                it("Set the following fields required level to 'required': 'Disposition - Follow-up (cms_dispositionfollowup)', 'Date Closed - Follow Up (cms_closeddatefollowup)'", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel).calledWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel).calledWithExactly("required");
//                });
//                it("Display the following validation error: (follow-up failed check 2)", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue(null);
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);

//                    // act
//                    let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(follow-up failed check 2)") != -1).is.true;
//                });
//            });
//        });

//        describe(TestHelper.formatSection("Sanitize common Complaint Section"), () => {
//            describe("When is it is not a common complain (Early Resolution, Investigation or Follow-Up)", () => {
//                it("Clear Follow-up fields", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(false);
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(false);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(false);
//                    Xrm.Page.getAttribute("cms_numberofrecommendations").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_numberofrecommendationsimplemented").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dateduefollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue = sinon.fake();
//                    Xrm.Page.getAttribute("cms_descriptionfollowup").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_numberofrecommendations").setValue, "'No. of Recommendations (cms_numberofrecommendations)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setValue, "'Disposition - Follow-up (cms_dispositionfollowup)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_numberofrecommendationsimplemented").setValue, "'No. of Recommendations Implemented (cms_numberofrecommendations)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_dateduefollowup").setValue, "'Date Due - Follow-up (cms_dateduefollowup)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setValue, "'Date Closed (cms_closeddatefollowup)'").calledOnceWithExactly(null);
//                    expect(Xrm.Page.getAttribute("cms_descriptionfollowup").setValue, "'Description - Follow-up (cms_descriptionfollowup)'").calledOnceWithExactly(null);
//                });
//            });
//            describe("When is it is a common complain (Early Resolution, Investigation or Follow-Up)", () => {
//                describe("When 'Respondent (cms_respondentid) has no value", () => {
//                    it("Display the following validation error: (complaint common failed check - Please select a respondent)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_hasearlyres").setValue(false);
//                        Xrm.Page.getAttribute("cms_hasinvestigation").setValue(false);
//                        Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                        Xrm.Page.getAttribute("cms_respondentid").setValue(null);

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(complaint common failed check - please select a respondent)") != -1).is.true;
//                    });
//                });
//                describe("When 'Date Complaint Acceptance (cms_dateofcomplaintacceptance)' has no value", () => {
//                    it("Display the following validation error: (complaint common failed check - Please select a date acceptance for the complaint)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_hasearlyres").setValue(false);
//                        Xrm.Page.getAttribute("cms_hasinvestigation").setValue(false);
//                        Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                        Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(null);
//                        Xrm.Page.getAttribute("cms_respondentid").setValue([{ "id": "something", "entityType": "account", "name": "something" }]);

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(complaint common failed check - please select a date acceptance for the complaint)") != -1).is.true;
//                    });
//                });
//                describe("When 'Priority - Complaint (cms_prioritycomplaint)' has no value", () => {
//                    it("Display the following validation error: (complaint common failed check - Please select a priority for the complaint)", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_hasearlyres").setValue(false);
//                        Xrm.Page.getAttribute("cms_hasinvestigation").setValue(false);
//                        Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                        Xrm.Page.getAttribute("cms_prioritycomplaint").setValue(null);
//                        Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(new Date());
//                        Xrm.Page.getAttribute("cms_respondentid").setValue([{ "id": "something", "entityType": "account", "name": "something" }]);

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);

//                        // act
//                        let modelState = (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                        // assert
//                        expect((modelState.ValidationSummary() as string).toLowerCase().indexOf("(complaint common failed check - please select a priority for the complaint)") != -1).is.true;
//                    });
//                });
//            });
//            describe("When 'File Type (cms_filetype)' is 'Complaint'", () => {
//                it("Set the 'Complaint Phase (cms_complaintphase)' to required and visible", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getControl("cms_complaintphase").setVisible = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel).calledOnceWithExactly("required");
//                    expect(Xrm.Page.getControl("cms_complaintphase").setVisible).calledOnceWithExactly(true);
//                });
//            });

//        });
//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.CheckDueDateIsPopulated"), () => {
//        describe("When 'Date Complaint Acceptance has a value and 'Date of Expected Completion - Investigation ' has no value", () => {
//            it("Set'Date of Expected Completion - Investigation (cms_dateofexpectedcompletioninvestigation)' (to 1 yr from start)", () => {
//                // arrange
//                let mock = CreateMockForm();
//                let startDate = new Date();
//                Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(new Date());
//                Xrm.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").setValue(null);
//                Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(startDate);
//                Xrm.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").setValue = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).CheckDueDateIsPopulated();

//                // assert
//                expect(Xrm.Page.getAttribute("cms_dateofexpectedcompletioninvestigation").setValue).calledWith(new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate()));
//            });
//        });
//        describe("When 'File Type (cms_filetype)' is 'Complaint' and 'Complaint Phase (EarlyResolution)' and 'Date Complaint Acceptatance (cms_dateofcomplaintacceptance)' has a value", () => {
//            describe("When 'Date Due - Early Resolution (cms_datedueearlyres)' is enabled", () => {
//                it("Set 'Date Due - Early Resolution (cms_datedueearlyres)' to due date", () => {
//                    // arrange
//                    var SLA_INTAKE = 22; // number of business days for intake
//                    var SLA_COMPLAINT = 45; // number of business days for Early Resolution
//                    var SLA_95 = 15; // number of business days for 9(5)
//                    let mock = CreateMockForm();
//                    let startDate = new Date();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                    Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(new Date());
//                    Xrm.Page.getControl("cms_datedueearlyres").setDisabled(false);
//                    let dueDate = Ci2.GetWorkingDaysDate(startDate, SLA_COMPLAINT);
//                    Xrm.Page.getAttribute("cms_datedueearlyres").setValue = sinon.fake();
//                    (<any>Ci2).AdjustForHolidays = sinon.fake();


//                    // act
//                    (<any>PaFile.MainForm).CheckDueDateIsPopulated();

//                    // assert
//                    var dateAttributes = Ci2.SingletonDates.getInstance();
//                    expect(Xrm.Page.getAttribute("cms_datedueearlyres").setValue).calledWith(dueDate);
//                });
//            });
//            describe(TestHelper.formatSection("Adjust due date for holidays"), () => {
//                it(TestHelper.formatSharedCodeAssert("Ci2.AdjustForHolidays"), () => {
//                    // arrange
//                    var SLA_INTAKE = 22; // number of business days for intake
//                    var SLA_COMPLAINT = 45; // number of business days for Early Resolution
//                    var SLA_95 = 15; // number of business days for 9(5)
//                    let mock = CreateMockForm();
//                    let startDate = new Date();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                    Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(new Date());
//                    Xrm.Page.getControl("cms_datedueearlyres").setDisabled(true);
//                    let dueDate = Ci2.GetWorkingDaysDate(startDate, SLA_COMPLAINT);
//                    Xrm.Page.getAttribute("cms_datedueearlyres").setValue = sinon.fake();
//                    (<any>Ci2).AdjustForHolidays = sinon.fake();


//                    // act
//                    (<any>PaFile.MainForm).CheckDueDateIsPopulated();

//                    // assert
//                    var dateAttributes = Ci2.SingletonDates.getInstance();
//                    dateAttributes.setStartAttribute("cms_dateofcomplaintacceptance");
//                    dateAttributes.setEndAttribute("cms_datedueearlyres");
//                    dateAttributes.setDate(dueDate);
//                    expect((<any>Ci2).AdjustForHolidays).calledWithMatch(dateAttributes);
//                });
//            });
//        });
//        describe("When 'File Type (cms_filetype)' is 'Intake' and 'Date Received (cms_datereceived)' has a value and 'Date Due intake (cms_datedueintake)' has no value", () => {
//            describe("When 'Date Due intake (cms_datedueintake)' is enabled", () => {
//                it("Set 'Date Due intake (cms_datedueintake)' to due date", () => {
//                    // arrange
//                    var SLA_INTAKE = 22; // number of business days for intake
//                    var SLA_COMPLAINT = 45; // number of business days for Early Resolution
//                    var SLA_95 = 15; // number of business days for 9(5)
//                    let mock = CreateMockForm();
//                    let startDate = new Date();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_datereceived").setValue(new Date());
//                    Xrm.Page.getControl("cms_datedueintake").setDisabled(false);
//                    Xrm.Page.getAttribute("cms_datedueintake").setValue(null);
//                    let dueDate = Ci2.GetWorkingDaysDate(startDate, SLA_INTAKE);
//                    Xrm.Page.getAttribute("cms_datedueintake").setValue = sinon.fake();
//                    (<any>Ci2).AdjustForHolidays = sinon.fake();


//                    // act
//                    (<any>PaFile.MainForm).CheckDueDateIsPopulated();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_datedueintake").setValue).calledWith(dueDate);
//                });
//            });
//            describe(TestHelper.formatSection("Adjust due date for holidays"), () => {
//                it(TestHelper.formatSharedCodeAssert("Ci2.AdjustForHolidays"), () => {
//                    // arrange
//                    var SLA_INTAKE = 22; // number of business days for intake
//                    var SLA_COMPLAINT = 45; // number of business days for Early Resolution
//                    var SLA_95 = 15; // number of business days for 9(5)
//                    let mock = CreateMockForm();
//                    let startDate = new Date();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_datereceived").setValue(new Date());
//                    Xrm.Page.getControl("cms_datedueintake").setDisabled(true);
//                    Xrm.Page.getAttribute("cms_datedueintake").setValue(null);
//                    let dueDate = Ci2.GetWorkingDaysDate(startDate, SLA_INTAKE);
//                    Xrm.Page.getAttribute("cms_datedueintake").setValue = sinon.fake();
//                    (<any>Ci2).AdjustForHolidays = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).CheckDueDateIsPopulated();

//                    // assert
//                    var dateAttributes = Ci2.SingletonDates.getInstance();
//                    dateAttributes.setStartAttribute("cms_datereceived");
//                    dateAttributes.setEndAttribute("cms_datedueintake");
//                    dateAttributes.setDate(dueDate);
//                    expect((<any>Ci2).AdjustForHolidays).calledWithMatch(dateAttributes);
//                });
//            });
//        });
//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.checkFileAndPhase"), () => {
//        describe(TestHelper.formatSection("Reset additional fields"), () => {
//            it("Set the following fields as required: 'File Type (cms_filetype)', 'Date Received (cms_datereceived)', 'Status Code (cms_status)'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_datereceived").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_status").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).checkFileAndPhase();

//                // assert
//                expect(Xrm.Page.getAttribute("cms_filetype").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_datereceived").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_status").setRequiredLevel).calledWith("required");
//            });
//            it("Set  following fields to none", () => {
//                // arrange
//                let mock = CreateMockForm();

//                Xrm.Page.getAttribute("cms_dateduefollowup").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateincident").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_numberofrecommendations").setRequiredLevel = sinon.fake();

//                Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_origin").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_province").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complainttypeid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_incidenttype").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_priorityincident").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_prioritycomplaint").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complexity").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).checkFileAndPhase();

//                // assert
//                expect(Xrm.Page.getAttribute("cms_dateduefollowup").setRequiredLevel, "'Date Due - Follow-up (cms_dateduefollowup)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel, "'Disposition - Intake (cms_dispositionintake)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel, "'Date Closed - Intake (cms_closeddateintake)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_closeddateincident").setRequiredLevel, " 'Date Closed - Incident (cms_closeddateincident)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel, "'Date Due - 8(2)(m) (cms_closeddate82m)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel, "'Disposition - Early Resolution (cms_dispositionearlyresolution)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel, "'Date Closed - Early Resolution (cms_closeddateearlyres)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel, "'Disposition - Investigation (cms_dispositioninvestigation)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel, "'Date Closed - Investigation (cms_dateofdispositioninvestigation)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel, "'Disposition - Follow-up (cms_dispositionfollowup)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel, "'Date Closed - Follow-up (cms_closeddatefollowup)").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_numberofrecommendations").setRequiredLevel, "'No. of Recommendations (cms_numberofrecommendations)'").calledWith("none");

//                expect(Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel, "'Respondent (cms_respondentid)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel, "'Complainant (cms_complainantid)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_origin").setRequiredLevel, "'Origin (cms_origin)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_province").setRequiredLevel, "'Province (cms_province)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_complainttypeid").setRequiredLevel, "'Complaint Type (cms_complainttypeid)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel, "'Complaint Phase (cms_complaintphase)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_incidenttype").setRequiredLevel, "'Incident Type (cms_incidenttype)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_priorityincident").setRequiredLevel, "'Priority - Incident (cms_priorityincident)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_prioritycomplaint").setRequiredLevel, "'Priority Complaint (cms_prioritycomplaint)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setRequiredLevel, "'Date Complaint Acceptance (cms_dateofcomplaintacceptance)'").calledWith("none");
//                expect(Xrm.Page.getAttribute("cms_complexity").setRequiredLevel, "'Complexity (cms_complexity)'").calledWith("none");
//            });
//        });
//        describe(TestHelper.formatSection("Hide All Sections"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.HideAllSections"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).HideAllSections = sinon.fake((<any>PaFile.MainForm).HideAllSections);

//                // act
//                (<any>PaFile.MainForm).checkFileAndPhase();

//                // assert
//                expect((<any>PaFile.MainForm).HideAllSections).called;
//            });
//        });
//        describe(TestHelper.formatSection("Check if Form is Valid"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility = sinon.fake((<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility);

//                // act
//                (<any>PaFile.MainForm).checkFileAndPhase();

//                // assert
//                expect((<any>PaFile.MainForm).isFormValid_and_setRequiredFields_and_clearStaleFields_and_setFieldsVisibility).called;
//            });
//        });
//        describe(TestHelper.formatSection("Enable Sections"), () => {
//            it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.EnableSections"), () => {
//                // arrange
//                let mock = CreateMockForm();
//                (<any>PaFile.MainForm).EnableSections = sinon.fake((<any>PaFile.MainForm).EnableSections);

//                // act
//                (<any>PaFile.MainForm).checkFileAndPhase();

//                // assert
//                expect((<any>PaFile.MainForm).EnableSections).called;
//            });
//        });
//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.HideAllSections"), () => {
//        it("Hide the following sections: Hidden, FormSections, Intake, Incident, 8(2)(m), ComplaintCommon, EarlyResolution, Investigation, Follow-up", () => {
//            // arrange
//            let mock = CreateMockForm();

//            Xrm.Page.ui.tabs.get("Information").sections.get("Hidden").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("Hidden").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("OtherData").sections.get("FormSections").setVisible = sinon.fake();

//            Xrm.Page.ui.tabs.get("Information").sections.get("Intake").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("Incident").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("8(2)(m)").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("ComplaintCommon").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("EarlyResolution").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setVisible = sinon.fake();
//            Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible = sinon.fake();

//            // act
//            (<any>PaFile.MainForm).checkFileAndPhase();

//            // assert
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Hidden").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Hidden").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("OtherData").sections.get("FormSections").setVisible).calledWith(false);

//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Intake").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Incident").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("8(2)(m)").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("ComplaintCommon").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("EarlyResolution").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setVisible).calledWith(false);
//            expect(Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible).calledWith(false);
//        });
//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.EnableSections"), () => {
//        //describe.skip("When 'File Type (cms_filetype)' is not 'Complaint' (e.g. Incident) and there is a 'zSubject Category - Do Not Use (cms_subjectcategory)' (e.g. Health)", () => {
//        //    it("Set 'zSubject Category - Do Not Use (cms_subjectcategory)' to null ", () => {
//        //        // arrange
//        //        let mock = CreateMockForm();
//        //        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//        //        Xrm.Page.getAttribute("cms_subjectcategory").setValue(cms_pafile_cms_subjectcategory._0900Health);
//        //        Xrm.Page.getAttribute("cms_subjectcategory").setValue = sinon.fake();

//        //        // act
//        //        (<any>PaFile.MainForm).EnableSections();

//        //        // assert
//        //        expect(Xrm.Page.getAttribute("cms_subjectcategory").setValue).calledWith(null);
//        //    });
//        //});
//        describe("When 'Date Complaint Acceptance (cms_dateofcomplaintacceptance)' has a value", () => {
//            it("Disable 'Date Complaint Acceptance (cms_dateofcomplaintacceptance)' ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(new Date());
//                Xrm.Page.getControl("cms_dateofcomplaintacceptance").setDisabled = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.getControl("cms_dateofcomplaintacceptance").setDisabled).calledWith(true);
//            });
//        });
//        describe("When 'Date Complaint Acceptance (cms_dateofcomplaintacceptance)' has no value", () => {
//            it("Enable 'Date Complaint Acceptance (cms_dateofcomplaintacceptance)' ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setValue(null);
//                Xrm.Page.getControl("cms_dateofcomplaintacceptance").setDisabled = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.getControl("cms_dateofcomplaintacceptance").setDisabled).calledWith(false);
//            });
//        });
//        it("Disable 'Ownder (ownerid)'", () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getControl("ownerid").setDisabled = sinon.fake();

//            // act
//            (<any>PaFile.MainForm).EnableSections();

//            // assert
//            expect(Xrm.Page.getControl("ownerid").setDisabled).calledWith(true);
//        });
//        describe("When 'File Number (cms_filenumber)' has value", () => {
//            it("Disable 'File Number (cms_filenumber)' ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filenumber").setValue("123");
//                Xrm.Page.getControl("cms_filenumber").setDisabled = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.getControl("cms_filenumber").setDisabled).calledWith(true);
//            });
//        });
//        describe("When 'File Type (cms_filetype)' has value and not 'Intake'", () => {
//            it("Disable 'File Type (cms_filetype)' ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getControl("cms_filetype").setDisabled = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.getControl("cms_filetype").setDisabled).calledWith(true);
//            });
//        });
//        describe("When 'Has Intake (cms_hasintake)' is 'true' or 'File Type (cms_filetype)' is 'Intake' ", () => {
//            it("Show Information ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Intake").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Intake").setVisible).calledWith(true);
//            });
//            describe("When 'Date Closed - Incident (cms_closeddateintake)' and 'Disposition - Intake (cms_dispositionintake)' have a value", () => {
//                it("Disable 'Intake' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(cms_pafile_cms_dispositionintake.NoJurisdiction);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Intake", true);
//                });
//            });
//            describe("When 'Date Closed - Incident (cms_closeddateintake)' and 'Disposition - Intake (cms_dispositionintake)' have no value", () => {
//                it("Enable 'Intake' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_hasintake").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);
//                    Xrm.Page.getAttribute("cms_dispositionintake").setValue(null);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Intake", false);
//                });
//            });
//        });
//        describe("When 'Has Intake (cms_hasintake)' is not 'true' or 'File Type (cms_filetype)' is not 'Intake' ", () => {
//            it("Hide Intake Information section", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_hasintake").setValue(false);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Intake").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Intake").setVisible).calledWith(false);
//            });
//        });

//        describe("When 'Has Incident (cms_hasincident)' is 'true' or 'File Type (cms_filetype)' is 'Incident' ", () => {
//            it("Show Information ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Incident").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Incident").setVisible).calledWith(true);
//            });
//            describe("When 'Date Closed - Incident (cms_closeddateincident)' has a value", () => {
//                it("Disable 'Incident' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddateincident").setValue(new Date());
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Incident", true);
//                });
//            });
//            describe("When 'Date Closed - Incident (cms_closeddateincident)' has no value", () => {
//                it(TestHelper.formatSharedCodeAssert("Ci2.sectiondisable"), () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_hasincident").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddateincident").setValue(null);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Incident", false);
//                });
//            });
//        });
//        describe("When 'Has Incident (cms_hasincident) is not 'true' or 'File Type (cms_filetype)' is not 'Incident' ", () => {
//            it("Hide Incident Information section", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_hasincident").setValue(false);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Incident").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Incident").setVisible).calledWith(false);
//            });
//        });

//        describe("When 'Has 82m (cms_has82m)' is 'true' or 'File Type (cms_filetype)' is 'Notification' ", () => {
//            it("Show Information ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                Xrm.Page.getAttribute("cms_has82m").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("8(2)(m)").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("8(2)(m)").setVisible).calledWith(true);
//            });
//            describe("When 'Date Closed - Notification (cms_closeddate82m)' has a value", () => {
//                it("Disable 'Notification' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_has82m").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddate82m").setValue(new Date());
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("8(2)(m)", true);
//                });
//            });
//            describe("When 'Date Closed - Notification (cms_closeddate82m)' has no value", () => {
//                it("Enable 'Notification' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_has82m").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddate82m").setValue(null);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("8(2)(m)", false);
//                });
//            });
//        });
//        describe("When 'Has 82m (cms_has82m)' is not 'true' or 'File Type (cms_filetype)' is not 'Notification' ", () => {
//            it("Hide 8(2)(m) Information section", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_has82m").setValue(false);
//                Xrm.Page.ui.tabs.get("Information").sections.get("8(2)(m)").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("8(2)(m)").setVisible).calledWith(false);
//            });
//        });

//        describe("When 'Has Early Res (cms_hasearlyres) is 'true' or 'File Type (cms_filetype)' is 'EarlyResolution' ", () => {
//            it("Show Information ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("EarlyResolution").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("EarlyResolution").setVisible).calledWith(true);
//            });
//            describe("When 'Date Closed - Early Resolution (cms_closeddateearlyres) and 'Disposition - Early Resolution (cms_dispositionearlyresolution)' have a value", () => {
//                it("Disable 'EarlyResolution' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(cms_pafile_cms_dispositionearlyresolution.Resolved);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("EarlyResolution", true);
//                });
//            });
//            describe("When 'Date Closed - Early Resolution (cms_closeddateearlyres) and 'Disposition - Early Resolution (cms_dispositionearlyresolution)' have no value", () => {
//                it("Enable 'Notification' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                    Xrm.Page.getAttribute("cms_hasearlyres").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(null);
//                    Xrm.Page.getAttribute("cms_dispositionearlyresolution").setValue(null);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("EarlyResolution", false);
//                });
//            });
//        });
//        describe("When 'Has Early Res (cms_hasearlyres)' is not 'true' or 'File Type (cms_filetype)' is not 'EarlyResolution' ", () => {
//            it("Hide EarlyResolution Information section", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                Xrm.Page.getAttribute("cms_hasearlyres").setValue(false);
//                Xrm.Page.ui.tabs.get("Information").sections.get("EarlyResolution").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("EarlyResolution").setVisible).calledWith(false);
//            });
//        });

//        describe("When 'Has Investigation (cms_hasinvestigation)' is 'true' or 'File Type (cms_filetype)' is 'Investigation' ", () => {
//            it("Show Information ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setVisible).calledWith(true);
//            });
//            describe("When 'Date Closed - Investigation (cms_dateofdispositioninvestigation)' and 'Disposition - Investigation' have a value", () => {
//                it("Disable 'Investigation' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.NoJurisdiction);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Investigation", true);
//                });
//            });
//            describe("When 'Date Closed - Investigation (cms_dateofdispositioninvestigation)' and 'Disposition - Investigation' have no value", () => {
//                it("Enable 'Investigation' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_hasinvestigation").setValue(true);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(null);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(null);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Investigation", false);
//                });
//            });
//        });
//        describe("When 'Has Investigation (cms_hasinvestigation)' is not 'true' or 'Complaint Phase (cms_complaintphase) is not 'Investigation' ", () => {
//            it("Hide Investigation Information section ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                Xrm.Page.getAttribute("cms_hasinvestigation").setValue(false);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Investigation").setVisible).calledWith(false);
//            });
//        });

//        describe("When 'Has Follow-up (cms_hasfollowup)' is 'true' or 'Complaint Phase (cms_complaintphase)' is 'Followup' ", () => {
//            it("Show Information ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible).calledWith(true);
//            });
//            describe("When 'Date Closed Follow-up (cms_closeddatefollowup)' and 'Disposition - Follow-up (cms_dispositionfollowup)' have a value", () => {
//                it("Disable 'Follow-up' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue(cms_pafile_cms_dispositionfollowup.Conditionallyresolvedsatisfactory);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Follow-up", true);
//                });
//            });
//            describe("When 'Date Closed Follow-up (cms_closeddatefollowup)' and 'Disposition - Follow-up (cms_dispositionfollowup)' have no value", () => {
//                it("Enable 'Follow-up' section", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(null);
//                    Xrm.Page.getAttribute("cms_dispositionfollowup").setValue(null);
//                    (<any>Ci2).sectiondisable = sinon.fake((<any>Ci2).sectiondisable);

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect((<any>Ci2).sectiondisable).calledWith("Follow-up", false);
//                });
//            });
//        });
//        describe("When 'Has Follow-up (cms_hasfollowup)' is not 'true' or 'Complaint Phase (cms_complaintphase)' is not 'Follow-up' ", () => {
//            it("Hide Follow-up Information section ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                Xrm.Page.getAttribute("cms_hasfollowup").setValue(false);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible).calledWith(false);
//            });
//        });

//        describe("When common complain (e.g. EarlyResolution, Followup or investigation)  ", () => {
//            it("Set ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible = sinon.fake();
//                Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complainttypeid").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complexity").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_prioritycomplaint").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel = sinon.fake();
//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("Follow-up").setVisible).calledWith(true);
//                expect(Xrm.Page.getAttribute("cms_respondentid").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_complainttypeid").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_complexity").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_dateofcomplaintacceptance").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_prioritycomplaint").setRequiredLevel).calledWith("required");
//                expect(Xrm.Page.getAttribute("cms_complaintphase").setRequiredLevel).calledWith("required");
//            });
//            describe("When 'Priority Complaint (cms_prioritycomplaint)' has no value", () => {
//                it("Set 'Priority Complaint (cms_prioritycomplaint)' to Medium", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_prioritycomplaint").setValue(null);
//                    Xrm.Page.getAttribute("cms_prioritycomplaint").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_prioritycomplaint").setValue).calledWith(cms_pafile_cms_prioritycomplaint.Medium);
//                });
//            });
//            describe("When 'Complexity (cms_complexity)' has no value", () => {
//                it("Set 'Complexity (cms_complexity)' to Medium", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                    Xrm.Page.getAttribute("cms_hasfollowup").setValue(true);
//                    Xrm.Page.getAttribute("cms_complexity").setValue(null);
//                    Xrm.Page.getAttribute("cms_complexity").setValue = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).EnableSections();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_complexity").setValue).calledWith(cms_pafile_cms_complexity.Medium);
//                });
//            });

//        });
//        describe("When no common complaint ", () => {
//            it("Hide ComplaintCommon ", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                Xrm.Page.ui.tabs.get("Information").sections.get("ComplaintCommon").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("Information").sections.get("ComplaintCommon").setVisible).calledWith(false);
//            });
//        });

//        describe("When 'Status Code (cms_status)' is Closed and 'File Type (cms_filetype)' is not null", () => {
//            it("Lock form", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                (<any>PaFile.MainForm).LockForm = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).EnableSections();

//                // assert
//                expect((<any>PaFile.MainForm).LockForm).called;
//            });
//        });
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.checkInvestigationRecommendations"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//            (<any>PaFile.MainForm).checkInvestigationRecommendations = sinon.fake((<any>PaFile.MainForm).checkInvestigationRecommendations);

//            // act
//            (<any>PaFile.MainForm).EnableSections();

//            // assert
//            expect((<any>PaFile.MainForm).checkInvestigationRecommendations).called;
//        });
//        it(TestHelper.formatSharedCodeAssert("PaFile.MainForm.userRoleOverRide"), () => {
//            // arrange
//            let mock = CreateMockForm();
//            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//            (<any>PaFile.MainForm).userRoleOverRide = sinon.fake((<any>PaFile.MainForm).userRoleOverRide);

//            // act
//            (<any>PaFile.MainForm).EnableSections();

//            // assert
//            expect((<any>PaFile.MainForm).userRoleOverRide).called;
//        });

//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.checkInvestigationRecommendations"), () => {
//        describe("When it is a Complaint Investigation is a recommendation (e.g. Accuracy, Collection, Other, Policy, Retention and Disposal, Use and Disclosure)", () => {
//            describe("When cms_dispositioninvestigation is Wellfounded, Wellfoundedresolved or Wellfoundedconditionallyresolved", () => {
//                it("Show cms_investigationrecommendationsmade, cms_investigationrecommendationsaccepted", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_complainttypeid").setValue([{ "entityType": "cms_pa_type", "id": "123", "name": "Accuracy" }]);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.Wellfounded);
//                    Xrm.Page.getControl("cms_investigationrecommendationsmade").setVisible = sinon.fake();
//                    Xrm.Page.getControl("cms_investigationrecommendationsaccepted").setVisible = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).checkInvestigationRecommendations();

//                    // assert
//                    expect(Xrm.Page.getControl("cms_investigationrecommendationsmade").setVisible).calledWith(true);
//                    expect(Xrm.Page.getControl("cms_investigationrecommendationsaccepted").setVisible).calledWith(true);
//                });
//                describe("When cms_dateofdispositioninvestigation has a value", () => {
//                    it("Set cms_investigationrecommendationsmade, cms_investigationrecommendationsaccepted as required", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                        Xrm.Page.getAttribute("cms_complainttypeid").setValue([{ "entityType": "cms_pa_type", "id": "123", "name": "Accuracy" }]);
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.Wellfounded);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(new Date());
//                        Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).checkInvestigationRecommendations();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel).calledWith("required");
//                        expect(Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel).calledWith("required");
//                    });
//                });
//                describe("When cms_dateofdispositioninvestigation has no value", () => {
//                    it("Set cms_investigationrecommendationsmade, cms_investigationrecommendationsaccepted as 'none'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                        Xrm.Page.getAttribute("cms_complainttypeid").setValue([{ "entityType": "cms_pa_type", "id": "123", "name": "Accuracy" }]);
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.Wellfounded);
//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(null);
//                        Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).checkInvestigationRecommendations();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel).calledWith("none");
//                        expect(Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel).calledWith("none");
//                    });
//                });
//            });
//        });
//        describe("When is not a complaint Investigation, etc", () => {
//            it("Show cms_investigationrecommendationsmade, cms_investigationrecommendationsaccepted", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                Xrm.Page.getAttribute("cms_complainttypeid").setValue([{ "entityType": "cms_pa_type", "id": "123", "name": "Accuracy" }]);
//                Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.Wellfounded);
//                Xrm.Page.getControl("cms_investigationrecommendationsmade").setVisible = sinon.fake();
//                Xrm.Page.getControl("cms_investigationrecommendationsaccepted").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).checkInvestigationRecommendations();

//                // assert
//                expect(Xrm.Page.getControl("cms_investigationrecommendationsmade").setVisible).calledWith(true);
//                expect(Xrm.Page.getControl("cms_investigationrecommendationsaccepted").setVisible).calledWith(true);
//            });
//            describe("When cms_dateofdispositioninvestigation has a value", () => {
//                it("Set cms_investigationrecommendationsmade, cms_investigationrecommendationsaccepted as required", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                    Xrm.Page.getAttribute("cms_complainttypeid").setValue([{ "entityType": "cms_pa_type", "id": "123", "name": "Accuracy" }]);
//                    Xrm.Page.getAttribute("cms_dispositioninvestigation").setValue(cms_pafile_cms_dispositioninvestigation.Wellfounded);
//                    Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(new Date());
//                    Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).checkInvestigationRecommendations();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel).calledWith("required");
//                    expect(Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel).calledWith("required");
//                });
//            });
//            describe("When cms_dateofdispositioninvestigation has no value", () => {
//                it("Set cms_investigationrecommendationsmade, cms_investigationrecommendationsaccepted as 'none' and not visible", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getControl("cms_investigationrecommendationsmade").setVisible = sinon.fake();
//                    Xrm.Page.getControl("cms_investigationrecommendationsaccepted").setVisible = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).checkInvestigationRecommendations();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_investigationrecommendationsmade").setRequiredLevel).calledWith("none");
//                    expect(Xrm.Page.getAttribute("cms_investigationrecommendationsaccepted").setRequiredLevel).calledWith("none");
//                    expect(Xrm.Page.getControl("cms_investigationrecommendationsmade").setVisible).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_investigationrecommendationsaccepted").setVisible).calledWith(false);
//                });
//            });
//        });
//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.userRoleOverRide"), () => {
//        describe("When user role is PA/PIPEDA Files Super Users or System Administrator", () => {
//            it("Show FormSections", () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.context.getUserRoles = () => ["25EF2D46-D131-4229-9384-EF3BB3F0E890"]; // System Administrator
//                Xrm.Page.ui.tabs.get("OtherData").sections.get("FormSections").setVisible = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).userRoleOverRide();

//                // assert
//                expect(Xrm.Page.ui.tabs.get("OtherData").sections.get("FormSections").setVisible).calledWith(true);
//            });
//            it("Enable cms_status, cms_filetype", () => {
//                // arrange
//                let mock = CreateMockForm();
//                mock.Page.context.getUserRoles = () => ["25EF2D46-D131-4229-9384-EF3BB3F0E890"]; // System Administrator
//                Xrm.Page.getControl("cms_status").setDisabled = sinon.fake();
//                Xrm.Page.getControl("cms_filetype").setDisabled = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).userRoleOverRide();

//                // assert
//                expect(Xrm.Page.getControl("cms_status").setDisabled).calledWith(false);
//                expect(Xrm.Page.getControl("cms_filetype").setDisabled).calledWith(false);
//            });
//            describe("When status is not 'Closed'", () => {
//                it("Enable close fields, disposition and compliant acceptance fields", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    mock.Page.context.getUserRoles = () => ["25EF2D46-D131-4229-9384-EF3BB3F0E890"]; // System Administrator
//                    Xrm.Page.getControl("cms_closeddateintake").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_closeddateincident").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_closeddate82m").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_closeddateearlyres").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_dateofdispositioninvestigation").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_closeddatefollowup").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_dateofcomplaintacceptance").setDisabled = sinon.fake();
//                    Xrm.Page.getControl("cms_complainantid").setDisabled = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).userRoleOverRide();

//                    // assert
//                    expect(Xrm.Page.getControl("cms_closeddateintake").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_closeddateincident").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_closeddate82m").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_closeddateearlyres").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_dateofdispositioninvestigation").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_closeddatefollowup").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_dateofcomplaintacceptance").setDisabled).calledWith(false);
//                    expect(Xrm.Page.getControl("cms_complainantid").setDisabled).calledWith(false);
//                });
//            });
//            describe("When cms_filetype is 'Complaint'", () => {
//                it("Enable cms_complaintphase", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    mock.Page.context.getUserRoles = () => ["25EF2D46-D131-4229-9384-EF3BB3F0E890"]; // System Administrator
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                    Xrm.Page.getControl("cms_complaintphase").setDisabled = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).userRoleOverRide();

//                    // assert
//                    expect(Xrm.Page.getControl("cms_complaintphase").setDisabled).calledWith(false);
//                });
//            });
//        });

//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.setRequiredLevelBasedOnStatus"), () => {
//        describe("When status is not Closed", () => {
//            it("Set disposition and close dates required level to 'none'", () => {
//                // arrange
//                let mock = CreateMockForm();
//                Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();
//                Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();

//                // act
//                (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                // assert
//                expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel).calledOnceWithExactly("none");
//                expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel).calledOnceWithExactly("none");
//            });
//        });
//        describe("When status is Closed", () => {
//            describe("When file type is 'Intake'", () => {
//                it("set close date and disposition as required", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                    Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel = sinon.fake();
//                    Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_closeddateintake").setRequiredLevel).calledOnceWithExactly("required");
//                    expect(Xrm.Page.getAttribute("cms_dispositionintake").setRequiredLevel).calledOnceWithExactly("required");
//                });
//            });
//            describe("When file type is 'Incident'", () => {
//                it("set close date as required", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                    Xrm.Page.getAttribute("cms_closeddateincident").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_closeddateincident").setRequiredLevel).calledOnceWithExactly("required");
//                });
//            });
//            describe("When file type is 'Notification'", () => {
//                it("set close date as required", () => {
//                    // arrange
//                    let mock = CreateMockForm();
//                    Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                    Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                    Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel = sinon.fake();

//                    // act
//                    (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                    // assert
//                    expect(Xrm.Page.getAttribute("cms_closeddate82m").setRequiredLevel).calledOnceWithExactly("required");
//                });
//            });
//            describe("When file type is 'Complaint'", () => {
//                describe("When complaintPhase is 'EarlyResolution'", () => {
//                    it.skip("[Potential Bug] Set close date and disposition as required", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);

//                        Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddateearlyres").setRequiredLevel).calledOnceWithExactly("required");
//                        expect(Xrm.Page.getAttribute("cms_dispositionearlyresolution").setRequiredLevel).calledOnceWithExactly("none");
//                    });
//                });
//                describe("When complaintPhase is 'Investigation'", () => {
//                    it("set close date and disposition as required", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);

//                        Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setRequiredLevel).calledOnceWithExactly("required");
//                        expect(Xrm.Page.getAttribute("cms_dispositioninvestigation").setRequiredLevel).calledOnceWithExactly("required");
//                    });
//                });
//                describe("When complaintPhase is 'Followup'", () => {
//                    it("set close date and disposition as required", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                        Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);

//                        Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel = sinon.fake();
//                        Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel = sinon.fake();

//                        // act
//                        (<any>PaFile.MainForm).setRequiredLevelBasedOnStatus();

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddatefollowup").setRequiredLevel).calledOnceWithExactly("required");
//                        expect(Xrm.Page.getAttribute("cms_dispositionfollowup").setRequiredLevel).calledOnceWithExactly("required");
//                    });
//                });
//            });
//        });
//    });

//    describe(TestHelper.formatSubtitle("PaFile.MainForm.CheckRules"), () => {
//        describe("When filed name is cms_status", () => {
//            describe("When cms_status is 'Closed'", () => {
//                describe("When file type is 'Intake' and cms_closeddateintake has no value", () => {
//                    it("Set cms_closeddateintake to Today's date", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let today = new Date();

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);

//                        // act
//                        (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddateintake").getValue().toDateString()).equals(today.toDateString());
//                    });
//                });
//                describe("When file type is 'Incident' and cms_closeddateincident has no value", () => {
//                    it("Set cms_closeddateincident to Today's date", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let today = new Date();

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                        Xrm.Page.getAttribute("cms_closeddateincident").setValue(null);

//                        // act
//                        (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddateincident").getValue().toDateString()).equals(today.toDateString());
//                    });
//                });
//                describe("When file type is 'Notification' and cms_closeddate82m has no value", () => {
//                    it("Set cms_closeddateincident to Today's date", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let today = new Date();

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                        Xrm.Page.getAttribute("cms_closeddate82m").setValue(null);

//                        // act
//                        (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddate82m").getValue().toDateString()).equals(today.toDateString());
//                    });
//                });
//                describe("When file type is a 'Complaint'", () => {
//                    describe("When cms_complaintphase is 'EarlyResolution' and cms_closeddateearlyres has no value", () => {
//                        it("Set cms_closeddateincident to Today's date", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            let today = new Date();

//                            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                            Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(null);

//                            // act
//                            (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_closeddateearlyres").getValue().toDateString()).equals(today.toDateString());
//                        });
//                    });
//                    describe("When cms_complaintphase is 'Investigation' and cms_dateofdispositioninvestigation has no value", () => {
//                        it("Set cms_dateofdispositioninvestigation to Today's date", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            let today = new Date();

//                            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                            Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(null);

//                            // act
//                            (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").getValue().toDateString()).equals(today.toDateString());
//                        });
//                    });
//                    describe("When cms_complaintphase is 'Followup' and cms_closeddatefollowup has no value", () => {
//                        it("Set cms_closeddatefollowup to Today's date", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            let today = new Date();

//                            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Closed);
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                            Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(null);

//                            // act
//                            (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_closeddatefollowup").getValue().toDateString()).equals(today.toDateString());
//                        });
//                    });
//                });
//            });
//            describe("When cms_status is not 'Closed'", () => {
//                describe("When file type is 'Intake' and cms_closeddateintake has no value", () => {
//                    it("Set cms_closeddateintake to null and disposition required level to 'none'", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let today = new Date();

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Intake);
//                        Xrm.Page.getAttribute("cms_closeddateintake").setValue(null);

//                        // act
//                        (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddateintake").getValue()).is.null;
//                        expect(Xrm.Page.getAttribute("cms_dispositionintake").getRequiredLevel()).equals("none");
//                    });
//                });
//                describe("When file type is 'Incident' and cms_closeddateincident has no value", () => {
//                    it("Set cms_closeddateincident to null", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let today = new Date();

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Incident);
//                        Xrm.Page.getAttribute("cms_closeddateincident").setValue(null);

//                        // act
//                        (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddateincident").getValue()).is.null;
//                    });
//                });
//                describe("When file type is 'Notification' and cms_closeddate82m has no value", () => {
//                    it("Set cms_closeddateincident to null", () => {
//                        // arrange
//                        let mock = CreateMockForm();
//                        let today = new Date();

//                        Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                        Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Notification);
//                        Xrm.Page.getAttribute("cms_closeddate82m").setValue(null);

//                        // act
//                        (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                        // assert
//                        expect(Xrm.Page.getAttribute("cms_closeddate82m").getValue()).is.null;
//                    });
//                });
//                describe("When file type is a 'Complaint'", () => {
//                    describe("When cms_complaintphase is 'EarlyResolution' and cms_closeddateearlyres has no value", () => {
//                        it("Set cms_closeddateincident to null and disposition required level to 'none'", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            let today = new Date();

//                            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.EarlyResolution);
//                            Xrm.Page.getAttribute("cms_closeddateearlyres").setValue(null);

//                            // act
//                            (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_closeddateearlyres").getValue()).is.null;
//                            expect(Xrm.Page.getAttribute("cms_closeddateearlyres").getRequiredLevel()).equals("none");
//                        });
//                    });
//                    describe("When cms_complaintphase is 'Investigation' and cms_dateofdispositioninvestigation has no value", () => {
//                        it("Set cms_dateofdispositioninvestigation  null and disposition required level to 'none'", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            let today = new Date();

//                            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Investigation);
//                            Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").setValue(null);

//                            // act
//                            (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").getValue()).is.null;
//                            expect(Xrm.Page.getAttribute("cms_dateofdispositioninvestigation").getRequiredLevel()).equals("none");
//                        });
//                    });
//                    describe("When cms_complaintphase is 'Followup' and cms_closeddatefollowup has no value", () => {
//                        it("Set cms_closeddatefollowup to  null and disposition required level to 'none'", () => {
//                            // arrange
//                            let mock = CreateMockForm();
//                            let today = new Date();

//                            Xrm.Page.getAttribute("cms_status").setValue(cms_pafile_cms_status.Active);
//                            Xrm.Page.getAttribute("cms_filetype").setValue(cms_pafile_cms_filetype.Complaint);
//                            Xrm.Page.getAttribute("cms_complaintphase").setValue(cms_pafile_cms_complaintphase.Followup);
//                            Xrm.Page.getAttribute("cms_closeddatefollowup").setValue(null);

//                            // act
//                            (<any>PaFile.MainForm).CheckRules(TestHelper.fakeContext("cms_status"));

//                            // assert
//                            expect(Xrm.Page.getAttribute("cms_closeddatefollowup").getValue()).is.null;
//                            expect(Xrm.Page.getAttribute("cms_closeddatefollowup").getRequiredLevel()).equals("none");
//                        });
//                    });
//                });
//            });
//        });
//    });

//});

//function CreateMockForm(): XrmMock {
//    var pageControls = new Array<Control>();
//    pageControls.push(CreateSimpleControlWithAttribute("SubjectList", null, "")); //
//    pageControls.push(CreateSimpleControlWithAttribute("PrivacySections", null, "")); //
//    pageControls.push(CreateSimpleControlWithAttribute("IFRAME_Ci2Officium", null, "")); //
//    pageControls.push(CreateSimpleControlWithAttribute("IFRAME_Stealth", null, "")); //

//    pageControls.push(CreateSimpleControlWithAttribute("cms_acknowledgmentlettersentdate", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_affectedpartiesnotified", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_casesummary", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_casesummaryposted", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_closeddate82m", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_closeddateearlyres", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_closeddatefollowup", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_closeddateincident", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_closeddateintake", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_complainantid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_complaintactivation", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_complaintphase", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_complaintphase>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_complainttypeid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_complexity", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_complexity>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dateclosed", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datecomplaintreopened", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datedue82m", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datedueearlyres", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dateduefollowup", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datedueintake", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dateofanticipatedrelease", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dateofcomplaintacceptance", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dateofdispositioninvestigation", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dateofexpectedcompletioninvestigation", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datereceived", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datesection33lettersent", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_datesection35lettersent", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_deemeddenial", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_deemeddenial>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_descriptioncommon", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_descriptionfollowup", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dispositionearlyresolution", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_dispositionearlyresolution>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dispositionfollowup", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_dispositionfollowup>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dispositionintake", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_dispositionintake>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dispositioninvestigation", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_dispositioninvestigation>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_dispositiontext", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_filenumber", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_filetype", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_filetype>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_has82m", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_hasearlyres", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_hasfollowup", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_hasincident", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_hasintake", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_hasinvestigation", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_incidenttype", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_incidenttype>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_interestforannualreport", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_investigationrecommendationsaccepted", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_investigationrecommendationsmade", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_investigatorid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_jointparallelinvestigation", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_legalconsultations", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_linktoparentid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_mpinvolved", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_mpinvolved>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_multiplecomplaintstrategy", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_notificationlettersentdate", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_notificationtype", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_notificationtype>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_numberofindividualsaffected", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_numberofrecommendations", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_numberofrecommendationsimplemented", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_occurencedate", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_opcpriority", null, "")); // Xrm.OptionSetAttribute<cms_opcpriority>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_openofficium", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_origin", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_origin>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_parentinvestigationid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_prioritycomplaint", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_prioritycomplaint>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_priorityincident", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_priorityincident>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_province", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_province>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_publicinterestdisclosureunderotherlegisla", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_publicinterestdisclosureunderotherlegisla>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_recidivism", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_referringinforequestid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_reportedby", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_reportedby>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_representativeid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_respondentid", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_respondentsreference", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_status", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_status>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_statusdetails", null, "")); // Xrm.Attribute<string>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_subjectcategory", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_subjectcategory>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_subjecttype", null, "")); // Xrm.OptionSetAttribute<cms_pafile_cms_subjecttype>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_totalefforttime", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflag82m", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflagearlyres", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflagfollowup", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflagincident", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflagintake", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflaginvestigation", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transflagreceived", null, "")); // Xrm.OptionSetAttribute<boolean>;
//    pageControls.push(CreateSimpleControlWithAttribute("cms_transitionflagduedate", null, "")); // Xrm.NumberAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("createdby", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("createdon", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("modifiedby", null, "")); // Xrm.LookupAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("modifiedon", null, "")); // Xrm.DateAttribute;
//    pageControls.push(CreateSimpleControlWithAttribute("ownerid", null, "")); // Xrm.LookupAttribute;

//    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, FormType.Create);
//    var mock = new XrmMock(page);

//    return mock;
//}