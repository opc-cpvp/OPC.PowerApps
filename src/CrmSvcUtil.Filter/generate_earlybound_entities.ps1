Param([switch]$NonInteractive = $false, [string]$UserName, [string]$Password, [string]$Url, [string]$ConnectionString)

$crmSvcUtil = Get-ChildItem . -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force | select -first 1 -ExpandProperty FullName

if ($ConnectionString) {
	& $crmSvcUtil `
		/connectionstring:$ConnectionString `
		/out:"../Compliance.Entities/Entities.cs" `
		/namespace:"Compliance.Entities" `
} elseif ($NonInteractive) {
	& $crmSvcUtil `
		/url:"$url/XRMServices/2011/Organization.svc" `
		/out:"../Compliance.Entities/Entities.cs" `
		/namespace:"Compliance.Entities" `
		/username:"$username" `
		/password:"$password"
} else {
	& $crmSvcUtil `
		/interactivelogin `
		/out:"../Compliance.Entities/Entities.cs" `
		/namespace:"Compliance.Entities"
}