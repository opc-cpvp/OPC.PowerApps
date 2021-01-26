Param([string]$ConnectionString)

$crmSvcUtil = Get-ChildItem . -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force | select -first 1 -ExpandProperty FullName

if ($ConnectionString) {
	& $crmSvcUtil `
		/connectionstring:$ConnectionString `
		/generateActions `
		/out:"Actions/Actions.cs" `
		/namespace:"Compliance.EarlyBound" `
		/SuppressGeneratedCodeAttribute `
		/codecustomization:"DLaB.CrmSvcUtilExtensions.Action.CustomizeCodeDomService,DLaB.CrmSvcUtilExtensions" `
		/codegenerationservice:"DLaB.CrmSvcUtilExtensions.Action.CustomCodeGenerationService,DLaB.CrmSvcUtilExtensions" `
		/codewriterfilter:"DLaB.CrmSvcUtilExtensions.Action.CodeWriterFilterService,DLaB.CrmSvcUtilExtensions" `
		/metadataproviderservice:"DLaB.CrmSvcUtilExtensions.BaseMetadataProviderService,DLaB.CrmSvcUtilExtensions"
} else {
	& $crmSvcUtil `
		/interactivelogin `
		/generateActions `
		/out:"Actions/Actions.cs" `
		/namespace:"Compliance.EarlyBound" `
		/SuppressGeneratedCodeAttribute `
		/codecustomization:"DLaB.CrmSvcUtilExtensions.Action.CustomizeCodeDomService,DLaB.CrmSvcUtilExtensions" `
		/codegenerationservice:"DLaB.CrmSvcUtilExtensions.Action.CustomCodeGenerationService,DLaB.CrmSvcUtilExtensions" `
		/codewriterfilter:"DLaB.CrmSvcUtilExtensions.Action.CodeWriterFilterService,DLaB.CrmSvcUtilExtensions" `
		/metadataproviderservice:"DLaB.CrmSvcUtilExtensions.BaseMetadataProviderService,DLaB.CrmSvcUtilExtensions"
}