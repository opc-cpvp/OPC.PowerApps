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
  createdby: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAssessmentFactorTemplate_RiskAsse: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { opc_RiskAssessmentFactorTemplate_RiskAsse: opc_RiskAssessmentFactorTemplate_Result[] }>;
  opc_RiskAssessmentType: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { opc_RiskAssessmentType: opc_RiskAssessmentType_Result }>;
  opc_opc_riskassessmentcategorytemplate_opc_riskassessmentcategory_RiskAssessmentCategoryTemplate: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_opc_riskassessmentcategorytemplate_opc_riskassessmentcategory_RiskAssessmentCategoryTemplate: opc_RiskAssessmentCategory_Result[] }>;
  ownerid: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessmentCategoryTemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
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
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
