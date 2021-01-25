interface opc_industry_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_descriptionenglish?: string | null;
  opc_descriptionfrench?: string | null;
  opc_industryid?: string | null;
  opc_islocalizable?: boolean | null;
  opc_naicsnumber?: string | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_industry_statecode | null;
  statuscode?: opc_industry_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_industry_Relationships {
  opc_accounts_industries_relatedindustries?: Account_Result[] | null;
  opc_complaints_industries_relatedindustries?: opc_complaint_Result[] | null;
  opc_industry_parentindustryid_industries?: opc_industry_Result[] | null;
}
interface opc_industry extends opc_industry_Base, opc_industry_Relationships {
  opc_parentindustryid_bind$opc_industries?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_industry_Create extends opc_industry {
}
interface opc_industry_Update extends opc_industry {
}
interface opc_industry_Select {
  createdby_guid: WebAttribute<opc_industry_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_industry_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_industry_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_industry_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_industry_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_industry_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_industry_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_descriptionenglish: WebAttribute<opc_industry_Select, { opc_descriptionenglish: string | null }, {  }>;
  opc_descriptionfrench: WebAttribute<opc_industry_Select, { opc_descriptionfrench: string | null }, {  }>;
  opc_industryid: WebAttribute<opc_industry_Select, { opc_industryid: string | null }, {  }>;
  opc_islocalizable: WebAttribute<opc_industry_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_naicsnumber: WebAttribute<opc_industry_Select, { opc_naicsnumber: string | null }, {  }>;
  opc_name: WebAttribute<opc_industry_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_industry_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_industry_Select, { opc_namefrench: string | null }, {  }>;
  opc_parentindustryid_guid: WebAttribute<opc_industry_Select, { opc_parentindustryid_guid: string | null }, { opc_parentindustryid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_industry_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_industry_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_industry_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_industry_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_industry_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_industry_Select, { statecode: opc_industry_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_industry_Select, { statuscode: opc_industry_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_industry_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_industry_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_industry_Select, { versionnumber: number | null }, {  }>;
}
interface opc_industry_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_descriptionenglish: string;
  opc_descriptionfrench: string;
  opc_industryid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_naicsnumber: string;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_parentindustryid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_industry_statecode;
  statuscode: opc_industry_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_industry_Expand {
  createdby: WebExpand<opc_industry_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_industry_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_industry_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_industry_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_accounts_industries_relatedindustries: WebExpand<opc_industry_Expand, Account_Select, Account_Filter, { opc_accounts_industries_relatedindustries: Account_Result[] }>;
  opc_complaints_industries_relatedindustries: WebExpand<opc_industry_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaints_industries_relatedindustries: opc_complaint_Result[] }>;
  opc_industry_parentindustryid_industries: WebExpand<opc_industry_Expand, opc_industry_Select, opc_industry_Filter, { opc_industry_parentindustryid_industries: opc_industry_Result[] }>;
  opc_parentindustryid: WebExpand<opc_industry_Expand, opc_industry_Select, opc_industry_Filter, { opc_parentindustryid: opc_industry_Result }>;
  ownerid: WebExpand<opc_industry_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_industry_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_industry_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_industry_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_parentindustryid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_industry_Result extends opc_industry_Base, opc_industry_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_parentindustryid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_industry_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_parentindustryid: WebMappingRetrieve<opc_industry_Select,opc_industry_Expand,opc_industry_Filter,opc_industry_Fixed,opc_industry_Result,opc_industry_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_industry_RelatedMany {
  opc_accounts_industries_relatedindustries: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  opc_complaints_industries_relatedindustries: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_industry_parentindustryid_industries: WebMappingRetrieve<opc_industry_Select,opc_industry_Expand,opc_industry_Filter,opc_industry_Fixed,opc_industry_Result,opc_industry_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_industries: WebMappingRetrieve<opc_industry_Select,opc_industry_Expand,opc_industry_Filter,opc_industry_Fixed,opc_industry_Result,opc_industry_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_industries: WebMappingRelated<opc_industry_RelatedOne,opc_industry_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_industries: WebMappingCUDA<opc_industry_Create,opc_industry_Update,opc_industry_Select>;
}
