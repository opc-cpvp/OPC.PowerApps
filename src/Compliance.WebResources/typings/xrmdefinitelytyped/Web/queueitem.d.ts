interface QueueItem_Base extends WebEntity {
  createdon?: Date | null;
  enteredon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  objecttypecode?: queueitem_objecttypecode | null;
  opc_priorityscore?: number | null;
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
  objectid_opc_event?: opc_event_Result | null;
  workerid_systemuser?: SystemUser_Result | null;
  workerid_team?: Team_Result | null;
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
  objectid_opc_event_bind$opc_events?: string | null;
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
  opc_priorityscore: WebAttribute<QueueItem_Select, { opc_priorityscore: number | null }, {  }>;
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
  opc_priorityscore: number;
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
  createdby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  objectid_opc_complaint: WebExpand<QueueItem_Expand, opc_complaint_Select, opc_complaint_Filter, { objectid_opc_complaint: opc_complaint_Result }>;
  objectid_opc_event: WebExpand<QueueItem_Expand, opc_event_Select, opc_event_Filter, { objectid_opc_event: opc_event_Result }>;
  queueid: WebExpand<QueueItem_Expand, Queue_Select, Queue_Filter, { queueid: Queue_Result }>;
  workerid_systemuser: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { workerid_systemuser: SystemUser_Result }>;
  workerid_team: WebExpand<QueueItem_Expand, Team_Select, Team_Filter, { workerid_team: Team_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  objectid_opc_complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  objectid_opc_event: WebMappingRetrieve<opc_event_Select,opc_event_Expand,opc_event_Filter,opc_event_Fixed,opc_event_Result,opc_event_FormattedResult>;
  queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  workerid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  workerid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
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
