interface QueueMembership_Base extends WebEntity {
  queueid?: string | null;
  queuemembershipid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface QueueMembership_Relationships {
  queuemembership_association?: SystemUser_Result[] | null;
}
interface QueueMembership extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_Create extends QueueMembership {
}
interface QueueMembership_Update extends QueueMembership {
}
interface QueueMembership_Select {
  queueid: WebAttribute<QueueMembership_Select, { queueid: string | null }, {  }>;
  queuemembershipid: WebAttribute<QueueMembership_Select, { queuemembershipid: string | null }, {  }>;
  systemuserid: WebAttribute<QueueMembership_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<QueueMembership_Select, { versionnumber: number | null }, {  }>;
}
interface QueueMembership_Filter {
  queueid: XQW.Guid;
  queuemembershipid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface QueueMembership_Expand {
  queuemembership_association: WebExpand<QueueMembership_Expand, SystemUser_Select, SystemUser_Filter, { queuemembership_association: SystemUser_Result[] }>;
}
interface QueueMembership_FormattedResult {
}
interface QueueMembership_Result extends QueueMembership_Base, QueueMembership_Relationships {
  "@odata.etag": string;
}
interface QueueMembership_RelatedOne {
}
interface QueueMembership_RelatedMany {
  queuemembership_association: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  queuememberships: WebMappingRetrieve<QueueMembership_Select,QueueMembership_Expand,QueueMembership_Filter,QueueMembership_Fixed,QueueMembership_Result,QueueMembership_FormattedResult>;
}
interface WebEntitiesRelated {
  queuememberships: WebMappingRelated<QueueMembership_RelatedOne,QueueMembership_RelatedMany>;
}
interface WebEntitiesCUDA {
  queuememberships: WebMappingCUDA<QueueMembership_Create,QueueMembership_Update,QueueMembership_Select>;
}
