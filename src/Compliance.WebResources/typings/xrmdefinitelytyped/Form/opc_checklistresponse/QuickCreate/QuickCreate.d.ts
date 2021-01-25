declare namespace Form.opc_checklistresponse.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationid"): Xrm.LookupAttribute<"opc_allegation">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_questiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
      get(name: "opc_response"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_allegationid"): Xrm.LookupControl<"opc_allegation">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_questiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
      get(name: "opc_response"): Xrm.StringControl;
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
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_allegationid"): Xrm.LookupAttribute<"opc_allegation">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_questiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
    getAttribute(attributeName: "opc_response"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_allegationid"): Xrm.LookupControl<"opc_allegation">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_questiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
    getControl(controlName: "opc_response"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
