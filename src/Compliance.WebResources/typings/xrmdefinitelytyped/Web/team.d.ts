interface Team_Base extends WebEntity {
  azureactivedirectoryobjectid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  emailaddress?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  isdefault?: boolean | null;
  membershiptype?: team_membershiptype | null;
  modifiedon?: Date | null;
  name?: string | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  systemmanaged?: boolean | null;
  teamid?: string | null;
  teamtype?: team_type | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface Team_Relationships {
  opc_event_team_owningteam?: opc_event_Result[] | null;
  opc_queues_teams_membership?: Queue_Result[] | null;
  team_DuplicateRules?: DuplicateRule_Result[] | null;
  team_accounts?: Account_Result[] | null;
  team_connections1?: Connection_Result[] | null;
  team_connections2?: Connection_Result[] | null;
  team_contacts?: Contact_Result[] | null;
  team_environmentvariabledefinition?: EnvironmentVariableDefinition_Result[] | null;
  team_environmentvariablevalue?: EnvironmentVariableValue_Result[] | null;
  team_opc_accessrequestdocument?: opc_accessrequestdocument_Result[] | null;
  team_opc_allegation?: opc_allegation_Result[] | null;
  team_opc_allegationtype?: opc_allegationtype_Result[] | null;
  team_opc_checklistresponse?: opc_ChecklistResponse_Result[] | null;
  team_opc_checklisttype?: opc_ChecklistType_Result[] | null;
  team_opc_complaint?: opc_complaint_Result[] | null;
  team_opc_dispositionaction?: opc_dispositionaction_Result[] | null;
  team_opc_dispositionreason?: opc_dispositionreason_Result[] | null;
  team_opc_industry?: opc_industry_Result[] | null;
  team_opc_issue?: opc_issue_Result[] | null;
  team_opc_legislation?: opc_legislation_Result[] | null;
  team_opc_notification?: opc_notification_Result[] | null;
  team_opc_opcpriority?: opc_opcpriority_Result[] | null;
  team_opc_questiontemplate?: opc_QuestionTemplate_Result[] | null;
  team_opc_recommendation?: opc_recommendation_Result[] | null;
  team_opc_reminder?: opc_reminder_Result[] | null;
  team_opc_riskappetite?: opc_RiskAppetite_Result[] | null;
  team_opc_riskassessment?: opc_RiskAssessment_Result[] | null;
  team_opc_riskassessmentcategory?: opc_RiskAssessmentCategory_Result[] | null;
  team_opc_riskassessmentcategorytemplate?: opc_RiskAssessmentCategoryTemplate_Result[] | null;
  team_opc_riskassessmentdefinition?: opc_RiskAssessmentDefinition_Result[] | null;
  team_opc_riskassessmentdefinitiontemplate?: opc_RiskAssessmentDefinitionTemplate_Result[] | null;
  team_opc_riskassessmentfactortemplate?: opc_RiskAssessmentFactorTemplate_Result[] | null;
  team_opc_riskassessmenttype?: opc_RiskAssessmentType_Result[] | null;
  team_opc_theme?: opc_theme_Result[] | null;
  team_opc_topic?: opc_topic_Result[] | null;
  team_queueitembase_workerid?: QueueItem_Result[] | null;
  team_sharepointdocumentlocation?: SharePointDocumentLocation_Result[] | null;
  team_sharepointsite?: SharePointSite_Result[] | null;
  teammembership_association?: SystemUser_Result[] | null;
}
interface Team extends Team_Base, Team_Relationships {
  administratorid_bind$systemusers?: string | null;
  businessunitid_bind$businessunits?: string | null;
  queueid_bind$queues?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Team_Create extends Team {
  associatedteamtemplateid_bind$teamtemplates?: string | null;
  regardingobjectid_knowledgearticle_bind$knowledgearticles?: string | null;
}
interface Team_Update extends Team {
}
interface Team_Select {
  administratorid_guid: WebAttribute<Team_Select, { administratorid_guid: string | null }, { administratorid_formatted?: string }>;
  azureactivedirectoryobjectid: WebAttribute<Team_Select, { azureactivedirectoryobjectid: string | null }, {  }>;
  businessunitid_guid: WebAttribute<Team_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<Team_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Team_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Team_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Team_Select, { description: string | null }, {  }>;
  emailaddress: WebAttribute<Team_Select, { emailaddress: string | null }, {  }>;
  exchangerate: WebAttribute<Team_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Team_Select, { importsequencenumber: number | null }, {  }>;
  isdefault: WebAttribute<Team_Select, { isdefault: boolean | null }, {  }>;
  membershiptype: WebAttribute<Team_Select, { membershiptype: team_membershiptype | null }, { membershiptype_formatted?: string }>;
  modifiedby_guid: WebAttribute<Team_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Team_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Team_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Team_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<Team_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Team_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid: WebAttribute<Team_Select, { processid: string | null }, {  }>;
  queueid_guid: WebAttribute<Team_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<Team_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  stageid: WebAttribute<Team_Select, { stageid: string | null }, {  }>;
  systemmanaged: WebAttribute<Team_Select, { systemmanaged: boolean | null }, {  }>;
  teamid: WebAttribute<Team_Select, { teamid: string | null }, {  }>;
  teamtemplateid_guid: WebAttribute<Team_Select, { teamtemplateid_guid: string | null }, { teamtemplateid_formatted?: string }>;
  teamtype: WebAttribute<Team_Select, { teamtype: team_type | null }, { teamtype_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Team_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Team_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<Team_Select, { versionnumber: number | null }, {  }>;
}
interface Team_Filter {
  administratorid_guid: XQW.Guid;
  azureactivedirectoryobjectid: XQW.Guid;
  businessunitid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  emailaddress: string;
  exchangerate: any;
  importsequencenumber: number;
  isdefault: boolean;
  membershiptype: team_membershiptype;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  processid: XQW.Guid;
  queueid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  stageid: XQW.Guid;
  systemmanaged: boolean;
  teamid: XQW.Guid;
  teamtemplateid_guid: XQW.Guid;
  teamtype: team_type;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface Team_Expand {
  administratorid: WebExpand<Team_Expand, SystemUser_Select, SystemUser_Filter, { administratorid: SystemUser_Result }>;
  createdby: WebExpand<Team_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Team_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Team_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Team_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_event_team_owningteam: WebExpand<Team_Expand, opc_event_Select, opc_event_Filter, { opc_event_team_owningteam: opc_event_Result[] }>;
  opc_queues_teams_membership: WebExpand<Team_Expand, Queue_Select, Queue_Filter, { opc_queues_teams_membership: Queue_Result[] }>;
  queueid: WebExpand<Team_Expand, Queue_Select, Queue_Filter, { queueid: Queue_Result }>;
  team_DuplicateRules: WebExpand<Team_Expand, DuplicateRule_Select, DuplicateRule_Filter, { team_DuplicateRules: DuplicateRule_Result[] }>;
  team_accounts: WebExpand<Team_Expand, Account_Select, Account_Filter, { team_accounts: Account_Result[] }>;
  team_connections1: WebExpand<Team_Expand, Connection_Select, Connection_Filter, { team_connections1: Connection_Result[] }>;
  team_connections2: WebExpand<Team_Expand, Connection_Select, Connection_Filter, { team_connections2: Connection_Result[] }>;
  team_contacts: WebExpand<Team_Expand, Contact_Select, Contact_Filter, { team_contacts: Contact_Result[] }>;
  team_environmentvariabledefinition: WebExpand<Team_Expand, EnvironmentVariableDefinition_Select, EnvironmentVariableDefinition_Filter, { team_environmentvariabledefinition: EnvironmentVariableDefinition_Result[] }>;
  team_environmentvariablevalue: WebExpand<Team_Expand, EnvironmentVariableValue_Select, EnvironmentVariableValue_Filter, { team_environmentvariablevalue: EnvironmentVariableValue_Result[] }>;
  team_opc_accessrequestdocument: WebExpand<Team_Expand, opc_accessrequestdocument_Select, opc_accessrequestdocument_Filter, { team_opc_accessrequestdocument: opc_accessrequestdocument_Result[] }>;
  team_opc_allegation: WebExpand<Team_Expand, opc_allegation_Select, opc_allegation_Filter, { team_opc_allegation: opc_allegation_Result[] }>;
  team_opc_allegationtype: WebExpand<Team_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { team_opc_allegationtype: opc_allegationtype_Result[] }>;
  team_opc_checklistresponse: WebExpand<Team_Expand, opc_ChecklistResponse_Select, opc_ChecklistResponse_Filter, { team_opc_checklistresponse: opc_ChecklistResponse_Result[] }>;
  team_opc_checklisttype: WebExpand<Team_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { team_opc_checklisttype: opc_ChecklistType_Result[] }>;
  team_opc_complaint: WebExpand<Team_Expand, opc_complaint_Select, opc_complaint_Filter, { team_opc_complaint: opc_complaint_Result[] }>;
  team_opc_dispositionaction: WebExpand<Team_Expand, opc_dispositionaction_Select, opc_dispositionaction_Filter, { team_opc_dispositionaction: opc_dispositionaction_Result[] }>;
  team_opc_dispositionreason: WebExpand<Team_Expand, opc_dispositionreason_Select, opc_dispositionreason_Filter, { team_opc_dispositionreason: opc_dispositionreason_Result[] }>;
  team_opc_industry: WebExpand<Team_Expand, opc_industry_Select, opc_industry_Filter, { team_opc_industry: opc_industry_Result[] }>;
  team_opc_issue: WebExpand<Team_Expand, opc_issue_Select, opc_issue_Filter, { team_opc_issue: opc_issue_Result[] }>;
  team_opc_legislation: WebExpand<Team_Expand, opc_legislation_Select, opc_legislation_Filter, { team_opc_legislation: opc_legislation_Result[] }>;
  team_opc_notification: WebExpand<Team_Expand, opc_notification_Select, opc_notification_Filter, { team_opc_notification: opc_notification_Result[] }>;
  team_opc_opcpriority: WebExpand<Team_Expand, opc_opcpriority_Select, opc_opcpriority_Filter, { team_opc_opcpriority: opc_opcpriority_Result[] }>;
  team_opc_questiontemplate: WebExpand<Team_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { team_opc_questiontemplate: opc_QuestionTemplate_Result[] }>;
  team_opc_recommendation: WebExpand<Team_Expand, opc_recommendation_Select, opc_recommendation_Filter, { team_opc_recommendation: opc_recommendation_Result[] }>;
  team_opc_reminder: WebExpand<Team_Expand, opc_reminder_Select, opc_reminder_Filter, { team_opc_reminder: opc_reminder_Result[] }>;
  team_opc_riskappetite: WebExpand<Team_Expand, opc_RiskAppetite_Select, opc_RiskAppetite_Filter, { team_opc_riskappetite: opc_RiskAppetite_Result[] }>;
  team_opc_riskassessment: WebExpand<Team_Expand, opc_RiskAssessment_Select, opc_RiskAssessment_Filter, { team_opc_riskassessment: opc_RiskAssessment_Result[] }>;
  team_opc_riskassessmentcategory: WebExpand<Team_Expand, opc_RiskAssessmentCategory_Select, opc_RiskAssessmentCategory_Filter, { team_opc_riskassessmentcategory: opc_RiskAssessmentCategory_Result[] }>;
  team_opc_riskassessmentcategorytemplate: WebExpand<Team_Expand, opc_RiskAssessmentCategoryTemplate_Select, opc_RiskAssessmentCategoryTemplate_Filter, { team_opc_riskassessmentcategorytemplate: opc_RiskAssessmentCategoryTemplate_Result[] }>;
  team_opc_riskassessmentdefinition: WebExpand<Team_Expand, opc_RiskAssessmentDefinition_Select, opc_RiskAssessmentDefinition_Filter, { team_opc_riskassessmentdefinition: opc_RiskAssessmentDefinition_Result[] }>;
  team_opc_riskassessmentdefinitiontemplate: WebExpand<Team_Expand, opc_RiskAssessmentDefinitionTemplate_Select, opc_RiskAssessmentDefinitionTemplate_Filter, { team_opc_riskassessmentdefinitiontemplate: opc_RiskAssessmentDefinitionTemplate_Result[] }>;
  team_opc_riskassessmentfactortemplate: WebExpand<Team_Expand, opc_RiskAssessmentFactorTemplate_Select, opc_RiskAssessmentFactorTemplate_Filter, { team_opc_riskassessmentfactortemplate: opc_RiskAssessmentFactorTemplate_Result[] }>;
  team_opc_riskassessmenttype: WebExpand<Team_Expand, opc_RiskAssessmentType_Select, opc_RiskAssessmentType_Filter, { team_opc_riskassessmenttype: opc_RiskAssessmentType_Result[] }>;
  team_opc_theme: WebExpand<Team_Expand, opc_theme_Select, opc_theme_Filter, { team_opc_theme: opc_theme_Result[] }>;
  team_opc_topic: WebExpand<Team_Expand, opc_topic_Select, opc_topic_Filter, { team_opc_topic: opc_topic_Result[] }>;
  team_queueitembase_workerid: WebExpand<Team_Expand, QueueItem_Select, QueueItem_Filter, { team_queueitembase_workerid: QueueItem_Result[] }>;
  team_sharepointdocumentlocation: WebExpand<Team_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { team_sharepointdocumentlocation: SharePointDocumentLocation_Result[] }>;
  team_sharepointsite: WebExpand<Team_Expand, SharePointSite_Select, SharePointSite_Filter, { team_sharepointsite: SharePointSite_Result[] }>;
  teammembership_association: WebExpand<Team_Expand, SystemUser_Select, SystemUser_Filter, { teammembership_association: SystemUser_Result[] }>;
}
interface Team_FormattedResult {
  administratorid_formatted?: string;
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  membershiptype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  queueid_formatted?: string;
  regardingobjectid_formatted?: string;
  teamtemplateid_formatted?: string;
  teamtype_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Team_Result extends Team_Base, Team_Relationships {
  "@odata.etag": string;
  administratorid_guid: string | null;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  queueid_guid: string | null;
  regardingobjectid_guid: string | null;
  teamtemplateid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Team_RelatedOne {
  administratorid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
}
interface Team_RelatedMany {
  opc_event_team_owningteam: WebMappingRetrieve<opc_event_Select,opc_event_Expand,opc_event_Filter,opc_event_Fixed,opc_event_Result,opc_event_FormattedResult>;
  opc_queues_teams_membership: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  team_DuplicateRules: WebMappingRetrieve<DuplicateRule_Select,DuplicateRule_Expand,DuplicateRule_Filter,DuplicateRule_Fixed,DuplicateRule_Result,DuplicateRule_FormattedResult>;
  team_accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  team_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  team_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  team_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  team_environmentvariabledefinition: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
  team_environmentvariablevalue: WebMappingRetrieve<EnvironmentVariableValue_Select,EnvironmentVariableValue_Expand,EnvironmentVariableValue_Filter,EnvironmentVariableValue_Fixed,EnvironmentVariableValue_Result,EnvironmentVariableValue_FormattedResult>;
  team_opc_accessrequestdocument: WebMappingRetrieve<opc_accessrequestdocument_Select,opc_accessrequestdocument_Expand,opc_accessrequestdocument_Filter,opc_accessrequestdocument_Fixed,opc_accessrequestdocument_Result,opc_accessrequestdocument_FormattedResult>;
  team_opc_allegation: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
  team_opc_allegationtype: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
  team_opc_checklistresponse: WebMappingRetrieve<opc_ChecklistResponse_Select,opc_ChecklistResponse_Expand,opc_ChecklistResponse_Filter,opc_ChecklistResponse_Fixed,opc_ChecklistResponse_Result,opc_ChecklistResponse_FormattedResult>;
  team_opc_checklisttype: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
  team_opc_complaint: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  team_opc_dispositionaction: WebMappingRetrieve<opc_dispositionaction_Select,opc_dispositionaction_Expand,opc_dispositionaction_Filter,opc_dispositionaction_Fixed,opc_dispositionaction_Result,opc_dispositionaction_FormattedResult>;
  team_opc_dispositionreason: WebMappingRetrieve<opc_dispositionreason_Select,opc_dispositionreason_Expand,opc_dispositionreason_Filter,opc_dispositionreason_Fixed,opc_dispositionreason_Result,opc_dispositionreason_FormattedResult>;
  team_opc_industry: WebMappingRetrieve<opc_industry_Select,opc_industry_Expand,opc_industry_Filter,opc_industry_Fixed,opc_industry_Result,opc_industry_FormattedResult>;
  team_opc_issue: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
  team_opc_legislation: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
  team_opc_notification: WebMappingRetrieve<opc_notification_Select,opc_notification_Expand,opc_notification_Filter,opc_notification_Fixed,opc_notification_Result,opc_notification_FormattedResult>;
  team_opc_opcpriority: WebMappingRetrieve<opc_opcpriority_Select,opc_opcpriority_Expand,opc_opcpriority_Filter,opc_opcpriority_Fixed,opc_opcpriority_Result,opc_opcpriority_FormattedResult>;
  team_opc_questiontemplate: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
  team_opc_recommendation: WebMappingRetrieve<opc_recommendation_Select,opc_recommendation_Expand,opc_recommendation_Filter,opc_recommendation_Fixed,opc_recommendation_Result,opc_recommendation_FormattedResult>;
  team_opc_reminder: WebMappingRetrieve<opc_reminder_Select,opc_reminder_Expand,opc_reminder_Filter,opc_reminder_Fixed,opc_reminder_Result,opc_reminder_FormattedResult>;
  team_opc_riskappetite: WebMappingRetrieve<opc_RiskAppetite_Select,opc_RiskAppetite_Expand,opc_RiskAppetite_Filter,opc_RiskAppetite_Fixed,opc_RiskAppetite_Result,opc_RiskAppetite_FormattedResult>;
  team_opc_riskassessment: WebMappingRetrieve<opc_RiskAssessment_Select,opc_RiskAssessment_Expand,opc_RiskAssessment_Filter,opc_RiskAssessment_Fixed,opc_RiskAssessment_Result,opc_RiskAssessment_FormattedResult>;
  team_opc_riskassessmentcategory: WebMappingRetrieve<opc_RiskAssessmentCategory_Select,opc_RiskAssessmentCategory_Expand,opc_RiskAssessmentCategory_Filter,opc_RiskAssessmentCategory_Fixed,opc_RiskAssessmentCategory_Result,opc_RiskAssessmentCategory_FormattedResult>;
  team_opc_riskassessmentcategorytemplate: WebMappingRetrieve<opc_RiskAssessmentCategoryTemplate_Select,opc_RiskAssessmentCategoryTemplate_Expand,opc_RiskAssessmentCategoryTemplate_Filter,opc_RiskAssessmentCategoryTemplate_Fixed,opc_RiskAssessmentCategoryTemplate_Result,opc_RiskAssessmentCategoryTemplate_FormattedResult>;
  team_opc_riskassessmentdefinition: WebMappingRetrieve<opc_RiskAssessmentDefinition_Select,opc_RiskAssessmentDefinition_Expand,opc_RiskAssessmentDefinition_Filter,opc_RiskAssessmentDefinition_Fixed,opc_RiskAssessmentDefinition_Result,opc_RiskAssessmentDefinition_FormattedResult>;
  team_opc_riskassessmentdefinitiontemplate: WebMappingRetrieve<opc_RiskAssessmentDefinitionTemplate_Select,opc_RiskAssessmentDefinitionTemplate_Expand,opc_RiskAssessmentDefinitionTemplate_Filter,opc_RiskAssessmentDefinitionTemplate_Fixed,opc_RiskAssessmentDefinitionTemplate_Result,opc_RiskAssessmentDefinitionTemplate_FormattedResult>;
  team_opc_riskassessmentfactortemplate: WebMappingRetrieve<opc_RiskAssessmentFactorTemplate_Select,opc_RiskAssessmentFactorTemplate_Expand,opc_RiskAssessmentFactorTemplate_Filter,opc_RiskAssessmentFactorTemplate_Fixed,opc_RiskAssessmentFactorTemplate_Result,opc_RiskAssessmentFactorTemplate_FormattedResult>;
  team_opc_riskassessmenttype: WebMappingRetrieve<opc_RiskAssessmentType_Select,opc_RiskAssessmentType_Expand,opc_RiskAssessmentType_Filter,opc_RiskAssessmentType_Fixed,opc_RiskAssessmentType_Result,opc_RiskAssessmentType_FormattedResult>;
  team_opc_theme: WebMappingRetrieve<opc_theme_Select,opc_theme_Expand,opc_theme_Filter,opc_theme_Fixed,opc_theme_Result,opc_theme_FormattedResult>;
  team_opc_topic: WebMappingRetrieve<opc_topic_Select,opc_topic_Expand,opc_topic_Filter,opc_topic_Fixed,opc_topic_Result,opc_topic_FormattedResult>;
  team_queueitembase_workerid: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  team_sharepointdocumentlocation: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  team_sharepointsite: WebMappingRetrieve<SharePointSite_Select,SharePointSite_Expand,SharePointSite_Filter,SharePointSite_Fixed,SharePointSite_Result,SharePointSite_FormattedResult>;
  teammembership_association: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teams: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WebEntitiesRelated {
  teams: WebMappingRelated<Team_RelatedOne,Team_RelatedMany>;
}
interface WebEntitiesCUDA {
  teams: WebMappingCUDA<Team_Create,Team_Update,Team_Select>;
}
