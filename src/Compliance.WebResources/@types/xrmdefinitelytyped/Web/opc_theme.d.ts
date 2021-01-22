interface opc_theme_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_themeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_theme_statecode | null;
  statuscode?: opc_theme_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_theme_Relationships {
  opc_theme_topics_themeid?: opc_topic_Result[] | null;
}
interface opc_theme extends opc_theme_Base, opc_theme_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_theme_Create extends opc_theme {
}
interface opc_theme_Update extends opc_theme {
}
interface opc_theme_Select {
  createdby_guid: WebAttribute<opc_theme_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_theme_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_theme_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_theme_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_theme_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_theme_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_theme_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_theme_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_theme_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_theme_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_theme_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_theme_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_theme_Select, { opc_namefrench: string | null }, {  }>;
  opc_themeid: WebAttribute<opc_theme_Select, { opc_themeid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_theme_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_theme_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_theme_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_theme_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_theme_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_theme_Select, { statecode: opc_theme_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_theme_Select, { statuscode: opc_theme_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_theme_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_theme_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_theme_Select, { versionnumber: number | null }, {  }>;
}
interface opc_theme_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_descriptionfrench: string;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_themeid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_theme_statecode;
  statuscode: opc_theme_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_theme_Expand {
  createdby: WebExpand<opc_theme_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_theme_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_theme_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_theme_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_theme_topics_themeid: WebExpand<opc_theme_Expand, opc_topic_Select, opc_topic_Filter, { opc_theme_topics_themeid: opc_topic_Result[] }>;
  ownerid: WebExpand<opc_theme_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_theme_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_theme_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_theme_FormattedResult {
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
interface opc_theme_Result extends opc_theme_Base, opc_theme_Relationships {
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
interface opc_theme_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_theme_RelatedMany {
  opc_theme_topics_themeid: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_themes: WebMappingRetrieve<opc_theme_Select,opc_theme_Expand,opc_theme_Filter,opc_theme_Fixed,opc_theme_Result,opc_theme_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_themes: WebMappingRelated<opc_theme_RelatedOne,opc_theme_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_themes: WebMappingCUDA<opc_theme_Create,opc_theme_Update,opc_theme_Select>;
}
