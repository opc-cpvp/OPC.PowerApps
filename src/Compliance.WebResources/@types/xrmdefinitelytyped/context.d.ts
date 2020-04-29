declare const enum account_address1_addresstypecode {
  BillTo = 1,
  ShipTo = 2,
  Primary = 3,
  Other = 4,
}
declare const enum account_address1_shippingmethodcode {
  Airborne = 1,
  DHL = 2,
  FedEx = 3,
  UPS = 4,
  PostalMail = 5,
  FullLoad = 6,
  WillCall = 7,
}
declare const enum account_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum account_address1_freighttermscode {
  FOB = 1,
  NoCharge = 2,
}
declare const enum account_accountratingcode {
  DefaultValue = 1,
}
declare const enum account_preferredappointmenttimecode {
  Morning = 1,
  Afternoon = 2,
  Evening = 3,
}
declare const enum account_accountclassificationcode {
  DefaultValue = 1,
}
declare const enum account_customertypecode {
  Competitor = 1,
  Consultant = 2,
  Customer = 3,
  Investor = 4,
  Partner = 5,
  Influencer = 6,
  Press = 7,
  Prospect = 8,
  Reseller = 9,
  Supplier = 10,
  Vendor = 11,
  Other = 12,
}
declare const enum account_preferredcontactmethodcode {
  Any = 1,
  Email = 2,
  Phone = 3,
  Fax = 4,
  Mail = 5,
}
declare const enum account_ownershipcode {
  Public = 1,
  Private = 2,
  Subsidiary = 3,
  Other = 4,
}
declare const enum account_address2_addresstypecode {
  DefaultValue = 1,
}
declare const enum account_businesstypecode {
  DefaultValue = 1,
}
declare const enum account_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum account_paymenttermscode {
  Net30 = 1,
  _210Net30 = 2,
  Net45 = 3,
  Net60 = 4,
}
declare const enum account_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum account_customersizecode {
  DefaultValue = 1,
}
declare const enum account_accountcategorycode {
  PreferredCustomer = 1,
  Standard = 2,
}
declare const enum account_industrycode {
  Accounting = 1,
  AgricultureandNonpetrolNaturalResourceExtraction = 2,
  BroadcastingPrintingandPublishing = 3,
  Brokers = 4,
  BuildingSupplyRetail = 5,
  BusinessServices = 6,
  Consulting = 7,
  ConsumerServices = 8,
  DesignDirectionandCreativeManagement = 9,
  DistributorsDispatchersandProcessors = 10,
  DoctorsOfficesandClinics = 11,
  DurableManufacturing = 12,
  EatingandDrinkingPlaces = 13,
  EntertainmentRetail = 14,
  EquipmentRentalandLeasing = 15,
  Financial = 16,
  FoodandTobaccoProcessing = 17,
  InboundCapitalIntensiveProcessing = 18,
  InboundRepairandServices = 19,
  Insurance = 20,
  LegalServices = 21,
  NonDurableMerchandiseRetail = 22,
  OutboundConsumerService = 23,
  PetrochemicalExtractionandDistribution = 24,
  ServiceRetail = 25,
  SIGAffiliations = 26,
  SocialServices = 27,
  SpecialOutboundTradeContractors = 28,
  SpecialtyRealty = 29,
  Transportation = 30,
  UtilityCreationandDistribution = 31,
  VehicleRetail = 32,
  Wholesale = 33,
}
declare const enum account_preferredappointmentdaycode {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
declare const enum account_address2_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum account_address2_freighttermscode {
  DefaultValue = 1,
}
declare const enum account_territorycode {
  DefaultValue = 1,
}
declare const enum contact_address3_addresstypecode {
  DefaultValue = 1,
}
declare const enum contact_address1_addresstypecode {
  BillTo = 1,
  ShipTo = 2,
  Primary = 3,
  Other = 4,
}
declare const enum contact_address1_shippingmethodcode {
  Airborne = 1,
  DHL = 2,
  FedEx = 3,
  UPS = 4,
  PostalMail = 5,
  FullLoad = 6,
  WillCall = 7,
}
declare const enum contact_paymenttermscode {
  Net30 = 1,
  _210Net30 = 2,
  Net45 = 3,
  Net60 = 4,
}
declare const enum contact_gendercode {
  Male = 1,
  Female = 2,
}
declare const enum opc_duplicatedetectionresult {
  None = 924340000,
  Potentialduplicate = 924340001,
  Duplicatefound = 924340002,
}
declare const enum contact_preferredappointmenttimecode {
  Morning = 1,
  Afternoon = 2,
  Evening = 3,
}
declare const enum contact_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum contact_address1_freighttermscode {
  FOB = 1,
  NoCharge = 2,
}
declare const enum contact_address3_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum contact_customertypecode {
  DefaultValue = 1,
}
declare const enum contact_educationcode {
  DefaultValue = 1,
}
declare const enum contact_preferredcontactmethodcode {
  Any = 1,
  Email = 2,
  Phone = 3,
  Fax = 4,
  Mail = 5,
}
declare const enum contact_accountrolecode {
  DecisionMaker = 1,
  Employee = 2,
  Influencer = 3,
}
declare const enum contact_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum contact_address3_freighttermscode {
  DefaultValue = 1,
}
declare const enum opc_multiplecomplaintstrategy {
  NotApplied = 924340000,
  Proposed = 924340001,
  Applied = 924340002,
  Former = 924340003,
}
declare const enum contact_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum contact_address2_addresstypecode {
  DefaultValue = 1,
}
declare const enum contact_customersizecode {
  DefaultValue = 1,
}
declare const enum contact_preferredappointmentdaycode {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
declare const enum contact_haschildrencode {
  DefaultValue = 1,
}
declare const enum contact_familystatuscode {
  Single = 1,
  Married = 2,
  Divorced = 3,
  Widowed = 4,
}
declare const enum contact_address2_shippingmethodcode {
  DefaultValue = 1,
}
declare const enum contact_leadsourcecode {
  DefaultValue = 1,
}
declare const enum contact_address2_freighttermscode {
  DefaultValue = 1,
}
declare const enum contact_territorycode {
  DefaultValue = 1,
}
declare const enum opc_allegation_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_allegationdisposition {
  Acceptable = 924340000,
  Unacceptable = 924340001,
  Withdrawn = 924340002,
  Resolved = 924340003,
}
declare const enum opc_allegation_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_allegationtype_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_allegationtype_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_checklistresponse_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_checklistresponse_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_checklisttype_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_complaintstage {
  Intake = 924340000,
}
declare const enum opc_checklisttype_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_nextstep {
  Transfertoinvestigations = 924340000,
  Resolved = 924340001,
  Withdrawn = 924340002,
  Settled = 924340003,
  Discontinued = 924340004,
}
declare const enum opc_complaintmilestone {
  Triage = 924340000,
  Intake = 924340001,
  EarlyResolution = 924340002,
  Investigation = 924340003,
}
declare const enum opc_complaint_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_complaintdisposition {
  Discontinued = 924340000,
  Investigationcompleted = 924340001,
  Nojurisidiction = 924340002,
  Resolvedatearlyresolution = 924340003,
  Resolvedatintake = 924340004,
  Settled = 924340005,
  Unresponsiveinquirer = 924340006,
  Withdrawn = 924340007,
}
declare const enum opc_closereason {
  Redirection = 924340000,
  Duplicate = 924340001,
  Withdrawn = 924340002,
  Resolved = 924340003,
  Createdinerror = 924340004,
}
declare const enum opc_yesorno {
  Yes = 924340000,
  No = 924340001,
}
declare const enum opc_intakedisposition {
  MovetoEarlyResolution = 924340000,
  MovetoInvestigation = 924340001,
  Declinetoinvestigate = 924340002,
  Close = 924340003,
}
declare const enum opc_complaint_statuscode {
  Declined = 924340001,
  Duplicate = 924340002,
  Withdrawn = 924340003,
  Resolved = 924340004,
  Settled = 924340005,
  Redirected = 924340006,
  Investigationcompleted = 924340007,
  New = 924340010,
  Initialassessment = 924340011,
  Underearlyresolution = 924340012,
  Underinvestigation = 924340013,
  Investigationdiscontinued = 924340014,
  Createdinerror = 924340015,
}
declare const enum opc_dispositionaction_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_dispositionaction_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_dispositionreason_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_dispositionreason_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_individualcomplaint_bp_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum processstage_category {
  Qualify = 0,
  Develop = 1,
  Propose = 2,
  Close = 3,
  Identify = 4,
  Research = 5,
  Resolve = 6,
  Approval = 7,
  Triage = 924340000,
  Intake = 924340001,
  Acceptance = 924340002,
  EarlyResoloution = 924340003,
  Investigation = 924340004,
}
declare const enum opc_individualcomplaint_bp_statuscode {
  Active = 1,
  Finished = 2,
  Aborted = 3,
}
declare const enum opc_issue_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_issue_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_legislation_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_legislation_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_notification_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_notification_statuscode {
  Unread = 1,
  Inactive = 2,
  Read = 924340000,
}
declare const enum opc_opcpriority_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_opcpriority_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_questiontemplate_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_questiontemplate_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_questiontype_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_questiontype_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_recommendation_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_recommendation_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_reminder_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_reminder_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskappetite_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskappetite_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessment_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessment_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessmentcategory_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessmentcategory_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessmentcategorytemplate_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessmentcategorytemplate_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessmentdefinition_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessmentdefinition_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessmentdefinitiontemplate_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessmentdefinitiontemplate_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessmentfactortemplate_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessmentfactortemplate_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_riskassessmenttype_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_riskassessmenttype_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_sector_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_sector_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_theme_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_theme_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum opc_topic_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum opc_topic_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum queueitem_statecode {
  Active = 0,
  Inactive = 1,
}
declare const enum queueitem_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum queueitem_objecttypecode {
  Activity = 4200,
  Appointment = 4201,
  Email = 4202,
  Fax = 4204,
  Letter = 4207,
  PhoneCall = 4210,
  Task = 4212,
  SocialActivity = 4216,
  RecurringAppointment = 4251,
  KnowledgeArticle = 9953,
  KnowledgeArticleTemplate = 10007,
  Complaint = 11149,
}
declare const enum activityparty_participationtypemask {
  Sender = 1,
  ToRecipient = 2,
  CCRecipient = 3,
  BCCRecipient = 4,
  Requiredattendee = 5,
  Optionalattendee = 6,
  Organizer = 7,
  Regarding = 8,
  Owner = 9,
  Resource = 10,
  Customer = 11,
}
declare const enum activityparty_instancetypecode {
  NotRecurring = 0,
  RecurringMaster = 1,
  RecurringInstance = 2,
  RecurringException = 3,
  RecurringFutureException = 4,
}
declare const enum connection_statuscode {
  Active = 1,
  Inactive = 2,
}
declare const enum connection_record1objecttypecode {
  Account = 1,
  Contact = 2,
  User = 8,
  Team = 9,
  Position = 50,
  SocialProfile = 99,
  Territory = 2013,
  Activity = 4200,
  Appointment = 4201,
  Email = 4202,
  Fax = 4204,
  Letter = 4207,
  PhoneCall = 4210,
  Task = 4212,
  SocialActivity = 4216,
  RecurringAppointment = 4251,
  ProcessSession = 4710,
  ChannelAccessProfileRule = 9400,
  Goal = 9600,
  KnowledgeBaseRecord = 9930,
  KnowledgeArticle = 9953,
}
declare const enum connection_record2objecttypecode {
  Account = 1,
  Contact = 2,
  User = 8,
  Team = 9,
  Position = 50,
  SocialProfile = 99,
  Territory = 2013,
  Activity = 4200,
  Appointment = 4201,
  Email = 4202,
  Fax = 4204,
  Letter = 4207,
  PhoneCall = 4210,
  Task = 4212,
  SocialActivity = 4216,
  RecurringAppointment = 4251,
  ProcessSession = 4710,
  ChannelAccessProfileRule = 9400,
  Goal = 9600,
  KnowledgeBaseRecord = 9930,
  KnowledgeArticle = 9953,
}
declare const enum connection_statecode {
  Active = 0,
  Inactive = 1,
}
declare namespace Form.account.Quick {
  namespace AccountHierarchyTileForm {
    namespace Tabs {
      interface hierarchy extends Xrm.SectionCollectionBase {
        get(name: "account tile"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "hierarchy"): Xrm.PageTab<Tabs.hierarchy>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountHierarchyTileForm extends Xrm.PageBase<AccountHierarchyTileForm.Attributes,AccountHierarchyTileForm.Tabs,AccountHierarchyTileForm.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Quick {
  namespace SocialProfiles {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "SOCIALPROFILES"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "subgrid_spaccount"): Xrm.SubGridControl<"socialprofile">;
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
  interface SocialProfiles extends Xrm.PageBase<SocialProfiles.Attributes,SocialProfiles.Tabs,SocialProfiles.Controls> {
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "subgrid_spaccount"): Xrm.SubGridControl<"socialprofile">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Main {
  namespace ComplianceAccount {
    namespace Tabs {
      interface tab_details extends Xrm.SectionCollectionBase {
        get(name: "section_billing"): Xrm.PageSection;
        get(name: "section_child_accounts"): Xrm.PageSection;
        get(name: "section_company_profile"): Xrm.PageSection;
        get(name: "section_contact_preferences"): Xrm.PageSection;
        get(name: "section_description"): Xrm.PageSection;
        get(name: "section_shipping"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_summary extends Xrm.SectionCollectionBase {
        get(name: "section_account_information"): Xrm.PageSection;
        get(name: "section_address"): Xrm.PageSection;
        get(name: "section_contacts"): Xrm.PageSection;
        get(name: "section_map"): Xrm.PageSection;
        get(name: "section_timeline"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "tickersymbol"): Xrm.Attribute<any>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ChildAccounts"): Xrm.SubGridControl<"account">;
      get(name: "Contacts"): Xrm.SubGridControl<"contact">;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "tickersymbol"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_details"): Xrm.PageTab<Tabs.tab_details>;
      get(name: "tab_summary"): Xrm.PageTab<Tabs.tab_summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ComplianceAccount extends Xrm.PageBase<ComplianceAccount.Attributes,ComplianceAccount.Tabs,ComplianceAccount.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tickersymbol"): Xrm.Attribute<any>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ChildAccounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "Contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "tickersymbol"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Quick {
  namespace AccountReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "numberofemployees"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "revenue"): Xrm.NumberControl;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface AccountReferencePanel extends Xrm.PageBase<AccountReferencePanel.Attributes,AccountReferencePanel.Tabs,AccountReferencePanel.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "revenue"): Xrm.NumberControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Main {
  namespace AccountforInteractiveexperience {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: "ref_pan_SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.Attribute<any>;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Contacts"): Xrm.BaseControl;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountforInteractiveexperience extends Xrm.PageBase<AccountforInteractiveexperience.Attributes,AccountforInteractiveexperience.Tabs,AccountforInteractiveexperience.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.Attribute<any>;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Contacts"): Xrm.BaseControl;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Quick {
  namespace accountcard {
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
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface accountcard extends Xrm.PageBase<accountcard.Attributes,accountcard.Tabs,accountcard.Controls> {
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Main {
  namespace Information {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "contact methods"): Xrm.PageSection;
        get(name: "internal information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface contacts extends Xrm.SectionCollectionBase {
        get(name: "contacts"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details extends Xrm.SectionCollectionBase {
        get(name: "billing information"): Xrm.PageSection;
        get(name: "description_2"): Xrm.PageSection;
        get(name: "professional information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "account information"): Xrm.PageSection;
        get(name: "address"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notesandactivities extends Xrm.SectionCollectionBase {
        get(name: "activities"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accountcategorycode"): Xrm.OptionSetAttribute<account_accountcategorycode>;
      get(name: "accountnumber"): Xrm.Attribute<string>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetAttribute<account_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_name"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "customertypecode"): Xrm.OptionSetAttribute<account_customertypecode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "tickersymbol"): Xrm.Attribute<any>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "accountContactsGrid"): Xrm.SubGridControl<"contact">;
      get(name: "accountactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
      get(name: "accountcategorycode"): Xrm.OptionSetControl<account_accountcategorycode>;
      get(name: "accountnumber"): Xrm.StringControl;
      get(name: "address1_addresstypecode"): Xrm.OptionSetControl<account_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_name"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "customertypecode"): Xrm.OptionSetControl<account_customertypecode>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_creditlimit"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "header_primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "numberofemployees"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "revenue"): Xrm.NumberControl;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: "tickersymbol"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "contacts"): Xrm.PageTab<Tabs.contacts>;
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes and activities"): Xrm.PageTab<Tabs.notesandactivities>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "accountcategorycode"): Xrm.OptionSetAttribute<account_accountcategorycode>;
    getAttribute(attributeName: "accountnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_addresstypecode"): Xrm.OptionSetAttribute<account_address1_addresstypecode>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "customertypecode"): Xrm.OptionSetAttribute<account_customertypecode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tickersymbol"): Xrm.Attribute<any>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "accountContactsGrid"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "accountactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "accountcategorycode"): Xrm.OptionSetControl<account_accountcategorycode>;
    getControl(controlName: "accountnumber"): Xrm.StringControl;
    getControl(controlName: "address1_addresstypecode"): Xrm.OptionSetControl<account_address1_addresstypecode>;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_name"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "customertypecode"): Xrm.OptionSetControl<account_customertypecode>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_creditlimit"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "header_primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "revenue"): Xrm.NumberControl;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: "tickersymbol"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.QuickCreate {
  namespace AccountQuickCreate {
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
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "numberofemployees"): Xrm.NumberControl;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "revenue"): Xrm.NumberControl;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface AccountQuickCreate extends Xrm.PageBase<AccountQuickCreate.Attributes,AccountQuickCreate.Tabs,AccountQuickCreate.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "revenue"): Xrm.NumberControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.account.Main {
  namespace Account {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "ChildAccounts"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "ADDRESS"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_6"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "tickersymbol"): Xrm.Attribute<any>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "ChildAccounts"): Xrm.SubGridControl<"account">;
      get(name: "Contacts"): Xrm.SubGridControl<"contact">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "tickersymbol"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Account extends Xrm.PageBase<Account.Attributes,Account.Tabs,Account.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tickersymbol"): Xrm.Attribute<any>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "ChildAccounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "Contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "tickersymbol"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Main {
  namespace Information {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "billing information"): Xrm.PageSection;
        get(name: "contact methods"): Xrm.PageSection;
        get(name: "internal information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details extends Xrm.SectionCollectionBase {
        get(name: "personal information"): Xrm.PageSection;
        get(name: "professional information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "address"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "name"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notesandactivities extends Xrm.SectionCollectionBase {
        get(name: "activities"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_name"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "assistantname"): Xrm.Attribute<string>;
      get(name: "assistantphone"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "department"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "managername"): Xrm.Attribute<string>;
      get(name: "managerphone"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "salutation"): Xrm.Attribute<string>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_name"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "assistantname"): Xrm.StringControl;
      get(name: "assistantphone"): Xrm.StringControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "department"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_emailaddress1"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
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
      get(name: "lastname"): Xrm.StringControl;
      get(name: "managername"): Xrm.StringControl;
      get(name: "managerphone"): Xrm.StringControl;
      get(name: "middlename"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "salutation"): Xrm.StringControl;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes and activities"): Xrm.PageTab<Tabs.notesandactivities>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
    getAttribute(attributeName: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "assistantname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "assistantphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "department"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managerphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "salutation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
    getControl(controlName: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_name"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "assistantname"): Xrm.StringControl;
    getControl(controlName: "assistantphone"): Xrm.StringControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "department"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
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
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "managername"): Xrm.StringControl;
    getControl(controlName: "managerphone"): Xrm.StringControl;
    getControl(controlName: "middlename"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "salutation"): Xrm.StringControl;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace ContactReferencePanel {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
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
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface ContactReferencePanel extends Xrm.PageBase<ContactReferencePanel.Attributes,ContactReferencePanel.Tabs,ContactReferencePanel.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
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
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Main {
  namespace ComplianceContact {
    namespace Tabs {
      interface tab_details extends Xrm.SectionCollectionBase {
        get(name: "section_billing"): Xrm.PageSection;
        get(name: "section_contact_preferences"): Xrm.PageSection;
        get(name: "section_personal"): Xrm.PageSection;
        get(name: "section_personal_notes"): Xrm.PageSection;
        get(name: "section_shipping"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_summary extends Xrm.SectionCollectionBase {
        get(name: "section_Timeline"): Xrm.PageSection;
        get(name: "section_address"): Xrm.PageSection;
        get(name: "section_contact_information"): Xrm.PageSection;
        get(name: "section_map"): Xrm.PageSection;
        get(name: "tab_summary_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "opc_duplicatedetectionresult"): Xrm.OptionSetAttribute<opc_duplicatedetectionresult>;
      get(name: "opc_multiplecomplaintstrategy"): Xrm.OptionSetAttribute<opc_multiplecomplaintstrategy>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
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
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opc_multiplecomplaintstrategy"): Xrm.OptionSetControl<opc_multiplecomplaintstrategy>;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_details"): Xrm.PageTab<Tabs.tab_details>;
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
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "opc_duplicatedetectionresult"): Xrm.OptionSetAttribute<opc_duplicatedetectionresult>;
    getAttribute(attributeName: "opc_multiplecomplaintstrategy"): Xrm.OptionSetAttribute<opc_multiplecomplaintstrategy>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
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
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opc_multiplecomplaintstrategy"): Xrm.OptionSetControl<opc_multiplecomplaintstrategy>;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace LivePersonaCardForm {
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
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
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
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "statecode"): Xrm.OptionSetControl<contact_statecode>;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface LivePersonaCardForm extends Xrm.PageBase<LivePersonaCardForm.Attributes,LivePersonaCardForm.Tabs,LivePersonaCardForm.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<contact_statecode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
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
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<contact_statecode>;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace SocialProfiles {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "SOCIALPROFILES"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
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
      get(name: "subgrid_spcontact"): Xrm.SubGridControl<"socialprofile">;
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
  interface SocialProfiles extends Xrm.PageBase<SocialProfiles.Attributes,SocialProfiles.Tabs,SocialProfiles.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
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
    getControl(controlName: "subgrid_spcontact"): Xrm.SubGridControl<"socialprofile">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.QuickCreate {
  namespace ContactQuickCreate {
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
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
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
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface ContactQuickCreate extends Xrm.PageBase<ContactQuickCreate.Attributes,ContactQuickCreate.Tabs,ContactQuickCreate.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
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
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace RecentCasesandEntitlements {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
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
  interface RecentCasesandEntitlements extends Xrm.PageBase<RecentCasesandEntitlements.Attributes,RecentCasesandEntitlements.Tabs,RecentCasesandEntitlements.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
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
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.TaskFlowForm {
  namespace UpdateContact {
    namespace Tabs {
      interface step_2 extends Xrm.SectionCollectionBase {
        get(name: "step_2_section1"): Xrm.PageSection;
        get(name: "step_2_section2"): Xrm.PageSection;
        get(name: "step_2_section2_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface step_25 extends Xrm.SectionCollectionBase {
        get(name: "step_25_section1"): Xrm.PageSection;
        get(name: "step_25_section1_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Attribute<any>;
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Attribute<any>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Attribute<any>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"accounts">;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "contact_customer_accounts:industrycode"): Xrm.OptionSetControl<number>;
      get(name: "contact_customer_accounts:name"): Xrm.StringControl;
      get(name: "contact_customer_accounts:parentaccountid"): Xrm.LookupControl<"accounts">;
      get(name: "contact_customer_accounts:telephone1"): Xrm.StringControl;
      get(name: "contact_customer_accounts:websiteurl"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "firstname"): Xrm.StringControl;
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
      get(name: "lastname"): Xrm.StringControl;
      get(name: "middlename"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "step_2"): Xrm.PageTab<Tabs.step_2>;
      get(name: "step_25"): Xrm.PageTab<Tabs.step_25>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface UpdateContact extends Xrm.PageBase<UpdateContact.Attributes,UpdateContact.Tabs,UpdateContact.Controls> {
    getAttribute(attributeName: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Attribute<any>;
    getAttribute(attributeName: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"accounts">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "043dc848-5c9b-b5c1-9417-c4c55740395d_back"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "043dc848-5c9b-b5c1-9417-c4c55740395d_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "c610debb-05fc-462e-9ec5-8ed646b3e585_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "contact_customer_accounts:industrycode"): Xrm.OptionSetControl<number>;
    getControl(controlName: "contact_customer_accounts:name"): Xrm.StringControl;
    getControl(controlName: "contact_customer_accounts:parentaccountid"): Xrm.LookupControl<"accounts">;
    getControl(controlName: "contact_customer_accounts:telephone1"): Xrm.StringControl;
    getControl(controlName: "contact_customer_accounts:websiteurl"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "firstname"): Xrm.StringControl;
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
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "middlename"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace ContactQuickForm {
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
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
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
      get(name: "lastname"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
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
  interface ContactQuickForm extends Xrm.PageBase<ContactQuickForm.Attributes,ContactQuickForm.Tabs,ContactQuickForm.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
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
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace accountcontactcard {
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
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
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
      get(name: "telephone1"): Xrm.StringControl;
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
  interface accountcontactcard extends Xrm.PageBase<accountcontactcard.Attributes,accountcontactcard.Tabs,accountcontactcard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
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
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Quick {
  namespace contactcard {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Cases"): Xrm.PageSection;
        get(name: "Entitlements"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "fullname"): Xrm.StringControl | null;
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
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "telephone1"): Xrm.StringControl;
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
  interface contactcard extends Xrm.PageBase<contactcard.Attributes,contactcard.Tabs,contactcard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
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
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.contact.Main {
  namespace Contact {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "PERSONAL INFORMATION"): Xrm.PageSection;
        get(name: "PERSONAL_NOTES_SECTION"): Xrm.PageSection;
        get(name: "billing information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "CONTACT_INFORMATION"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "SOCIAL_PANE_TAB"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
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
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Contact extends Xrm.PageBase<Contact.Attributes,Contact.Tabs,Contact.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
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
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredcontactmethodcode1"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_allegation.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_description"): Xrm.Attribute<string>;
      get(name: "opc_disposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_description"): Xrm.StringControl;
      get(name: "opc_disposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_disposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_description"): Xrm.StringControl;
    getControl(controlName: "opc_disposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_allegation.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_checklist_responses"): Xrm.PageSection;
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationtypeid"): Xrm.LookupAttribute<"opc_allegationtype">;
      get(name: "opc_description"): Xrm.Attribute<string>;
      get(name: "opc_disposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
      get(name: "opc_dispositionactionid"): Xrm.LookupAttribute<"opc_dispositionaction">;
      get(name: "opc_dispositionreasonid"): Xrm.LookupAttribute<"opc_dispositionreason">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_checklist"): Xrm.WebResourceControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_allegationtypeid"): Xrm.LookupControl<"opc_allegationtype">;
      get(name: "opc_description"): Xrm.StringControl;
      get(name: "opc_disposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
      get(name: "opc_dispositionactionid"): Xrm.LookupControl<"opc_dispositionaction">;
      get(name: "opc_dispositionreasonid"): Xrm.LookupControl<"opc_dispositionreason">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_allegationtypeid"): Xrm.LookupAttribute<"opc_allegationtype">;
    getAttribute(attributeName: "opc_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_disposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
    getAttribute(attributeName: "opc_dispositionactionid"): Xrm.LookupAttribute<"opc_dispositionaction">;
    getAttribute(attributeName: "opc_dispositionreasonid"): Xrm.LookupAttribute<"opc_dispositionreason">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "WebResource_checklist"): Xrm.WebResourceControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_allegationtypeid"): Xrm.LookupControl<"opc_allegationtype">;
    getControl(controlName: "opc_description"): Xrm.StringControl;
    getControl(controlName: "opc_disposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
    getControl(controlName: "opc_dispositionactionid"): Xrm.LookupControl<"opc_dispositionaction">;
    getControl(controlName: "opc_dispositionreasonid"): Xrm.LookupControl<"opc_dispositionreason">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_allegationtype.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acronym"): Xrm.Attribute<string>;
      get(name: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_descriptionfrench"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_acronym"): Xrm.StringControl;
      get(name: "opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_descriptionfrench"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_acronym"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionfrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_acronym"): Xrm.StringControl;
    getControl(controlName: "opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionfrench"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_allegationtype.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_checklistresponse.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationid"): Xrm.LookupAttribute<"opc_allegation">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_questiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
      get(name: "opc_response"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_allegationid"): Xrm.LookupControl<"opc_allegation">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_questiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
      get(name: "opc_response"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_allegationid"): Xrm.LookupAttribute<"opc_allegation">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_questiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
    getAttribute(attributeName: "opc_response"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_allegationid"): Xrm.LookupControl<"opc_allegation">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_questiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
    getControl(controlName: "opc_response"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_checklistresponse.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationid"): Xrm.LookupAttribute<"opc_allegation">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_questiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
      get(name: "opc_response"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_opc_allegationid"): Xrm.LookupControl<"opc_allegation">;
      get(name: "header_opc_questiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_response"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_allegationid"): Xrm.LookupAttribute<"opc_allegation">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_questiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
    getAttribute(attributeName: "opc_response"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_opc_allegationid"): Xrm.LookupControl<"opc_allegation">;
    getControl(controlName: "header_opc_questiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_response"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_checklistresponse.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_checklisttype.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_type"): Xrm.OptionSetAttribute<opc_complaintstage>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_type"): Xrm.OptionSetControl<opc_complaintstage>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_type"): Xrm.OptionSetAttribute<opc_complaintstage>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_type"): Xrm.OptionSetControl<opc_complaintstage>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_checklisttype.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_question_templates"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_type"): Xrm.OptionSetAttribute<opc_complaintstage>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_type"): Xrm.OptionSetControl<opc_complaintstage>;
      get(name: "subgrid_allegation_types"): Xrm.SubGridControl<"opc_allegationtype">;
      get(name: "subgrid_question_templates"): Xrm.SubGridControl<"opc_questiontemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_type"): Xrm.OptionSetAttribute<opc_complaintstage>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_type"): Xrm.OptionSetControl<opc_complaintstage>;
    getControl(controlName: "subgrid_allegation_types"): Xrm.SubGridControl<"opc_allegationtype">;
    getControl(controlName: "subgrid_question_templates"): Xrm.SubGridControl<"opc_questiontemplate">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_checklisttype.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_complaint.Main {
  namespace Information {
    namespace Tabs {
      interface tab_allegations extends Xrm.SectionCollectionBase {
        get(name: "section_allegations"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_documents extends Xrm.SectionCollectionBase {
        get(name: "section_documents"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_notes_activities"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_issues extends Xrm.SectionCollectionBase {
        get(name: "section_issues"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_recommendations extends Xrm.SectionCollectionBase {
        get(name: "section_recommendations"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_reminders extends Xrm.SectionCollectionBase {
        get(name: "section_reminders"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_risk_assessments extends Xrm.SectionCollectionBase {
        get(name: "section_risk_assessments"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_topics extends Xrm.SectionCollectionBase {
        get(name: "section_topics"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acceptancedate"): Xrm.DateAttribute | null;
      get(name: "opc_accountid"): Xrm.LookupAttribute<"account">;
      get(name: "opc_actualriskappetitevalue"): Xrm.NumberAttribute;
      get(name: "opc_closereason"): Xrm.OptionSetAttribute<opc_closereason> | null;
      get(name: "opc_complainant"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_complainantrep"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_intakedisposition"): Xrm.OptionSetAttribute<opc_intakedisposition> | null;
      get(name: "opc_lastmilestone"): Xrm.OptionSetAttribute<opc_complaintmilestone>;
      get(name: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
      get(name: "opc_multiplecomplaintstrategy"): Xrm.OptionSetAttribute<opc_multiplecomplaintstrategy>;
      get(name: "opc_nextstep"): Xrm.OptionSetAttribute<opc_nextstep> | null;
      get(name: "opc_number"): Xrm.Attribute<string>;
      get(name: "opc_opcpriorityid"): Xrm.LookupAttribute<"opc_opcpriority">;
      get(name: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<opc_yesorno> | null;
      get(name: "opc_sectorid"): Xrm.LookupAttribute<"opc_sector">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opc_complaint_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "SubgridControl1570455352989"): Xrm.SubGridControl<"opc_issue">;
      get(name: "SubgridControl1570455487438"): Xrm.SubGridControl<"opc_recommendation">;
      get(name: "SubgridControl1570557025307"): Xrm.SubGridControl<"sharepointdocument">;
      get(name: "header_opc_lastmilestone"): Xrm.OptionSetControl<opc_complaintmilestone>;
      get(name: "header_process_opc_acceptancedate"): Xrm.DateControl | null;
      get(name: "header_process_opc_accountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_opc_closereason"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_1"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_2"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_3"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_complainant"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_opc_intakedisposition"): Xrm.OptionSetControl<opc_intakedisposition> | null;
      get(name: "header_process_opc_intakedisposition_1"): Xrm.OptionSetControl<opc_intakedisposition> | null;
      get(name: "header_process_opc_legislation"): Xrm.LookupControl<"opc_legislation"> | null;
      get(name: "header_process_opc_nextstep"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_nextstep_1"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_nextstep_2"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_recommendtoregistrar"): Xrm.OptionSetControl<opc_yesorno> | null;
      get(name: "header_process_opc_sectorid"): Xrm.LookupControl<"opc_sector"> | null;
      get(name: "header_process_statuscode"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
      get(name: "header_process_statuscode_1"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
      get(name: "header_process_statuscode_2"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
      get(name: "header_statuscode"): Xrm.OptionSetControl<opc_complaint_statuscode>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opc_accountid"): Xrm.LookupControl<"account">;
      get(name: "opc_actualriskappetitevalue"): Xrm.NumberControl;
      get(name: "opc_complainant"): Xrm.LookupControl<"contact">;
      get(name: "opc_complainantrep"): Xrm.LookupControl<"contact">;
      get(name: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
      get(name: "opc_multiplecomplaintstrategy"): Xrm.OptionSetControl<opc_multiplecomplaintstrategy>;
      get(name: "opc_number"): Xrm.StringControl;
      get(name: "opc_opcpriorityid"): Xrm.LookupControl<"opc_opcpriority">;
      get(name: "opc_sectorid"): Xrm.LookupControl<"opc_sector">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "subgrid_allegations"): Xrm.SubGridControl<"opc_allegation">;
      get(name: "subgrid_reminders"): Xrm.SubGridControl<"opc_reminder">;
      get(name: "subgrid_risk_assessments"): Xrm.SubGridControl<"opc_riskassessment">;
      get(name: "subgrid_topics"): Xrm.SubGridControl<"opc_topic">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_allegations"): Xrm.PageTab<Tabs.tab_allegations>;
      get(name: "tab_documents"): Xrm.PageTab<Tabs.tab_documents>;
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: "tab_issues"): Xrm.PageTab<Tabs.tab_issues>;
      get(name: "tab_recommendations"): Xrm.PageTab<Tabs.tab_recommendations>;
      get(name: "tab_reminders"): Xrm.PageTab<Tabs.tab_reminders>;
      get(name: "tab_risk_assessments"): Xrm.PageTab<Tabs.tab_risk_assessments>;
      get(name: "tab_topics"): Xrm.PageTab<Tabs.tab_topics>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_acceptancedate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "opc_accountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "opc_actualriskappetitevalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "opc_closereason"): Xrm.OptionSetAttribute<opc_closereason> | null;
    getAttribute(attributeName: "opc_complainant"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_complainantrep"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_intakedisposition"): Xrm.OptionSetAttribute<opc_intakedisposition> | null;
    getAttribute(attributeName: "opc_lastmilestone"): Xrm.OptionSetAttribute<opc_complaintmilestone>;
    getAttribute(attributeName: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
    getAttribute(attributeName: "opc_multiplecomplaintstrategy"): Xrm.OptionSetAttribute<opc_multiplecomplaintstrategy>;
    getAttribute(attributeName: "opc_nextstep"): Xrm.OptionSetAttribute<opc_nextstep> | null;
    getAttribute(attributeName: "opc_number"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_opcpriorityid"): Xrm.LookupAttribute<"opc_opcpriority">;
    getAttribute(attributeName: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<opc_yesorno> | null;
    getAttribute(attributeName: "opc_sectorid"): Xrm.LookupAttribute<"opc_sector">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opc_complaint_statuscode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "SubgridControl1570455352989"): Xrm.SubGridControl<"opc_issue">;
    getControl(controlName: "SubgridControl1570455487438"): Xrm.SubGridControl<"opc_recommendation">;
    getControl(controlName: "SubgridControl1570557025307"): Xrm.SubGridControl<"sharepointdocument">;
    getControl(controlName: "header_opc_lastmilestone"): Xrm.OptionSetControl<opc_complaintmilestone>;
    getControl(controlName: "header_process_opc_acceptancedate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_opc_accountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_opc_closereason"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_1"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_2"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_3"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_complainant"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_opc_intakedisposition"): Xrm.OptionSetControl<opc_intakedisposition> | null;
    getControl(controlName: "header_process_opc_intakedisposition_1"): Xrm.OptionSetControl<opc_intakedisposition> | null;
    getControl(controlName: "header_process_opc_legislation"): Xrm.LookupControl<"opc_legislation"> | null;
    getControl(controlName: "header_process_opc_nextstep"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_nextstep_1"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_nextstep_2"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_recommendtoregistrar"): Xrm.OptionSetControl<opc_yesorno> | null;
    getControl(controlName: "header_process_opc_sectorid"): Xrm.LookupControl<"opc_sector"> | null;
    getControl(controlName: "header_process_statuscode"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
    getControl(controlName: "header_process_statuscode_1"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
    getControl(controlName: "header_process_statuscode_2"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<opc_complaint_statuscode>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opc_accountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "opc_actualriskappetitevalue"): Xrm.NumberControl;
    getControl(controlName: "opc_complainant"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_complainantrep"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
    getControl(controlName: "opc_multiplecomplaintstrategy"): Xrm.OptionSetControl<opc_multiplecomplaintstrategy>;
    getControl(controlName: "opc_number"): Xrm.StringControl;
    getControl(controlName: "opc_opcpriorityid"): Xrm.LookupControl<"opc_opcpriority">;
    getControl(controlName: "opc_sectorid"): Xrm.LookupControl<"opc_sector">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "subgrid_allegations"): Xrm.SubGridControl<"opc_allegation">;
    getControl(controlName: "subgrid_reminders"): Xrm.SubGridControl<"opc_reminder">;
    getControl(controlName: "subgrid_risk_assessments"): Xrm.SubGridControl<"opc_riskassessment">;
    getControl(controlName: "subgrid_topics"): Xrm.SubGridControl<"opc_topic">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_complaint.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acceptancedate"): Xrm.DateAttribute | null;
      get(name: "opc_accountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "opc_closereason"): Xrm.OptionSetAttribute<opc_closereason> | null;
      get(name: "opc_complainant"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_complainantrep"): Xrm.LookupAttribute<"contact">;
      get(name: "opc_intakedisposition"): Xrm.OptionSetAttribute<opc_intakedisposition> | null;
      get(name: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
      get(name: "opc_nextstep"): Xrm.OptionSetAttribute<opc_nextstep> | null;
      get(name: "opc_number"): Xrm.Attribute<string>;
      get(name: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<opc_yesorno> | null;
      get(name: "opc_sectorid"): Xrm.LookupAttribute<"opc_sector"> | null;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opc_complaint_statuscode> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_opc_acceptancedate"): Xrm.DateControl | null;
      get(name: "header_process_opc_accountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_opc_closereason"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_1"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_2"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_closereason_3"): Xrm.OptionSetControl<opc_closereason> | null;
      get(name: "header_process_opc_complainant"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_opc_intakedisposition"): Xrm.OptionSetControl<opc_intakedisposition> | null;
      get(name: "header_process_opc_intakedisposition_1"): Xrm.OptionSetControl<opc_intakedisposition> | null;
      get(name: "header_process_opc_legislation"): Xrm.LookupControl<"opc_legislation"> | null;
      get(name: "header_process_opc_nextstep"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_nextstep_1"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_nextstep_2"): Xrm.OptionSetControl<opc_nextstep> | null;
      get(name: "header_process_opc_recommendtoregistrar"): Xrm.OptionSetControl<opc_yesorno> | null;
      get(name: "header_process_opc_sectorid"): Xrm.LookupControl<"opc_sector"> | null;
      get(name: "header_process_statuscode"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
      get(name: "header_process_statuscode_1"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
      get(name: "header_process_statuscode_2"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
      get(name: "opc_complainant"): Xrm.LookupControl<"contact">;
      get(name: "opc_complainantrep"): Xrm.LookupControl<"contact">;
      get(name: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
      get(name: "opc_number"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_acceptancedate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "opc_accountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "opc_closereason"): Xrm.OptionSetAttribute<opc_closereason> | null;
    getAttribute(attributeName: "opc_complainant"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_complainantrep"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "opc_intakedisposition"): Xrm.OptionSetAttribute<opc_intakedisposition> | null;
    getAttribute(attributeName: "opc_legislation"): Xrm.LookupAttribute<"opc_legislation">;
    getAttribute(attributeName: "opc_nextstep"): Xrm.OptionSetAttribute<opc_nextstep> | null;
    getAttribute(attributeName: "opc_number"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<opc_yesorno> | null;
    getAttribute(attributeName: "opc_sectorid"): Xrm.LookupAttribute<"opc_sector"> | null;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opc_complaint_statuscode> | null;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_process_opc_acceptancedate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_opc_accountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_opc_closereason"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_1"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_2"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_closereason_3"): Xrm.OptionSetControl<opc_closereason> | null;
    getControl(controlName: "header_process_opc_complainant"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_opc_intakedisposition"): Xrm.OptionSetControl<opc_intakedisposition> | null;
    getControl(controlName: "header_process_opc_intakedisposition_1"): Xrm.OptionSetControl<opc_intakedisposition> | null;
    getControl(controlName: "header_process_opc_legislation"): Xrm.LookupControl<"opc_legislation"> | null;
    getControl(controlName: "header_process_opc_nextstep"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_nextstep_1"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_nextstep_2"): Xrm.OptionSetControl<opc_nextstep> | null;
    getControl(controlName: "header_process_opc_recommendtoregistrar"): Xrm.OptionSetControl<opc_yesorno> | null;
    getControl(controlName: "header_process_opc_sectorid"): Xrm.LookupControl<"opc_sector"> | null;
    getControl(controlName: "header_process_statuscode"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
    getControl(controlName: "header_process_statuscode_1"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
    getControl(controlName: "header_process_statuscode_2"): Xrm.OptionSetControl<opc_complaint_statuscode> | null;
    getControl(controlName: "opc_complainant"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_complainantrep"): Xrm.LookupControl<"contact">;
    getControl(controlName: "opc_legislation"): Xrm.LookupControl<"opc_legislation">;
    getControl(controlName: "opc_number"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_dispositionaction.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_dispositionaction.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_dispositionreasonid"): Xrm.LookupAttribute<"opc_dispositionreason">;
      get(name: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_dispositionreasonid"): Xrm.LookupControl<"opc_dispositionreason">;
      get(name: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_dispositionreasonid"): Xrm.LookupAttribute<"opc_dispositionreason">;
    getAttribute(attributeName: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_dispositionreasonid"): Xrm.LookupControl<"opc_dispositionreason">;
    getControl(controlName: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_dispositionreason.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_dispositionreason.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_allegationdisposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
      get(name: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_allegationdisposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
      get(name: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "subgrid_disposition_action"): Xrm.SubGridControl<"opc_dispositionaction">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_allegationdisposition"): Xrm.OptionSetAttribute<opc_allegationdisposition>;
    getAttribute(attributeName: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_allegationdisposition"): Xrm.OptionSetControl<opc_allegationdisposition>;
    getControl(controlName: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "subgrid_disposition_action"): Xrm.SubGridControl<"opc_dispositionaction">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_individualcomplaint_bp.Main {
  namespace Information {
    namespace Tabs {
      interface StageStep11 extends Xrm.SectionCollectionBase {
        get(name: "StageStep11_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep21 extends Xrm.SectionCollectionBase {
        get(name: "StageStep21_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep29 extends Xrm.SectionCollectionBase {
        get(name: "StageStep29_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep3 extends Xrm.SectionCollectionBase {
        get(name: "StageStep3_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep33 extends Xrm.SectionCollectionBase {
        get(name: "StageStep33_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep37 extends Xrm.SectionCollectionBase {
        get(name: "StageStep37_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep41 extends Xrm.SectionCollectionBase {
        get(name: "StageStep41_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep45 extends Xrm.SectionCollectionBase {
        get(name: "StageStep45_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep49 extends Xrm.SectionCollectionBase {
        get(name: "StageStep49_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep55 extends Xrm.SectionCollectionBase {
        get(name: "StageStep55_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acceptancedate"): Xrm.DateAttribute;
      get(name: "opc_accountid"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_closereason"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_complainant"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_intakedisposition"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_legislation"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "opc_nextstep"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<number>;
      get(name: "opc_sectorid"): Xrm.LookupAttribute<"opc_complaints">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opc_individualcomplaint_bp_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_acceptancedate"): Xrm.DateControl;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_accountid"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason2"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason3"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainant"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_legislation"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep1"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep2"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_recommendtoregistrar"): Xrm.OptionSetControl<number>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sectorid"): Xrm.LookupControl<"opc_complaints">;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:statuscode"): Xrm.OptionSetControl<opc_individualcomplaint_bp_statuscode>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:statuscode1"): Xrm.OptionSetControl<opc_individualcomplaint_bp_statuscode>;
      get(name: "bpf_opc_complaint_opc_individualcomplaint_bp:statuscode2"): Xrm.OptionSetControl<opc_individualcomplaint_bp_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StageStep11"): Xrm.PageTab<Tabs.StageStep11>;
      get(name: "StageStep21"): Xrm.PageTab<Tabs.StageStep21>;
      get(name: "StageStep29"): Xrm.PageTab<Tabs.StageStep29>;
      get(name: "StageStep3"): Xrm.PageTab<Tabs.StageStep3>;
      get(name: "StageStep33"): Xrm.PageTab<Tabs.StageStep33>;
      get(name: "StageStep37"): Xrm.PageTab<Tabs.StageStep37>;
      get(name: "StageStep41"): Xrm.PageTab<Tabs.StageStep41>;
      get(name: "StageStep45"): Xrm.PageTab<Tabs.StageStep45>;
      get(name: "StageStep49"): Xrm.PageTab<Tabs.StageStep49>;
      get(name: "StageStep55"): Xrm.PageTab<Tabs.StageStep55>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_acceptancedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "opc_accountid"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_closereason"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_complainant"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_intakedisposition"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_legislation"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "opc_nextstep"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_recommendtoregistrar"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "opc_sectorid"): Xrm.LookupAttribute<"opc_complaints">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opc_individualcomplaint_bp_statuscode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_acceptancedate"): Xrm.DateControl;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_accountid"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason2"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_closereason3"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_complainant"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_intakedisposition1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_legislation"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep1"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_nextstep2"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_recommendtoregistrar"): Xrm.OptionSetControl<number>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:opc_sectorid"): Xrm.LookupControl<"opc_complaints">;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:statuscode"): Xrm.OptionSetControl<opc_individualcomplaint_bp_statuscode>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:statuscode1"): Xrm.OptionSetControl<opc_individualcomplaint_bp_statuscode>;
    getControl(controlName: "bpf_opc_complaint_opc_individualcomplaint_bp:statuscode2"): Xrm.OptionSetControl<opc_individualcomplaint_bp_statuscode>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_issue.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_issue.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_legislation.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acronym"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_acronym"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_acronym"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_acronym"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_legislation.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_acronym"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_acronym"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_acronym"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_acronym"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_notification.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_notifybyemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<opc_notification_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opc_notification_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<opc_notification_statecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<opc_notification_statuscode>;
      get(name: "opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_notifybyemail"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_complaintid"): Xrm.LookupAttribute<"opc_complaint">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_notifybyemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<opc_notification_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opc_notification_statuscode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<opc_notification_statecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<opc_notification_statuscode>;
    getControl(controlName: "opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_notifybyemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_notification.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_opcpriority.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_frenchdescription"): Xrm.Attribute<string>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_frenchdescription"): Xrm.StringControl;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_frenchdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_frenchdescription"): Xrm.StringControl;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_opcpriority.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_questiontemplate.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
      get(name: "opc_conditionalvisibility"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_parentquestiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
      get(name: "opc_questiontypeid"): Xrm.LookupAttribute<"opc_questiontype">;
      get(name: "opc_sequence"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
      get(name: "opc_conditionalvisibility"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_parentquestiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
      get(name: "opc_questiontypeid"): Xrm.LookupControl<"opc_questiontype">;
      get(name: "opc_sequence"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
    getAttribute(attributeName: "opc_conditionalvisibility"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_parentquestiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
    getAttribute(attributeName: "opc_questiontypeid"): Xrm.LookupAttribute<"opc_questiontype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
    getControl(controlName: "opc_conditionalvisibility"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_parentquestiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
    getControl(controlName: "opc_questiontypeid"): Xrm.LookupControl<"opc_questiontype">;
    getControl(controlName: "opc_sequence"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_questiontemplate.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_checklist_responses"): Xrm.PageSection;
        get(name: "section_child_question_templates"): Xrm.PageSection;
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
      get(name: "opc_conditionalvisibility"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_parentquestiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
      get(name: "opc_questiontypeid"): Xrm.LookupAttribute<"opc_questiontype">;
      get(name: "opc_sequence"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_conditionalvisibility"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_parentquestiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
      get(name: "opc_questiontypeid"): Xrm.LookupControl<"opc_questiontype">;
      get(name: "opc_sequence"): Xrm.StringControl;
      get(name: "subgrid_checklist_responses"): Xrm.SubGridControl<"opc_checklistresponse">;
      get(name: "subgrid_child_question_templates"): Xrm.SubGridControl<"opc_questiontemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_checklisttypeid"): Xrm.LookupAttribute<"opc_checklisttype">;
    getAttribute(attributeName: "opc_conditionalvisibility"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_parentquestiontemplateid"): Xrm.LookupAttribute<"opc_questiontemplate">;
    getAttribute(attributeName: "opc_questiontypeid"): Xrm.LookupAttribute<"opc_questiontype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_opc_checklisttypeid"): Xrm.LookupControl<"opc_checklisttype">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_conditionalvisibility"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_parentquestiontemplateid"): Xrm.LookupControl<"opc_questiontemplate">;
    getControl(controlName: "opc_questiontypeid"): Xrm.LookupControl<"opc_questiontype">;
    getControl(controlName: "opc_sequence"): Xrm.StringControl;
    getControl(controlName: "subgrid_checklist_responses"): Xrm.SubGridControl<"opc_checklistresponse">;
    getControl(controlName: "subgrid_child_question_templates"): Xrm.SubGridControl<"opc_questiontemplate">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_questiontemplate.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_questiontype.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_questiontype.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_questiontype.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_question_templates"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "subgrid_question_templates"): Xrm.SubGridControl<"opc_questiontemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "subgrid_question_templates"): Xrm.SubGridControl<"opc_questiontemplate">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_recommendation.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_recommendation.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_reminder.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_reminder.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_additionalusers"): Xrm.PageSection;
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
      get(name: "opc_notifyadditionalusers"): Xrm.Attribute<any>;
      get(name: "opc_notifybyemail"): Xrm.Attribute<any>;
      get(name: "opc_notifycaseowner"): Xrm.Attribute<any>;
      get(name: "opc_notifyme"): Xrm.Attribute<any>;
      get(name: "opc_reminderdate"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<opc_reminder_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "grid_additionalusers"): Xrm.SubGridControl<"systemuser">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<opc_reminder_statecode>;
      get(name: "opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_notifyadditionalusers"): Xrm.Control<Xrm.Attribute<any>>;
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
    getAttribute(attributeName: "opc_notifyadditionalusers"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifybyemail"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifycaseowner"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_notifyme"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_reminderdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<opc_reminder_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "grid_additionalusers"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<opc_reminder_statecode>;
    getControl(controlName: "opc_complaintid"): Xrm.LookupControl<"opc_complaint">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_notifyadditionalusers"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifybyemail"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifycaseowner"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_notifyme"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_reminderdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskappetite.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_value"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_value"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_value"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskappetite.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskappetite.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_value"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_value"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_value"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessment.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessment.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_risk_matrix"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_risk_assessment_definitions extends Xrm.SectionCollectionBase {
        get(name: "section_riskassessment_definition"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_actualriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "opc_bypassinitiatedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "opc_bypassrationale"): Xrm.Attribute<string>;
      get(name: "opc_bypasssuggestedriskappetite"): Xrm.Attribute<any>;
      get(name: "opc_complaint"): Xrm.LookupAttribute<"opc_complaint">;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: "opc_suggestedriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_riskassessmentcontrol"): Xrm.WebResourceControl;
      get(name: "header_opc_complaint"): Xrm.LookupControl<"opc_complaint">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_actualriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "opc_bypassinitiatedby"): Xrm.LookupControl<"systemuser">;
      get(name: "opc_bypassrationale"): Xrm.StringControl;
      get(name: "opc_bypasssuggestedriskappetite"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: "opc_suggestedriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "subgrid_riskassessment_definitions"): Xrm.SubGridControl<"opc_riskassessmentdefinition">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: "tab_risk_assessment_definitions"): Xrm.PageTab<Tabs.tab_risk_assessment_definitions>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_actualriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "opc_bypassinitiatedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "opc_bypassrationale"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_bypasssuggestedriskappetite"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_complaint"): Xrm.LookupAttribute<"opc_complaint">;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: "opc_suggestedriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "WebResource_riskassessmentcontrol"): Xrm.WebResourceControl;
    getControl(controlName: "header_opc_complaint"): Xrm.LookupControl<"opc_complaint">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_actualriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "opc_bypassinitiatedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "opc_bypassrationale"): Xrm.StringControl;
    getControl(controlName: "opc_bypasssuggestedriskappetite"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: "opc_suggestedriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "subgrid_riskassessment_definitions"): Xrm.SubGridControl<"opc_riskassessmentdefinition">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessment.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentcategory.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentcategory.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentcategory.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_risk_assessment_definitions"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_actualriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "opc_bypassinitiatedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "opc_bypassrationale"): Xrm.Attribute<string>;
      get(name: "opc_bypasssuggestedriskappetite"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessment"): Xrm.LookupAttribute<"opc_riskassessment">;
      get(name: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: "opc_suggestedriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_opc_riskassessment"): Xrm.LookupControl<"opc_riskassessment">;
      get(name: "header_opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_actualriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "opc_bypassinitiatedby"): Xrm.LookupControl<"systemuser">;
      get(name: "opc_bypassrationale"): Xrm.StringControl;
      get(name: "opc_bypasssuggestedriskappetite"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: "opc_suggestedriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "subgrid_risk_assessment_definitions"): Xrm.SubGridControl<"opc_riskassessmentdefinition">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_actualriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "opc_bypassinitiatedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "opc_bypassrationale"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_bypasssuggestedriskappetite"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessment"): Xrm.LookupAttribute<"opc_riskassessment">;
    getAttribute(attributeName: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: "opc_suggestedriskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_opc_riskassessment"): Xrm.LookupControl<"opc_riskassessment">;
    getControl(controlName: "header_opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_actualriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "opc_bypassinitiatedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "opc_bypassrationale"): Xrm.StringControl;
    getControl(controlName: "opc_bypasssuggestedriskappetite"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: "opc_suggestedriskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "subgrid_risk_assessment_definitions"): Xrm.SubGridControl<"opc_riskassessmentdefinition">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentcategorytemplate.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentcategorytemplate.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_risk_assessment_factor_templates"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: "subgrid_risk_assessment_factor_templates"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmenttype"): Xrm.LookupAttribute<"opc_riskassessmenttype">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmenttype"): Xrm.LookupControl<"opc_riskassessmenttype">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: "subgrid_risk_assessment_factor_templates"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentcategorytemplate.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentdefinition.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_isselected"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmentcategory"): Xrm.LookupAttribute<"opc_riskassessmentcategory">;
      get(name: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupAttribute<"opc_riskassessmentdefinitiontemplate">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
      get(name: "opc_riskassessmentid"): Xrm.LookupAttribute<"opc_riskassessment">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_isselected"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmentcategory"): Xrm.LookupControl<"opc_riskassessmentcategory">;
      get(name: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupControl<"opc_riskassessmentdefinitiontemplate">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
      get(name: "opc_riskassessmentid"): Xrm.LookupControl<"opc_riskassessment">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_isselected"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmentcategory"): Xrm.LookupAttribute<"opc_riskassessmentcategory">;
    getAttribute(attributeName: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupAttribute<"opc_riskassessmentdefinitiontemplate">;
    getAttribute(attributeName: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
    getAttribute(attributeName: "opc_riskassessmentid"): Xrm.LookupAttribute<"opc_riskassessment">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_isselected"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmentcategory"): Xrm.LookupControl<"opc_riskassessmentcategory">;
    getControl(controlName: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupControl<"opc_riskassessmentdefinitiontemplate">;
    getControl(controlName: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
    getControl(controlName: "opc_riskassessmentid"): Xrm.LookupControl<"opc_riskassessment">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentdefinition.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_isselected"): Xrm.Attribute<any>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmentcategory"): Xrm.LookupAttribute<"opc_riskassessmentcategory">;
      get(name: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupAttribute<"opc_riskassessmentdefinitiontemplate">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
      get(name: "opc_riskassessmentid"): Xrm.LookupAttribute<"opc_riskassessment">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_isselected"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmentcategory"): Xrm.LookupControl<"opc_riskassessmentcategory">;
      get(name: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupControl<"opc_riskassessmentdefinitiontemplate">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
      get(name: "opc_riskassessmentid"): Xrm.LookupControl<"opc_riskassessment">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_isselected"): Xrm.Attribute<any>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmentcategory"): Xrm.LookupAttribute<"opc_riskassessmentcategory">;
    getAttribute(attributeName: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupAttribute<"opc_riskassessmentdefinitiontemplate">;
    getAttribute(attributeName: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
    getAttribute(attributeName: "opc_riskassessmentid"): Xrm.LookupAttribute<"opc_riskassessment">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_isselected"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmentcategory"): Xrm.LookupControl<"opc_riskassessmentcategory">;
    getControl(controlName: "opc_riskassessmentdefinitiontemplate"): Xrm.LookupControl<"opc_riskassessmentdefinitiontemplate">;
    getControl(controlName: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
    getControl(controlName: "opc_riskassessmentid"): Xrm.LookupControl<"opc_riskassessment">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentdefinition.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentdefinitiontemplate.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentdefinitiontemplate.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentdefinitiontemplate.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskappetite"): Xrm.LookupControl<"opc_riskappetite">;
      get(name: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskappetite"): Xrm.LookupAttribute<"opc_riskappetite">;
    getAttribute(attributeName: "opc_riskassessmentfactortemplate"): Xrm.LookupAttribute<"opc_riskassessmentfactortemplate">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskappetite"): Xrm.LookupControl<"opc_riskappetite">;
    getControl(controlName: "opc_riskassessmentfactortemplate"): Xrm.LookupControl<"opc_riskassessmentfactortemplate">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentfactortemplate.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentfactortemplate.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmentfactortemplate.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_risk_assessment_definition_templates"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
      get(name: "opc_sequence"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
      get(name: "opc_sequence"): Xrm.NumberControl;
      get(name: "subgrid_risk_assessment_definition_templates"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_riskassessmentcategorytemplate"): Xrm.LookupAttribute<"opc_riskassessmentcategorytemplate">;
    getAttribute(attributeName: "opc_sequence"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_riskassessmentcategorytemplate"): Xrm.LookupControl<"opc_riskassessmentcategorytemplate">;
    getControl(controlName: "opc_sequence"): Xrm.NumberControl;
    getControl(controlName: "subgrid_risk_assessment_definition_templates"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmenttype.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmenttype.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: "section_risk_assessment_category_templates"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "subgrid_risk_assessment_category_templates"): Xrm.SubGridControl<"opc_riskassessmentcategorytemplate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "subgrid_risk_assessment_category_templates"): Xrm.SubGridControl<"opc_riskassessmentcategorytemplate">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_riskassessmenttype.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_sector.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_superseded_sectors extends Xrm.SectionCollectionBase {
        get(name: "section_superseded_sectors"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_parentsectorid"): Xrm.LookupAttribute<"opc_sector">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "grid_superseded_sectors"): Xrm.SubGridControl<"opc_sector">;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_parentsectorid"): Xrm.LookupControl<"opc_sector">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: "tab_superseded_sectors"): Xrm.PageTab<Tabs.tab_superseded_sectors>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_parentsectorid"): Xrm.LookupAttribute<"opc_sector">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "grid_superseded_sectors"): Xrm.SubGridControl<"opc_sector">;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_parentsectorid"): Xrm.LookupControl<"opc_sector">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_sector.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_theme.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_theme.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_descriptionfrench"): Xrm.Attribute<string>;
      get(name: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_descriptionfrench"): Xrm.StringControl;
      get(name: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionfrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionfrench"): Xrm.StringControl;
    getControl(controlName: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_topic.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "opc_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.opc_topic.Main {
  namespace Information {
    namespace Tabs {
      interface tab_general extends Xrm.SectionCollectionBase {
        get(name: "section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "opc_descriptionenglish"): Xrm.Attribute<string>;
      get(name: "opc_descriptionfrench"): Xrm.Attribute<string>;
      get(name: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "opc_name"): Xrm.Attribute<string>;
      get(name: "opc_nameenglish"): Xrm.Attribute<string>;
      get(name: "opc_namefrench"): Xrm.Attribute<string>;
      get(name: "opc_themeid"): Xrm.LookupAttribute<"opc_theme">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "opc_descriptionenglish"): Xrm.StringControl;
      get(name: "opc_descriptionfrench"): Xrm.StringControl;
      get(name: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
      get(name: "opc_name"): Xrm.StringControl;
      get(name: "opc_nameenglish"): Xrm.StringControl;
      get(name: "opc_namefrench"): Xrm.StringControl;
      get(name: "opc_themeid"): Xrm.LookupControl<"opc_theme">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_general"): Xrm.PageTab<Tabs.tab_general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "opc_descriptionenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_descriptionfrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_islocalizable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "opc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_nameenglish"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_namefrench"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opc_themeid"): Xrm.LookupAttribute<"opc_theme">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "opc_descriptionenglish"): Xrm.StringControl;
    getControl(controlName: "opc_descriptionfrench"): Xrm.StringControl;
    getControl(controlName: "opc_islocalizable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "opc_name"): Xrm.StringControl;
    getControl(controlName: "opc_nameenglish"): Xrm.StringControl;
    getControl(controlName: "opc_namefrench"): Xrm.StringControl;
    getControl(controlName: "opc_themeid"): Xrm.LookupControl<"opc_theme">;
    getControl(controlName: string): undefined;
  }
}
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
      get(name: "objectid"): Xrm.LookupAttribute<"activitypointer" | "appointment" | "email" | "fax" | "knowledgearticle" | "letter" | "msdyn_knowledgearticletemplate" | "opc_complaint" | "phonecall" | "recurringappointmentmaster" | "socialactivity" | "task">;
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
      get(name: "objectid"): Xrm.LookupControl<"activitypointer" | "appointment" | "email" | "fax" | "knowledgearticle" | "letter" | "msdyn_knowledgearticletemplate" | "opc_complaint" | "phonecall" | "recurringappointmentmaster" | "socialactivity" | "task">;
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
    getAttribute(attributeName: "objectid"): Xrm.LookupAttribute<"activitypointer" | "appointment" | "email" | "fax" | "knowledgearticle" | "letter" | "msdyn_knowledgearticletemplate" | "opc_complaint" | "phonecall" | "recurringappointmentmaster" | "socialactivity" | "task">;
    getAttribute(attributeName: "queueid"): Xrm.LookupAttribute<"queue">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<queueitem_statecode>;
    getAttribute(attributeName: "workerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "enteredon"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<queueitem_statecode>;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "objectid"): Xrm.LookupControl<"activitypointer" | "appointment" | "email" | "fax" | "knowledgearticle" | "letter" | "msdyn_knowledgearticletemplate" | "opc_complaint" | "phonecall" | "recurringappointmentmaster" | "socialactivity" | "task">;
    getControl(controlName: "queueid"): Xrm.LookupControl<"queue">;
    getControl(controlName: "workerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
declare namespace Form.connection.Main {
  namespace Information {
    namespace Tabs {
      interface details extends Xrm.SectionCollectionBase {
        get(name: "connect_from"): Xrm.PageSection;
        get(name: "details"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface info extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: "info_s"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "effectiveend"): Xrm.DateAttribute;
      get(name: "effectivestart"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "record1id"): Xrm.Attribute<any>;
      get(name: "record1roleid"): Xrm.LookupAttribute<"connectionrole">;
      get(name: "record2id"): Xrm.Attribute<any>;
      get(name: "record2roleid"): Xrm.LookupAttribute<"connectionrole">;
      get(name: "statecode"): Xrm.OptionSetAttribute<connection_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "description"): Xrm.StringControl;
      get(name: "effectiveend"): Xrm.DateControl;
      get(name: "effectivestart"): Xrm.DateControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<connection_statecode>;
      get(name: "header_record1id"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "record1id"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "record1roleid"): Xrm.LookupControl<"connectionrole">;
      get(name: "record2id"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "record2roleid"): Xrm.LookupControl<"connectionrole">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "info"): Xrm.PageTab<Tabs.info>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "effectiveend"): Xrm.DateAttribute;
    getAttribute(attributeName: "effectivestart"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "record1id"): Xrm.Attribute<any>;
    getAttribute(attributeName: "record1roleid"): Xrm.LookupAttribute<"connectionrole">;
    getAttribute(attributeName: "record2id"): Xrm.Attribute<any>;
    getAttribute(attributeName: "record2roleid"): Xrm.LookupAttribute<"connectionrole">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<connection_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "effectiveend"): Xrm.DateControl;
    getControl(controlName: "effectivestart"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<connection_statecode>;
    getControl(controlName: "header_record1id"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "record1id"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "record1roleid"): Xrm.LookupControl<"connectionrole">;
    getControl(controlName: "record2id"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "record2roleid"): Xrm.LookupControl<"connectionrole">;
    getControl(controlName: string): undefined;
  }
}
type WebResourceImage = "opc_compliance/imgs/icon64x64_read_notification.png"
  | "opc_compliance/imgs/icon64x64_unread_notification.png"
declare const enum LCID {
  English = 1033,
  French = 1036,
}
interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface opc_allegation_Base extends WebEntity {
}
interface opc_allegation_Fixed extends WebEntity_Fixed {
  opc_allegationid: string;
}
interface opc_allegation extends opc_allegation_Base, opc_allegation_Relationships {
}
interface opc_allegation_Relationships {
}
interface opc_allegation_Result extends opc_allegation_Base, opc_allegation_Relationships {
}
interface opc_allegation_FormattedResult {
}
interface opc_allegation_Select {
}
interface opc_allegation_Expand {
}
interface opc_allegation_Filter {
}
interface opc_allegation_Create extends opc_allegation {
}
interface opc_allegation_Update extends opc_allegation {
}
interface opc_allegationtype_Base extends WebEntity {
}
interface opc_allegationtype_Fixed extends WebEntity_Fixed {
  opc_allegationtypeid: string;
}
interface opc_allegationtype extends opc_allegationtype_Base, opc_allegationtype_Relationships {
}
interface opc_allegationtype_Relationships {
}
interface opc_allegationtype_Result extends opc_allegationtype_Base, opc_allegationtype_Relationships {
}
interface opc_allegationtype_FormattedResult {
}
interface opc_allegationtype_Select {
}
interface opc_allegationtype_Expand {
}
interface opc_allegationtype_Filter {
}
interface opc_allegationtype_Create extends opc_allegationtype {
}
interface opc_allegationtype_Update extends opc_allegationtype {
}
interface opc_ChecklistResponse_Base extends WebEntity {
}
interface opc_ChecklistResponse_Fixed extends WebEntity_Fixed {
  opc_checklistresponseid: string;
}
interface opc_ChecklistResponse extends opc_ChecklistResponse_Base, opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse_Result extends opc_ChecklistResponse_Base, opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse_FormattedResult {
}
interface opc_ChecklistResponse_Select {
}
interface opc_ChecklistResponse_Expand {
}
interface opc_ChecklistResponse_Filter {
}
interface opc_ChecklistResponse_Create extends opc_ChecklistResponse {
}
interface opc_ChecklistResponse_Update extends opc_ChecklistResponse {
}
interface opc_ChecklistType_Base extends WebEntity {
}
interface opc_ChecklistType_Fixed extends WebEntity_Fixed {
  opc_checklisttypeid: string;
}
interface opc_ChecklistType extends opc_ChecklistType_Base, opc_ChecklistType_Relationships {
}
interface opc_ChecklistType_Relationships {
}
interface opc_ChecklistType_Result extends opc_ChecklistType_Base, opc_ChecklistType_Relationships {
}
interface opc_ChecklistType_FormattedResult {
}
interface opc_ChecklistType_Select {
}
interface opc_ChecklistType_Expand {
}
interface opc_ChecklistType_Filter {
}
interface opc_ChecklistType_Create extends opc_ChecklistType {
}
interface opc_ChecklistType_Update extends opc_ChecklistType {
}
interface opc_complaint_Base extends WebEntity {
}
interface opc_complaint_Fixed extends WebEntity_Fixed {
  opc_complaintid: string;
}
interface opc_complaint extends opc_complaint_Base, opc_complaint_Relationships {
}
interface opc_complaint_Relationships {
}
interface opc_complaint_Result extends opc_complaint_Base, opc_complaint_Relationships {
}
interface opc_complaint_FormattedResult {
}
interface opc_complaint_Select {
}
interface opc_complaint_Expand {
}
interface opc_complaint_Filter {
}
interface opc_complaint_Create extends opc_complaint {
}
interface opc_complaint_Update extends opc_complaint {
}
interface opc_complaintsrelatedtopics_Base extends WebEntity {
}
interface opc_complaintsrelatedtopics_Fixed extends WebEntity_Fixed {
  opc_complaintsrelatedtopicsid: string;
}
interface opc_complaintsrelatedtopics extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_Result extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_FormattedResult {
}
interface opc_complaintsrelatedtopics_Select {
}
interface opc_complaintsrelatedtopics_Expand {
}
interface opc_complaintsrelatedtopics_Filter {
}
interface opc_complaintsrelatedtopics_Create extends opc_complaintsrelatedtopics {
}
interface opc_complaintsrelatedtopics_Update extends opc_complaintsrelatedtopics {
}
interface opc_dispositionaction_Base extends WebEntity {
}
interface opc_dispositionaction_Fixed extends WebEntity_Fixed {
  opc_dispositionactionid: string;
}
interface opc_dispositionaction extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
}
interface opc_dispositionaction_Relationships {
}
interface opc_dispositionaction_Result extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
}
interface opc_dispositionaction_FormattedResult {
}
interface opc_dispositionaction_Select {
}
interface opc_dispositionaction_Expand {
}
interface opc_dispositionaction_Filter {
}
interface opc_dispositionaction_Create extends opc_dispositionaction {
}
interface opc_dispositionaction_Update extends opc_dispositionaction {
}
interface opc_dispositionreason_Base extends WebEntity {
}
interface opc_dispositionreason_Fixed extends WebEntity_Fixed {
  opc_dispositionreasonid: string;
}
interface opc_dispositionreason extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
}
interface opc_dispositionreason_Relationships {
}
interface opc_dispositionreason_Result extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
}
interface opc_dispositionreason_FormattedResult {
}
interface opc_dispositionreason_Select {
}
interface opc_dispositionreason_Expand {
}
interface opc_dispositionreason_Filter {
}
interface opc_dispositionreason_Create extends opc_dispositionreason {
}
interface opc_dispositionreason_Update extends opc_dispositionreason {
}
interface opc_individualcomplaint_bp_Base extends WebEntity {
}
interface opc_individualcomplaint_bp_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface opc_individualcomplaint_bp extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp_Result extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp_FormattedResult {
}
interface opc_individualcomplaint_bp_Select {
}
interface opc_individualcomplaint_bp_Expand {
}
interface opc_individualcomplaint_bp_Filter {
}
interface opc_individualcomplaint_bp_Create extends opc_individualcomplaint_bp {
}
interface opc_individualcomplaint_bp_Update extends opc_individualcomplaint_bp {
}
interface opc_issue_Base extends WebEntity {
}
interface opc_issue_Fixed extends WebEntity_Fixed {
  opc_issueid: string;
}
interface opc_issue extends opc_issue_Base, opc_issue_Relationships {
}
interface opc_issue_Relationships {
}
interface opc_issue_Result extends opc_issue_Base, opc_issue_Relationships {
}
interface opc_issue_FormattedResult {
}
interface opc_issue_Select {
}
interface opc_issue_Expand {
}
interface opc_issue_Filter {
}
interface opc_issue_Create extends opc_issue {
}
interface opc_issue_Update extends opc_issue {
}
interface opc_legislation_Base extends WebEntity {
}
interface opc_legislation_Fixed extends WebEntity_Fixed {
  opc_legislationid: string;
}
interface opc_legislation extends opc_legislation_Base, opc_legislation_Relationships {
}
interface opc_legislation_Relationships {
}
interface opc_legislation_Result extends opc_legislation_Base, opc_legislation_Relationships {
}
interface opc_legislation_FormattedResult {
}
interface opc_legislation_Select {
}
interface opc_legislation_Expand {
}
interface opc_legislation_Filter {
}
interface opc_legislation_Create extends opc_legislation {
}
interface opc_legislation_Update extends opc_legislation {
}
interface opc_notification_Base extends WebEntity {
}
interface opc_notification_Fixed extends WebEntity_Fixed {
  opc_notificationid: string;
}
interface opc_notification extends opc_notification_Base, opc_notification_Relationships {
}
interface opc_notification_Relationships {
}
interface opc_notification_Result extends opc_notification_Base, opc_notification_Relationships {
}
interface opc_notification_FormattedResult {
}
interface opc_notification_Select {
}
interface opc_notification_Expand {
}
interface opc_notification_Filter {
}
interface opc_notification_Create extends opc_notification {
}
interface opc_notification_Update extends opc_notification {
}
interface opc_opcpriority_Base extends WebEntity {
}
interface opc_opcpriority_Fixed extends WebEntity_Fixed {
  opc_opcpriorityid: string;
}
interface opc_opcpriority extends opc_opcpriority_Base, opc_opcpriority_Relationships {
}
interface opc_opcpriority_Relationships {
}
interface opc_opcpriority_Result extends opc_opcpriority_Base, opc_opcpriority_Relationships {
}
interface opc_opcpriority_FormattedResult {
}
interface opc_opcpriority_Select {
}
interface opc_opcpriority_Expand {
}
interface opc_opcpriority_Filter {
}
interface opc_opcpriority_Create extends opc_opcpriority {
}
interface opc_opcpriority_Update extends opc_opcpriority {
}
interface opc_QuestionTemplate_Base extends WebEntity {
}
interface opc_QuestionTemplate_Fixed extends WebEntity_Fixed {
  opc_questiontemplateid: string;
}
interface opc_QuestionTemplate extends opc_QuestionTemplate_Base, opc_QuestionTemplate_Relationships {
}
interface opc_QuestionTemplate_Relationships {
}
interface opc_QuestionTemplate_Result extends opc_QuestionTemplate_Base, opc_QuestionTemplate_Relationships {
}
interface opc_QuestionTemplate_FormattedResult {
}
interface opc_QuestionTemplate_Select {
}
interface opc_QuestionTemplate_Expand {
}
interface opc_QuestionTemplate_Filter {
}
interface opc_QuestionTemplate_Create extends opc_QuestionTemplate {
}
interface opc_QuestionTemplate_Update extends opc_QuestionTemplate {
}
interface opc_QuestionType_Base extends WebEntity {
}
interface opc_QuestionType_Fixed extends WebEntity_Fixed {
  opc_questiontypeid: string;
}
interface opc_QuestionType extends opc_QuestionType_Base, opc_QuestionType_Relationships {
}
interface opc_QuestionType_Relationships {
}
interface opc_QuestionType_Result extends opc_QuestionType_Base, opc_QuestionType_Relationships {
}
interface opc_QuestionType_FormattedResult {
}
interface opc_QuestionType_Select {
}
interface opc_QuestionType_Expand {
}
interface opc_QuestionType_Filter {
}
interface opc_QuestionType_Create extends opc_QuestionType {
}
interface opc_QuestionType_Update extends opc_QuestionType {
}
interface opc_recommendation_Base extends WebEntity {
}
interface opc_recommendation_Fixed extends WebEntity_Fixed {
  opc_recommendationid: string;
}
interface opc_recommendation extends opc_recommendation_Base, opc_recommendation_Relationships {
}
interface opc_recommendation_Relationships {
}
interface opc_recommendation_Result extends opc_recommendation_Base, opc_recommendation_Relationships {
}
interface opc_recommendation_FormattedResult {
}
interface opc_recommendation_Select {
}
interface opc_recommendation_Expand {
}
interface opc_recommendation_Filter {
}
interface opc_recommendation_Create extends opc_recommendation {
}
interface opc_recommendation_Update extends opc_recommendation {
}
interface opc_reminder_Base extends WebEntity {
}
interface opc_reminder_Fixed extends WebEntity_Fixed {
  opc_reminderid: string;
}
interface opc_reminder extends opc_reminder_Base, opc_reminder_Relationships {
}
interface opc_reminder_Relationships {
}
interface opc_reminder_Result extends opc_reminder_Base, opc_reminder_Relationships {
}
interface opc_reminder_FormattedResult {
}
interface opc_reminder_Select {
}
interface opc_reminder_Expand {
}
interface opc_reminder_Filter {
}
interface opc_reminder_Create extends opc_reminder {
}
interface opc_reminder_Update extends opc_reminder {
}
interface opc_RiskAppetite_Base extends WebEntity {
}
interface opc_RiskAppetite_Fixed extends WebEntity_Fixed {
  opc_riskappetiteid: string;
}
interface opc_RiskAppetite extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
}
interface opc_RiskAppetite_Relationships {
}
interface opc_RiskAppetite_Result extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
}
interface opc_RiskAppetite_FormattedResult {
}
interface opc_RiskAppetite_Select {
}
interface opc_RiskAppetite_Expand {
}
interface opc_RiskAppetite_Filter {
}
interface opc_RiskAppetite_Create extends opc_RiskAppetite {
}
interface opc_RiskAppetite_Update extends opc_RiskAppetite {
}
interface opc_RiskAssessment_Base extends WebEntity {
}
interface opc_RiskAssessment_Fixed extends WebEntity_Fixed {
  opc_riskassessmentid: string;
}
interface opc_RiskAssessment extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
}
interface opc_RiskAssessment_Relationships {
}
interface opc_RiskAssessment_Result extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
}
interface opc_RiskAssessment_FormattedResult {
}
interface opc_RiskAssessment_Select {
}
interface opc_RiskAssessment_Expand {
}
interface opc_RiskAssessment_Filter {
}
interface opc_RiskAssessment_Create extends opc_RiskAssessment {
}
interface opc_RiskAssessment_Update extends opc_RiskAssessment {
}
interface opc_RiskAssessmentCategory_Base extends WebEntity {
}
interface opc_RiskAssessmentCategory_Fixed extends WebEntity_Fixed {
  opc_riskassessmentcategoryid: string;
}
interface opc_RiskAssessmentCategory extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
}
interface opc_RiskAssessmentCategory_Relationships {
}
interface opc_RiskAssessmentCategory_Result extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
}
interface opc_RiskAssessmentCategory_FormattedResult {
}
interface opc_RiskAssessmentCategory_Select {
}
interface opc_RiskAssessmentCategory_Expand {
}
interface opc_RiskAssessmentCategory_Filter {
}
interface opc_RiskAssessmentCategory_Create extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategory_Update extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategoryTemplate_Base extends WebEntity {
}
interface opc_RiskAssessmentCategoryTemplate_Fixed extends WebEntity_Fixed {
  opc_riskassessmentcategorytemplateid: string;
}
interface opc_RiskAssessmentCategoryTemplate extends opc_RiskAssessmentCategoryTemplate_Base, opc_RiskAssessmentCategoryTemplate_Relationships {
}
interface opc_RiskAssessmentCategoryTemplate_Relationships {
}
interface opc_RiskAssessmentCategoryTemplate_Result extends opc_RiskAssessmentCategoryTemplate_Base, opc_RiskAssessmentCategoryTemplate_Relationships {
}
interface opc_RiskAssessmentCategoryTemplate_FormattedResult {
}
interface opc_RiskAssessmentCategoryTemplate_Select {
}
interface opc_RiskAssessmentCategoryTemplate_Expand {
}
interface opc_RiskAssessmentCategoryTemplate_Filter {
}
interface opc_RiskAssessmentCategoryTemplate_Create extends opc_RiskAssessmentCategoryTemplate {
}
interface opc_RiskAssessmentCategoryTemplate_Update extends opc_RiskAssessmentCategoryTemplate {
}
interface opc_RiskAssessmentDefinition_Base extends WebEntity {
}
interface opc_RiskAssessmentDefinition_Fixed extends WebEntity_Fixed {
  opc_riskassessmentdefinitionid: string;
}
interface opc_RiskAssessmentDefinition extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
}
interface opc_RiskAssessmentDefinition_Relationships {
}
interface opc_RiskAssessmentDefinition_Result extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
}
interface opc_RiskAssessmentDefinition_FormattedResult {
}
interface opc_RiskAssessmentDefinition_Select {
}
interface opc_RiskAssessmentDefinition_Expand {
}
interface opc_RiskAssessmentDefinition_Filter {
}
interface opc_RiskAssessmentDefinition_Create extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinition_Update extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinitionTemplate_Base extends WebEntity {
}
interface opc_RiskAssessmentDefinitionTemplate_Fixed extends WebEntity_Fixed {
  opc_riskassessmentdefinitiontemplateid: string;
}
interface opc_RiskAssessmentDefinitionTemplate extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
}
interface opc_RiskAssessmentDefinitionTemplate_Relationships {
}
interface opc_RiskAssessmentDefinitionTemplate_Result extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
}
interface opc_RiskAssessmentDefinitionTemplate_FormattedResult {
}
interface opc_RiskAssessmentDefinitionTemplate_Select {
}
interface opc_RiskAssessmentDefinitionTemplate_Expand {
}
interface opc_RiskAssessmentDefinitionTemplate_Filter {
}
interface opc_RiskAssessmentDefinitionTemplate_Create extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentDefinitionTemplate_Update extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Base extends WebEntity {
}
interface opc_RiskAssessmentFactorTemplate_Fixed extends WebEntity_Fixed {
  opc_riskassessmentfactortemplateid: string;
}
interface opc_RiskAssessmentFactorTemplate extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
}
interface opc_RiskAssessmentFactorTemplate_Relationships {
}
interface opc_RiskAssessmentFactorTemplate_Result extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
}
interface opc_RiskAssessmentFactorTemplate_FormattedResult {
}
interface opc_RiskAssessmentFactorTemplate_Select {
}
interface opc_RiskAssessmentFactorTemplate_Expand {
}
interface opc_RiskAssessmentFactorTemplate_Filter {
}
interface opc_RiskAssessmentFactorTemplate_Create extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Update extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentType_Base extends WebEntity {
}
interface opc_RiskAssessmentType_Fixed extends WebEntity_Fixed {
  opc_riskassessmenttypeid: string;
}
interface opc_RiskAssessmentType extends opc_RiskAssessmentType_Base, opc_RiskAssessmentType_Relationships {
}
interface opc_RiskAssessmentType_Relationships {
}
interface opc_RiskAssessmentType_Result extends opc_RiskAssessmentType_Base, opc_RiskAssessmentType_Relationships {
}
interface opc_RiskAssessmentType_FormattedResult {
}
interface opc_RiskAssessmentType_Select {
}
interface opc_RiskAssessmentType_Expand {
}
interface opc_RiskAssessmentType_Filter {
}
interface opc_RiskAssessmentType_Create extends opc_RiskAssessmentType {
}
interface opc_RiskAssessmentType_Update extends opc_RiskAssessmentType {
}
interface opc_sector_Base extends WebEntity {
}
interface opc_sector_Fixed extends WebEntity_Fixed {
  opc_sectorid: string;
}
interface opc_sector extends opc_sector_Base, opc_sector_Relationships {
}
interface opc_sector_Relationships {
}
interface opc_sector_Result extends opc_sector_Base, opc_sector_Relationships {
}
interface opc_sector_FormattedResult {
}
interface opc_sector_Select {
}
interface opc_sector_Expand {
}
interface opc_sector_Filter {
}
interface opc_sector_Create extends opc_sector {
}
interface opc_sector_Update extends opc_sector {
}
interface opc_theme_Base extends WebEntity {
}
interface opc_theme_Fixed extends WebEntity_Fixed {
  opc_themeid: string;
}
interface opc_theme extends opc_theme_Base, opc_theme_Relationships {
}
interface opc_theme_Relationships {
}
interface opc_theme_Result extends opc_theme_Base, opc_theme_Relationships {
}
interface opc_theme_FormattedResult {
}
interface opc_theme_Select {
}
interface opc_theme_Expand {
}
interface opc_theme_Filter {
}
interface opc_theme_Create extends opc_theme {
}
interface opc_theme_Update extends opc_theme {
}
interface opc_topic_Base extends WebEntity {
}
interface opc_topic_Fixed extends WebEntity_Fixed {
  opc_topicid: string;
}
interface opc_topic extends opc_topic_Base, opc_topic_Relationships {
}
interface opc_topic_Relationships {
}
interface opc_topic_Result extends opc_topic_Base, opc_topic_Relationships {
}
interface opc_topic_FormattedResult {
}
interface opc_topic_Select {
}
interface opc_topic_Expand {
}
interface opc_topic_Filter {
}
interface opc_topic_Create extends opc_topic {
}
interface opc_topic_Update extends opc_topic {
}
interface QueueItem_Base extends WebEntity {
}
interface QueueItem_Fixed extends WebEntity_Fixed {
  queueitemid: string;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_Relationships {
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_FormattedResult {
}
interface QueueItem_Select {
}
interface QueueItem_Expand {
}
interface QueueItem_Filter {
}
interface QueueItem_Create extends QueueItem {
}
interface QueueItem_Update extends QueueItem {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface Account_Base extends WebEntity {
  accountcategorycode?: account_accountcategorycode | null;
  accountclassificationcode?: account_accountclassificationcode | null;
  accountid?: string | null;
  accountnumber?: string | null;
  accountratingcode?: account_accountratingcode | null;
  address1_addressid?: string | null;
  address1_addresstypecode?: account_address1_addresstypecode | null;
  address1_city?: string | null;
  address1_composite?: string | null;
  address1_country?: string | null;
  address1_county?: string | null;
  address1_fax?: string | null;
  address1_freighttermscode?: account_address1_freighttermscode | null;
  address1_latitude?: number | null;
  address1_line1?: string | null;
  address1_line2?: string | null;
  address1_line3?: string | null;
  address1_longitude?: number | null;
  address1_name?: string | null;
  address1_postalcode?: string | null;
  address1_postofficebox?: string | null;
  address1_primarycontactname?: string | null;
  address1_shippingmethodcode?: account_address1_shippingmethodcode | null;
  address1_stateorprovince?: string | null;
  address1_telephone1?: string | null;
  address1_telephone2?: string | null;
  address1_telephone3?: string | null;
  address1_upszone?: string | null;
  address1_utcoffset?: number | null;
  address2_addressid?: string | null;
  address2_addresstypecode?: account_address2_addresstypecode | null;
  address2_city?: string | null;
  address2_composite?: string | null;
  address2_country?: string | null;
  address2_county?: string | null;
  address2_fax?: string | null;
  address2_freighttermscode?: account_address2_freighttermscode | null;
  address2_latitude?: number | null;
  address2_line1?: string | null;
  address2_line2?: string | null;
  address2_line3?: string | null;
  address2_longitude?: number | null;
  address2_name?: string | null;
  address2_postalcode?: string | null;
  address2_postofficebox?: string | null;
  address2_primarycontactname?: string | null;
  address2_shippingmethodcode?: account_address2_shippingmethodcode | null;
  address2_stateorprovince?: string | null;
  address2_telephone1?: string | null;
  address2_telephone2?: string | null;
  address2_telephone3?: string | null;
  address2_upszone?: string | null;
  address2_utcoffset?: number | null;
  aging30?: number | null;
  aging30_base?: number | null;
  aging60?: number | null;
  aging60_base?: number | null;
  aging90?: number | null;
  aging90_base?: number | null;
  businesstypecode?: account_businesstypecode | null;
  createdon?: Date | null;
  creditlimit?: number | null;
  creditlimit_base?: number | null;
  creditonhold?: boolean | null;
  customersizecode?: account_customersizecode | null;
  customertypecode?: account_customertypecode | null;
  description?: string | null;
  donotbulkemail?: boolean | null;
  donotbulkpostalmail?: boolean | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  donotsendmm?: boolean | null;
  emailaddress1?: string | null;
  emailaddress2?: string | null;
  emailaddress3?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  fax?: string | null;
  followemail?: boolean | null;
  ftpsiteurl?: string | null;
  importsequencenumber?: number | null;
  industrycode?: account_industrycode | null;
  isprivate?: boolean | null;
  lastonholdtime?: Date | null;
  lastusedincampaign?: Date | null;
  marketcap?: number | null;
  marketcap_base?: number | null;
  marketingonly?: boolean | null;
  merged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  numberofemployees?: number | null;
  onholdtime?: number | null;
  overriddencreatedon?: Date | null;
  ownershipcode?: account_ownershipcode | null;
  participatesinworkflow?: boolean | null;
  paymenttermscode?: account_paymenttermscode | null;
  preferredappointmentdaycode?: account_preferredappointmentdaycode | null;
  preferredappointmenttimecode?: account_preferredappointmenttimecode | null;
  preferredcontactmethodcode?: account_preferredcontactmethodcode | null;
  primarysatoriid?: string | null;
  primarytwitterid?: string | null;
  processid?: string | null;
  revenue?: number | null;
  revenue_base?: number | null;
  sharesoutstanding?: number | null;
  shippingmethodcode?: account_shippingmethodcode | null;
  sic?: string | null;
  stageid?: string | null;
  statecode?: account_statecode | null;
  statuscode?: account_statuscode | null;
  stockexchange?: string | null;
  telephone1?: string | null;
  telephone2?: string | null;
  telephone3?: string | null;
  territorycode?: account_territorycode | null;
  tickersymbol?: string | null;
  timespentbymeonemailandmeetings?: string | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  websiteurl?: string | null;
}
interface Account_Relationships {
  account_activity_parties?: ActivityParty_Result[] | null;
  account_connections1?: Connection_Result[] | null;
  account_connections2?: Connection_Result[] | null;
  account_master_account?: Account_Result[] | null;
  account_parent_account?: Account_Result[] | null;
  contact_customer_accounts?: Contact_Result[] | null;
  opc_account_complaints_respondent?: opc_complaint_Result[] | null;
}
interface Account extends Account_Base, Account_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentaccountid_bind$accounts?: string | null;
  preferredsystemuserid_bind$systemusers?: string | null;
  primarycontactid_bind$contacts?: string | null;
  sla_account_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface Account_Select {
  accountcategorycode: WebAttribute<Account_Select, { accountcategorycode: account_accountcategorycode | null }, { accountcategorycode_formatted?: string }>;
  accountclassificationcode: WebAttribute<Account_Select, { accountclassificationcode: account_accountclassificationcode | null }, { accountclassificationcode_formatted?: string }>;
  accountid: WebAttribute<Account_Select, { accountid: string | null }, {  }>;
  accountnumber: WebAttribute<Account_Select, { accountnumber: string | null }, {  }>;
  accountratingcode: WebAttribute<Account_Select, { accountratingcode: account_accountratingcode | null }, { accountratingcode_formatted?: string }>;
  address1_addressid: WebAttribute<Account_Select, { address1_addressid: string | null }, {  }>;
  address1_addresstypecode: WebAttribute<Account_Select, { address1_addresstypecode: account_address1_addresstypecode | null }, { address1_addresstypecode_formatted?: string }>;
  address1_city: WebAttribute<Account_Select, { address1_city: string | null }, {  }>;
  address1_composite: WebAttribute<Account_Select, { address1_composite: string | null }, {  }>;
  address1_country: WebAttribute<Account_Select, { address1_country: string | null }, {  }>;
  address1_county: WebAttribute<Account_Select, { address1_county: string | null }, {  }>;
  address1_fax: WebAttribute<Account_Select, { address1_fax: string | null }, {  }>;
  address1_freighttermscode: WebAttribute<Account_Select, { address1_freighttermscode: account_address1_freighttermscode | null }, { address1_freighttermscode_formatted?: string }>;
  address1_latitude: WebAttribute<Account_Select, { address1_latitude: number | null }, {  }>;
  address1_line1: WebAttribute<Account_Select, { address1_line1: string | null }, {  }>;
  address1_line2: WebAttribute<Account_Select, { address1_line2: string | null }, {  }>;
  address1_line3: WebAttribute<Account_Select, { address1_line3: string | null }, {  }>;
  address1_longitude: WebAttribute<Account_Select, { address1_longitude: number | null }, {  }>;
  address1_name: WebAttribute<Account_Select, { address1_name: string | null }, {  }>;
  address1_postalcode: WebAttribute<Account_Select, { address1_postalcode: string | null }, {  }>;
  address1_postofficebox: WebAttribute<Account_Select, { address1_postofficebox: string | null }, {  }>;
  address1_primarycontactname: WebAttribute<Account_Select, { address1_primarycontactname: string | null }, {  }>;
  address1_shippingmethodcode: WebAttribute<Account_Select, { address1_shippingmethodcode: account_address1_shippingmethodcode | null }, { address1_shippingmethodcode_formatted?: string }>;
  address1_stateorprovince: WebAttribute<Account_Select, { address1_stateorprovince: string | null }, {  }>;
  address1_telephone1: WebAttribute<Account_Select, { address1_telephone1: string | null }, {  }>;
  address1_telephone2: WebAttribute<Account_Select, { address1_telephone2: string | null }, {  }>;
  address1_telephone3: WebAttribute<Account_Select, { address1_telephone3: string | null }, {  }>;
  address1_upszone: WebAttribute<Account_Select, { address1_upszone: string | null }, {  }>;
  address1_utcoffset: WebAttribute<Account_Select, { address1_utcoffset: number | null }, {  }>;
  address2_addressid: WebAttribute<Account_Select, { address2_addressid: string | null }, {  }>;
  address2_addresstypecode: WebAttribute<Account_Select, { address2_addresstypecode: account_address2_addresstypecode | null }, { address2_addresstypecode_formatted?: string }>;
  address2_city: WebAttribute<Account_Select, { address2_city: string | null }, {  }>;
  address2_composite: WebAttribute<Account_Select, { address2_composite: string | null }, {  }>;
  address2_country: WebAttribute<Account_Select, { address2_country: string | null }, {  }>;
  address2_county: WebAttribute<Account_Select, { address2_county: string | null }, {  }>;
  address2_fax: WebAttribute<Account_Select, { address2_fax: string | null }, {  }>;
  address2_freighttermscode: WebAttribute<Account_Select, { address2_freighttermscode: account_address2_freighttermscode | null }, { address2_freighttermscode_formatted?: string }>;
  address2_latitude: WebAttribute<Account_Select, { address2_latitude: number | null }, {  }>;
  address2_line1: WebAttribute<Account_Select, { address2_line1: string | null }, {  }>;
  address2_line2: WebAttribute<Account_Select, { address2_line2: string | null }, {  }>;
  address2_line3: WebAttribute<Account_Select, { address2_line3: string | null }, {  }>;
  address2_longitude: WebAttribute<Account_Select, { address2_longitude: number | null }, {  }>;
  address2_name: WebAttribute<Account_Select, { address2_name: string | null }, {  }>;
  address2_postalcode: WebAttribute<Account_Select, { address2_postalcode: string | null }, {  }>;
  address2_postofficebox: WebAttribute<Account_Select, { address2_postofficebox: string | null }, {  }>;
  address2_primarycontactname: WebAttribute<Account_Select, { address2_primarycontactname: string | null }, {  }>;
  address2_shippingmethodcode: WebAttribute<Account_Select, { address2_shippingmethodcode: account_address2_shippingmethodcode | null }, { address2_shippingmethodcode_formatted?: string }>;
  address2_stateorprovince: WebAttribute<Account_Select, { address2_stateorprovince: string | null }, {  }>;
  address2_telephone1: WebAttribute<Account_Select, { address2_telephone1: string | null }, {  }>;
  address2_telephone2: WebAttribute<Account_Select, { address2_telephone2: string | null }, {  }>;
  address2_telephone3: WebAttribute<Account_Select, { address2_telephone3: string | null }, {  }>;
  address2_upszone: WebAttribute<Account_Select, { address2_upszone: string | null }, {  }>;
  address2_utcoffset: WebAttribute<Account_Select, { address2_utcoffset: number | null }, {  }>;
  aging30: WebAttribute<Account_Select, { aging30: number | null; transactioncurrencyid_guid: string | null }, { aging30_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging30_base: WebAttribute<Account_Select, { aging30_base: number | null; transactioncurrencyid_guid: string | null }, { aging30_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60: WebAttribute<Account_Select, { aging60: number | null; transactioncurrencyid_guid: string | null }, { aging60_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60_base: WebAttribute<Account_Select, { aging60_base: number | null; transactioncurrencyid_guid: string | null }, { aging60_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90: WebAttribute<Account_Select, { aging90: number | null; transactioncurrencyid_guid: string | null }, { aging90_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90_base: WebAttribute<Account_Select, { aging90_base: number | null; transactioncurrencyid_guid: string | null }, { aging90_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  businesstypecode: WebAttribute<Account_Select, { businesstypecode: account_businesstypecode | null }, { businesstypecode_formatted?: string }>;
  createdby_guid: WebAttribute<Account_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<Account_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<Account_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Account_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  creditlimit: WebAttribute<Account_Select, { creditlimit: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditlimit_base: WebAttribute<Account_Select, { creditlimit_base: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditonhold: WebAttribute<Account_Select, { creditonhold: boolean | null }, {  }>;
  customersizecode: WebAttribute<Account_Select, { customersizecode: account_customersizecode | null }, { customersizecode_formatted?: string }>;
  customertypecode: WebAttribute<Account_Select, { customertypecode: account_customertypecode | null }, { customertypecode_formatted?: string }>;
  description: WebAttribute<Account_Select, { description: string | null }, {  }>;
  donotbulkemail: WebAttribute<Account_Select, { donotbulkemail: boolean | null }, {  }>;
  donotbulkpostalmail: WebAttribute<Account_Select, { donotbulkpostalmail: boolean | null }, {  }>;
  donotemail: WebAttribute<Account_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<Account_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<Account_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<Account_Select, { donotpostalmail: boolean | null }, {  }>;
  donotsendmm: WebAttribute<Account_Select, { donotsendmm: boolean | null }, {  }>;
  emailaddress1: WebAttribute<Account_Select, { emailaddress1: string | null }, {  }>;
  emailaddress2: WebAttribute<Account_Select, { emailaddress2: string | null }, {  }>;
  emailaddress3: WebAttribute<Account_Select, { emailaddress3: string | null }, {  }>;
  entityimageid: WebAttribute<Account_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Account_Select, { exchangerate: number | null }, {  }>;
  fax: WebAttribute<Account_Select, { fax: string | null }, {  }>;
  followemail: WebAttribute<Account_Select, { followemail: boolean | null }, {  }>;
  ftpsiteurl: WebAttribute<Account_Select, { ftpsiteurl: string | null }, {  }>;
  importsequencenumber: WebAttribute<Account_Select, { importsequencenumber: number | null }, {  }>;
  industrycode: WebAttribute<Account_Select, { industrycode: account_industrycode | null }, { industrycode_formatted?: string }>;
  isprivate: WebAttribute<Account_Select, { isprivate: boolean | null }, {  }>;
  lastonholdtime: WebAttribute<Account_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  lastusedincampaign: WebAttribute<Account_Select, { lastusedincampaign: Date | null }, { lastusedincampaign_formatted?: string }>;
  marketcap: WebAttribute<Account_Select, { marketcap: number | null; transactioncurrencyid_guid: string | null }, { marketcap_formatted?: string; transactioncurrencyid_formatted?: string }>;
  marketcap_base: WebAttribute<Account_Select, { marketcap_base: number | null; transactioncurrencyid_guid: string | null }, { marketcap_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  marketingonly: WebAttribute<Account_Select, { marketingonly: boolean | null }, {  }>;
  masterid_guid: WebAttribute<Account_Select, { masterid_guid: string | null }, { masterid_formatted?: string }>;
  merged: WebAttribute<Account_Select, { merged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Account_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<Account_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<Account_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Account_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Account_Select, { name: string | null }, {  }>;
  numberofemployees: WebAttribute<Account_Select, { numberofemployees: number | null }, {  }>;
  onholdtime: WebAttribute<Account_Select, { onholdtime: number | null }, {  }>;
  overriddencreatedon: WebAttribute<Account_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Account_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  ownershipcode: WebAttribute<Account_Select, { ownershipcode: account_ownershipcode | null }, { ownershipcode_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Account_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Account_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Account_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentaccountid_guid: WebAttribute<Account_Select, { parentaccountid_guid: string | null }, { parentaccountid_formatted?: string }>;
  participatesinworkflow: WebAttribute<Account_Select, { participatesinworkflow: boolean | null }, {  }>;
  paymenttermscode: WebAttribute<Account_Select, { paymenttermscode: account_paymenttermscode | null }, { paymenttermscode_formatted?: string }>;
  preferredappointmentdaycode: WebAttribute<Account_Select, { preferredappointmentdaycode: account_preferredappointmentdaycode | null }, { preferredappointmentdaycode_formatted?: string }>;
  preferredappointmenttimecode: WebAttribute<Account_Select, { preferredappointmenttimecode: account_preferredappointmenttimecode | null }, { preferredappointmenttimecode_formatted?: string }>;
  preferredcontactmethodcode: WebAttribute<Account_Select, { preferredcontactmethodcode: account_preferredcontactmethodcode | null }, { preferredcontactmethodcode_formatted?: string }>;
  preferredsystemuserid_guid: WebAttribute<Account_Select, { preferredsystemuserid_guid: string | null }, { preferredsystemuserid_formatted?: string }>;
  primarycontactid_guid: WebAttribute<Account_Select, { primarycontactid_guid: string | null }, { primarycontactid_formatted?: string }>;
  primarysatoriid: WebAttribute<Account_Select, { primarysatoriid: string | null }, {  }>;
  primarytwitterid: WebAttribute<Account_Select, { primarytwitterid: string | null }, {  }>;
  processid: WebAttribute<Account_Select, { processid: string | null }, {  }>;
  revenue: WebAttribute<Account_Select, { revenue: number | null; transactioncurrencyid_guid: string | null }, { revenue_formatted?: string; transactioncurrencyid_formatted?: string }>;
  revenue_base: WebAttribute<Account_Select, { revenue_base: number | null; transactioncurrencyid_guid: string | null }, { revenue_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  sharesoutstanding: WebAttribute<Account_Select, { sharesoutstanding: number | null }, {  }>;
  shippingmethodcode: WebAttribute<Account_Select, { shippingmethodcode: account_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  sic: WebAttribute<Account_Select, { sic: string | null }, {  }>;
  slaid_guid: WebAttribute<Account_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Account_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  stageid: WebAttribute<Account_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Account_Select, { statecode: account_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Account_Select, { statuscode: account_statuscode | null }, { statuscode_formatted?: string }>;
  stockexchange: WebAttribute<Account_Select, { stockexchange: string | null }, {  }>;
  telephone1: WebAttribute<Account_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<Account_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<Account_Select, { telephone3: string | null }, {  }>;
  territorycode: WebAttribute<Account_Select, { territorycode: account_territorycode | null }, { territorycode_formatted?: string }>;
  tickersymbol: WebAttribute<Account_Select, { tickersymbol: string | null }, {  }>;
  timespentbymeonemailandmeetings: WebAttribute<Account_Select, { timespentbymeonemailandmeetings: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Account_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Account_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Account_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Account_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Account_Select, { versionnumber: number | null }, {  }>;
  websiteurl: WebAttribute<Account_Select, { websiteurl: string | null }, {  }>;
}
interface Account_Filter {
  accountcategorycode: account_accountcategorycode;
  accountclassificationcode: account_accountclassificationcode;
  accountid: XQW.Guid;
  accountnumber: string;
  accountratingcode: account_accountratingcode;
  address1_addressid: XQW.Guid;
  address1_addresstypecode: account_address1_addresstypecode;
  address1_city: string;
  address1_composite: string;
  address1_country: string;
  address1_county: string;
  address1_fax: string;
  address1_freighttermscode: account_address1_freighttermscode;
  address1_latitude: number;
  address1_line1: string;
  address1_line2: string;
  address1_line3: string;
  address1_longitude: number;
  address1_name: string;
  address1_postalcode: string;
  address1_postofficebox: string;
  address1_primarycontactname: string;
  address1_shippingmethodcode: account_address1_shippingmethodcode;
  address1_stateorprovince: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_upszone: string;
  address1_utcoffset: number;
  address2_addressid: XQW.Guid;
  address2_addresstypecode: account_address2_addresstypecode;
  address2_city: string;
  address2_composite: string;
  address2_country: string;
  address2_county: string;
  address2_fax: string;
  address2_freighttermscode: account_address2_freighttermscode;
  address2_latitude: number;
  address2_line1: string;
  address2_line2: string;
  address2_line3: string;
  address2_longitude: number;
  address2_name: string;
  address2_postalcode: string;
  address2_postofficebox: string;
  address2_primarycontactname: string;
  address2_shippingmethodcode: account_address2_shippingmethodcode;
  address2_stateorprovince: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address2_upszone: string;
  address2_utcoffset: number;
  aging30: number;
  aging30_base: number;
  aging60: number;
  aging60_base: number;
  aging90: number;
  aging90_base: number;
  businesstypecode: account_businesstypecode;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  creditlimit: number;
  creditlimit_base: number;
  creditonhold: boolean;
  customersizecode: account_customersizecode;
  customertypecode: account_customertypecode;
  description: string;
  donotbulkemail: boolean;
  donotbulkpostalmail: boolean;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  donotsendmm: boolean;
  emailaddress1: string;
  emailaddress2: string;
  emailaddress3: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  fax: string;
  followemail: boolean;
  ftpsiteurl: string;
  importsequencenumber: number;
  industrycode: account_industrycode;
  isprivate: boolean;
  lastonholdtime: Date;
  lastusedincampaign: Date;
  marketcap: number;
  marketcap_base: number;
  marketingonly: boolean;
  masterid_guid: XQW.Guid;
  merged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  numberofemployees: number;
  onholdtime: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  ownershipcode: account_ownershipcode;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentaccountid_guid: XQW.Guid;
  participatesinworkflow: boolean;
  paymenttermscode: account_paymenttermscode;
  preferredappointmentdaycode: account_preferredappointmentdaycode;
  preferredappointmenttimecode: account_preferredappointmenttimecode;
  preferredcontactmethodcode: account_preferredcontactmethodcode;
  preferredsystemuserid_guid: XQW.Guid;
  primarycontactid_guid: XQW.Guid;
  primarysatoriid: string;
  primarytwitterid: string;
  processid: XQW.Guid;
  revenue: number;
  revenue_base: number;
  sharesoutstanding: number;
  shippingmethodcode: account_shippingmethodcode;
  sic: string;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: account_statecode;
  statuscode: account_statuscode;
  stockexchange: string;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  territorycode: account_territorycode;
  tickersymbol: string;
  timespentbymeonemailandmeetings: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  websiteurl: string;
}
interface Account_Expand {
  account_activity_parties: WebExpand<Account_Expand, ActivityParty_Select, ActivityParty_Filter, { account_activity_parties: ActivityParty_Result[] }>;
  account_connections1: WebExpand<Account_Expand, Connection_Select, Connection_Filter, { account_connections1: Connection_Result[] }>;
  account_connections2: WebExpand<Account_Expand, Connection_Select, Connection_Filter, { account_connections2: Connection_Result[] }>;
  account_master_account: WebExpand<Account_Expand, Account_Select, Account_Filter, { account_master_account: Account_Result[] }>;
  account_parent_account: WebExpand<Account_Expand, Account_Select, Account_Filter, { account_parent_account: Account_Result[] }>;
  contact_customer_accounts: WebExpand<Account_Expand, Contact_Select, Contact_Filter, { contact_customer_accounts: Contact_Result[] }>;
  masterid: WebExpand<Account_Expand, Account_Select, Account_Filter, { masterid: Account_Result }>;
  opc_account_complaints_respondent: WebExpand<Account_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_account_complaints_respondent: opc_complaint_Result[] }>;
  parentaccountid: WebExpand<Account_Expand, Account_Select, Account_Filter, { parentaccountid: Account_Result }>;
  primarycontactid: WebExpand<Account_Expand, Contact_Select, Contact_Filter, { primarycontactid: Contact_Result }>;
}
interface Account_FormattedResult {
  accountcategorycode_formatted?: string;
  accountclassificationcode_formatted?: string;
  accountratingcode_formatted?: string;
  address1_addresstypecode_formatted?: string;
  address1_freighttermscode_formatted?: string;
  address1_shippingmethodcode_formatted?: string;
  address2_addresstypecode_formatted?: string;
  address2_freighttermscode_formatted?: string;
  address2_shippingmethodcode_formatted?: string;
  aging30_base_formatted?: string;
  aging30_formatted?: string;
  aging60_base_formatted?: string;
  aging60_formatted?: string;
  aging90_base_formatted?: string;
  aging90_formatted?: string;
  businesstypecode_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  creditlimit_base_formatted?: string;
  creditlimit_formatted?: string;
  customersizecode_formatted?: string;
  customertypecode_formatted?: string;
  industrycode_formatted?: string;
  lastonholdtime_formatted?: string;
  lastusedincampaign_formatted?: string;
  marketcap_base_formatted?: string;
  marketcap_formatted?: string;
  masterid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  ownershipcode_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentaccountid_formatted?: string;
  paymenttermscode_formatted?: string;
  preferredappointmentdaycode_formatted?: string;
  preferredappointmenttimecode_formatted?: string;
  preferredcontactmethodcode_formatted?: string;
  preferredsystemuserid_formatted?: string;
  primarycontactid_formatted?: string;
  revenue_base_formatted?: string;
  revenue_formatted?: string;
  shippingmethodcode_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  territorycode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Account_Result extends Account_Base, Account_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  masterid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentaccountid_guid: string | null;
  preferredsystemuserid_guid: string | null;
  primarycontactid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Account_RelatedOne {
  masterid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  parentaccountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  primarycontactid: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface Account_RelatedMany {
  account_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  account_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  account_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  account_master_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  account_parent_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  contact_customer_accounts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_account_complaints_respondent: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface WebEntitiesRelated {
  accounts: WebMappingRelated<Account_RelatedOne,Account_RelatedMany>;
}
interface WebEntitiesCUDA {
  accounts: WebMappingCUDA<Account_Create,Account_Update,Account_Select>;
}
interface Contact_Base extends WebEntity {
  accountrolecode?: contact_accountrolecode | null;
  address1_addressid?: string | null;
  address1_addresstypecode?: contact_address1_addresstypecode | null;
  address1_city?: string | null;
  address1_composite?: string | null;
  address1_country?: string | null;
  address1_county?: string | null;
  address1_fax?: string | null;
  address1_freighttermscode?: contact_address1_freighttermscode | null;
  address1_latitude?: number | null;
  address1_line1?: string | null;
  address1_line2?: string | null;
  address1_line3?: string | null;
  address1_longitude?: number | null;
  address1_name?: string | null;
  address1_postalcode?: string | null;
  address1_postofficebox?: string | null;
  address1_primarycontactname?: string | null;
  address1_shippingmethodcode?: contact_address1_shippingmethodcode | null;
  address1_stateorprovince?: string | null;
  address1_telephone1?: string | null;
  address1_telephone2?: string | null;
  address1_telephone3?: string | null;
  address1_upszone?: string | null;
  address1_utcoffset?: number | null;
  address2_addressid?: string | null;
  address2_addresstypecode?: contact_address2_addresstypecode | null;
  address2_city?: string | null;
  address2_composite?: string | null;
  address2_country?: string | null;
  address2_county?: string | null;
  address2_fax?: string | null;
  address2_freighttermscode?: contact_address2_freighttermscode | null;
  address2_latitude?: number | null;
  address2_line1?: string | null;
  address2_line2?: string | null;
  address2_line3?: string | null;
  address2_longitude?: number | null;
  address2_name?: string | null;
  address2_postalcode?: string | null;
  address2_postofficebox?: string | null;
  address2_primarycontactname?: string | null;
  address2_shippingmethodcode?: contact_address2_shippingmethodcode | null;
  address2_stateorprovince?: string | null;
  address2_telephone1?: string | null;
  address2_telephone2?: string | null;
  address2_telephone3?: string | null;
  address2_upszone?: string | null;
  address2_utcoffset?: number | null;
  address3_addressid?: string | null;
  address3_addresstypecode?: contact_address3_addresstypecode | null;
  address3_city?: string | null;
  address3_composite?: string | null;
  address3_country?: string | null;
  address3_county?: string | null;
  address3_fax?: string | null;
  address3_freighttermscode?: contact_address3_freighttermscode | null;
  address3_latitude?: number | null;
  address3_line1?: string | null;
  address3_line2?: string | null;
  address3_line3?: string | null;
  address3_longitude?: number | null;
  address3_name?: string | null;
  address3_postalcode?: string | null;
  address3_postofficebox?: string | null;
  address3_primarycontactname?: string | null;
  address3_shippingmethodcode?: contact_address3_shippingmethodcode | null;
  address3_stateorprovince?: string | null;
  address3_telephone1?: string | null;
  address3_telephone2?: string | null;
  address3_telephone3?: string | null;
  address3_upszone?: string | null;
  address3_utcoffset?: number | null;
  aging30?: number | null;
  aging30_base?: number | null;
  aging60?: number | null;
  aging60_base?: number | null;
  aging90?: number | null;
  aging90_base?: number | null;
  anniversary?: Date | null;
  annualincome?: number | null;
  annualincome_base?: number | null;
  assistantname?: string | null;
  assistantphone?: string | null;
  birthdate?: Date | null;
  business2?: string | null;
  callback?: string | null;
  childrensnames?: string | null;
  company?: string | null;
  contactid?: string | null;
  createdon?: Date | null;
  creditlimit?: number | null;
  creditlimit_base?: number | null;
  creditonhold?: boolean | null;
  customersizecode?: contact_customersizecode | null;
  customertypecode?: contact_customertypecode | null;
  department?: string | null;
  description?: string | null;
  donotbulkemail?: boolean | null;
  donotbulkpostalmail?: boolean | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  donotsendmm?: boolean | null;
  educationcode?: contact_educationcode | null;
  emailaddress1?: string | null;
  emailaddress2?: string | null;
  emailaddress3?: string | null;
  employeeid?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  externaluseridentifier?: string | null;
  familystatuscode?: contact_familystatuscode | null;
  fax?: string | null;
  firstname?: string | null;
  followemail?: boolean | null;
  ftpsiteurl?: string | null;
  fullname?: string | null;
  gendercode?: contact_gendercode | null;
  governmentid?: string | null;
  haschildrencode?: contact_haschildrencode | null;
  home2?: string | null;
  importsequencenumber?: number | null;
  isautocreate?: boolean | null;
  isbackofficecustomer?: boolean | null;
  isprivate?: boolean | null;
  jobtitle?: string | null;
  lastname?: string | null;
  lastonholdtime?: Date | null;
  lastusedincampaign?: Date | null;
  leadsourcecode?: contact_leadsourcecode | null;
  managername?: string | null;
  managerphone?: string | null;
  marketingonly?: boolean | null;
  merged?: boolean | null;
  middlename?: string | null;
  mobilephone?: string | null;
  modifiedon?: Date | null;
  nickname?: string | null;
  numberofchildren?: number | null;
  onholdtime?: number | null;
  opc_duplicatedetectionresult?: opc_duplicatedetectionresult | null;
  opc_multiplecomplaintstrategy?: opc_multiplecomplaintstrategy | null;
  overriddencreatedon?: Date | null;
  pager?: string | null;
  participatesinworkflow?: boolean | null;
  paymenttermscode?: contact_paymenttermscode | null;
  preferredappointmentdaycode?: contact_preferredappointmentdaycode | null;
  preferredappointmenttimecode?: contact_preferredappointmenttimecode | null;
  preferredcontactmethodcode?: contact_preferredcontactmethodcode | null;
  processid?: string | null;
  salutation?: string | null;
  shippingmethodcode?: contact_shippingmethodcode | null;
  spousesname?: string | null;
  stageid?: string | null;
  statecode?: contact_statecode | null;
  statuscode?: contact_statuscode | null;
  subscriptionid?: string | null;
  suffix?: string | null;
  telephone1?: string | null;
  telephone2?: string | null;
  telephone3?: string | null;
  territorycode?: contact_territorycode | null;
  timespentbymeonemailandmeetings?: string | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  websiteurl?: string | null;
}
interface Contact_Relationships {
  account_primary_contact?: Account_Result[] | null;
  contact_activity_parties?: ActivityParty_Result[] | null;
  contact_connections1?: Connection_Result[] | null;
  contact_connections2?: Connection_Result[] | null;
  contact_customer_contacts?: Contact_Result[] | null;
  contact_master_contact?: Contact_Result[] | null;
  opc_contact_complaints_complainant?: opc_complaint_Result[] | null;
  opc_contact_complaints_complainantreps?: opc_complaint_Result[] | null;
  parentcustomerid_account?: Account_Result | null;
  parentcustomerid_contact?: Contact_Result | null;
}
interface Contact extends Contact_Base, Contact_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentcustomerid_account_bind$accounts?: string | null;
  parentcustomerid_contact_bind$contacts?: string | null;
  preferredsystemuserid_bind$systemusers?: string | null;
  sla_contact_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface Contact_Select {
  accountid_guid: WebAttribute<Contact_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
  accountrolecode: WebAttribute<Contact_Select, { accountrolecode: contact_accountrolecode | null }, { accountrolecode_formatted?: string }>;
  address1_addressid: WebAttribute<Contact_Select, { address1_addressid: string | null }, {  }>;
  address1_addresstypecode: WebAttribute<Contact_Select, { address1_addresstypecode: contact_address1_addresstypecode | null }, { address1_addresstypecode_formatted?: string }>;
  address1_city: WebAttribute<Contact_Select, { address1_city: string | null }, {  }>;
  address1_composite: WebAttribute<Contact_Select, { address1_composite: string | null }, {  }>;
  address1_country: WebAttribute<Contact_Select, { address1_country: string | null }, {  }>;
  address1_county: WebAttribute<Contact_Select, { address1_county: string | null }, {  }>;
  address1_fax: WebAttribute<Contact_Select, { address1_fax: string | null }, {  }>;
  address1_freighttermscode: WebAttribute<Contact_Select, { address1_freighttermscode: contact_address1_freighttermscode | null }, { address1_freighttermscode_formatted?: string }>;
  address1_latitude: WebAttribute<Contact_Select, { address1_latitude: number | null }, {  }>;
  address1_line1: WebAttribute<Contact_Select, { address1_line1: string | null }, {  }>;
  address1_line2: WebAttribute<Contact_Select, { address1_line2: string | null }, {  }>;
  address1_line3: WebAttribute<Contact_Select, { address1_line3: string | null }, {  }>;
  address1_longitude: WebAttribute<Contact_Select, { address1_longitude: number | null }, {  }>;
  address1_name: WebAttribute<Contact_Select, { address1_name: string | null }, {  }>;
  address1_postalcode: WebAttribute<Contact_Select, { address1_postalcode: string | null }, {  }>;
  address1_postofficebox: WebAttribute<Contact_Select, { address1_postofficebox: string | null }, {  }>;
  address1_primarycontactname: WebAttribute<Contact_Select, { address1_primarycontactname: string | null }, {  }>;
  address1_shippingmethodcode: WebAttribute<Contact_Select, { address1_shippingmethodcode: contact_address1_shippingmethodcode | null }, { address1_shippingmethodcode_formatted?: string }>;
  address1_stateorprovince: WebAttribute<Contact_Select, { address1_stateorprovince: string | null }, {  }>;
  address1_telephone1: WebAttribute<Contact_Select, { address1_telephone1: string | null }, {  }>;
  address1_telephone2: WebAttribute<Contact_Select, { address1_telephone2: string | null }, {  }>;
  address1_telephone3: WebAttribute<Contact_Select, { address1_telephone3: string | null }, {  }>;
  address1_upszone: WebAttribute<Contact_Select, { address1_upszone: string | null }, {  }>;
  address1_utcoffset: WebAttribute<Contact_Select, { address1_utcoffset: number | null }, {  }>;
  address2_addressid: WebAttribute<Contact_Select, { address2_addressid: string | null }, {  }>;
  address2_addresstypecode: WebAttribute<Contact_Select, { address2_addresstypecode: contact_address2_addresstypecode | null }, { address2_addresstypecode_formatted?: string }>;
  address2_city: WebAttribute<Contact_Select, { address2_city: string | null }, {  }>;
  address2_composite: WebAttribute<Contact_Select, { address2_composite: string | null }, {  }>;
  address2_country: WebAttribute<Contact_Select, { address2_country: string | null }, {  }>;
  address2_county: WebAttribute<Contact_Select, { address2_county: string | null }, {  }>;
  address2_fax: WebAttribute<Contact_Select, { address2_fax: string | null }, {  }>;
  address2_freighttermscode: WebAttribute<Contact_Select, { address2_freighttermscode: contact_address2_freighttermscode | null }, { address2_freighttermscode_formatted?: string }>;
  address2_latitude: WebAttribute<Contact_Select, { address2_latitude: number | null }, {  }>;
  address2_line1: WebAttribute<Contact_Select, { address2_line1: string | null }, {  }>;
  address2_line2: WebAttribute<Contact_Select, { address2_line2: string | null }, {  }>;
  address2_line3: WebAttribute<Contact_Select, { address2_line3: string | null }, {  }>;
  address2_longitude: WebAttribute<Contact_Select, { address2_longitude: number | null }, {  }>;
  address2_name: WebAttribute<Contact_Select, { address2_name: string | null }, {  }>;
  address2_postalcode: WebAttribute<Contact_Select, { address2_postalcode: string | null }, {  }>;
  address2_postofficebox: WebAttribute<Contact_Select, { address2_postofficebox: string | null }, {  }>;
  address2_primarycontactname: WebAttribute<Contact_Select, { address2_primarycontactname: string | null }, {  }>;
  address2_shippingmethodcode: WebAttribute<Contact_Select, { address2_shippingmethodcode: contact_address2_shippingmethodcode | null }, { address2_shippingmethodcode_formatted?: string }>;
  address2_stateorprovince: WebAttribute<Contact_Select, { address2_stateorprovince: string | null }, {  }>;
  address2_telephone1: WebAttribute<Contact_Select, { address2_telephone1: string | null }, {  }>;
  address2_telephone2: WebAttribute<Contact_Select, { address2_telephone2: string | null }, {  }>;
  address2_telephone3: WebAttribute<Contact_Select, { address2_telephone3: string | null }, {  }>;
  address2_upszone: WebAttribute<Contact_Select, { address2_upszone: string | null }, {  }>;
  address2_utcoffset: WebAttribute<Contact_Select, { address2_utcoffset: number | null }, {  }>;
  address3_addressid: WebAttribute<Contact_Select, { address3_addressid: string | null }, {  }>;
  address3_addresstypecode: WebAttribute<Contact_Select, { address3_addresstypecode: contact_address3_addresstypecode | null }, { address3_addresstypecode_formatted?: string }>;
  address3_city: WebAttribute<Contact_Select, { address3_city: string | null }, {  }>;
  address3_composite: WebAttribute<Contact_Select, { address3_composite: string | null }, {  }>;
  address3_country: WebAttribute<Contact_Select, { address3_country: string | null }, {  }>;
  address3_county: WebAttribute<Contact_Select, { address3_county: string | null }, {  }>;
  address3_fax: WebAttribute<Contact_Select, { address3_fax: string | null }, {  }>;
  address3_freighttermscode: WebAttribute<Contact_Select, { address3_freighttermscode: contact_address3_freighttermscode | null }, { address3_freighttermscode_formatted?: string }>;
  address3_latitude: WebAttribute<Contact_Select, { address3_latitude: number | null }, {  }>;
  address3_line1: WebAttribute<Contact_Select, { address3_line1: string | null }, {  }>;
  address3_line2: WebAttribute<Contact_Select, { address3_line2: string | null }, {  }>;
  address3_line3: WebAttribute<Contact_Select, { address3_line3: string | null }, {  }>;
  address3_longitude: WebAttribute<Contact_Select, { address3_longitude: number | null }, {  }>;
  address3_name: WebAttribute<Contact_Select, { address3_name: string | null }, {  }>;
  address3_postalcode: WebAttribute<Contact_Select, { address3_postalcode: string | null }, {  }>;
  address3_postofficebox: WebAttribute<Contact_Select, { address3_postofficebox: string | null }, {  }>;
  address3_primarycontactname: WebAttribute<Contact_Select, { address3_primarycontactname: string | null }, {  }>;
  address3_shippingmethodcode: WebAttribute<Contact_Select, { address3_shippingmethodcode: contact_address3_shippingmethodcode | null }, { address3_shippingmethodcode_formatted?: string }>;
  address3_stateorprovince: WebAttribute<Contact_Select, { address3_stateorprovince: string | null }, {  }>;
  address3_telephone1: WebAttribute<Contact_Select, { address3_telephone1: string | null }, {  }>;
  address3_telephone2: WebAttribute<Contact_Select, { address3_telephone2: string | null }, {  }>;
  address3_telephone3: WebAttribute<Contact_Select, { address3_telephone3: string | null }, {  }>;
  address3_upszone: WebAttribute<Contact_Select, { address3_upszone: string | null }, {  }>;
  address3_utcoffset: WebAttribute<Contact_Select, { address3_utcoffset: number | null }, {  }>;
  aging30: WebAttribute<Contact_Select, { aging30: number | null; transactioncurrencyid_guid: string | null }, { aging30_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging30_base: WebAttribute<Contact_Select, { aging30_base: number | null; transactioncurrencyid_guid: string | null }, { aging30_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60: WebAttribute<Contact_Select, { aging60: number | null; transactioncurrencyid_guid: string | null }, { aging60_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging60_base: WebAttribute<Contact_Select, { aging60_base: number | null; transactioncurrencyid_guid: string | null }, { aging60_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90: WebAttribute<Contact_Select, { aging90: number | null; transactioncurrencyid_guid: string | null }, { aging90_formatted?: string; transactioncurrencyid_formatted?: string }>;
  aging90_base: WebAttribute<Contact_Select, { aging90_base: number | null; transactioncurrencyid_guid: string | null }, { aging90_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  anniversary: WebAttribute<Contact_Select, { anniversary: Date | null }, { anniversary_formatted?: string }>;
  annualincome: WebAttribute<Contact_Select, { annualincome: number | null; transactioncurrencyid_guid: string | null }, { annualincome_formatted?: string; transactioncurrencyid_formatted?: string }>;
  annualincome_base: WebAttribute<Contact_Select, { annualincome_base: number | null; transactioncurrencyid_guid: string | null }, { annualincome_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  assistantname: WebAttribute<Contact_Select, { assistantname: string | null }, {  }>;
  assistantphone: WebAttribute<Contact_Select, { assistantphone: string | null }, {  }>;
  birthdate: WebAttribute<Contact_Select, { birthdate: Date | null }, { birthdate_formatted?: string }>;
  business2: WebAttribute<Contact_Select, { business2: string | null }, {  }>;
  callback: WebAttribute<Contact_Select, { callback: string | null }, {  }>;
  childrensnames: WebAttribute<Contact_Select, { childrensnames: string | null }, {  }>;
  company: WebAttribute<Contact_Select, { company: string | null }, {  }>;
  contactid: WebAttribute<Contact_Select, { contactid: string | null }, {  }>;
  createdby_guid: WebAttribute<Contact_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<Contact_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<Contact_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Contact_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  creditlimit: WebAttribute<Contact_Select, { creditlimit: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditlimit_base: WebAttribute<Contact_Select, { creditlimit_base: number | null; transactioncurrencyid_guid: string | null }, { creditlimit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  creditonhold: WebAttribute<Contact_Select, { creditonhold: boolean | null }, {  }>;
  customersizecode: WebAttribute<Contact_Select, { customersizecode: contact_customersizecode | null }, { customersizecode_formatted?: string }>;
  customertypecode: WebAttribute<Contact_Select, { customertypecode: contact_customertypecode | null }, { customertypecode_formatted?: string }>;
  department: WebAttribute<Contact_Select, { department: string | null }, {  }>;
  description: WebAttribute<Contact_Select, { description: string | null }, {  }>;
  donotbulkemail: WebAttribute<Contact_Select, { donotbulkemail: boolean | null }, {  }>;
  donotbulkpostalmail: WebAttribute<Contact_Select, { donotbulkpostalmail: boolean | null }, {  }>;
  donotemail: WebAttribute<Contact_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<Contact_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<Contact_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<Contact_Select, { donotpostalmail: boolean | null }, {  }>;
  donotsendmm: WebAttribute<Contact_Select, { donotsendmm: boolean | null }, {  }>;
  educationcode: WebAttribute<Contact_Select, { educationcode: contact_educationcode | null }, { educationcode_formatted?: string }>;
  emailaddress1: WebAttribute<Contact_Select, { emailaddress1: string | null }, {  }>;
  emailaddress2: WebAttribute<Contact_Select, { emailaddress2: string | null }, {  }>;
  emailaddress3: WebAttribute<Contact_Select, { emailaddress3: string | null }, {  }>;
  employeeid: WebAttribute<Contact_Select, { employeeid: string | null }, {  }>;
  entityimageid: WebAttribute<Contact_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Contact_Select, { exchangerate: number | null }, {  }>;
  externaluseridentifier: WebAttribute<Contact_Select, { externaluseridentifier: string | null }, {  }>;
  familystatuscode: WebAttribute<Contact_Select, { familystatuscode: contact_familystatuscode | null }, { familystatuscode_formatted?: string }>;
  fax: WebAttribute<Contact_Select, { fax: string | null }, {  }>;
  firstname: WebAttribute<Contact_Select, { firstname: string | null }, {  }>;
  followemail: WebAttribute<Contact_Select, { followemail: boolean | null }, {  }>;
  ftpsiteurl: WebAttribute<Contact_Select, { ftpsiteurl: string | null }, {  }>;
  fullname: WebAttribute<Contact_Select, { fullname: string | null }, {  }>;
  gendercode: WebAttribute<Contact_Select, { gendercode: contact_gendercode | null }, { gendercode_formatted?: string }>;
  governmentid: WebAttribute<Contact_Select, { governmentid: string | null }, {  }>;
  haschildrencode: WebAttribute<Contact_Select, { haschildrencode: contact_haschildrencode | null }, { haschildrencode_formatted?: string }>;
  home2: WebAttribute<Contact_Select, { home2: string | null }, {  }>;
  importsequencenumber: WebAttribute<Contact_Select, { importsequencenumber: number | null }, {  }>;
  isautocreate: WebAttribute<Contact_Select, { isautocreate: boolean | null }, {  }>;
  isbackofficecustomer: WebAttribute<Contact_Select, { isbackofficecustomer: boolean | null }, {  }>;
  isprivate: WebAttribute<Contact_Select, { isprivate: boolean | null }, {  }>;
  jobtitle: WebAttribute<Contact_Select, { jobtitle: string | null }, {  }>;
  lastname: WebAttribute<Contact_Select, { lastname: string | null }, {  }>;
  lastonholdtime: WebAttribute<Contact_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  lastusedincampaign: WebAttribute<Contact_Select, { lastusedincampaign: Date | null }, { lastusedincampaign_formatted?: string }>;
  leadsourcecode: WebAttribute<Contact_Select, { leadsourcecode: contact_leadsourcecode | null }, { leadsourcecode_formatted?: string }>;
  managername: WebAttribute<Contact_Select, { managername: string | null }, {  }>;
  managerphone: WebAttribute<Contact_Select, { managerphone: string | null }, {  }>;
  marketingonly: WebAttribute<Contact_Select, { marketingonly: boolean | null }, {  }>;
  masterid_guid: WebAttribute<Contact_Select, { masterid_guid: string | null }, { masterid_formatted?: string }>;
  merged: WebAttribute<Contact_Select, { merged: boolean | null }, {  }>;
  middlename: WebAttribute<Contact_Select, { middlename: string | null }, {  }>;
  mobilephone: WebAttribute<Contact_Select, { mobilephone: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Contact_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<Contact_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<Contact_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Contact_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  nickname: WebAttribute<Contact_Select, { nickname: string | null }, {  }>;
  numberofchildren: WebAttribute<Contact_Select, { numberofchildren: number | null }, {  }>;
  onholdtime: WebAttribute<Contact_Select, { onholdtime: number | null }, {  }>;
  opc_duplicatedetectionresult: WebAttribute<Contact_Select, { opc_duplicatedetectionresult: opc_duplicatedetectionresult | null }, { opc_duplicatedetectionresult_formatted?: string }>;
  opc_multiplecomplaintstrategy: WebAttribute<Contact_Select, { opc_multiplecomplaintstrategy: opc_multiplecomplaintstrategy | null }, { opc_multiplecomplaintstrategy_formatted?: string }>;
  overriddencreatedon: WebAttribute<Contact_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Contact_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Contact_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Contact_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Contact_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  pager: WebAttribute<Contact_Select, { pager: string | null }, {  }>;
  parentcontactid_guid: WebAttribute<Contact_Select, { parentcontactid_guid: string | null }, { parentcontactid_formatted?: string }>;
  parentcustomerid_guid: WebAttribute<Contact_Select, { parentcustomerid_guid: string | null }, { parentcustomerid_formatted?: string }>;
  participatesinworkflow: WebAttribute<Contact_Select, { participatesinworkflow: boolean | null }, {  }>;
  paymenttermscode: WebAttribute<Contact_Select, { paymenttermscode: contact_paymenttermscode | null }, { paymenttermscode_formatted?: string }>;
  preferredappointmentdaycode: WebAttribute<Contact_Select, { preferredappointmentdaycode: contact_preferredappointmentdaycode | null }, { preferredappointmentdaycode_formatted?: string }>;
  preferredappointmenttimecode: WebAttribute<Contact_Select, { preferredappointmenttimecode: contact_preferredappointmenttimecode | null }, { preferredappointmenttimecode_formatted?: string }>;
  preferredcontactmethodcode: WebAttribute<Contact_Select, { preferredcontactmethodcode: contact_preferredcontactmethodcode | null }, { preferredcontactmethodcode_formatted?: string }>;
  preferredsystemuserid_guid: WebAttribute<Contact_Select, { preferredsystemuserid_guid: string | null }, { preferredsystemuserid_formatted?: string }>;
  processid: WebAttribute<Contact_Select, { processid: string | null }, {  }>;
  salutation: WebAttribute<Contact_Select, { salutation: string | null }, {  }>;
  shippingmethodcode: WebAttribute<Contact_Select, { shippingmethodcode: contact_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  slaid_guid: WebAttribute<Contact_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Contact_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  spousesname: WebAttribute<Contact_Select, { spousesname: string | null }, {  }>;
  stageid: WebAttribute<Contact_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Contact_Select, { statecode: contact_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Contact_Select, { statuscode: contact_statuscode | null }, { statuscode_formatted?: string }>;
  subscriptionid: WebAttribute<Contact_Select, { subscriptionid: string | null }, {  }>;
  suffix: WebAttribute<Contact_Select, { suffix: string | null }, {  }>;
  telephone1: WebAttribute<Contact_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<Contact_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<Contact_Select, { telephone3: string | null }, {  }>;
  territorycode: WebAttribute<Contact_Select, { territorycode: contact_territorycode | null }, { territorycode_formatted?: string }>;
  timespentbymeonemailandmeetings: WebAttribute<Contact_Select, { timespentbymeonemailandmeetings: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Contact_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Contact_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Contact_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Contact_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Contact_Select, { versionnumber: number | null }, {  }>;
  websiteurl: WebAttribute<Contact_Select, { websiteurl: string | null }, {  }>;
}
interface Contact_Filter {
  accountid_guid: XQW.Guid;
  accountrolecode: contact_accountrolecode;
  address1_addressid: XQW.Guid;
  address1_addresstypecode: contact_address1_addresstypecode;
  address1_city: string;
  address1_composite: string;
  address1_country: string;
  address1_county: string;
  address1_fax: string;
  address1_freighttermscode: contact_address1_freighttermscode;
  address1_latitude: number;
  address1_line1: string;
  address1_line2: string;
  address1_line3: string;
  address1_longitude: number;
  address1_name: string;
  address1_postalcode: string;
  address1_postofficebox: string;
  address1_primarycontactname: string;
  address1_shippingmethodcode: contact_address1_shippingmethodcode;
  address1_stateorprovince: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_upszone: string;
  address1_utcoffset: number;
  address2_addressid: XQW.Guid;
  address2_addresstypecode: contact_address2_addresstypecode;
  address2_city: string;
  address2_composite: string;
  address2_country: string;
  address2_county: string;
  address2_fax: string;
  address2_freighttermscode: contact_address2_freighttermscode;
  address2_latitude: number;
  address2_line1: string;
  address2_line2: string;
  address2_line3: string;
  address2_longitude: number;
  address2_name: string;
  address2_postalcode: string;
  address2_postofficebox: string;
  address2_primarycontactname: string;
  address2_shippingmethodcode: contact_address2_shippingmethodcode;
  address2_stateorprovince: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address2_upszone: string;
  address2_utcoffset: number;
  address3_addressid: XQW.Guid;
  address3_addresstypecode: contact_address3_addresstypecode;
  address3_city: string;
  address3_composite: string;
  address3_country: string;
  address3_county: string;
  address3_fax: string;
  address3_freighttermscode: contact_address3_freighttermscode;
  address3_latitude: number;
  address3_line1: string;
  address3_line2: string;
  address3_line3: string;
  address3_longitude: number;
  address3_name: string;
  address3_postalcode: string;
  address3_postofficebox: string;
  address3_primarycontactname: string;
  address3_shippingmethodcode: contact_address3_shippingmethodcode;
  address3_stateorprovince: string;
  address3_telephone1: string;
  address3_telephone2: string;
  address3_telephone3: string;
  address3_upszone: string;
  address3_utcoffset: number;
  aging30: number;
  aging30_base: number;
  aging60: number;
  aging60_base: number;
  aging90: number;
  aging90_base: number;
  anniversary: Date;
  annualincome: number;
  annualincome_base: number;
  assistantname: string;
  assistantphone: string;
  birthdate: Date;
  business2: string;
  callback: string;
  childrensnames: string;
  company: string;
  contactid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  creditlimit: number;
  creditlimit_base: number;
  creditonhold: boolean;
  customersizecode: contact_customersizecode;
  customertypecode: contact_customertypecode;
  department: string;
  description: string;
  donotbulkemail: boolean;
  donotbulkpostalmail: boolean;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  donotsendmm: boolean;
  educationcode: contact_educationcode;
  emailaddress1: string;
  emailaddress2: string;
  emailaddress3: string;
  employeeid: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  externaluseridentifier: string;
  familystatuscode: contact_familystatuscode;
  fax: string;
  firstname: string;
  followemail: boolean;
  ftpsiteurl: string;
  fullname: string;
  gendercode: contact_gendercode;
  governmentid: string;
  haschildrencode: contact_haschildrencode;
  home2: string;
  importsequencenumber: number;
  isautocreate: boolean;
  isbackofficecustomer: boolean;
  isprivate: boolean;
  jobtitle: string;
  lastname: string;
  lastonholdtime: Date;
  lastusedincampaign: Date;
  leadsourcecode: contact_leadsourcecode;
  managername: string;
  managerphone: string;
  marketingonly: boolean;
  masterid_guid: XQW.Guid;
  merged: boolean;
  middlename: string;
  mobilephone: string;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  nickname: string;
  numberofchildren: number;
  onholdtime: number;
  opc_duplicatedetectionresult: opc_duplicatedetectionresult;
  opc_multiplecomplaintstrategy: opc_multiplecomplaintstrategy;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  pager: string;
  parentcontactid_guid: XQW.Guid;
  parentcustomerid_guid: XQW.Guid;
  participatesinworkflow: boolean;
  paymenttermscode: contact_paymenttermscode;
  preferredappointmentdaycode: contact_preferredappointmentdaycode;
  preferredappointmenttimecode: contact_preferredappointmenttimecode;
  preferredcontactmethodcode: contact_preferredcontactmethodcode;
  preferredsystemuserid_guid: XQW.Guid;
  processid: XQW.Guid;
  salutation: string;
  shippingmethodcode: contact_shippingmethodcode;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  spousesname: string;
  stageid: XQW.Guid;
  statecode: contact_statecode;
  statuscode: contact_statuscode;
  subscriptionid: XQW.Guid;
  suffix: string;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  territorycode: contact_territorycode;
  timespentbymeonemailandmeetings: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  websiteurl: string;
}
interface Contact_Expand {
  account_primary_contact: WebExpand<Contact_Expand, Account_Select, Account_Filter, { account_primary_contact: Account_Result[] }>;
  contact_activity_parties: WebExpand<Contact_Expand, ActivityParty_Select, ActivityParty_Filter, { contact_activity_parties: ActivityParty_Result[] }>;
  contact_connections1: WebExpand<Contact_Expand, Connection_Select, Connection_Filter, { contact_connections1: Connection_Result[] }>;
  contact_connections2: WebExpand<Contact_Expand, Connection_Select, Connection_Filter, { contact_connections2: Connection_Result[] }>;
  contact_customer_contacts: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { contact_customer_contacts: Contact_Result[] }>;
  contact_master_contact: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { contact_master_contact: Contact_Result[] }>;
  masterid: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { masterid: Contact_Result }>;
  opc_contact_complaints_complainant: WebExpand<Contact_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_contact_complaints_complainant: opc_complaint_Result[] }>;
  opc_contact_complaints_complainantreps: WebExpand<Contact_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_contact_complaints_complainantreps: opc_complaint_Result[] }>;
  parentcustomerid_account: WebExpand<Contact_Expand, Account_Select, Account_Filter, { parentcustomerid_account: Account_Result }>;
  parentcustomerid_contact: WebExpand<Contact_Expand, Contact_Select, Contact_Filter, { parentcustomerid_contact: Contact_Result }>;
}
interface Contact_FormattedResult {
  accountid_formatted?: string;
  accountrolecode_formatted?: string;
  address1_addresstypecode_formatted?: string;
  address1_freighttermscode_formatted?: string;
  address1_shippingmethodcode_formatted?: string;
  address2_addresstypecode_formatted?: string;
  address2_freighttermscode_formatted?: string;
  address2_shippingmethodcode_formatted?: string;
  address3_addresstypecode_formatted?: string;
  address3_freighttermscode_formatted?: string;
  address3_shippingmethodcode_formatted?: string;
  aging30_base_formatted?: string;
  aging30_formatted?: string;
  aging60_base_formatted?: string;
  aging60_formatted?: string;
  aging90_base_formatted?: string;
  aging90_formatted?: string;
  anniversary_formatted?: string;
  annualincome_base_formatted?: string;
  annualincome_formatted?: string;
  birthdate_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  creditlimit_base_formatted?: string;
  creditlimit_formatted?: string;
  customersizecode_formatted?: string;
  customertypecode_formatted?: string;
  educationcode_formatted?: string;
  familystatuscode_formatted?: string;
  gendercode_formatted?: string;
  haschildrencode_formatted?: string;
  lastonholdtime_formatted?: string;
  lastusedincampaign_formatted?: string;
  leadsourcecode_formatted?: string;
  masterid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_duplicatedetectionresult_formatted?: string;
  opc_multiplecomplaintstrategy_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentcontactid_formatted?: string;
  parentcustomerid_formatted?: string;
  paymenttermscode_formatted?: string;
  preferredappointmentdaycode_formatted?: string;
  preferredappointmenttimecode_formatted?: string;
  preferredcontactmethodcode_formatted?: string;
  preferredsystemuserid_formatted?: string;
  shippingmethodcode_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  territorycode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
  "@odata.etag": string;
  accountid_guid: string | null;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  masterid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentcontactid_guid: string | null;
  parentcustomerid_guid: string | null;
  preferredsystemuserid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Contact_RelatedOne {
  masterid: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  parentcustomerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  parentcustomerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface Contact_RelatedMany {
  account_primary_contact: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  contact_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  contact_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  contact_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  contact_customer_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  contact_master_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_contact_complaints_complainant: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_contact_complaints_complainantreps: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRelated {
  contacts: WebMappingRelated<Contact_RelatedOne,Contact_RelatedMany>;
}
interface WebEntitiesCUDA {
  contacts: WebMappingCUDA<Contact_Create,Contact_Update,Contact_Select>;
}
interface opc_allegation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_allegationid?: string | null;
  opc_description?: string | null;
  opc_disposition?: opc_allegationdisposition | null;
  opc_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_allegation_statecode | null;
  statuscode?: opc_allegation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_allegation_Relationships {
  opc_allegation_checklistresponses_allegation?: opc_ChecklistResponse_Result[] | null;
}
interface opc_allegation extends opc_allegation_Base, opc_allegation_Relationships {
  opc_allegationtypeid_bind$opc_allegationtypes?: string | null;
  opc_complaintid_bind$opc_complaints?: string | null;
  opc_dispositionactionid_bind$opc_dispositionactions?: string | null;
  opc_dispositionreasonid_bind$opc_dispositionreasons?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_allegation_Create extends opc_allegation {
}
interface opc_allegation_Update extends opc_allegation {
}
interface opc_allegation_Select {
  createdby_guid: WebAttribute<opc_allegation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_allegation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_allegation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_allegation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_allegation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_allegation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_allegation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_allegationid: WebAttribute<opc_allegation_Select, { opc_allegationid: string | null }, {  }>;
  opc_allegationtypeid_guid: WebAttribute<opc_allegation_Select, { opc_allegationtypeid_guid: string | null }, { opc_allegationtypeid_formatted?: string }>;
  opc_complaintid_guid: WebAttribute<opc_allegation_Select, { opc_complaintid_guid: string | null }, { opc_complaintid_formatted?: string }>;
  opc_description: WebAttribute<opc_allegation_Select, { opc_description: string | null }, {  }>;
  opc_disposition: WebAttribute<opc_allegation_Select, { opc_disposition: opc_allegationdisposition | null }, { opc_disposition_formatted?: string }>;
  opc_dispositionactionid_guid: WebAttribute<opc_allegation_Select, { opc_dispositionactionid_guid: string | null }, { opc_dispositionactionid_formatted?: string }>;
  opc_dispositionreasonid_guid: WebAttribute<opc_allegation_Select, { opc_dispositionreasonid_guid: string | null }, { opc_dispositionreasonid_formatted?: string }>;
  opc_name: WebAttribute<opc_allegation_Select, { opc_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_allegation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_allegation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_allegation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_allegation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_allegation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_allegation_Select, { statecode: opc_allegation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_allegation_Select, { statuscode: opc_allegation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_allegation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_allegation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_allegation_Select, { versionnumber: number | null }, {  }>;
}
interface opc_allegation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_allegationid: XQW.Guid;
  opc_allegationtypeid_guid: XQW.Guid;
  opc_complaintid_guid: XQW.Guid;
  opc_description: string;
  opc_disposition: opc_allegationdisposition;
  opc_dispositionactionid_guid: XQW.Guid;
  opc_dispositionreasonid_guid: XQW.Guid;
  opc_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_allegation_statecode;
  statuscode: opc_allegation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_allegation_Expand {
  opc_allegation_checklistresponses_allegation: WebExpand<opc_allegation_Expand, opc_ChecklistResponse_Select, opc_ChecklistResponse_Filter, { opc_allegation_checklistresponses_allegation: opc_ChecklistResponse_Result[] }>;
  opc_allegationtypeid: WebExpand<opc_allegation_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { opc_allegationtypeid: opc_allegationtype_Result }>;
  opc_complaintid: WebExpand<opc_allegation_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
  opc_dispositionactionid: WebExpand<opc_allegation_Expand, opc_dispositionaction_Select, opc_dispositionaction_Filter, { opc_dispositionactionid: opc_dispositionaction_Result }>;
  opc_dispositionreasonid: WebExpand<opc_allegation_Expand, opc_dispositionreason_Select, opc_dispositionreason_Filter, { opc_dispositionreasonid: opc_dispositionreason_Result }>;
}
interface opc_allegation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_allegationtypeid_formatted?: string;
  opc_complaintid_formatted?: string;
  opc_disposition_formatted?: string;
  opc_dispositionactionid_formatted?: string;
  opc_dispositionreasonid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_allegation_Result extends opc_allegation_Base, opc_allegation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_allegationtypeid_guid: string | null;
  opc_complaintid_guid: string | null;
  opc_dispositionactionid_guid: string | null;
  opc_dispositionreasonid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_allegation_RelatedOne {
  opc_allegationtypeid: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_dispositionactionid: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
  opc_dispositionreasonid: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
}
interface opc_allegation_RelatedMany {
  opc_allegation_checklistresponses_allegation: WebMappingRetrieve<opc_ChecklistResponse_Select,opc_ChecklistResponse_Expand,opc_ChecklistResponse_Filter,opc_ChecklistResponse_Fixed,opc_ChecklistResponse_Result,opc_ChecklistResponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_allegations: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_allegations: WebMappingRelated<opc_allegation_RelatedOne,opc_allegation_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_allegations: WebMappingCUDA<opc_allegation_Create,opc_allegation_Update,opc_allegation_Select>;
}
interface opc_allegationtype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_acronym?: string | null;
  opc_allegationtypeid?: string | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_allegationtype_statecode | null;
  statuscode?: opc_allegationtype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_allegationtype_Relationships {
  opc_allegationtype_allegations_allegationtype?: opc_allegation_Result[] | null;
}
interface opc_allegationtype extends opc_allegationtype_Base, opc_allegationtype_Relationships {
  opc_checklisttypeid_bind$opc_checklisttypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_allegationtype_Create extends opc_allegationtype {
}
interface opc_allegationtype_Update extends opc_allegationtype {
}
interface opc_allegationtype_Select {
  createdby_guid: WebAttribute<opc_allegationtype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_allegationtype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_allegationtype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_allegationtype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_allegationtype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_allegationtype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_allegationtype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_acronym: WebAttribute<opc_allegationtype_Select, { opc_acronym: string | null }, {  }>;
  opc_allegationtypeid: WebAttribute<opc_allegationtype_Select, { opc_allegationtypeid: string | null }, {  }>;
  opc_checklisttypeid_guid: WebAttribute<opc_allegationtype_Select, { opc_checklisttypeid_guid: string | null }, { opc_checklisttypeid_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_allegationtype_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_allegationtype_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_allegationtype_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_allegationtype_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_allegationtype_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_allegationtype_Select, { opc_namefrench: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_allegationtype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_allegationtype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_allegationtype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_allegationtype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_allegationtype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_allegationtype_Select, { statecode: opc_allegationtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_allegationtype_Select, { statuscode: opc_allegationtype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_allegationtype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_allegationtype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_allegationtype_Select, { versionnumber: number | null }, {  }>;
}
interface opc_allegationtype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_acronym: string;
  opc_allegationtypeid: XQW.Guid;
  opc_checklisttypeid_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_descriptionfrench: string;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_allegationtype_statecode;
  statuscode: opc_allegationtype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_allegationtype_Expand {
  opc_allegationtype_allegations_allegationtype: WebExpand<opc_allegationtype_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegationtype_allegations_allegationtype: opc_allegation_Result[] }>;
  opc_checklisttypeid: WebExpand<opc_allegationtype_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { opc_checklisttypeid: opc_ChecklistType_Result }>;
}
interface opc_allegationtype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_checklisttypeid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_allegationtype_Result extends opc_allegationtype_Base, opc_allegationtype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_checklisttypeid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_allegationtype_RelatedOne {
  opc_checklisttypeid: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
}
interface opc_allegationtype_RelatedMany {
  opc_allegationtype_allegations_allegationtype: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_allegationtypes: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_allegationtypes: WebMappingRelated<opc_allegationtype_RelatedOne,opc_allegationtype_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_allegationtypes: WebMappingCUDA<opc_allegationtype_Create,opc_allegationtype_Update,opc_allegationtype_Select>;
}
interface opc_ChecklistResponse_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_checklistresponseid?: string | null;
  opc_name?: string | null;
  opc_response?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_checklistresponse_statecode | null;
  statuscode?: opc_checklistresponse_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse extends opc_ChecklistResponse_Base, opc_ChecklistResponse_Relationships {
  opc_allegationid_bind$opc_allegations?: string | null;
  opc_questiontemplateid_bind$opc_questiontemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_ChecklistResponse_Create extends opc_ChecklistResponse {
}
interface opc_ChecklistResponse_Update extends opc_ChecklistResponse {
}
interface opc_ChecklistResponse_Select {
  createdby_guid: WebAttribute<opc_ChecklistResponse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_ChecklistResponse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_ChecklistResponse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_ChecklistResponse_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_ChecklistResponse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_ChecklistResponse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_ChecklistResponse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_allegationid_guid: WebAttribute<opc_ChecklistResponse_Select, { opc_allegationid_guid: string | null }, { opc_allegationid_formatted?: string }>;
  opc_checklistresponseid: WebAttribute<opc_ChecklistResponse_Select, { opc_checklistresponseid: string | null }, {  }>;
  opc_name: WebAttribute<opc_ChecklistResponse_Select, { opc_name: string | null }, {  }>;
  opc_questiontemplateid_guid: WebAttribute<opc_ChecklistResponse_Select, { opc_questiontemplateid_guid: string | null }, { opc_questiontemplateid_formatted?: string }>;
  opc_response: WebAttribute<opc_ChecklistResponse_Select, { opc_response: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_ChecklistResponse_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_ChecklistResponse_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_ChecklistResponse_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_ChecklistResponse_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_ChecklistResponse_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_ChecklistResponse_Select, { statecode: opc_checklistresponse_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_ChecklistResponse_Select, { statuscode: opc_checklistresponse_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_ChecklistResponse_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_ChecklistResponse_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_ChecklistResponse_Select, { versionnumber: number | null }, {  }>;
}
interface opc_ChecklistResponse_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_allegationid_guid: XQW.Guid;
  opc_checklistresponseid: XQW.Guid;
  opc_name: string;
  opc_questiontemplateid_guid: XQW.Guid;
  opc_response: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_checklistresponse_statecode;
  statuscode: opc_checklistresponse_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_ChecklistResponse_Expand {
  opc_allegationid: WebExpand<opc_ChecklistResponse_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegationid: opc_allegation_Result }>;
  opc_questiontemplateid: WebExpand<opc_ChecklistResponse_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_questiontemplateid: opc_QuestionTemplate_Result }>;
}
interface opc_ChecklistResponse_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_allegationid_formatted?: string;
  opc_questiontemplateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_ChecklistResponse_Result extends opc_ChecklistResponse_Base, opc_ChecklistResponse_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_allegationid_guid: string | null;
  opc_questiontemplateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_ChecklistResponse_RelatedOne {
  opc_allegationid: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_questiontemplateid: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
}
interface opc_ChecklistResponse_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_checklistresponses: WebMappingRetrieve<opc_ChecklistResponse_Select,opc_ChecklistResponse_Expand,opc_ChecklistResponse_Filter,opc_ChecklistResponse_Fixed,opc_ChecklistResponse_Result,opc_ChecklistResponse_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_checklistresponses: WebMappingRelated<opc_ChecklistResponse_RelatedOne,opc_ChecklistResponse_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_checklistresponses: WebMappingCUDA<opc_ChecklistResponse_Create,opc_ChecklistResponse_Update,opc_ChecklistResponse_Select>;
}
interface opc_ChecklistType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_checklisttypeid?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_type?: opc_complaintstage | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_checklisttype_statecode | null;
  statuscode?: opc_checklisttype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_ChecklistType_Relationships {
  opc_checklisttype_allegationtypes_checklistty?: opc_allegationtype_Result[] | null;
  opc_checklisttype_questiontemplates_checklist?: opc_QuestionTemplate_Result[] | null;
}
interface opc_ChecklistType extends opc_ChecklistType_Base, opc_ChecklistType_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_ChecklistType_Create extends opc_ChecklistType {
}
interface opc_ChecklistType_Update extends opc_ChecklistType {
}
interface opc_ChecklistType_Select {
  createdby_guid: WebAttribute<opc_ChecklistType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_ChecklistType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_ChecklistType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_ChecklistType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_ChecklistType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_ChecklistType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_ChecklistType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_checklisttypeid: WebAttribute<opc_ChecklistType_Select, { opc_checklisttypeid: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_ChecklistType_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_ChecklistType_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_ChecklistType_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_ChecklistType_Select, { opc_namefrench: string | null }, {  }>;
  opc_type: WebAttribute<opc_ChecklistType_Select, { opc_type: opc_complaintstage | null }, { opc_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_ChecklistType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_ChecklistType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_ChecklistType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_ChecklistType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_ChecklistType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_ChecklistType_Select, { statecode: opc_checklisttype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_ChecklistType_Select, { statuscode: opc_checklisttype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_ChecklistType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_ChecklistType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_ChecklistType_Select, { versionnumber: number | null }, {  }>;
}
interface opc_ChecklistType_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_checklisttypeid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_type: opc_complaintstage;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_checklisttype_statecode;
  statuscode: opc_checklisttype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_ChecklistType_Expand {
  opc_checklisttype_allegationtypes_checklistty: WebExpand<opc_ChecklistType_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { opc_checklisttype_allegationtypes_checklistty: opc_allegationtype_Result[] }>;
  opc_checklisttype_questiontemplates_checklist: WebExpand<opc_ChecklistType_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_checklisttype_questiontemplates_checklist: opc_QuestionTemplate_Result[] }>;
}
interface opc_ChecklistType_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_ChecklistType_Result extends opc_ChecklistType_Base, opc_ChecklistType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_ChecklistType_RelatedOne {
}
interface opc_ChecklistType_RelatedMany {
  opc_checklisttype_allegationtypes_checklistty: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
  opc_checklisttype_questiontemplates_checklist: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_checklisttypes: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_checklisttypes: WebMappingRelated<opc_ChecklistType_RelatedOne,opc_ChecklistType_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_checklisttypes: WebMappingCUDA<opc_ChecklistType_Create,opc_ChecklistType_Update,opc_ChecklistType_Select>;
}
interface opc_complaint_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_acceptancedate?: Date | null;
  opc_actualriskappetitevalue?: number | null;
  opc_actualriskappetitevalue_date?: Date | null;
  opc_actualriskappetitevalue_state?: number | null;
  opc_closereason?: opc_closereason | null;
  opc_complaintdisposition?: opc_complaintdisposition | null;
  opc_complaintid?: string | null;
  opc_intakedisposition?: opc_intakedisposition | null;
  opc_lastmilestone?: opc_complaintmilestone | null;
  opc_multiplecomplaintstrategy?: opc_multiplecomplaintstrategy | null;
  opc_nextstep?: opc_nextstep | null;
  opc_number?: string | null;
  opc_recommendtoregistrar?: opc_yesorno | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: opc_complaint_statecode | null;
  statuscode?: opc_complaint_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_complaint_Relationships {
  bpf_opc_complaint_opc_individualcomplaint_bp?: opc_individualcomplaint_bp_Result[] | null;
  opc_RiskAssessment_Complaint_opc_complain?: opc_RiskAssessment_Result[] | null;
  opc_complaint_QueueItems?: QueueItem_Result[] | null;
  opc_complaint_allegations_complaint?: opc_allegation_Result[] | null;
  opc_complaint_issues_complaint?: opc_issue_Result[] | null;
  opc_complaint_notifications_complaint?: opc_notification_Result[] | null;
  opc_complaint_recommendations_complaint?: opc_recommendation_Result[] | null;
  opc_complaint_reminders_complaint?: opc_reminder_Result[] | null;
  opc_complaints_topics_relatedtopics?: opc_topic_Result[] | null;
}
interface opc_complaint extends opc_complaint_Base, opc_complaint_Relationships {
  opc_accountid_bind$accounts?: string | null;
  opc_complainant_bind$contacts?: string | null;
  opc_complainantrep_bind$contacts?: string | null;
  opc_legislation_bind$opc_legislations?: string | null;
  opc_opcpriorityid_bind$opc_opcpriorities?: string | null;
  opc_sectorid_bind$opc_sectors?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface opc_complaint_Create extends opc_complaint {
}
interface opc_complaint_Update extends opc_complaint {
}
interface opc_complaint_Select {
  createdby_guid: WebAttribute<opc_complaint_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_complaint_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_complaint_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_complaint_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_complaint_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_complaint_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_complaint_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_acceptancedate: WebAttribute<opc_complaint_Select, { opc_acceptancedate: Date | null }, { opc_acceptancedate_formatted?: string }>;
  opc_accountid_guid: WebAttribute<opc_complaint_Select, { opc_accountid_guid: string | null }, { opc_accountid_formatted?: string }>;
  opc_actualriskappetitevalue: WebAttribute<opc_complaint_Select, { opc_actualriskappetitevalue: number | null }, {  }>;
  opc_actualriskappetitevalue_date: WebAttribute<opc_complaint_Select, { opc_actualriskappetitevalue_date: Date | null }, { opc_actualriskappetitevalue_date_formatted?: string }>;
  opc_actualriskappetitevalue_state: WebAttribute<opc_complaint_Select, { opc_actualriskappetitevalue_state: number | null }, {  }>;
  opc_closereason: WebAttribute<opc_complaint_Select, { opc_closereason: opc_closereason | null }, { opc_closereason_formatted?: string }>;
  opc_complainant_guid: WebAttribute<opc_complaint_Select, { opc_complainant_guid: string | null }, { opc_complainant_formatted?: string }>;
  opc_complainantrep_guid: WebAttribute<opc_complaint_Select, { opc_complainantrep_guid: string | null }, { opc_complainantrep_formatted?: string }>;
  opc_complaintdisposition: WebAttribute<opc_complaint_Select, { opc_complaintdisposition: opc_complaintdisposition | null }, { opc_complaintdisposition_formatted?: string }>;
  opc_complaintid: WebAttribute<opc_complaint_Select, { opc_complaintid: string | null }, {  }>;
  opc_intakedisposition: WebAttribute<opc_complaint_Select, { opc_intakedisposition: opc_intakedisposition | null }, { opc_intakedisposition_formatted?: string }>;
  opc_lastmilestone: WebAttribute<opc_complaint_Select, { opc_lastmilestone: opc_complaintmilestone | null }, { opc_lastmilestone_formatted?: string }>;
  opc_legislation_guid: WebAttribute<opc_complaint_Select, { opc_legislation_guid: string | null }, { opc_legislation_formatted?: string }>;
  opc_multiplecomplaintstrategy: WebAttribute<opc_complaint_Select, { opc_multiplecomplaintstrategy: opc_multiplecomplaintstrategy | null }, { opc_multiplecomplaintstrategy_formatted?: string }>;
  opc_nextstep: WebAttribute<opc_complaint_Select, { opc_nextstep: opc_nextstep | null }, { opc_nextstep_formatted?: string }>;
  opc_number: WebAttribute<opc_complaint_Select, { opc_number: string | null }, {  }>;
  opc_opcpriorityid_guid: WebAttribute<opc_complaint_Select, { opc_opcpriorityid_guid: string | null }, { opc_opcpriorityid_formatted?: string }>;
  opc_recommendtoregistrar: WebAttribute<opc_complaint_Select, { opc_recommendtoregistrar: opc_yesorno | null }, { opc_recommendtoregistrar_formatted?: string }>;
  opc_sectorid_guid: WebAttribute<opc_complaint_Select, { opc_sectorid_guid: string | null }, { opc_sectorid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_complaint_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_complaint_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_complaint_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_complaint_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_complaint_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<opc_complaint_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<opc_complaint_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<opc_complaint_Select, { statecode: opc_complaint_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_complaint_Select, { statuscode: opc_complaint_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_complaint_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<opc_complaint_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_complaint_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_complaint_Select, { versionnumber: number | null }, {  }>;
}
interface opc_complaint_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_acceptancedate: Date;
  opc_accountid_guid: XQW.Guid;
  opc_actualriskappetitevalue: number;
  opc_actualriskappetitevalue_date: Date;
  opc_actualriskappetitevalue_state: number;
  opc_closereason: opc_closereason;
  opc_complainant_guid: XQW.Guid;
  opc_complainantrep_guid: XQW.Guid;
  opc_complaintdisposition: opc_complaintdisposition;
  opc_complaintid: XQW.Guid;
  opc_intakedisposition: opc_intakedisposition;
  opc_lastmilestone: opc_complaintmilestone;
  opc_legislation_guid: XQW.Guid;
  opc_multiplecomplaintstrategy: opc_multiplecomplaintstrategy;
  opc_nextstep: opc_nextstep;
  opc_number: string;
  opc_opcpriorityid_guid: XQW.Guid;
  opc_recommendtoregistrar: opc_yesorno;
  opc_sectorid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: opc_complaint_statecode;
  statuscode: opc_complaint_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_complaint_Expand {
  bpf_opc_complaint_opc_individualcomplaint_bp: WebExpand<opc_complaint_Expand, opc_individualcomplaint_bp_Select, opc_individualcomplaint_bp_Filter, { bpf_opc_complaint_opc_individualcomplaint_bp: opc_individualcomplaint_bp_Result[] }>;
  opc_RiskAssessment_Complaint_opc_complain: WebExpand<opc_complaint_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_Complaint_opc_complain: opc_RiskAssessment_Result[] }>;
  opc_accountid: WebExpand<opc_complaint_Expand, Account_Select, Account_Filter, { opc_accountid: Account_Result }>;
  opc_complainant: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_complainant: Contact_Result }>;
  opc_complainantrep: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_complainantrep: Contact_Result }>;
  opc_complaint_QueueItems: WebExpand<opc_complaint_Expand, QueueItem_Select, QueueItem_Filter, { opc_complaint_QueueItems: QueueItem_Result[] }>;
  opc_complaint_allegations_complaint: WebExpand<opc_complaint_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_complaint_allegations_complaint: opc_allegation_Result[] }>;
  opc_complaint_issues_complaint: WebExpand<opc_complaint_Expand, opc_issue_Select, opc_issue_Filter, { opc_complaint_issues_complaint: opc_issue_Result[] }>;
  opc_complaint_notifications_complaint: WebExpand<opc_complaint_Expand, opc_notification_Select, opc_notification_Filter, { opc_complaint_notifications_complaint: opc_notification_Result[] }>;
  opc_complaint_recommendations_complaint: WebExpand<opc_complaint_Expand, opc_recommendation_Select, opc_recommendation_Filter, { opc_complaint_recommendations_complaint: opc_recommendation_Result[] }>;
  opc_complaint_reminders_complaint: WebExpand<opc_complaint_Expand, opc_reminder_Select, opc_reminder_Filter, { opc_complaint_reminders_complaint: opc_reminder_Result[] }>;
  opc_complaints_topics_relatedtopics: WebExpand<opc_complaint_Expand, opc_topic_Select, opc_topic_Filter, { opc_complaints_topics_relatedtopics: opc_topic_Result[] }>;
  opc_legislation: WebExpand<opc_complaint_Expand, opc_legislation_Select, opc_legislation_Filter, { opc_legislation: opc_legislation_Result }>;
  opc_opcpriorityid: WebExpand<opc_complaint_Expand, opc_opcpriority_Select, opc_opcpriority_Filter, { opc_opcpriorityid: opc_opcpriority_Result }>;
  opc_sectorid: WebExpand<opc_complaint_Expand, opc_sector_Select, opc_sector_Filter, { opc_sectorid: opc_sector_Result }>;
}
interface opc_complaint_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_acceptancedate_formatted?: string;
  opc_accountid_formatted?: string;
  opc_actualriskappetitevalue_date_formatted?: string;
  opc_closereason_formatted?: string;
  opc_complainant_formatted?: string;
  opc_complainantrep_formatted?: string;
  opc_complaintdisposition_formatted?: string;
  opc_intakedisposition_formatted?: string;
  opc_lastmilestone_formatted?: string;
  opc_legislation_formatted?: string;
  opc_multiplecomplaintstrategy_formatted?: string;
  opc_nextstep_formatted?: string;
  opc_opcpriorityid_formatted?: string;
  opc_recommendtoregistrar_formatted?: string;
  opc_sectorid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_complaint_Result extends opc_complaint_Base, opc_complaint_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_accountid_guid: string | null;
  opc_complainant_guid: string | null;
  opc_complainantrep_guid: string | null;
  opc_legislation_guid: string | null;
  opc_opcpriorityid_guid: string | null;
  opc_sectorid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_complaint_RelatedOne {
  opc_accountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  opc_complainant: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_complainantrep: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_legislation: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
  opc_opcpriorityid: WebMappingRetrieve<opc_opcpriority_Select,opc_opcpriority_Expand,opc_opcpriority_Filter,opc_opcpriority_Fixed,opc_opcpriority_Result,opc_opcpriority_FormattedResult>;
  opc_sectorid: WebMappingRetrieve<opc_sector_Select,opc_sector_Expand,opc_sector_Filter,opc_sector_Fixed,opc_sector_Result,opc_sector_FormattedResult>;
}
interface opc_complaint_RelatedMany {
  bpf_opc_complaint_opc_individualcomplaint_bp: WebMappingRetrieve<opc_individualcomplaint_bp_Select,opc_individualcomplaint_bp_Expand,opc_individualcomplaint_bp_Filter,opc_individualcomplaint_bp_Fixed,opc_individualcomplaint_bp_Result,opc_individualcomplaint_bp_FormattedResult>;
  opc_RiskAssessment_Complaint_opc_complain: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_complaint_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  opc_complaint_allegations_complaint: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_complaint_issues_complaint: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
  opc_complaint_notifications_complaint: WebMappingRetrieve<opc_notification_Select,opc_notification_Expand,opc_notification_Filter,opc_notification_Fixed,opc_notification_Result,opc_notification_FormattedResult>;
  opc_complaint_recommendations_complaint: WebMappingRetrieve<opc_recommendation_Select,opc_recommendation_Expand,opc_recommendation_Filter,opc_recommendation_Fixed,opc_recommendation_Result,opc_recommendation_FormattedResult>;
  opc_complaint_reminders_complaint: WebMappingRetrieve<opc_reminder_Select,opc_reminder_Expand,opc_reminder_Filter,opc_reminder_Fixed,opc_reminder_Result,opc_reminder_FormattedResult>;
  opc_complaints_topics_relatedtopics: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_complaints: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_complaints: WebMappingRelated<opc_complaint_RelatedOne,opc_complaint_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_complaints: WebMappingCUDA<opc_complaint_Create,opc_complaint_Update,opc_complaint_Select>;
}
interface opc_complaintsrelatedtopics_Base extends WebEntity {
  opc_complaintid?: string | null;
  opc_complaintsrelatedtopicsid?: string | null;
  opc_topicid?: string | null;
  versionnumber?: number | null;
}
interface opc_complaintsrelatedtopics_Relationships {
  opc_complaints_topics_relatedtopics?: opc_complaint_Result[] | null;
}
interface opc_complaintsrelatedtopics extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_Create extends opc_complaintsrelatedtopics {
}
interface opc_complaintsrelatedtopics_Update extends opc_complaintsrelatedtopics {
}
interface opc_complaintsrelatedtopics_Select {
  opc_complaintid: WebAttribute<opc_complaintsrelatedtopics_Select, { opc_complaintid: string | null }, {  }>;
  opc_complaintsrelatedtopicsid: WebAttribute<opc_complaintsrelatedtopics_Select, { opc_complaintsrelatedtopicsid: string | null }, {  }>;
  opc_topicid: WebAttribute<opc_complaintsrelatedtopics_Select, { opc_topicid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_complaintsrelatedtopics_Select, { versionnumber: number | null }, {  }>;
}
interface opc_complaintsrelatedtopics_Filter {
  opc_complaintid: XQW.Guid;
  opc_complaintsrelatedtopicsid: XQW.Guid;
  opc_topicid: XQW.Guid;
  versionnumber: number;
}
interface opc_complaintsrelatedtopics_Expand {
  opc_complaints_topics_relatedtopics: WebExpand<opc_complaintsrelatedtopics_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaints_topics_relatedtopics: opc_complaint_Result[] }>;
}
interface opc_complaintsrelatedtopics_FormattedResult {
}
interface opc_complaintsrelatedtopics_Result extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
  "@odata.etag": string;
}
interface opc_complaintsrelatedtopics_RelatedOne {
}
interface opc_complaintsrelatedtopics_RelatedMany {
  opc_complaints_topics_relatedtopics: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_complaintsrelatedtopicsset: WebMappingRetrieve<opc_complaintsrelatedtopics_Select,opc_complaintsrelatedtopics_Expand,opc_complaintsrelatedtopics_Filter,opc_complaintsrelatedtopics_Fixed,opc_complaintsrelatedtopics_Result,opc_complaintsrelatedtopics_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_complaintsrelatedtopicsset: WebMappingRelated<opc_complaintsrelatedtopics_RelatedOne,opc_complaintsrelatedtopics_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_complaintsrelatedtopicsset: WebMappingCUDA<opc_complaintsrelatedtopics_Create,opc_complaintsrelatedtopics_Update,opc_complaintsrelatedtopics_Select>;
}
interface opc_dispositionaction_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_dispositionactionid?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_dispositionaction_statecode | null;
  statuscode?: opc_dispositionaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_dispositionaction_Relationships {
  opc_dispositionaction_allegations_action?: opc_allegation_Result[] | null;
}
interface opc_dispositionaction extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
  opc_dispositionreasonid_bind$opc_dispositionreasons?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_dispositionaction_Create extends opc_dispositionaction {
}
interface opc_dispositionaction_Update extends opc_dispositionaction {
}
interface opc_dispositionaction_Select {
  createdby_guid: WebAttribute<opc_dispositionaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_dispositionaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_dispositionaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_dispositionaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_dispositionaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_dispositionaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_dispositionaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_dispositionactionid: WebAttribute<opc_dispositionaction_Select, { opc_dispositionactionid: string | null }, {  }>;
  opc_dispositionreasonid_guid: WebAttribute<opc_dispositionaction_Select, { opc_dispositionreasonid_guid: string | null }, { opc_dispositionreasonid_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_dispositionaction_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_dispositionaction_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_dispositionaction_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_dispositionaction_Select, { opc_namefrench: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_dispositionaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_dispositionaction_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_dispositionaction_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_dispositionaction_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_dispositionaction_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_dispositionaction_Select, { statecode: opc_dispositionaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_dispositionaction_Select, { statuscode: opc_dispositionaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_dispositionaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_dispositionaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_dispositionaction_Select, { versionnumber: number | null }, {  }>;
}
interface opc_dispositionaction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_dispositionactionid: XQW.Guid;
  opc_dispositionreasonid_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_dispositionaction_statecode;
  statuscode: opc_dispositionaction_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_dispositionaction_Expand {
  opc_dispositionaction_allegations_action: WebExpand<opc_dispositionaction_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_dispositionaction_allegations_action: opc_allegation_Result[] }>;
  opc_dispositionreasonid: WebExpand<opc_dispositionaction_Expand, opc_dispositionreason_Select, opc_dispositionreason_Filter, { opc_dispositionreasonid: opc_dispositionreason_Result }>;
}
interface opc_dispositionaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_dispositionreasonid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_dispositionaction_Result extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_dispositionreasonid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_dispositionaction_RelatedOne {
  opc_dispositionreasonid: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
}
interface opc_dispositionaction_RelatedMany {
  opc_dispositionaction_allegations_action: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_dispositionactions: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_dispositionactions: WebMappingRelated<opc_dispositionaction_RelatedOne,opc_dispositionaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_dispositionactions: WebMappingCUDA<opc_dispositionaction_Create,opc_dispositionaction_Update,opc_dispositionaction_Select>;
}
interface opc_dispositionreason_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_allegationdisposition?: opc_allegationdisposition | null;
  opc_dispositionreasonid?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_dispositionreason_statecode | null;
  statuscode?: opc_dispositionreason_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_dispositionreason_Relationships {
  opc_dispositionreason_allegations_reason?: opc_allegation_Result[] | null;
  opc_dispositionreason_dispositionactions_reas?: opc_dispositionaction_Result[] | null;
}
interface opc_dispositionreason extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_dispositionreason_Create extends opc_dispositionreason {
}
interface opc_dispositionreason_Update extends opc_dispositionreason {
}
interface opc_dispositionreason_Select {
  createdby_guid: WebAttribute<opc_dispositionreason_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_dispositionreason_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_dispositionreason_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_dispositionreason_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_dispositionreason_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_dispositionreason_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_dispositionreason_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_allegationdisposition: WebAttribute<opc_dispositionreason_Select, { opc_allegationdisposition: opc_allegationdisposition | null }, { opc_allegationdisposition_formatted?: string }>;
  opc_dispositionreasonid: WebAttribute<opc_dispositionreason_Select, { opc_dispositionreasonid: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_dispositionreason_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_dispositionreason_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_dispositionreason_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_dispositionreason_Select, { opc_namefrench: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_dispositionreason_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_dispositionreason_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_dispositionreason_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_dispositionreason_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_dispositionreason_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_dispositionreason_Select, { statecode: opc_dispositionreason_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_dispositionreason_Select, { statuscode: opc_dispositionreason_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_dispositionreason_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_dispositionreason_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_dispositionreason_Select, { versionnumber: number | null }, {  }>;
}
interface opc_dispositionreason_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_allegationdisposition: opc_allegationdisposition;
  opc_dispositionreasonid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_dispositionreason_statecode;
  statuscode: opc_dispositionreason_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_dispositionreason_Expand {
  opc_dispositionreason_allegations_reason: WebExpand<opc_dispositionreason_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_dispositionreason_allegations_reason: opc_allegation_Result[] }>;
  opc_dispositionreason_dispositionactions_reas: WebExpand<opc_dispositionreason_Expand, opc_dispositionaction_Select, opc_dispositionaction_Filter, { opc_dispositionreason_dispositionactions_reas: opc_dispositionaction_Result[] }>;
}
interface opc_dispositionreason_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_allegationdisposition_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_dispositionreason_Result extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_dispositionreason_RelatedOne {
}
interface opc_dispositionreason_RelatedMany {
  opc_dispositionreason_allegations_reason: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_dispositionreason_dispositionactions_reas: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_dispositionreasons: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_dispositionreasons: WebMappingRelated<opc_dispositionreason_RelatedOne,opc_dispositionreason_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_dispositionreasons: WebMappingCUDA<opc_dispositionreason_Create,opc_dispositionreason_Update,opc_dispositionreason_Select>;
}
interface opc_individualcomplaint_bp_Base extends WebEntity {
  activestagestartedon?: Date | null;
  bpf_duration?: number | null;
  bpf_name?: string | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_activestagecategory?: processstage_category | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_individualcomplaint_bp_statecode | null;
  statuscode?: opc_individualcomplaint_bp_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_opc_complaintid_bind$opc_complaints?: string | null;
  processid_bind$workflows?: string | null;
}
interface opc_individualcomplaint_bp_Create extends opc_individualcomplaint_bp {
}
interface opc_individualcomplaint_bp_Update extends opc_individualcomplaint_bp {
}
interface opc_individualcomplaint_bp_Select {
  activestageid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<opc_individualcomplaint_bp_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_duration: WebAttribute<opc_individualcomplaint_bp_Select, { bpf_duration: number | null }, {  }>;
  bpf_name: WebAttribute<opc_individualcomplaint_bp_Select, { bpf_name: string | null }, {  }>;
  bpf_opc_complaintid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { bpf_opc_complaintid_guid: string | null }, { bpf_opc_complaintid_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<opc_individualcomplaint_bp_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<opc_individualcomplaint_bp_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_individualcomplaint_bp_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_individualcomplaint_bp_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_individualcomplaint_bp_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_activestagecategory: WebAttribute<opc_individualcomplaint_bp_Select, { opc_activestagecategory: processstage_category | null }, { opc_activestagecategory_formatted?: string }>;
  organizationid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_individualcomplaint_bp_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<opc_individualcomplaint_bp_Select, { statecode: opc_individualcomplaint_bp_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_individualcomplaint_bp_Select, { statuscode: opc_individualcomplaint_bp_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_individualcomplaint_bp_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<opc_individualcomplaint_bp_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_individualcomplaint_bp_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_individualcomplaint_bp_Select, { versionnumber: number | null }, {  }>;
}
interface opc_individualcomplaint_bp_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_duration: number;
  bpf_name: string;
  bpf_opc_complaintid_guid: XQW.Guid;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_activestagecategory: processstage_category;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: opc_individualcomplaint_bp_statecode;
  statuscode: opc_individualcomplaint_bp_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_individualcomplaint_bp_Expand {
  bpf_opc_complaintid: WebExpand<opc_individualcomplaint_bp_Expand, opc_complaint_Select, opc_complaint_Filter, { bpf_opc_complaintid: opc_complaint_Result }>;
}
interface opc_individualcomplaint_bp_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_opc_complaintid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_activestagecategory_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_individualcomplaint_bp_Result extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_opc_complaintid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
}
interface opc_individualcomplaint_bp_RelatedOne {
  bpf_opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface opc_individualcomplaint_bp_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_individualcomplaint_bps: WebMappingRetrieve<opc_individualcomplaint_bp_Select,opc_individualcomplaint_bp_Expand,opc_individualcomplaint_bp_Filter,opc_individualcomplaint_bp_Fixed,opc_individualcomplaint_bp_Result,opc_individualcomplaint_bp_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_individualcomplaint_bps: WebMappingRelated<opc_individualcomplaint_bp_RelatedOne,opc_individualcomplaint_bp_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_individualcomplaint_bps: WebMappingCUDA<opc_individualcomplaint_bp_Create,opc_individualcomplaint_bp_Update,opc_individualcomplaint_bp_Select>;
}
interface opc_issue_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_issueid?: string | null;
  opc_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_issue_statecode | null;
  statuscode?: opc_issue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_issue_Relationships {
}
interface opc_issue extends opc_issue_Base, opc_issue_Relationships {
  opc_complaintid_bind$opc_complaints?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_issue_Create extends opc_issue {
}
interface opc_issue_Update extends opc_issue {
}
interface opc_issue_Select {
  createdby_guid: WebAttribute<opc_issue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_issue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_issue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_issue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_issue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_issue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_issue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_complaintid_guid: WebAttribute<opc_issue_Select, { opc_complaintid_guid: string | null }, { opc_complaintid_formatted?: string }>;
  opc_issueid: WebAttribute<opc_issue_Select, { opc_issueid: string | null }, {  }>;
  opc_name: WebAttribute<opc_issue_Select, { opc_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_issue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_issue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_issue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_issue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_issue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_issue_Select, { statecode: opc_issue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_issue_Select, { statuscode: opc_issue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_issue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_issue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_issue_Select, { versionnumber: number | null }, {  }>;
}
interface opc_issue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_complaintid_guid: XQW.Guid;
  opc_issueid: XQW.Guid;
  opc_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_issue_statecode;
  statuscode: opc_issue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_issue_Expand {
  opc_complaintid: WebExpand<opc_issue_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
}
interface opc_issue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_complaintid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_issue_Result extends opc_issue_Base, opc_issue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_complaintid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_issue_RelatedOne {
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface opc_issue_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_issues: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_issues: WebMappingRelated<opc_issue_RelatedOne,opc_issue_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_issues: WebMappingCUDA<opc_issue_Create,opc_issue_Update,opc_issue_Select>;
}
interface opc_legislation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_acronym?: string | null;
  opc_legislationid?: string | null;
  opc_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_legislation_statecode | null;
  statuscode?: opc_legislation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_legislation_Relationships {
  opc_legislation_complaints_legislation?: opc_complaint_Result[] | null;
}
interface opc_legislation extends opc_legislation_Base, opc_legislation_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_legislation_Create extends opc_legislation {
}
interface opc_legislation_Update extends opc_legislation {
}
interface opc_legislation_Select {
  createdby_guid: WebAttribute<opc_legislation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_legislation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_legislation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_legislation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_legislation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_legislation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_legislation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_acronym: WebAttribute<opc_legislation_Select, { opc_acronym: string | null }, {  }>;
  opc_legislationid: WebAttribute<opc_legislation_Select, { opc_legislationid: string | null }, {  }>;
  opc_name: WebAttribute<opc_legislation_Select, { opc_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_legislation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_legislation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_legislation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_legislation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_legislation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_legislation_Select, { statecode: opc_legislation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_legislation_Select, { statuscode: opc_legislation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_legislation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_legislation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_legislation_Select, { versionnumber: number | null }, {  }>;
}
interface opc_legislation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_acronym: string;
  opc_legislationid: XQW.Guid;
  opc_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_legislation_statecode;
  statuscode: opc_legislation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_legislation_Expand {
  opc_legislation_complaints_legislation: WebExpand<opc_legislation_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_legislation_complaints_legislation: opc_complaint_Result[] }>;
}
interface opc_legislation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_legislation_Result extends opc_legislation_Base, opc_legislation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_legislation_RelatedOne {
}
interface opc_legislation_RelatedMany {
  opc_legislation_complaints_legislation: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_legislations: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_legislations: WebMappingRelated<opc_legislation_RelatedOne,opc_legislation_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_legislations: WebMappingCUDA<opc_legislation_Create,opc_legislation_Update,opc_legislation_Select>;
}
interface opc_notification_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_notificationid?: string | null;
  opc_notifybyemail?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_notification_statecode | null;
  statuscode?: opc_notification_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_notification_Relationships {
}
interface opc_notification extends opc_notification_Base, opc_notification_Relationships {
  opc_complaintid_bind$opc_complaints?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_notification_Create extends opc_notification {
}
interface opc_notification_Update extends opc_notification {
}
interface opc_notification_Select {
  createdby_guid: WebAttribute<opc_notification_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_notification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_notification_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_notification_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_notification_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_notification_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_notification_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_complaintid_guid: WebAttribute<opc_notification_Select, { opc_complaintid_guid: string | null }, { opc_complaintid_formatted?: string }>;
  opc_name: WebAttribute<opc_notification_Select, { opc_name: string | null }, {  }>;
  opc_notificationid: WebAttribute<opc_notification_Select, { opc_notificationid: string | null }, {  }>;
  opc_notifybyemail: WebAttribute<opc_notification_Select, { opc_notifybyemail: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_notification_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_notification_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_notification_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_notification_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_notification_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_notification_Select, { statecode: opc_notification_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_notification_Select, { statuscode: opc_notification_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_notification_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_notification_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_notification_Select, { versionnumber: number | null }, {  }>;
}
interface opc_notification_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_complaintid_guid: XQW.Guid;
  opc_name: string;
  opc_notificationid: XQW.Guid;
  opc_notifybyemail: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_notification_statecode;
  statuscode: opc_notification_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_notification_Expand {
  opc_complaintid: WebExpand<opc_notification_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
}
interface opc_notification_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_complaintid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_notification_Result extends opc_notification_Base, opc_notification_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_complaintid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_notification_RelatedOne {
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface opc_notification_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_notifications: WebMappingRetrieve<opc_notification_Select,opc_notification_Expand,opc_notification_Filter,opc_notification_Fixed,opc_notification_Result,opc_notification_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_notifications: WebMappingRelated<opc_notification_RelatedOne,opc_notification_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_notifications: WebMappingCUDA<opc_notification_Create,opc_notification_Update,opc_notification_Select>;
}
interface opc_opcpriority_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_frenchdescription?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_opcpriorityid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_opcpriority_statecode | null;
  statuscode?: opc_opcpriority_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_opcpriority_Relationships {
  opc_opcpriority_complaints_opcpriority?: opc_complaint_Result[] | null;
}
interface opc_opcpriority extends opc_opcpriority_Base, opc_opcpriority_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_opcpriority_Create extends opc_opcpriority {
}
interface opc_opcpriority_Update extends opc_opcpriority {
}
interface opc_opcpriority_Select {
  createdby_guid: WebAttribute<opc_opcpriority_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_opcpriority_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_opcpriority_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_opcpriority_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_opcpriority_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_opcpriority_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_opcpriority_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_opcpriority_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_frenchdescription: WebAttribute<opc_opcpriority_Select, { opc_frenchdescription: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_opcpriority_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_opcpriority_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_opcpriority_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_opcpriority_Select, { opc_namefrench: string | null }, {  }>;
  opc_opcpriorityid: WebAttribute<opc_opcpriority_Select, { opc_opcpriorityid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_opcpriority_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_opcpriority_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_opcpriority_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_opcpriority_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_opcpriority_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_opcpriority_Select, { statecode: opc_opcpriority_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_opcpriority_Select, { statuscode: opc_opcpriority_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_opcpriority_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_opcpriority_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_opcpriority_Select, { versionnumber: number | null }, {  }>;
}
interface opc_opcpriority_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_frenchdescription: string;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_opcpriorityid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_opcpriority_statecode;
  statuscode: opc_opcpriority_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_opcpriority_Expand {
  opc_opcpriority_complaints_opcpriority: WebExpand<opc_opcpriority_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_opcpriority_complaints_opcpriority: opc_complaint_Result[] }>;
}
interface opc_opcpriority_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_opcpriority_Result extends opc_opcpriority_Base, opc_opcpriority_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_opcpriority_RelatedOne {
}
interface opc_opcpriority_RelatedMany {
  opc_opcpriority_complaints_opcpriority: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_opcpriorities: WebMappingRetrieve<opc_opcpriority_Select,opc_opcpriority_Expand,opc_opcpriority_Filter,opc_opcpriority_Fixed,opc_opcpriority_Result,opc_opcpriority_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_opcpriorities: WebMappingRelated<opc_opcpriority_RelatedOne,opc_opcpriority_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_opcpriorities: WebMappingCUDA<opc_opcpriority_Create,opc_opcpriority_Update,opc_opcpriority_Select>;
}
interface opc_QuestionTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_conditionalvisibility?: boolean | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_questiontemplateid?: string | null;
  opc_sequence?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_questiontemplate_statecode | null;
  statuscode?: opc_questiontemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_QuestionTemplate_Relationships {
  opc_questiontemplate_checklistresponses_quest?: opc_ChecklistResponse_Result[] | null;
  opc_questiontemplate_questiontemplates_parent?: opc_QuestionTemplate_Result[] | null;
}
interface opc_QuestionTemplate extends opc_QuestionTemplate_Base, opc_QuestionTemplate_Relationships {
  opc_checklisttypeid_bind$opc_checklisttypes?: string | null;
  opc_parentquestiontemplateid_bind$opc_questiontemplates?: string | null;
  opc_questiontypeid_bind$opc_questiontypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_QuestionTemplate_Create extends opc_QuestionTemplate {
}
interface opc_QuestionTemplate_Update extends opc_QuestionTemplate {
}
interface opc_QuestionTemplate_Select {
  createdby_guid: WebAttribute<opc_QuestionTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_QuestionTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_QuestionTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_QuestionTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_QuestionTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_QuestionTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_QuestionTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_checklisttypeid_guid: WebAttribute<opc_QuestionTemplate_Select, { opc_checklisttypeid_guid: string | null }, { opc_checklisttypeid_formatted?: string }>;
  opc_conditionalvisibility: WebAttribute<opc_QuestionTemplate_Select, { opc_conditionalvisibility: boolean | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_QuestionTemplate_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_QuestionTemplate_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_QuestionTemplate_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_QuestionTemplate_Select, { opc_namefrench: string | null }, {  }>;
  opc_parentquestiontemplateid_guid: WebAttribute<opc_QuestionTemplate_Select, { opc_parentquestiontemplateid_guid: string | null }, { opc_parentquestiontemplateid_formatted?: string }>;
  opc_questiontemplateid: WebAttribute<opc_QuestionTemplate_Select, { opc_questiontemplateid: string | null }, {  }>;
  opc_questiontypeid_guid: WebAttribute<opc_QuestionTemplate_Select, { opc_questiontypeid_guid: string | null }, { opc_questiontypeid_formatted?: string }>;
  opc_sequence: WebAttribute<opc_QuestionTemplate_Select, { opc_sequence: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_QuestionTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_QuestionTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_QuestionTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_QuestionTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_QuestionTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_QuestionTemplate_Select, { statecode: opc_questiontemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_QuestionTemplate_Select, { statuscode: opc_questiontemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_QuestionTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_QuestionTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_QuestionTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface opc_QuestionTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_checklisttypeid_guid: XQW.Guid;
  opc_conditionalvisibility: boolean;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_parentquestiontemplateid_guid: XQW.Guid;
  opc_questiontemplateid: XQW.Guid;
  opc_questiontypeid_guid: XQW.Guid;
  opc_sequence: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_questiontemplate_statecode;
  statuscode: opc_questiontemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_QuestionTemplate_Expand {
  opc_checklisttypeid: WebExpand<opc_QuestionTemplate_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { opc_checklisttypeid: opc_ChecklistType_Result }>;
  opc_parentquestiontemplateid: WebExpand<opc_QuestionTemplate_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_parentquestiontemplateid: opc_QuestionTemplate_Result }>;
  opc_questiontemplate_checklistresponses_quest: WebExpand<opc_QuestionTemplate_Expand, opc_ChecklistResponse_Select, opc_ChecklistResponse_Filter, { opc_questiontemplate_checklistresponses_quest: opc_ChecklistResponse_Result[] }>;
  opc_questiontemplate_questiontemplates_parent: WebExpand<opc_QuestionTemplate_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_questiontemplate_questiontemplates_parent: opc_QuestionTemplate_Result[] }>;
  opc_questiontypeid: WebExpand<opc_QuestionTemplate_Expand, opc_QuestionType_Select, opc_QuestionType_Filter, { opc_questiontypeid: opc_QuestionType_Result }>;
}
interface opc_QuestionTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_checklisttypeid_formatted?: string;
  opc_parentquestiontemplateid_formatted?: string;
  opc_questiontypeid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_QuestionTemplate_Result extends opc_QuestionTemplate_Base, opc_QuestionTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_checklisttypeid_guid: string | null;
  opc_parentquestiontemplateid_guid: string | null;
  opc_questiontypeid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_QuestionTemplate_RelatedOne {
  opc_checklisttypeid: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
  opc_parentquestiontemplateid: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
  opc_questiontypeid: WebMappingRetrieve<opc_QuestionType_Select,opc_QuestionType_Expand,opc_QuestionType_Filter,opc_QuestionType_Fixed,opc_QuestionType_Result,opc_QuestionType_FormattedResult>;
}
interface opc_QuestionTemplate_RelatedMany {
  opc_questiontemplate_checklistresponses_quest: WebMappingRetrieve<opc_ChecklistResponse_Select,opc_ChecklistResponse_Expand,opc_ChecklistResponse_Filter,opc_ChecklistResponse_Fixed,opc_ChecklistResponse_Result,opc_ChecklistResponse_FormattedResult>;
  opc_questiontemplate_questiontemplates_parent: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_questiontemplates: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_questiontemplates: WebMappingRelated<opc_QuestionTemplate_RelatedOne,opc_QuestionTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_questiontemplates: WebMappingCUDA<opc_QuestionTemplate_Create,opc_QuestionTemplate_Update,opc_QuestionTemplate_Select>;
}
interface opc_QuestionType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_questiontypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_questiontype_statecode | null;
  statuscode?: opc_questiontype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_QuestionType_Relationships {
  opc_questiontype_questiontemplates_questionty?: opc_QuestionTemplate_Result[] | null;
}
interface opc_QuestionType extends opc_QuestionType_Base, opc_QuestionType_Relationships {
}
interface opc_QuestionType_Create extends opc_QuestionType {
}
interface opc_QuestionType_Update extends opc_QuestionType {
}
interface opc_QuestionType_Select {
  createdby_guid: WebAttribute<opc_QuestionType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_QuestionType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_QuestionType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_QuestionType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_QuestionType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_QuestionType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_QuestionType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_QuestionType_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_QuestionType_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_QuestionType_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_QuestionType_Select, { opc_namefrench: string | null }, {  }>;
  opc_questiontypeid: WebAttribute<opc_QuestionType_Select, { opc_questiontypeid: string | null }, {  }>;
  organizationid_guid: WebAttribute<opc_QuestionType_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_QuestionType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<opc_QuestionType_Select, { statecode: opc_questiontype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_QuestionType_Select, { statuscode: opc_questiontype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_QuestionType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_QuestionType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_QuestionType_Select, { versionnumber: number | null }, {  }>;
}
interface opc_QuestionType_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_questiontypeid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: opc_questiontype_statecode;
  statuscode: opc_questiontype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_QuestionType_Expand {
  opc_questiontype_questiontemplates_questionty: WebExpand<opc_QuestionType_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_questiontype_questiontemplates_questionty: opc_QuestionTemplate_Result[] }>;
}
interface opc_QuestionType_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_QuestionType_Result extends opc_QuestionType_Base, opc_QuestionType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface opc_QuestionType_RelatedOne {
}
interface opc_QuestionType_RelatedMany {
  opc_questiontype_questiontemplates_questionty: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_questiontypes: WebMappingRetrieve<opc_QuestionType_Select,opc_QuestionType_Expand,opc_QuestionType_Filter,opc_QuestionType_Fixed,opc_QuestionType_Result,opc_QuestionType_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_questiontypes: WebMappingRelated<opc_QuestionType_RelatedOne,opc_QuestionType_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_questiontypes: WebMappingCUDA<opc_QuestionType_Create,opc_QuestionType_Update,opc_QuestionType_Select>;
}
interface opc_recommendation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_recommendationid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_recommendation_statecode | null;
  statuscode?: opc_recommendation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_recommendation_Relationships {
}
interface opc_recommendation extends opc_recommendation_Base, opc_recommendation_Relationships {
  opc_complaintid_bind$opc_complaints?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_recommendation_Create extends opc_recommendation {
}
interface opc_recommendation_Update extends opc_recommendation {
}
interface opc_recommendation_Select {
  createdby_guid: WebAttribute<opc_recommendation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_recommendation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_recommendation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_recommendation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_recommendation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_recommendation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_recommendation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_complaintid_guid: WebAttribute<opc_recommendation_Select, { opc_complaintid_guid: string | null }, { opc_complaintid_formatted?: string }>;
  opc_name: WebAttribute<opc_recommendation_Select, { opc_name: string | null }, {  }>;
  opc_recommendationid: WebAttribute<opc_recommendation_Select, { opc_recommendationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_recommendation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_recommendation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_recommendation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_recommendation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_recommendation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_recommendation_Select, { statecode: opc_recommendation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_recommendation_Select, { statuscode: opc_recommendation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_recommendation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_recommendation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_recommendation_Select, { versionnumber: number | null }, {  }>;
}
interface opc_recommendation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_complaintid_guid: XQW.Guid;
  opc_name: string;
  opc_recommendationid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_recommendation_statecode;
  statuscode: opc_recommendation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_recommendation_Expand {
  opc_complaintid: WebExpand<opc_recommendation_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
}
interface opc_recommendation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_complaintid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_recommendation_Result extends opc_recommendation_Base, opc_recommendation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_complaintid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_recommendation_RelatedOne {
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface opc_recommendation_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_recommendations: WebMappingRetrieve<opc_recommendation_Select,opc_recommendation_Expand,opc_recommendation_Filter,opc_recommendation_Fixed,opc_recommendation_Result,opc_recommendation_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_recommendations: WebMappingRelated<opc_recommendation_RelatedOne,opc_recommendation_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_recommendations: WebMappingCUDA<opc_recommendation_Create,opc_recommendation_Update,opc_recommendation_Select>;
}
interface opc_reminder_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_notifyadditionalusers?: boolean | null;
  opc_notifybyemail?: boolean | null;
  opc_notifycaseowner?: boolean | null;
  opc_notifyme?: boolean | null;
  opc_reminderdate?: Date | null;
  opc_reminderid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_reminder_statecode | null;
  statuscode?: opc_reminder_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_reminder_Relationships {
}
interface opc_reminder extends opc_reminder_Base, opc_reminder_Relationships {
  opc_complaintid_bind$opc_complaints?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_reminder_Create extends opc_reminder {
}
interface opc_reminder_Update extends opc_reminder {
}
interface opc_reminder_Select {
  createdby_guid: WebAttribute<opc_reminder_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_reminder_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_reminder_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_reminder_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_reminder_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_reminder_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_reminder_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_complaintid_guid: WebAttribute<opc_reminder_Select, { opc_complaintid_guid: string | null }, { opc_complaintid_formatted?: string }>;
  opc_name: WebAttribute<opc_reminder_Select, { opc_name: string | null }, {  }>;
  opc_notifyadditionalusers: WebAttribute<opc_reminder_Select, { opc_notifyadditionalusers: boolean | null }, {  }>;
  opc_notifybyemail: WebAttribute<opc_reminder_Select, { opc_notifybyemail: boolean | null }, {  }>;
  opc_notifycaseowner: WebAttribute<opc_reminder_Select, { opc_notifycaseowner: boolean | null }, {  }>;
  opc_notifyme: WebAttribute<opc_reminder_Select, { opc_notifyme: boolean | null }, {  }>;
  opc_reminderdate: WebAttribute<opc_reminder_Select, { opc_reminderdate: Date | null }, { opc_reminderdate_formatted?: string }>;
  opc_reminderid: WebAttribute<opc_reminder_Select, { opc_reminderid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_reminder_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_reminder_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_reminder_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_reminder_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_reminder_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_reminder_Select, { statecode: opc_reminder_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_reminder_Select, { statuscode: opc_reminder_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_reminder_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_reminder_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_reminder_Select, { versionnumber: number | null }, {  }>;
}
interface opc_reminder_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_complaintid_guid: XQW.Guid;
  opc_name: string;
  opc_notifyadditionalusers: boolean;
  opc_notifybyemail: boolean;
  opc_notifycaseowner: boolean;
  opc_notifyme: boolean;
  opc_reminderdate: Date;
  opc_reminderid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_reminder_statecode;
  statuscode: opc_reminder_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_reminder_Expand {
  opc_complaintid: WebExpand<opc_reminder_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
}
interface opc_reminder_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_complaintid_formatted?: string;
  opc_reminderdate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_reminder_Result extends opc_reminder_Base, opc_reminder_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_complaintid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_reminder_RelatedOne {
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface opc_reminder_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_reminders: WebMappingRetrieve<opc_reminder_Select,opc_reminder_Expand,opc_reminder_Filter,opc_reminder_Fixed,opc_reminder_Result,opc_reminder_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_reminders: WebMappingRelated<opc_reminder_RelatedOne,opc_reminder_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_reminders: WebMappingCUDA<opc_reminder_Create,opc_reminder_Update,opc_reminder_Select>;
}
interface opc_RiskAppetite_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskappetiteid?: string | null;
  opc_value?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskappetite_statecode | null;
  statuscode?: opc_riskappetite_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAppetite_Relationships {
  opc_RiskAssessmentCategory_ActualRiskAppe?: opc_RiskAssessmentCategory_Result[] | null;
  opc_RiskAssessmentCategory_SuggestedRiskA?: opc_RiskAssessmentCategory_Result[] | null;
  opc_RiskAssessment_ActualRiskAppetite_opc?: opc_RiskAssessment_Result[] | null;
  opc_RiskAssessment_SuggestedRiskAppetite_?: opc_RiskAssessment_Result[] | null;
  opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite?: opc_RiskAssessmentDefinitionTemplate_Result[] | null;
}
interface opc_RiskAppetite extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAppetite_Create extends opc_RiskAppetite {
}
interface opc_RiskAppetite_Update extends opc_RiskAppetite {
}
interface opc_RiskAppetite_Select {
  createdby_guid: WebAttribute<opc_RiskAppetite_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAppetite_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAppetite_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAppetite_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAppetite_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAppetite_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAppetite_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAppetite_Select, { opc_name: string | null }, {  }>;
  opc_riskappetiteid: WebAttribute<opc_RiskAppetite_Select, { opc_riskappetiteid: string | null }, {  }>;
  opc_value: WebAttribute<opc_RiskAppetite_Select, { opc_value: number | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_RiskAppetite_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAppetite_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAppetite_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAppetite_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAppetite_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAppetite_Select, { statecode: opc_riskappetite_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAppetite_Select, { statuscode: opc_riskappetite_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAppetite_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAppetite_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAppetite_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAppetite_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskappetiteid: XQW.Guid;
  opc_value: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskappetite_statecode;
  statuscode: opc_riskappetite_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAppetite_Expand {
  opc_RiskAssessmentCategory_ActualRiskAppe: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory_ActualRiskAppe: opc_RiskAssessmentCategory_Result[] }>;
  opc_RiskAssessmentCategory_SuggestedRiskA: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory_SuggestedRiskA: opc_RiskAssessmentCategory_Result[] }>;
  opc_RiskAssessment_ActualRiskAppetite_opc: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_ActualRiskAppetite_opc: opc_RiskAssessment_Result[] }>;
  opc_RiskAssessment_SuggestedRiskAppetite_: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_SuggestedRiskAppetite_: opc_RiskAssessment_Result[] }>;
  opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite: opc_RiskAssessmentDefinitionTemplate_Result[] }>;
}
interface opc_RiskAppetite_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAppetite_Result extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAppetite_RelatedOne {
}
interface opc_RiskAppetite_RelatedMany {
  opc_RiskAssessmentCategory_ActualRiskAppe: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_RiskAssessmentCategory_SuggestedRiskA: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_RiskAssessment_ActualRiskAppetite_opc: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_RiskAssessment_SuggestedRiskAppetite_: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskappetites: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskappetites: WebMappingRelated<opc_RiskAppetite_RelatedOne,opc_RiskAppetite_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskappetites: WebMappingCUDA<opc_RiskAppetite_Create,opc_RiskAppetite_Update,opc_RiskAppetite_Select>;
}
interface opc_RiskAssessment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_actualriskappetitevalue?: number | null;
  opc_bypassrationale?: string | null;
  opc_bypasssuggestedriskappetite?: boolean | null;
  opc_name?: string | null;
  opc_riskassessmentid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessment_statecode | null;
  statuscode?: opc_riskassessment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessment_Relationships {
  opc_ActualRiskAppetite?: opc_RiskAppetite_Result | null;
  opc_Complaint?: opc_complaint_Result | null;
  opc_RiskAssessmentCategory_RiskAssessment?: opc_RiskAssessmentCategory_Result[] | null;
  opc_RiskAssessmentType?: opc_RiskAssessmentType_Result | null;
  opc_SuggestedRiskAppetite?: opc_RiskAppetite_Result | null;
  opc_riskassessment_riskassessmentdefinitions_riskassessment?: opc_RiskAssessmentDefinition_Result[] | null;
}
interface opc_RiskAssessment extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
  opc_ActualRiskAppetite_bind$opc_riskappetites?: string | null;
  opc_BypassInitiatedBy_bind$systemusers?: string | null;
  opc_Complaint_bind$opc_complaints?: string | null;
  opc_RiskAssessmentType_bind$opc_riskassessmenttypes?: string | null;
  opc_SuggestedRiskAppetite_bind$opc_riskappetites?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessment_Create extends opc_RiskAssessment {
}
interface opc_RiskAssessment_Update extends opc_RiskAssessment {
}
interface opc_RiskAssessment_Select {
  createdby_guid: WebAttribute<opc_RiskAssessment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_actualriskappetite_guid: WebAttribute<opc_RiskAssessment_Select, { opc_actualriskappetite_guid: string | null }, { opc_actualriskappetite_formatted?: string }>;
  opc_actualriskappetitevalue: WebAttribute<opc_RiskAssessment_Select, { opc_actualriskappetitevalue: number | null }, {  }>;
  opc_bypassinitiatedby_guid: WebAttribute<opc_RiskAssessment_Select, { opc_bypassinitiatedby_guid: string | null }, { opc_bypassinitiatedby_formatted?: string }>;
  opc_bypassrationale: WebAttribute<opc_RiskAssessment_Select, { opc_bypassrationale: string | null }, {  }>;
  opc_bypasssuggestedriskappetite: WebAttribute<opc_RiskAssessment_Select, { opc_bypasssuggestedriskappetite: boolean | null }, {  }>;
  opc_complaint_guid: WebAttribute<opc_RiskAssessment_Select, { opc_complaint_guid: string | null }, { opc_complaint_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessment_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentid: WebAttribute<opc_RiskAssessment_Select, { opc_riskassessmentid: string | null }, {  }>;
  opc_riskassessmenttype_guid: WebAttribute<opc_RiskAssessment_Select, { opc_riskassessmenttype_guid: string | null }, { opc_riskassessmenttype_formatted?: string }>;
  opc_suggestedriskappetite_guid: WebAttribute<opc_RiskAssessment_Select, { opc_suggestedriskappetite_guid: string | null }, { opc_suggestedriskappetite_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessment_Select, { statecode: opc_riskassessment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessment_Select, { statuscode: opc_riskassessment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessment_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_actualriskappetite_guid: XQW.Guid;
  opc_actualriskappetitevalue: number;
  opc_bypassinitiatedby_guid: XQW.Guid;
  opc_bypassrationale: string;
  opc_bypasssuggestedriskappetite: boolean;
  opc_complaint_guid: XQW.Guid;
  opc_name: string;
  opc_riskassessmentid: XQW.Guid;
  opc_riskassessmenttype_guid: XQW.Guid;
  opc_suggestedriskappetite_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessment_statecode;
  statuscode: opc_riskassessment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessment_Expand {
  opc_ActualRiskAppetite: WebExpand<opc_RiskAssessment_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_ActualRiskAppetite: opc_RiskAppetite_Result }>;
  opc_Complaint: WebExpand<opc_RiskAssessment_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_Complaint: opc_complaint_Result }>;
  opc_RiskAssessmentCategory_RiskAssessment: WebExpand<opc_RiskAssessment_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory_RiskAssessment: opc_RiskAssessmentCategory_Result[] }>;
  opc_RiskAssessmentType: WebExpand<opc_RiskAssessment_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { opc_RiskAssessmentType: opc_RiskAssessmentType_Result }>;
  opc_SuggestedRiskAppetite: WebExpand<opc_RiskAssessment_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_SuggestedRiskAppetite: opc_RiskAppetite_Result }>;
  opc_riskassessment_riskassessmentdefinitions_riskassessment: WebExpand<opc_RiskAssessment_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_riskassessment_riskassessmentdefinitions_riskassessment: opc_RiskAssessmentDefinition_Result[] }>;
}
interface opc_RiskAssessment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_actualriskappetite_formatted?: string;
  opc_bypassinitiatedby_formatted?: string;
  opc_complaint_formatted?: string;
  opc_riskassessmenttype_formatted?: string;
  opc_suggestedriskappetite_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessment_Result extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_actualriskappetite_guid: string | null;
  opc_bypassinitiatedby_guid: string | null;
  opc_complaint_guid: string | null;
  opc_riskassessmenttype_guid: string | null;
  opc_suggestedriskappetite_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessment_RelatedOne {
  opc_ActualRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  opc_Complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
  opc_SuggestedRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
}
interface opc_RiskAssessment_RelatedMany {
  opc_RiskAssessmentCategory_RiskAssessment: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_riskassessment_riskassessmentdefinitions_riskassessment: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessments: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessments: WebMappingRelated<opc_RiskAssessment_RelatedOne,opc_RiskAssessment_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessments: WebMappingCUDA<opc_RiskAssessment_Create,opc_RiskAssessment_Update,opc_RiskAssessment_Select>;
}
interface opc_RiskAssessmentCategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_bypassrationale?: string | null;
  opc_bypasssuggestedriskappetite?: boolean | null;
  opc_name?: string | null;
  opc_riskassessmentcategoryid?: string | null;
  opc_sequence?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentcategory_statecode | null;
  statuscode?: opc_riskassessmentcategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentCategory_Relationships {
  opc_ActualRiskAppetite?: opc_RiskAppetite_Result | null;
  opc_RiskAssessment?: opc_RiskAssessment_Result | null;
  opc_RiskAssessmentCategoryTemplate?: opc_RiskAssessmentCategoryTemplate_Result | null;
  opc_RiskAssessmentDefinition_RiskAssessme?: opc_RiskAssessmentDefinition_Result[] | null;
  opc_RiskAssessmentType?: opc_RiskAssessmentType_Result | null;
  opc_SuggestedRiskAppetite?: opc_RiskAppetite_Result | null;
}
interface opc_RiskAssessmentCategory extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
  opc_ActualRiskAppetite_bind$opc_riskappetites?: string | null;
  opc_BypassInitiatedBy_bind$systemusers?: string | null;
  opc_RiskAssessmentCategoryTemplate_bind$opc_riskassessmentcategorytemplates?: string | null;
  opc_RiskAssessmentType_bind$opc_riskassessmenttypes?: string | null;
  opc_RiskAssessment_bind$opc_riskassessments?: string | null;
  opc_SuggestedRiskAppetite_bind$opc_riskappetites?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentCategory_Create extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategory_Update extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategory_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentCategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentCategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentCategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_actualriskappetite_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_actualriskappetite_guid: string | null }, { opc_actualriskappetite_formatted?: string }>;
  opc_bypassinitiatedby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_bypassinitiatedby_guid: string | null }, { opc_bypassinitiatedby_formatted?: string }>;
  opc_bypassrationale: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_bypassrationale: string | null }, {  }>;
  opc_bypasssuggestedriskappetite: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_bypasssuggestedriskappetite: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_name: string | null }, {  }>;
  opc_riskassessment_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessment_guid: string | null }, { opc_riskassessment_formatted?: string }>;
  opc_riskassessmentcategoryid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessmentcategoryid: string | null }, {  }>;
  opc_riskassessmentcategorytemplate_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessmentcategorytemplate_guid: string | null }, { opc_riskassessmentcategorytemplate_formatted?: string }>;
  opc_riskassessmenttype_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessmenttype_guid: string | null }, { opc_riskassessmenttype_formatted?: string }>;
  opc_sequence: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_sequence: number | null }, {  }>;
  opc_suggestedriskappetite_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_suggestedriskappetite_guid: string | null }, { opc_suggestedriskappetite_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentCategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentCategory_Select, { statecode: opc_riskassessmentcategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentCategory_Select, { statuscode: opc_riskassessmentcategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentCategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentCategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentCategory_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentCategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_actualriskappetite_guid: XQW.Guid;
  opc_bypassinitiatedby_guid: XQW.Guid;
  opc_bypassrationale: string;
  opc_bypasssuggestedriskappetite: boolean;
  opc_name: string;
  opc_riskassessment_guid: XQW.Guid;
  opc_riskassessmentcategoryid: XQW.Guid;
  opc_riskassessmentcategorytemplate_guid: XQW.Guid;
  opc_riskassessmenttype_guid: XQW.Guid;
  opc_sequence: number;
  opc_suggestedriskappetite_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentcategory_statecode;
  statuscode: opc_riskassessmentcategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentCategory_Expand {
  opc_ActualRiskAppetite: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_ActualRiskAppetite: opc_RiskAppetite_Result }>;
  opc_RiskAssessment: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment: opc_RiskAssessment_Result }>;
  opc_RiskAssessmentCategoryTemplate: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { opc_RiskAssessmentCategoryTemplate: opc_RiskAssessmentCategoryTemplate_Result }>;
  opc_RiskAssessmentDefinition_RiskAssessme: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_RiskAssessmentDefinition_RiskAssessme: opc_RiskAssessmentDefinition_Result[] }>;
  opc_RiskAssessmentType: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { opc_RiskAssessmentType: opc_RiskAssessmentType_Result }>;
  opc_SuggestedRiskAppetite: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_SuggestedRiskAppetite: opc_RiskAppetite_Result }>;
}
interface opc_RiskAssessmentCategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_actualriskappetite_formatted?: string;
  opc_bypassinitiatedby_formatted?: string;
  opc_riskassessment_formatted?: string;
  opc_riskassessmentcategorytemplate_formatted?: string;
  opc_riskassessmenttype_formatted?: string;
  opc_suggestedriskappetite_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentCategory_Result extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_actualriskappetite_guid: string | null;
  opc_bypassinitiatedby_guid: string | null;
  opc_riskassessment_guid: string | null;
  opc_riskassessmentcategorytemplate_guid: string | null;
  opc_riskassessmenttype_guid: string | null;
  opc_suggestedriskappetite_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentCategory_RelatedOne {
  opc_ActualRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  opc_RiskAssessment: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_RiskAssessmentCategoryTemplate: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
  opc_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
  opc_SuggestedRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
}
interface opc_RiskAssessmentCategory_RelatedMany {
  opc_RiskAssessmentDefinition_RiskAssessme: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentcategories: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentcategories: WebMappingRelated<opc_RiskAssessmentCategory_RelatedOne,opc_RiskAssessmentCategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentcategories: WebMappingCUDA<opc_RiskAssessmentCategory_Create,opc_RiskAssessmentCategory_Update,opc_RiskAssessmentCategory_Select>;
}
interface opc_RiskAssessmentCategoryTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskassessmentcategorytemplateid?: string | null;
  opc_sequence?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentcategorytemplate_statecode | null;
  statuscode?: opc_riskassessmentcategorytemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentCategoryTemplate_Relationships {
  opc_RiskAssessmentFactorTemplate_RiskAsse?: opc_RiskAssessmentFactorTemplate_Result[] | null;
  opc_RiskAssessmentType?: opc_RiskAssessmentType_Result | null;
  opc_opc_riskassessmentcategorytemplate_opc_riskassessmentcategory_RiskAssessmentCategoryTemplate?: opc_RiskAssessmentCategory_Result[] | null;
}
interface opc_RiskAssessmentCategoryTemplate extends opc_RiskAssessmentCategoryTemplate_Base, opc_RiskAssessmentCategoryTemplate_Relationships {
  opc_RiskAssessmentType_bind$opc_riskassessmenttypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentCategoryTemplate_Create extends opc_RiskAssessmentCategoryTemplate {
}
interface opc_RiskAssessmentCategoryTemplate_Update extends opc_RiskAssessmentCategoryTemplate {
}
interface opc_RiskAssessmentCategoryTemplate_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentcategorytemplateid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { opc_riskassessmentcategorytemplateid: string | null }, {  }>;
  opc_riskassessmenttype_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { opc_riskassessmenttype_guid: string | null }, { opc_riskassessmenttype_formatted?: string }>;
  opc_sequence: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { opc_sequence: number | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { statecode: opc_riskassessmentcategorytemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { statuscode: opc_riskassessmentcategorytemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentCategoryTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentCategoryTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskassessmentcategorytemplateid: XQW.Guid;
  opc_riskassessmenttype_guid: XQW.Guid;
  opc_sequence: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentcategorytemplate_statecode;
  statuscode: opc_riskassessmentcategorytemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentCategoryTemplate_Expand {
  opc_RiskAssessmentFactorTemplate_RiskAsse: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { opc_RiskAssessmentFactorTemplate_RiskAsse: opc_RiskAssessmentFactorTemplate_Result[] }>;
  opc_RiskAssessmentType: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { opc_RiskAssessmentType: opc_RiskAssessmentType_Result }>;
  opc_opc_riskassessmentcategorytemplate_opc_riskassessmentcategory_RiskAssessmentCategoryTemplate: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_opc_riskassessmentcategorytemplate_opc_riskassessmentcategory_RiskAssessmentCategoryTemplate: opc_RiskAssessmentCategory_Result[] }>;
}
interface opc_RiskAssessmentCategoryTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskassessmenttype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentCategoryTemplate_Result extends opc_RiskAssessmentCategoryTemplate_Base, opc_RiskAssessmentCategoryTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskassessmenttype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentCategoryTemplate_RelatedOne {
  opc_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
}
interface opc_RiskAssessmentCategoryTemplate_RelatedMany {
  opc_RiskAssessmentFactorTemplate_RiskAsse: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
  opc_opc_riskassessmentcategorytemplate_opc_riskassessmentcategory_RiskAssessmentCategoryTemplate: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentcategorytemplates: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentcategorytemplates: WebMappingRelated<opc_RiskAssessmentCategoryTemplate_RelatedOne,opc_RiskAssessmentCategoryTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentcategorytemplates: WebMappingCUDA<opc_RiskAssessmentCategoryTemplate_Create,opc_RiskAssessmentCategoryTemplate_Update,opc_RiskAssessmentCategoryTemplate_Select>;
}
interface opc_RiskAssessmentDefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_isselected?: boolean | null;
  opc_name?: string | null;
  opc_riskassessmentdefinitionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentdefinition_statecode | null;
  statuscode?: opc_riskassessmentdefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentDefinition_Relationships {
  opc_RiskAssessmentCategory?: opc_RiskAssessmentCategory_Result | null;
  opc_RiskAssessmentDefinitionTemplate?: opc_RiskAssessmentDefinitionTemplate_Result | null;
  opc_RiskAssessmentFactorTemplate?: opc_RiskAssessmentFactorTemplate_Result | null;
}
interface opc_RiskAssessmentDefinition extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
  opc_RiskAssessmentCategory_bind$opc_riskassessmentcategories?: string | null;
  opc_RiskAssessmentDefinitionTemplate_bind$opc_riskassessmentdefinitiontemplates?: string | null;
  opc_RiskAssessmentFactorTemplate_bind$opc_riskassessmentfactortemplates?: string | null;
  opc_riskassessmentid_bind$opc_riskassessments?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentDefinition_Create extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinition_Update extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinition_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentDefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentDefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentDefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_isselected: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_isselected: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentcategory_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentcategory_guid: string | null }, { opc_riskassessmentcategory_formatted?: string }>;
  opc_riskassessmentdefinitionid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentdefinitionid: string | null }, {  }>;
  opc_riskassessmentdefinitiontemplate_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentdefinitiontemplate_guid: string | null }, { opc_riskassessmentdefinitiontemplate_formatted?: string }>;
  opc_riskassessmentfactortemplate_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentfactortemplate_guid: string | null }, { opc_riskassessmentfactortemplate_formatted?: string }>;
  opc_riskassessmentid_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentid_guid: string | null }, { opc_riskassessmentid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentDefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentDefinition_Select, { statecode: opc_riskassessmentdefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentDefinition_Select, { statuscode: opc_riskassessmentdefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentDefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentDefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentDefinition_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentDefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_isselected: boolean;
  opc_name: string;
  opc_riskassessmentcategory_guid: XQW.Guid;
  opc_riskassessmentdefinitionid: XQW.Guid;
  opc_riskassessmentdefinitiontemplate_guid: XQW.Guid;
  opc_riskassessmentfactortemplate_guid: XQW.Guid;
  opc_riskassessmentid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentdefinition_statecode;
  statuscode: opc_riskassessmentdefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentDefinition_Expand {
  opc_RiskAssessmentCategory: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result }>;
  opc_RiskAssessmentDefinitionTemplate: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result }>;
  opc_RiskAssessmentFactorTemplate: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result }>;
  opc_riskassessmentid: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_riskassessmentid: opc_RiskAssessment_Result }>;
}
interface opc_RiskAssessmentDefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskassessmentcategory_formatted?: string;
  opc_riskassessmentdefinitiontemplate_formatted?: string;
  opc_riskassessmentfactortemplate_formatted?: string;
  opc_riskassessmentid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentDefinition_Result extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskassessmentcategory_guid: string | null;
  opc_riskassessmentdefinitiontemplate_guid: string | null;
  opc_riskassessmentfactortemplate_guid: string | null;
  opc_riskassessmentid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentDefinition_RelatedOne {
  opc_RiskAssessmentCategory: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_RiskAssessmentDefinitionTemplate: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
  opc_RiskAssessmentFactorTemplate: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
  opc_riskassessmentid: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
}
interface opc_RiskAssessmentDefinition_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_riskassessmentdefinitions: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentdefinitions: WebMappingRelated<opc_RiskAssessmentDefinition_RelatedOne,opc_RiskAssessmentDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentdefinitions: WebMappingCUDA<opc_RiskAssessmentDefinition_Create,opc_RiskAssessmentDefinition_Update,opc_RiskAssessmentDefinition_Select>;
}
interface opc_RiskAssessmentDefinitionTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskassessmentdefinitiontemplateid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentdefinitiontemplate_statecode | null;
  statuscode?: opc_riskassessmentdefinitiontemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentDefinitionTemplate_Relationships {
  opc_RiskAppetite?: opc_RiskAppetite_Result | null;
  opc_RiskAssessmentDefinition_RiskAssessmentDe?: opc_RiskAssessmentDefinition_Result[] | null;
  opc_RiskAssessmentFactorTemplate?: opc_RiskAssessmentFactorTemplate_Result | null;
}
interface opc_RiskAssessmentDefinitionTemplate extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
  opc_RiskAppetite_bind$opc_riskappetites?: string | null;
  opc_RiskAssessmentFactorTemplate_bind$opc_riskassessmentfactortemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentDefinitionTemplate_Create extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentDefinitionTemplate_Update extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentDefinitionTemplate_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_name: string | null }, {  }>;
  opc_riskappetite_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_riskappetite_guid: string | null }, { opc_riskappetite_formatted?: string }>;
  opc_riskassessmentdefinitiontemplateid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_riskassessmentdefinitiontemplateid: string | null }, {  }>;
  opc_riskassessmentfactortemplate_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_riskassessmentfactortemplate_guid: string | null }, { opc_riskassessmentfactortemplate_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { statecode: opc_riskassessmentdefinitiontemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { statuscode: opc_riskassessmentdefinitiontemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentDefinitionTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskappetite_guid: XQW.Guid;
  opc_riskassessmentdefinitiontemplateid: XQW.Guid;
  opc_riskassessmentfactortemplate_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentdefinitiontemplate_statecode;
  statuscode: opc_riskassessmentdefinitiontemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentDefinitionTemplate_Expand {
  opc_RiskAppetite: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_RiskAppetite: opc_RiskAppetite_Result }>;
  opc_RiskAssessmentDefinition_RiskAssessmentDe: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_RiskAssessmentDefinition_RiskAssessmentDe: opc_RiskAssessmentDefinition_Result[] }>;
  opc_RiskAssessmentFactorTemplate: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result }>;
}
interface opc_RiskAssessmentDefinitionTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskappetite_formatted?: string;
  opc_riskassessmentfactortemplate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentDefinitionTemplate_Result extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskappetite_guid: string | null;
  opc_riskassessmentfactortemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentDefinitionTemplate_RelatedOne {
  opc_RiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  opc_RiskAssessmentFactorTemplate: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
}
interface opc_RiskAssessmentDefinitionTemplate_RelatedMany {
  opc_RiskAssessmentDefinition_RiskAssessmentDe: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentdefinitiontemplates: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentdefinitiontemplates: WebMappingRelated<opc_RiskAssessmentDefinitionTemplate_RelatedOne,opc_RiskAssessmentDefinitionTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentdefinitiontemplates: WebMappingCUDA<opc_RiskAssessmentDefinitionTemplate_Create,opc_RiskAssessmentDefinitionTemplate_Update,opc_RiskAssessmentDefinitionTemplate_Select>;
}
interface opc_RiskAssessmentFactorTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskassessmentfactortemplateid?: string | null;
  opc_sequence?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentfactortemplate_statecode | null;
  statuscode?: opc_riskassessmentfactortemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentFactorTemplate_Relationships {
  opc_RiskAssessmentCategoryTemplate?: opc_RiskAssessmentCategoryTemplate_Result | null;
  opc_RiskAssessmentDefinitionTemplate_Risk?: opc_RiskAssessmentDefinitionTemplate_Result[] | null;
  opc_RiskAssessmentDefinition_RiskAssessmentFa?: opc_RiskAssessmentDefinition_Result[] | null;
}
interface opc_RiskAssessmentFactorTemplate extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
  opc_RiskAssessmentCategoryTemplate_bind$opc_riskassessmentcategorytemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentFactorTemplate_Create extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Update extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentcategorytemplate_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_riskassessmentcategorytemplate_guid: string | null }, { opc_riskassessmentcategorytemplate_formatted?: string }>;
  opc_riskassessmentfactortemplateid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_riskassessmentfactortemplateid: string | null }, {  }>;
  opc_sequence: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_sequence: number | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { statecode: opc_riskassessmentfactortemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { statuscode: opc_riskassessmentfactortemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentFactorTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskassessmentcategorytemplate_guid: XQW.Guid;
  opc_riskassessmentfactortemplateid: XQW.Guid;
  opc_sequence: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentfactortemplate_statecode;
  statuscode: opc_riskassessmentfactortemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentFactorTemplate_Expand {
  opc_RiskAssessmentCategoryTemplate: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { opc_RiskAssessmentCategoryTemplate: opc_RiskAssessmentCategoryTemplate_Result }>;
  opc_RiskAssessmentDefinitionTemplate_Risk: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { opc_RiskAssessmentDefinitionTemplate_Risk: opc_RiskAssessmentDefinitionTemplate_Result[] }>;
  opc_RiskAssessmentDefinition_RiskAssessmentFa: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_RiskAssessmentDefinition_RiskAssessmentFa: opc_RiskAssessmentDefinition_Result[] }>;
}
interface opc_RiskAssessmentFactorTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskassessmentcategorytemplate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentFactorTemplate_Result extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskassessmentcategorytemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentFactorTemplate_RelatedOne {
  opc_RiskAssessmentCategoryTemplate: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
}
interface opc_RiskAssessmentFactorTemplate_RelatedMany {
  opc_RiskAssessmentDefinitionTemplate_Risk: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
  opc_RiskAssessmentDefinition_RiskAssessmentFa: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentfactortemplates: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentfactortemplates: WebMappingRelated<opc_RiskAssessmentFactorTemplate_RelatedOne,opc_RiskAssessmentFactorTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentfactortemplates: WebMappingCUDA<opc_RiskAssessmentFactorTemplate_Create,opc_RiskAssessmentFactorTemplate_Update,opc_RiskAssessmentFactorTemplate_Select>;
}
interface opc_RiskAssessmentType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskassessmenttypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmenttype_statecode | null;
  statuscode?: opc_riskassessmenttype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentType_Relationships {
  opc_RiskAssessmentCategoryTemplate_RiskAs?: opc_RiskAssessmentCategoryTemplate_Result[] | null;
  opc_RiskAssessment_RiskAssessmentType_opc?: opc_RiskAssessment_Result[] | null;
  opc_opc_riskassessmenttype_opc_riskassessmentcategory_RiskAssessmentType?: opc_RiskAssessmentCategory_Result[] | null;
}
interface opc_RiskAssessmentType extends opc_RiskAssessmentType_Base, opc_RiskAssessmentType_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentType_Create extends opc_RiskAssessmentType {
}
interface opc_RiskAssessmentType_Update extends opc_RiskAssessmentType {
}
interface opc_RiskAssessmentType_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessmentType_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmenttypeid: WebAttribute<opc_RiskAssessmentType_Select, { opc_riskassessmenttypeid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentType_Select, { statecode: opc_riskassessmenttype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentType_Select, { statuscode: opc_riskassessmenttype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentType_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentType_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskassessmenttypeid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmenttype_statecode;
  statuscode: opc_riskassessmenttype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentType_Expand {
  opc_RiskAssessmentCategoryTemplate_RiskAs: WebExpand<opc_RiskAssessmentType_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { opc_RiskAssessmentCategoryTemplate_RiskAs: opc_RiskAssessmentCategoryTemplate_Result[] }>;
  opc_RiskAssessment_RiskAssessmentType_opc: WebExpand<opc_RiskAssessmentType_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_RiskAssessmentType_opc: opc_RiskAssessment_Result[] }>;
  opc_opc_riskassessmenttype_opc_riskassessmentcategory_RiskAssessmentType: WebExpand<opc_RiskAssessmentType_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_opc_riskassessmenttype_opc_riskassessmentcategory_RiskAssessmentType: opc_RiskAssessmentCategory_Result[] }>;
}
interface opc_RiskAssessmentType_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentType_Result extends opc_RiskAssessmentType_Base, opc_RiskAssessmentType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentType_RelatedOne {
}
interface opc_RiskAssessmentType_RelatedMany {
  opc_RiskAssessmentCategoryTemplate_RiskAs: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
  opc_RiskAssessment_RiskAssessmentType_opc: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_opc_riskassessmenttype_opc_riskassessmentcategory_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmenttypes: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmenttypes: WebMappingRelated<opc_RiskAssessmentType_RelatedOne,opc_RiskAssessmentType_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmenttypes: WebMappingCUDA<opc_RiskAssessmentType_Create,opc_RiskAssessmentType_Update,opc_RiskAssessmentType_Select>;
}
interface opc_sector_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_sectorid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_sector_statecode | null;
  statuscode?: opc_sector_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_sector_Relationships {
  opc_sector_complaints_sector?: opc_complaint_Result[] | null;
  opc_sector_parentsectorid_sectors?: opc_sector_Result[] | null;
}
interface opc_sector extends opc_sector_Base, opc_sector_Relationships {
  opc_parentsectorid_bind$opc_sectors?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_sector_Create extends opc_sector {
}
interface opc_sector_Update extends opc_sector {
}
interface opc_sector_Select {
  createdby_guid: WebAttribute<opc_sector_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_sector_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_sector_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_sector_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_sector_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_sector_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_sector_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_sector_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_sector_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_sector_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_sector_Select, { opc_namefrench: string | null }, {  }>;
  opc_parentsectorid_guid: WebAttribute<opc_sector_Select, { opc_parentsectorid_guid: string | null }, { opc_parentsectorid_formatted?: string }>;
  opc_sectorid: WebAttribute<opc_sector_Select, { opc_sectorid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_sector_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_sector_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_sector_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_sector_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_sector_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_sector_Select, { statecode: opc_sector_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_sector_Select, { statuscode: opc_sector_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_sector_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_sector_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_sector_Select, { versionnumber: number | null }, {  }>;
}
interface opc_sector_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_parentsectorid_guid: XQW.Guid;
  opc_sectorid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_sector_statecode;
  statuscode: opc_sector_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_sector_Expand {
  opc_parentsectorid: WebExpand<opc_sector_Expand, opc_sector_Select, opc_sector_Filter, { opc_parentsectorid: opc_sector_Result }>;
  opc_sector_complaints_sector: WebExpand<opc_sector_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_sector_complaints_sector: opc_complaint_Result[] }>;
  opc_sector_parentsectorid_sectors: WebExpand<opc_sector_Expand, opc_sector_Select, opc_sector_Filter, { opc_sector_parentsectorid_sectors: opc_sector_Result[] }>;
}
interface opc_sector_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_parentsectorid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_sector_Result extends opc_sector_Base, opc_sector_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_parentsectorid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_sector_RelatedOne {
  opc_parentsectorid: WebMappingRetrieve<opc_sector_Select,opc_sector_Expand,opc_sector_Filter,opc_sector_Fixed,opc_sector_Result,opc_sector_FormattedResult>;
}
interface opc_sector_RelatedMany {
  opc_sector_complaints_sector: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_sector_parentsectorid_sectors: WebMappingRetrieve<opc_sector_Select,opc_sector_Expand,opc_sector_Filter,opc_sector_Fixed,opc_sector_Result,opc_sector_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_sectors: WebMappingRetrieve<opc_sector_Select,opc_sector_Expand,opc_sector_Filter,opc_sector_Fixed,opc_sector_Result,opc_sector_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_sectors: WebMappingRelated<opc_sector_RelatedOne,opc_sector_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_sectors: WebMappingCUDA<opc_sector_Create,opc_sector_Update,opc_sector_Select>;
}
interface opc_theme_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_themeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_theme_statecode | null;
  statuscode?: opc_theme_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_theme_Relationships {
  opc_theme_topics_themeid?: opc_topic_Result[] | null;
}
interface opc_theme extends opc_theme_Base, opc_theme_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_theme_Create extends opc_theme {
}
interface opc_theme_Update extends opc_theme {
}
interface opc_theme_Select {
  createdby_guid: WebAttribute<opc_theme_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_theme_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_theme_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_theme_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_theme_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_theme_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_theme_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_theme_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_theme_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_theme_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_theme_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_theme_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_theme_Select, { opc_namefrench: string | null }, {  }>;
  opc_themeid: WebAttribute<opc_theme_Select, { opc_themeid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_theme_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_theme_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_theme_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_theme_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_theme_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_theme_Select, { statecode: opc_theme_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_theme_Select, { statuscode: opc_theme_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_theme_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_theme_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_theme_Select, { versionnumber: number | null }, {  }>;
}
interface opc_theme_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_descriptionfrench: string;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_themeid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_theme_statecode;
  statuscode: opc_theme_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_theme_Expand {
  opc_theme_topics_themeid: WebExpand<opc_theme_Expand, opc_topic_Select, opc_topic_Filter, { opc_theme_topics_themeid: opc_topic_Result[] }>;
}
interface opc_theme_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_theme_Result extends opc_theme_Base, opc_theme_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_theme_RelatedOne {
}
interface opc_theme_RelatedMany {
  opc_theme_topics_themeid: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_themes: WebMappingRetrieve<opc_theme_Select,opc_theme_Expand,opc_theme_Filter,opc_theme_Fixed,opc_theme_Result,opc_theme_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_themes: WebMappingRelated<opc_theme_RelatedOne,opc_theme_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_themes: WebMappingCUDA<opc_theme_Create,opc_theme_Update,opc_theme_Select>;
}
interface opc_topic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_topicid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_topic_statecode | null;
  statuscode?: opc_topic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_topic_Relationships {
  opc_complaints_topics_relatedtopics?: opc_complaint_Result[] | null;
}
interface opc_topic extends opc_topic_Base, opc_topic_Relationships {
  opc_themeid_bind$opc_themes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_topic_Create extends opc_topic {
}
interface opc_topic_Update extends opc_topic {
}
interface opc_topic_Select {
  createdby_guid: WebAttribute<opc_topic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_topic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_topic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_topic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_topic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_topic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_topic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_topic_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_topic_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_topic_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_topic_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_topic_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_topic_Select, { opc_namefrench: string | null }, {  }>;
  opc_themeid_guid: WebAttribute<opc_topic_Select, { opc_themeid_guid: string | null }, { opc_themeid_formatted?: string }>;
  opc_topicid: WebAttribute<opc_topic_Select, { opc_topicid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_topic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_topic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_topic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_topic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_topic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_topic_Select, { statecode: opc_topic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_topic_Select, { statuscode: opc_topic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_topic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_topic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_topic_Select, { versionnumber: number | null }, {  }>;
}
interface opc_topic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_descriptionfrench: string;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_themeid_guid: XQW.Guid;
  opc_topicid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_topic_statecode;
  statuscode: opc_topic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_topic_Expand {
  opc_complaints_topics_relatedtopics: WebExpand<opc_topic_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaints_topics_relatedtopics: opc_complaint_Result[] }>;
  opc_themeid: WebExpand<opc_topic_Expand, opc_theme_Select, opc_theme_Filter, { opc_themeid: opc_theme_Result }>;
}
interface opc_topic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_themeid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_topic_Result extends opc_topic_Base, opc_topic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_themeid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_topic_RelatedOne {
  opc_themeid: WebMappingRetrieve<opc_theme_Select,opc_theme_Expand,opc_theme_Filter,opc_theme_Fixed,opc_theme_Result,opc_theme_FormattedResult>;
}
interface opc_topic_RelatedMany {
  opc_complaints_topics_relatedtopics: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_topics: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_topics: WebMappingRelated<opc_topic_RelatedOne,opc_topic_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_topics: WebMappingCUDA<opc_topic_Create,opc_topic_Update,opc_topic_Select>;
}
interface QueueItem_Base extends WebEntity {
  createdon?: Date | null;
  enteredon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  objecttypecode?: queueitem_objecttypecode | null;
  overriddencreatedon?: Date | null;
  priority?: number | null;
  queueitemid?: string | null;
  sender?: string | null;
  state?: number | null;
  statecode?: queueitem_statecode | null;
  status?: number | null;
  statuscode?: queueitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  torecipients?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  workeridmodifiedon?: Date | null;
}
interface QueueItem_Relationships {
  objectid_opc_complaint?: opc_complaint_Result | null;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  workerid_systemuser_bind$systemusers?: string | null;
  workerid_team_bind$teams?: string | null;
}
interface QueueItem_Create extends QueueItem {
  objectid_activitypointer_bind$activitypointers?: string | null;
  objectid_appointment_bind$appointments?: string | null;
  objectid_email_bind$emails?: string | null;
  objectid_fax_bind$faxes?: string | null;
  objectid_knowledgearticle_bind$knowledgearticles?: string | null;
  objectid_letter_bind$letters?: string | null;
  objectid_msdyn_knowledgearticletemplate_bind$msdyn_knowledgearticletemplates?: string | null;
  objectid_opc_complaint_bind$opc_complaints?: string | null;
  objectid_phonecall_bind$phonecalls?: string | null;
  objectid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  objectid_socialactivity_bind$socialactivities?: string | null;
  objectid_task_bind$tasks?: string | null;
  queueid_bind$queues?: string | null;
}
interface QueueItem_Update extends QueueItem {
}
interface QueueItem_Select {
  createdby_guid: WebAttribute<QueueItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<QueueItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<QueueItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  enteredon: WebAttribute<QueueItem_Select, { enteredon: Date | null }, { enteredon_formatted?: string }>;
  exchangerate: WebAttribute<QueueItem_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<QueueItem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<QueueItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<QueueItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<QueueItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objectid_guid: WebAttribute<QueueItem_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  objecttypecode: WebAttribute<QueueItem_Select, { objecttypecode: queueitem_objecttypecode | null }, { objecttypecode_formatted?: string }>;
  organizationid_guid: WebAttribute<QueueItem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<QueueItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<QueueItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<QueueItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<QueueItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  priority: WebAttribute<QueueItem_Select, { priority: number | null }, {  }>;
  queueid_guid: WebAttribute<QueueItem_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  queueitemid: WebAttribute<QueueItem_Select, { queueitemid: string | null }, {  }>;
  sender: WebAttribute<QueueItem_Select, { sender: string | null }, {  }>;
  state: WebAttribute<QueueItem_Select, { state: number | null }, {  }>;
  statecode: WebAttribute<QueueItem_Select, { statecode: queueitem_statecode | null }, { statecode_formatted?: string }>;
  status: WebAttribute<QueueItem_Select, { status: number | null }, {  }>;
  statuscode: WebAttribute<QueueItem_Select, { statuscode: queueitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<QueueItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<QueueItem_Select, { title: string | null }, {  }>;
  torecipients: WebAttribute<QueueItem_Select, { torecipients: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<QueueItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<QueueItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<QueueItem_Select, { versionnumber: number | null }, {  }>;
  workerid_guid: WebAttribute<QueueItem_Select, { workerid_guid: string | null }, { workerid_formatted?: string }>;
  workeridmodifiedon: WebAttribute<QueueItem_Select, { workeridmodifiedon: Date | null }, { workeridmodifiedon_formatted?: string }>;
}
interface QueueItem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  enteredon: Date;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objectid_guid: XQW.Guid;
  objecttypecode: queueitem_objecttypecode;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  priority: number;
  queueid_guid: XQW.Guid;
  queueitemid: XQW.Guid;
  sender: string;
  state: number;
  statecode: queueitem_statecode;
  status: number;
  statuscode: queueitem_statuscode;
  timezoneruleversionnumber: number;
  title: string;
  torecipients: string;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workerid_guid: XQW.Guid;
  workeridmodifiedon: Date;
}
interface QueueItem_Expand {
  objectid_opc_complaint: WebExpand<QueueItem_Expand, opc_complaint_Select, opc_complaint_Filter, { objectid_opc_complaint: opc_complaint_Result }>;
}
interface QueueItem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  enteredon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  objectid_formatted?: string;
  objecttypecode_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  queueid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workerid_formatted?: string;
  workeridmodifiedon_formatted?: string;
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  objectid_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  queueid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workerid_guid: string | null;
}
interface QueueItem_RelatedOne {
  objectid_opc_complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface QueueItem_RelatedMany {
}
interface WebEntitiesRetrieve {
  queueitems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
}
interface WebEntitiesRelated {
  queueitems: WebMappingRelated<QueueItem_RelatedOne,QueueItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  queueitems: WebMappingCUDA<QueueItem_Create,QueueItem_Update,QueueItem_Select>;
}
interface ActivityParty_Base extends WebEntity {
  activitypartyid?: string | null;
  addressused?: string | null;
  addressusedemailcolumnnumber?: number | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  effort?: number | null;
  exchangeentryid?: string | null;
  instancetypecode?: activityparty_instancetypecode | null;
  ispartydeleted?: boolean | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  participationtypemask?: activityparty_participationtypemask | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  versionnumber?: number | null;
}
interface ActivityParty_Relationships {
  partyid_account?: Account_Result | null;
  partyid_contact?: Contact_Result | null;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
  activityid_activitypointer_bind$activitypointers?: string | null;
  activityid_appointment_bind$appointments?: string | null;
  activityid_email_bind$emails?: string | null;
  activityid_fax_bind$faxes?: string | null;
  activityid_letter_bind$letters?: string | null;
  activityid_phonecall_bind$phonecalls?: string | null;
  activityid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  activityid_socialactivity_bind$socialactivities?: string | null;
  activityid_task_bind$tasks?: string | null;
  partyid_account_bind$accounts?: string | null;
  partyid_contact_bind$contacts?: string | null;
  partyid_knowledgearticle_bind$knowledgearticles?: string | null;
  partyid_queue_bind$queues?: string | null;
  partyid_systemuser_bind$systemusers?: string | null;
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface ActivityParty_Select {
  activityid_guid: WebAttribute<ActivityParty_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
  activitypartyid: WebAttribute<ActivityParty_Select, { activitypartyid: string | null }, {  }>;
  addressused: WebAttribute<ActivityParty_Select, { addressused: string | null }, {  }>;
  addressusedemailcolumnnumber: WebAttribute<ActivityParty_Select, { addressusedemailcolumnnumber: number | null }, {  }>;
  donotemail: WebAttribute<ActivityParty_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<ActivityParty_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<ActivityParty_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<ActivityParty_Select, { donotpostalmail: boolean | null }, {  }>;
  effort: WebAttribute<ActivityParty_Select, { effort: number | null }, {  }>;
  exchangeentryid: WebAttribute<ActivityParty_Select, { exchangeentryid: string | null }, {  }>;
  instancetypecode: WebAttribute<ActivityParty_Select, { instancetypecode: activityparty_instancetypecode | null }, { instancetypecode_formatted?: string }>;
  ispartydeleted: WebAttribute<ActivityParty_Select, { ispartydeleted: boolean | null }, {  }>;
  ownerid_guid: WebAttribute<ActivityParty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ActivityParty_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ActivityParty_Select, { owninguser: string | null }, {  }>;
  participationtypemask: WebAttribute<ActivityParty_Select, { participationtypemask: activityparty_participationtypemask | null }, { participationtypemask_formatted?: string }>;
  partyid_guid: WebAttribute<ActivityParty_Select, { partyid_guid: string | null }, { partyid_formatted?: string }>;
  scheduledend: WebAttribute<ActivityParty_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<ActivityParty_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  versionnumber: WebAttribute<ActivityParty_Select, { versionnumber: number | null }, {  }>;
}
interface ActivityParty_Filter {
  activityid_guid: XQW.Guid;
  activitypartyid: XQW.Guid;
  addressused: string;
  addressusedemailcolumnnumber: number;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  effort: number;
  exchangeentryid: string;
  instancetypecode: activityparty_instancetypecode;
  ispartydeleted: boolean;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  participationtypemask: activityparty_participationtypemask;
  partyid_guid: XQW.Guid;
  scheduledend: Date;
  scheduledstart: Date;
  versionnumber: number;
}
interface ActivityParty_Expand {
  partyid_account: WebExpand<ActivityParty_Expand, Account_Select, Account_Filter, { partyid_account: Account_Result }>;
  partyid_contact: WebExpand<ActivityParty_Expand, Contact_Select, Contact_Filter, { partyid_contact: Contact_Result }>;
}
interface ActivityParty_FormattedResult {
  activityid_formatted?: string;
  instancetypecode_formatted?: string;
  ownerid_formatted?: string;
  participationtypemask_formatted?: string;
  partyid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
  "@odata.etag": string;
  activityid_guid: string | null;
  ownerid_guid: string | null;
  partyid_guid: string | null;
}
interface ActivityParty_RelatedOne {
  partyid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  partyid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface ActivityParty_RelatedMany {
}
interface WebEntitiesRetrieve {
  activityparties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
}
interface WebEntitiesRelated {
  activityparties: WebMappingRelated<ActivityParty_RelatedOne,ActivityParty_RelatedMany>;
}
interface WebEntitiesCUDA {
  activityparties: WebMappingCUDA<ActivityParty_Create,ActivityParty_Update,ActivityParty_Select>;
}
interface Connection_Base extends WebEntity {
  connectionid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  effectiveend?: Date | null;
  effectivestart?: Date | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  ismaster?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  record1objecttypecode?: connection_record1objecttypecode | null;
  record2objecttypecode?: connection_record2objecttypecode | null;
  statecode?: connection_statecode | null;
  statuscode?: connection_statuscode | null;
  versionnumber?: number | null;
}
interface Connection_Relationships {
  connection_related_connection?: Connection_Result[] | null;
  record1id_account?: Account_Result | null;
  record1id_contact?: Contact_Result | null;
  record2id_account?: Account_Result | null;
  record2id_contact?: Contact_Result | null;
}
interface Connection extends Connection_Base, Connection_Relationships {
  channelaccessprofileruleid_bind$channelaccessprofilerules?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  profileruleid1_bind$channelaccessprofilerules?: string | null;
  record1id_account_bind$accounts?: string | null;
  record1id_activitypointer_bind$activitypointers?: string | null;
  record1id_appointment_bind$appointments?: string | null;
  record1id_contact_bind$contacts?: string | null;
  record1id_email_bind$emails?: string | null;
  record1id_fax_bind$faxes?: string | null;
  record1id_goal_bind$goals?: string | null;
  record1id_knowledgearticle_bind$knowledgearticles?: string | null;
  record1id_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  record1id_letter_bind$letters?: string | null;
  record1id_phonecall_bind$phonecalls?: string | null;
  record1id_position_bind$positions?: string | null;
  record1id_processsession_bind$processsessions?: string | null;
  record1id_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  record1id_socialactivity_bind$socialactivities?: string | null;
  record1id_socialprofile_bind$socialprofiles?: string | null;
  record1id_systemuser_bind$systemusers?: string | null;
  record1id_task_bind$tasks?: string | null;
  record1id_team_bind$teams?: string | null;
  record1id_territory_bind$territories?: string | null;
  record1roleid_bind$connectionroles?: string | null;
  record2id_account_bind$accounts?: string | null;
  record2id_activitypointer_bind$activitypointers?: string | null;
  record2id_appointment_bind$appointments?: string | null;
  record2id_contact_bind$contacts?: string | null;
  record2id_email_bind$emails?: string | null;
  record2id_fax_bind$faxes?: string | null;
  record2id_goal_bind$goals?: string | null;
  record2id_knowledgearticle_bind$knowledgearticles?: string | null;
  record2id_knowledgebaserecord_bind$knowledgebaserecords?: string | null;
  record2id_letter_bind$letters?: string | null;
  record2id_phonecall_bind$phonecalls?: string | null;
  record2id_position_bind$positions?: string | null;
  record2id_processsession_bind$processsessions?: string | null;
  record2id_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  record2id_socialactivity_bind$socialactivities?: string | null;
  record2id_socialprofile_bind$socialprofiles?: string | null;
  record2id_systemuser_bind$systemusers?: string | null;
  record2id_task_bind$tasks?: string | null;
  record2id_team_bind$teams?: string | null;
  record2id_territory_bind$territories?: string | null;
  record2roleid_bind$connectionroles?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface Connection_Select {
  connectionid: WebAttribute<Connection_Select, { connectionid: string | null }, {  }>;
  createdby_guid: WebAttribute<Connection_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Connection_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Connection_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Connection_Select, { description: string | null }, {  }>;
  effectiveend: WebAttribute<Connection_Select, { effectiveend: Date | null }, { effectiveend_formatted?: string }>;
  effectivestart: WebAttribute<Connection_Select, { effectivestart: Date | null }, { effectivestart_formatted?: string }>;
  entityimageid: WebAttribute<Connection_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Connection_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Connection_Select, { importsequencenumber: number | null }, {  }>;
  ismaster: WebAttribute<Connection_Select, { ismaster: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Connection_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Connection_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Connection_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Connection_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Connection_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Connection_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Connection_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Connection_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Connection_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  record1id_guid: WebAttribute<Connection_Select, { record1id_guid: string | null }, { record1id_formatted?: string }>;
  record1objecttypecode: WebAttribute<Connection_Select, { record1objecttypecode: connection_record1objecttypecode | null }, { record1objecttypecode_formatted?: string }>;
  record1roleid_guid: WebAttribute<Connection_Select, { record1roleid_guid: string | null }, { record1roleid_formatted?: string }>;
  record2id_guid: WebAttribute<Connection_Select, { record2id_guid: string | null }, { record2id_formatted?: string }>;
  record2objecttypecode: WebAttribute<Connection_Select, { record2objecttypecode: connection_record2objecttypecode | null }, { record2objecttypecode_formatted?: string }>;
  record2roleid_guid: WebAttribute<Connection_Select, { record2roleid_guid: string | null }, { record2roleid_formatted?: string }>;
  relatedconnectionid_guid: WebAttribute<Connection_Select, { relatedconnectionid_guid: string | null }, { relatedconnectionid_formatted?: string }>;
  statecode: WebAttribute<Connection_Select, { statecode: connection_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Connection_Select, { statuscode: connection_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Connection_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<Connection_Select, { versionnumber: number | null }, {  }>;
}
interface Connection_Filter {
  connectionid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  effectiveend: Date;
  effectivestart: Date;
  entityimageid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  ismaster: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  record1id_guid: XQW.Guid;
  record1objecttypecode: connection_record1objecttypecode;
  record1roleid_guid: XQW.Guid;
  record2id_guid: XQW.Guid;
  record2objecttypecode: connection_record2objecttypecode;
  record2roleid_guid: XQW.Guid;
  relatedconnectionid_guid: XQW.Guid;
  statecode: connection_statecode;
  statuscode: connection_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface Connection_Expand {
  connection_related_connection: WebExpand<Connection_Expand, Connection_Select, Connection_Filter, { connection_related_connection: Connection_Result[] }>;
  record1id_account: WebExpand<Connection_Expand, Account_Select, Account_Filter, { record1id_account: Account_Result }>;
  record1id_contact: WebExpand<Connection_Expand, Contact_Select, Contact_Filter, { record1id_contact: Contact_Result }>;
  record2id_account: WebExpand<Connection_Expand, Account_Select, Account_Filter, { record2id_account: Account_Result }>;
  record2id_contact: WebExpand<Connection_Expand, Contact_Select, Contact_Filter, { record2id_contact: Contact_Result }>;
  relatedconnectionid: WebExpand<Connection_Expand, Connection_Select, Connection_Filter, { relatedconnectionid: Connection_Result }>;
}
interface Connection_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveend_formatted?: string;
  effectivestart_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  record1id_formatted?: string;
  record1objecttypecode_formatted?: string;
  record1roleid_formatted?: string;
  record2id_formatted?: string;
  record2objecttypecode_formatted?: string;
  record2roleid_formatted?: string;
  relatedconnectionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  record1id_guid: string | null;
  record1roleid_guid: string | null;
  record2id_guid: string | null;
  record2roleid_guid: string | null;
  relatedconnectionid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Connection_RelatedOne {
  record1id_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  record1id_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  record2id_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  record2id_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  relatedconnectionid: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface Connection_RelatedMany {
  connection_related_connection: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connections: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRelated {
  connections: WebMappingRelated<Connection_RelatedOne,Connection_RelatedMany>;
}
interface WebEntitiesCUDA {
  connections: WebMappingCUDA<Connection_Create,Connection_Update,Connection_Select>;
}
