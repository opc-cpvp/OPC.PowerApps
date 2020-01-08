$packageRoot = "..\packages"
$solutionPackager = Get-ChildItem -Path $packageRoot -Filter "SolutionPackager.exe" -Recurse -ErrorAction SilentlyContinue -Force

& $solutionPackager.FullName `
	/action:Pack `
	/zipfile:".\bin\Debug\PkgFolder\Compliance.zip" `
	/folder:"..\Compliance.Solution\Solution" `
	/map:"..\Compliance.Solution\map.xml" `
	/packagetype:Both `
	/nologo