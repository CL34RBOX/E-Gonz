function Invoke-Ghoul {
    param([string]$Path="C:\")
    $files=Get-ChildItem $Path -Recurse -Force -File -ErrorAction SilentlyContinue |
           Where-Object { $_.Length -lt 512 }
    return @{ Entity="Ghoul"; Count=$files.Count; Files=$files.FullName }
}
