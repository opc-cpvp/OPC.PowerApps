declare namespace Form.systemuser.Main {
  namespace User {
    namespace Tabs {
      interface ADMINISTRATION_TAB extends Xrm.SectionCollectionBase {
        get(name: "administration"): Xrm.PageSection;
        get(name: "e-mail configuration"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "DirectReports"): Xrm.PageSection;
        get(name: "mailing address"): Xrm.PageSection;
        get(name: "user information_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface MobileOfflineProfile_TAB extends Xrm.SectionCollectionBase {
        get(name: "mobileofflineaccessinfo"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "online account information"): Xrm.PageSection;
        get(name: "onpremise account information"): Xrm.PageSection;
        get(name: "organization information"): Xrm.PageSection;
        get(name: "queue information"): Xrm.PageSection;
        get(name: "queue selection"): Xrm.PageSection;
        get(name: "teams information"): Xrm.PageSection;
        get(name: "user information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accessmode"): Xrm.OptionSetAttribute<systemuser_accessmode>;
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_fax"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "address1_telephone2"): Xrm.Attribute<string>;
      get(name: "address1_telephone3"): Xrm.Attribute<string>;
      get(name: "address2_city"): Xrm.Attribute<string> | null;
      get(name: "address2_composite"): Xrm.Attribute<string> | null;
      get(name: "address2_country"): Xrm.Attribute<string> | null;
      get(name: "address2_line1"): Xrm.Attribute<string> | null;
      get(name: "address2_line2"): Xrm.Attribute<string> | null;
      get(name: "address2_line3"): Xrm.Attribute<string> | null;
      get(name: "address2_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address2_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "businessunitid"): Xrm.LookupAttribute<"businessunit">;
      get(name: "caltype"): Xrm.OptionSetAttribute<systemuser_caltype>;
      get(name: "cdm_company"): Xrm.LookupAttribute<"cdm_company">;
      get(name: "defaultmailbox"): Xrm.LookupAttribute<"mailbox">;
      get(name: "domainname"): Xrm.Attribute<string>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "homephone"): Xrm.Attribute<string>;
      get(name: "internalemailaddress"): Xrm.Attribute<string>;
      get(name: "invitestatuscode"): Xrm.OptionSetAttribute<systemuser_invitestatuscode>;
      get(name: "isdisabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "mobilealertemail"): Xrm.Attribute<string>;
      get(name: "mobileofflineprofileid"): Xrm.LookupAttribute<"mobileofflineprofile">;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "parentsystemuserid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "personalemailaddress"): Xrm.Attribute<string>;
      get(name: "positionid"): Xrm.LookupAttribute<"position">;
      get(name: "preferredaddresscode"): Xrm.OptionSetAttribute<systemuser_preferredaddresscode>;
      get(name: "preferredphonecode"): Xrm.OptionSetAttribute<systemuser_preferredphonecode>;
      get(name: "queueid"): Xrm.LookupAttribute<"queue">;
      get(name: "siteid"): Xrm.LookupAttribute<"site">;
      get(name: "territoryid"): Xrm.LookupAttribute<"territory">;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "windowsliveid"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DirectReports"): Xrm.SubGridControl<"systemuser">;
      get(name: "PrivateQueuesSubGrid"): Xrm.SubGridControl<"queue">;
      get(name: "TeamsSubGrid"): Xrm.SubGridControl<"team">;
      get(name: "accessmode"): Xrm.OptionSetControl<systemuser_accessmode>;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_fax"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "address1_telephone2"): Xrm.StringControl;
      get(name: "address1_telephone3"): Xrm.StringControl;
      get(name: "address2_composite"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_city"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_country"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_line1"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_line2"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_line3"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_postalcode"): Xrm.StringControl | null;
      get(name: "address2_composite_compositionLinkControl_address2_stateorprovince"): Xrm.StringControl | null;
      get(name: "businessunitid"): Xrm.LookupControl<"businessunit">;
      get(name: "caltype"): Xrm.OptionSetControl<systemuser_caltype>;
      get(name: "cdm_company"): Xrm.LookupControl<"cdm_company">;
      get(name: "defaultmailbox"): Xrm.LookupControl<"mailbox">;
      get(name: "domainname"): Xrm.StringControl;
      get(name: "footer_isdisabled"): Xrm.OptionSetControl<boolean>;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "homephone"): Xrm.StringControl;
      get(name: "internalemailaddress"): Xrm.StringControl;
      get(name: "invitestatuscode"): Xrm.OptionSetControl<systemuser_invitestatuscode>;
      get(name: "mobilealertemail"): Xrm.StringControl;
      get(name: "mobileofflineprofileid"): Xrm.LookupControl<"mobileofflineprofile">;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "parentsystemuserid"): Xrm.LookupControl<"systemuser">;
      get(name: "personalemailaddress"): Xrm.StringControl;
      get(name: "positionid"): Xrm.LookupControl<"position">;
      get(name: "preferredaddresscode"): Xrm.OptionSetControl<systemuser_preferredaddresscode>;
      get(name: "preferredphonecode"): Xrm.OptionSetControl<systemuser_preferredphonecode>;
      get(name: "queueid"): Xrm.LookupControl<"queue">;
      get(name: "siteid"): Xrm.LookupControl<"site">;
      get(name: "territoryid"): Xrm.LookupControl<"territory">;
      get(name: "title"): Xrm.StringControl;
      get(name: "windowsliveid"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ADMINISTRATION_TAB"): Xrm.PageTab<Tabs.ADMINISTRATION_TAB>;
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "MobileOfflineProfile_TAB"): Xrm.PageTab<Tabs.MobileOfflineProfile_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface User extends Xrm.PageBase<User.Attributes,User.Tabs,User.Controls> {
    getAttribute(attributeName: "accessmode"): Xrm.OptionSetAttribute<systemuser_accessmode>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address2_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address2_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "businessunitid"): Xrm.LookupAttribute<"businessunit">;
    getAttribute(attributeName: "caltype"): Xrm.OptionSetAttribute<systemuser_caltype>;
    getAttribute(attributeName: "cdm_company"): Xrm.LookupAttribute<"cdm_company">;
    getAttribute(attributeName: "defaultmailbox"): Xrm.LookupAttribute<"mailbox">;
    getAttribute(attributeName: "domainname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "homephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "internalemailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "invitestatuscode"): Xrm.OptionSetAttribute<systemuser_invitestatuscode>;
    getAttribute(attributeName: "isdisabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "mobilealertemail"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobileofflineprofileid"): Xrm.LookupAttribute<"mobileofflineprofile">;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentsystemuserid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "personalemailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "positionid"): Xrm.LookupAttribute<"position">;
    getAttribute(attributeName: "preferredaddresscode"): Xrm.OptionSetAttribute<systemuser_preferredaddresscode>;
    getAttribute(attributeName: "preferredphonecode"): Xrm.OptionSetAttribute<systemuser_preferredphonecode>;
    getAttribute(attributeName: "queueid"): Xrm.LookupAttribute<"queue">;
    getAttribute(attributeName: "siteid"): Xrm.LookupAttribute<"site">;
    getAttribute(attributeName: "territoryid"): Xrm.LookupAttribute<"territory">;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "windowsliveid"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "DirectReports"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: "PrivateQueuesSubGrid"): Xrm.SubGridControl<"queue">;
    getControl(controlName: "TeamsSubGrid"): Xrm.SubGridControl<"team">;
    getControl(controlName: "accessmode"): Xrm.OptionSetControl<systemuser_accessmode>;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_fax"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "address1_telephone2"): Xrm.StringControl;
    getControl(controlName: "address1_telephone3"): Xrm.StringControl;
    getControl(controlName: "address2_composite"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_city"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_country"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_line1"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_line2"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_line3"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address2_composite_compositionLinkControl_address2_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "businessunitid"): Xrm.LookupControl<"businessunit">;
    getControl(controlName: "caltype"): Xrm.OptionSetControl<systemuser_caltype>;
    getControl(controlName: "cdm_company"): Xrm.LookupControl<"cdm_company">;
    getControl(controlName: "defaultmailbox"): Xrm.LookupControl<"mailbox">;
    getControl(controlName: "domainname"): Xrm.StringControl;
    getControl(controlName: "footer_isdisabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "homephone"): Xrm.StringControl;
    getControl(controlName: "internalemailaddress"): Xrm.StringControl;
    getControl(controlName: "invitestatuscode"): Xrm.OptionSetControl<systemuser_invitestatuscode>;
    getControl(controlName: "mobilealertemail"): Xrm.StringControl;
    getControl(controlName: "mobileofflineprofileid"): Xrm.LookupControl<"mobileofflineprofile">;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "parentsystemuserid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "personalemailaddress"): Xrm.StringControl;
    getControl(controlName: "positionid"): Xrm.LookupControl<"position">;
    getControl(controlName: "preferredaddresscode"): Xrm.OptionSetControl<systemuser_preferredaddresscode>;
    getControl(controlName: "preferredphonecode"): Xrm.OptionSetControl<systemuser_preferredphonecode>;
    getControl(controlName: "queueid"): Xrm.LookupControl<"queue">;
    getControl(controlName: "siteid"): Xrm.LookupControl<"site">;
    getControl(controlName: "territoryid"): Xrm.LookupControl<"territory">;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: "windowsliveid"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
