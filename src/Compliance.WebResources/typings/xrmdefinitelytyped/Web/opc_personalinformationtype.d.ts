interface opc_personalinformationtype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_personalinformationtypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_personalinformationtype_statecode | null;
  statuscode?: opc_personalinformationtype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_personalinformationtype_Relationships {
  opc_allegations_personalinformationtypes?: opc_allegation_Result[] | null;
}
interface opc_personalinformationtype extends opc_personalinformationtype_Base, opc_personalinformationtype_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_personalinformationtype_Create extends opc_personalinformationtype {
}
interface opc_personalinformationtype_Update extends opc_personalinformationtype {
}
interface opc_personalinformationtype_Select {
  createdby_guid: WebAttribute<opc_personalinformationtype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_personalinformationtype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_personalinformationtype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_personalinformationtype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_personalinformationtype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_personalinformationtype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_personalinformationtype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_personalinformationtype_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_personalinformationtype_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_personalinformationtype_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_personalinformationtype_Select, { opc_namefrench: string | null }, {  }>;
  opc_personalinformationtypeid: WebAttribute<opc_personalinformationtype_Select, { opc_personalinformationtypeid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_personalinformationtype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_personalinformationtype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_personalinformationtype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_personalinformationtype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_personalinformationtype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_personalinformationtype_Select, { statecode: opc_personalinformationtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_personalinformationtype_Select, { statuscode: opc_personalinformationtype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_personalinformationtype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_personalinformationtype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_personalinformationtype_Select, { versionnumber: number | null }, {  }>;
}
interface opc_personalinformationtype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_personalinformationtypeid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_personalinformationtype_statecode;
  statuscode: opc_personalinformationtype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_personalinformationtype_Expand {
  createdby: WebExpand<opc_personalinformationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_personalinformationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_personalinformationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_personalinformationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_allegations_personalinformationtypes: WebExpand<opc_personalinformationtype_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegations_personalinformationtypes: opc_allegation_Result[] }>;
  ownerid: WebExpand<opc_personalinformationtype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_personalinformationtype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_personalinformationtype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_personalinformationtype_FormattedResult {
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
interface opc_personalinformationtype_Result extends opc_personalinformationtype_Base, opc_personalinformationtype_Relationships {
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
interface opc_personalinformationtype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_personalinformationtype_RelatedMany {
  opc_allegations_personalinformationtypes: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_personalinformationtypes: WebMappingRetrieve<opc_personalinformationtype_Select,opc_personalinformationtype_Expand,opc_personalinformationtype_Filter,opc_personalinformationtype_Fixed,opc_personalinformationtype_Result,opc_personalinformationtype_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_personalinformationtypes: WebMappingRelated<opc_personalinformationtype_RelatedOne,opc_personalinformationtype_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_personalinformationtypes: WebMappingCUDA<opc_personalinformationtype_Create,opc_personalinformationtype_Update,opc_personalinformationtype_Select>;
}
