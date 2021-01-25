interface opc_dispositionaction_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_dispositionactionid?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_dispositionaction_statecode | null;
  statuscode?: opc_dispositionaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_dispositionaction_Relationships {
  opc_dispositionaction_allegations_action?: opc_allegation_Result[] | null;
}
interface opc_dispositionaction extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
  opc_dispositionreasonid_bind$opc_dispositionreasons?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_dispositionaction_Create extends opc_dispositionaction {
}
interface opc_dispositionaction_Update extends opc_dispositionaction {
}
interface opc_dispositionaction_Select {
  createdby_guid: WebAttribute<opc_dispositionaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_dispositionaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_dispositionaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_dispositionaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_dispositionaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_dispositionaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_dispositionaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_dispositionactionid: WebAttribute<opc_dispositionaction_Select, { opc_dispositionactionid: string | null }, {  }>;
  opc_dispositionreasonid_guid: WebAttribute<opc_dispositionaction_Select, { opc_dispositionreasonid_guid: string | null }, { opc_dispositionreasonid_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_dispositionaction_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_dispositionaction_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_dispositionaction_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_dispositionaction_Select, { opc_namefrench: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_dispositionaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_dispositionaction_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_dispositionaction_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_dispositionaction_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_dispositionaction_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_dispositionaction_Select, { statecode: opc_dispositionaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_dispositionaction_Select, { statuscode: opc_dispositionaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_dispositionaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_dispositionaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_dispositionaction_Select, { versionnumber: number | null }, {  }>;
}
interface opc_dispositionaction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_dispositionactionid: XQW.Guid;
  opc_dispositionreasonid_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_dispositionaction_statecode;
  statuscode: opc_dispositionaction_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_dispositionaction_Expand {
  createdby: WebExpand<opc_dispositionaction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_dispositionaction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_dispositionaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_dispositionaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_dispositionaction_allegations_action: WebExpand<opc_dispositionaction_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_dispositionaction_allegations_action: opc_allegation_Result[] }>;
  opc_dispositionreasonid: WebExpand<opc_dispositionaction_Expand, opc_dispositionreason_Select, opc_dispositionreason_Filter, { opc_dispositionreasonid: opc_dispositionreason_Result }>;
  ownerid: WebExpand<opc_dispositionaction_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_dispositionaction_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_dispositionaction_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_dispositionaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_dispositionreasonid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_dispositionaction_Result extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_dispositionreasonid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_dispositionaction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_dispositionreasonid: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_dispositionaction_RelatedMany {
  opc_dispositionaction_allegations_action: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_dispositionactions: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_dispositionactions: WebMappingRelated<opc_dispositionaction_RelatedOne,opc_dispositionaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_dispositionactions: WebMappingCUDA<opc_dispositionaction_Create,opc_dispositionaction_Update,opc_dispositionaction_Select>;
}
