param (
    [string]$Profile = "release"
)

$ErrorActionPreference = "Stop"

Push-Location $PSScriptRoot
try {
    Write-Host "==> Membangun Rust DLL ($Profile)..." -ForegroundColor Cyan

    if ($Profile -eq "release") {
        cargo build --release
        $srcDir = "target/release"
    } else {
        cargo build
        $srcDir = "target/debug"
    }

    $destDir = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "ASSETS\dll"

    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    $dllPath = Join-Path $PSScriptRoot "$srcDir\kit_app_rust.dll"

    if (Test-Path $dllPath) {
        Copy-Item $dllPath -Destination $destDir -Force
        $fileInfo = Get-Item (Join-Path $destDir "kit_app_rust.dll")
        Write-Host "==> BERHASIL: kit_app_rust.dll disalin ke ASSETS\dll!" -ForegroundColor Green
        Write-Host "    Ukuran file : $($fileInfo.Length) bytes" -ForegroundColor Gray
        Write-Host "    Lokasi      : $($fileInfo.FullName)" -ForegroundColor Gray
    } else {
        Write-Error "Berkas DLL tidak ditemukan di: $dllPath"
    }
}
finally {
    Pop-Location
}
