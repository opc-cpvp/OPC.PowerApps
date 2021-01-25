declare namespace Form.opc_questiontemplate.QuickCreate {
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
      get(name: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
      get(name: "opc_conditionalvisibility"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_parentquestiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
      get(name: "opc_questiontypeid"): Xrm.LookupAttribute<"opc_questiontype">;
      get(name: "opc_sequence"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
      get(name: "opc_conditionalvisibility"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_parentquestiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
      get(name: "opc_questiontypeid"): Xrm.LookupControl<"opc_questiontype">;
      get(name: "opc_sequence"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
    getAttribute(attributeName: "opc_conditionalvisibility"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_parentquestiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
    getAttribute(attributeName: "opc_questiontypeid"): Xrm.LookupAttribute<"opc_questiontype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
    getControl(controlName: "opc_conditionalvisibility"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_parentquestiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
    getControl(controlName: "opc_questiontypeid"): Xrm.LookupControl<"opc_questiontype">;
    getControl(controlName: "opc_sequence"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
