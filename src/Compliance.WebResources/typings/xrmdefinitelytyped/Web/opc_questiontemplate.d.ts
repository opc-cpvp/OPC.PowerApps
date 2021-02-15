interface opc_QuestionTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_additionalparameters?: string | null;
  opc_conditionalvisibility?: boolean | null;
  opc_islocalizable?: boolean | null;
  opc_managedinternally?: boolean | null;
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
  opc_additionalparameters: WebAttribute<opc_QuestionTemplate_Select, { opc_additionalparameters: string | null }, {  }>;
  opc_checklisttypeid_guid: WebAttribute<opc_QuestionTemplate_Select, { opc_checklisttypeid_guid: string | null }, { opc_checklisttypeid_formatted?: string }>;
  opc_conditionalvisibility: WebAttribute<opc_QuestionTemplate_Select, { opc_conditionalvisibility: boolean | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_QuestionTemplate_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_managedinternally: WebAttribute<opc_QuestionTemplate_Select, { opc_managedinternally: boolean | null }, {  }>;
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
  opc_additionalparameters: string;
  opc_checklisttypeid_guid: XQW.Guid;
  opc_conditionalvisibility: boolean;
  opc_islocalizable: boolean;
  opc_managedinternally: boolean;
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
  createdby: WebExpand<opc_QuestionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_QuestionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_QuestionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_QuestionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_checklisttypeid: WebExpand<opc_QuestionTemplate_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { opc_checklisttypeid: opc_ChecklistType_Result }>;
  opc_parentquestiontemplateid: WebExpand<opc_QuestionTemplate_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_parentquestiontemplateid: opc_QuestionTemplate_Result }>;
  opc_questiontemplate_checklistresponses_quest: WebExpand<opc_QuestionTemplate_Expand, opc_ChecklistResponse_Select, opc_ChecklistResponse_Filter, { opc_questiontemplate_checklistresponses_quest: opc_ChecklistResponse_Result[] }>;
  opc_questiontemplate_questiontemplates_parent: WebExpand<opc_QuestionTemplate_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_questiontemplate_questiontemplates_parent: opc_QuestionTemplate_Result[] }>;
  opc_questiontypeid: WebExpand<opc_QuestionTemplate_Expand, opc_QuestionType_Select, opc_QuestionType_Filter, { opc_questiontypeid: opc_QuestionType_Result }>;
  ownerid: WebExpand<opc_QuestionTemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_QuestionTemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_QuestionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_checklisttypeid: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
  opc_parentquestiontemplateid: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
  opc_questiontypeid: WebMappingRetrieve<opc_QuestionType_Select,opc_QuestionType_Expand,opc_QuestionType_Filter,opc_QuestionType_Fixed,opc_QuestionType_Result,opc_QuestionType_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
