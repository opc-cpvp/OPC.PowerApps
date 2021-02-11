declare const enum duplicaterule_baseentitytypecode {
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
  SystemUserAuthorizationChangeTracker = 60,
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
  Notification = 4110,
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
  SolutionComponentRelationshipConfiguration = 10004,
  ComponentLayer = 10005,
  ComponentLayerDataSource = 10006,
  Package = 10007,
  StageSolutionUpload = 10009,
  ExportSolutionUpload = 10010,
  SolutionComponentSummary = 10011,
  SolutionComponentDataSource = 10012,
  ProvisionLanguageForUser = 10013,
  DataLakeFolder = 10014,
  DataLakeFolderPermission = 10015,
  DataLakeWorkspace = 10016,
  DataLakeWorkspacePermission = 10017,
  CascadeGrantRevokeAccessRecordsTracker = 10018,
  CascadeGrantRevokeAccessVersionTracker = 10019,
  ApplicationUser = 10021,
  ModelDrivenAppElement = 10024,
  ModelDrivenAppComponentNodesEdge = 10025,
  ModelDrivenAppComponentNode = 10026,
  ModelDrivenAppSetting = 10027,
  ModelDrivenAppUserSetting = 10028,
  OrganizationSetting = 10029,
  SettingDefinition = 10030,
  CanvasAppExtendedMetadata = 10031,
  ODatav4DataSource = 10032,
  ProcessStageParameter = 10033,
  WorkflowBinary = 10034,
  ConnectionReference = 10035,
  HelpPage = 10036,
  BotContent = 10037,
  ConversationTranscript = 10038,
  Chatbot = 10039,
  Chatbotsubcomponent = 10040,
  PDFSetting = 10044,
  ServiceConfiguration = 10045,
  SLAKPI = 10046,
  KnowledgeFederatedArticle = 10047,
  KnowledgeFederatedArticleIncident = 10048,
  Searchprovider = 10049,
  KnowledgeArticleImage = 10050,
  KnowledgeInteractionInsight = 10051,
  KnowledgeSearchInsight = 10052,
  KnowledgeArticleTemplate = 10053,
  Catalog = 10054,
  CatalogAssignment = 10055,
  InternalCatalogAssignment = 10056,
  CustomAPI = 10057,
  CustomAPIRequestParameter = 10058,
  CustomAPIResponseProperty = 10059,
  TeamMobileOfflineProfileMembership = 10060,
  UserMobileOfflineProfileMembership = 10061,
  OrganizationDataSyncSubscription = 10062,
  OrganizationDataSyncSubscriptionEntity = 10063,
  RichTextAttachment = 10064,
  NonRelationalDataSource = 10065,
  SearchTelemetry = 10066,
  AIBuilderDataset = 10067,
  AIBuilderDatasetFile = 10068,
  AIBuilderDatasetRecord = 10069,
  AIBuilderDatasetsContainer = 10070,
  AIBuilderFile = 10071,
  AIBuilderFileAttachedData = 10072,
  AIFormProcessingDocument = 10073,
  AIObjectDetectionImage = 10074,
  AIObjectDetectionLabel = 10075,
  AIObjectDetectionBoundingBox = 10076,
  AIObjectDetectionImageMapping = 10077,
  AnalysisComponent = 10079,
  AnalysisJob = 10080,
  AnalysisResult = 10081,
  AnalysisResultDetail = 10082,
  SolutionHealthRule = 10083,
  SolutionHealthRuleArgument = 10084,
  SolutionHealthRuleSet = 10085,
  AccessRequestDocument = 10086,
  AllegationConcern = 10087,
  AllegationType = 10088,
  ChecklistResponse = 10089,
  ChecklistType = 10090,
  Complaint = 10091,
  DispositionAction = 10092,
  DispositionReason = 10093,
  Event = 10094,
  IndividualComplaint = 10095,
  Industry = 10096,
  Issue = 10097,
  Legislation = 10098,
  Notification_2 = 10099,
  OPCPriority = 10100,
  QuestionTemplate = 10101,
  QuestionType = 10102,
  Recommendation = 10103,
  Reminder = 10104,
  RiskAppetite = 10105,
  RiskAssessment = 10106,
  RiskAssessmentCategory = 10107,
  RiskAssessmentCategoryTemplate = 10108,
  RiskAssessmentDefinition = 10109,
  RiskAssessmentDefinitionTemplate = 10110,
  RiskAssessmentFactorTemplate = 10111,
  RiskAssessmentType = 10112,
  Theme = 10113,
  Topic = 10114,
  LegislationAllegationType = 10120,
  PersonalInformationType = 10121,
  RevokeInheritedAccessRecordsTracker = 90001,
}
