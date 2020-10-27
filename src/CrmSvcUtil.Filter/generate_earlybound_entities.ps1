Param([string]$ConnectionString)

$crmSvcUtil = Get-ChildItem . -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force | select -first 1 -ExpandProperty FullName

if ($ConnectionString) {
	& $crmSvcUtil `
		/connectionstring:$ConnectionString `
		/out:"../Compliance.Entities/Entities.cs" `
		/namespace:"Compliance.Entities" `
		/codewriterfilter:"CrmSvcUtil.Filter.GenerateEarlyBoundEntities.GenerateEarlyBoundFilter, CrmSvcUtil.Filter"
} else {
	& $crmSvcUtil `
		/interactivelogin `
		/out:"../Compliance.Entities/Entities.cs" `
		/namespace:"Compliance.Entities" `
		/codewriterfilter:"CrmSvcUtil.Filter.GenerateEarlyBoundEntities.GenerateEarlyBoundFilter, CrmSvcUtil.Filter"
}