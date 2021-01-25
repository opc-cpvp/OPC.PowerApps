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
  opc_allegationtype_issues_allegationtype?: opc_issue_Result[] | null;
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
  createdby: WebExpand<opc_allegationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_allegationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_allegationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_allegationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_allegationtype_allegations_allegationtype: WebExpand<opc_allegationtype_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegationtype_allegations_allegationtype: opc_allegation_Result[] }>;
  opc_allegationtype_issues_allegationtype: WebExpand<opc_allegationtype_Expand, opc_issue_Select, opc_issue_Filter, { opc_allegationtype_issues_allegationtype: opc_issue_Result[] }>;
  opc_checklisttypeid: WebExpand<opc_allegationtype_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { opc_checklisttypeid: opc_ChecklistType_Result }>;
  ownerid: WebExpand<opc_allegationtype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_allegationtype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_allegationtype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_checklisttypeid: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_allegationtype_RelatedMany {
  opc_allegationtype_allegations_allegationtype: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_allegationtype_issues_allegationtype: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
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
