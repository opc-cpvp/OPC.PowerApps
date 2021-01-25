declare namespace Form.queueitem.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "enteredon"): Xrm.DateAttribute;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "queueid"): Xrm.LookupAttribute<"queue">;
      get(name: "statecode"): Xrm.OptionSetAttribute<queueitem_statecode>;
      get(name: "workerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "enteredon"): Xrm.DateControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<queueitem_statecode>;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "queueid"): Xrm.LookupControl<"queue">;
      get(name: "workerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "enteredon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "queueid"): Xrm.LookupAttribute<"queue">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<queueitem_statecode>;
    getAttribute(attributeName: "workerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "enteredon"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<queueitem_statecode>;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "queueid"): Xrm.LookupControl<"queue">;
    getControl(controlName: "workerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
