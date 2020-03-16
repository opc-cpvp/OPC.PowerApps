# Only generate _managed files for the packing. They are the same as unmanaged files
# NOTE: Working directory should be src/Compliance.Solution/Solution
$files = Get-Childitem ./Entities/*/FormXml/*/* -Filter *.xml -Recurse
$files += Get-Childitem ./AppModuleSiteMaps/*/* -Filter *.xml -Recurse
$files += Get-Childitem ./AppModules/*/* -Filter *.xml -Recurse
$files | foreach { Copy-Item $_.FullName -Destination $_.FullName.Replace(".xml", "_managed.xml") }