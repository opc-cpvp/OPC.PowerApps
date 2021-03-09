interface opc_allegation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_allegationid?: string | null;
  opc_disposition?: opc_allegationdisposition | null;
  opc_jurisdiction?: opc_jurisdictions | null;
  opc_name?: string | null;
  opc_referencenumber?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_allegation_statecode | null;
  statuscode?: opc_allegation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_allegation_Relationships {
  opc_allegation_checklistresponses_allegation?: opc_ChecklistResponse_Result[] | null;
  opc_allegations_personalinformationtypes?: opc_personalinformationtype_Result[] | null;
  opc_allegations_issues_relatedissues?: opc_issue_Result[] | null;
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
  opc_disposition: WebAttribute<opc_allegation_Select, { opc_disposition: opc_allegationdisposition | null }, { opc_disposition_formatted?: string }>;
  opc_dispositionactionid_guid: WebAttribute<opc_allegation_Select, { opc_dispositionactionid_guid: string | null }, { opc_dispositionactionid_formatted?: string }>;
  opc_dispositionreasonid_guid: WebAttribute<opc_allegation_Select, { opc_dispositionreasonid_guid: string | null }, { opc_dispositionreasonid_formatted?: string }>;
  opc_jurisdiction: WebAttribute<opc_allegation_Select, { opc_jurisdiction: opc_jurisdictions | null }, { opc_jurisdiction_formatted?: string }>;
  opc_name: WebAttribute<opc_allegation_Select, { opc_name: string | null }, {  }>;
  opc_referencenumber: WebAttribute<opc_allegation_Select, { opc_referencenumber: string | null }, {  }>;
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
  opc_disposition: opc_allegationdisposition;
  opc_dispositionactionid_guid: XQW.Guid;
  opc_dispositionreasonid_guid: XQW.Guid;
  opc_jurisdiction: opc_jurisdictions;
  opc_name: string;
  opc_referencenumber: string;
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
  createdby: WebExpand<opc_allegation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_allegation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_allegation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_allegation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_allegation_checklistresponses_allegation: WebExpand<opc_allegation_Expand, opc_ChecklistResponse_Select, opc_ChecklistResponse_Filter, { opc_allegation_checklistresponses_allegation: opc_ChecklistResponse_Result[] }>;
  opc_allegations_personalinformationtypes: WebExpand<opc_allegation_Expand, opc_personalinformationtype_Select, opc_personalinformationtype_Filter, { opc_allegations_personalinformationtypes: opc_personalinformationtype_Result[] }>;
  opc_allegations_issues_relatedissues: WebExpand<opc_allegation_Expand, opc_issue_Select, opc_issue_Filter, { opc_allegations_issues_relatedissues: opc_issue_Result[] }>;
  opc_allegationtypeid: WebExpand<opc_allegation_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { opc_allegationtypeid: opc_allegationtype_Result }>;
  opc_complaintid: WebExpand<opc_allegation_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
  opc_dispositionactionid: WebExpand<opc_allegation_Expand, opc_dispositionaction_Select, opc_dispositionaction_Filter, { opc_dispositionactionid: opc_dispositionaction_Result }>;
  opc_dispositionreasonid: WebExpand<opc_allegation_Expand, opc_dispositionreason_Select, opc_dispositionreason_Filter, { opc_dispositionreasonid: opc_dispositionreason_Result }>;
  ownerid: WebExpand<opc_allegation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_allegation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_allegation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  opc_jurisdiction_formatted?: string;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_allegationtypeid: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_dispositionactionid: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
  opc_dispositionreasonid: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_allegation_RelatedMany {
  opc_allegation_checklistresponses_allegation: WebMappingRetrieve<opc_ChecklistResponse_Select,opc_ChecklistResponse_Expand,opc_ChecklistResponse_Filter,opc_ChecklistResponse_Fixed,opc_ChecklistResponse_Result,opc_ChecklistResponse_FormattedResult>;
  opc_allegations_personalinformationtypes: WebMappingRetrieve<opc_personalinformationtype_Select,opc_personalinformationtype_Expand,opc_personalinformationtype_Filter,opc_personalinformationtype_Fixed,opc_personalinformationtype_Result,opc_personalinformationtype_FormattedResult>;
  opc_allegations_issues_relatedissues: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
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
