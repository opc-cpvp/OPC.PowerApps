interface opc_RiskAssessmentCategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_bypassrationale?: string | null;
  opc_bypasssuggestedriskappetite?: boolean | null;
  opc_name?: string | null;
  opc_riskassessmentcategoryid?: string | null;
  opc_sequence?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentcategory_statecode | null;
  statuscode?: opc_riskassessmentcategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentCategory_Relationships {
  opc_ActualRiskAppetite?: opc_RiskAppetite_Result | null;
  opc_BypassInitiatedBy?: SystemUser_Result | null;
  opc_RiskAssessment?: opc_RiskAssessment_Result | null;
  opc_RiskAssessmentCategoryTemplate?: opc_RiskAssessmentCategoryTemplate_Result | null;
  opc_RiskAssessmentDefinition_RiskAssessme?: opc_RiskAssessmentDefinition_Result[] | null;
  opc_RiskAssessmentType?: opc_RiskAssessmentType_Result | null;
  opc_SuggestedRiskAppetite?: opc_RiskAppetite_Result | null;
}
interface opc_RiskAssessmentCategory extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
  opc_ActualRiskAppetite_bind$opc_riskappetites?: string | null;
  opc_BypassInitiatedBy_bind$systemusers?: string | null;
  opc_RiskAssessmentCategoryTemplate_bind$opc_riskassessmentcategorytemplates?: string | null;
  opc_RiskAssessmentType_bind$opc_riskassessmenttypes?: string | null;
  opc_RiskAssessment_bind$opc_riskassessments?: string | null;
  opc_SuggestedRiskAppetite_bind$opc_riskappetites?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentCategory_Create extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategory_Update extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategory_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentCategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentCategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentCategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_actualriskappetite_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_actualriskappetite_guid: string | null }, { opc_actualriskappetite_formatted?: string }>;
  opc_bypassinitiatedby_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_bypassinitiatedby_guid: string | null }, { opc_bypassinitiatedby_formatted?: string }>;
  opc_bypassrationale: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_bypassrationale: string | null }, {  }>;
  opc_bypasssuggestedriskappetite: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_bypasssuggestedriskappetite: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_name: string | null }, {  }>;
  opc_riskassessment_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessment_guid: string | null }, { opc_riskassessment_formatted?: string }>;
  opc_riskassessmentcategoryid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessmentcategoryid: string | null }, {  }>;
  opc_riskassessmentcategorytemplate_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessmentcategorytemplate_guid: string | null }, { opc_riskassessmentcategorytemplate_formatted?: string }>;
  opc_riskassessmenttype_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_riskassessmenttype_guid: string | null }, { opc_riskassessmenttype_formatted?: string }>;
  opc_sequence: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_sequence: number | null }, {  }>;
  opc_suggestedriskappetite_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { opc_suggestedriskappetite_guid: string | null }, { opc_suggestedriskappetite_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentCategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentCategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentCategory_Select, { statecode: opc_riskassessmentcategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentCategory_Select, { statuscode: opc_riskassessmentcategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentCategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentCategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentCategory_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentCategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_actualriskappetite_guid: XQW.Guid;
  opc_bypassinitiatedby_guid: XQW.Guid;
  opc_bypassrationale: string;
  opc_bypasssuggestedriskappetite: boolean;
  opc_name: string;
  opc_riskassessment_guid: XQW.Guid;
  opc_riskassessmentcategoryid: XQW.Guid;
  opc_riskassessmentcategorytemplate_guid: XQW.Guid;
  opc_riskassessmenttype_guid: XQW.Guid;
  opc_sequence: number;
  opc_suggestedriskappetite_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentcategory_statecode;
  statuscode: opc_riskassessmentcategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentCategory_Expand {
  createdby: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_ActualRiskAppetite: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_ActualRiskAppetite: opc_RiskAppetite_Result }>;
  opc_BypassInitiatedBy: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select, SystemUser_Filter, { opc_BypassInitiatedBy: SystemUser_Result }>;
  opc_RiskAssessment: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment: opc_RiskAssessment_Result }>;
  opc_RiskAssessmentCategoryTemplate: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { opc_RiskAssessmentCategoryTemplate: opc_RiskAssessmentCategoryTemplate_Result }>;
  opc_RiskAssessmentDefinition_RiskAssessme: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_RiskAssessmentDefinition_RiskAssessme: opc_RiskAssessmentDefinition_Result[] }>;
  opc_RiskAssessmentType: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { opc_RiskAssessmentType: opc_RiskAssessmentType_Result }>;
  opc_SuggestedRiskAppetite: WebExpand<opc_RiskAssessmentCategory_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_SuggestedRiskAppetite: opc_RiskAppetite_Result }>;
  ownerid: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessmentCategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessmentCategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_RiskAssessmentCategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_actualriskappetite_formatted?: string;
  opc_bypassinitiatedby_formatted?: string;
  opc_riskassessment_formatted?: string;
  opc_riskassessmentcategorytemplate_formatted?: string;
  opc_riskassessmenttype_formatted?: string;
  opc_suggestedriskappetite_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentCategory_Result extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_actualriskappetite_guid: string | null;
  opc_bypassinitiatedby_guid: string | null;
  opc_riskassessment_guid: string | null;
  opc_riskassessmentcategorytemplate_guid: string | null;
  opc_riskassessmenttype_guid: string | null;
  opc_suggestedriskappetite_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentCategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_ActualRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  opc_BypassInitiatedBy: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_RiskAssessment: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_RiskAssessmentCategoryTemplate: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
  opc_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
  opc_SuggestedRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_RiskAssessmentCategory_RelatedMany {
  opc_RiskAssessmentDefinition_RiskAssessme: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentcategories: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentcategories: WebMappingRelated<opc_RiskAssessmentCategory_RelatedOne,opc_RiskAssessmentCategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentcategories: WebMappingCUDA<opc_RiskAssessmentCategory_Create,opc_RiskAssessmentCategory_Update,opc_RiskAssessmentCategory_Select>;
}
