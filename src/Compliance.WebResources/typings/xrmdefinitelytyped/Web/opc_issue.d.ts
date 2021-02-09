interface opc_issue_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_accessrequestnumber?: string | null;
  opc_disposition?: opc_issuedisposition | null;
  opc_issueid?: string | null;
  opc_milestoneatdisposition?: opc_complaintmilestone | null;
  opc_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_issue_statecode | null;
  statuscode?: opc_issue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_issue_Relationships {
  opc_allegations_issues_relatedissues?: opc_allegation_Result[] | null;
  opc_issue_accessrequestdocuments_issue?: opc_accessrequestdocument_Result[] | null;
}
interface opc_issue extends opc_issue_Base, opc_issue_Relationships {
  opc_allegationtypeid_bind$opc_allegationtypes?: string | null;
  opc_complaintid_bind$opc_complaints?: string | null;
  opc_contact_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_issue_Create extends opc_issue {
}
interface opc_issue_Update extends opc_issue {
}
interface opc_issue_Select {
  createdby_guid: WebAttribute<opc_issue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_issue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_issue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_issue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_issue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_issue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_issue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_accessrequestnumber: WebAttribute<opc_issue_Select, { opc_accessrequestnumber: string | null }, {  }>;
  opc_allegationtypeid_guid: WebAttribute<opc_issue_Select, { opc_allegationtypeid_guid: string | null }, { opc_allegationtypeid_formatted?: string }>;
  opc_complaintid_guid: WebAttribute<opc_issue_Select, { opc_complaintid_guid: string | null }, { opc_complaintid_formatted?: string }>;
  opc_contact_guid: WebAttribute<opc_issue_Select, { opc_contact_guid: string | null }, { opc_contact_formatted?: string }>;
  opc_disposition: WebAttribute<opc_issue_Select, { opc_disposition: opc_issuedisposition | null }, { opc_disposition_formatted?: string }>;
  opc_issueid: WebAttribute<opc_issue_Select, { opc_issueid: string | null }, {  }>;
  opc_milestoneatdisposition: WebAttribute<opc_issue_Select, { opc_milestoneatdisposition: opc_complaintmilestone | null }, { opc_milestoneatdisposition_formatted?: string }>;
  opc_name: WebAttribute<opc_issue_Select, { opc_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_issue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_issue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_issue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_issue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_issue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_issue_Select, { statecode: opc_issue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_issue_Select, { statuscode: opc_issue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_issue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_issue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_issue_Select, { versionnumber: number | null }, {  }>;
}
interface opc_issue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_accessrequestnumber: string;
  opc_allegationtypeid_guid: XQW.Guid;
  opc_complaintid_guid: XQW.Guid;
  opc_contact_guid: XQW.Guid;
  opc_disposition: opc_issuedisposition;
  opc_issueid: XQW.Guid;
  opc_milestoneatdisposition: opc_complaintmilestone;
  opc_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_issue_statecode;
  statuscode: opc_issue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_issue_Expand {
  createdby: WebExpand<opc_issue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_issue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_issue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_issue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_allegations_issues_relatedissues: WebExpand<opc_issue_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegations_issues_relatedissues: opc_allegation_Result[] }>;
  opc_allegationtypeid: WebExpand<opc_issue_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { opc_allegationtypeid: opc_allegationtype_Result }>;
  opc_complaintid: WebExpand<opc_issue_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaintid: opc_complaint_Result }>;
  opc_contact: WebExpand<opc_issue_Expand, Contact_Select, Contact_Filter, { opc_contact: Contact_Result }>;
  opc_issue_accessrequestdocuments_issue: WebExpand<opc_issue_Expand, opc_accessrequestdocument_Select, opc_accessrequestdocument_Filter, { opc_issue_accessrequestdocuments_issue: opc_accessrequestdocument_Result[] }>;
  ownerid: WebExpand<opc_issue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_issue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_issue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_issue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_allegationtypeid_formatted?: string;
  opc_complaintid_formatted?: string;
  opc_contact_formatted?: string;
  opc_disposition_formatted?: string;
  opc_milestoneatdisposition_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_issue_Result extends opc_issue_Base, opc_issue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_allegationtypeid_guid: string | null;
  opc_complaintid_guid: string | null;
  opc_contact_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_issue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_allegationtypeid: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
  opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  opc_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_issue_RelatedMany {
  opc_allegations_issues_relatedissues: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_issue_accessrequestdocuments_issue: WebMappingRetrieve<opc_accessrequestdocument_Select,opc_accessrequestdocument_Expand,opc_accessrequestdocument_Filter,opc_accessrequestdocument_Fixed,opc_accessrequestdocument_Result,opc_accessrequestdocument_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_issues: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_issues: WebMappingRelated<opc_issue_RelatedOne,opc_issue_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_issues: WebMappingCUDA<opc_issue_Create,opc_issue_Update,opc_issue_Select>;
}
