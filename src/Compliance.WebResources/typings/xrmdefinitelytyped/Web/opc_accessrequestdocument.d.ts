interface opc_accessrequestdocument_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_accessrequestdocumentid?: string | null;
  opc_contestedbycomplainant?: boolean | null;
  opc_correctlyappliedexemption?: boolean | null;
  opc_datereleased?: Date | null;
  opc_description?: string | null;
  opc_documenturl?: string | null;
  opc_name?: string | null;
  opc_rationale?: string | null;
  opc_releasedstate?: opc_releasedstate | null;
  opc_relevant?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_accessrequestdocument_statecode | null;
  statuscode?: opc_accessrequestdocument_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_accessrequestdocument_Relationships {
}
interface opc_accessrequestdocument extends opc_accessrequestdocument_Base, opc_accessrequestdocument_Relationships {
  opc_issue_bind$opc_issues?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_accessrequestdocument_Create extends opc_accessrequestdocument {
}
interface opc_accessrequestdocument_Update extends opc_accessrequestdocument {
}
interface opc_accessrequestdocument_Select {
  createdby_guid: WebAttribute<opc_accessrequestdocument_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_accessrequestdocument_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_accessrequestdocument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_accessrequestdocument_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_accessrequestdocument_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_accessrequestdocument_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_accessrequestdocument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_accessrequestdocumentid: WebAttribute<opc_accessrequestdocument_Select, { opc_accessrequestdocumentid: string | null }, {  }>;
  opc_contestedbycomplainant: WebAttribute<opc_accessrequestdocument_Select, { opc_contestedbycomplainant: boolean | null }, {  }>;
  opc_correctlyappliedexemption: WebAttribute<opc_accessrequestdocument_Select, { opc_correctlyappliedexemption: boolean | null }, {  }>;
  opc_datereleased: WebAttribute<opc_accessrequestdocument_Select, { opc_datereleased: Date | null }, { opc_datereleased_formatted?: string }>;
  opc_description: WebAttribute<opc_accessrequestdocument_Select, { opc_description: string | null }, {  }>;
  opc_documenturl: WebAttribute<opc_accessrequestdocument_Select, { opc_documenturl: string | null }, {  }>;
  opc_issue_guid: WebAttribute<opc_accessrequestdocument_Select, { opc_issue_guid: string | null }, { opc_issue_formatted?: string }>;
  opc_name: WebAttribute<opc_accessrequestdocument_Select, { opc_name: string | null }, {  }>;
  opc_rationale: WebAttribute<opc_accessrequestdocument_Select, { opc_rationale: string | null }, {  }>;
  opc_releasedstate: WebAttribute<opc_accessrequestdocument_Select, { opc_releasedstate: opc_releasedstate | null }, { opc_releasedstate_formatted?: string }>;
  opc_relevant: WebAttribute<opc_accessrequestdocument_Select, { opc_relevant: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_accessrequestdocument_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_accessrequestdocument_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_accessrequestdocument_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_accessrequestdocument_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_accessrequestdocument_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_accessrequestdocument_Select, { statecode: opc_accessrequestdocument_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_accessrequestdocument_Select, { statuscode: opc_accessrequestdocument_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_accessrequestdocument_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_accessrequestdocument_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_accessrequestdocument_Select, { versionnumber: number | null }, {  }>;
}
interface opc_accessrequestdocument_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_accessrequestdocumentid: XQW.Guid;
  opc_contestedbycomplainant: boolean;
  opc_correctlyappliedexemption: boolean;
  opc_datereleased: Date;
  opc_description: string;
  opc_documenturl: string;
  opc_issue_guid: XQW.Guid;
  opc_name: string;
  opc_rationale: string;
  opc_releasedstate: opc_releasedstate;
  opc_relevant: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_accessrequestdocument_statecode;
  statuscode: opc_accessrequestdocument_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_accessrequestdocument_Expand {
  createdby: WebExpand<opc_accessrequestdocument_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_accessrequestdocument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_accessrequestdocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_accessrequestdocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_issue: WebExpand<opc_accessrequestdocument_Expand, opc_issue_Select, opc_issue_Filter, { opc_issue: opc_issue_Result }>;
  ownerid: WebExpand<opc_accessrequestdocument_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_accessrequestdocument_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_accessrequestdocument_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_accessrequestdocument_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_datereleased_formatted?: string;
  opc_issue_formatted?: string;
  opc_releasedstate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_accessrequestdocument_Result extends opc_accessrequestdocument_Base, opc_accessrequestdocument_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_issue_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_accessrequestdocument_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_issue: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_accessrequestdocument_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_accessrequestdocuments: WebMappingRetrieve<opc_accessrequestdocument_Select,opc_accessrequestdocument_Expand,opc_accessrequestdocument_Filter,opc_accessrequestdocument_Fixed,opc_accessrequestdocument_Result,opc_accessrequestdocument_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_accessrequestdocuments: WebMappingRelated<opc_accessrequestdocument_RelatedOne,opc_accessrequestdocument_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_accessrequestdocuments: WebMappingCUDA<opc_accessrequestdocument_Create,opc_accessrequestdocument_Update,opc_accessrequestdocument_Select>;
}
