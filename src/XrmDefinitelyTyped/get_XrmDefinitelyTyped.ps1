Param([string]$Solution,[string]$Url, [string]$ClientSecret, [string]$AppId)

$xdtexe = Get-ChildItem "../packages" -Filter XrmDefinitelyTyped.exe -recurse | select -first 1 -ExpandProperty FullName
write-host $xdtexe

if ($ClientSecret -And $AppId) {
    # Export XRM TypeScript definitions
    & $xdtexe /url:"$Url/XRMServices/2011/Organization.svc" `
		/method:"ClientSecret" `
		/out:"../$Solution.WebResources/@types/xrmdefinitelytyped" `
		/jsLib:"../$Solution.WebResources/js/lib/xrmquery" `
		/web:"" `
		/solutions:"$Solution" `
		/mfaAppId:$AppId `
		/mfaClientSecret:$ClientSecret `
		/oneFile:"true"
} else {
	# Prompt for credentials
	$cred = Get-Credential

	# Prompt for organization
	if(!(Get-Module -Name Microsoft.Xrm.Data.PowerShell)){
		Install-Module -Name Microsoft.Xrm.Data.PowerShell -Force -AllowClobber
	}
	Connect-CrmOnlineDiscovery $cred

	# Set the connection timeout to 5 minutes
	Set-CrmConnectionTimeout -conn $conn -TimeoutInSeconds 300

	# Retrieve list of solutions
	$solutions = (Get-CrmRecords -conn $conn -EntityLogicalName solution -FilterAttribute isvisible -FilterOperator eq -FilterValue 1 -Fields *).CrmRecords | Select-Object -Property friendlyname, uniquename

	# Display list of available solutions
	for ($i = 0; $i -lt $solutions.Length; $i++) {
		$solution = $solutions[$i]
		Write-Host("[{0}] {1}" -f $i, $solution.friendlyname)
	}

	# Prompt for solution
	$i = Read-Host -Prompt "Select CRM Solution by index number"
	$solution = $solutions[$i].uniquename

	# Export XRM TypeScript definitions
	& $xdtexe /url:$($conn.ConnectedOrgPublishedEndpoints["OrganizationService"]) `
		/out:$('"../{0}.WebResources/@types/xrmdefinitelytyped"' -f $solution) `
		/jsLib:$('"../{0}.WebResources/js/lib/xrmquery"' -f $solution) `
		/web:"" `
		/solutions:$($solution) `
		/username:$($cred.Username) `
		/password:$($cred.GetNetworkCredential().Password) `
		/oneFile:"true"
}
