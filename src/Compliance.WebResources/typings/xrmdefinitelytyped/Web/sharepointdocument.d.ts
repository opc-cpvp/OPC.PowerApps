interface SharePointDocument_Base extends WebEntity {
  absoluteurl?: string | null;
  appcreatedby?: string | null;
  appmodifiedby?: string | null;
  author?: string | null;
  checkedoutto?: string | null;
  checkincomment?: string | null;
  childfoldercount?: number | null;
  childitemcount?: number | null;
  contenttype?: string | null;
  contenttypeid?: number | null;
  copysource?: string | null;
  createdon?: Date | null;
  documentid?: number | null;
  documentlocationtype?: sharepointdocumentlocation_locationtype | null;
  edit?: string | null;
  editurl?: string | null;
  exchangerate?: number | null;
  filesize?: number | null;
  filetype?: string | null;
  fullname?: string | null;
  iconclassname?: string | null;
  ischeckedout?: boolean | null;
  isfolder?: boolean | null;
  isrecursivefetch?: boolean | null;
  locationid?: string | null;
  locationname?: string | null;
  modified?: Date | null;
  modifiedon?: Date | null;
  readurl?: string | null;
  relativelocation?: string | null;
  servicetype?: sharepointsite_servicetype | null;
  sharepointcreatedon?: Date | null;
  sharepointdocumentid?: string | null;
  sharepointmodifiedby?: string | null;
  title?: string | null;
  version?: string | null;
}
interface SharePointDocument_Relationships {
  regardingobjectid_account?: Account_Result | null;
  regardingobjectid_contact?: Contact_Result | null;
  regardingobjectid_opc_complaint?: opc_complaint_Result | null;
}
interface SharePointDocument extends SharePointDocument_Base, SharePointDocument_Relationships {
  businessunitid_bind$businessunits?: string | null;
  regardingobjectid_account_bind$accounts?: string | null;
  regardingobjectid_contact_bind$contacts?: string | null;
  regardingobjectid_kbarticle_bind$kbarticles?: string | null;
  regardingobjectid_knowledgearticle_bind$knowledgearticles?: string | null;
  regardingobjectid_lead_bind$leads?: string | null;
  regardingobjectid_msdyn_knowledgearticletemplate_bind$msdyn_knowledgearticletemplates?: string | null;
  regardingobjectid_msdyn_playbookactivity_bind$msdyn_playbookactivities?: string | null;
  regardingobjectid_opc_complaint_bind$opc_complaints?: string | null;
  regardingobjectid_opportunity_bind$opportunities?: string | null;
  regardingobjectid_product_bind$products?: string | null;
  regardingobjectid_quote_bind$quotes?: string | null;
  regardingobjectid_salesliterature_bind$salesliteratures?: string | null;
}
interface SharePointDocument_Create extends SharePointDocument {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface SharePointDocument_Update extends SharePointDocument {
}
interface SharePointDocument_Select {
  absoluteurl: WebAttribute<SharePointDocument_Select, { absoluteurl: string | null }, {  }>;
  appcreatedby: WebAttribute<SharePointDocument_Select, { appcreatedby: string | null }, {  }>;
  appmodifiedby: WebAttribute<SharePointDocument_Select, { appmodifiedby: string | null }, {  }>;
  author: WebAttribute<SharePointDocument_Select, { author: string | null }, {  }>;
  businessunitid_guid: WebAttribute<SharePointDocument_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  checkedoutto: WebAttribute<SharePointDocument_Select, { checkedoutto: string | null }, {  }>;
  checkincomment: WebAttribute<SharePointDocument_Select, { checkincomment: string | null }, {  }>;
  childfoldercount: WebAttribute<SharePointDocument_Select, { childfoldercount: number | null }, {  }>;
  childitemcount: WebAttribute<SharePointDocument_Select, { childitemcount: number | null }, {  }>;
  contenttype: WebAttribute<SharePointDocument_Select, { contenttype: string | null }, {  }>;
  contenttypeid: WebAttribute<SharePointDocument_Select, { contenttypeid: number | null }, {  }>;
  copysource: WebAttribute<SharePointDocument_Select, { copysource: string | null }, {  }>;
  createdby_guid: WebAttribute<SharePointDocument_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SharePointDocument_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SharePointDocument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  documentid: WebAttribute<SharePointDocument_Select, { documentid: number | null }, {  }>;
  documentlocationtype: WebAttribute<SharePointDocument_Select, { documentlocationtype: sharepointdocumentlocation_locationtype | null }, { documentlocationtype_formatted?: string }>;
  edit: WebAttribute<SharePointDocument_Select, { edit: string | null }, {  }>;
  editurl: WebAttribute<SharePointDocument_Select, { editurl: string | null }, {  }>;
  exchangerate: WebAttribute<SharePointDocument_Select, { exchangerate: number | null }, {  }>;
  filesize: WebAttribute<SharePointDocument_Select, { filesize: number | null }, {  }>;
  filetype: WebAttribute<SharePointDocument_Select, { filetype: string | null }, {  }>;
  fullname: WebAttribute<SharePointDocument_Select, { fullname: string | null }, {  }>;
  iconclassname: WebAttribute<SharePointDocument_Select, { iconclassname: string | null }, {  }>;
  ischeckedout: WebAttribute<SharePointDocument_Select, { ischeckedout: boolean | null }, {  }>;
  isfolder: WebAttribute<SharePointDocument_Select, { isfolder: boolean | null }, {  }>;
  isrecursivefetch: WebAttribute<SharePointDocument_Select, { isrecursivefetch: boolean | null }, {  }>;
  locationid: WebAttribute<SharePointDocument_Select, { locationid: string | null }, {  }>;
  locationname: WebAttribute<SharePointDocument_Select, { locationname: string | null }, {  }>;
  modified: WebAttribute<SharePointDocument_Select, { modified: Date | null }, { modified_formatted?: string }>;
  modifiedby_guid: WebAttribute<SharePointDocument_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SharePointDocument_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SharePointDocument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SharePointDocument_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  ownerid_guid: WebAttribute<SharePointDocument_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SharePointDocument_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<SharePointDocument_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<SharePointDocument_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  readurl: WebAttribute<SharePointDocument_Select, { readurl: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<SharePointDocument_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  relativelocation: WebAttribute<SharePointDocument_Select, { relativelocation: string | null }, {  }>;
  servicetype: WebAttribute<SharePointDocument_Select, { servicetype: sharepointsite_servicetype | null }, { servicetype_formatted?: string }>;
  sharepointcreatedon: WebAttribute<SharePointDocument_Select, { sharepointcreatedon: Date | null }, { sharepointcreatedon_formatted?: string }>;
  sharepointdocumentid: WebAttribute<SharePointDocument_Select, { sharepointdocumentid: string | null }, {  }>;
  sharepointmodifiedby: WebAttribute<SharePointDocument_Select, { sharepointmodifiedby: string | null }, {  }>;
  title: WebAttribute<SharePointDocument_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SharePointDocument_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  version: WebAttribute<SharePointDocument_Select, { version: string | null }, {  }>;
}
interface SharePointDocument_Filter {
  absoluteurl: string;
  appcreatedby: string;
  appmodifiedby: string;
  author: string;
  businessunitid_guid: XQW.Guid;
  checkedoutto: string;
  checkincomment: string;
  childfoldercount: number;
  childitemcount: number;
  contenttype: string;
  contenttypeid: number;
  copysource: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  documentid: number;
  documentlocationtype: sharepointdocumentlocation_locationtype;
  edit: string;
  editurl: string;
  exchangerate: any;
  filesize: number;
  filetype: string;
  fullname: string;
  iconclassname: string;
  ischeckedout: boolean;
  isfolder: boolean;
  isrecursivefetch: boolean;
  locationid: string;
  locationname: string;
  modified: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  readurl: string;
  regardingobjectid_guid: XQW.Guid;
  relativelocation: string;
  servicetype: sharepointsite_servicetype;
  sharepointcreatedon: Date;
  sharepointdocumentid: XQW.Guid;
  sharepointmodifiedby: string;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  version: string;
}
interface SharePointDocument_Expand {
  createdby: WebExpand<SharePointDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SharePointDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SharePointDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SharePointDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<SharePointDocument_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  regardingobjectid_account: WebExpand<SharePointDocument_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_contact: WebExpand<SharePointDocument_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
  regardingobjectid_opc_complaint: WebExpand<SharePointDocument_Expand, opc_complaint_Select, opc_complaint_Filter, { regardingobjectid_opc_complaint: opc_complaint_Result }>;
}
interface SharePointDocument_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  documentlocationtype_formatted?: string;
  modified_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  servicetype_formatted?: string;
  sharepointcreatedon_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SharePointDocument_Result extends SharePointDocument_Base, SharePointDocument_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SharePointDocument_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  regardingobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_opc_complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface SharePointDocument_RelatedMany {
}
interface WebEntitiesRetrieve {
  sharepointdocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
}
interface WebEntitiesRelated {
  sharepointdocuments: WebMappingRelated<SharePointDocument_RelatedOne,SharePointDocument_RelatedMany>;
}
interface WebEntitiesCUDA {
  sharepointdocuments: WebMappingCUDA<SharePointDocument_Create,SharePointDocument_Update,SharePointDocument_Select>;
}
