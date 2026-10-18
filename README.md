# Kit App Rust

> **Desktop Application Starter Kit** berbasis **Rust**, **Tauri v2**, **React 19**, **Tailwind CSS v4**, dan **Rust CDYLIB (Windows DLL)**.

Proyek ini dirancang sebagai starter kit aplikasi desktop modern yang siap pakai untuk membuat berbagai macam proyek aplikasi desktop mandiri, ringan, dan portabel di sistem operasi Windows.

---

## 🚀 Fitur Unggulan

- **Single Portable Binary**: Hasil build berupa 1 file executable mandiri (`Kit-App-Rust.exe`) di dalam folder `HASIL-APLIKASI/` tanpa memerlukan installer setup (MSI / NSIS).
- **Embedded Assets & DLL**: Seluruh berkas frontend (`ASSETS/`) dan pustaka C-ABI (`ASSETS/dll/kit_app_rust.dll`) ditanamkan langsung (*statically embedded*) ke dalam binary executable.
- **Static CRT Linking (`+crt-static`)**: Dikonfigurasi dengan CRT statis MSVC sehingga aplikasi tidak memerlukan instalasi Microsoft Visual C++ Redistributable (`VCRUNTIME140.dll` / `MSVCP140.dll`) di komputer target.
- **Arsitektur Modular Tingkat Atom**: Pemisahan fungsi-fungsi ke berkas terkecil (*atomic design*) demi kemudahan perawatan kode (*separation of concerns*).
- **Alur Orkestrasi Satu Pintu**: Skrip root `npm run dev` dan `npm run build` otomatis mengorkestrasi UI, DLL, dan App.

---

## 📁 Struktur Direktori

```text
KIT-APP-RUST/
├── BUILD-UI/             # Frontend UI (React 19 + Tailwind v4 + Vite)
├── BUILD-DLL/            # Pustaka dinamis Rust CDYLIB (Windows DLL)
├── BUILD-APP/            # Host aplikasi Tauri v2 (Rust desktop wrapper)
├── ASSETS/               # Folder perantara aset frontend & DLL tertanam
│   └── .gitkeep
├── HASIL-APLIKASI/       # Output akhir: 1 file portable (Kit-App-Rust.exe)
│   └── .gitkeep
├── package.json          # Orkestrasi terpadu build & dev pipeline
└── README.md             # Dokumentasi proyek
```

---

## 🛠️ Prasyarat

- [Node.js](https://nodejs.org/) (v18+)
- [Rust & Cargo](https://rustup.rs/) (v1.90+ dengan target `x86_64-pc-windows-msvc`)
- Visual Studio C++ Build Tools (MSVC toolchain)

---

## 💻 Panduan Penggunaan

### 1. Mode Pengembangan (Development)
Jalankan perintah berikut di root folder:
```bash
npm run dev
```
Alur otomatis:
1. Membangun bundle frontend `BUILD-UI` ke `ASSETS/`.
2. Mengompilasi `BUILD-DLL` ke `ASSETS/dll/kit_app_rust.dll`.
3. Menjalankan aplikasi Tauri host `BUILD-APP` dalam mode debug (`cargo run`).

### 2. Mode Produksi (Build Portable Executable)
Jalankan perintah berikut di root folder:
```bash
npm run build
```
Alur otomatis:
1. Mengompilasi dan mengoptimasi UI frontend ke folder `ASSETS/`.
2. Mengompilasi Rust CDYLIB rilis ke `ASSETS/dll/kit_app_rust.dll`.
3. Mengompilasi aplikasi Tauri host rilis dengan menyertakan seluruh aset ke dalam 1 file binary mandiri di `HASIL-APLIKASI/Kit-App-Rust.exe`.

---

## 📜 Lisensi
MIT License © 2026 Abdi Syahputra Harahap
