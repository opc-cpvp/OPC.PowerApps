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
	[Microsoft.Xrm.Sdk.Client.EntityLogicalNameAttribute("opc_allegationsrelatedissues")]
	public partial class opc_allegationsrelatedissues : Microsoft.Xrm.Sdk.Entity, System.ComponentModel.INotifyPropertyChanging, System.ComponentModel.INotifyPropertyChanged
	{
		
		/// <summary>
		/// Default Constructor.
		/// </summary>
		[System.Diagnostics.DebuggerNonUserCode()]
		public opc_allegationsrelatedissues() : 
				base(EntityLogicalName)
		{
		}
		
		public const string EntityLogicalName = "opc_allegationsrelatedissues";
		
		public const string EntitySchemaName = "opc_allegationsrelatedissues";
		
		public const string PrimaryIdAttribute = "opc_allegationsrelatedissuesid";
		
		public const string EntityLogicalCollectionName = null;
		
		public const string EntitySetName = "opc_allegationsrelatedissuesset";
		
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
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationid")]
		public System.Nullable<System.Guid> opc_allegationid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_allegationid");
			}
		}
		
		/// <summary>
		/// 
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationsrelatedissuesid")]
		public System.Nullable<System.Guid> opc_allegationsrelatedissuesId
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_allegationsrelatedissuesid");
			}
		}
		
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_allegationsrelatedissuesid")]
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
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("opc_issueid")]
		public System.Nullable<System.Guid> opc_issueid
		{
			[System.Diagnostics.DebuggerNonUserCode()]
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("opc_issueid");
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
	}
}