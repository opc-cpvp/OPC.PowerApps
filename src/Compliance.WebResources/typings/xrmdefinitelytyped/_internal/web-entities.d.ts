interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface DuplicateRule_Base extends WebEntity {
}
interface DuplicateRule_Fixed extends WebEntity_Fixed {
  duplicateruleid: string;
}
interface DuplicateRule extends DuplicateRule_Base, DuplicateRule_Relationships {
}
interface DuplicateRule_Relationships {
}
interface DuplicateRule_Result extends DuplicateRule_Base, DuplicateRule_Relationships {
}
interface DuplicateRule_FormattedResult {
}
interface DuplicateRule_Select {
}
interface DuplicateRule_Expand {
}
interface DuplicateRule_Filter {
}
interface DuplicateRule_Create extends DuplicateRule {
}
interface DuplicateRule_Update extends DuplicateRule {
}
interface DuplicateRuleCondition_Base extends WebEntity {
}
interface DuplicateRuleCondition_Fixed extends WebEntity_Fixed {
  duplicateruleconditionid: string;
}
interface DuplicateRuleCondition extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Result extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_FormattedResult {
}
interface DuplicateRuleCondition_Select {
}
interface DuplicateRuleCondition_Expand {
}
interface DuplicateRuleCondition_Filter {
}
interface DuplicateRuleCondition_Create extends DuplicateRuleCondition {
}
interface DuplicateRuleCondition_Update extends DuplicateRuleCondition {
}
interface EnvironmentVariableDefinition_Base extends WebEntity {
}
interface EnvironmentVariableDefinition_Fixed extends WebEntity_Fixed {
  environmentvariabledefinitionid: string;
}
interface EnvironmentVariableDefinition extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_Result extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_FormattedResult {
}
interface EnvironmentVariableDefinition_Select {
}
interface EnvironmentVariableDefinition_Expand {
}
interface EnvironmentVariableDefinition_Filter {
}
interface EnvironmentVariableDefinition_Create extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableDefinition_Update extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableValue_Base extends WebEntity {
}
interface EnvironmentVariableValue_Fixed extends WebEntity_Fixed {
  environmentvariablevalueid: string;
}
interface EnvironmentVariableValue extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_Result extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_FormattedResult {
}
interface EnvironmentVariableValue_Select {
}
interface EnvironmentVariableValue_Expand {
}
interface EnvironmentVariableValue_Filter {
}
interface EnvironmentVariableValue_Create extends EnvironmentVariableValue {
}
interface EnvironmentVariableValue_Update extends EnvironmentVariableValue {
}
interface opc_accessrequestdocument_Base extends WebEntity {
}
interface opc_accessrequestdocument_Fixed extends WebEntity_Fixed {
  opc_accessrequestdocumentid: string;
}
interface opc_accessrequestdocument extends opc_accessrequestdocument_Base, opc_accessrequestdocument_Relationships {
}
interface opc_accessrequestdocument_Relationships {
}
interface opc_accessrequestdocument_Result extends opc_accessrequestdocument_Base, opc_accessrequestdocument_Relationships {
}
interface opc_accessrequestdocument_FormattedResult {
}
interface opc_accessrequestdocument_Select {
}
interface opc_accessrequestdocument_Expand {
}
interface opc_accessrequestdocument_Filter {
}
interface opc_accessrequestdocument_Create extends opc_accessrequestdocument {
}
interface opc_accessrequestdocument_Update extends opc_accessrequestdocument {
}
interface opc_accountsrelatedindustries_Base extends WebEntity {
}
interface opc_accountsrelatedindustries_Fixed extends WebEntity_Fixed {
  opc_accountsrelatedindustriesid: string;
}
interface opc_accountsrelatedindustries extends opc_accountsrelatedindustries_Base, opc_accountsrelatedindustries_Relationships {
}
interface opc_accountsrelatedindustries_Relationships {
}
interface opc_accountsrelatedindustries_Result extends opc_accountsrelatedindustries_Base, opc_accountsrelatedindustries_Relationships {
}
interface opc_accountsrelatedindustries_FormattedResult {
}
interface opc_accountsrelatedindustries_Select {
}
interface opc_accountsrelatedindustries_Expand {
}
interface opc_accountsrelatedindustries_Filter {
}
interface opc_accountsrelatedindustries_Create extends opc_accountsrelatedindustries {
}
interface opc_accountsrelatedindustries_Update extends opc_accountsrelatedindustries {
}
interface opc_allegation_Base extends WebEntity {
}
interface opc_allegation_Fixed extends WebEntity_Fixed {
  opc_allegationid: string;
}
interface opc_allegation extends opc_allegation_Base, opc_allegation_Relationships {
}
interface opc_allegation_Relationships {
}
interface opc_allegation_Result extends opc_allegation_Base, opc_allegation_Relationships {
}
interface opc_allegation_FormattedResult {
}
interface opc_allegation_Select {
}
interface opc_allegation_Expand {
}
interface opc_allegation_Filter {
}
interface opc_allegation_Create extends opc_allegation {
}
interface opc_allegation_Update extends opc_allegation {
}
interface opc_allegations_personalinformationtypes_Base extends WebEntity {
}
interface opc_allegations_personalinformationtypes_Fixed extends WebEntity_Fixed {
  opc_allegations_personalinformationtypesid: string;
}
interface opc_allegations_personalinformationtypes extends opc_allegations_personalinformationtypes_Base, opc_allegations_personalinformationtypes_Relationships {
}
interface opc_allegations_personalinformationtypes_Relationships {
}
interface opc_allegations_personalinformationtypes_Result extends opc_allegations_personalinformationtypes_Base, opc_allegations_personalinformationtypes_Relationships {
}
interface opc_allegations_personalinformationtypes_FormattedResult {
}
interface opc_allegations_personalinformationtypes_Select {
}
interface opc_allegations_personalinformationtypes_Expand {
}
interface opc_allegations_personalinformationtypes_Filter {
}
interface opc_allegations_personalinformationtypes_Create extends opc_allegations_personalinformationtypes {
}
interface opc_allegations_personalinformationtypes_Update extends opc_allegations_personalinformationtypes {
}
interface opc_allegationtype_Base extends WebEntity {
}
interface opc_allegationtype_Fixed extends WebEntity_Fixed {
  opc_allegationtypeid: string;
}
interface opc_allegationtype extends opc_allegationtype_Base, opc_allegationtype_Relationships {
}
interface opc_allegationtype_Relationships {
}
interface opc_allegationtype_Result extends opc_allegationtype_Base, opc_allegationtype_Relationships {
}
interface opc_allegationtype_FormattedResult {
}
interface opc_allegationtype_Select {
}
interface opc_allegationtype_Expand {
}
interface opc_allegationtype_Filter {
}
interface opc_allegationtype_Create extends opc_allegationtype {
}
interface opc_allegationtype_Update extends opc_allegationtype {
}
interface opc_ChecklistResponse_Base extends WebEntity {
}
interface opc_ChecklistResponse_Fixed extends WebEntity_Fixed {
  opc_checklistresponseid: string;
}
interface opc_ChecklistResponse extends opc_ChecklistResponse_Base, opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse_Result extends opc_ChecklistResponse_Base, opc_ChecklistResponse_Relationships {
}
interface opc_ChecklistResponse_FormattedResult {
}
interface opc_ChecklistResponse_Select {
}
interface opc_ChecklistResponse_Expand {
}
interface opc_ChecklistResponse_Filter {
}
interface opc_ChecklistResponse_Create extends opc_ChecklistResponse {
}
interface opc_ChecklistResponse_Update extends opc_ChecklistResponse {
}
interface opc_ChecklistType_Base extends WebEntity {
}
interface opc_ChecklistType_Fixed extends WebEntity_Fixed {
  opc_checklisttypeid: string;
}
interface opc_ChecklistType extends opc_ChecklistType_Base, opc_ChecklistType_Relationships {
}
interface opc_ChecklistType_Relationships {
}
interface opc_ChecklistType_Result extends opc_ChecklistType_Base, opc_ChecklistType_Relationships {
}
interface opc_ChecklistType_FormattedResult {
}
interface opc_ChecklistType_Select {
}
interface opc_ChecklistType_Expand {
}
interface opc_ChecklistType_Filter {
}
interface opc_ChecklistType_Create extends opc_ChecklistType {
}
interface opc_ChecklistType_Update extends opc_ChecklistType {
}
interface opc_checklisttype_legislationallegationtype_Base extends WebEntity {
}
interface opc_checklisttype_legislationallegationtype_Fixed extends WebEntity_Fixed {
  opc_checklisttype_legislationallegationtypeid: string;
}
interface opc_checklisttype_legislationallegationtype extends opc_checklisttype_legislationallegationtype_Base, opc_checklisttype_legislationallegationtype_Relationships {
}
interface opc_checklisttype_legislationallegationtype_Relationships {
}
interface opc_checklisttype_legislationallegationtype_Result extends opc_checklisttype_legislationallegationtype_Base, opc_checklisttype_legislationallegationtype_Relationships {
}
interface opc_checklisttype_legislationallegationtype_FormattedResult {
}
interface opc_checklisttype_legislationallegationtype_Select {
}
interface opc_checklisttype_legislationallegationtype_Expand {
}
interface opc_checklisttype_legislationallegationtype_Filter {
}
interface opc_checklisttype_legislationallegationtype_Create extends opc_checklisttype_legislationallegationtype {
}
interface opc_checklisttype_legislationallegationtype_Update extends opc_checklisttype_legislationallegationtype {
}
interface opc_complaint_Base extends WebEntity {
}
interface opc_complaint_Fixed extends WebEntity_Fixed {
  opc_complaintid: string;
}
interface opc_complaint extends opc_complaint_Base, opc_complaint_Relationships {
}
interface opc_complaint_Relationships {
}
interface opc_complaint_Result extends opc_complaint_Base, opc_complaint_Relationships {
}
interface opc_complaint_FormattedResult {
}
interface opc_complaint_Select {
}
interface opc_complaint_Expand {
}
interface opc_complaint_Filter {
}
interface opc_complaint_Create extends opc_complaint {
}
interface opc_complaint_Update extends opc_complaint {
}
interface opc_complaintsrelatedindustries_Base extends WebEntity {
}
interface opc_complaintsrelatedindustries_Fixed extends WebEntity_Fixed {
  opc_complaintsrelatedindustriesid: string;
}
interface opc_complaintsrelatedindustries extends opc_complaintsrelatedindustries_Base, opc_complaintsrelatedindustries_Relationships {
}
interface opc_complaintsrelatedindustries_Relationships {
}
interface opc_complaintsrelatedindustries_Result extends opc_complaintsrelatedindustries_Base, opc_complaintsrelatedindustries_Relationships {
}
interface opc_complaintsrelatedindustries_FormattedResult {
}
interface opc_complaintsrelatedindustries_Select {
}
interface opc_complaintsrelatedindustries_Expand {
}
interface opc_complaintsrelatedindustries_Filter {
}
interface opc_complaintsrelatedindustries_Create extends opc_complaintsrelatedindustries {
}
interface opc_complaintsrelatedindustries_Update extends opc_complaintsrelatedindustries {
}
interface opc_complaintsrelatedtopics_Base extends WebEntity {
}
interface opc_complaintsrelatedtopics_Fixed extends WebEntity_Fixed {
  opc_complaintsrelatedtopicsid: string;
}
interface opc_complaintsrelatedtopics extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_Result extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_FormattedResult {
}
interface opc_complaintsrelatedtopics_Select {
}
interface opc_complaintsrelatedtopics_Expand {
}
interface opc_complaintsrelatedtopics_Filter {
}
interface opc_complaintsrelatedtopics_Create extends opc_complaintsrelatedtopics {
}
interface opc_complaintsrelatedtopics_Update extends opc_complaintsrelatedtopics {
}
interface opc_dispositionaction_Base extends WebEntity {
}
interface opc_dispositionaction_Fixed extends WebEntity_Fixed {
  opc_dispositionactionid: string;
}
interface opc_dispositionaction extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
}
interface opc_dispositionaction_Relationships {
}
interface opc_dispositionaction_Result extends opc_dispositionaction_Base, opc_dispositionaction_Relationships {
}
interface opc_dispositionaction_FormattedResult {
}
interface opc_dispositionaction_Select {
}
interface opc_dispositionaction_Expand {
}
interface opc_dispositionaction_Filter {
}
interface opc_dispositionaction_Create extends opc_dispositionaction {
}
interface opc_dispositionaction_Update extends opc_dispositionaction {
}
interface opc_dispositionreason_Base extends WebEntity {
}
interface opc_dispositionreason_Fixed extends WebEntity_Fixed {
  opc_dispositionreasonid: string;
}
interface opc_dispositionreason extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
}
interface opc_dispositionreason_Relationships {
}
interface opc_dispositionreason_Result extends opc_dispositionreason_Base, opc_dispositionreason_Relationships {
}
interface opc_dispositionreason_FormattedResult {
}
interface opc_dispositionreason_Select {
}
interface opc_dispositionreason_Expand {
}
interface opc_dispositionreason_Filter {
}
interface opc_dispositionreason_Create extends opc_dispositionreason {
}
interface opc_dispositionreason_Update extends opc_dispositionreason {
}
interface opc_event_Base extends WebEntity {
}
interface opc_event_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface opc_event extends opc_event_Base, opc_event_Relationships {
}
interface opc_event_Relationships {
}
interface opc_event_Result extends opc_event_Base, opc_event_Relationships {
}
interface opc_event_FormattedResult {
}
interface opc_event_Select {
}
interface opc_event_Expand {
}
interface opc_event_Filter {
}
interface opc_event_Create extends opc_event {
}
interface opc_event_Update extends opc_event {
}
interface opc_individualcomplaint_bp_Base extends WebEntity {
}
interface opc_individualcomplaint_bp_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface opc_individualcomplaint_bp extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp_Result extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp_FormattedResult {
}
interface opc_individualcomplaint_bp_Select {
}
interface opc_individualcomplaint_bp_Expand {
}
interface opc_individualcomplaint_bp_Filter {
}
interface opc_individualcomplaint_bp_Create extends opc_individualcomplaint_bp {
}
interface opc_individualcomplaint_bp_Update extends opc_individualcomplaint_bp {
}
interface opc_industry_Base extends WebEntity {
}
interface opc_industry_Fixed extends WebEntity_Fixed {
  opc_industryid: string;
}
interface opc_industry extends opc_industry_Base, opc_industry_Relationships {
}
interface opc_industry_Relationships {
}
interface opc_industry_Result extends opc_industry_Base, opc_industry_Relationships {
}
interface opc_industry_FormattedResult {
}
interface opc_industry_Select {
}
interface opc_industry_Expand {
}
interface opc_industry_Filter {
}
interface opc_industry_Create extends opc_industry {
}
interface opc_industry_Update extends opc_industry {
}
interface opc_issue_Base extends WebEntity {
}
interface opc_issue_Fixed extends WebEntity_Fixed {
  opc_issueid: string;
}
interface opc_issue extends opc_issue_Base, opc_issue_Relationships {
}
interface opc_issue_Relationships {
}
interface opc_issue_Result extends opc_issue_Base, opc_issue_Relationships {
}
interface opc_issue_FormattedResult {
}
interface opc_issue_Select {
}
interface opc_issue_Expand {
}
interface opc_issue_Filter {
}
interface opc_issue_Create extends opc_issue {
}
interface opc_issue_Update extends opc_issue {
}
interface opc_legislation_Base extends WebEntity {
}
interface opc_legislation_Fixed extends WebEntity_Fixed {
  opc_legislationid: string;
}
interface opc_legislation extends opc_legislation_Base, opc_legislation_Relationships {
}
interface opc_legislation_Relationships {
}
interface opc_legislation_Result extends opc_legislation_Base, opc_legislation_Relationships {
}
interface opc_legislation_FormattedResult {
}
interface opc_legislation_Select {
}
interface opc_legislation_Expand {
}
interface opc_legislation_Filter {
}
interface opc_legislation_Create extends opc_legislation {
}
interface opc_legislation_Update extends opc_legislation {
}
interface opc_legislationallegationtype_Base extends WebEntity {
}
interface opc_legislationallegationtype_Fixed extends WebEntity_Fixed {
  opc_legislationallegationtypeid: string;
}
interface opc_legislationallegationtype extends opc_legislationallegationtype_Base, opc_legislationallegationtype_Relationships {
}
interface opc_legislationallegationtype_Relationships {
}
interface opc_legislationallegationtype_Result extends opc_legislationallegationtype_Base, opc_legislationallegationtype_Relationships {
}
interface opc_legislationallegationtype_FormattedResult {
}
interface opc_legislationallegationtype_Select {
}
interface opc_legislationallegationtype_Expand {
}
interface opc_legislationallegationtype_Filter {
}
interface opc_legislationallegationtype_Create extends opc_legislationallegationtype {
}
interface opc_legislationallegationtype_Update extends opc_legislationallegationtype {
}
interface opc_notification_Base extends WebEntity {
}
interface opc_notification_Fixed extends WebEntity_Fixed {
  opc_notificationid: string;
}
interface opc_notification extends opc_notification_Base, opc_notification_Relationships {
}
interface opc_notification_Relationships {
}
interface opc_notification_Result extends opc_notification_Base, opc_notification_Relationships {
}
interface opc_notification_FormattedResult {
}
interface opc_notification_Select {
}
interface opc_notification_Expand {
}
interface opc_notification_Filter {
}
interface opc_notification_Create extends opc_notification {
}
interface opc_notification_Update extends opc_notification {
}
interface opc_opcpriority_Base extends WebEntity {
}
interface opc_opcpriority_Fixed extends WebEntity_Fixed {
  opc_opcpriorityid: string;
}
interface opc_opcpriority extends opc_opcpriority_Base, opc_opcpriority_Relationships {
}
interface opc_opcpriority_Relationships {
}
interface opc_opcpriority_Result extends opc_opcpriority_Base, opc_opcpriority_Relationships {
}
interface opc_opcpriority_FormattedResult {
}
interface opc_opcpriority_Select {
}
interface opc_opcpriority_Expand {
}
interface opc_opcpriority_Filter {
}
interface opc_opcpriority_Create extends opc_opcpriority {
}
interface opc_opcpriority_Update extends opc_opcpriority {
}
interface opc_provision_Base extends WebEntity {
}
interface opc_provision_Fixed extends WebEntity_Fixed {
  opc_provisionid: string;
}
interface opc_provision extends opc_provision_Base, opc_provision_Relationships {
}
interface opc_provision_Relationships {
}
interface opc_provision_Result extends opc_provision_Base, opc_provision_Relationships {
}
interface opc_provision_FormattedResult {
}
interface opc_provision_Select {
}
interface opc_provision_Expand {
}
interface opc_provision_Filter {
}
interface opc_provision_Create extends opc_provision {
}
interface opc_provision_Update extends opc_provision {
}
interface opc_provisionsissues_Base extends WebEntity {
}
interface opc_provisionsissues_Fixed extends WebEntity_Fixed {
  opc_provisionsissuesid: string;
}
interface opc_provisionsissues extends opc_provisionsissues_Base, opc_provisionsissues_Relationships {
}
interface opc_provisionsissues_Relationships {
}
interface opc_provisionsissues_Result extends opc_provisionsissues_Base, opc_provisionsissues_Relationships {
}
interface opc_provisionsissues_FormattedResult {
}
interface opc_provisionsissues_Select {
}
interface opc_provisionsissues_Expand {
}
interface opc_provisionsissues_Filter {
}
interface opc_provisionsissues_Create extends opc_provisionsissues {
}
interface opc_provisionsissues_Update extends opc_provisionsissues {
}
interface opc_personalinformationtype_Base extends WebEntity {
}
interface opc_personalinformationtype_Fixed extends WebEntity_Fixed {
  opc_personalinformationtypeid: string;
}
interface opc_personalinformationtype extends opc_personalinformationtype_Base, opc_personalinformationtype_Relationships {
}
interface opc_personalinformationtype_Relationships {
}
interface opc_personalinformationtype_Result extends opc_personalinformationtype_Base, opc_personalinformationtype_Relationships {
}
interface opc_personalinformationtype_FormattedResult {
}
interface opc_personalinformationtype_Select {
}
interface opc_personalinformationtype_Expand {
}
interface opc_personalinformationtype_Filter {
}
interface opc_personalinformationtype_Create extends opc_personalinformationtype {
}
interface opc_personalinformationtype_Update extends opc_personalinformationtype {
}
interface opc_QuestionTemplate_Base extends WebEntity {
}
interface opc_QuestionTemplate_Fixed extends WebEntity_Fixed {
  opc_questiontemplateid: string;
}
interface opc_QuestionTemplate extends opc_QuestionTemplate_Base, opc_QuestionTemplate_Relationships {
}
interface opc_QuestionTemplate_Relationships {
}
interface opc_QuestionTemplate_Result extends opc_QuestionTemplate_Base, opc_QuestionTemplate_Relationships {
}
interface opc_QuestionTemplate_FormattedResult {
}
interface opc_QuestionTemplate_Select {
}
interface opc_QuestionTemplate_Expand {
}
interface opc_QuestionTemplate_Filter {
}
interface opc_QuestionTemplate_Create extends opc_QuestionTemplate {
}
interface opc_QuestionTemplate_Update extends opc_QuestionTemplate {
}
interface opc_QuestionType_Base extends WebEntity {
}
interface opc_QuestionType_Fixed extends WebEntity_Fixed {
  opc_questiontypeid: string;
}
interface opc_QuestionType extends opc_QuestionType_Base, opc_QuestionType_Relationships {
}
interface opc_QuestionType_Relationships {
}
interface opc_QuestionType_Result extends opc_QuestionType_Base, opc_QuestionType_Relationships {
}
interface opc_QuestionType_FormattedResult {
}
interface opc_QuestionType_Select {
}
interface opc_QuestionType_Expand {
}
interface opc_QuestionType_Filter {
}
interface opc_QuestionType_Create extends opc_QuestionType {
}
interface opc_QuestionType_Update extends opc_QuestionType {
}
interface opc_queues_teams_Base extends WebEntity {
}
interface opc_queues_teams_Fixed extends WebEntity_Fixed {
  opc_queues_teamsid: string;
}
interface opc_queues_teams extends opc_queues_teams_Base, opc_queues_teams_Relationships {
}
interface opc_queues_teams_Relationships {
}
interface opc_queues_teams_Result extends opc_queues_teams_Base, opc_queues_teams_Relationships {
}
interface opc_queues_teams_FormattedResult {
}
interface opc_queues_teams_Select {
}
interface opc_queues_teams_Expand {
}
interface opc_queues_teams_Filter {
}
interface opc_queues_teams_Create extends opc_queues_teams {
}
interface opc_queues_teams_Update extends opc_queues_teams {
}
interface opc_recommendation_Base extends WebEntity {
}
interface opc_recommendation_Fixed extends WebEntity_Fixed {
  opc_recommendationid: string;
}
interface opc_recommendation extends opc_recommendation_Base, opc_recommendation_Relationships {
}
interface opc_recommendation_Relationships {
}
interface opc_recommendation_Result extends opc_recommendation_Base, opc_recommendation_Relationships {
}
interface opc_recommendation_FormattedResult {
}
interface opc_recommendation_Select {
}
interface opc_recommendation_Expand {
}
interface opc_recommendation_Filter {
}
interface opc_recommendation_Create extends opc_recommendation {
}
interface opc_recommendation_Update extends opc_recommendation {
}
interface opc_reminder_Base extends WebEntity {
}
interface opc_reminder_Fixed extends WebEntity_Fixed {
  opc_reminderid: string;
}
interface opc_reminder extends opc_reminder_Base, opc_reminder_Relationships {
}
interface opc_reminder_Relationships {
}
interface opc_reminder_Result extends opc_reminder_Base, opc_reminder_Relationships {
}
interface opc_reminder_FormattedResult {
}
interface opc_reminder_Select {
}
interface opc_reminder_Expand {
}
interface opc_reminder_Filter {
}
interface opc_reminder_Create extends opc_reminder {
}
interface opc_reminder_Update extends opc_reminder {
}
interface opc_reminder_user_Base extends WebEntity {
}
interface opc_reminder_user_Fixed extends WebEntity_Fixed {
  opc_reminder_userid: string;
}
interface opc_reminder_user extends opc_reminder_user_Base, opc_reminder_user_Relationships {
}
interface opc_reminder_user_Relationships {
}
interface opc_reminder_user_Result extends opc_reminder_user_Base, opc_reminder_user_Relationships {
}
interface opc_reminder_user_FormattedResult {
}
interface opc_reminder_user_Select {
}
interface opc_reminder_user_Expand {
}
interface opc_reminder_user_Filter {
}
interface opc_reminder_user_Create extends opc_reminder_user {
}
interface opc_reminder_user_Update extends opc_reminder_user {
}
interface opc_RiskAppetite_Base extends WebEntity {
}
interface opc_RiskAppetite_Fixed extends WebEntity_Fixed {
  opc_riskappetiteid: string;
}
interface opc_RiskAppetite extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
}
interface opc_RiskAppetite_Relationships {
}
interface opc_RiskAppetite_Result extends opc_RiskAppetite_Base, opc_RiskAppetite_Relationships {
}
interface opc_RiskAppetite_FormattedResult {
}
interface opc_RiskAppetite_Select {
}
interface opc_RiskAppetite_Expand {
}
interface opc_RiskAppetite_Filter {
}
interface opc_RiskAppetite_Create extends opc_RiskAppetite {
}
interface opc_RiskAppetite_Update extends opc_RiskAppetite {
}
interface opc_RiskAssessment_Base extends WebEntity {
}
interface opc_RiskAssessment_Fixed extends WebEntity_Fixed {
  opc_riskassessmentid: string;
}
interface opc_RiskAssessment extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
}
interface opc_RiskAssessment_Relationships {
}
interface opc_RiskAssessment_Result extends opc_RiskAssessment_Base, opc_RiskAssessment_Relationships {
}
interface opc_RiskAssessment_FormattedResult {
}
interface opc_RiskAssessment_Select {
}
interface opc_RiskAssessment_Expand {
}
interface opc_RiskAssessment_Filter {
}
interface opc_RiskAssessment_Create extends opc_RiskAssessment {
}
interface opc_RiskAssessment_Update extends opc_RiskAssessment {
}
interface opc_RiskAssessmentCategory_Base extends WebEntity {
}
interface opc_RiskAssessmentCategory_Fixed extends WebEntity_Fixed {
  opc_riskassessmentcategoryid: string;
}
interface opc_RiskAssessmentCategory extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
}
interface opc_RiskAssessmentCategory_Relationships {
}
interface opc_RiskAssessmentCategory_Result extends opc_RiskAssessmentCategory_Base, opc_RiskAssessmentCategory_Relationships {
}
interface opc_RiskAssessmentCategory_FormattedResult {
}
interface opc_RiskAssessmentCategory_Select {
}
interface opc_RiskAssessmentCategory_Expand {
}
interface opc_RiskAssessmentCategory_Filter {
}
interface opc_RiskAssessmentCategory_Create extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategory_Update extends opc_RiskAssessmentCategory {
}
interface opc_RiskAssessmentCategoryTemplate_Base extends WebEntity {
}
interface opc_RiskAssessmentCategoryTemplate_Fixed extends WebEntity_Fixed {
  opc_riskassessmentcategorytemplateid: string;
}
interface opc_RiskAssessmentCategoryTemplate extends opc_RiskAssessmentCategoryTemplate_Base, opc_RiskAssessmentCategoryTemplate_Relationships {
}
interface opc_RiskAssessmentCategoryTemplate_Relationships {
}
interface opc_RiskAssessmentCategoryTemplate_Result extends opc_RiskAssessmentCategoryTemplate_Base, opc_RiskAssessmentCategoryTemplate_Relationships {
}
interface opc_RiskAssessmentCategoryTemplate_FormattedResult {
}
interface opc_RiskAssessmentCategoryTemplate_Select {
}
interface opc_RiskAssessmentCategoryTemplate_Expand {
}
interface opc_RiskAssessmentCategoryTemplate_Filter {
}
interface opc_RiskAssessmentCategoryTemplate_Create extends opc_RiskAssessmentCategoryTemplate {
}
interface opc_RiskAssessmentCategoryTemplate_Update extends opc_RiskAssessmentCategoryTemplate {
}
interface opc_RiskAssessmentDefinition_Base extends WebEntity {
}
interface opc_RiskAssessmentDefinition_Fixed extends WebEntity_Fixed {
  opc_riskassessmentdefinitionid: string;
}
interface opc_RiskAssessmentDefinition extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
}
interface opc_RiskAssessmentDefinition_Relationships {
}
interface opc_RiskAssessmentDefinition_Result extends opc_RiskAssessmentDefinition_Base, opc_RiskAssessmentDefinition_Relationships {
}
interface opc_RiskAssessmentDefinition_FormattedResult {
}
interface opc_RiskAssessmentDefinition_Select {
}
interface opc_RiskAssessmentDefinition_Expand {
}
interface opc_RiskAssessmentDefinition_Filter {
}
interface opc_RiskAssessmentDefinition_Create extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinition_Update extends opc_RiskAssessmentDefinition {
}
interface opc_RiskAssessmentDefinitionTemplate_Base extends WebEntity {
}
interface opc_RiskAssessmentDefinitionTemplate_Fixed extends WebEntity_Fixed {
  opc_riskassessmentdefinitiontemplateid: string;
}
interface opc_RiskAssessmentDefinitionTemplate extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
}
interface opc_RiskAssessmentDefinitionTemplate_Relationships {
}
interface opc_RiskAssessmentDefinitionTemplate_Result extends opc_RiskAssessmentDefinitionTemplate_Base, opc_RiskAssessmentDefinitionTemplate_Relationships {
}
interface opc_RiskAssessmentDefinitionTemplate_FormattedResult {
}
interface opc_RiskAssessmentDefinitionTemplate_Select {
}
interface opc_RiskAssessmentDefinitionTemplate_Expand {
}
interface opc_RiskAssessmentDefinitionTemplate_Filter {
}
interface opc_RiskAssessmentDefinitionTemplate_Create extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentDefinitionTemplate_Update extends opc_RiskAssessmentDefinitionTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Base extends WebEntity {
}
interface opc_RiskAssessmentFactorTemplate_Fixed extends WebEntity_Fixed {
  opc_riskassessmentfactortemplateid: string;
}
interface opc_RiskAssessmentFactorTemplate extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
}
interface opc_RiskAssessmentFactorTemplate_Relationships {
}
interface opc_RiskAssessmentFactorTemplate_Result extends opc_RiskAssessmentFactorTemplate_Base, opc_RiskAssessmentFactorTemplate_Relationships {
}
interface opc_RiskAssessmentFactorTemplate_FormattedResult {
}
interface opc_RiskAssessmentFactorTemplate_Select {
}
interface opc_RiskAssessmentFactorTemplate_Expand {
}
interface opc_RiskAssessmentFactorTemplate_Filter {
}
interface opc_RiskAssessmentFactorTemplate_Create extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentFactorTemplate_Update extends opc_RiskAssessmentFactorTemplate {
}
interface opc_RiskAssessmentType_Base extends WebEntity {
}
interface opc_RiskAssessmentType_Fixed extends WebEntity_Fixed {
  opc_riskassessmenttypeid: string;
}
interface opc_RiskAssessmentType extends opc_RiskAssessmentType_Base, opc_RiskAssessmentType_Relationships {
}
interface opc_RiskAssessmentType_Relationships {
}
interface opc_RiskAssessmentType_Result extends opc_RiskAssessmentType_Base, opc_RiskAssessmentType_Relationships {
}
interface opc_RiskAssessmentType_FormattedResult {
}
interface opc_RiskAssessmentType_Select {
}
interface opc_RiskAssessmentType_Expand {
}
interface opc_RiskAssessmentType_Filter {
}
interface opc_RiskAssessmentType_Create extends opc_RiskAssessmentType {
}
interface opc_RiskAssessmentType_Update extends opc_RiskAssessmentType {
}
interface opc_theme_Base extends WebEntity {
}
interface opc_theme_Fixed extends WebEntity_Fixed {
  opc_themeid: string;
}
interface opc_theme extends opc_theme_Base, opc_theme_Relationships {
}
interface opc_theme_Relationships {
}
interface opc_theme_Result extends opc_theme_Base, opc_theme_Relationships {
}
interface opc_theme_FormattedResult {
}
interface opc_theme_Select {
}
interface opc_theme_Expand {
}
interface opc_theme_Filter {
}
interface opc_theme_Create extends opc_theme {
}
interface opc_theme_Update extends opc_theme {
}
interface opc_topic_Base extends WebEntity {
}
interface opc_topic_Fixed extends WebEntity_Fixed {
  opc_topicid: string;
}
interface opc_topic extends opc_topic_Base, opc_topic_Relationships {
}
interface opc_topic_Relationships {
}
interface opc_topic_Result extends opc_topic_Base, opc_topic_Relationships {
}
interface opc_topic_FormattedResult {
}
interface opc_topic_Select {
}
interface opc_topic_Expand {
}
interface opc_topic_Filter {
}
interface opc_topic_Create extends opc_topic {
}
interface opc_topic_Update extends opc_topic {
}
interface Queue_Base extends WebEntity {
}
interface Queue_Fixed extends WebEntity_Fixed {
  queueid: string;
}
interface Queue extends Queue_Base, Queue_Relationships {
}
interface Queue_Relationships {
}
interface Queue_Result extends Queue_Base, Queue_Relationships {
}
interface Queue_FormattedResult {
}
interface Queue_Select {
}
interface Queue_Expand {
}
interface Queue_Filter {
}
interface Queue_Create extends Queue {
}
interface Queue_Update extends Queue {
}
interface QueueItem_Base extends WebEntity {
}
interface QueueItem_Fixed extends WebEntity_Fixed {
  queueitemid: string;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_Relationships {
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_FormattedResult {
}
interface QueueItem_Select {
}
interface QueueItem_Expand {
}
interface QueueItem_Filter {
}
interface QueueItem_Create extends QueueItem {
}
interface QueueItem_Update extends QueueItem {
}
interface QueueMembership_Base extends WebEntity {
}
interface QueueMembership_Fixed extends WebEntity_Fixed {
  queuemembershipid: string;
}
interface QueueMembership extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_Relationships {
}
interface QueueMembership_Result extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_FormattedResult {
}
interface QueueMembership_Select {
}
interface QueueMembership_Expand {
}
interface QueueMembership_Filter {
}
interface QueueMembership_Create extends QueueMembership {
}
interface QueueMembership_Update extends QueueMembership {
}
interface SharePointDocument_Base extends WebEntity {
}
interface SharePointDocument_Fixed extends WebEntity_Fixed {
  sharepointdocumentid: string;
}
interface SharePointDocument extends SharePointDocument_Base, SharePointDocument_Relationships {
}
interface SharePointDocument_Relationships {
}
interface SharePointDocument_Result extends SharePointDocument_Base, SharePointDocument_Relationships {
}
interface SharePointDocument_FormattedResult {
}
interface SharePointDocument_Select {
}
interface SharePointDocument_Expand {
}
interface SharePointDocument_Filter {
}
interface SharePointDocument_Create extends SharePointDocument {
}
interface SharePointDocument_Update extends SharePointDocument {
}
interface SharePointDocumentLocation_Base extends WebEntity {
}
interface SharePointDocumentLocation_Fixed extends WebEntity_Fixed {
  sharepointdocumentlocationid: string;
}
interface SharePointDocumentLocation extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_Result extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_FormattedResult {
}
interface SharePointDocumentLocation_Select {
}
interface SharePointDocumentLocation_Expand {
}
interface SharePointDocumentLocation_Filter {
}
interface SharePointDocumentLocation_Create extends SharePointDocumentLocation {
}
interface SharePointDocumentLocation_Update extends SharePointDocumentLocation {
}
interface SharePointSite_Base extends WebEntity {
}
interface SharePointSite_Fixed extends WebEntity_Fixed {
  sharepointsiteid: string;
}
interface SharePointSite extends SharePointSite_Base, SharePointSite_Relationships {
}
interface SharePointSite_Relationships {
}
interface SharePointSite_Result extends SharePointSite_Base, SharePointSite_Relationships {
}
interface SharePointSite_FormattedResult {
}
interface SharePointSite_Select {
}
interface SharePointSite_Expand {
}
interface SharePointSite_Filter {
}
interface SharePointSite_Create extends SharePointSite {
}
interface SharePointSite_Update extends SharePointSite {
}
interface SystemUser_Base extends WebEntity {
}
interface SystemUser_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface SystemUser extends SystemUser_Base, SystemUser_Relationships {
}
interface SystemUser_Relationships {
}
interface SystemUser_Result extends SystemUser_Base, SystemUser_Relationships {
}
interface SystemUser_FormattedResult {
}
interface SystemUser_Select {
}
interface SystemUser_Expand {
}
interface SystemUser_Filter {
}
interface SystemUser_Create extends SystemUser {
}
interface SystemUser_Update extends SystemUser {
}
interface Team_Base extends WebEntity {
}
interface Team_Fixed extends WebEntity_Fixed {
  teamid: string;
}
interface Team extends Team_Base, Team_Relationships {
}
interface Team_Relationships {
}
interface Team_Result extends Team_Base, Team_Relationships {
}
interface Team_FormattedResult {
}
interface Team_Select {
}
interface Team_Expand {
}
interface Team_Filter {
}
interface Team_Create extends Team {
}
interface Team_Update extends Team {
}
interface TeamMembership_Base extends WebEntity {
}
interface TeamMembership_Fixed extends WebEntity_Fixed {
  teammembershipid: string;
}
interface TeamMembership extends TeamMembership_Base, TeamMembership_Relationships {
}
interface TeamMembership_Relationships {
}
interface TeamMembership_Result extends TeamMembership_Base, TeamMembership_Relationships {
}
interface TeamMembership_FormattedResult {
}
interface TeamMembership_Select {
}
interface TeamMembership_Expand {
}
interface TeamMembership_Filter {
}
interface TeamMembership_Create extends TeamMembership {
}
interface TeamMembership_Update extends TeamMembership {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
