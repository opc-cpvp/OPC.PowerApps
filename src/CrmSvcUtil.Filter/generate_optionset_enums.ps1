$projectOutput = "bin\Debug"
$crmSvcUtil = Get-ChildItem -Path $projectOutput -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force

& $crmSvcUtil.FullName `
	/interactivelogin `
	/out:"../Compliance.Entities/OptionSets.cs" `
	/namespace:"Compliance.Entities" `
	/codewriterfilter:"CrmSvcUtil.Filter.GenerateOptionSetEnums.FilteringService, CrmSvcUtil.Filter" `
	/codecustomization:"CrmSvcUtil.Filter.GenerateOptionSetEnums.CodeCustomizationService, CrmSvcUtil.Filter" `
	/namingservice:"CrmSvcUtil.Filter.GenerateOptionSetEnums.NamingService, CrmSvcUtil.Filter"