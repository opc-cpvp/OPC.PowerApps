interface opc_RiskAssessmentFactorTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskassessmentfactortemplateid?: string | null;
  opc_sequence?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentfactortemplate_statecode | null;
  statuscode?: opc_riskassessmentfactortemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentFactorTemplate_Relationships {
  opc_RiskAssessmentCategoryTemplate?: opc_RiskAssessmentCategoryTemplate_Result | null;
  opc_RiskAssessmentDefinitionTemplate_Risk?: opc_RiskAssessmentDefinitionTemplate_Result[] | null;
  opc_RiskAssessmentDefinition_RiskAssessmentFa?: opc_RiskAssessmentDefinition_Result[] | null;
}
interface opc_RiskAssessmentFactorTemplate extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
  opc_RiskAssessmentCategoryTemplate_bind$opc_riskassessmentcategorytemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentFactorTemplate_Create extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Update extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentcategorytemplate_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_riskassessmentcategorytemplate_guid: string | null }, { opc_riskassessmentcategorytemplate_formatted?: string }>;
  opc_riskassessmentfactortemplateid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_riskassessmentfactortemplateid: string | null }, {  }>;
  opc_sequence: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { opc_sequence: number | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { statecode: opc_riskassessmentfactortemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { statuscode: opc_riskassessmentfactortemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentFactorTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentFactorTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskassessmentcategorytemplate_guid: XQW.Guid;
  opc_riskassessmentfactortemplateid: XQW.Guid;
  opc_sequence: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentfactortemplate_statecode;
  statuscode: opc_riskassessmentfactortemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentFactorTemplate_Expand {
  createdby: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAssessmentCategoryTemplate: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { opc_RiskAssessmentCategoryTemplate: opc_RiskAssessmentCategoryTemplate_Result }>;
  opc_RiskAssessmentDefinitionTemplate_Risk: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { opc_RiskAssessmentDefinitionTemplate_Risk: opc_RiskAssessmentDefinitionTemplate_Result[] }>;
  opc_RiskAssessmentDefinition_RiskAssessmentFa: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_RiskAssessmentDefinition_RiskAssessmentFa: opc_RiskAssessmentDefinition_Result[] }>;
  ownerid: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessmentFactorTemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_RiskAssessmentFactorTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskassessmentcategorytemplate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentFactorTemplate_Result extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskassessmentcategorytemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentFactorTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_RiskAssessmentCategoryTemplate: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_RiskAssessmentFactorTemplate_RelatedMany {
  opc_RiskAssessmentDefinitionTemplate_Risk: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
  opc_RiskAssessmentDefinition_RiskAssessmentFa: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentfactortemplates: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentfactortemplates: WebMappingRelated<opc_RiskAssessmentFactorTemplate_RelatedOne,opc_RiskAssessmentFactorTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentfactortemplates: WebMappingCUDA<opc_RiskAssessmentFactorTemplate_Create,opc_RiskAssessmentFactorTemplate_Update,opc_RiskAssessmentFactorTemplate_Select>;
}
