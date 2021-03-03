declare namespace Form.opc_allegation.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_checklist_responses"): Xrm.PageSection;
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationtypeid"): Xrm.LookupAttribute<"opc_allegationtype">;
      get(name: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
      get(name: "opc_disposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
      get(name: "opc_dispositionactionid"): Xrm.LookupAttribute<"opc_dispositionaction">;
      get(name: "opc_dispositionreasonid"): Xrm.LookupAttribute<"opc_dispositionreason">;
      get(name: "opc_jurisdiction"): Xrm.OptionSetAttribute<opc_jurisdictions>;
      get(name: "opc_referencenumber"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_checklist"): Xrm.WebResourceControl;
      get(name: "header_opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_allegationtypeid"): Xrm.LookupControl<"opc_allegationtype">;
      get(name: "opc_disposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
      get(name: "opc_dispositionactionid"): Xrm.LookupControl<"opc_dispositionaction">;
      get(name: "opc_dispositionreasonid"): Xrm.LookupControl<"opc_dispositionreason">;
      get(name: "opc_jurisdiction"): Xrm.OptionSetControl<opc_jurisdictions>;
      get(name: "opc_referencenumber"): Xrm.StringControl;
      get(name: "subgrid_personalinformationtype"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_allegationtypeid"): Xrm.LookupAttribute<"opc_allegationtype">;
    getAttribute(attributeName: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
    getAttribute(attributeName: "opc_disposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
    getAttribute(attributeName: "opc_dispositionactionid"): Xrm.LookupAttribute<"opc_dispositionaction">;
    getAttribute(attributeName: "opc_dispositionreasonid"): Xrm.LookupAttribute<"opc_dispositionreason">;
    getAttribute(attributeName: "opc_jurisdiction"): Xrm.OptionSetAttribute<opc_jurisdictions>;
    getAttribute(attributeName: "opc_referencenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "WebResource_checklist"): Xrm.WebResourceControl;
    getControl(controlName: "header_opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_allegationtypeid"): Xrm.LookupControl<"opc_allegationtype">;
    getControl(controlName: "opc_disposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
    getControl(controlName: "opc_dispositionactionid"): Xrm.LookupControl<"opc_dispositionaction">;
    getControl(controlName: "opc_dispositionreasonid"): Xrm.LookupControl<"opc_dispositionreason">;
    getControl(controlName: "opc_jurisdiction"): Xrm.OptionSetControl<opc_jurisdictions>;
    getControl(controlName: "opc_referencenumber"): Xrm.StringControl;
    getControl(controlName: "subgrid_personalinformationtype"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
  }
}
