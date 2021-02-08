interface opc_provision_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_description?: string | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_ischeckable?: boolean | null;
  opc_isheading?: boolean | null;
  opc_islocalizable?: boolean | null;
  opc_marginalnote?: string | null;
  opc_marginalnoteenglish?: string | null;
  opc_marginalnotefrench?: string | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_provisionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_provision_statecode | null;
  statuscode?: opc_provision_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_provision_Relationships {
  opc_provision_parentprovisionid_provisions?: opc_provision_Result[] | null;
  opc_provisions_issues_provisions?: opc_issue_Result[] | null;
}
interface opc_provision extends opc_provision_Base, opc_provision_Relationships {
  opc_legislationid_bind$opc_legislations?: string | null;
  opc_parentprovisionid_bind$opc_provisions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_provision_Create extends opc_provision {
}
interface opc_provision_Update extends opc_provision {
}
interface opc_provision_Select {
  createdby_guid: WebAttribute<opc_provision_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_provision_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_provision_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_provision_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_provision_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_provision_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_provision_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_description: WebAttribute<opc_provision_Select, { opc_description: string | null }, {  }>;
  opc_descriptionenglish: WebAttribute<opc_provision_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_provision_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_ischeckable: WebAttribute<opc_provision_Select, { opc_ischeckable: boolean | null }, {  }>;
  opc_isheading: WebAttribute<opc_provision_Select, { opc_isheading: boolean | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_provision_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_legislationid_guid: WebAttribute<opc_provision_Select, { opc_legislationid_guid: string | null }, { opc_legislationid_formatted?: string }>;
  opc_marginalnote: WebAttribute<opc_provision_Select, { opc_marginalnote: string | null }, {  }>;
  opc_marginalnoteenglish: WebAttribute<opc_provision_Select, { opc_marginalnoteenglish: string | null }, {  }>;
  opc_marginalnotefrench: WebAttribute<opc_provision_Select, { opc_marginalnotefrench: string | null }, {  }>;
  opc_name: WebAttribute<opc_provision_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_provision_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_provision_Select, { opc_namefrench: string | null }, {  }>;
  opc_parentprovisionid_guid: WebAttribute<opc_provision_Select, { opc_parentprovisionid_guid: string | null }, { opc_parentprovisionid_formatted?: string }>;
  opc_provisionid: WebAttribute<opc_provision_Select, { opc_provisionid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_provision_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_provision_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_provision_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_provision_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_provision_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_provision_Select, { statecode: opc_provision_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_provision_Select, { statuscode: opc_provision_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_provision_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_provision_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_provision_Select, { versionnumber: number | null }, {  }>;
}
interface opc_provision_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_description: string;
  opc_descriptionenglish: string;
  opc_descriptionfrench: string;
  opc_ischeckable: boolean;
  opc_isheading: boolean;
  opc_islocalizable: boolean;
  opc_legislationid_guid: XQW.Guid;
  opc_marginalnote: string;
  opc_marginalnoteenglish: string;
  opc_marginalnotefrench: string;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_parentprovisionid_guid: XQW.Guid;
  opc_provisionid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_provision_statecode;
  statuscode: opc_provision_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_provision_Expand {
  createdby: WebExpand<opc_provision_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_provision_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_provision_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_provision_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_legislationid: WebExpand<opc_provision_Expand, opc_legislation_Select, opc_legislation_Filter, { opc_legislationid: opc_legislation_Result }>;
  opc_parentprovisionid: WebExpand<opc_provision_Expand, opc_provision_Select, opc_provision_Filter, { opc_parentprovisionid: opc_provision_Result }>;
  opc_provision_parentprovisionid_provisions: WebExpand<opc_provision_Expand, opc_provision_Select, opc_provision_Filter, { opc_provision_parentprovisionid_provisions: opc_provision_Result[] }>;
  opc_provisions_issues_provisions: WebExpand<opc_provision_Expand, opc_issue_Select, opc_issue_Filter, { opc_provisions_issues_provisions: opc_issue_Result[] }>;
  ownerid: WebExpand<opc_provision_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_provision_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_provision_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_provision_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_legislationid_formatted?: string;
  opc_parentprovisionid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_provision_Result extends opc_provision_Base, opc_provision_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_legislationid_guid: string | null;
  opc_parentprovisionid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_provision_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_legislationid: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
  opc_parentprovisionid: WebMappingRetrieve<opc_provision_Select,opc_provision_Expand,opc_provision_Filter,opc_provision_Fixed,opc_provision_Result,opc_provision_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_provision_RelatedMany {
  opc_provision_parentprovisionid_provisions: WebMappingRetrieve<opc_provision_Select,opc_provision_Expand,opc_provision_Filter,opc_provision_Fixed,opc_provision_Result,opc_provision_FormattedResult>;
  opc_provisions_issues_provisions: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_provisions: WebMappingRetrieve<opc_provision_Select,opc_provision_Expand,opc_provision_Filter,opc_provision_Fixed,opc_provision_Result,opc_provision_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_provisions: WebMappingRelated<opc_provision_RelatedOne,opc_provision_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_provisions: WebMappingCUDA<opc_provision_Create,opc_provision_Update,opc_provision_Select>;
}
