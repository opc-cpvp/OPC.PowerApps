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
	[Microsoft.Xrm.Sdk.Client.ResponseProxyAttribute("opc_complaintcheckcomplainantrequiresprivilegedcorrespondence")]
	public partial class opc_complaintcheckcomplainantrequiresprivilegedcorrespondenceResponse : Microsoft.Xrm.Sdk.OrganizationResponse
	{
		
		public opc_complaintcheckcomplainantrequiresprivilegedcorrespondenceResponse()
		{
		}
		
		public bool RequiresPrivilegedCorrespondence
		{
			get
			{
				if (this.Results.Contains("RequiresPrivilegedCorrespondence"))
				{
					return ((bool)(this.Results["RequiresPrivilegedCorrespondence"]));
				}
				else
				{
					return default(bool);
				}
			}
		}
	}
}