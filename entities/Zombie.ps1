function Invoke-Zombie {
    param([string]$Path="C:\")
    $z=Get-ChildItem $Path -Recurse -Force -File -ErrorAction SilentlyContinue |
       Where-Object { $_.Length -eq 0 -or $_.Extension -in ".tmp",".bak",".old" }
    return @{ Entity="Zombie"; Count=$z.Count; Files=$z.FullName }
}
