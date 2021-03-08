interface opc_allegations_personalinformationtypes_Base extends WebEntity {
  opc_allegationid?: string | null;
  opc_allegations_personalinformationtypesid?: string | null;
  opc_personalinformationtypeid?: string | null;
  versionnumber?: number | null;
}
interface opc_allegations_personalinformationtypes_Relationships {
  opc_allegations_personalinformationtypes?: opc_allegation_Result[] | null;
}
interface opc_allegations_personalinformationtypes extends opc_allegations_personalinformationtypes_Base, opc_allegations_personalinformationtypes_Relationships {
}
interface opc_allegations_personalinformationtypes_Create extends opc_allegations_personalinformationtypes {
}
interface opc_allegations_personalinformationtypes_Update extends opc_allegations_personalinformationtypes {
}
interface opc_allegations_personalinformationtypes_Select {
  opc_allegationid: WebAttribute<opc_allegations_personalinformationtypes_Select, { opc_allegationid: string | null }, {  }>;
  opc_allegations_personalinformationtypesid: WebAttribute<opc_allegations_personalinformationtypes_Select, { opc_allegations_personalinformationtypesid: string | null }, {  }>;
  opc_personalinformationtypeid: WebAttribute<opc_allegations_personalinformationtypes_Select, { opc_personalinformationtypeid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_allegations_personalinformationtypes_Select, { versionnumber: number | null }, {  }>;
}
interface opc_allegations_personalinformationtypes_Filter {
  opc_allegationid: XQW.Guid;
  opc_allegations_personalinformationtypesid: XQW.Guid;
  opc_personalinformationtypeid: XQW.Guid;
  versionnumber: number;
}
interface opc_allegations_personalinformationtypes_Expand {
  opc_allegations_personalinformationtypes: WebExpand<opc_allegations_personalinformationtypes_Expand, opc_allegation_Select, opc_allegation_Filter, { opc_allegations_personalinformationtypes: opc_allegation_Result[] }>;
}
interface opc_allegations_personalinformationtypes_FormattedResult {
}
interface opc_allegations_personalinformationtypes_Result extends opc_allegations_personalinformationtypes_Base, opc_allegations_personalinformationtypes_Relationships {
  "@odata.etag": string;
}
interface opc_allegations_personalinformationtypes_RelatedOne {
}
interface opc_allegations_personalinformationtypes_RelatedMany {
  opc_allegations_personalinformationtypes: WebMappingRetrieve<opc_allegation_Select,opc_allegation_Expand,opc_allegation_Filter,opc_allegation_Fixed,opc_allegation_Result,opc_allegation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_allegations_personalinformationtypesset: WebMappingRetrieve<opc_allegations_personalinformationtypes_Select,opc_allegations_personalinformationtypes_Expand,opc_allegations_personalinformationtypes_Filter,opc_allegations_personalinformationtypes_Fixed,opc_allegations_personalinformationtypes_Result,opc_allegations_personalinformationtypes_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_allegations_personalinformationtypesset: WebMappingRelated<opc_allegations_personalinformationtypes_RelatedOne,opc_allegations_personalinformationtypes_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_allegations_personalinformationtypesset: WebMappingCUDA<opc_allegations_personalinformationtypes_Create,opc_allegations_personalinformationtypes_Update,opc_allegations_personalinformationtypes_Select>;
}
