declare const enum duplicaterule_matchingentitytypecode {
  Account = 1,
  Contact = 2,
  Note = 5,
  BusinessUnitMap = 6,
  Owner = 7,
  User = 8,
  Team = 9,
  BusinessUnit = 10,
  SystemUserPrincipal = 14,
  Subscription = 29,
  FilterTemplate = 30,
  PrivilegeObjectTypeCode = 31,
  SubscriptionSynchronizationInformation = 33,
  Trackinginformationfordeletedentities = 35,
  Clientupdate = 36,
  SubscriptionManuallyTrackedObject = 37,
  SystemUserBusinessUnitEntityMap = 42,
  FieldSharing = 44,
  SubscriptionStatisticOffline = 45,
  SubscriptionStatisticOutlook = 46,
  SubscriptionSyncEntryOffline = 47,
  SubscriptionSyncEntryOutlook = 48,
  Position = 50,
  SystemUserManagerMap = 51,
  UserSearchFacet = 52,
  GlobalSearchConfiguration = 54,
  FileAttachment = 55,
  VirtualEntityDataProvider = 78,
  VirtualEntityDataSource = 85,
  Teamtemplate = 92,
  SocialProfile = 99,
  ServicePlan = 101,
  IndexedArticle = 126,
  Article = 127,
  Subject = 129,
  Announcement = 132,
  ActivityParty = 135,
  UserSettings = 150,
  CanvasApp = 300,
  CallbackRegistration = 301,
  Connector = 372,
  EnvironmentVariableDefinition = 380,
  EnvironmentVariableValue = 381,
  AITemplate = 400,
  AIModel = 401,
  AIConfiguration = 402,
  Dataflow = 418,
  EntityAnalyticsConfig = 430,
  ImageAttributeConfiguration = 431,
  EntityImageConfiguration = 432,
  NewProcess = 950,
  TranslationProcess = 951,
  ExpiredProcess = 955,
  Attachment = 1001,
  Attachment_2 = 1002,
  InternalAddress = 1003,
  ImageDescriptor = 1007,
  ArticleTemplate = 1016,
  Organization = 1019,
  OrganizationUI = 1021,
  Privilege = 1023,
  SystemForm = 1030,
  UserDashboard = 1031,
  SecurityRole = 1036,
  RoleTemplate = 1037,
  View = 1039,
  StringMap = 1043,
  Address = 1071,
  SubscriptionClients = 1072,
  StatusMap = 1075,
  ArticleComment = 1082,
  UserFiscalCalendar = 1086,
  AuthorizationServer = 1094,
  PartnerApplication = 1095,
  SystemChart = 1111,
  UserChart = 1112,
  RibbonTabToCommandMapping = 1113,
  RibbonContextGroup = 1115,
  RibbonCommand = 1116,
  RibbonRule = 1117,
  ApplicationRibbons = 1120,
  RibbonDifference = 1130,
  ReplicationBacklog = 1140,
  DocumentSuggestions = 1189,
  SuggestionCardTemplate = 1190,
  FieldSecurityProfile = 1200,
  FieldPermission = 1201,
  TeamProfiles = 1203,
  ChannelPropertyGroup = 1234,
  ChannelProperty = 1236,
  SocialInsightsConfiguration = 1300,
  SavedOrganizationInsightsConfiguration = 1309,
  SyncAttributeMappingProfile = 1400,
  SyncAttributeMapping = 1401,
  TeamSyncAttributeMappingProfiles = 1403,
  PrincipalSyncAttributeMap = 1404,
  AnnualFiscalCalendar = 2000,
  SemiannualFiscalCalendar = 2001,
  QuarterlyFiscalCalendar = 2002,
  MonthlyFiscalCalendar = 2003,
  FixedMonthlyFiscalCalendar = 2004,
  EmailTemplate = 2010,
  UnresolvedAddress = 2012,
  Territory = 2013,
  Theme_2 = 2015,
  UserMapping = 2016,
  Queue = 2020,
  QueueItemCount = 2023,
  QueueMemberCount = 2024,
  License = 2027,
  QueueItem = 2029,
  UserEntityUISettings = 2500,
  UserEntityInstanceData = 2501,
  IntegrationStatus = 3000,
  ChannelAccessProfile = 3005,
  ExternalParty = 3008,
  ConnectionRole = 3231,
  ConnectionRoleObjectTypeCode = 3233,
  Connection = 3234,
  Calendar = 4003,
  CalendarRule = 4004,
  InterProcessLock = 4011,
  EmailHash = 4023,
  DisplayStringMap = 4101,
  DisplayString = 4102,
  Notification_2 = 4110,
  ExchangeSyncIdMapping = 4120,
  Activity = 4200,
  Appointment = 4201,
  Email = 4202,
  Fax = 4204,
  Letter = 4207,
  PhoneCall = 4210,
  Task = 4212,
  SocialActivity = 4216,
  UntrackedEmail = 4220,
  SavedView = 4230,
  MetadataDifference = 4231,
  BusinessDataLocalizedLabel = 4232,
  RecurrenceRule = 4250,
  RecurringAppointment = 4251,
  EmailSearch = 4299,
  DataImport = 4410,
  DataMap = 4411,
  ImportSourceFile = 4412,
  ImportData = 4413,
  DuplicateDetectionRule = 4414,
  DuplicateRecord = 4415,
  DuplicateRuleCondition = 4416,
  ColumnMapping = 4417,
  ListValueMapping = 4418,
  LookupMapping = 4419,
  OwnerMapping = 4420,
  ImportLog = 4423,
  BulkDeleteOperation = 4424,
  BulkDeleteFailure = 4425,
  TransformationMapping = 4426,
  TransformationParameterMapping = 4427,
  ImportEntityMapping = 4428,
  DataPerformanceDashboard = 4450,
  OfficeDocument = 4490,
  RelationshipRole = 4500,
  RelationshipRoleMap = 4501,
  CustomerRelationship = 4502,
  Auditing = 4567,
  RibbonClientMetadata = 4579,
  EntityMap = 4600,
  AttributeMap = 4601,
  PluginType = 4602,
  PluginTypeStatistic = 4603,
  PluginAssembly = 4605,
  SdkMessage = 4606,
  SdkMessageFilter = 4607,
  SdkMessageProcessingStep = 4608,
  SdkMessageRequest = 4609,
  SdkMessageResponse = 4610,
  SdkMessageResponseField = 4611,
  SdkMessagePair = 4613,
  SdkMessageRequestField = 4614,
  SdkMessageProcessingStepImage = 4615,
  SdkMessageProcessingStepSecureConfiguration = 4616,
  ServiceEndpoint = 4618,
  PluginTraceLog = 4619,
  SystemJob = 4700,
  WorkflowWaitSubscription = 4702,
  Process = 4703,
  ProcessDependency = 4704,
  ISVConfig = 4705,
  ProcessLog = 4706,
  ApplicationFile = 4707,
  OrganizationStatistic = 4708,
  SiteMap = 4709,
  ProcessSession = 4710,
  ExpanderEvent = 4711,
  ProcessTrigger = 4712,
  FlowSession = 4720,
  ProcessStage = 4724,
  BusinessProcessFlowInstance = 4725,
  WebWizard = 4800,
  WizardPage = 4802,
  WebWizardAccessPrivilege = 4803,
  TimeZoneDefinition = 4810,
  TimeZoneRule = 4811,
  TimeZoneLocalizedName = 4812,
  SystemApplicationMetadata = 7000,
  UserApplicationMetadata = 7001,
  Solution = 7100,
  Publisher = 7101,
  PublisherAddress = 7102,
  SolutionComponent = 7103,
  SolutionComponentDefinition = 7104,
  Dependency = 7105,
  DependencyNode = 7106,
  InvalidDependency = 7107,
  DependencyFeature = 7108,
  RuntimeDependency = 7200,
  Post = 8000,
  PostRole = 8001,
  PostRegarding = 8002,
  Follow = 8003,
  Comment = 8005,
  Like = 8006,
  ACIViewMapper = 8040,
  Trace = 8050,
  TraceAssociation = 8051,
  TraceRegarding = 8052,
  RoutingRuleSet = 8181,
  RuleItem = 8199,
  AppModuleMetadata = 8700,
  AppModuleMetadataDependency = 8701,
  AppModuleMetadataAsyncOperation = 8702,
  HierarchyRule = 8840,
  ModeldrivenApp = 9006,
  AppModuleComponent = 9007,
  AppModuleRoles = 9009,
  AppConfigMaster = 9011,
  AppConfiguration = 9012,
  AppConfigurationInstance = 9013,
  Report = 9100,
  ReportRelatedEntity = 9101,
  ReportRelatedCategory = 9102,
  ReportVisibility = 9103,
  ReportLink = 9104,
  Currency = 9105,
  MailMergeTemplate = 9106,
  ImportJob = 9107,
  LocalConfigStore = 9201,
  RecordCreationandUpdateRule = 9300,
  RecordCreationandUpdateRuleItem = 9301,
  WebResource = 9333,
  ChannelAccessProfileRule = 9400,
  ChannelAccessProfileRuleItem = 9401,
  SharePointSite = 9502,
  SharepointDocument = 9507,
  DocumentLocation = 9508,
  SharePointData = 9509,
  RollupProperties = 9510,
  RollupJob = 9511,
  Goal = 9600,
  RollupQuery = 9602,
  GoalMetric = 9603,
  RollupField = 9604,
  EmailServerProfile = 9605,
  Mailbox = 9606,
  MailboxStatistics = 9607,
  MailboxAutoTrackingFolder = 9608,
  MailboxTrackingCategory = 9609,
  ProcessConfiguration = 9650,
  OrganizationInsightsNotification = 9690,
  OrganizationInsightsMetric = 9699,
  SLA = 9750,
  SLAItem = 9751,
  SLAKPIInstance = 9752,
  CustomControl = 9753,
  CustomControlResource = 9754,
  CustomControlDefaultConfig = 9755,
  Entity = 9800,
  Attribute = 9808,
  OptionSet = 9809,
  EntityKey = 9810,
  EntityRelationship = 9811,
  ManagedProperty = 9812,
  RelationshipEntity = 9813,
  RelationshipAttribute = 9814,
  MobileOfflineProfile = 9866,
  MobileOfflineProfileItem = 9867,
  MobileOfflineProfileItemAssociation = 9868,
  SyncError = 9869,
  OfflineCommandDefinition = 9870,
  LanguageProvisioningState = 9875,
  RibbonMetadataToProcess = 9880,
  SolutionHistoryData = 9890,
  NavigationSetting = 9900,
  MultiEntitySearch = 9910,
  MultiSelectOptionValue = 9912,
  HierarchySecurityConfiguration = 9919,
  KnowledgeBaseRecord = 9930,
  TimeStampDateMapping = 9932,
  AzureServiceConnection = 9936,
  DocumentTemplate = 9940,
  PersonalDocumentTemplate = 9941,
  TextAnalyticsEntityMapping = 9945,
  KnowledgeSearchModel = 9947,
  AdvancedSimilarityRule = 9949,
  OfficeGraphDocument = 9950,
  SimilarityRule = 9951,
  KnowledgeArticle = 9953,
  KnowledgeArticleViews = 9955,
  Language = 9957,
  Feedback = 9958,
  Category = 9959,
  KnowledgeArticleCategory = 9960,
  DelveActionHub = 9961,
  ActionCard = 9962,
  ActionCardUserState = 9968,
  ActionCardUserSettings = 9973,
  ActionCardType = 9983,
  InteractionforEmail = 9986,
  ExternalPartyItem = 9987,
  HolidayWrapper = 9996,
  EmailSignature = 9997,
  SolutionHistory = 10000,
  SolutionHistoryDataSource = 10001,
  SolutionComponentAttributeConfiguration = 10002,
  SolutionComponentConfiguration = 10003,
  ComponentLayer = 10004,
  ComponentLayerDataSource = 10005,
  StageSolutionUpload = 10006,
  SolutionComponentSummary = 10008,
  SolutionComponentDataSource = 10009,
  KnowledgeArticleImage = 10010,
  KnowledgeArticleTemplate = 10011,
  ApiSettings = 10012,
  ODatav4DataSource = 10013,
  AIBuilderDataset = 10014,
  AIBuilderDatasetFile = 10015,
  AIBuilderDatasetRecord = 10016,
  AIBuilderDatasetsContainer = 10017,
  AIBuilderFile = 10018,
  AIBuilderFileAttachedData = 10019,
  AIFormProcessingDocument = 10020,
  AIObjectDetectionImage = 10021,
  AIObjectDetectionLabel = 10022,
  AIObjectDetectionBoundingBox = 10023,
  AIObjectDetectionImageMapping = 10024,
  ProcessStageParameter = 10026,
  WorkflowBinary = 10027,
  ConnectionReference = 10028,
  HelpPage = 10029,
  AnalysisComponent = 10030,
  AnalysisJob = 10031,
  AnalysisResult = 10032,
  AnalysisResultDetail = 10033,
  SolutionHealthRule = 10034,
  SolutionHealthRuleArgument = 10035,
  SolutionHealthRuleSet = 10036,
  ServiceConfiguration = 10095,
  SLAKPI = 10096,
  NonRelationalDataSource = 10097,
  DataLakeWorkspace = 10185,
  DataLakeWorkspacePermission = 10186,
  ApplicationUser = 10187,
  SolutionComponentRelationshipConfiguration = 10220,
  ModelDrivenAppElement = 10250,
  ModelDrivenAppComponentNodesEdge = 10251,
  ModelDrivenAppComponentNode = 10252,
  ModelDrivenAppSetting = 10253,
  SettingDefinition = 10254,
  CanvasAppExtendedMetadata = 10256,
  PDFSetting = 10257,
  ExportSolutionUpload = 10258,
  RichTextAttachment = 10259,
  CascadeGrantRevokeAccessRecordsTracker = 10260,
  CascadeGrantRevokeAccessVersionTracker = 10261,
  Package = 10262,
  KnowledgeInteractionInsight = 10264,
  KnowledgeSearchInsight = 10265,
  DataLakeFolder = 10266,
  DataLakeFolderPermission = 10267,
  ProvisionLanguageForUser = 10268,
  Catalog = 10270,
  CatalogAssignment = 10271,
  InternalCatalogAssignment = 10272,
  CustomAPI = 10273,
  CustomAPIRequestParameter = 10274,
  CustomAPIResponseProperty = 10275,
  BotContent = 10276,
  ConversationTranscript = 10277,
  Chatbot = 10278,
  Chatbotsubcomponent = 10279,
  KnowledgeFederatedArticle = 10283,
  KnowledgeFederatedArticleIncident = 10284,
  Searchprovider = 10285,
  SearchTelemetry = 10286,
  RevokeInheritedAccessRecordsTracker = 10330,
  SystemUserAuthorizationChangeTracker = 10339,
  OrganizationSetting = 10340,
  OrganizationDataSyncSubscription = 10341,
  OrganizationDataSyncSubscriptionEntity = 10342,
  ModelDrivenAppUserSetting = 10343,
  TeamMobileOfflineProfileMembership = 10344,
  UserMobileOfflineProfileMembership = 10345,
  KeyVaultReference = 10346,
  ManagedIdentity = 10347,
  Notification_3 = 10348,
  AccessRequestDocument = 10349,
  AllegationConcern = 10350,
  AllegationType = 10351,
  ChecklistResponse = 10352,
  ChecklistType = 10353,
  Complaint = 10354,
  DispositionAction = 10355,
  DispositionReason = 10356,
  Event = 10357,
  IndividualComplaint = 10358,
  Industry = 10359,
  Issue = 10360,
  Legislation = 10361,
  Notification = 10362,
  OPCPriority = 10363,
  QuestionTemplate = 10364,
  QuestionType = 10365,
  Recommendation = 10366,
  Reminder = 10367,
  RiskAppetite = 10368,
  RiskAssessment = 10369,
  RiskAssessmentCategory = 10370,
  RiskAssessmentCategoryTemplate = 10371,
  RiskAssessmentDefinition = 10372,
  RiskAssessmentDefinitionTemplate = 10373,
  RiskAssessmentFactorTemplate = 10374,
  RiskAssessmentType = 10375,
  Theme = 10376,
  Topic = 10377,
}
