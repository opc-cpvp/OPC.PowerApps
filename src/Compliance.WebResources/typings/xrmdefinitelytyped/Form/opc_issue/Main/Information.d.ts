declare namespace Form.opc_issue.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_accessrequestdocuments"): Xrm.PageSection;
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_accessrequestnumber"): Xrm.Attribute<string>;
      get(name: "opc_allegationtypeid"): Xrm.LookupAttribute<"opc_allegationtype">;
      get(name: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
      get(name: "opc_contact"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_disposition"): Xrm.OptionSetAttribute<opc_issuedisposition>;
      get(name: "opc_milestoneatdisposition"): Xrm.OptionSetAttribute<opc_complaintmilestone>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
      get(name: "header_opc_disposition"): Xrm.OptionSetControl<opc_issuedisposition>;
      get(name: "header_opc_milestoneatdisposition"): Xrm.OptionSetControl<opc_complaintmilestone>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_accessrequestnumber"): Xrm.StringControl;
      get(name: "opc_allegationtypeid"): Xrm.LookupControl<"opc_allegationtype">;
      get(name: "opc_contact"): Xrm.LookupControl<"contact">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "subgrid_accessrequestdocuments"): Xrm.BaseControl;
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
    getAttribute(attributeName: "opc_accessrequestnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_allegationtypeid"): Xrm.LookupAttribute<"opc_allegationtype">;
    getAttribute(attributeName: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
    getAttribute(attributeName: "opc_contact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_disposition"): Xrm.OptionSetAttribute<opc_issuedisposition>;
    getAttribute(attributeName: "opc_milestoneatdisposition"): Xrm.OptionSetAttribute<opc_complaintmilestone>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
    getControl(controlName: "header_opc_disposition"): Xrm.OptionSetControl<opc_issuedisposition>;
    getControl(controlName: "header_opc_milestoneatdisposition"): Xrm.OptionSetControl<opc_complaintmilestone>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_accessrequestnumber"): Xrm.StringControl;
    getControl(controlName: "opc_allegationtypeid"): Xrm.LookupControl<"opc_allegationtype">;
    getControl(controlName: "opc_contact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "subgrid_accessrequestdocuments"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
  }
}
