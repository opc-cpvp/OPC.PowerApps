//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>

//------------------------------------------------------------------------------


namespace Compliance.EarlyBound
{
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum opc_allegationState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Active = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inactive = 1,
	}
	
	/// <summary>
	/// Represents a complainant's allegation
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	[Microsoft.Xrm.Sdk.Client.EntityLogicalNameAttribute("opc_allegation")]
	public partial class opc_allegation : Microsoft.Xrm.Sdk.Entity, System.ComponentModel.INotifyPropertyChanging, System.ComponentModel.INotifyPropertyChanged
	{
		
		/// <summary>
		/// Default Constructor.
		/// </summary>
		[System.Diagnostics.DebuggerNonUserCode()]
		public opc_allegation() : 
				base(EntityLogicalName)
		{
		}
		
		public const string AlternateKeys = "opc_referencenumber";
		
		public const string EntityLogicalName = "opc_allegation";
		
		public const string EntitySchemaName = "opc_allegation";
		
		public const string PrimaryIdAttribute = "opc_allegationid";
		
		public const string PrimaryNameAttribute = "opc_name";
		
		public const string EntityLogicalCollectionName = "opc_allegations";
		
		public const string EntitySetName = "opc_allegations";
		
		public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
		
		public event System.ComponentModel.PropertyChangingEventHandler PropertyChanging;
		
		[System.Diagnostics.DebuggerNonUserCode()]
		private void OnPropertyChanged(string propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
			}
		}
		
		[System.Diagnostics.DebuggerNonUserCode()]
		private void OnPropertyChanging(string propertyName)
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, new System.ComponentModel.PropertyChangingEventArgs(propertyName));
			}
		}
		
		/// <summary>
		/// Unique identifier of the user who created the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdby")]
		public Microsoft.Xrm.Sdk.EntityReference CreatedBy
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("createdby");
			}
		}
		
		/// <summary>
		/// Date and time when the record was created.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdon")]
		public System.Nullable<System.DateTime> CreatedOn
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("createdon");
			}
		}
		
		/// <summary>
		/// Unique identifier of the delegate user who created the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdonbehalfby")]
		public Microsoft.Xrm.Sdk.EntityReference CreatedOnBehalfBy
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("createdonbehalfby");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("CreatedOnBehalfBy");
				this.SetAttributeValue("createdonbehalfby", value);
				this.OnPropertyChanged("CreatedOnBehalfBy");
			}
		}
		
		/// <summary>
		/// Sequence number of the import that created this record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("importsequencenumber")]
		public System.Nullable<int> ImportSequenceNumber
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<int>>("importsequencenumber");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("ImportSequenceNumber");
				this.SetAttributeValue("importsequencenumber", value);
				this.OnPropertyChanged("ImportSequenceNumber");
			}
		}
		
		/// <summary>
		/// Unique identifier of the user who modified the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedby")]
		public Microsoft.Xrm.Sdk.EntityReference ModifiedBy
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("modifiedby");
			}
		}
		
		/// <summary>
		/// Date and time when the record was modified.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedon")]
		public System.Nullable<System.DateTime> ModifiedOn
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("modifiedon");
			}
		}
		
		/// <summary>
		/// Unique identifier of the delegate user who modified the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedonbehalfby")]
		public Microsoft.Xrm.Sdk.EntityReference ModifiedOnBehalfBy
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("modifiedonbehalfby");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("ModifiedOnBehalfBy");
				this.SetAttributeValue("modifiedonbehalfby", value);
				this.OnPropertyChanged("ModifiedOnBehalfBy");
			}
		}
		
		/// <summary>
		/// Unique identifier for entity instances
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationid")]
		public System.Nullable<System.Guid> opc_allegationId
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_allegationid");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_allegationId");
				this.SetAttributeValue("opc_allegationid", value);
				if (value.HasValue)
				{
					base.Id = value.Value;
				}
				else
				{
					base.Id = System.Guid.Empty;
				}
				this.OnPropertyChanged("opc_allegationId");
			}
		}
		
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationid")]
		public override System.Guid Id
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return base.Id;
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.opc_allegationId = value;
			}
		}
		
		/// <summary>
		/// The allegation type of the allegation
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationtypeid")]
		public Microsoft.Xrm.Sdk.EntityReference opc_allegationtypeid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("opc_allegationtypeid");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_allegationtypeid");
				this.SetAttributeValue("opc_allegationtypeid", value);
				this.OnPropertyChanged("opc_allegationtypeid");
			}
		}
		
		/// <summary>
		/// This field is a lookup to the Complaint associated with the allegation/concern.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_complaintid")]
		public Microsoft.Xrm.Sdk.EntityReference opc_complaintid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("opc_complaintid");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_complaintid");
				this.SetAttributeValue("opc_complaintid", value);
				this.OnPropertyChanged("opc_complaintid");
			}
		}
		
		/// <summary>
		/// Disposition for the Allegation
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_disposition")]
		public virtual opc_AllegationDisposition? opc_disposition
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return ((opc_AllegationDisposition?)(EntityOptionSetEnum.GetEnum(this, "opc_disposition")));
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_disposition");
				this.SetAttributeValue("opc_disposition", value.HasValue ? new Microsoft.Xrm.Sdk.OptionSetValue((int)value) : null);
				this.OnPropertyChanged("opc_disposition");
			}
		}
		
		/// <summary>
		/// Action for the allegation disposition
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_dispositionactionid")]
		public Microsoft.Xrm.Sdk.EntityReference opc_dispositionactionid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("opc_dispositionactionid");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_dispositionactionid");
				this.SetAttributeValue("opc_dispositionactionid", value);
				this.OnPropertyChanged("opc_dispositionactionid");
			}
		}
		
		/// <summary>
		/// Reason for the allegation disposition
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_dispositionreasonid")]
		public Microsoft.Xrm.Sdk.EntityReference opc_dispositionreasonid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("opc_dispositionreasonid");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_dispositionreasonid");
				this.SetAttributeValue("opc_dispositionreasonid", value);
				this.OnPropertyChanged("opc_dispositionreasonid");
			}
		}
		
		/// <summary>
		/// The jurisdiction for the unacceptable allegation.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_jurisdiction")]
		public virtual opc_Jurisdictions? opc_jurisdiction
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return ((opc_Jurisdictions?)(EntityOptionSetEnum.GetEnum(this, "opc_jurisdiction")));
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_jurisdiction");
				this.SetAttributeValue("opc_jurisdiction", value.HasValue ? new Microsoft.Xrm.Sdk.OptionSetValue((int)value) : null);
				this.OnPropertyChanged("opc_jurisdiction");
			}
		}
		
		/// <summary>
		/// Required name field
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_name")]
		public string opc_name
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<string>("opc_name");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_name");
				this.SetAttributeValue("opc_name", value);
				this.OnPropertyChanged("opc_name");
			}
		}
		
		/// <summary>
		/// The respondent access request number
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_referencenumber")]
		public string opc_referencenumber
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<string>("opc_referencenumber");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_referencenumber");
				this.SetAttributeValue("opc_referencenumber", value);
				this.OnPropertyChanged("opc_referencenumber");
			}
		}
		
		/// <summary>
		/// Date and time that the record was migrated.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("overriddencreatedon")]
		public System.Nullable<System.DateTime> OverriddenCreatedOn
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("overriddencreatedon");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("OverriddenCreatedOn");
				this.SetAttributeValue("overriddencreatedon", value);
				this.OnPropertyChanged("OverriddenCreatedOn");
			}
		}
		
		/// <summary>
		/// Owner Id
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("ownerid")]
		public Microsoft.Xrm.Sdk.EntityReference OwnerId
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("ownerid");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("OwnerId");
				this.SetAttributeValue("ownerid", value);
				this.OnPropertyChanged("OwnerId");
			}
		}
		
		/// <summary>
		/// Unique identifier for the business unit that owns the record
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningbusinessunit")]
		public Microsoft.Xrm.Sdk.EntityReference OwningBusinessUnit
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owningbusinessunit");
			}
		}
		
		/// <summary>
		/// Unique identifier for the team that owns the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningteam")]
		public Microsoft.Xrm.Sdk.EntityReference OwningTeam
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owningteam");
			}
		}
		
		/// <summary>
		/// Unique identifier for the user that owns the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owninguser")]
		public Microsoft.Xrm.Sdk.EntityReference OwningUser
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owninguser");
			}
		}
		
		/// <summary>
		/// Status of the Allegation/Concern
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("statecode")]
		public System.Nullable<Compliance.EarlyBound.opc_allegationState> StateCode
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				Microsoft.Xrm.Sdk.OptionSetValue optionSet = this.GetAttributeValue<Microsoft.Xrm.Sdk.OptionSetValue>("statecode");
				if ((optionSet != null))
				{
					return ((Compliance.EarlyBound.opc_allegationState)(System.Enum.ToObject(typeof(Compliance.EarlyBound.opc_allegationState), optionSet.Value)));
				}
				else
				{
					return null;
				}
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("StateCode");
				if ((value == null))
				{
					this.SetAttributeValue("statecode", null);
				}
				else
				{
					this.SetAttributeValue("statecode", new Microsoft.Xrm.Sdk.OptionSetValue(((int)(value))));
				}
				this.OnPropertyChanged("StateCode");
			}
		}
		
		/// <summary>
		/// Reason for the status of the Allegation/Concern
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("statuscode")]
		public virtual opc_allegationStatusCode? StatusCode
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return ((opc_allegationStatusCode?)(EntityOptionSetEnum.GetEnum(this, "statuscode")));
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("StatusCode");
				this.SetAttributeValue("statuscode", value.HasValue ? new Microsoft.Xrm.Sdk.OptionSetValue((int)value) : null);
				this.OnPropertyChanged("StatusCode");
			}
		}
		
		/// <summary>
		/// For internal use only.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("timezoneruleversionnumber")]
		public System.Nullable<int> TimeZoneRuleVersionNumber
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<int>>("timezoneruleversionnumber");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("TimeZoneRuleVersionNumber");
				this.SetAttributeValue("timezoneruleversionnumber", value);
				this.OnPropertyChanged("TimeZoneRuleVersionNumber");
			}
		}
		
		/// <summary>
		/// Time zone code that was in use when the record was created.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("utcconversiontimezonecode")]
		public System.Nullable<int> UTCConversionTimeZoneCode
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<int>>("utcconversiontimezonecode");
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("UTCConversionTimeZoneCode");
				this.SetAttributeValue("utcconversiontimezonecode", value);
				this.OnPropertyChanged("UTCConversionTimeZoneCode");
			}
		}
		
		/// <summary>
		/// Version Number
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("versionnumber")]
		public System.Nullable<long> VersionNumber
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<long>>("versionnumber");
			}
		}
		
		/// <summary>
		/// 1:N opc_allegation_checklistresponses_allegation
		/// </summary>
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_allegation_checklistresponses_allegation")]
		public System.Collections.Generic.IEnumerable<Compliance.EarlyBound.opc_ChecklistResponse> opc_allegation_checklistresponses_allegation
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntities<Compliance.EarlyBound.opc_ChecklistResponse>("opc_allegation_checklistresponses_allegation", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_allegation_checklistresponses_allegation");
				this.SetRelatedEntities<Compliance.EarlyBound.opc_ChecklistResponse>("opc_allegation_checklistresponses_allegation", null, value);
				this.OnPropertyChanged("opc_allegation_checklistresponses_allegation");
			}
		}
		
		/// <summary>
		/// N:N opc_allegations_issues_relatedissues
		/// </summary>
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_allegations_issues_relatedissues")]
		public System.Collections.Generic.IEnumerable<Compliance.EarlyBound.opc_issue> opc_allegations_issues_relatedissues
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntities<Compliance.EarlyBound.opc_issue>("opc_allegations_issues_relatedissues", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_allegations_issues_relatedissues");
				this.SetRelatedEntities<Compliance.EarlyBound.opc_issue>("opc_allegations_issues_relatedissues", null, value);
				this.OnPropertyChanged("opc_allegations_issues_relatedissues");
			}
		}
		
		/// <summary>
		/// N:1 business_unit_opc_allegation
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningbusinessunit")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("business_unit_opc_allegation")]
		public Compliance.EarlyBound.BusinessUnit business_unit_opc_allegation
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.BusinessUnit>("business_unit_opc_allegation", null);
			}
		}
		
		/// <summary>
		/// N:1 lk_opc_allegation_createdby
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdby")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("lk_opc_allegation_createdby")]
		public Compliance.EarlyBound.SystemUser lk_opc_allegation_createdby
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.SystemUser>("lk_opc_allegation_createdby", null);
			}
		}
		
		/// <summary>
		/// N:1 lk_opc_allegation_createdonbehalfby
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdonbehalfby")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("lk_opc_allegation_createdonbehalfby")]
		public Compliance.EarlyBound.SystemUser lk_opc_allegation_createdonbehalfby
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.SystemUser>("lk_opc_allegation_createdonbehalfby", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("lk_opc_allegation_createdonbehalfby");
				this.SetRelatedEntity<Compliance.EarlyBound.SystemUser>("lk_opc_allegation_createdonbehalfby", null, value);
				this.OnPropertyChanged("lk_opc_allegation_createdonbehalfby");
			}
		}
		
		/// <summary>
		/// N:1 lk_opc_allegation_modifiedby
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedby")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("lk_opc_allegation_modifiedby")]
		public Compliance.EarlyBound.SystemUser lk_opc_allegation_modifiedby
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.SystemUser>("lk_opc_allegation_modifiedby", null);
			}
		}
		
		/// <summary>
		/// N:1 lk_opc_allegation_modifiedonbehalfby
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedonbehalfby")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("lk_opc_allegation_modifiedonbehalfby")]
		public Compliance.EarlyBound.SystemUser lk_opc_allegation_modifiedonbehalfby
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.SystemUser>("lk_opc_allegation_modifiedonbehalfby", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("lk_opc_allegation_modifiedonbehalfby");
				this.SetRelatedEntity<Compliance.EarlyBound.SystemUser>("lk_opc_allegation_modifiedonbehalfby", null, value);
				this.OnPropertyChanged("lk_opc_allegation_modifiedonbehalfby");
			}
		}
		
		/// <summary>
		/// N:1 opc_allegationtype_allegations_allegationtype
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationtypeid")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_allegationtype_allegations_allegationtype")]
		public Compliance.EarlyBound.opc_allegationtype opc_allegationtype_allegations_allegationtype
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.opc_allegationtype>("opc_allegationtype_allegations_allegationtype", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_allegationtype_allegations_allegationtype");
				this.SetRelatedEntity<Compliance.EarlyBound.opc_allegationtype>("opc_allegationtype_allegations_allegationtype", null, value);
				this.OnPropertyChanged("opc_allegationtype_allegations_allegationtype");
			}
		}
		
		/// <summary>
		/// N:1 opc_complaint_allegations_complaint
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_complaintid")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_complaint_allegations_complaint")]
		public Compliance.EarlyBound.opc_complaint opc_complaint_allegations_complaint
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.opc_complaint>("opc_complaint_allegations_complaint", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_complaint_allegations_complaint");
				this.SetRelatedEntity<Compliance.EarlyBound.opc_complaint>("opc_complaint_allegations_complaint", null, value);
				this.OnPropertyChanged("opc_complaint_allegations_complaint");
			}
		}
		
		/// <summary>
		/// N:1 opc_dispositionaction_allegations_action
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_dispositionactionid")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_dispositionaction_allegations_action")]
		public Compliance.EarlyBound.opc_dispositionaction opc_dispositionaction_allegations_action
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.opc_dispositionaction>("opc_dispositionaction_allegations_action", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_dispositionaction_allegations_action");
				this.SetRelatedEntity<Compliance.EarlyBound.opc_dispositionaction>("opc_dispositionaction_allegations_action", null, value);
				this.OnPropertyChanged("opc_dispositionaction_allegations_action");
			}
		}
		
		/// <summary>
		/// N:1 opc_dispositionreason_allegations_reason
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_dispositionreasonid")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_dispositionreason_allegations_reason")]
		public Compliance.EarlyBound.opc_dispositionreason opc_dispositionreason_allegations_reason
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.opc_dispositionreason>("opc_dispositionreason_allegations_reason", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_dispositionreason_allegations_reason");
				this.SetRelatedEntity<Compliance.EarlyBound.opc_dispositionreason>("opc_dispositionreason_allegations_reason", null, value);
				this.OnPropertyChanged("opc_dispositionreason_allegations_reason");
			}
		}
		
		/// <summary>
		/// N:1 team_opc_allegation
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningteam")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("team_opc_allegation")]
		public Compliance.EarlyBound.Team team_opc_allegation
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.Team>("team_opc_allegation", null);
			}
		}
		
		/// <summary>
		/// N:1 user_opc_allegation
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owninguser")]
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("user_opc_allegation")]
		public Compliance.EarlyBound.SystemUser user_opc_allegation
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntity<Compliance.EarlyBound.SystemUser>("user_opc_allegation", null);
			}
		}
	}
}