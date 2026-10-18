1. **MANDATORY TASK LIST IN `list-tugas/`**:
   - Setiap sebelum memperbaiki atau memodifikasi kode, WAJIB membuat file daftar tugas/rencana perbaikan di dalam folder:
     `list-tugas/`
   - **SELALU BUAT FILE BARU** (JANGAN menimpa/overwrite file tugas yang sudah ada sebelumnya).
   - Penamaan file daftar tugas baru **WAJIB diawali dengan nomor urut bertahap** (contoh: `01-...`, `02-...`, `03-...`, dst.).
   - Analisa dan petakan seluruh file yang terdampak sebelum melakukan perubahan kode.
   - Jalankan tugas perbaikan secara bertahap mengacu pada file tugas yang dibuat.
   - Ceklis (`[x]`) hasil tugas yang telah selesai dan diverifikasi pada file daftar tugas tersebut.

2. **LARANGAN MEMBUKA BROWSER UNTUK PENGUJIAN / TESTING**:
   - **DILARANG KERAS** menggunakan tool `browser_subagent`, browser automation GUI, atau membuka jendela browser baru untuk keperluan testing/uji coba.
   - Seluruh pengujian dan verifikasi kode **WAJIB** dilakukan secara terprogram (programmatic) menggunakan terminal, seperti script Node.js (HTTP/API request), `curl`, pemeriksaan bundle/file output, atau unit test tanpa GUI browser.
   - Aturan ini wajib dipatuhi demi kenyamanan pengguna agar lingkungan kerja desktop/browser pengguna tidak terganggu.

3. **LARANGAN KODE MONOLIT & KEWAJIBAN STRUKTUR MODULAR TINGKAT ATOM**:
   - **DILARANG KERAS** membuat kode monolit (menumpuk banyak kode/fungsi dalam 1 file), baik pada kode di folder `BUILD-UI`, `BUILD-DLL`, maupun `BUILD-APP`.
   - Gunakan desain kode tingkat atom (*atomic design / separation of concerns*). Pisahkan tiap-tiap fungsi atau komponen ke dalam berkas tersendiri.
   - **Pola Penamaan Folder & Pemisahan**: Jika ada file induk (misal `testing.xx`) yang fungsinya hendak dipisah ke file lain, buat folder baru dengan nama yang sama dengan file induk (contoh nama foldernya `"testing"`), lalu masukkan file-file fungsi pecahan tersebut ke dalam folder itu.