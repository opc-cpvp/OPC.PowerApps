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
	
	[System.Runtime.Serialization.DataContractAttribute(Namespace="http://schemas.microsoft.com/xrm/2011/opc/")]
	[Microsoft.Xrm.Sdk.Client.RequestProxyAttribute("opc_complaintcheckcomplainantemailaddresses")]
	public partial class opc_complaintcheckcomplainantemailaddressesRequest : Microsoft.Xrm.Sdk.OrganizationRequest
	{
		
		public Microsoft.Xrm.Sdk.EntityReference Target
		{
			get
			{
				if (this.Parameters.Contains("Target"))
				{
					return ((Microsoft.Xrm.Sdk.EntityReference)(this.Parameters["Target"]));
				}
				else
				{
					return default(Microsoft.Xrm.Sdk.EntityReference);
				}
			}
			set
			{
				this.Parameters["Target"] = value;
			}
		}
		
		public opc_complaintcheckcomplainantemailaddressesRequest()
		{
			this.RequestName = "opc_complaintcheckcomplainantemailaddresses";
			this.Target = default(Microsoft.Xrm.Sdk.EntityReference);
		}
	}
}