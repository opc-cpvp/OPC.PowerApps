interface opc_complaintsrelatedtopics_Base extends WebEntity {
  opc_complaintid?: string | null;
  opc_complaintsrelatedtopicsid?: string | null;
  opc_topicid?: string | null;
  versionnumber?: number | null;
}
interface opc_complaintsrelatedtopics_Relationships {
  opc_complaints_topics_relatedtopics?: opc_complaint_Result[] | null;
}
interface opc_complaintsrelatedtopics extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
}
interface opc_complaintsrelatedtopics_Create extends opc_complaintsrelatedtopics {
}
interface opc_complaintsrelatedtopics_Update extends opc_complaintsrelatedtopics {
}
interface opc_complaintsrelatedtopics_Select {
  opc_complaintid: WebAttribute<opc_complaintsrelatedtopics_Select, { opc_complaintid: string | null }, {  }>;
  opc_complaintsrelatedtopicsid: WebAttribute<opc_complaintsrelatedtopics_Select, { opc_complaintsrelatedtopicsid: string | null }, {  }>;
  opc_topicid: WebAttribute<opc_complaintsrelatedtopics_Select, { opc_topicid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_complaintsrelatedtopics_Select, { versionnumber: number | null }, {  }>;
}
interface opc_complaintsrelatedtopics_Filter {
  opc_complaintid: XQW.Guid;
  opc_complaintsrelatedtopicsid: XQW.Guid;
  opc_topicid: XQW.Guid;
  versionnumber: number;
}
interface opc_complaintsrelatedtopics_Expand {
  opc_complaints_topics_relatedtopics: WebExpand<opc_complaintsrelatedtopics_Expand, opc_complaint_Select, opc_complaint_Filter, { opc_complaints_topics_relatedtopics: opc_complaint_Result[] }>;
}
interface opc_complaintsrelatedtopics_FormattedResult {
}
interface opc_complaintsrelatedtopics_Result extends opc_complaintsrelatedtopics_Base, opc_complaintsrelatedtopics_Relationships {
  "@odata.etag": string;
}
interface opc_complaintsrelatedtopics_RelatedOne {
}
interface opc_complaintsrelatedtopics_RelatedMany {
  opc_complaints_topics_relatedtopics: WebMappingRetrieve<opc_complaint_Select,opc_complaint_Expand,opc_complaint_Filter,opc_complaint_Fixed,opc_complaint_Result,opc_complaint_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_complaintsrelatedtopicsset: WebMappingRetrieve<opc_complaintsrelatedtopics_Select,opc_complaintsrelatedtopics_Expand,opc_complaintsrelatedtopics_Filter,opc_complaintsrelatedtopics_Fixed,opc_complaintsrelatedtopics_Result,opc_complaintsrelatedtopics_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_complaintsrelatedtopicsset: WebMappingRelated<opc_complaintsrelatedtopics_RelatedOne,opc_complaintsrelatedtopics_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_complaintsrelatedtopicsset: WebMappingCUDA<opc_complaintsrelatedtopics_Create,opc_complaintsrelatedtopics_Update,opc_complaintsrelatedtopics_Select>;
}
