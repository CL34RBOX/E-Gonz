function Invoke-Witch {
    param([string]$Path="C:\")
    $scripts=Get-ChildItem $Path -Recurse -Force -File -ErrorAction SilentlyContinue |
             Where-Object { $_.Extension -in ".ps1",".sh",".py" -and $_.Attributes -match "Hidden" }
    return @{ Entity="Witch"; Count=$scripts.Count; Files=$scripts.FullName }
}
