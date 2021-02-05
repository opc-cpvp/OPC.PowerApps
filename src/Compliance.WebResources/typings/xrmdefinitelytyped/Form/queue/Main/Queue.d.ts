declare namespace Form.queue.Main {
  namespace Queue {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "QueueItems"): Xrm.PageSection;
        get(name: "QueueMembers"): Xrm.PageSection;
        get(name: "QueueMembersNoRecord"): Xrm.PageSection;
        get(name: "RecordCreationAndUpdateRule"): Xrm.PageSection;
        get(name: "incoming email"): Xrm.PageSection;
        get(name: "queue information"): Xrm.PageSection;
        get(name: "section_teammembership"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "defaultmailbox"): Xrm.LookupAttribute<"mailbox">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress"): Xrm.Attribute<string>;
      get(name: "incomingemailfilteringmethod"): Xrm.OptionSetAttribute<queue_incomingemailfilteringmethod>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "queueviewtype"): Xrm.OptionSetAttribute<queue_queueviewtype>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "QueueItemsGrid"): Xrm.SubGridControl<"queueitem">;
      get(name: "RecordCreationAndUpdateRuleGrid"): Xrm.SubGridControl<"convertrule">;
      get(name: "defaultmailbox"): Xrm.LookupControl<"mailbox">;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress"): Xrm.StringControl;
      get(name: "incomingemailfilteringmethod"): Xrm.OptionSetControl<queue_incomingemailfilteringmethod>;
      get(name: "name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "queuemembersgrid"): Xrm.SubGridControl<"systemuser">;
      get(name: "queueviewtype"): Xrm.OptionSetControl<queue_queueviewtype>;
      get(name: "subgrid_teams"): Xrm.SubGridControl<"team">;
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
  interface Queue extends Xrm.PageBase<Queue.Attributes,Queue.Tabs,Queue.Controls> {
    getAttribute(attributeName: "defaultmailbox"): Xrm.LookupAttribute<"mailbox">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "incomingemailfilteringmethod"): Xrm.OptionSetAttribute<queue_incomingemailfilteringmethod>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "queueviewtype"): Xrm.OptionSetAttribute<queue_queueviewtype>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "QueueItemsGrid"): Xrm.SubGridControl<"queueitem">;
    getControl(controlName: "RecordCreationAndUpdateRuleGrid"): Xrm.SubGridControl<"convertrule">;
    getControl(controlName: "defaultmailbox"): Xrm.LookupControl<"mailbox">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress"): Xrm.StringControl;
    getControl(controlName: "incomingemailfilteringmethod"): Xrm.OptionSetControl<queue_incomingemailfilteringmethod>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "queuemembersgrid"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: "queueviewtype"): Xrm.OptionSetControl<queue_queueviewtype>;
    getControl(controlName: "subgrid_teams"): Xrm.SubGridControl<"team">;
    getControl(controlName: string): undefined;
  }
}
