interface opc_allegationsrelatedissues_Base extends WebEntity {
  opc_allegationid?: string | null;
  opc_allegationsrelatedissuesid?: string | null;
  opc_issueid?: string | null;
  versionnumber?: number | null;
}
interface opc_allegationsrelatedissues_Relationships {
  opc_allegations_issues_relatedissues?: opc_allegation_Result[] | null;
}
interface opc_allegationsrelatedissues extends opc_allegationsrelatedissues_Base, opc_allegationsrelatedissues_Relationships {
}
interface opc_allegationsrelatedissues_Create extends opc_allegationsrelatedissues {
}
interface opc_allegationsrelatedissues_Update extends opc_allegationsrelatedissues {
}
interface opc_allegationsrelatedissues_Select {
  opc_allegationid: WebAttribute<opc_allegationsrelatedissues_Select, { opc_allegationid: string | null }, {  }>;
  opc_allegationsrelatedissuesid: WebAttribute<opc_allegationsrelatedissues_Select, { opc_allegationsrelatedissuesid: string | null }, {  }>;
  opc_issueid: WebAttribute<opc_allegationsrelatedissues_Select, { opc_issueid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_allegationsrelatedissues_Select, { versionnumber: number | null }, {  }>;
}
interface opc_allegationsrelatedissues_Filter {
  opc_allegationid: XQW.Guid;
  opc_allegationsrelatedissuesid: XQW.Guid;
  opc_issueid: XQW.Guid;
  versionnumber: number;
}
interface opc_allegationsrelatedissues_Expand {
  opc_allegations_issues_relatedissues: WebExpand<opc_allegationsrelatedissues_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegations_issues_relatedissues: opc_allegation_Result[] }>;
}
interface opc_allegationsrelatedissues_FormattedResult {
}
interface opc_allegationsrelatedissues_Result extends opc_allegationsrelatedissues_Base, opc_allegationsrelatedissues_Relationships {
  "@odata.etag": string;
}
interface opc_allegationsrelatedissues_RelatedOne {
}
interface opc_allegationsrelatedissues_RelatedMany {
  opc_allegations_issues_relatedissues: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_allegationsrelatedissuesset: WebMappingRetrieve<opc_allegationsrelatedissues_Select,opc_allegationsrelatedissues_Expand,opc_allegationsrelatedissues_Filter,opc_allegationsrelatedissues_Fixed,opc_allegationsrelatedissues_Result,opc_allegationsrelatedissues_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_allegationsrelatedissuesset: WebMappingRelated<opc_allegationsrelatedissues_RelatedOne,opc_allegationsrelatedissues_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_allegationsrelatedissuesset: WebMappingCUDA<opc_allegationsrelatedissues_Create,opc_allegationsrelatedissues_Update,opc_allegationsrelatedissues_Select>;
}
