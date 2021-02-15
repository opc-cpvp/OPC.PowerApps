declare namespace Form.opc_reminder.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_relatedrecord extends Xrm.SectionCollectionBase {
        get(name: "section_relatedrecord"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_notifybyemail"): Xrm.Attribute<any>;
      get(name: "opc_notifycaseowner"): Xrm.Attribute<any>;
      get(name: "opc_notifyme"): Xrm.Attribute<any>;
      get(name: "opc_reminderdate"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<opc_reminder_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opc_reminder_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "grid_additionalusers"): Xrm.BaseControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<opc_reminder_statecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<opc_reminder_statuscode>;
      get(name: "opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_notifybyemail"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_notifycaseowner"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_notifyme"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_reminderdate"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: "tab_relatedrecord"): Xrm.PageTab<Tabs.tab_relatedrecord>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_notifybyemail"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifycaseowner"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifyme"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_reminderdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<opc_reminder_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opc_reminder_statuscode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "grid_additionalusers"): Xrm.BaseControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<opc_reminder_statecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<opc_reminder_statuscode>;
    getControl(controlName: "opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_notifybyemail"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifycaseowner"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifyme"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_reminderdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
  }
}
