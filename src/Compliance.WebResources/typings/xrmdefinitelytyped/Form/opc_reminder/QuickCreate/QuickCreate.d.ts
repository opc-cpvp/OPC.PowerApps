declare namespace Form.opc_reminder.QuickCreate {
  namespace QuickCreate {
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
      get(name: "opc_additionalusers"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_notifybyemail"): Xrm.Attribute<any>;
      get(name: "opc_notifycaseowner"): Xrm.Attribute<any>;
      get(name: "opc_notifyme"): Xrm.Attribute<any>;
      get(name: "opc_reminderdate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_additionalusers"): Xrm.Control<Xrm.Attribute<any>>;
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
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_additionalusers"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_notifybyemail"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifycaseowner"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifyme"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_reminderdate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_additionalusers"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_notifybyemail"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifycaseowner"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifyme"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_reminderdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
  }
}
