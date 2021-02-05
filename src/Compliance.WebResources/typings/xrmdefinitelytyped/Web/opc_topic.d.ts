interface opc_topic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_topicid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_topic_statecode | null;
  statuscode?: opc_topic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_topic_Relationships {
  opc_complaints_topics_relatedtopics?: opc_complaint_Result[] | null;
}
interface opc_topic extends opc_topic_Base, opc_topic_Relationships {
  opc_themeid_bind$opc_themes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_topic_Create extends opc_topic {
}
interface opc_topic_Update extends opc_topic {
}
interface opc_topic_Select {
  createdby_guid: WebAttribute<opc_topic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_topic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_topic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_topic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_topic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_topic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_topic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_topic_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_topic_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_topic_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_topic_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_topic_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_topic_Select, { opc_namefrench: string | null }, {  }>;
  opc_themeid_guid: WebAttribute<opc_topic_Select, { opc_themeid_guid: string | null }, { opc_themeid_formatted?: string }>;
  opc_topicid: WebAttribute<opc_topic_Select, { opc_topicid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_topic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_topic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_topic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_topic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_topic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_topic_Select, { statecode: opc_topic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_topic_Select, { statuscode: opc_topic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_topic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_topic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_topic_Select, { versionnumber: number | null }, {  }>;
}
interface opc_topic_Filter {
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
  opc_themeid_guid: XQW.Guid;
  opc_topicid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_topic_statecode;
  statuscode: opc_topic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_topic_Expand {
  createdby: WebExpand<opc_topic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_topic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_topic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_topic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_complaints_topics_relatedtopics: WebExpand<opc_topic_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaints_topics_relatedtopics: opc_complaint_Result[] }>;
  opc_themeid: WebExpand<opc_topic_Expand, opc_theme_Select, opc_theme_Filter, { opc_themeid: opc_theme_Result }>;
  ownerid: WebExpand<opc_topic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_topic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_topic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_topic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_themeid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_topic_Result extends opc_topic_Base, opc_topic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_themeid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_topic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_themeid: WebMappingRetrieve<opc_theme_Select,opc_theme_Expand,opc_theme_Filter,opc_theme_Fixed,opc_theme_Result,opc_theme_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_topic_RelatedMany {
  opc_complaints_topics_relatedtopics: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_topics: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_topics: WebMappingRelated<opc_topic_RelatedOne,opc_topic_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_topics: WebMappingCUDA<opc_topic_Create,opc_topic_Update,opc_topic_Select>;
}
