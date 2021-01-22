declare namespace Form.sharepointsite.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "section 1"): Xrm.PageSection;
        get(name: "url option"): Xrm.PageSection;
        get(name: "url validation"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "absoluteurl"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "isgridpresent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ispowerbisite"): Xrm.OptionSetAttribute<boolean>;
      get(name: "lastvalidated"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentsite"): Xrm.LookupAttribute<"sharepointsite">;
      get(name: "relativeurl"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<sharepointsite_statecode>;
      get(name: "validationstatus"): Xrm.OptionSetAttribute<sharepoint_validationstatus>;
      get(name: "validationstatuserrorcode"): Xrm.OptionSetAttribute<sharepoint_validationstatusreason>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "absoluteurl"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<sharepointsite_statecode>;
      get(name: "isgridpresent"): Xrm.OptionSetControl<boolean>;
      get(name: "ispowerbisite"): Xrm.OptionSetControl<boolean>;
      get(name: "lastvalidated"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentsite"): Xrm.LookupControl<"sharepointsite">;
      get(name: "relativeurl"): Xrm.StringControl;
      get(name: "urloption"): Xrm.OptionSetControl<number>;
      get(name: "validationstatus"): Xrm.OptionSetControl<sharepoint_validationstatus>;
      get(name: "validationstatuserrorcode"): Xrm.OptionSetControl<sharepoint_validationstatusreason>;
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
    getAttribute(attributeName: "absoluteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "isgridpresent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ispowerbisite"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "lastvalidated"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentsite"): Xrm.LookupAttribute<"sharepointsite">;
    getAttribute(attributeName: "relativeurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<sharepointsite_statecode>;
    getAttribute(attributeName: "validationstatus"): Xrm.OptionSetAttribute<sharepoint_validationstatus>;
    getAttribute(attributeName: "validationstatuserrorcode"): Xrm.OptionSetAttribute<sharepoint_validationstatusreason>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "absoluteurl"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<sharepointsite_statecode>;
    getControl(controlName: "isgridpresent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ispowerbisite"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "lastvalidated"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentsite"): Xrm.LookupControl<"sharepointsite">;
    getControl(controlName: "relativeurl"): Xrm.StringControl;
    getControl(controlName: "urloption"): Xrm.OptionSetControl<number>;
    getControl(controlName: "validationstatus"): Xrm.OptionSetControl<sharepoint_validationstatus>;
    getControl(controlName: "validationstatuserrorcode"): Xrm.OptionSetControl<sharepoint_validationstatusreason>;
    getControl(controlName: string): undefined;
  }
}
