interface opc_RiskAssessmentDefinitionTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskassessmentdefinitiontemplateid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessmentdefinitiontemplate_statecode | null;
  statuscode?: opc_riskassessmentdefinitiontemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessmentDefinitionTemplate_Relationships {
  opc_RiskAppetite?: opc_RiskAppetite_Result | null;
  opc_RiskAssessmentDefinition_RiskAssessmentDe?: opc_RiskAssessmentDefinition_Result[] | null;
  opc_RiskAssessmentFactorTemplate?: opc_RiskAssessmentFactorTemplate_Result | null;
}
interface opc_RiskAssessmentDefinitionTemplate extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
  opc_RiskAppetite_bind$opc_riskappetites?: string | null;
  opc_RiskAssessmentFactorTemplate_bind$opc_riskassessmentfactortemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessmentDefinitionTemplate_Create extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentDefinitionTemplate_Update extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentDefinitionTemplate_Select {
  createdby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_name: string | null }, {  }>;
  opc_riskappetite_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_riskappetite_guid: string | null }, { opc_riskappetite_formatted?: string }>;
  opc_riskassessmentdefinitiontemplateid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_riskassessmentdefinitiontemplateid: string | null }, {  }>;
  opc_riskassessmentfactortemplate_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { opc_riskassessmentfactortemplate_guid: string | null }, { opc_riskassessmentfactortemplate_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { statecode: opc_riskassessmentdefinitiontemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { statuscode: opc_riskassessmentdefinitiontemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessmentDefinitionTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessmentDefinitionTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskappetite_guid: XQW.Guid;
  opc_riskassessmentdefinitiontemplateid: XQW.Guid;
  opc_riskassessmentfactortemplate_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessmentdefinitiontemplate_statecode;
  statuscode: opc_riskassessmentdefinitiontemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessmentDefinitionTemplate_Expand {
  createdby: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAppetite: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_RiskAppetite: opc_RiskAppetite_Result }>;
  opc_RiskAssessmentDefinition_RiskAssessmentDe: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_RiskAssessmentDefinition_RiskAssessmentDe: opc_RiskAssessmentDefinition_Result[] }>;
  opc_RiskAssessmentFactorTemplate: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { opc_RiskAssessmentFactorTemplate: opc_RiskAssessmentFactorTemplate_Result }>;
  ownerid: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessmentDefinitionTemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_RiskAssessmentDefinitionTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_riskappetite_formatted?: string;
  opc_riskassessmentfactortemplate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_RiskAssessmentDefinitionTemplate_Result extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_riskappetite_guid: string | null;
  opc_riskassessmentfactortemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessmentDefinitionTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_RiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  opc_RiskAssessmentFactorTemplate: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_RiskAssessmentDefinitionTemplate_RelatedMany {
  opc_RiskAssessmentDefinition_RiskAssessmentDe: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessmentdefinitiontemplates: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessmentdefinitiontemplates: WebMappingRelated<opc_RiskAssessmentDefinitionTemplate_RelatedOne,opc_RiskAssessmentDefinitionTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessmentdefinitiontemplates: WebMappingCUDA<opc_RiskAssessmentDefinitionTemplate_Create,opc_RiskAssessmentDefinitionTemplate_Update,opc_RiskAssessmentDefinitionTemplate_Select>;
}
