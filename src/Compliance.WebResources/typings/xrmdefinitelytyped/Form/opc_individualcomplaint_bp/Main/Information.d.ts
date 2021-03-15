declare namespace Form.opc_individualcomplaint_bp.Main {
  namespace Information {
    namespace Tabs {
      interface StageStep106 extends Xrm.SectionCollectionBase {
        get(name: "StageStep106_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep12 extends Xrm.SectionCollectionBase {
        get(name: "StageStep12_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep25 extends Xrm.SectionCollectionBase {
        get(name: "StageStep25_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep3 extends Xrm.SectionCollectionBase {
        get(name: "StageStep3_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep32 extends Xrm.SectionCollectionBase {
        get(name: "StageStep32_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep47 extends Xrm.SectionCollectionBase {
        get(name: "StageStep47_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep51 extends Xrm.SectionCollectionBase {
        get(name: "StageStep51_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep55 extends Xrm.SectionCollectionBase {
        get(name: "StageStep55_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep61 extends Xrm.SectionCollectionBase {
        get(name: "StageStep61_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep67 extends Xrm.SectionCollectionBase {
        get(name: "StageStep67_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep71 extends Xrm.SectionCollectionBase {
        get(name: "StageStep71_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep77 extends Xrm.SectionCollectionBase {
        get(name: "StageStep77_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep81 extends Xrm.SectionCollectionBase {
        get(name: "StageStep81_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep87 extends Xrm.SectionCollectionBase {
        get(name: "StageStep87_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep92 extends Xrm.SectionCollectionBase {
        get(name: "StageStep92_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep98 extends Xrm.SectionCollectionBase {
        get(name: "StageStep98_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_accountid"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_closereason"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_complainant"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_complainantperceivedpriorities"): Xrm.MultiSelectOptionSetAttribute<number>;
      get(name: "opc_complainantreportdrafted"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_erapproval"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_erdisposition"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_escalationapproved"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_intakedisposition"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_legislation"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_nextstep"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_reasontorequirefurtherinvestigation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_reportredactor"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_reportrequested"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_representativeauthorizationprovided"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_requiresfurtherinvestigation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_resolution"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_respondentandcomplainantrelationship"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_respondentreportdrafted"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_sendcloseletter"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_accountid"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason2"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason3"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainant"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainantperceivedpriorities"): Xrm.MultiSelectOptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainantreportdrafted"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_erapproval"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_erapproval1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_erdisposition"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_escalationapproved"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_legislation"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_reasontorequirefurtherinvestigation"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_recommendtoregistrar"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_reportredactor"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_reportrequested"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_representativeauthorizationprovided"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_requiresfurtherinvestigation"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_resolution"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_respondentandcomplainantrelationship"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_respondentreportdrafted"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter1"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter2"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter3"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter4"): Xrm.OptionSetControl<boolean>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter5"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StageStep106"): Xrm.PageTab<Tabs.StageStep106>;
      get(name: "StageStep12"): Xrm.PageTab<Tabs.StageStep12>;
      get(name: "StageStep25"): Xrm.PageTab<Tabs.StageStep25>;
      get(name: "StageStep3"): Xrm.PageTab<Tabs.StageStep3>;
      get(name: "StageStep32"): Xrm.PageTab<Tabs.StageStep32>;
      get(name: "StageStep47"): Xrm.PageTab<Tabs.StageStep47>;
      get(name: "StageStep51"): Xrm.PageTab<Tabs.StageStep51>;
      get(name: "StageStep55"): Xrm.PageTab<Tabs.StageStep55>;
      get(name: "StageStep61"): Xrm.PageTab<Tabs.StageStep61>;
      get(name: "StageStep67"): Xrm.PageTab<Tabs.StageStep67>;
      get(name: "StageStep71"): Xrm.PageTab<Tabs.StageStep71>;
      get(name: "StageStep77"): Xrm.PageTab<Tabs.StageStep77>;
      get(name: "StageStep81"): Xrm.PageTab<Tabs.StageStep81>;
      get(name: "StageStep87"): Xrm.PageTab<Tabs.StageStep87>;
      get(name: "StageStep92"): Xrm.PageTab<Tabs.StageStep92>;
      get(name: "StageStep98"): Xrm.PageTab<Tabs.StageStep98>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_accountid"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_closereason"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_complainant"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_complainantperceivedpriorities"): Xrm.MultiSelectOptionSetAttribute<number>;
    getAttribute(attributeName: "opc_complainantreportdrafted"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_erapproval"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_erdisposition"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_escalationapproved"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_intakedisposition"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_legislation"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_nextstep"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_reasontorequirefurtherinvestigation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_reportredactor"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_reportrequested"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_representativeauthorizationprovided"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_requiresfurtherinvestigation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_resolution"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_respondentandcomplainantrelationship"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_respondentreportdrafted"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_sendcloseletter"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_accountid"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason2"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason3"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainant"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainantperceivedpriorities"): Xrm.MultiSelectOptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainantreportdrafted"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_erapproval"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_erapproval1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_erdisposition"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_escalationapproved"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_legislation"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_reasontorequirefurtherinvestigation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_recommendtoregistrar"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_reportredactor"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_reportrequested"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_representativeauthorizationprovided"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_requiresfurtherinvestigation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_resolution"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_respondentandcomplainantrelationship"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_respondentreportdrafted"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter1"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter2"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter3"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter4"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sendcloseletter5"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
  }
}
