interface opc_QuestionType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_islocalizable?: boolean | null;
  opc_name?: string | null;
  opc_nameenglish?: string | null;
  opc_namefrench?: string | null;
  opc_questiontypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_questiontype_statecode | null;
  statuscode?: opc_questiontype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_QuestionType_Relationships {
  opc_questiontype_questiontemplates_questionty?: opc_QuestionTemplate_Result[] | null;
}
interface opc_QuestionType extends opc_QuestionType_Base, opc_QuestionType_Relationships {
}
interface opc_QuestionType_Create extends opc_QuestionType {
}
interface opc_QuestionType_Update extends opc_QuestionType {
}
interface opc_QuestionType_Select {
  createdby_guid: WebAttribute<opc_QuestionType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_QuestionType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_QuestionType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_QuestionType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_QuestionType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_QuestionType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_QuestionType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_islocalizable: WebAttribute<opc_QuestionType_Select, { opc_islocalizable: boolean | null }, {  }>;
  opc_name: WebAttribute<opc_QuestionType_Select, { opc_name: string | null }, {  }>;
  opc_nameenglish: WebAttribute<opc_QuestionType_Select, { opc_nameenglish: string | null }, {  }>;
  opc_namefrench: WebAttribute<opc_QuestionType_Select, { opc_namefrench: string | null }, {  }>;
  opc_questiontypeid: WebAttribute<opc_QuestionType_Select, { opc_questiontypeid: string | null }, {  }>;
  organizationid_guid: WebAttribute<opc_QuestionType_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_QuestionType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<opc_QuestionType_Select, { statecode: opc_questiontype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_QuestionType_Select, { statuscode: opc_questiontype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_QuestionType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_QuestionType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_QuestionType_Select, { versionnumber: number | null }, {  }>;
}
interface opc_QuestionType_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_islocalizable: boolean;
  opc_name: string;
  opc_nameenglish: string;
  opc_namefrench: string;
  opc_questiontypeid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: opc_questiontype_statecode;
  statuscode: opc_questiontype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_QuestionType_Expand {
  createdby: WebExpand<opc_QuestionType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_QuestionType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_QuestionType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_QuestionType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opc_questiontype_questiontemplates_questionty: WebExpand<opc_QuestionType_Expand, opc_QuestionTemplate_Select, opc_QuestionTemplate_Filter, { opc_questiontype_questiontemplates_questionty: opc_QuestionTemplate_Result[] }>;
}
interface opc_QuestionType_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_QuestionType_Result extends opc_QuestionType_Base, opc_QuestionType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface opc_QuestionType_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_QuestionType_RelatedMany {
  opc_questiontype_questiontemplates_questionty: WebMappingRetrieve<opc_QuestionTemplate_Select,opc_QuestionTemplate_Expand,opc_QuestionTemplate_Filter,opc_QuestionTemplate_Fixed,opc_QuestionTemplate_Result,opc_QuestionTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_questiontypes: WebMappingRetrieve<opc_QuestionType_Select,opc_QuestionType_Expand,opc_QuestionType_Filter,opc_QuestionType_Fixed,opc_QuestionType_Result,opc_QuestionType_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_questiontypes: WebMappingRelated<opc_QuestionType_RelatedOne,opc_QuestionType_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_questiontypes: WebMappingCUDA<opc_QuestionType_Create,opc_QuestionType_Update,opc_QuestionType_Select>;
}
