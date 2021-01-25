declare namespace Form.opc_riskassessmentcategory.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_risk_assessment_definitions"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_actualriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "opc_bypassinitiatedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "opc_bypassrationale"): Xrm.Attribute<string>;
      get(name: "opc_bypasssuggestedriskappetite"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessment"): Xrm.LookupAttribute<"opc_riskassessment">;
      get(name: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: "opc_suggestedriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_opc_riskassessment"): Xrm.LookupControl<"opc_riskassessment">;
      get(name: "header_opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_actualriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "opc_bypassinitiatedby"): Xrm.LookupControl<"systemuser">;
      get(name: "opc_bypassrationale"): Xrm.StringControl;
      get(name: "opc_bypasssuggestedriskappetite"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: "opc_suggestedriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "subgrid_risk_assessment_definitions"): Xrm.SubGridControl<"opc_riskassessmentdefinition">;
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
    getAttribute(attributeName: "opc_actualriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "opc_bypassinitiatedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "opc_bypassrationale"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_bypasssuggestedriskappetite"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessment"): Xrm.LookupAttribute<"opc_riskassessment">;
    getAttribute(attributeName: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: "opc_suggestedriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_opc_riskassessment"): Xrm.LookupControl<"opc_riskassessment">;
    getControl(controlName: "header_opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_actualriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "opc_bypassinitiatedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "opc_bypassrationale"): Xrm.StringControl;
    getControl(controlName: "opc_bypasssuggestedriskappetite"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: "opc_suggestedriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "subgrid_risk_assessment_definitions"): Xrm.SubGridControl<"opc_riskassessmentdefinition">;
    getControl(controlName: string): undefined;
  }
}
