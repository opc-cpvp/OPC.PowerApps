Param([switch]$NonInteractive = $false, [string]$UserName, [string]$Password, [string]$Url)

$crmSvcUtil = Get-ChildItem . -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force | select -first 1 -ExpandProperty FullName

if($NonInteractive){
	& $crmSvcUtil `
		/username:"$username" `
		/password:"$password" `
		/url:"$Url/XRMServices/2011/Organization.svc" `
		/out:"../Compliance.Entities/OptionSets.cs" `
		/namespace:"Compliance.Entities" `
		/codewriterfilter:"CrmSvcUtil.Filter.GenerateOptionSetEnums.FilteringService, CrmSvcUtil.Filter" `
		/codecustomization:"CrmSvcUtil.Filter.GenerateOptionSetEnums.CodeCustomizationService, CrmSvcUtil.Filter" `
		/namingservice:"CrmSvcUtil.Filter.GenerateOptionSetEnums.NamingService, CrmSvcUtil.Filter"
} else {
	& $crmSvcUtil `
		/interactivelogin `
		/out:"../Compliance.Entities/OptionSets.cs" `
		/namespace:"Compliance.Entities" `
		/codewriterfilter:"CrmSvcUtil.Filter.GenerateOptionSetEnums.FilteringService, CrmSvcUtil.Filter" `
		/codecustomization:"CrmSvcUtil.Filter.GenerateOptionSetEnums.CodeCustomizationService, CrmSvcUtil.Filter" `
		/namingservice:"CrmSvcUtil.Filter.GenerateOptionSetEnums.NamingService, CrmSvcUtil.Filter"
}
