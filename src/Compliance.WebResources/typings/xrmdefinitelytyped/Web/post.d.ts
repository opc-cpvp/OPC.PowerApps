interface Post_Base extends WebEntity {
  createdon?: Date | null;
  modifiedon?: Date | null;
  postid?: string | null;
  posttoyammer?: boolean | null;
  source?: post_source | null;
  text?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: post_type | null;
  utcconversiontimezonecode?: number | null;
  yammerpoststate?: number | null;
  yammerretrycount?: number | null;
}
interface Post_Relationships {
}
interface Post extends Post_Base, Post_Relationships {
}
interface Post_Create extends Post {
}
interface Post_Update extends Post {
}
interface Post_Select {
  createdby_guid: WebAttribute<Post_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Post_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Post_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  modifiedby_guid: WebAttribute<Post_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Post_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Post_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<Post_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  postid: WebAttribute<Post_Select, { postid: string | null }, {  }>;
  postregardingid_guid: WebAttribute<Post_Select, { postregardingid_guid: string | null }, { postregardingid_formatted?: string }>;
  posttoyammer: WebAttribute<Post_Select, { posttoyammer: boolean | null }, {  }>;
  regardingobjectid_guid: WebAttribute<Post_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  regardingobjectownerid_guid: WebAttribute<Post_Select, { regardingobjectownerid_guid: string | null }, { regardingobjectownerid_formatted?: string }>;
  regardingobjectowningbusinessunit_guid: WebAttribute<Post_Select, { regardingobjectowningbusinessunit_guid: string | null }, { regardingobjectowningbusinessunit_formatted?: string }>;
  source: WebAttribute<Post_Select, { source: post_source | null }, { source_formatted?: string }>;
  text: WebAttribute<Post_Select, { text: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Post_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<Post_Select, { type: post_type | null }, { type_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Post_Select, { utcconversiontimezonecode: number | null }, {  }>;
  yammerpoststate: WebAttribute<Post_Select, { yammerpoststate: number | null }, {  }>;
  yammerretrycount: WebAttribute<Post_Select, { yammerretrycount: number | null }, {  }>;
}
interface Post_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  postid: XQW.Guid;
  postregardingid_guid: XQW.Guid;
  posttoyammer: boolean;
  regardingobjectid_guid: XQW.Guid;
  regardingobjectownerid_guid: XQW.Guid;
  regardingobjectowningbusinessunit_guid: XQW.Guid;
  source: post_source;
  text: string;
  timezoneruleversionnumber: number;
  type: post_type;
  utcconversiontimezonecode: number;
  yammerpoststate: number;
  yammerretrycount: number;
}
interface Post_Expand {
  createdby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Post_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
}
interface Post_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  postregardingid_formatted?: string;
  regardingobjectid_formatted?: string;
  regardingobjectownerid_formatted?: string;
  regardingobjectowningbusinessunit_formatted?: string;
  source_formatted?: string;
  type_formatted?: string;
}
interface Post_Result extends Post_Base, Post_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  postregardingid_guid: string | null;
  regardingobjectid_guid: string | null;
  regardingobjectownerid_guid: string | null;
  regardingobjectowningbusinessunit_guid: string | null;
}
interface Post_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface Post_RelatedMany {
}
interface WebEntitiesRetrieve {
  posts: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
}
interface WebEntitiesRelated {
  posts: WebMappingRelated<Post_RelatedOne,Post_RelatedMany>;
}
interface WebEntitiesCUDA {
  posts: WebMappingCUDA<Post_Create,Post_Update,Post_Select>;
}
