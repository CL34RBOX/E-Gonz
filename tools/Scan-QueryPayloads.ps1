param(
    [string]$SourceRoot = "src"
)

$SuspiciousPatterns = @(
    "%28function%28",
    "MODULE%3A_MICTL",
    "%2F%2A%2A",
    "%7B_%22use_strict"
)

$Files = Get-ChildItem -Path $SourceRoot -Recurse -Include *.html, *.js, *.json, *.txt -ErrorAction SilentlyContinue

$Hits = @()

foreach ($File in $Files) {
    $Content = Get-Content $File.FullName -Raw
    foreach ($Pattern in $SuspiciousPatterns) {
        if ($Content -match $Pattern) {
            $Hits += [PSCustomObject]@{
                File    = $File.FullName
                Pattern = $Pattern
            }
        }
    }
}

if ($Hits.Count -gt 0) {
    Write-Host "Encoded JS payloads detected:"
    $Hits | Format-Table -AutoSize
    exit 1
} else {
    Write-Host "No encoded JS payloads found."
}
