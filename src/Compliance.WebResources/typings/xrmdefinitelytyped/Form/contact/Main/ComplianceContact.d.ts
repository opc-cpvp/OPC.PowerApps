declare namespace Form.contact.Main {
  namespace ComplianceContact {
    namespace Tabs {
      interface tab_complaints extends Xrm.SectionCollectionBase {
        get(name: "section_complaints"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_summary extends Xrm.SectionCollectionBase {
        get(name: "section_Timeline"): Xrm.PageSection;
        get(name: "section_address"): Xrm.PageSection;
        get(name: "section_contact_information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "opc_duplicatedetectionresult"): Xrm.OptionSetAttribute<opc_duplicatedetectionresult>;
      get(name: "opc_multiplecomplaintstrategy"): Xrm.OptionSetAttribute<opc_multiplecomplaintstrategy>;
      get(name: "opc_preferredlanguage"): Xrm.OptionSetAttribute<opc_preferredlanguage>;
      get(name: "opc_requireprivilegedcorrespondence"): Xrm.Attribute<any>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_opc_duplicatedetectionresult"): Xrm.OptionSetControl<opc_duplicatedetectionresult>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opc_multiplecomplaintstrategy"): Xrm.OptionSetControl<opc_multiplecomplaintstrategy>;
      get(name: "opc_preferredlanguage"): Xrm.OptionSetControl<opc_preferredlanguage>;
      get(name: "opc_requireprivilegedcorrespondence"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "subgrid_complaints"): Xrm.SubGridControl<"opc_complaint">;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_complaints"): Xrm.PageTab<Tabs.tab_complaints>;
      get(name: "tab_summary"): Xrm.PageTab<Tabs.tab_summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ComplianceContact extends Xrm.PageBase<ComplianceContact.Attributes,ComplianceContact.Tabs,ComplianceContact.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "opc_duplicatedetectionresult"): Xrm.OptionSetAttribute<opc_duplicatedetectionresult>;
    getAttribute(attributeName: "opc_multiplecomplaintstrategy"): Xrm.OptionSetAttribute<opc_multiplecomplaintstrategy>;
    getAttribute(attributeName: "opc_preferredlanguage"): Xrm.OptionSetAttribute<opc_preferredlanguage>;
    getAttribute(attributeName: "opc_requireprivilegedcorrespondence"): Xrm.Attribute<any>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_opc_duplicatedetectionresult"): Xrm.OptionSetControl<opc_duplicatedetectionresult>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opc_multiplecomplaintstrategy"): Xrm.OptionSetControl<opc_multiplecomplaintstrategy>;
    getControl(controlName: "opc_preferredlanguage"): Xrm.OptionSetControl<opc_preferredlanguage>;
    getControl(controlName: "opc_requireprivilegedcorrespondence"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "subgrid_complaints"): Xrm.SubGridControl<"opc_complaint">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
