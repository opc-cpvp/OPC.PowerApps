interface opc_opcpriority_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_frenchdescription?: string | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_opcpriorityid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_opcpriority_statecode | null;
  statuscode?: opc_opcpriority_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_opcpriority_Relationships {
  opc_opcpriority_complaints_opcpriority?: opc_complaint_Result[] | null;
}
interface opc_opcpriority extends opc_opcpriority_Base, opc_opcpriority_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_opcpriority_Create extends opc_opcpriority {
}
interface opc_opcpriority_Update extends opc_opcpriority {
}
interface opc_opcpriority_Select {
  createdby_guid: WebAttribute<opc_opcpriority_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_opcpriority_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_opcpriority_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_opcpriority_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_opcpriority_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_opcpriority_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_opcpriority_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_opcpriority_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_frenchdescription: WebAttribute<opc_opcpriority_Select, { opc_frenchdescription: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_opcpriority_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_opcpriority_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_opcpriority_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_opcpriority_Select, { opc_namefrench: string | null }, {  }>;
  opc_opcpriorityid: WebAttribute<opc_opcpriority_Select, { opc_opcpriorityid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_opcpriority_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_opcpriority_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_opcpriority_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_opcpriority_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_opcpriority_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_opcpriority_Select, { statecode: opc_opcpriority_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_opcpriority_Select, { statuscode: opc_opcpriority_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_opcpriority_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_opcpriority_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_opcpriority_Select, { versionnumber: number | null }, {  }>;
}
interface opc_opcpriority_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_frenchdescription: string;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_opcpriorityid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_opcpriority_statecode;
  statuscode: opc_opcpriority_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_opcpriority_Expand {
  createdby: WebExpand<opc_opcpriority_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_opcpriority_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_opcpriority_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_opcpriority_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_opcpriority_complaints_opcpriority: WebExpand<opc_opcpriority_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_opcpriority_complaints_opcpriority: opc_complaint_Result[] }>;
  ownerid: WebExpand<opc_opcpriority_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_opcpriority_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_opcpriority_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_opcpriority_FormattedResult {
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
interface opc_opcpriority_Result extends opc_opcpriority_Base, opc_opcpriority_Relationships {
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
interface opc_opcpriority_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_opcpriority_RelatedMany {
  opc_opcpriority_complaints_opcpriority: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_opcpriorities: WebMappingRetrieve<opc_opcpriority_Select,opc_opcpriority_Expand,opc_opcpriority_Filter,opc_opcpriority_Fixed,opc_opcpriority_Result,opc_opcpriority_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_opcpriorities: WebMappingRelated<opc_opcpriority_RelatedOne,opc_opcpriority_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_opcpriorities: WebMappingCUDA<opc_opcpriority_Create,opc_opcpriority_Update,opc_opcpriority_Select>;
}
