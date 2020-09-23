Param(
    [parameter(Mandatory = $true, Position = 1)]
    [string]$ConnectionString,

    [parameter(Mandatory = $true, Position = 2)]
    [ValidateSet('published', 'unpublished')]
    [string]$PublishState
)

if (!(Get-Module -Name Microsoft.Xrm.Data.PowerShell)) {
    Install-Module -Name Microsoft.Xrm.Data.PowerShell -Force -AllowClobber
}

$conn = Get-CrmConnection -ConnectionString $ConnectionString

$duplicateRules = Get-CrmRecords -conn $conn -EntityLogicalName duplicaterule

Write-Host "$duplicateRules.Count duplicate rules found"    
     
if ($duplicateRules.Count -lt 1) {      
    Write-Host "No duplicate rules found, halting script."
    Return
}

if ($PublishState -eq "published") {
    Write-Host "Publishing rules"
    foreach ($rule in $duplicateRules.CrmRecords) {
        write-host "publishing rule id: " $rule.duplicateruleid
        $duplicateRuleToPublish = New-Object Microsoft.Crm.Sdk.Messages.PublishDuplicateRuleRequest
        $duplicateRuleToPublish.DuplicateRuleId = $rule.duplicateruleid
        $response = $conn.ExecuteCrmOrganizationRequest($duplicateRuleToPublish, $trace)
        Write-Host "Rule Published"
    }
    Write-Host "Duplicate Rules Published"
}
elseif ($PublishState -eq "unpublished") {
    Write-Host "Unpublishing rules"
    foreach ($rule in $duplicateRules.CrmRecords) {
        Write-host "unpublishing rule id: " $rule.duplicateruleid
        $duplicateRuleToUnpublish = New-Object Microsoft.Crm.Sdk.Messages.UnpublishDuplicateRuleRequest
        $duplicateRuleToUnpublish.DuplicateRuleId = $rule.duplicateruleid
        $response = $conn.ExecuteCrmOrganizationRequest($duplicateRuleToUnpublish, $trace)
        Write-Host "Rule Unpublished"
    }
    Write-Host "Duplicate Rules Unpublished"
}
