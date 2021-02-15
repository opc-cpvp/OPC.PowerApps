interface opc_reminder_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_additionalusers?: string | null;
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
  opc_reminders_users_additionaluserstonotify?: SystemUser_Result[] | null;
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
  opc_additionalusers: WebAttribute<opc_reminder_Select, { opc_additionalusers: string | null }, {  }>;
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
  opc_additionalusers: string;
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
  createdby: WebExpand<opc_reminder_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_reminder_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_reminder_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_reminder_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_complaintid: WebExpand<opc_reminder_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
  opc_reminders_users_additionaluserstonotify: WebExpand<opc_reminder_Expand, SystemUser_Select, SystemUser_Filter, { opc_reminders_users_additionaluserstonotify: SystemUser_Result[] }>;
  ownerid: WebExpand<opc_reminder_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_reminder_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_reminder_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_reminder_RelatedMany {
  opc_reminders_users_additionaluserstonotify: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
