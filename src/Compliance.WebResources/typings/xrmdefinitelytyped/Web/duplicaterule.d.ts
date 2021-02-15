interface DuplicateRule_Base extends WebEntity {
  baseentitymatchcodetable?: string | null;
  baseentityname?: string | null;
  baseentitytypecode?: duplicaterule_baseentitytypecode | null;
  createdon?: Date | null;
  description?: string | null;
  duplicateruleid?: string | null;
  excludeinactiverecords?: boolean | null;
  iscasesensitive?: boolean | null;
  matchingentitymatchcodetable?: string | null;
  matchingentityname?: string | null;
  matchingentitytypecode?: duplicaterule_matchingentitytypecode | null;
  modifiedon?: Date | null;
  name?: string | null;
  statecode?: duplicaterule_statecode | null;
  statuscode?: duplicaterule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface DuplicateRule_Relationships {
  DuplicateRule_DuplicateRuleConditions?: DuplicateRuleCondition_Result[] | null;
}
interface DuplicateRule extends DuplicateRule_Base, DuplicateRule_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface DuplicateRule_Create extends DuplicateRule {
}
interface DuplicateRule_Update extends DuplicateRule {
}
interface DuplicateRule_Select {
  baseentitymatchcodetable: WebAttribute<DuplicateRule_Select, { baseentitymatchcodetable: string | null }, {  }>;
  baseentityname: WebAttribute<DuplicateRule_Select, { baseentityname: string | null }, {  }>;
  baseentitytypecode: WebAttribute<DuplicateRule_Select, { baseentitytypecode: duplicaterule_baseentitytypecode | null }, { baseentitytypecode_formatted?: string }>;
  createdby_guid: WebAttribute<DuplicateRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DuplicateRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DuplicateRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<DuplicateRule_Select, { description: string | null }, {  }>;
  duplicateruleid: WebAttribute<DuplicateRule_Select, { duplicateruleid: string | null }, {  }>;
  excludeinactiverecords: WebAttribute<DuplicateRule_Select, { excludeinactiverecords: boolean | null }, {  }>;
  iscasesensitive: WebAttribute<DuplicateRule_Select, { iscasesensitive: boolean | null }, {  }>;
  matchingentitymatchcodetable: WebAttribute<DuplicateRule_Select, { matchingentitymatchcodetable: string | null }, {  }>;
  matchingentityname: WebAttribute<DuplicateRule_Select, { matchingentityname: string | null }, {  }>;
  matchingentitytypecode: WebAttribute<DuplicateRule_Select, { matchingentitytypecode: duplicaterule_matchingentitytypecode | null }, { matchingentitytypecode_formatted?: string }>;
  modifiedby_guid: WebAttribute<DuplicateRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DuplicateRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DuplicateRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<DuplicateRule_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<DuplicateRule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<DuplicateRule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<DuplicateRule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<DuplicateRule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<DuplicateRule_Select, { statecode: duplicaterule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<DuplicateRule_Select, { statuscode: duplicaterule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<DuplicateRule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<DuplicateRule_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface DuplicateRule_Filter {
  baseentitymatchcodetable: string;
  baseentityname: string;
  baseentitytypecode: duplicaterule_baseentitytypecode;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  duplicateruleid: XQW.Guid;
  excludeinactiverecords: boolean;
  iscasesensitive: boolean;
  matchingentitymatchcodetable: string;
  matchingentityname: string;
  matchingentitytypecode: duplicaterule_matchingentitytypecode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: duplicaterule_statecode;
  statuscode: duplicaterule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface DuplicateRule_Expand {
  DuplicateRule_DuplicateRuleConditions: WebExpand<DuplicateRule_Expand, DuplicateRuleCondition_Select, DuplicateRuleCondition_Filter, { DuplicateRule_DuplicateRuleConditions: DuplicateRuleCondition_Result[] }>;
  createdby: WebExpand<DuplicateRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DuplicateRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<DuplicateRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DuplicateRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<DuplicateRule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<DuplicateRule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<DuplicateRule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface DuplicateRule_FormattedResult {
  baseentitytypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  matchingentitytypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface DuplicateRule_Result extends DuplicateRule_Base, DuplicateRule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface DuplicateRule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface DuplicateRule_RelatedMany {
  DuplicateRule_DuplicateRuleConditions: WebMappingRetrieve<DuplicateRuleCondition_Select,DuplicateRuleCondition_Expand,DuplicateRuleCondition_Filter,DuplicateRuleCondition_Fixed,DuplicateRuleCondition_Result,DuplicateRuleCondition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  duplicaterules: WebMappingRetrieve<DuplicateRule_Select,DuplicateRule_Expand,DuplicateRule_Filter,DuplicateRule_Fixed,DuplicateRule_Result,DuplicateRule_FormattedResult>;
}
interface WebEntitiesRelated {
  duplicaterules: WebMappingRelated<DuplicateRule_RelatedOne,DuplicateRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  duplicaterules: WebMappingCUDA<DuplicateRule_Create,DuplicateRule_Update,DuplicateRule_Select>;
}
