declare namespace Form.opc_accessrequestdocument.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_contestedbycomplainant"): Xrm.Attribute<any>;
      get(name: "opc_correctlyappliedexemption"): Xrm.Attribute<any>;
      get(name: "opc_datereleased"): Xrm.DateAttribute;
      get(name: "opc_description"): Xrm.Attribute<string>;
      get(name: "opc_documenturl"): Xrm.Attribute<string>;
      get(name: "opc_issue"): Xrm.LookupAttribute<"opc_issue">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_rationale"): Xrm.Attribute<string>;
      get(name: "opc_releasedstate"): Xrm.OptionSetAttribute<opc_releasedstate>;
      get(name: "opc_relevant"): Xrm.Attribute<any>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_opc_issue"): Xrm.LookupControl<"opc_issue">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_contestedbycomplainant"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_correctlyappliedexemption"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_datereleased"): Xrm.DateControl;
      get(name: "opc_description"): Xrm.StringControl;
      get(name: "opc_documenturl"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_rationale"): Xrm.StringControl;
      get(name: "opc_releasedstate"): Xrm.OptionSetControl<opc_releasedstate>;
      get(name: "opc_relevant"): Xrm.Control<Xrm.Attribute<any>>;
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
    getAttribute(attributeName: "opc_contestedbycomplainant"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_correctlyappliedexemption"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_datereleased"): Xrm.DateAttribute;
    getAttribute(attributeName: "opc_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_documenturl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_issue"): Xrm.LookupAttribute<"opc_issue">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_rationale"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_releasedstate"): Xrm.OptionSetAttribute<opc_releasedstate>;
    getAttribute(attributeName: "opc_relevant"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_opc_issue"): Xrm.LookupControl<"opc_issue">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_contestedbycomplainant"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_correctlyappliedexemption"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_datereleased"): Xrm.DateControl;
    getControl(controlName: "opc_description"): Xrm.StringControl;
    getControl(controlName: "opc_documenturl"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_rationale"): Xrm.StringControl;
    getControl(controlName: "opc_releasedstate"): Xrm.OptionSetControl<opc_releasedstate>;
    getControl(controlName: "opc_relevant"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: string): undefined;
  }
}
