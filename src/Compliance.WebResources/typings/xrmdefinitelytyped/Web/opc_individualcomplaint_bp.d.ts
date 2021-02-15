interface opc_individualcomplaint_bp_Base extends WebEntity {
  activestagestartedon?: Date | null;
  bpf_duration?: number | null;
  bpf_name?: string | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opc_activestagecategory?: processstage_category | null;
  overriddencreatedon?: Date | null;
  statecode?: opc_individualcomplaint_bp_statecode | null;
  statuscode?: opc_individualcomplaint_bp_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface opc_individualcomplaint_bp_Relationships {
}
interface opc_individualcomplaint_bp extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_opc_complaintid_bind$opc_complaints?: string | null;
  processid_bind$workflows?: string | null;
}
interface opc_individualcomplaint_bp_Create extends opc_individualcomplaint_bp {
}
interface opc_individualcomplaint_bp_Update extends opc_individualcomplaint_bp {
}
interface opc_individualcomplaint_bp_Select {
  activestageid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<opc_individualcomplaint_bp_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_duration: WebAttribute<opc_individualcomplaint_bp_Select, { bpf_duration: number | null }, {  }>;
  bpf_name: WebAttribute<opc_individualcomplaint_bp_Select, { bpf_name: string | null }, {  }>;
  bpf_opc_complaintid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { bpf_opc_complaintid_guid: string | null }, { bpf_opc_complaintid_formatted?: string }>;
  businessprocessflowinstanceid: WebAttribute<opc_individualcomplaint_bp_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<opc_individualcomplaint_bp_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<opc_individualcomplaint_bp_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<opc_individualcomplaint_bp_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<opc_individualcomplaint_bp_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<opc_individualcomplaint_bp_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opc_activestagecategory: WebAttribute<opc_individualcomplaint_bp_Select, { opc_activestagecategory: processstage_category | null }, { opc_activestagecategory_formatted?: string }>;
  organizationid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<opc_individualcomplaint_bp_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<opc_individualcomplaint_bp_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<opc_individualcomplaint_bp_Select, { statecode: opc_individualcomplaint_bp_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<opc_individualcomplaint_bp_Select, { statuscode: opc_individualcomplaint_bp_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<opc_individualcomplaint_bp_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<opc_individualcomplaint_bp_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<opc_individualcomplaint_bp_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<opc_individualcomplaint_bp_Select, { versionnumber: number | null }, {  }>;
}
interface opc_individualcomplaint_bp_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_duration: number;
  bpf_name: string;
  bpf_opc_complaintid_guid: XQW.Guid;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opc_activestagecategory: processstage_category;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: opc_individualcomplaint_bp_statecode;
  statuscode: opc_individualcomplaint_bp_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface opc_individualcomplaint_bp_Expand {
  bpf_opc_complaintid: WebExpand<opc_individualcomplaint_bp_Expand, opc_complaint_Select, opc_complaint_Filter, { bpf_opc_complaintid: opc_complaint_Result }>;
  createdby: WebExpand<opc_individualcomplaint_bp_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<opc_individualcomplaint_bp_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<opc_individualcomplaint_bp_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<opc_individualcomplaint_bp_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
}
interface opc_individualcomplaint_bp_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_opc_complaintid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opc_activestagecategory_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface opc_individualcomplaint_bp_Result extends opc_individualcomplaint_bp_Base, opc_individualcomplaint_bp_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_opc_complaintid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
}
interface opc_individualcomplaint_bp_RelatedOne {
  bpf_opc_complaintid: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface opc_individualcomplaint_bp_RelatedMany {
}
interface WebEntitiesRetrieve {
  opc_individualcomplaint_bps: WebMappingRetrieve<opc_individualcomplaint_bp_Select,opc_individualcomplaint_bp_Expand,opc_individualcomplaint_bp_Filter,opc_individualcomplaint_bp_Fixed,opc_individualcomplaint_bp_Result,opc_individualcomplaint_bp_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_individualcomplaint_bps: WebMappingRelated<opc_individualcomplaint_bp_RelatedOne,opc_individualcomplaint_bp_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_individualcomplaint_bps: WebMappingCUDA<opc_individualcomplaint_bp_Create,opc_individualcomplaint_bp_Update,opc_individualcomplaint_bp_Select>;
}
