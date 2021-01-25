interface opc_accountsrelatedindustries_Base extends WebEntity {
  accountid?: string | null;
  opc_accountsrelatedindustriesid?: string | null;
  opc_industryid?: string | null;
  versionnumber?: number | null;
}
interface opc_accountsrelatedindustries_Relationships {
  opc_accounts_industries_relatedindustries?: Account_Result[] | null;
}
interface opc_accountsrelatedindustries extends opc_accountsrelatedindustries_Base, opc_accountsrelatedindustries_Relationships {
}
interface opc_accountsrelatedindustries_Create extends opc_accountsrelatedindustries {
}
interface opc_accountsrelatedindustries_Update extends opc_accountsrelatedindustries {
}
interface opc_accountsrelatedindustries_Select {
  accountid: WebAttribute<opc_accountsrelatedindustries_Select, { accountid: string | null }, {  }>;
  opc_accountsrelatedindustriesid: WebAttribute<opc_accountsrelatedindustries_Select, { opc_accountsrelatedindustriesid: string | null }, {  }>;
  opc_industryid: WebAttribute<opc_accountsrelatedindustries_Select, { opc_industryid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_accountsrelatedindustries_Select, { versionnumber: number | null }, {  }>;
}
interface opc_accountsrelatedindustries_Filter {
  accountid: XQW.Guid;
  opc_accountsrelatedindustriesid: XQW.Guid;
  opc_industryid: XQW.Guid;
  versionnumber: number;
}
interface opc_accountsrelatedindustries_Expand {
  opc_accounts_industries_relatedindustries: WebExpand<opc_accountsrelatedindustries_Expand, Account_Select, Account_Filter, { opc_accounts_industries_relatedindustries: Account_Result[] }>;
}
interface opc_accountsrelatedindustries_FormattedResult {
}
interface opc_accountsrelatedindustries_Result extends opc_accountsrelatedindustries_Base, opc_accountsrelatedindustries_Relationships {
  "@odata.etag": string;
}
interface opc_accountsrelatedindustries_RelatedOne {
}
interface opc_accountsrelatedindustries_RelatedMany {
  opc_accounts_industries_relatedindustries: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_accountsrelatedindustriesset: WebMappingRetrieve<opc_accountsrelatedindustries_Select,opc_accountsrelatedindustries_Expand,opc_accountsrelatedindustries_Filter,opc_accountsrelatedindustries_Fixed,opc_accountsrelatedindustries_Result,opc_accountsrelatedindustries_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_accountsrelatedindustriesset: WebMappingRelated<opc_accountsrelatedindustries_RelatedOne,opc_accountsrelatedindustries_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_accountsrelatedindustriesset: WebMappingCUDA<opc_accountsrelatedindustries_Create,opc_accountsrelatedindustries_Update,opc_accountsrelatedindustries_Select>;
}
