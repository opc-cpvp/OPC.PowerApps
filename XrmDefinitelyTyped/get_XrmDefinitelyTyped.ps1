﻿# Prompt for credentials
$cred = Get-Credential

# Prompt for organization
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
Write-Host("")

# Prompt for solution
$i = Read-Host -Prompt "Select CRM Solution by index number"
$solution = $solutions[$i].uniquename

# Export XRM TypeScript definitions
XrmDefinitelyTyped\XrmDefinitelyTyped.exe /url:$($conn.ConnectedOrgPublishedEndpoints["OrganizationService"]) `
    /out:$('"../{0}.WebResources/@types/xrmdefinitelytyped"' -f $solution) `
	/jsLib:$('"../{0}.WebResources/js/lib/xrmquery"' -f $solution) `
	/web:"" `
	/solutions:$($solution) `
	/username:$($cred.Username) `
	/password:$($cred.GetNetworkCredential().Password) `
	/oneFile:"true"