declare namespace Form.opc_riskassessmentdefinitiontemplate.QuickCreate {
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
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
    getControl(controlName: string): undefined;
  }
}
