$packageRoot = "..\packages"
$crmSvcUtil = Get-ChildItem -Path $packageRoot -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force

& $crmSvcUtil.FullName `
	/interactivelogin `
	/out:"Entities/Entities.cs" `
	/namespace:"Compliance.Entities"