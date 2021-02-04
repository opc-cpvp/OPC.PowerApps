interface opc_RiskAppetite_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_name?: string | null;
  opc_riskappetiteid?: string | null;
  opc_value?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskappetite_statecode | null;
  statuscode?: opc_riskappetite_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAppetite_Relationships {
  opc_RiskAssessmentCategory_ActualRiskAppe?: opc_RiskAssessmentCategory_Result[] | null;
  opc_RiskAssessmentCategory_SuggestedRiskA?: opc_RiskAssessmentCategory_Result[] | null;
  opc_RiskAssessment_ActualRiskAppetite_opc?: opc_RiskAssessment_Result[] | null;
  opc_RiskAssessment_SuggestedRiskAppetite_?: opc_RiskAssessment_Result[] | null;
  opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite?: opc_RiskAssessmentDefinitionTemplate_Result[] | null;
}
interface opc_RiskAppetite extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAppetite_Create extends opc_RiskAppetite {
}
interface opc_RiskAppetite_Update extends opc_RiskAppetite {
}
interface opc_RiskAppetite_Select {
  createdby_guid: WebAttribute<opc_RiskAppetite_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAppetite_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAppetite_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAppetite_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAppetite_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAppetite_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAppetite_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAppetite_Select, { opc_name: string | null }, {  }>;
  opc_riskappetiteid: WebAttribute<opc_RiskAppetite_Select, { opc_riskappetiteid: string | null }, {  }>;
  opc_value: WebAttribute<opc_RiskAppetite_Select, { opc_value: number | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_RiskAppetite_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAppetite_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAppetite_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAppetite_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAppetite_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAppetite_Select, { statecode: opc_riskappetite_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAppetite_Select, { statuscode: opc_riskappetite_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAppetite_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAppetite_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAppetite_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAppetite_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_name: string;
  opc_riskappetiteid: XQW.Guid;
  opc_value: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskappetite_statecode;
  statuscode: opc_riskappetite_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAppetite_Expand {
  createdby: WebExpand<opc_RiskAppetite_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAppetite_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAppetite_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAppetite_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAssessmentCategory_ActualRiskAppe: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory_ActualRiskAppe: opc_RiskAssessmentCategory_Result[] }>;
  opc_RiskAssessmentCategory_SuggestedRiskA: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory_SuggestedRiskA: opc_RiskAssessmentCategory_Result[] }>;
  opc_RiskAssessment_ActualRiskAppetite_opc: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_ActualRiskAppetite_opc: opc_RiskAssessment_Result[] }>;
  opc_RiskAssessment_SuggestedRiskAppetite_: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_SuggestedRiskAppetite_: opc_RiskAssessment_Result[] }>;
  opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite: WebExpand<opc_RiskAppetite_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite: opc_RiskAssessmentDefinitionTemplate_Result[] }>;
  ownerid: WebExpand<opc_RiskAppetite_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAppetite_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAppetite_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_RiskAppetite_FormattedResult {
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
interface opc_RiskAppetite_Result extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
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
interface opc_RiskAppetite_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_RiskAppetite_RelatedMany {
  opc_RiskAssessmentCategory_ActualRiskAppe: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_RiskAssessmentCategory_SuggestedRiskA: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_RiskAssessment_ActualRiskAppetite_opc: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_RiskAssessment_SuggestedRiskAppetite_: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_opc_riskappetite_opc_riskassessmentdefinitiontemplate_RiskAppetite: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskappetites: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskappetites: WebMappingRelated<opc_RiskAppetite_RelatedOne,opc_RiskAppetite_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskappetites: WebMappingCUDA<opc_RiskAppetite_Create,opc_RiskAppetite_Update,opc_RiskAppetite_Select>;
}
