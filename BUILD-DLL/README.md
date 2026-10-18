# BUILD-DLL (Rust CDYLIB)

Modul pustaka dinamis (Windows `.dll`) yang dibangun menggunakan bahasa pemrograman Rust (C-ABI kompatibel).

## Lokasi Output Build
Setiap kali proses build dijalankan, berkas DLL hasil kompilasi secara otomatis disalin ke:
`ASSETS/dll/kit_app_rust.dll`

## Struktur Berkas
```
BUILD-DLL/
├── src/
│   └── lib.rs             # Kode sumber Rust & fungsi ekspor (extern "C")
├── Cargo.toml             # Konfigurasi package & crate-type = ["cdylib", "rlib"]
├── build.bat              # Script build cepat untuk CMD Windows
├── build.ps1              # Script build PowerShell & deployment otomatis ke ASSETS/dll
├── package.json           # Runner script (opsional) untuk npm run build
└── target/                # Berkas intermediate build Cargo
```

## Cara Build
Anda dapat memilih salah satu cara di bawah ini untuk melakukan build dan otomatis menyalin ke `ASSETS/dll/`:

1. **Menggunakan CMD / Terminal**:
   ```cmd
   build.bat
   ```

2. **Menggunakan PowerShell**:
   ```powershell
   .\build.ps1
   ```
   Atau untuk versi debug:
   ```powershell
   .\build.ps1 debug
   ```

3. **Menggunakan npm**:
   ```bash
   npm run build
   ```

4. **Menggunakan Cargo murni**:
   ```bash
   cargo build --release
   # File terletak di target/release/kit_app_rust.dll
   ```

## Fungsi yang Diekspor (Exported C-ABI Functions)
- `int get_dll_version()`: Mengembalikan kode versi DLL (contoh: `100` untuk v1.0.0).
- `int add_numbers(int a, int b)`: Menjumlahkan dua bilangan bulat 32-bit.
- `double multiply_numbers(double a, double b)`: Mengalikan dua bilangan pecahan 64-bit.
- `bool is_module_ready()`: Mengembalikan `true` jika modul siap digunakan.
