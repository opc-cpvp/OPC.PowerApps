interface SharePointDocumentLocation_Base extends WebEntity {
  absoluteurl?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  locationtype?: sharepointdocumentlocation_locationtype | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  relativeurl?: string | null;
  servicetype?: sharepointsite_servicetype | null;
  sharepointdocumentlocationid?: string | null;
  sitecollectionid?: string | null;
  statecode?: sharepointdocumentlocation_statecode | null;
  statuscode?: sharepointdocumentlocation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  userid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SharePointDocumentLocation_Relationships {
  parentsiteorlocation_sharepointdocumentlocation?: SharePointDocumentLocation_Result | null;
  parentsiteorlocation_sharepointsite?: SharePointSite_Result | null;
  regardingobjectid_account?: Account_Result | null;
  regardingobjectid_opc_complaint?: opc_complaint_Result | null;
  sharepointdocumentlocation_parent_sharepointdocumentlocation?: SharePointDocumentLocation_Result[] | null;
}
interface SharePointDocumentLocation extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentsiteorlocation_sharepointdocumentlocation_bind$sharepointdocumentlocations?: string | null;
  parentsiteorlocation_sharepointsite_bind$sharepointsites?: string | null;
  regardingobjectid_account_bind$accounts?: string | null;
  regardingobjectid_kbarticle_bind$kbarticles?: string | null;
  regardingobjectid_knowledgearticle_bind$knowledgearticles?: string | null;
  regardingobjectid_msdyn_knowledgearticletemplate_bind$msdyn_knowledgearticletemplates?: string | null;
  regardingobjectid_opc_complaint_bind$opc_complaints?: string | null;
}
interface SharePointDocumentLocation_Create extends SharePointDocumentLocation {
}
interface SharePointDocumentLocation_Update extends SharePointDocumentLocation {
}
interface SharePointDocumentLocation_Select {
  absoluteurl: WebAttribute<SharePointDocumentLocation_Select, { absoluteurl: string | null }, {  }>;
  createdby_guid: WebAttribute<SharePointDocumentLocation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SharePointDocumentLocation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SharePointDocumentLocation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SharePointDocumentLocation_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<SharePointDocumentLocation_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<SharePointDocumentLocation_Select, { importsequencenumber: number | null }, {  }>;
  locationtype: WebAttribute<SharePointDocumentLocation_Select, { locationtype: sharepointdocumentlocation_locationtype | null }, { locationtype_formatted?: string }>;
  modifiedby_guid: WebAttribute<SharePointDocumentLocation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SharePointDocumentLocation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SharePointDocumentLocation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SharePointDocumentLocation_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<SharePointDocumentLocation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<SharePointDocumentLocation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SharePointDocumentLocation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<SharePointDocumentLocation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<SharePointDocumentLocation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentsiteorlocation_guid: WebAttribute<SharePointDocumentLocation_Select, { parentsiteorlocation_guid: string | null }, { parentsiteorlocation_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<SharePointDocumentLocation_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  relativeurl: WebAttribute<SharePointDocumentLocation_Select, { relativeurl: string | null }, {  }>;
  servicetype: WebAttribute<SharePointDocumentLocation_Select, { servicetype: sharepointsite_servicetype | null }, { servicetype_formatted?: string }>;
  sharepointdocumentlocationid: WebAttribute<SharePointDocumentLocation_Select, { sharepointdocumentlocationid: string | null }, {  }>;
  sitecollectionid: WebAttribute<SharePointDocumentLocation_Select, { sitecollectionid: string | null }, {  }>;
  statecode: WebAttribute<SharePointDocumentLocation_Select, { statecode: sharepointdocumentlocation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SharePointDocumentLocation_Select, { statuscode: sharepointdocumentlocation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<SharePointDocumentLocation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SharePointDocumentLocation_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userid: WebAttribute<SharePointDocumentLocation_Select, { userid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SharePointDocumentLocation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SharePointDocumentLocation_Select, { versionnumber: number | null }, {  }>;
}
interface SharePointDocumentLocation_Filter {
  absoluteurl: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  importsequencenumber: number;
  locationtype: sharepointdocumentlocation_locationtype;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentsiteorlocation_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  relativeurl: string;
  servicetype: sharepointsite_servicetype;
  sharepointdocumentlocationid: XQW.Guid;
  sitecollectionid: XQW.Guid;
  statecode: sharepointdocumentlocation_statecode;
  statuscode: sharepointdocumentlocation_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SharePointDocumentLocation_Expand {
  createdby: WebExpand<SharePointDocumentLocation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SharePointDocumentLocation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SharePointDocumentLocation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SharePointDocumentLocation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<SharePointDocumentLocation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<SharePointDocumentLocation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<SharePointDocumentLocation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentsiteorlocation_sharepointdocumentlocation: WebExpand<SharePointDocumentLocation_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { parentsiteorlocation_sharepointdocumentlocation: SharePointDocumentLocation_Result }>;
  parentsiteorlocation_sharepointsite: WebExpand<SharePointDocumentLocation_Expand, SharePointSite_Select, SharePointSite_Filter, { parentsiteorlocation_sharepointsite: SharePointSite_Result }>;
  regardingobjectid_account: WebExpand<SharePointDocumentLocation_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_opc_complaint: WebExpand<SharePointDocumentLocation_Expand, opc_complaint_Select, opc_complaint_Filter, { regardingobjectid_opc_complaint: opc_complaint_Result }>;
  sharepointdocumentlocation_parent_sharepointdocumentlocation: WebExpand<SharePointDocumentLocation_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { sharepointdocumentlocation_parent_sharepointdocumentlocation: SharePointDocumentLocation_Result[] }>;
}
interface SharePointDocumentLocation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  locationtype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentsiteorlocation_formatted?: string;
  regardingobjectid_formatted?: string;
  servicetype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SharePointDocumentLocation_Result extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentsiteorlocation_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SharePointDocumentLocation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentsiteorlocation_sharepointdocumentlocation: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  parentsiteorlocation_sharepointsite: WebMappingRetrieve<SharePointSite_Select,SharePointSite_Expand,SharePointSite_Filter,SharePointSite_Fixed,SharePointSite_Result,SharePointSite_FormattedResult>;
  regardingobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_opc_complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface SharePointDocumentLocation_RelatedMany {
  sharepointdocumentlocation_parent_sharepointdocumentlocation: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sharepointdocumentlocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
}
interface WebEntitiesRelated {
  sharepointdocumentlocations: WebMappingRelated<SharePointDocumentLocation_RelatedOne,SharePointDocumentLocation_RelatedMany>;
}
interface WebEntitiesCUDA {
  sharepointdocumentlocations: WebMappingCUDA<SharePointDocumentLocation_Create,SharePointDocumentLocation_Update,SharePointDocumentLocation_Select>;
}
