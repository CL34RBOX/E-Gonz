function Invoke-Goblin {
    param([string]$Path="C:\")
    $weird=Get-ChildItem $Path -Recurse -Force -File -ErrorAction SilentlyContinue |
           Where-Object { $_.Name -match "[^a-zA-Z0-9\.\-_]+" }
    return @{ Entity="Goblin"; Count=$weird.Count; Files=$weird.FullName }
}
