Param([switch]$NonInteractive = $false, [string]$UserName, [string]$Password, [string]$Url)

$projectOutput = "bin\Debug"
$crmSvcUtil = Get-ChildItem -Path $projectOutput -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force | select -first 1 -ExpandProperty FullName

if($NonInteractive){
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
