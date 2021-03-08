interface opc_legislation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_acronym?: string | null;
  opc_legislationid?: string | null;
  opc_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_legislation_statecode | null;
  statuscode?: opc_legislation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_legislation_Relationships {
  opc_legislation_allegationtypes_legislation?: opc_legislationallegationtype_Result[] | null;
  opc_legislation_complaints_legislation?: opc_complaint_Result[] | null;
}
interface opc_legislation extends opc_legislation_Base, opc_legislation_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_legislation_Create extends opc_legislation {
}
interface opc_legislation_Update extends opc_legislation {
}
interface opc_legislation_Select {
  createdby_guid: WebAttribute<opc_legislation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_legislation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_legislation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_legislation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_legislation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_legislation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_legislation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_acronym: WebAttribute<opc_legislation_Select, { opc_acronym: string | null }, {  }>;
  opc_legislationid: WebAttribute<opc_legislation_Select, { opc_legislationid: string | null }, {  }>;
  opc_name: WebAttribute<opc_legislation_Select, { opc_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_legislation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_legislation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_legislation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_legislation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_legislation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_legislation_Select, { statecode: opc_legislation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_legislation_Select, { statuscode: opc_legislation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_legislation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_legislation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_legislation_Select, { versionnumber: number | null }, {  }>;
}
interface opc_legislation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_acronym: string;
  opc_legislationid: XQW.Guid;
  opc_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_legislation_statecode;
  statuscode: opc_legislation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_legislation_Expand {
  createdby: WebExpand<opc_legislation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_legislation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_legislation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_legislation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_legislation_allegationtypes_legislation: WebExpand<opc_legislation_Expand, opc_legislationallegationtype_Select, opc_legislationallegationtype_Filter, { opc_legislation_allegationtypes_legislation: opc_legislationallegationtype_Result[] }>;
  opc_legislation_complaints_legislation: WebExpand<opc_legislation_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_legislation_complaints_legislation: opc_complaint_Result[] }>;
  ownerid: WebExpand<opc_legislation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_legislation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_legislation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_legislation_FormattedResult {
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
interface opc_legislation_Result extends opc_legislation_Base, opc_legislation_Relationships {
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
interface opc_legislation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_legislation_RelatedMany {
  opc_legislation_allegationtypes_legislation: WebMappingRetrieve<opc_legislationallegationtype_Select,opc_legislationallegationtype_Expand,opc_legislationallegationtype_Filter,opc_legislationallegationtype_Fixed,opc_legislationallegationtype_Result,opc_legislationallegationtype_FormattedResult>;
  opc_legislation_complaints_legislation: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_legislations: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_legislations: WebMappingRelated<opc_legislation_RelatedOne,opc_legislation_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_legislations: WebMappingCUDA<opc_legislation_Create,opc_legislation_Update,opc_legislation_Select>;
}
