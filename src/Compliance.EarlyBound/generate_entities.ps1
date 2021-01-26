Param([string]$ConnectionString)

$crmSvcUtil = Get-ChildItem . -Filter "CrmSvcUtil.exe" -Recurse -ErrorAction SilentlyContinue -Force | select -first 1 -ExpandProperty FullName

if ($ConnectionString) {
	& $crmSvcUtil `
		/connectionstring:$ConnectionString `
		/namespace:"Compliance.EarlyBound.Entities" `
		/out:"Entities\CrmServiceContext.cs" `
		/servicecontextname:"CrmServiceContext" `
		/SuppressGeneratedCodeAttribute `
		/codecustomization:"DLaB.CrmSvcUtilExtensions.Entity.CustomizeCodeDomService,DLaB.CrmSvcUtilExtensions" `
		/codegenerationservice:"DLaB.CrmSvcUtilExtensions.Entity.CustomCodeGenerationService,DLaB.CrmSvcUtilExtensions" `
		/codewriterfilter:"DLaB.CrmSvcUtilExtensions.Entity.CodeWriterFilterService,DLaB.CrmSvcUtilExtensions" `
		/namingservice:"DLaB.CrmSvcUtilExtensions.NamingService,DLaB.CrmSvcUtilExtensions" `
		/metadataproviderservice:"DLaB.CrmSvcUtilExtensions.Entity.MetadataProviderService,DLaB.CrmSvcUtilExtensions"
} else {
	& $crmSvcUtil `
		/interactivelogin `
		/namespace:"Compliance.EarlyBound.Entities" `
		/out:"Entities\CrmServiceContext.cs" `
		/servicecontextname:"CrmServiceContext" `
		/SuppressGeneratedCodeAttribute `
		/codecustomization:"DLaB.CrmSvcUtilExtensions.Entity.CustomizeCodeDomService,DLaB.CrmSvcUtilExtensions" `
		/codegenerationservice:"DLaB.CrmSvcUtilExtensions.Entity.CustomCodeGenerationService,DLaB.CrmSvcUtilExtensions" `
		/codewriterfilter:"DLaB.CrmSvcUtilExtensions.Entity.CodeWriterFilterService,DLaB.CrmSvcUtilExtensions" `
		/namingservice:"DLaB.CrmSvcUtilExtensions.NamingService,DLaB.CrmSvcUtilExtensions" `
		/metadataproviderservice:"DLaB.CrmSvcUtilExtensions.Entity.MetadataProviderService,DLaB.CrmSvcUtilExtensions"
}