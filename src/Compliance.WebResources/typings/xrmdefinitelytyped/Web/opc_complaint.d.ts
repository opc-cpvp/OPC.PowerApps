interface opc_complaint_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_acceptancedate?: Date | null;
  opc_actualriskappetitevalue?: number | null;
  opc_actualriskappetitevalue_date?: Date | null;
  opc_actualriskappetitevalue_state?: number | null;
  opc_closeddate?: Date | null;
  opc_closereason?: opc_closereason | null;
  opc_complainantperceivedpriorities?: opc_perceivedpriorities | null;
  opc_complainantreportdrafted?: boolean | null;
  opc_complaintdisposition?: opc_complaintdisposition | null;
  opc_complaintid?: string | null;
  opc_complaintreceiveddate?: Date | null;
  opc_erapproval?: opc_erapproval | null;
  opc_erdisposition?: opc_erdisposition | null;
  opc_escalationapproved?: boolean | null;
  opc_hasaccessallegation?: boolean | null;
  opc_hastlallegation?: boolean | null;
  opc_intakedisposition?: opc_intakedisposition | null;
  opc_lastmilestone?: opc_complaintmilestone | null;
  opc_memberofparliamentinvolved?: boolean | null;
  opc_multiplecomplaintstrategy?: opc_multiplecomplaintstrategy | null;
  opc_nextstep?: opc_nextstep | null;
  opc_number?: string | null;
  opc_reasontorequirefurtherinvestigation?: opc_reasontorequirefurtherinvestigation | null;
  opc_recommendtoregistrar?: opc_yesorno | null;
  opc_reportrequested?: boolean | null;
  opc_representativeauthorizationprovided?: boolean | null;
  opc_requiresfurtherinvestigation?: boolean | null;
  opc_requiresreport?: boolean | null;
  opc_resolution?: opc_complaintresolution | null;
  opc_respondentandcomplainantrelationship?: opc_respondentandcomplainantrelationship | null;
  opc_respondentreportdrafted?: boolean | null;
  opc_sendcloseletter?: boolean | null;
  opc_sladate?: Date | null;
  opc_source?: opc_complaintsource | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: opc_complaint_statecode | null;
  statuscode?: opc_complaint_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_complaint_Relationships {
  bpf_opc_complaint_opc_individualcomplaint_bp?: opc_individualcomplaint_bp_Result[] | null;
  opc_RiskAssessment_Complaint_opc_complain?: opc_RiskAssessment_Result[] | null;
  opc_complaint_QueueItems?: QueueItem_Result[] | null;
  opc_complaint_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  opc_complaint_SharePointDocuments?: SharePointDocument_Result[] | null;
  opc_complaint_allegations_complaint?: opc_allegation_Result[] | null;
  opc_complaint_issues_complaint?: opc_issue_Result[] | null;
  opc_complaint_notifications_complaint?: opc_notification_Result[] | null;
  opc_complaint_opc_events?: opc_event_Result[] | null;
  opc_complaint_recommendations_complaint?: opc_recommendation_Result[] | null;
  opc_complaint_reminders_complaint?: opc_reminder_Result[] | null;
  opc_complaints_industries_relatedindustries?: opc_industry_Result[] | null;
  opc_complaints_topics_relatedtopics?: opc_topic_Result[] | null;
}
interface opc_complaint extends opc_complaint_Base, opc_complaint_Relationships {
  opc_accountid_bind$accounts?: string | null;
  opc_complainant_bind$contacts?: string | null;
  opc_complainantlegalrepresentative_bind$contacts?: string | null;
  opc_complainantlegalrepresentativefirm_bind$accounts?: string | null;
  opc_complainantrep_bind$contacts?: string | null;
  opc_erofficer_bind$systemusers?: string | null;
  opc_intakeofficer_bind$systemusers?: string | null;
  opc_legislation_bind$opc_legislations?: string | null;
  opc_opcpriorityid_bind$opc_opcpriorities?: string | null;
  opc_reportredactor_bind$systemusers?: string | null;
  opc_respondentlegalrepresentative_bind$contacts?: string | null;
  opc_respondentlegalrepresentativefirm_bind$accounts?: string | null;
  opc_respondentrepresentative_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface opc_complaint_Create extends opc_complaint {
}
interface opc_complaint_Update extends opc_complaint {
}
interface opc_complaint_Select {
  createdby_guid: WebAttribute<opc_complaint_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_complaint_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_complaint_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_complaint_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_complaint_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_complaint_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_complaint_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_acceptancedate: WebAttribute<opc_complaint_Select, { opc_acceptancedate: Date | null }, { opc_acceptancedate_formatted?: string }>;
  opc_accountid_guid: WebAttribute<opc_complaint_Select, { opc_accountid_guid: string | null }, { opc_accountid_formatted?: string }>;
  opc_actualriskappetitevalue: WebAttribute<opc_complaint_Select, { opc_actualriskappetitevalue: number | null }, {  }>;
  opc_actualriskappetitevalue_date: WebAttribute<opc_complaint_Select, { opc_actualriskappetitevalue_date: Date | null }, { opc_actualriskappetitevalue_date_formatted?: string }>;
  opc_actualriskappetitevalue_state: WebAttribute<opc_complaint_Select, { opc_actualriskappetitevalue_state: number | null }, {  }>;
  opc_closeddate: WebAttribute<opc_complaint_Select, { opc_closeddate: Date | null }, { opc_closeddate_formatted?: string }>;
  opc_closereason: WebAttribute<opc_complaint_Select, { opc_closereason: opc_closereason | null }, { opc_closereason_formatted?: string }>;
  opc_complainant_guid: WebAttribute<opc_complaint_Select, { opc_complainant_guid: string | null }, { opc_complainant_formatted?: string }>;
  opc_complainantlegalrepresentative_guid: WebAttribute<opc_complaint_Select, { opc_complainantlegalrepresentative_guid: string | null }, { opc_complainantlegalrepresentative_formatted?: string }>;
  opc_complainantlegalrepresentativefirm_guid: WebAttribute<opc_complaint_Select, { opc_complainantlegalrepresentativefirm_guid: string | null }, { opc_complainantlegalrepresentativefirm_formatted?: string }>;
  opc_complainantperceivedpriorities: WebAttribute<opc_complaint_Select, { opc_complainantperceivedpriorities: opc_perceivedpriorities | null }, { opc_complainantperceivedpriorities_formatted?: string }>;
  opc_complainantrep_guid: WebAttribute<opc_complaint_Select, { opc_complainantrep_guid: string | null }, { opc_complainantrep_formatted?: string }>;
  opc_complainantreportdrafted: WebAttribute<opc_complaint_Select, { opc_complainantreportdrafted: boolean | null }, {  }>;
  opc_complaintdisposition: WebAttribute<opc_complaint_Select, { opc_complaintdisposition: opc_complaintdisposition | null }, { opc_complaintdisposition_formatted?: string }>;
  opc_complaintid: WebAttribute<opc_complaint_Select, { opc_complaintid: string | null }, {  }>;
  opc_complaintreceiveddate: WebAttribute<opc_complaint_Select, { opc_complaintreceiveddate: Date | null }, { opc_complaintreceiveddate_formatted?: string }>;
  opc_erapproval: WebAttribute<opc_complaint_Select, { opc_erapproval: opc_erapproval | null }, { opc_erapproval_formatted?: string }>;
  opc_erdisposition: WebAttribute<opc_complaint_Select, { opc_erdisposition: opc_erdisposition | null }, { opc_erdisposition_formatted?: string }>;
  opc_erofficer_guid: WebAttribute<opc_complaint_Select, { opc_erofficer_guid: string | null }, { opc_erofficer_formatted?: string }>;
  opc_escalationapproved: WebAttribute<opc_complaint_Select, { opc_escalationapproved: boolean | null }, {  }>;
  opc_hasaccessallegation: WebAttribute<opc_complaint_Select, { opc_hasaccessallegation: boolean | null }, {  }>;
  opc_hastlallegation: WebAttribute<opc_complaint_Select, { opc_hastlallegation: boolean | null }, {  }>;
  opc_intakedisposition: WebAttribute<opc_complaint_Select, { opc_intakedisposition: opc_intakedisposition | null }, { opc_intakedisposition_formatted?: string }>;
  opc_intakeofficer_guid: WebAttribute<opc_complaint_Select, { opc_intakeofficer_guid: string | null }, { opc_intakeofficer_formatted?: string }>;
  opc_lastmilestone: WebAttribute<opc_complaint_Select, { opc_lastmilestone: opc_complaintmilestone | null }, { opc_lastmilestone_formatted?: string }>;
  opc_legislation_guid: WebAttribute<opc_complaint_Select, { opc_legislation_guid: string | null }, { opc_legislation_formatted?: string }>;
  opc_memberofparliamentinvolved: WebAttribute<opc_complaint_Select, { opc_memberofparliamentinvolved: boolean | null }, {  }>;
  opc_multiplecomplaintstrategy: WebAttribute<opc_complaint_Select, { opc_multiplecomplaintstrategy: opc_multiplecomplaintstrategy | null }, { opc_multiplecomplaintstrategy_formatted?: string }>;
  opc_nextstep: WebAttribute<opc_complaint_Select, { opc_nextstep: opc_nextstep | null }, { opc_nextstep_formatted?: string }>;
  opc_number: WebAttribute<opc_complaint_Select, { opc_number: string | null }, {  }>;
  opc_opcpriorityid_guid: WebAttribute<opc_complaint_Select, { opc_opcpriorityid_guid: string | null }, { opc_opcpriorityid_formatted?: string }>;
  opc_reasontorequirefurtherinvestigation: WebAttribute<opc_complaint_Select, { opc_reasontorequirefurtherinvestigation: opc_reasontorequirefurtherinvestigation | null }, { opc_reasontorequirefurtherinvestigation_formatted?: string }>;
  opc_recommendtoregistrar: WebAttribute<opc_complaint_Select, { opc_recommendtoregistrar: opc_yesorno | null }, { opc_recommendtoregistrar_formatted?: string }>;
  opc_reportredactor_guid: WebAttribute<opc_complaint_Select, { opc_reportredactor_guid: string | null }, { opc_reportredactor_formatted?: string }>;
  opc_reportrequested: WebAttribute<opc_complaint_Select, { opc_reportrequested: boolean | null }, {  }>;
  opc_representativeauthorizationprovided: WebAttribute<opc_complaint_Select, { opc_representativeauthorizationprovided: boolean | null }, {  }>;
  opc_requiresfurtherinvestigation: WebAttribute<opc_complaint_Select, { opc_requiresfurtherinvestigation: boolean | null }, {  }>;
  opc_requiresreport: WebAttribute<opc_complaint_Select, { opc_requiresreport: boolean | null }, {  }>;
  opc_resolution: WebAttribute<opc_complaint_Select, { opc_resolution: opc_complaintresolution | null }, { opc_resolution_formatted?: string }>;
  opc_respondentandcomplainantrelationship: WebAttribute<opc_complaint_Select, { opc_respondentandcomplainantrelationship: opc_respondentandcomplainantrelationship | null }, { opc_respondentandcomplainantrelationship_formatted?: string }>;
  opc_respondentlegalrepresentative_guid: WebAttribute<opc_complaint_Select, { opc_respondentlegalrepresentative_guid: string | null }, { opc_respondentlegalrepresentative_formatted?: string }>;
  opc_respondentlegalrepresentativefirm_guid: WebAttribute<opc_complaint_Select, { opc_respondentlegalrepresentativefirm_guid: string | null }, { opc_respondentlegalrepresentativefirm_formatted?: string }>;
  opc_respondentreportdrafted: WebAttribute<opc_complaint_Select, { opc_respondentreportdrafted: boolean | null }, {  }>;
  opc_respondentrepresentative_guid: WebAttribute<opc_complaint_Select, { opc_respondentrepresentative_guid: string | null }, { opc_respondentrepresentative_formatted?: string }>;
  opc_sendcloseletter: WebAttribute<opc_complaint_Select, { opc_sendcloseletter: boolean | null }, {  }>;
  opc_sladate: WebAttribute<opc_complaint_Select, { opc_sladate: Date | null }, { opc_sladate_formatted?: string }>;
  opc_source: WebAttribute<opc_complaint_Select, { opc_source: opc_complaintsource | null }, { opc_source_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_complaint_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_complaint_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_complaint_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_complaint_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_complaint_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<opc_complaint_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<opc_complaint_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<opc_complaint_Select, { statecode: opc_complaint_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_complaint_Select, { statuscode: opc_complaint_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_complaint_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<opc_complaint_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_complaint_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_complaint_Select, { versionnumber: number | null }, {  }>;
}
interface opc_complaint_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_acceptancedate: Date;
  opc_accountid_guid: XQW.Guid;
  opc_actualriskappetitevalue: number;
  opc_actualriskappetitevalue_date: Date;
  opc_actualriskappetitevalue_state: number;
  opc_closeddate: Date;
  opc_closereason: opc_closereason;
  opc_complainant_guid: XQW.Guid;
  opc_complainantlegalrepresentative_guid: XQW.Guid;
  opc_complainantlegalrepresentativefirm_guid: XQW.Guid;
  opc_complainantperceivedpriorities: opc_perceivedpriorities;
  opc_complainantrep_guid: XQW.Guid;
  opc_complainantreportdrafted: boolean;
  opc_complaintdisposition: opc_complaintdisposition;
  opc_complaintid: XQW.Guid;
  opc_complaintreceiveddate: Date;
  opc_erapproval: opc_erapproval;
  opc_erdisposition: opc_erdisposition;
  opc_erofficer_guid: XQW.Guid;
  opc_escalationapproved: boolean;
  opc_hasaccessallegation: boolean;
  opc_hastlallegation: boolean;
  opc_intakedisposition: opc_intakedisposition;
  opc_intakeofficer_guid: XQW.Guid;
  opc_lastmilestone: opc_complaintmilestone;
  opc_legislation_guid: XQW.Guid;
  opc_memberofparliamentinvolved: boolean;
  opc_multiplecomplaintstrategy: opc_multiplecomplaintstrategy;
  opc_nextstep: opc_nextstep;
  opc_number: string;
  opc_opcpriorityid_guid: XQW.Guid;
  opc_reasontorequirefurtherinvestigation: opc_reasontorequirefurtherinvestigation;
  opc_recommendtoregistrar: opc_yesorno;
  opc_reportredactor_guid: XQW.Guid;
  opc_reportrequested: boolean;
  opc_representativeauthorizationprovided: boolean;
  opc_requiresfurtherinvestigation: boolean;
  opc_requiresreport: boolean;
  opc_resolution: opc_complaintresolution;
  opc_respondentandcomplainantrelationship: opc_respondentandcomplainantrelationship;
  opc_respondentlegalrepresentative_guid: XQW.Guid;
  opc_respondentlegalrepresentativefirm_guid: XQW.Guid;
  opc_respondentreportdrafted: boolean;
  opc_respondentrepresentative_guid: XQW.Guid;
  opc_sendcloseletter: boolean;
  opc_sladate: Date;
  opc_source: opc_complaintsource;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: opc_complaint_statecode;
  statuscode: opc_complaint_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_complaint_Expand {
  bpf_opc_complaint_opc_individualcomplaint_bp: WebExpand<opc_complaint_Expand, opc_individualcomplaint_bp_Select, opc_individualcomplaint_bp_Filter, { bpf_opc_complaint_opc_individualcomplaint_bp: opc_individualcomplaint_bp_Result[] }>;
  createdby: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_RiskAssessment_Complaint_opc_complain: WebExpand<opc_complaint_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { opc_RiskAssessment_Complaint_opc_complain: opc_RiskAssessment_Result[] }>;
  opc_accountid: WebExpand<opc_complaint_Expand, Account_Select, Account_Filter, { opc_accountid: Account_Result }>;
  opc_complainant: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_complainant: Contact_Result }>;
  opc_complainantlegalrepresentative: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_complainantlegalrepresentative: Contact_Result }>;
  opc_complainantlegalrepresentativefirm: WebExpand<opc_complaint_Expand, Account_Select, Account_Filter, { opc_complainantlegalrepresentativefirm: Account_Result }>;
  opc_complainantrep: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_complainantrep: Contact_Result }>;
  opc_complaint_QueueItems: WebExpand<opc_complaint_Expand, QueueItem_Select, QueueItem_Filter, { opc_complaint_QueueItems: QueueItem_Result[] }>;
  opc_complaint_SharePointDocumentLocations: WebExpand<opc_complaint_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { opc_complaint_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  opc_complaint_SharePointDocuments: WebExpand<opc_complaint_Expand, SharePointDocument_Select, SharePointDocument_Filter, { opc_complaint_SharePointDocuments: SharePointDocument_Result[] }>;
  opc_complaint_allegations_complaint: WebExpand<opc_complaint_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_complaint_allegations_complaint: opc_allegation_Result[] }>;
  opc_complaint_issues_complaint: WebExpand<opc_complaint_Expand, opc_issue_Select, opc_issue_Filter, { opc_complaint_issues_complaint: opc_issue_Result[] }>;
  opc_complaint_notifications_complaint: WebExpand<opc_complaint_Expand, opc_notification_Select, opc_notification_Filter, { opc_complaint_notifications_complaint: opc_notification_Result[] }>;
  opc_complaint_opc_events: WebExpand<opc_complaint_Expand, opc_event_Select, opc_event_Filter, { opc_complaint_opc_events: opc_event_Result[] }>;
  opc_complaint_recommendations_complaint: WebExpand<opc_complaint_Expand, opc_recommendation_Select, opc_recommendation_Filter, { opc_complaint_recommendations_complaint: opc_recommendation_Result[] }>;
  opc_complaint_reminders_complaint: WebExpand<opc_complaint_Expand, opc_reminder_Select, opc_reminder_Filter, { opc_complaint_reminders_complaint: opc_reminder_Result[] }>;
  opc_complaints_industries_relatedindustries: WebExpand<opc_complaint_Expand, opc_industry_Select, opc_industry_Filter, { opc_complaints_industries_relatedindustries: opc_industry_Result[] }>;
  opc_complaints_topics_relatedtopics: WebExpand<opc_complaint_Expand, opc_topic_Select, opc_topic_Filter, { opc_complaints_topics_relatedtopics: opc_topic_Result[] }>;
  opc_erofficer: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { opc_erofficer: SystemUser_Result }>;
  opc_intakeofficer: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { opc_intakeofficer: SystemUser_Result }>;
  opc_legislation: WebExpand<opc_complaint_Expand, opc_legislation_Select, opc_legislation_Filter, { opc_legislation: opc_legislation_Result }>;
  opc_opcpriorityid: WebExpand<opc_complaint_Expand, opc_opcpriority_Select, opc_opcpriority_Filter, { opc_opcpriorityid: opc_opcpriority_Result }>;
  opc_reportredactor: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { opc_reportredactor: SystemUser_Result }>;
  opc_respondentlegalrepresentative: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_respondentlegalrepresentative: Contact_Result }>;
  opc_respondentlegalrepresentativefirm: WebExpand<opc_complaint_Expand, Account_Select, Account_Filter, { opc_respondentlegalrepresentativefirm: Account_Result }>;
  opc_respondentrepresentative: WebExpand<opc_complaint_Expand, Contact_Select, Contact_Filter, { opc_respondentrepresentative: Contact_Result }>;
  ownerid: WebExpand<opc_complaint_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_complaint_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_complaint_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_complaint_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_acceptancedate_formatted?: string;
  opc_accountid_formatted?: string;
  opc_actualriskappetitevalue_date_formatted?: string;
  opc_closeddate_formatted?: string;
  opc_closereason_formatted?: string;
  opc_complainant_formatted?: string;
  opc_complainantlegalrepresentative_formatted?: string;
  opc_complainantlegalrepresentativefirm_formatted?: string;
  opc_complainantperceivedpriorities_formatted?: string;
  opc_complainantrep_formatted?: string;
  opc_complaintdisposition_formatted?: string;
  opc_complaintreceiveddate_formatted?: string;
  opc_erapproval_formatted?: string;
  opc_erdisposition_formatted?: string;
  opc_erofficer_formatted?: string;
  opc_intakedisposition_formatted?: string;
  opc_intakeofficer_formatted?: string;
  opc_lastmilestone_formatted?: string;
  opc_legislation_formatted?: string;
  opc_multiplecomplaintstrategy_formatted?: string;
  opc_nextstep_formatted?: string;
  opc_opcpriorityid_formatted?: string;
  opc_reasontorequirefurtherinvestigation_formatted?: string;
  opc_recommendtoregistrar_formatted?: string;
  opc_reportredactor_formatted?: string;
  opc_resolution_formatted?: string;
  opc_respondentandcomplainantrelationship_formatted?: string;
  opc_respondentlegalrepresentative_formatted?: string;
  opc_respondentlegalrepresentativefirm_formatted?: string;
  opc_respondentrepresentative_formatted?: string;
  opc_sladate_formatted?: string;
  opc_source_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_complaint_Result extends opc_complaint_Base, opc_complaint_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_accountid_guid: string | null;
  opc_complainant_guid: string | null;
  opc_complainantlegalrepresentative_guid: string | null;
  opc_complainantlegalrepresentativefirm_guid: string | null;
  opc_complainantrep_guid: string | null;
  opc_erofficer_guid: string | null;
  opc_intakeofficer_guid: string | null;
  opc_legislation_guid: string | null;
  opc_opcpriorityid_guid: string | null;
  opc_reportredactor_guid: string | null;
  opc_respondentlegalrepresentative_guid: string | null;
  opc_respondentlegalrepresentativefirm_guid: string | null;
  opc_respondentrepresentative_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_complaint_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_accountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  opc_complainant: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_complainantlegalrepresentative: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_complainantlegalrepresentativefirm: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  opc_complainantrep: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_erofficer: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_intakeofficer: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_legislation: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
  opc_opcpriorityid: WebMappingRetrieve<opc_opcpriority_Select,opc_opcpriority_Expand,opc_opcpriority_Filter,opc_opcpriority_Fixed,opc_opcpriority_Result,opc_opcpriority_FormattedResult>;
  opc_reportredactor: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_respondentlegalrepresentative: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  opc_respondentlegalrepresentativefirm: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  opc_respondentrepresentative: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_complaint_RelatedMany {
  bpf_opc_complaint_opc_individualcomplaint_bp: WebMappingRetrieve<opc_individualcomplaint_bp_Select,opc_individualcomplaint_bp_Expand,opc_individualcomplaint_bp_Filter,opc_individualcomplaint_bp_Fixed,opc_individualcomplaint_bp_Result,opc_individualcomplaint_bp_FormattedResult>;
  opc_RiskAssessment_Complaint_opc_complain: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  opc_complaint_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  opc_complaint_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  opc_complaint_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  opc_complaint_allegations_complaint: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  opc_complaint_issues_complaint: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
  opc_complaint_notifications_complaint: WebMappingRetrieve<opc_notification_Select,opc_notification_Expand,opc_notification_Filter,opc_notification_Fixed,opc_notification_Result,opc_notification_FormattedResult>;
  opc_complaint_opc_events: WebMappingRetrieve<opc_event_Select,opc_event_Expand,opc_event_Filter,opc_event_Fixed,opc_event_Result,opc_event_FormattedResult>;
  opc_complaint_recommendations_complaint: WebMappingRetrieve<opc_recommendation_Select,opc_recommendation_Expand,opc_recommendation_Filter,opc_recommendation_Fixed,opc_recommendation_Result,opc_recommendation_FormattedResult>;
  opc_complaint_reminders_complaint: WebMappingRetrieve<opc_reminder_Select,opc_reminder_Expand,opc_reminder_Filter,opc_reminder_Fixed,opc_reminder_Result,opc_reminder_FormattedResult>;
  opc_complaints_industries_relatedindustries: WebMappingRetrieve<opc_industry_Select,opc_industry_Expand,opc_industry_Filter,opc_industry_Fixed,opc_industry_Result,opc_industry_FormattedResult>;
  opc_complaints_topics_relatedtopics: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_complaints: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_complaints: WebMappingRelated<opc_complaint_RelatedOne,opc_complaint_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_complaints: WebMappingCUDA<opc_complaint_Create,opc_complaint_Update,opc_complaint_Select>;
}