function Invoke-Wizard {
    param([string]$Path="C:\")
    $entropy=@()
    foreach ($f in Get-ChildItem $Path -Recurse -Force -File -ErrorAction SilentlyContinue) {
        try {
            $bytes=[IO.File]::ReadAllBytes($f.FullName)
            $freq=($bytes|Group-Object|ForEach-Object{ $_.Count/$bytes.Length })
            $H=-(($freq|ForEach-Object{ $_*[Math]::Log($_,2) })|Measure-Object -Sum).Sum
            if ($H -gt 7.5) { $entropy += $f.FullName }
        } catch {}
    }
    return @{ Entity="Wizard"; Count=$entropy.Count; Files=$entropy }
}
