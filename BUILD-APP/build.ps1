param (
    [string]$Profile = "release"
)

$ErrorActionPreference = "Stop"

$appDir = $PSScriptRoot
$rootDir = (Get-Item $appDir).Parent.FullName
$outputDir = Join-Path $rootDir "HASIL-APLIKASI"

Write-Host "==> [BUILD-APP] Membangun aplikasi single portable binary ($Profile)..." -ForegroundColor Cyan

Push-Location $appDir
try {
    if ($Profile -eq "release") {
        cargo build --release
    } else {
        cargo build
    }
    if ($LASTEXITCODE -ne 0) {
        throw "Cargo build gagal dengan kode keluar $LASTEXITCODE"
    }
}
finally {
    Pop-Location
}

$candidate1 = Join-Path $appDir "target\$Profile\Kit-App-Rust.exe"
$candidate2 = Join-Path $appDir "src-tauri\target\$Profile\Kit-App-Rust.exe"

if (Test-Path $candidate1) {
    $exeSource = $candidate1
} elseif (Test-Path $candidate2) {
    $exeSource = $candidate2
} else {
    Write-Error "Berkas executable tidak ditemukan di $candidate1 maupun $candidate2"
}

# Siapkan folder output HASIL-APLIKASI dan bersihkan file/folder lain agar murni hanya 1 file aplikasi portabel
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
} else {
    # Bersihkan file dan folder di dalam HASIL-APLIKASI kecuali .gitkeep
    Get-ChildItem -Path $outputDir -Recurse -Exclude ".gitkeep" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
}
$gitkeepPath = Join-Path $outputDir ".gitkeep"
if (-not (Test-Path $gitkeepPath)) {
    Set-Content -Path $gitkeepPath -Value "# Placeholder for HASIL-APLIKASI"
}

# Salin HANYA file executable aplikasi portabel
$exeDest = Join-Path $outputDir "Kit-App-Rust.exe"
Copy-Item $exeSource -Destination $exeDest -Force

$allItems = Get-ChildItem -Path $outputDir
$exeInfo = Get-Item $exeDest

Write-Host "==> [BERHASIL] Aplikasi portabel mandiri selesai dibangun!" -ForegroundColor Green
Write-Host "    Aplikasi       : $($exeInfo.FullName)" -ForegroundColor Gray
Write-Host "    Ukuran         : $($exeInfo.Length) bytes ($([math]::Round($exeInfo.Length / 1MB, 2)) MB)" -ForegroundColor Gray
Write-Host "    Total Berkas   : $($allItems.Count) berkas di $($outputDir) (Murni 1 aplikasi portabel)" -ForegroundColor Gray
