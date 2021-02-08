declare namespace Form.opc_provision.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_descriptionfrench"): Xrm.Attribute<string>;
      get(name: "opc_ischeckable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_isheading"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_legislationid"): Xrm.LookupAttribute<"opc_legislation">;
      get(name: "opc_marginalnoteenglish"): Xrm.Attribute<string>;
      get(name: "opc_marginalnotefrench"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_parentprovisionid"): Xrm.LookupAttribute<"opc_provision">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_descriptionfrench"): Xrm.StringControl;
      get(name: "opc_ischeckable"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_isheading"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_legislationid"): Xrm.LookupControl<"opc_legislation">;
      get(name: "opc_marginalnoteenglish"): Xrm.StringControl;
      get(name: "opc_marginalnotefrench"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_parentprovisionid"): Xrm.LookupControl<"opc_provision">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionfrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_ischeckable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_isheading"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_legislationid"): Xrm.LookupAttribute<"opc_legislation">;
    getAttribute(attributeName: "opc_marginalnoteenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_marginalnotefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_parentprovisionid"): Xrm.LookupAttribute<"opc_provision">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionfrench"): Xrm.StringControl;
    getControl(controlName: "opc_ischeckable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_isheading"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_legislationid"): Xrm.LookupControl<"opc_legislation">;
    getControl(controlName: "opc_marginalnoteenglish"): Xrm.StringControl;
    getControl(controlName: "opc_marginalnotefrench"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_parentprovisionid"): Xrm.LookupControl<"opc_provision">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
