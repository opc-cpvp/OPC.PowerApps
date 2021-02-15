declare namespace Form.opc_complaint.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_accountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "opc_closereason"): Xrm.OptionSetAttribute<opc_closereason> | null;
      get(name: "opc_complainant"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_complainantrep"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_complainantreportdrafted"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "opc_erapproval"): Xrm.OptionSetAttribute<opc_erapproval> | null;
      get(name: "opc_erdisposition"): Xrm.OptionSetAttribute<opc_erdisposition> | null;
      get(name: "opc_escalationapproved"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "opc_intakedisposition"): Xrm.OptionSetAttribute<opc_intakedisposition> | null;
      get(name: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
      get(name: "opc_nextstep"): Xrm.OptionSetAttribute<opc_nextstep> | null;
      get(name: "opc_number"): Xrm.Attribute<string>;
      get(name: "opc_reasontorequirefurtherinvestigation"): Xrm.MultiSelectOptionSetAttribute<opc_reasontorequirefurtherinvestigation> | null;
      get(name: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<opc_yesorno> | null;
      get(name: "opc_reportredactor"): Xrm.LookupAttribute<"systemuser"> | null;
      get(name: "opc_reportrequested"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "opc_representativeauthorizationprovided"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "opc_requiresfurtherinvestigation"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "opc_resolution"): Xrm.MultiSelectOptionSetAttribute<opc_complaintresolution> | null;
      get(name: "opc_respondentandcomplainantrelationship"): Xrm.OptionSetAttribute<opc_respondentandcomplainantrelationship> | null;
      get(name: "opc_respondentreportdrafted"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "opc_sendcloseletter"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_opc_accountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_opc_closereason"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_1"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_2"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_3"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_complainant"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_opc_complainantreportdrafted"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_erapproval"): Xrm.OptionSetControl<opc_erapproval> | null;
      get(name: "header_process_opc_erapproval_1"): Xrm.OptionSetControl<opc_erapproval> | null;
      get(name: "header_process_opc_erdisposition"): Xrm.OptionSetControl<opc_erdisposition> | null;
      get(name: "header_process_opc_escalationapproved"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_intakedisposition"): Xrm.OptionSetControl<opc_intakedisposition> | null;
      get(name: "header_process_opc_intakedisposition_1"): Xrm.OptionSetControl<opc_intakedisposition> | null;
      get(name: "header_process_opc_legislation"): Xrm.LookupControl<"opc_legislation"> | null;
      get(name: "header_process_opc_nextstep"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_nextstep_1"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_reasontorequirefurtherinvestigation"): Xrm.MultiSelectOptionSetControl<opc_reasontorequirefurtherinvestigation> | null;
      get(name: "header_process_opc_recommendtoregistrar"): Xrm.OptionSetControl<opc_yesorno> | null;
      get(name: "header_process_opc_reportredactor"): Xrm.LookupControl<"systemuser"> | null;
      get(name: "header_process_opc_reportrequested"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_representativeauthorizationprovided"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_requiresfurtherinvestigation"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_resolution"): Xrm.MultiSelectOptionSetControl<opc_complaintresolution> | null;
      get(name: "header_process_opc_respondentandcomplainantrelationship"): Xrm.OptionSetControl<opc_respondentandcomplainantrelationship> | null;
      get(name: "header_process_opc_respondentreportdrafted"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_sendcloseletter"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_sendcloseletter_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_sendcloseletter_2"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_sendcloseletter_3"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_sendcloseletter_4"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_opc_sendcloseletter_5"): Xrm.OptionSetControl<boolean> | null;
      get(name: "opc_complainant"): Xrm.LookupControl<"contact">;
      get(name: "opc_complainantrep"): Xrm.LookupControl<"contact">;
      get(name: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
      get(name: "opc_number"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_accountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "opc_closereason"): Xrm.OptionSetAttribute<opc_closereason> | null;
    getAttribute(attributeName: "opc_complainant"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_complainantrep"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_complainantreportdrafted"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "opc_erapproval"): Xrm.OptionSetAttribute<opc_erapproval> | null;
    getAttribute(attributeName: "opc_erdisposition"): Xrm.OptionSetAttribute<opc_erdisposition> | null;
    getAttribute(attributeName: "opc_escalationapproved"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "opc_intakedisposition"): Xrm.OptionSetAttribute<opc_intakedisposition> | null;
    getAttribute(attributeName: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
    getAttribute(attributeName: "opc_nextstep"): Xrm.OptionSetAttribute<opc_nextstep> | null;
    getAttribute(attributeName: "opc_number"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_reasontorequirefurtherinvestigation"): Xrm.MultiSelectOptionSetAttribute<opc_reasontorequirefurtherinvestigation> | null;
    getAttribute(attributeName: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<opc_yesorno> | null;
    getAttribute(attributeName: "opc_reportredactor"): Xrm.LookupAttribute<"systemuser"> | null;
    getAttribute(attributeName: "opc_reportrequested"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "opc_representativeauthorizationprovided"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "opc_requiresfurtherinvestigation"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "opc_resolution"): Xrm.MultiSelectOptionSetAttribute<opc_complaintresolution> | null;
    getAttribute(attributeName: "opc_respondentandcomplainantrelationship"): Xrm.OptionSetAttribute<opc_respondentandcomplainantrelationship> | null;
    getAttribute(attributeName: "opc_respondentreportdrafted"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "opc_sendcloseletter"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_process_opc_accountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_opc_closereason"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_1"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_2"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_3"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_complainant"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_opc_complainantreportdrafted"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_erapproval"): Xrm.OptionSetControl<opc_erapproval> | null;
    getControl(controlName: "header_process_opc_erapproval_1"): Xrm.OptionSetControl<opc_erapproval> | null;
    getControl(controlName: "header_process_opc_erdisposition"): Xrm.OptionSetControl<opc_erdisposition> | null;
    getControl(controlName: "header_process_opc_escalationapproved"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_intakedisposition"): Xrm.OptionSetControl<opc_intakedisposition> | null;
    getControl(controlName: "header_process_opc_intakedisposition_1"): Xrm.OptionSetControl<opc_intakedisposition> | null;
    getControl(controlName: "header_process_opc_legislation"): Xrm.LookupControl<"opc_legislation"> | null;
    getControl(controlName: "header_process_opc_nextstep"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_nextstep_1"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_reasontorequirefurtherinvestigation"): Xrm.MultiSelectOptionSetControl<opc_reasontorequirefurtherinvestigation> | null;
    getControl(controlName: "header_process_opc_recommendtoregistrar"): Xrm.OptionSetControl<opc_yesorno> | null;
    getControl(controlName: "header_process_opc_reportredactor"): Xrm.LookupControl<"systemuser"> | null;
    getControl(controlName: "header_process_opc_reportrequested"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_representativeauthorizationprovided"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_requiresfurtherinvestigation"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_resolution"): Xrm.MultiSelectOptionSetControl<opc_complaintresolution> | null;
    getControl(controlName: "header_process_opc_respondentandcomplainantrelationship"): Xrm.OptionSetControl<opc_respondentandcomplainantrelationship> | null;
    getControl(controlName: "header_process_opc_respondentreportdrafted"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_sendcloseletter"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_sendcloseletter_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_sendcloseletter_2"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_sendcloseletter_3"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_sendcloseletter_4"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_opc_sendcloseletter_5"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "opc_complainant"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_complainantrep"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
    getControl(controlName: "opc_number"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
