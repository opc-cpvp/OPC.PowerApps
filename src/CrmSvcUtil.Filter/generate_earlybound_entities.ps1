$projectOutput = "bin\Debug"
$crmSvcUtil = Get-ChildItem -Path $projectOutput -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force

& $crmSvcUtil.FullName `
	/interactivelogin `
	/out:"../Compliance.Entities/Entities.cs" `
	/namespace:"Compliance.Entities"