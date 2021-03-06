interface opc_event_Base extends WebEntity {
  activityadditionalparams?: string | null;
  activityid?: string | null;
  activitytypecode?: string | null;
  actualdurationminutes?: number | null;
  actualend?: Date | null;
  actualstart?: Date | null;
  community?: socialprofile_community | null;
  createdon?: Date | null;
  deliverylastattemptedon?: Date | null;
  deliveryprioritycode?: activitypointer_deliveryprioritycode | null;
  description?: string | null;
  exchangeitemid?: string | null;
  exchangerate?: number | null;
  exchangeweblink?: string | null;
  importsequencenumber?: number | null;
  instancetypecode?: opc_event_instancetypecode | null;
  isbilled?: boolean | null;
  ismapiprivate?: boolean | null;
  isregularactivity?: boolean | null;
  isworkflowcreated?: boolean | null;
  lastonholdtime?: Date | null;
  leftvoicemail?: boolean | null;
  modifiedon?: Date | null;
  onholdtime?: number | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  postponeactivityprocessinguntil?: Date | null;
  prioritycode?: opc_event_prioritycode | null;
  processid?: string | null;
  scheduleddurationminutes?: number | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  senton?: Date | null;
  seriesid?: string | null;
  sortdate?: Date | null;
  stageid?: string | null;
  statecode?: opc_event_statecode | null;
  statuscode?: opc_event_statuscode | null;
  subject?: string | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_event_Relationships {
  createdby_opc_event?: SystemUser_Result | null;
  createdonbehalfby_opc_event?: SystemUser_Result | null;
  modifiedby_opc_event?: SystemUser_Result | null;
  modifiedonbehalfby_opc_event?: SystemUser_Result | null;
  opc_event_QueueItems?: QueueItem_Result[] | null;
  opc_event_activity_parties?: ActivityParty_Result[] | null;
  opc_event_connections1?: Connection_Result[] | null;
  opc_event_connections2?: Connection_Result[] | null;
  ownerid_opc_event?: Team_Result | null;
  ownerid_opc_event1?: SystemUser_Result | null;
  owningteam_opc_event?: Team_Result | null;
  owninguser_opc_event?: SystemUser_Result | null;
  regardingobjectid_account_opc_event?: Account_Result | null;
  regardingobjectid_contact_opc_event?: Contact_Result | null;
  regardingobjectid_opc_complaint_opc_event?: opc_complaint_Result | null;
}
interface opc_event extends opc_event_Base, opc_event_Relationships {
  ownerid_opc_event_bind$systemusers?: string | null;
  ownerid_opc_event_bind$teams?: string | null;
  regardingobjectid_account_opc_event_bind$accounts?: string | null;
  regardingobjectid_contact_opc_event_bind$contacts?: string | null;
  regardingobjectid_knowledgearticle_opc_event_bind$knowledgearticles?: string | null;
  regardingobjectid_knowledgebaserecord_opc_event_bind$knowledgebaserecords?: string | null;
  regardingobjectid_new_interactionforemail_opc_event_bind$interactionforemails?: string | null;
  regardingobjectid_opc_complaint_opc_event_bind$opc_complaints?: string | null;
  sla_activitypointer_sla_opc_event_bind$slas?: string | null;
  transactioncurrencyid_opc_event_bind$transactioncurrencies?: string | null;
}
interface opc_event_Create extends opc_event {
  activityid_opc_event_bind$activitypointers?: string | null;
}
interface opc_event_Update extends opc_event {
}
interface opc_event_Select {
  activityadditionalparams: WebAttribute<opc_event_Select, { activityadditionalparams: string | null }, {  }>;
  activityid: WebAttribute<opc_event_Select, { activityid: string | null }, {  }>;
  activitytypecode: WebAttribute<opc_event_Select, { activitytypecode: string | null }, {  }>;
  actualdurationminutes: WebAttribute<opc_event_Select, { actualdurationminutes: number | null }, {  }>;
  actualend: WebAttribute<opc_event_Select, { actualend: Date | null }, { actualend_formatted?: string }>;
  actualstart: WebAttribute<opc_event_Select, { actualstart: Date | null }, { actualstart_formatted?: string }>;
  bcc_guid: WebAttribute<opc_event_Select, { bcc_guid: string | null }, { bcc_formatted?: string }>;
  cc_guid: WebAttribute<opc_event_Select, { cc_guid: string | null }, { cc_formatted?: string }>;
  community: WebAttribute<opc_event_Select, { community: socialprofile_community | null }, { community_formatted?: string }>;
  createdby_guid: WebAttribute<opc_event_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_event_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_event_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customers_guid: WebAttribute<opc_event_Select, { customers_guid: string | null }, { customers_formatted?: string }>;
  deliverylastattemptedon: WebAttribute<opc_event_Select, { deliverylastattemptedon: Date | null }, { deliverylastattemptedon_formatted?: string }>;
  deliveryprioritycode: WebAttribute<opc_event_Select, { deliveryprioritycode: activitypointer_deliveryprioritycode | null }, { deliveryprioritycode_formatted?: string }>;
  description: WebAttribute<opc_event_Select, { description: string | null }, {  }>;
  exchangeitemid: WebAttribute<opc_event_Select, { exchangeitemid: string | null }, {  }>;
  exchangerate: WebAttribute<opc_event_Select, { exchangerate: number | null }, {  }>;
  exchangeweblink: WebAttribute<opc_event_Select, { exchangeweblink: string | null }, {  }>;
  from_guid: WebAttribute<opc_event_Select, { from_guid: string | null }, { from_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_event_Select, { importsequencenumber: number | null }, {  }>;
  instancetypecode: WebAttribute<opc_event_Select, { instancetypecode: opc_event_instancetypecode | null }, { instancetypecode_formatted?: string }>;
  isbilled: WebAttribute<opc_event_Select, { isbilled: boolean | null }, {  }>;
  ismapiprivate: WebAttribute<opc_event_Select, { ismapiprivate: boolean | null }, {  }>;
  isregularactivity: WebAttribute<opc_event_Select, { isregularactivity: boolean | null }, {  }>;
  isworkflowcreated: WebAttribute<opc_event_Select, { isworkflowcreated: boolean | null }, {  }>;
  lastonholdtime: WebAttribute<opc_event_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  leftvoicemail: WebAttribute<opc_event_Select, { leftvoicemail: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_event_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_event_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_event_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  onholdtime: WebAttribute<opc_event_Select, { onholdtime: number | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_event_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_event_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_event_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_event_Select, { opc_namefrench: string | null }, {  }>;
  optionalattendees_guid: WebAttribute<opc_event_Select, { optionalattendees_guid: string | null }, { optionalattendees_formatted?: string }>;
  organizer_guid: WebAttribute<opc_event_Select, { organizer_guid: string | null }, { organizer_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_event_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_event_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_event_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_event_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_event_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  partners_guid: WebAttribute<opc_event_Select, { partners_guid: string | null }, { partners_formatted?: string }>;
  postponeactivityprocessinguntil: WebAttribute<opc_event_Select, { postponeactivityprocessinguntil: Date | null }, { postponeactivityprocessinguntil_formatted?: string }>;
  prioritycode: WebAttribute<opc_event_Select, { prioritycode: opc_event_prioritycode | null }, { prioritycode_formatted?: string }>;
  processid: WebAttribute<opc_event_Select, { processid: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<opc_event_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  requiredattendees_guid: WebAttribute<opc_event_Select, { requiredattendees_guid: string | null }, { requiredattendees_formatted?: string }>;
  resources_guid: WebAttribute<opc_event_Select, { resources_guid: string | null }, { resources_formatted?: string }>;
  scheduleddurationminutes: WebAttribute<opc_event_Select, { scheduleddurationminutes: number | null }, {  }>;
  scheduledend: WebAttribute<opc_event_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<opc_event_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  sendermailboxid_guid: WebAttribute<opc_event_Select, { sendermailboxid_guid: string | null }, { sendermailboxid_formatted?: string }>;
  senton: WebAttribute<opc_event_Select, { senton: Date | null }, { senton_formatted?: string }>;
  seriesid: WebAttribute<opc_event_Select, { seriesid: string | null }, {  }>;
  serviceid_guid: WebAttribute<opc_event_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
  slaid_guid: WebAttribute<opc_event_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<opc_event_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  sortdate: WebAttribute<opc_event_Select, { sortdate: Date | null }, { sortdate_formatted?: string }>;
  stageid: WebAttribute<opc_event_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<opc_event_Select, { statecode: opc_event_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_event_Select, { statuscode: opc_event_statuscode | null }, { statuscode_formatted?: string }>;
  subject: WebAttribute<opc_event_Select, { subject: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<opc_event_Select, { timezoneruleversionnumber: number | null }, {  }>;
  to_guid: WebAttribute<opc_event_Select, { to_guid: string | null }, { to_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<opc_event_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<opc_event_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_event_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_event_Select, { versionnumber: number | null }, {  }>;
}
interface opc_event_Filter {
  activityadditionalparams: string;
  activityid: XQW.Guid;
  activitytypecode: string;
  actualdurationminutes: number;
  actualend: Date;
  actualstart: Date;
  bcc_guid: XQW.Guid;
  cc_guid: XQW.Guid;
  community: socialprofile_community;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customers_guid: XQW.Guid;
  deliverylastattemptedon: Date;
  deliveryprioritycode: activitypointer_deliveryprioritycode;
  description: string;
  exchangeitemid: string;
  exchangerate: any;
  exchangeweblink: string;
  from_guid: XQW.Guid;
  importsequencenumber: number;
  instancetypecode: opc_event_instancetypecode;
  isbilled: boolean;
  ismapiprivate: boolean;
  isregularactivity: boolean;
  isworkflowcreated: boolean;
  lastonholdtime: Date;
  leftvoicemail: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  onholdtime: number;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  optionalattendees_guid: XQW.Guid;
  organizer_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  partners_guid: XQW.Guid;
  postponeactivityprocessinguntil: Date;
  prioritycode: opc_event_prioritycode;
  processid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  requiredattendees_guid: XQW.Guid;
  resources_guid: XQW.Guid;
  scheduleddurationminutes: number;
  scheduledend: Date;
  scheduledstart: Date;
  sendermailboxid_guid: XQW.Guid;
  senton: Date;
  seriesid: XQW.Guid;
  serviceid_guid: XQW.Guid;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  sortdate: Date;
  stageid: XQW.Guid;
  statecode: opc_event_statecode;
  statuscode: opc_event_statuscode;
  subject: string;
  timezoneruleversionnumber: number;
  to_guid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_event_Expand {
  createdby_opc_event: WebExpand<opc_event_Expand, SystemUser_Select, SystemUser_Filter, { createdby_opc_event: SystemUser_Result }>;
  createdonbehalfby_opc_event: WebExpand<opc_event_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby_opc_event: SystemUser_Result }>;
  modifiedby_opc_event: WebExpand<opc_event_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby_opc_event: SystemUser_Result }>;
  modifiedonbehalfby_opc_event: WebExpand<opc_event_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby_opc_event: SystemUser_Result }>;
  opc_event_QueueItems: WebExpand<opc_event_Expand, QueueItem_Select, QueueItem_Filter, { opc_event_QueueItems: QueueItem_Result[] }>;
  opc_event_activity_parties: WebExpand<opc_event_Expand, ActivityParty_Select, ActivityParty_Filter, { opc_event_activity_parties: ActivityParty_Result[] }>;
  opc_event_connections1: WebExpand<opc_event_Expand, Connection_Select, Connection_Filter, { opc_event_connections1: Connection_Result[] }>;
  opc_event_connections2: WebExpand<opc_event_Expand, Connection_Select, Connection_Filter, { opc_event_connections2: Connection_Result[] }>;
  ownerid_opc_event: WebExpand<opc_event_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid_opc_event: SystemUser_Result } & { ownerid_opc_event: Team_Result }>;
  owningteam_opc_event: WebExpand<opc_event_Expand, Team_Select, Team_Filter, { owningteam_opc_event: Team_Result }>;
  owninguser_opc_event: WebExpand<opc_event_Expand, SystemUser_Select, SystemUser_Filter, { owninguser_opc_event: SystemUser_Result }>;
  regardingobjectid_account_opc_event: WebExpand<opc_event_Expand, Account_Select, Account_Filter, { regardingobjectid_account_opc_event: Account_Result }>;
  regardingobjectid_contact_opc_event: WebExpand<opc_event_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact_opc_event: Contact_Result }>;
  regardingobjectid_opc_complaint_opc_event: WebExpand<opc_event_Expand, opc_complaint_Select, opc_complaint_Filter, { regardingobjectid_opc_complaint_opc_event: opc_complaint_Result }>;
}
interface opc_event_FormattedResult {
  actualend_formatted?: string;
  actualstart_formatted?: string;
  bcc_formatted?: string;
  cc_formatted?: string;
  community_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customers_formatted?: string;
  deliverylastattemptedon_formatted?: string;
  deliveryprioritycode_formatted?: string;
  from_formatted?: string;
  instancetypecode_formatted?: string;
  lastonholdtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  optionalattendees_formatted?: string;
  organizer_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  partners_formatted?: string;
  postponeactivityprocessinguntil_formatted?: string;
  prioritycode_formatted?: string;
  regardingobjectid_formatted?: string;
  requiredattendees_formatted?: string;
  resources_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
  sendermailboxid_formatted?: string;
  senton_formatted?: string;
  serviceid_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  sortdate_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  to_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface opc_event_Result extends opc_event_Base, opc_event_Relationships {
  "@odata.etag": string;
  bcc_guid: string | null;
  cc_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customers_guid: string | null;
  from_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  optionalattendees_guid: string | null;
  organizer_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  partners_guid: string | null;
  regardingobjectid_guid: string | null;
  requiredattendees_guid: string | null;
  resources_guid: string | null;
  sendermailboxid_guid: string | null;
  serviceid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  to_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface opc_event_RelatedOne {
  createdby_opc_event: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby_opc_event: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby_opc_event: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby_opc_event: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid_opc_event: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ownerid_opc_event1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningteam_opc_event: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser_opc_event: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_account_opc_event: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_contact_opc_event: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_opc_complaint_opc_event: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface opc_event_RelatedMany {
  opc_event_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  opc_event_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  opc_event_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  opc_event_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_events: WebMappingRetrieve<opc_event_Select,opc_event_Expand,opc_event_Filter,opc_event_Fixed,opc_event_Result,opc_event_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_events: WebMappingRelated<opc_event_RelatedOne,opc_event_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_events: WebMappingCUDA<opc_event_Create,opc_event_Update,opc_event_Select>;
}
