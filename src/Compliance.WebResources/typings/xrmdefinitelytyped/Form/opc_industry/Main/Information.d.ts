declare namespace Form.opc_industry.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_superseded_industries extends Xrm.SectionCollectionBase {
        get(name: "section_superseded_industries"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_descriptionfrench"): Xrm.Attribute<string>;
      get(name: "opc_naicsnumber"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_parentindustryid"): Xrm.LookupAttribute<"opc_industry">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "grid_superseded_industries"): Xrm.SubGridControl<"opc_industry">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_descriptionfrench"): Xrm.StringControl;
      get(name: "opc_naicsnumber"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_parentindustryid"): Xrm.LookupControl<"opc_industry">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: "tab_superseded_industries"): Xrm.PageTab<Tabs.tab_superseded_industries>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionfrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_naicsnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_parentindustryid"): Xrm.LookupAttribute<"opc_industry">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "grid_superseded_industries"): Xrm.SubGridControl<"opc_industry">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionfrench"): Xrm.StringControl;
    getControl(controlName: "opc_naicsnumber"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_parentindustryid"): Xrm.LookupControl<"opc_industry">;
    getControl(controlName: string): undefined;
  }
}
