declare namespace Form.duplicaterule.Main {
  namespace Information {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "section 1_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface rule extends Xrm.SectionCollectionBase {
        get(name: "Rule Conditions"): Xrm.PageSection;
        get(name: "criteria"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "section 1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "baseentitytypecode"): Xrm.OptionSetAttribute<duplicaterule_baseentitytypecode>;
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "excludeinactiverecords"): Xrm.OptionSetAttribute<boolean>;
      get(name: "iscasesensitive"): Xrm.OptionSetAttribute<boolean>;
      get(name: "matchingentitytypecode"): Xrm.OptionSetAttribute<duplicaterule_matchingentitytypecode>;
      get(name: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<duplicaterule_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "baseentitytypecode"): Xrm.OptionSetControl<duplicaterule_baseentitytypecode>;
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "excludeinactiverecords"): Xrm.OptionSetControl<boolean>;
      get(name: "iscasesensitive"): Xrm.OptionSetControl<boolean>;
      get(name: "matchingentitytypecode"): Xrm.OptionSetControl<duplicaterule_matchingentitytypecode>;
      get(name: "modifiedby"): Xrm.LookupControl<"systemuser">;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ruleconditioncontrol"): Xrm.IFrameControl;
      get(name: "statuscode"): Xrm.OptionSetControl<duplicaterule_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: "rule"): Xrm.PageTab<Tabs.rule>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "baseentitytypecode"): Xrm.OptionSetAttribute<duplicaterule_baseentitytypecode>;
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "excludeinactiverecords"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "iscasesensitive"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "matchingentitytypecode"): Xrm.OptionSetAttribute<duplicaterule_matchingentitytypecode>;
    getAttribute(attributeName: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<duplicaterule_statuscode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "baseentitytypecode"): Xrm.OptionSetControl<duplicaterule_baseentitytypecode>;
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "excludeinactiverecords"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "iscasesensitive"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "matchingentitytypecode"): Xrm.OptionSetControl<duplicaterule_matchingentitytypecode>;
    getControl(controlName: "modifiedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ruleconditioncontrol"): Xrm.IFrameControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<duplicaterule_statuscode>;
    getControl(controlName: string): undefined;
  }
}
