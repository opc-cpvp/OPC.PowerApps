interface opc_RiskAssessmentDefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_isselected?: boolean | null;
  opc_name?: string | null;
  opc_riskassessmentdefinitionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentdefinition_statecode | null;
  statuscode?: opc_riskassessmentdefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentDefinition_Relationships {
  opc_RiskAssessmentCategory?: opc_RiskAssessmentCategory_Result | null;
  opc_RiskAssessmentDefinitionTemplate?: opc_RiskAssessmentDefinitionTemplate_Result | null;
  opc_RiskAssessmentFactorTemplate?: opc_RiskAssessmentFactorTemplate_Result | null;
}
interface opc_RiskAssessmentDefinition extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
  opc_RiskAssessmentCategory_bind$opc_riskassessmentcategories?: string | null;
  opc_RiskAssessmentDefinitionTemplate_bind$opc_riskassessmentdefinitiontemplates?: string | null;
  opc_RiskAssessmentFactorTemplate_bind$opc_riskassessmentfactortemplates?: string | null;
  opc_riskassessmentid_bind$opc_riskassessments?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentDefinition_Create extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinition_Update extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinition_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentDefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentDefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentDefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_isselected: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_isselected: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentcategory_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentcategory_guid: string | null }, { opc_riskassessmentcategory_formatted?: string }>;
  opc_riskassessmentdefinitionid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentdefinitionid: string | null }, {  }>;
  opc_riskassessmentdefinitiontemplate_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentdefinitiontemplate_guid: string | null }, { opc_riskassessmentdefinitiontemplate_formatted?: string }>;
  opc_riskassessmentfactortemplate_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentfactortemplate_guid: string | null }, { opc_riskassessmentfactortemplate_formatted?: string }>;
  opc_riskassessmentid_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { opc_riskassessmentid_guid: string | null }, { opc_riskassessmentid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentDefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentDefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentDefinition_Select, { statecode: opc_riskassessmentdefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentDefinition_Select, { statuscode: opc_riskassessmentdefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentDefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentDefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentDefinition_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentDefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_isselected: boolean;
  opc_name: string;
  opc_riskassessmentcategory_guid: XQW.Guid;
  opc_riskassessmentdefinitionid: XQW.Guid;
  opc_riskassessmentdefinitiontemplate_guid: XQW.Guid;
  opc_riskassessmentfactortemplate_guid: XQW.Guid;
  opc_riskassessmentid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentdefinition_statecode;
  statuscode: opc_riskassessmentdefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentDefinition_Expand {
  createdby: WebExpand<opc_RiskAssessmentDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessmentDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessmentDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessmentDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAssessmentCategory: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory: opc_RiskAssessmentCategory_Result }>;
  opc_RiskAssessmentDefinitionTemplate: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { opc_RiskAssessmentDefinitionTemplate: opc_RiskAssessmentDefinitionTemplate_Result }>;
  opc_RiskAssessmentFactorTemplate: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result }>;
  opc_riskassessmentid: WebExpand<opc_RiskAssessmentDefinition_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_riskassessmentid: opc_RiskAssessment_Result }>;
  ownerid: WebExpand<opc_RiskAssessmentDefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessmentDefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessmentDefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_RiskAssessmentDefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskassessmentcategory_formatted?: string;
  opc_riskassessmentdefinitiontemplate_formatted?: string;
  opc_riskassessmentfactortemplate_formatted?: string;
  opc_riskassessmentid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentDefinition_Result extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskassessmentcategory_guid: string | null;
  opc_riskassessmentdefinitiontemplate_guid: string | null;
  opc_riskassessmentfactortemplate_guid: string | null;
  opc_riskassessmentid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentDefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_RiskAssessmentCategory: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_RiskAssessmentDefinitionTemplate: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
  opc_RiskAssessmentFactorTemplate: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
  opc_riskassessmentid: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_RiskAssessmentDefinition_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_riskassessmentdefinitions: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentdefinitions: WebMappingRelated<opc_RiskAssessmentDefinition_RelatedOne,opc_RiskAssessmentDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentdefinitions: WebMappingCUDA<opc_RiskAssessmentDefinition_Create,opc_RiskAssessmentDefinition_Update,opc_RiskAssessmentDefinition_Select>;
}
