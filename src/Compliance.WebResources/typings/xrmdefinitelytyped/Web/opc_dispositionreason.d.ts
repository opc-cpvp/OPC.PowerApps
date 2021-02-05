interface opc_dispositionreason_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_allegationdisposition?: opc_allegationdisposition | null;
  opc_dispositionreasonid?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_dispositionreason_statecode | null;
  statuscode?: opc_dispositionreason_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_dispositionreason_Relationships {
  opc_dispositionreason_allegations_reason?: opc_allegation_Result[] | null;
  opc_dispositionreason_dispositionactions_reas?: opc_dispositionaction_Result[] | null;
}
interface opc_dispositionreason extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_dispositionreason_Create extends opc_dispositionreason {
}
interface opc_dispositionreason_Update extends opc_dispositionreason {
}
interface opc_dispositionreason_Select {
  createdby_guid: WebAttribute<opc_dispositionreason_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_dispositionreason_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_dispositionreason_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_dispositionreason_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_dispositionreason_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_dispositionreason_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_dispositionreason_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_allegationdisposition: WebAttribute<opc_dispositionreason_Select, { opc_allegationdisposition: opc_allegationdisposition | null }, { opc_allegationdisposition_formatted?: string }>;
  opc_dispositionreasonid: WebAttribute<opc_dispositionreason_Select, { opc_dispositionreasonid: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_dispositionreason_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_dispositionreason_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_dispositionreason_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_dispositionreason_Select, { opc_namefrench: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_dispositionreason_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_dispositionreason_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_dispositionreason_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_dispositionreason_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_dispositionreason_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_dispositionreason_Select, { statecode: opc_dispositionreason_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_dispositionreason_Select, { statuscode: opc_dispositionreason_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_dispositionreason_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_dispositionreason_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_dispositionreason_Select, { versionnumber: number | null }, {  }>;
}
interface opc_dispositionreason_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_allegationdisposition: opc_allegationdisposition;
  opc_dispositionreasonid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_dispositionreason_statecode;
  statuscode: opc_dispositionreason_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_dispositionreason_Expand {
  createdby: WebExpand<opc_dispositionreason_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_dispositionreason_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_dispositionreason_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_dispositionreason_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_dispositionreason_allegations_reason: WebExpand<opc_dispositionreason_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_dispositionreason_allegations_reason: opc_allegation_Result[] }>;
  opc_dispositionreason_dispositionactions_reas: WebExpand<opc_dispositionreason_Expand, opc_dispositionaction_Select, opc_dispositionaction_Filter, { opc_dispositionreason_dispositionactions_reas: opc_dispositionaction_Result[] }>;
  ownerid: WebExpand<opc_dispositionreason_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_dispositionreason_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_dispositionreason_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_dispositionreason_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_allegationdisposition_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_dispositionreason_Result extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
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
interface opc_dispositionreason_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_dispositionreason_RelatedMany {
  opc_dispositionreason_allegations_reason: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_dispositionreason_dispositionactions_reas: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_dispositionreasons: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_dispositionreasons: WebMappingRelated<opc_dispositionreason_RelatedOne,opc_dispositionreason_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_dispositionreasons: WebMappingCUDA<opc_dispositionreason_Create,opc_dispositionreason_Update,opc_dispositionreason_Select>;
}
