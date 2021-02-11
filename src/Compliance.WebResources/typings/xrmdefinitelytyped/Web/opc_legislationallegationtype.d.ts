interface opc_legislationallegationtype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_islocalizable?: boolean | null;
  opc_legislationallegationtypeid?: string | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_legislationallegationtype_statecode | null;
  statuscode?: opc_legislationallegationtype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_legislationallegationtype_Relationships {
  opc_checklisttype_legislationallegationtype?: opc_ChecklistType_Result[] | null;
}
interface opc_legislationallegationtype extends opc_legislationallegationtype_Base, opc_legislationallegationtype_Relationships {
  opc_allegationtype_bind$opc_allegationtypes?: string | null;
  opc_leglislation_bind$opc_legislations?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface opc_legislationallegationtype_Create extends opc_legislationallegationtype {
}
interface opc_legislationallegationtype_Update extends opc_legislationallegationtype {
}
interface opc_legislationallegationtype_Select {
  createdby_guid: WebAttribute<opc_legislationallegationtype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_legislationallegationtype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_legislationallegationtype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_legislationallegationtype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_legislationallegationtype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_legislationallegationtype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_legislationallegationtype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_allegationtype_guid: WebAttribute<opc_legislationallegationtype_Select, { opc_allegationtype_guid: string | null }, { opc_allegationtype_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_legislationallegationtype_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_legislationallegationtypeid: WebAttribute<opc_legislationallegationtype_Select, { opc_legislationallegationtypeid: string | null }, {  }>;
  opc_leglislation_guid: WebAttribute<opc_legislationallegationtype_Select, { opc_leglislation_guid: string | null }, { opc_leglislation_formatted?: string }>;
  opc_name: WebAttribute<opc_legislationallegationtype_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_legislationallegationtype_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_legislationallegationtype_Select, { opc_namefrench: string | null }, {  }>;
  overriddencreatedon: WebAttribute<opc_legislationallegationtype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<opc_legislationallegationtype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<opc_legislationallegationtype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<opc_legislationallegationtype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<opc_legislationallegationtype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<opc_legislationallegationtype_Select, { statecode: opc_legislationallegationtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_legislationallegationtype_Select, { statuscode: opc_legislationallegationtype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_legislationallegationtype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_legislationallegationtype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_legislationallegationtype_Select, { versionnumber: number | null }, {  }>;
}
interface opc_legislationallegationtype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_allegationtype_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_legislationallegationtypeid: XQW.Guid;
  opc_leglislation_guid: XQW.Guid;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: opc_legislationallegationtype_statecode;
  statuscode: opc_legislationallegationtype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_legislationallegationtype_Expand {
  createdby: WebExpand<opc_legislationallegationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_legislationallegationtype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_legislationallegationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_legislationallegationtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_allegationtype: WebExpand<opc_legislationallegationtype_Expand, opc_allegationtype_Select, opc_allegationtype_Filter, { opc_allegationtype: opc_allegationtype_Result }>;
  opc_checklisttype_legislationallegationtype: WebExpand<opc_legislationallegationtype_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { opc_checklisttype_legislationallegationtype: opc_ChecklistType_Result[] }>;
  opc_leglislation: WebExpand<opc_legislationallegationtype_Expand, opc_legislation_Select, opc_legislation_Filter, { opc_leglislation: opc_legislation_Result }>;
  ownerid: WebExpand<opc_legislationallegationtype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningteam: WebExpand<opc_legislationallegationtype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<opc_legislationallegationtype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface opc_legislationallegationtype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_allegationtype_formatted?: string;
  opc_leglislation_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_legislationallegationtype_Result extends opc_legislationallegationtype_Base, opc_legislationallegationtype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opc_allegationtype_guid: string | null;
  opc_leglislation_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface opc_legislationallegationtype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opc_allegationtype: WebMappingRetrieve<opc_allegationtype_Select,opc_allegationtype_Expand,opc_allegationtype_Filter,opc_allegationtype_Fixed,opc_allegationtype_Result,opc_allegationtype_FormattedResult>;
  opc_leglislation: WebMappingRetrieve<opc_legislation_Select,opc_legislation_Expand,opc_legislation_Filter,opc_legislation_Fixed,opc_legislation_Result,opc_legislation_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_legislationallegationtype_RelatedMany {
  opc_checklisttype_legislationallegationtype: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_legislationallegationtypes: WebMappingRetrieve<opc_legislationallegationtype_Select,opc_legislationallegationtype_Expand,opc_legislationallegationtype_Filter,opc_legislationallegationtype_Fixed,opc_legislationallegationtype_Result,opc_legislationallegationtype_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_legislationallegationtypes: WebMappingRelated<opc_legislationallegationtype_RelatedOne,opc_legislationallegationtype_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_legislationallegationtypes: WebMappingCUDA<opc_legislationallegationtype_Create,opc_legislationallegationtype_Update,opc_legislationallegationtype_Select>;
}
