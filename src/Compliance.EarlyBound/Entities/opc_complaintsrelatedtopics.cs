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
	
	/// <summary>
	/// 
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	[Microsoft.Xrm.Sdk.Client.EntityLogicalNameAttribute("opc_complaintsrelatedtopics")]
	public partial class opc_complaintsrelatedtopics : Microsoft.Xrm.Sdk.Entity, System.ComponentModel.INotifyPropertyChanging, System.ComponentModel.INotifyPropertyChanged
	{
		
		/// <summary>
		/// Default Constructor.
		/// </summary>
		[System.Diagnostics.DebuggerNonUserCode()]
		public opc_complaintsrelatedtopics() : 
				base(EntityLogicalName)
		{
		}
		
		public const string EntityLogicalName = "opc_complaintsrelatedtopics";
		
		public const string EntitySchemaName = "opc_complaintsrelatedtopics";
		
		public const string PrimaryIdAttribute = "opc_complaintsrelatedtopicsid";
		
		public const string EntityLogicalCollectionName = null;
		
		public const string EntitySetName = "opc_complaintsrelatedtopicsset";
		
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
		/// 
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_complaintid")]
		public System.Nullable<System.Guid> opc_complaintid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_complaintid");
			}
		}
		
		/// <summary>
		/// 
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_complaintsrelatedtopicsid")]
		public System.Nullable<System.Guid> opc_complaintsrelatedtopicsId
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_complaintsrelatedtopicsid");
			}
		}
		
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_complaintsrelatedtopicsid")]
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
				base.Id = value;
			}
		}
		
		/// <summary>
		/// 
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_topicid")]
		public System.Nullable<System.Guid> opc_topicid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_topicid");
			}
		}
		
		/// <summary>
		/// 
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
		/// N:N opc_complaints_topics_relatedtopics
		/// </summary>
		[Microsoft.Xrm.Sdk.RelationshipSchemaNameAttribute("opc_complaints_topics_relatedtopics")]
		public System.Collections.Generic.IEnumerable<Compliance.EarlyBound.opc_topic> opc_complaints_topics_relatedtopics
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetRelatedEntities<Compliance.EarlyBound.opc_topic>("opc_complaints_topics_relatedtopics", null);
			}
			[System.Diagnostics.DebuggerNonUserCode()]
			set
			{
				this.OnPropertyChanging("opc_complaints_topics_relatedtopics");
				this.SetRelatedEntities<Compliance.EarlyBound.opc_topic>("opc_complaints_topics_relatedtopics", null, value);
				this.OnPropertyChanged("opc_complaints_topics_relatedtopics");
			}
		}
	}
}