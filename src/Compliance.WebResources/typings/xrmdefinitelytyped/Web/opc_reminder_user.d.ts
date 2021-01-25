interface opc_reminder_user_Base extends WebEntity {
  opc_reminder_userid?: string | null;
  opc_reminderid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface opc_reminder_user_Relationships {
  opc_reminders_users_additionaluserstonotify?: opc_reminder_Result[] | null;
}
interface opc_reminder_user extends opc_reminder_user_Base, opc_reminder_user_Relationships {
}
interface opc_reminder_user_Create extends opc_reminder_user {
}
interface opc_reminder_user_Update extends opc_reminder_user {
}
interface opc_reminder_user_Select {
  opc_reminder_userid: WebAttribute<opc_reminder_user_Select, { opc_reminder_userid: string | null }, {  }>;
  opc_reminderid: WebAttribute<opc_reminder_user_Select, { opc_reminderid: string | null }, {  }>;
  systemuserid: WebAttribute<opc_reminder_user_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_reminder_user_Select, { versionnumber: number | null }, {  }>;
}
interface opc_reminder_user_Filter {
  opc_reminder_userid: XQW.Guid;
  opc_reminderid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface opc_reminder_user_Expand {
  opc_reminders_users_additionaluserstonotify: WebExpand<opc_reminder_user_Expand, opc_reminder_Select, opc_reminder_Filter, { opc_reminders_users_additionaluserstonotify: opc_reminder_Result[] }>;
}
interface opc_reminder_user_FormattedResult {
}
interface opc_reminder_user_Result extends opc_reminder_user_Base, opc_reminder_user_Relationships {
  "@odata.etag": string;
}
interface opc_reminder_user_RelatedOne {
}
interface opc_reminder_user_RelatedMany {
  opc_reminders_users_additionaluserstonotify: WebMappingRetrieve<opc_reminder_Select,opc_reminder_Expand,opc_reminder_Filter,opc_reminder_Fixed,opc_reminder_Result,opc_reminder_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_reminder_userset: WebMappingRetrieve<opc_reminder_user_Select,opc_reminder_user_Expand,opc_reminder_user_Filter,opc_reminder_user_Fixed,opc_reminder_user_Result,opc_reminder_user_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_reminder_userset: WebMappingRelated<opc_reminder_user_RelatedOne,opc_reminder_user_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_reminder_userset: WebMappingCUDA<opc_reminder_user_Create,opc_reminder_user_Update,opc_reminder_user_Select>;
}
