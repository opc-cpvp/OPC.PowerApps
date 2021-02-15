declare namespace Form.opc_riskassessmentdefinition.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_isselected"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmentcategory"): Xrm.LookupAttribute<"opc_riskassessmentcategory">;
      get(name: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupAttribute<"opc_riskassessmentdefinitiontemplate">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
      get(name: "opc_riskassessmentid"): Xrm.LookupAttribute<"opc_riskassessment">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_isselected"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmentcategory"): Xrm.LookupControl<"opc_riskassessmentcategory">;
      get(name: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupControl<"opc_riskassessmentdefinitiontemplate">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
      get(name: "opc_riskassessmentid"): Xrm.LookupControl<"opc_riskassessment">;
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
    getAttribute(attributeName: "opc_isselected"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmentcategory"): Xrm.LookupAttribute<"opc_riskassessmentcategory">;
    getAttribute(attributeName: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupAttribute<"opc_riskassessmentdefinitiontemplate">;
    getAttribute(attributeName: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
    getAttribute(attributeName: "opc_riskassessmentid"): Xrm.LookupAttribute<"opc_riskassessment">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_isselected"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmentcategory"): Xrm.LookupControl<"opc_riskassessmentcategory">;
    getControl(controlName: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupControl<"opc_riskassessmentdefinitiontemplate">;
    getControl(controlName: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
    getControl(controlName: "opc_riskassessmentid"): Xrm.LookupControl<"opc_riskassessment">;
    getControl(controlName: string): undefined;
  }
}
