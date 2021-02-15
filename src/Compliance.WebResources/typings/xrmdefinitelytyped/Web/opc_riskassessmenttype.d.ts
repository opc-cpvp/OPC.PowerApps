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
  createdby: WebExpand<opc_RiskAssessmentType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessmentType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessmentType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessmentType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAssessmentCategoryTemplate_RiskAs: WebExpand<opc_RiskAssessmentType_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { opc_RiskAssessmentCategoryTemplate_RiskAs: opc_RiskAssessmentCategoryTemplate_Result[] }>;
  opc_RiskAssessment_RiskAssessmentType_opc: WebExpand<opc_RiskAssessmentType_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_RiskAssessmentType_opc: opc_RiskAssessment_Result[] }>;
  opc_opc_riskassessmenttype_opc_riskassessmentcategory_RiskAssessmentType: WebExpand<opc_RiskAssessmentType_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_opc_riskassessmenttype_opc_riskassessmentcategory_RiskAssessmentType: opc_RiskAssessmentCategory_Result[] }>;
  ownerid: WebExpand<opc_RiskAssessmentType_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessmentType_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessmentType_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
