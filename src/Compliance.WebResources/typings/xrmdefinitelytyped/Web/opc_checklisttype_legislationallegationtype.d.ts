interface opc_checklisttype_legislationallegationtype_Base extends WebEntity {
  opc_checklisttype_legislationallegationtypeid?: string | null;
  opc_checklisttypeid?: string | null;
  opc_legislationallegationtypeid?: string | null;
  versionnumber?: number | null;
}
interface opc_checklisttype_legislationallegationtype_Relationships {
  opc_checklisttype_legislationallegationtype?: opc_ChecklistType_Result[] | null;
}
interface opc_checklisttype_legislationallegationtype extends opc_checklisttype_legislationallegationtype_Base, opc_checklisttype_legislationallegationtype_Relationships {
}
interface opc_checklisttype_legislationallegationtype_Create extends opc_checklisttype_legislationallegationtype {
}
interface opc_checklisttype_legislationallegationtype_Update extends opc_checklisttype_legislationallegationtype {
}
interface opc_checklisttype_legislationallegationtype_Select {
  opc_checklisttype_legislationallegationtypeid: WebAttribute<opc_checklisttype_legislationallegationtype_Select, { opc_checklisttype_legislationallegationtypeid: string | null }, {  }>;
  opc_checklisttypeid: WebAttribute<opc_checklisttype_legislationallegationtype_Select, { opc_checklisttypeid: string | null }, {  }>;
  opc_legislationallegationtypeid: WebAttribute<opc_checklisttype_legislationallegationtype_Select, { opc_legislationallegationtypeid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_checklisttype_legislationallegationtype_Select, { versionnumber: number | null }, {  }>;
}
interface opc_checklisttype_legislationallegationtype_Filter {
  opc_checklisttype_legislationallegationtypeid: XQW.Guid;
  opc_checklisttypeid: XQW.Guid;
  opc_legislationallegationtypeid: XQW.Guid;
  versionnumber: number;
}
interface opc_checklisttype_legislationallegationtype_Expand {
  opc_checklisttype_legislationallegationtype: WebExpand<opc_checklisttype_legislationallegationtype_Expand, opc_ChecklistType_Select, opc_ChecklistType_Filter, { opc_checklisttype_legislationallegationtype: opc_ChecklistType_Result[] }>;
}
interface opc_checklisttype_legislationallegationtype_FormattedResult {
}
interface opc_checklisttype_legislationallegationtype_Result extends opc_checklisttype_legislationallegationtype_Base, opc_checklisttype_legislationallegationtype_Relationships {
  "@odata.etag": string;
}
interface opc_checklisttype_legislationallegationtype_RelatedOne {
}
interface opc_checklisttype_legislationallegationtype_RelatedMany {
  opc_checklisttype_legislationallegationtype: WebMappingRetrieve<opc_ChecklistType_Select,opc_ChecklistType_Expand,opc_ChecklistType_Filter,opc_ChecklistType_Fixed,opc_ChecklistType_Result,opc_ChecklistType_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_checklisttype_legislationallegationtypeset: WebMappingRetrieve<opc_checklisttype_legislationallegationtype_Select,opc_checklisttype_legislationallegationtype_Expand,opc_checklisttype_legislationallegationtype_Filter,opc_checklisttype_legislationallegationtype_Fixed,opc_checklisttype_legislationallegationtype_Result,opc_checklisttype_legislationallegationtype_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_checklisttype_legislationallegationtypeset: WebMappingRelated<opc_checklisttype_legislationallegationtype_RelatedOne,opc_checklisttype_legislationallegationtype_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_checklisttype_legislationallegationtypeset: WebMappingCUDA<opc_checklisttype_legislationallegationtype_Create,opc_checklisttype_legislationallegationtype_Update,opc_checklisttype_legislationallegationtype_Select>;
}
