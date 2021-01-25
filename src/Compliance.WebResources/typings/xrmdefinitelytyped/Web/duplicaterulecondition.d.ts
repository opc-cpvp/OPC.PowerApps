interface DuplicateRuleCondition_Base extends WebEntity {
  baseattributename?: string | null;
  createdon?: Date | null;
  duplicateruleconditionid?: string | null;
  ignoreblankvalues?: boolean | null;
  matchingattributename?: string | null;
  modifiedon?: Date | null;
  operatorcode?: duplicaterulecondition_operatorcode | null;
  operatorparam?: number | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
}
interface DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Create extends DuplicateRuleCondition {
  regardingobjectid_bind$duplicaterules?: string | null;
}
interface DuplicateRuleCondition_Update extends DuplicateRuleCondition {
}
interface DuplicateRuleCondition_Select {
  baseattributename: WebAttribute<DuplicateRuleCondition_Select, { baseattributename: string | null }, {  }>;
  createdby_guid: WebAttribute<DuplicateRuleCondition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DuplicateRuleCondition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DuplicateRuleCondition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duplicateruleconditionid: WebAttribute<DuplicateRuleCondition_Select, { duplicateruleconditionid: string | null }, {  }>;
  ignoreblankvalues: WebAttribute<DuplicateRuleCondition_Select, { ignoreblankvalues: boolean | null }, {  }>;
  matchingattributename: WebAttribute<DuplicateRuleCondition_Select, { matchingattributename: string | null }, {  }>;
  modifiedby_guid: WebAttribute<DuplicateRuleCondition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DuplicateRuleCondition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DuplicateRuleCondition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  operatorcode: WebAttribute<DuplicateRuleCondition_Select, { operatorcode: duplicaterulecondition_operatorcode | null }, { operatorcode_formatted?: string }>;
  operatorparam: WebAttribute<DuplicateRuleCondition_Select, { operatorparam: number | null }, {  }>;
  ownerid_guid: WebAttribute<DuplicateRuleCondition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<DuplicateRuleCondition_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<DuplicateRuleCondition_Select, { owninguser: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<DuplicateRuleCondition_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
}
interface DuplicateRuleCondition_Filter {
  baseattributename: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duplicateruleconditionid: XQW.Guid;
  ignoreblankvalues: boolean;
  matchingattributename: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  operatorcode: duplicaterulecondition_operatorcode;
  operatorparam: number;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
}
interface DuplicateRuleCondition_Expand {
  createdby: WebExpand<DuplicateRuleCondition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DuplicateRuleCondition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<DuplicateRuleCondition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DuplicateRuleCondition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  regardingobjectid: WebExpand<DuplicateRuleCondition_Expand, DuplicateRule_Select, DuplicateRule_Filter, { regardingobjectid: DuplicateRule_Result }>;
}
interface DuplicateRuleCondition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  operatorcode_formatted?: string;
  ownerid_formatted?: string;
  regardingobjectid_formatted?: string;
}
interface DuplicateRuleCondition_Result extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface DuplicateRuleCondition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid: WebMappingRetrieve<DuplicateRule_Select,DuplicateRule_Expand,DuplicateRule_Filter,DuplicateRule_Fixed,DuplicateRule_Result,DuplicateRule_FormattedResult>;
}
interface DuplicateRuleCondition_RelatedMany {
}
interface WebEntitiesRetrieve {
  duplicateruleconditions: WebMappingRetrieve<DuplicateRuleCondition_Select,DuplicateRuleCondition_Expand,DuplicateRuleCondition_Filter,DuplicateRuleCondition_Fixed,DuplicateRuleCondition_Result,DuplicateRuleCondition_FormattedResult>;
}
interface WebEntitiesRelated {
  duplicateruleconditions: WebMappingRelated<DuplicateRuleCondition_RelatedOne,DuplicateRuleCondition_RelatedMany>;
}
interface WebEntitiesCUDA {
  duplicateruleconditions: WebMappingCUDA<DuplicateRuleCondition_Create,DuplicateRuleCondition_Update,DuplicateRuleCondition_Select>;
}
