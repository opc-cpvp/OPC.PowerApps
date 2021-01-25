interface opc_RiskAssessment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_actualriskappetitevalue?: number | null;
  opc_bypassrationale?: string | null;
  opc_bypasssuggestedriskappetite?: boolean | null;
  opc_name?: string | null;
  opc_riskassessmentid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_riskassessment_statecode | null;
  statuscode?: opc_riskassessment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_RiskAssessment_Relationships {
  opc_ActualRiskAppetite?: opc_RiskAppetite_Result | null;
  opc_BypassInitiatedBy?: SystemUser_Result | null;
  opc_Complaint?: opc_complaint_Result | null;
  opc_RiskAssessmentCategory_RiskAssessment?: opc_RiskAssessmentCategory_Result[] | null;
  opc_RiskAssessmentType?: opc_RiskAssessmentType_Result | null;
  opc_SuggestedRiskAppetite?: opc_RiskAppetite_Result | null;
  opc_riskassessment_riskassessmentdefinitions_riskassessment?: opc_RiskAssessmentDefinition_Result[] | null;
}
interface opc_RiskAssessment extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
  opc_ActualRiskAppetite_bind$opc_riskappetites?: string | null;
  opc_BypassInitiatedBy_bind$systemusers?: string | null;
  opc_Complaint_bind$opc_complaints?: string | null;
  opc_RiskAssessmentType_bind$opc_riskassessmenttypes?: string | null;
  opc_SuggestedRiskAppetite_bind$opc_riskappetites?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_RiskAssessment_Create extends opc_RiskAssessment {
}
interface opc_RiskAssessment_Update extends opc_RiskAssessment {
}
interface opc_RiskAssessment_Select {
  createdby_guid: WebAttribute<opc_RiskAssessment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_RiskAssessment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_RiskAssessment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_RiskAssessment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_RiskAssessment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_RiskAssessment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_RiskAssessment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_actualriskappetite_guid: WebAttribute<opc_RiskAssessment_Select, { opc_actualriskappetite_guid: string | null }, { opc_actualriskappetite_formatted?: string }>;
  opc_actualriskappetitevalue: WebAttribute<opc_RiskAssessment_Select, { opc_actualriskappetitevalue: number | null }, {  }>;
  opc_bypassinitiatedby_guid: WebAttribute<opc_RiskAssessment_Select, { opc_bypassinitiatedby_guid: string | null }, { opc_bypassinitiatedby_formatted?: string }>;
  opc_bypassrationale: WebAttribute<opc_RiskAssessment_Select, { opc_bypassrationale: string | null }, {  }>;
  opc_bypasssuggestedriskappetite: WebAttribute<opc_RiskAssessment_Select, { opc_bypasssuggestedriskappetite: boolean | null }, {  }>;
  opc_complaint_guid: WebAttribute<opc_RiskAssessment_Select, { opc_complaint_guid: string | null }, { opc_complaint_formatted?: string }>;
  opc_name: WebAttribute<opc_RiskAssessment_Select, { opc_name: string | null }, {  }>;
  opc_riskassessmentid: WebAttribute<opc_RiskAssessment_Select, { opc_riskassessmentid: string | null }, {  }>;
  opc_riskassessmenttype_guid: WebAttribute<opc_RiskAssessment_Select, { opc_riskassessmenttype_guid: string | null }, { opc_riskassessmenttype_formatted?: string }>;
  opc_suggestedriskappetite_guid: WebAttribute<opc_RiskAssessment_Select, { opc_suggestedriskappetite_guid: string | null }, { opc_suggestedriskappetite_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_RiskAssessment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_RiskAssessment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_RiskAssessment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_RiskAssessment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_RiskAssessment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_RiskAssessment_Select, { statecode: opc_riskassessment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_RiskAssessment_Select, { statuscode: opc_riskassessment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_RiskAssessment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_RiskAssessment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_RiskAssessment_Select, { versionnumber: number | null }, {  }>;
}
interface opc_RiskAssessment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_actualriskappetite_guid: XQW.Guid;
  opc_actualriskappetitevalue: number;
  opc_bypassinitiatedby_guid: XQW.Guid;
  opc_bypassrationale: string;
  opc_bypasssuggestedriskappetite: boolean;
  opc_complaint_guid: XQW.Guid;
  opc_name: string;
  opc_riskassessmentid: XQW.Guid;
  opc_riskassessmenttype_guid: XQW.Guid;
  opc_suggestedriskappetite_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_riskassessment_statecode;
  statuscode: opc_riskassessment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_RiskAssessment_Expand {
  createdby: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_ActualRiskAppetite: WebExpand<opc_RiskAssessment_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_ActualRiskAppetite: opc_RiskAppetite_Result }>;
  opc_BypassInitiatedBy: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select, SystemUser_Filter, { opc_BypassInitiatedBy: SystemUser_Result }>;
  opc_Complaint: WebExpand<opc_RiskAssessment_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_Complaint: opc_complaint_Result }>;
  opc_RiskAssessmentCategory_RiskAssessment: WebExpand<opc_RiskAssessment_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { opc_RiskAssessmentCategory_RiskAssessment: opc_RiskAssessmentCategory_Result[] }>;
  opc_RiskAssessmentType: WebExpand<opc_RiskAssessment_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { opc_RiskAssessmentType: opc_RiskAssessmentType_Result }>;
  opc_SuggestedRiskAppetite: WebExpand<opc_RiskAssessment_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { opc_SuggestedRiskAppetite: opc_RiskAppetite_Result }>;
  opc_riskassessment_riskassessmentdefinitions_riskassessment: WebExpand<opc_RiskAssessment_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { opc_riskassessment_riskassessmentdefinitions_riskassessment: opc_RiskAssessmentDefinition_Result[] }>;
  ownerid: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_RiskAssessment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_RiskAssessment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_RiskAssessment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_actualriskappetite_formatted?: string;
  opc_bypassinitiatedby_formatted?: string;
  opc_complaint_formatted?: string;
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
interface opc_RiskAssessment_Result extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_actualriskappetite_guid: string | null;
  opc_bypassinitiatedby_guid: string | null;
  opc_complaint_guid: string | null;
  opc_riskassessmenttype_guid: string | null;
  opc_suggestedriskappetite_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_RiskAssessment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_ActualRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  opc_BypassInitiatedBy: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_Complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_RiskAssessmentType: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
  opc_SuggestedRiskAppetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_RiskAssessment_RelatedMany {
  opc_RiskAssessmentCategory_RiskAssessment: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  opc_riskassessment_riskassessmentdefinitions_riskassessment: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_riskassessments: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_riskassessments: WebMappingRelated<opc_RiskAssessment_RelatedOne,opc_RiskAssessment_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_riskassessments: WebMappingCUDA<opc_RiskAssessment_Create,opc_RiskAssessment_Update,opc_RiskAssessment_Select>;
}
