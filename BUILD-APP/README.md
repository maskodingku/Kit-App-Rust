# BUILD-APP (Tauri v2 Desktop Application)

Modul aplikasi desktop portabel yang dibangun menggunakan **Rust** dan **Tauri v2**.

## Fitur Utama
1. **Tauri v2 Terbaru**: Menggunakan framework runtime Tauri v2 (`tauri 2.12.x`).
2. **Aplikasi Only Portabel**: Mengompilasi binary tunggal mandiri (`Kit-App-Rust.exe`) tanpa memerlukan installer setup (MSI / NSIS).
3. **Static CRT Linking (`+crt-static`)**: Dikonfigurasi pada `.cargo/config.toml` sehingga binary aplikasi dan file DLL tidak membutuhkan Microsoft Visual C++ Redistributable (`VCRUNTIME140.dll` / `MSVCP140.dll`) di komputer pengguna lain.
4. **Otomatisasi Aset**: Menyertakan seluruh berkas dan folder dari `ASSETS/` secara langsung.
5. **Output Terpusat**: Output build otomatis disimpan di `HASIL-APLIKASI/`.

## Struktur Direktori
```
BUILD-APP/
├── .cargo/
│   └── config.toml        # Konfigurasi CRT statis (+crt-static)
├── src-tauri/             # Proyek Rust Tauri v2
│   ├── Cargo.toml         # Manifest dependencies
│   ├── tauri.conf.json    # Konfigurasi Tauri v2 (frontendDist & resources)
│   ├── src/
│   │   ├── main.rs        # Entry point binary
│   │   └── lib.rs         # Setup builder Tauri
│   └── capabilities/      # Hak akses/permissions Tauri
├── build.ps1              # Script build & auto-deploy ke HASIL-APLIKASI/
├── build.bat              # Script build cepat untuk CMD Windows
└── package.json           # Runner npm run build
```

## Cara Build
Dari folder `BUILD-APP/`:
```powershell
# Via npm
npm run build

# Atau via PowerShell
.\build.ps1

# Atau via CMD
build.bat
```

Atau dari root project `Kit App Rust`:
```bash
npm run build:app
# Atau bangun semuanya sekaligus (UI + DLL + APP):
npm run build:all
```
