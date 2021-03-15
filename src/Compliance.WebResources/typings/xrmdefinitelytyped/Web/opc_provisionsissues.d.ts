interface opc_provisionsissues_Base extends WebEntity {
  opc_issueid?: string | null;
  opc_provisionid?: string | null;
  opc_provisionsissuesid?: string | null;
  versionnumber?: number | null;
}
interface opc_provisionsissues_Relationships {
  opc_provisions_issues_provisions?: opc_issue_Result[] | null;
}
interface opc_provisionsissues extends opc_provisionsissues_Base, opc_provisionsissues_Relationships {
}
interface opc_provisionsissues_Create extends opc_provisionsissues {
}
interface opc_provisionsissues_Update extends opc_provisionsissues {
}
interface opc_provisionsissues_Select {
  opc_issueid: WebAttribute<opc_provisionsissues_Select, { opc_issueid: string | null }, {  }>;
  opc_provisionid: WebAttribute<opc_provisionsissues_Select, { opc_provisionid: string | null }, {  }>;
  opc_provisionsissuesid: WebAttribute<opc_provisionsissues_Select, { opc_provisionsissuesid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_provisionsissues_Select, { versionnumber: number | null }, {  }>;
}
interface opc_provisionsissues_Filter {
  opc_issueid: XQW.Guid;
  opc_provisionid: XQW.Guid;
  opc_provisionsissuesid: XQW.Guid;
  versionnumber: number;
}
interface opc_provisionsissues_Expand {
  opc_provisions_issues_provisions: WebExpand<opc_provisionsissues_Expand, opc_issue_Select, opc_issue_Filter, { opc_provisions_issues_provisions: opc_issue_Result[] }>;
}
interface opc_provisionsissues_FormattedResult {
}
interface opc_provisionsissues_Result extends opc_provisionsissues_Base, opc_provisionsissues_Relationships {
  "@odata.etag": string;
}
interface opc_provisionsissues_RelatedOne {
}
interface opc_provisionsissues_RelatedMany {
  opc_provisions_issues_provisions: WebMappingRetrieve<opc_issue_Select,opc_issue_Expand,opc_issue_Filter,opc_issue_Fixed,opc_issue_Result,opc_issue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_provisionsissuesset: WebMappingRetrieve<opc_provisionsissues_Select,opc_provisionsissues_Expand,opc_provisionsissues_Filter,opc_provisionsissues_Fixed,opc_provisionsissues_Result,opc_provisionsissues_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_provisionsissuesset: WebMappingRelated<opc_provisionsissues_RelatedOne,opc_provisionsissues_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_provisionsissuesset: WebMappingCUDA<opc_provisionsissues_Create,opc_provisionsissues_Update,opc_provisionsissues_Select>;
}
