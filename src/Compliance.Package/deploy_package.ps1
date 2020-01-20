# Install dependencies
if(!(Get-Module -Name Microsoft.Xrm.Tooling.CrmConnector.PowerShell)){
	Install-Module -Name Microsoft.Xrm.Tooling.CrmConnector.PowerShell -Force -AllowClobber
}

if(!(Get-Module -Name Microsoft.Xrm.Tooling.PackageDeployment.Powershell)){
	Install-Module -Name Microsoft.Xrm.Tooling.PackageDeployment.Powershell -Force -AllowClobber
}

# Prompt for credentials
$conn = Get-CrmConnection -InteractiveMode -MaxCrmConnectionTimeOutMinutes 30

# Deploy solution
Import-CrmPackage -CrmConnection $conn -PackageDirectory "$PSScriptRoot\bin\Debug" -PackageName "Compliance.Package" -Verbose -LogWriteDirectory "$PSScriptRoot"