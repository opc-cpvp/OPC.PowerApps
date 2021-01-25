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
  createdby: WebExpand<opc_ChecklistType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_ChecklistType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_ChecklistType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_ChecklistType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_checklisttype_allegationtypes_checklistty: WebExpand<opc_ChecklistType_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { opc_checklisttype_allegationtypes_checklistty: opc_allegationtype_Result[] }>;
  opc_checklisttype_questiontemplates_checklist: WebExpand<opc_ChecklistType_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_checklisttype_questiontemplates_checklist: opc_QuestionTemplate_Result[] }>;
  ownerid: WebExpand<opc_ChecklistType_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_ChecklistType_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_ChecklistType_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
