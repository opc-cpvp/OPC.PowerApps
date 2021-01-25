interface opc_queues_teams_Base extends WebEntity {
  opc_queues_teamsid?: string | null;
  queueid?: string | null;
  teamid?: string | null;
  versionnumber?: number | null;
}
interface opc_queues_teams_Relationships {
  opc_queues_teams_membership?: Team_Result[] | null;
}
interface opc_queues_teams extends opc_queues_teams_Base, opc_queues_teams_Relationships {
}
interface opc_queues_teams_Create extends opc_queues_teams {
}
interface opc_queues_teams_Update extends opc_queues_teams {
}
interface opc_queues_teams_Select {
  opc_queues_teamsid: WebAttribute<opc_queues_teams_Select, { opc_queues_teamsid: string | null }, {  }>;
  queueid: WebAttribute<opc_queues_teams_Select, { queueid: string | null }, {  }>;
  teamid: WebAttribute<opc_queues_teams_Select, { teamid: string | null }, {  }>;
  versionnumber: WebAttribute<opc_queues_teams_Select, { versionnumber: number | null }, {  }>;
}
interface opc_queues_teams_Filter {
  opc_queues_teamsid: XQW.Guid;
  queueid: XQW.Guid;
  teamid: XQW.Guid;
  versionnumber: number;
}
interface opc_queues_teams_Expand {
  opc_queues_teams_membership: WebExpand<opc_queues_teams_Expand, Team_Select, Team_Filter, { opc_queues_teams_membership: Team_Result[] }>;
}
interface opc_queues_teams_FormattedResult {
}
interface opc_queues_teams_Result extends opc_queues_teams_Base, opc_queues_teams_Relationships {
  "@odata.etag": string;
}
interface opc_queues_teams_RelatedOne {
}
interface opc_queues_teams_RelatedMany {
  opc_queues_teams_membership: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opc_queues_teamsset: WebMappingRetrieve<opc_queues_teams_Select,opc_queues_teams_Expand,opc_queues_teams_Filter,opc_queues_teams_Fixed,opc_queues_teams_Result,opc_queues_teams_FormattedResult>;
}
interface WebEntitiesRelated {
  opc_queues_teamsset: WebMappingRelated<opc_queues_teams_RelatedOne,opc_queues_teams_RelatedMany>;
}
interface WebEntitiesCUDA {
  opc_queues_teamsset: WebMappingCUDA<opc_queues_teams_Create,opc_queues_teams_Update,opc_queues_teams_Select>;
}
