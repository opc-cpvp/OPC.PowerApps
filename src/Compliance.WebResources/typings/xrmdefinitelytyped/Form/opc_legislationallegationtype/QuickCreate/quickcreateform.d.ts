declare namespace Form.opc_legislationallegationtype.QuickCreate {
  namespace quickcreateform {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationtype"): Xrm.LookupAttribute<"opc_allegationtype">;
      get(name: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_allegationtype"): Xrm.LookupControl<"opc_allegationtype">;
      get(name: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface quickcreateform extends Xrm.PageBase<quickcreateform.Attributes,quickcreateform.Tabs,quickcreateform.Controls> {
    getAttribute(attributeName: "opc_allegationtype"): Xrm.LookupAttribute<"opc_allegationtype">;
    getAttribute(attributeName: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_allegationtype"): Xrm.LookupControl<"opc_allegationtype">;
    getControl(controlName: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
    getControl(controlName: string): undefined;
  }
}
