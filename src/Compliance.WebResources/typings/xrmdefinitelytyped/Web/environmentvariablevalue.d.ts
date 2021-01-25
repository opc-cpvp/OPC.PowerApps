interface EnvironmentVariableValue_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  environmentvariablevalueid?: string | null;
  environmentvariablevalueidunique?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  schemaname?: string | null;
  solutionid?: string | null;
  statecode?: environmentvariablevalue_statecode | null;
  statuscode?: environmentvariablevalue_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface EnvironmentVariableValue_Relationships {
  EnvironmentVariableDefinitionId?: EnvironmentVariableDefinition_Result | null;
}
interface EnvironmentVariableValue extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
  EnvironmentVariableDefinitionId_bind$environmentvariabledefinitions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface EnvironmentVariableValue_Create extends EnvironmentVariableValue {
}
interface EnvironmentVariableValue_Update extends EnvironmentVariableValue {
}
interface EnvironmentVariableValue_Select {
  componentstate: WebAttribute<EnvironmentVariableValue_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<EnvironmentVariableValue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EnvironmentVariableValue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EnvironmentVariableValue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  environmentvariabledefinitionid_guid: WebAttribute<EnvironmentVariableValue_Select, { environmentvariabledefinitionid_guid: string | null }, { environmentvariabledefinitionid_formatted?: string }>;
  environmentvariablevalueid: WebAttribute<EnvironmentVariableValue_Select, { environmentvariablevalueid: string | null }, {  }>;
  environmentvariablevalueidunique: WebAttribute<EnvironmentVariableValue_Select, { environmentvariablevalueidunique: string | null }, {  }>;
  importsequencenumber: WebAttribute<EnvironmentVariableValue_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<EnvironmentVariableValue_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<EnvironmentVariableValue_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<EnvironmentVariableValue_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<EnvironmentVariableValue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EnvironmentVariableValue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EnvironmentVariableValue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<EnvironmentVariableValue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<EnvironmentVariableValue_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<EnvironmentVariableValue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<EnvironmentVariableValue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<EnvironmentVariableValue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<EnvironmentVariableValue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  schemaname: WebAttribute<EnvironmentVariableValue_Select, { schemaname: string | null }, {  }>;
  solutionid: WebAttribute<EnvironmentVariableValue_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<EnvironmentVariableValue_Select, { statecode: environmentvariablevalue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<EnvironmentVariableValue_Select, { statuscode: environmentvariablevalue_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<EnvironmentVariableValue_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<EnvironmentVariableValue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<EnvironmentVariableValue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  value: WebAttribute<EnvironmentVariableValue_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<EnvironmentVariableValue_Select, { versionnumber: number | null }, {  }>;
}
interface EnvironmentVariableValue_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  environmentvariabledefinitionid_guid: XQW.Guid;
  environmentvariablevalueid: XQW.Guid;
  environmentvariablevalueidunique: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  schemaname: string;
  solutionid: XQW.Guid;
  statecode: environmentvariablevalue_statecode;
  statuscode: environmentvariablevalue_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  value: string;
  versionnumber: number;
}
interface EnvironmentVariableValue_Expand {
  EnvironmentVariableDefinitionId: WebExpand<EnvironmentVariableValue_Expand, EnvironmentVariableDefinition_Select, EnvironmentVariableDefinition_Filter, { EnvironmentVariableDefinitionId: EnvironmentVariableDefinition_Result }>;
  createdby: WebExpand<EnvironmentVariableValue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EnvironmentVariableValue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<EnvironmentVariableValue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EnvironmentVariableValue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<EnvironmentVariableValue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<EnvironmentVariableValue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<EnvironmentVariableValue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface EnvironmentVariableValue_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  environmentvariabledefinitionid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface EnvironmentVariableValue_Result extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  environmentvariabledefinitionid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface EnvironmentVariableValue_RelatedOne {
  EnvironmentVariableDefinitionId: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface EnvironmentVariableValue_RelatedMany {
}
interface WebEntitiesRetrieve {
  environmentvariablevalues: WebMappingRetrieve<EnvironmentVariableValue_Select,EnvironmentVariableValue_Expand,EnvironmentVariableValue_Filter,EnvironmentVariableValue_Fixed,EnvironmentVariableValue_Result,EnvironmentVariableValue_FormattedResult>;
}
interface WebEntitiesRelated {
  environmentvariablevalues: WebMappingRelated<EnvironmentVariableValue_RelatedOne,EnvironmentVariableValue_RelatedMany>;
}
interface WebEntitiesCUDA {
  environmentvariablevalues: WebMappingCUDA<EnvironmentVariableValue_Create,EnvironmentVariableValue_Update,EnvironmentVariableValue_Select>;
}
