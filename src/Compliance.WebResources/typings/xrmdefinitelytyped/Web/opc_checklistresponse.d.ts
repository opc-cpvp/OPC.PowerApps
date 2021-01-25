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
  createdby: WebExpand<opc_ChecklistResponse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_ChecklistResponse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_ChecklistResponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_ChecklistResponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_allegationid: WebExpand<opc_ChecklistResponse_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegationid: opc_allegation_Result }>;
  opc_questiontemplateid: WebExpand<opc_ChecklistResponse_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_questiontemplateid: opc_QuestionTemplate_Result }>;
  ownerid: WebExpand<opc_ChecklistResponse_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_ChecklistResponse_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_ChecklistResponse_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_allegationid: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_questiontemplateid: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
