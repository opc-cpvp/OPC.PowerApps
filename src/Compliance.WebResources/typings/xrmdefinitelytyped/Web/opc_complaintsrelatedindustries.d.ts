interface opc_complaintsrelatedindustries_Base extends WebEntity {
  opc_complaintid?: string | null;
  opc_complaintsrelatedindustriesid?: string | null;
  opc_industryid?: string | null;
  versionnumber?: number | null;
}
interface opc_complaintsrelatedindustries_Relationships {
  opc_complaints_industries_relatedindustries?: opc_complaint_Result[] | null;
}
interface opc_complaintsrelatedindustries extends opc_complaintsrelatedindustries_Base, opc_complaintsrelatedindustries_Relationships {
}
interface opc_complaintsrelatedindustries_Create extends opc_complaintsrelatedindustries {
}
interface opc_complaintsrelatedindustries_Update extends opc_complaintsrelatedindustries {
}
interface opc_complaintsrelatedindustries_Select {
  opc_complaintid: WebAttribute<opc_complaintsrelatedindustries_Select, { opc_complaintid: string | null }, {  }>;
  opc_complaintsrelatedindustriesid: WebAttribute<opc_complaintsrelatedindustries_Select, { opc_complaintsrelatedindustriesid: string | null }, {  }>;
  opc_industryid: WebAttribute<opc_complaintsrelatedindustries_Select, { opc_industryid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_complaintsrelatedindustries_Select, { versionnumber: number | null }, {  }>;
}
interface opc_complaintsrelatedindustries_Filter {
  opc_complaintid: XQW.Guid;
  opc_complaintsrelatedindustriesid: XQW.Guid;
  opc_industryid: XQW.Guid;
  versionnumber: number;
}
interface opc_complaintsrelatedindustries_Expand {
  opc_complaints_industries_relatedindustries: WebExpand<opc_complaintsrelatedindustries_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaints_industries_relatedindustries: opc_complaint_Result[] }>;
}
interface opc_complaintsrelatedindustries_FormattedResult {
}
interface opc_complaintsrelatedindustries_Result extends opc_complaintsrelatedindustries_Base, opc_complaintsrelatedindustries_Relationships {
  "@odata.etag": string;
}
interface opc_complaintsrelatedindustries_RelatedOne {
}
interface opc_complaintsrelatedindustries_RelatedMany {
  opc_complaints_industries_relatedindustries: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_complaintsrelatedindustriesset: WebMappingRetrieve<opc_complaintsrelatedindustries_Select,opc_complaintsrelatedindustries_Expand,opc_complaintsrelatedindustries_Filter,opc_complaintsrelatedindustries_Fixed,opc_complaintsrelatedindustries_Result,opc_complaintsrelatedindustries_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_complaintsrelatedindustriesset: WebMappingRelated<opc_complaintsrelatedindustries_RelatedOne,opc_complaintsrelatedindustries_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_complaintsrelatedindustriesset: WebMappingCUDA<opc_complaintsrelatedindustries_Create,opc_complaintsrelatedindustries_Update,opc_complaintsrelatedindustries_Select>;
}
