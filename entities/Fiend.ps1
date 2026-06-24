function Invoke-Fiend {
    param([string]$Path="C:\")
    $denied=@()
    foreach ($f in Get-ChildItem $Path -Recurse -Force -File -ErrorAction SilentlyContinue) {
        try { Get-Content $f.FullName -ErrorAction Stop | Out-Null }
        catch { $denied += $f.FullName }
    }
    return @{ Entity="Fiend"; Count=$denied.Count; Files=$denied }
}
