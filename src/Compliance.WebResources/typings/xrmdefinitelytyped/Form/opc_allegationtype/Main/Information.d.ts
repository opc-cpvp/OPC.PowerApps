declare namespace Form.opc_allegationtype.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acronym"): Xrm.Attribute<string>;
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_descriptionfrench"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_acronym"): Xrm.StringControl;
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_descriptionfrench"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "subgrid_legislations"): Xrm.SubGridControl<"opc_legislationallegationtype">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_acronym"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionfrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_acronym"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionfrench"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "subgrid_legislations"): Xrm.SubGridControl<"opc_legislationallegationtype">;
    getControl(controlName: string): undefined;
  }
}
