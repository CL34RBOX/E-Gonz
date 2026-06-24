param(
    [string]$SourceRoot = "src"
)

$Patterns = @(
    "MODULE: MICTLANTECUHTLI_KINETIC_COUPLER",
    "credentials:\s*'omit'",
    "X-Requested-With",
    "__zone_symbol__fetch",
    "transportKey\s*=\s*window.__zone_symbol__fetch"
)

$Files = Get-ChildItem -Path $SourceRoot -Recurse -Include *.js -ErrorAction SilentlyContinue

$Hits = @()

foreach ($File in $Files) {
    $Content = Get-Content $File.FullName -Raw
    foreach ($Pattern in $Patterns) {
        if ($Content -match $Pattern) {
            $Hits += [PSCustomObject]@{
                File    = $File.FullName
                Pattern = $Pattern
            }
        }
    }
}

if ($Hits.Count -gt 0) {
    Write-Host "Legacy MICTL detected:"
    $Hits | Format-Table -AutoSize
    exit 1
} else {
    Write-Host "No legacy MICTL code detected."
}
