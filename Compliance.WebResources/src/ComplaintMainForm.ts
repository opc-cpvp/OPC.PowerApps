//import * as Ci2 from "./com";
//declare var Xrm: Xrm<Form.opc_complaint.Main.Information>;
var TestingCRM = "test";

export namespace Complaint {
    export class MainForm {

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public static form_OnLoad(executingContext: Xrm.ExecutionContext<any>): void {

            let formContext = <Form.opc_complaint.Main.Information>executingContext.getFormContext();
            alert(formContext.data.process.getActiveStage().getName);

            //executingContext.
            //if (formContext.ui.getFormType() == Xrm.FormType.Create) {
            //    // disable the required fields so that we can save the entity and get a record number
            //    formContext.getAttribute("cms_filetype").setRequiredLevel("none");
            //    Xrm.Page.getAttribute("cms_datereceived").setRequiredLevel("none");
            //    Xrm.Page.getAttribute("cms_status").setRequiredLevel("none");
            //    Xrm.Page.getAttribute("cms_complainantid").setRequiredLevel("none");

            //    // All new cases should work the new way
            //    Ci2.showHideField("PrivacySections", false);
            //    Ci2.showHideField("cms_complainttypeid", false);
            //    Ci2.showHideField("cms_dispositioninvestigation", false);
            //    Ci2.showHideField("cms_dispositionearlyresolution", false);

            //    Xrm.Page.data.entity.save();
            //}
            //else {
            //    Xrm.Page.getAttribute("cms_filetype").setRequiredLevel("required");
            //    Xrm.Page.getAttribute("cms_datereceived").setRequiredLevel("required");
            //    Xrm.Page.getAttribute("cms_status").setRequiredLevel("required");

            //    MainForm.HideAllSections();
            //    MainForm.EnableSections();

            //    Xrm.Page.getControl("PrivacySections").addOnLoad(function () {
            //        let recordCount = Xrm.Page.getControl("PrivacySections").getGrid().getTotalRecordCount();
            //        // -1 means its loading
            //        if (recordCount > -1) {
            //            let isLegacyCase = recordCount > 0;

            //            Ci2.showHideField("PrivacySections", isLegacyCase);
            //            Ci2.showHideField("cms_complainttypeid", isLegacyCase);
            //            Ci2.showHideField("cms_dispositioninvestigation", isLegacyCase);
            //            Ci2.showHideField("cms_dispositionearlyresolution", isLegacyCase);

            //            Ci2.showHideField("cms_issues_grid", !isLegacyCase);
            //        }
            //    });

            //    Xrm.Page.getControl("cms_filenumber").setFocus();
            //    Xrm.Page.getControl("cms_filenumber").setDisabled(true);

            //    Xrm.Page.getControl("cms_openofficium").setDisabled(true);
            //    Xrm.Page.getAttribute("cms_openofficium").setValue(false);

            //    MainForm.setRequiredLevelBasedOnStatus();
            }
        }

    class ModelState {
        isValid: boolean = true;

        AddModelError(propertyName: string, message: string) {
            this.isValid = false;
            this.Errors.push(new KeyValuePair<string, string>(propertyName, message));
        }

        private Errors: Array<KeyValuePair<string, string>> = new Array<KeyValuePair<string, string>>();

        ValidationSummary(): string {
            let summary: string = "";
            this.Errors.forEach(x => { summary += x.Value; });
            return summary
        }
    }

    class KeyValuePair<TKey, TValue> {
        constructor(key: TKey, value: TValue) {
            this.Key = key;
            this.Value = value;
        }

        Key: TKey;
        Value: TValue;
    }

}