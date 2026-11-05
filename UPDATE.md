# CHANGELOG & UPDATE LOG (game.travelista.id)

Dokumen ini mencatat seluruh riwayat pembaruan, perbaikan bug, dan penambahan fitur pada project **Travelista Games** (`game.travelista.id`) dengan format standar **Semantic Versioning (SemVer: `MAJOR.MINOR.PATCH`)**:

* **MAJOR (`X.0.0`):** Perubahan besar pada arsitektur sistem, struktur database, atau breaking changes.
* **MINOR (`0.X.0`):** Penambahan fitur baru, halaman baru, atau pembaruan fungsionalitas yang backward-compatible.
* **PATCH (`0.0.X`):** Perbaikan bug, hotfix styling, optimasi performa, atau perbaikan minor.

---

## [1.5.0] - 2026-11-03
### Added & Changed (Zero-Asset Games & No More Duplicates)
- **Eliminasi Game Duplikat / Placeholder:** Menghapus seluruh link fallback duplikat pada 9 game kemarin dan menggantinya dengan implementasi game mandiri.
- **Implementasi 8 Game Baru dari `list-game2.md`:**
  1. `becak-drift` (`/games/becak-drift/`): Top-down micro racing & drift becak Malioboro Jogja.
  2. `candi-stacker` (`/games/candi-stacker/`): Precision tower stacker balok andesit Candi Borobudur dengan audio gamelan.
  3. `batik-flow` (`/games/batik-flow/`): Rotating pipe puzzle sambung ukiran lilin malam canting kain batik mori.
  4. `layangan-sanur` (`/games/layangan-sanur/`): Action tension battle layangan aduan bebean di Pantai Sanur Bali.
  5. `kopi-klotok` (`/games/kopi-klotok/`): Rhythm barista menyeduh tetesan kopi & biji panggang di cangkir tanah liat.
  6. `lembah-bromo` (`/games/lembah-bromo/`): Momentum flight paralayang menukik melintasi bukit pasir Bromo.
  7. `pasar-terapung` (`/games/pasar-terapung/`): Falling fruit catcher perahu jukung di Sungai Martapura Banjarmasin.
  8. `kamus-kelana` (`/games/kamus-kelana/`): Word connect & teka-teki silang kosakata destinasi pariwisata nusantara.
- **100% Unique Game Pathing:** Setiap game pada katalog utama kini memiliki direktori dan entry point mandiri (`/games/[slug]/index.html`), sehingga saat diklik tidak akan membuka game yang salah.
- **Enhanced Friv Card Icons:** Menambahkan mapping ikon tematik unik untuk setiap game agar tampilan grid Friv semakin semarak dan mudah dikenali.

---

## [1.4.0] - 2026-11-02
### Added & Changed
- **Official Brand Logo Asset:** Mengganti logo teks di `Navbar.tsx` dan `Footer.tsx` dengan aset gambar resmi `travelista-logo-light.png` beresolusi tajam.
- **Direct Portal Hyperlink:** Menghubungkan klik logo langsung mengarah ke portal utama `https://travelista.id`.
- **Badge GAMES Retention:** Mempertahankan pill badge merah tebal `GAMES` di samping kanan logo gambar.

---

## [1.3.2] - 2026-11-02
### Fixed
- **Hydration Mismatch Fix:** Menambahkan atribut `suppressHydrationWarning` pada tag `<html>` dan `<body>` di `layout.tsx` untuk mencegah crash hidrasi akibat injeksi atribut ekstensi Chrome (Grammarly, ColorZilla).
- **Tailwind Source Scanning:** Menambahkan direktif `@source` di `globals.css` untuk memastikan PostCSS memindai seluruh direktori komponen secara menyeluruh.
- **Cache Clean-up:** Membersihkan cache stale di `.next` dan melakukan build ulang yang sukses menghasilkan stylesheet 58.3 KB.

---

## [1.3.1] - 2026-11-02
### Fixed
- **Webpack & PostCSS Compatibility Patch:**
  - Mengubah script `dev` dan `build` di `package.json` untuk menyertakan flag `--webpack` karena platform Windows host tidak memuat native binary SWC Turbopack.
  - Menginstal package pendukung `@tailwindcss/postcss` dan `postcss`.
  - Membuat file konfigurasi `postcss.config.mjs` untuk memproses `@import "tailwindcss";` pada mode Webpack.

---

## [1.3.0] - 2026-11-02
### Added (Full System & Game MVP Implementation)
- **Implementasi Frontend Next.js 16 + Tailwind CSS v4:**
  - Desain sistem lengkap sesuai token `Design.md`.
  - **Navbar 2-Tier:** Main Bar (Logo, navigasi kategori, tombol pencarian, selector bahasa, dual pills *Main Acak* dan *Leaderboard*) + Sub-bar Ticker Merah dengan animasi marquis berjalan.
  - **Monetisasi & Ad Placements:** Skyscraper Kiri-Kanan (160x600 untuk layar `>= 1440px`), Sticky Bottom Anchor Ad (728x90/320x50 dengan tombol minimize collapse), In-Grid Native Ad Tile, dan Companion Ad 300x250.
  - **Katalog Game Friv-Style:** Hero section 3 game unggulan, chip filter kategori *"Jelajahi"*, dan grid dinamis ubin game responsif.
  - **Layar Gameplay (`/play/[slug]`):** Iframe runner sandbox, kontrol Layar Penuh (Fullscreen), Reload, Simpan Favorit, Bagikan Link, dan panduan tombol kendali keyboard/touch.
  - **3 Game HTML5 Internal Siap Main:**
    1. `nusantara-runner` (Endless runner 2D melintasi Malioboro, Bromo, Bali).
    2. `kapal-feri` (Simulasi nakhoda feri Merak-Bakauheni dengan fisika ombak laut).
    3. `packing-master` (Puzzle drag-and-drop menata koper bagasi).
  - **Interaksi Skor `postMessage`:** Setiap game HTML5 mengirimkan event skor saat game over ke portal Next.js.
  - **Hybrid Data Storage:** Penyimpanan skor dan favorit di `LocalStorage` + modul API route `/api/leaderboard`, `/api/games`, dan `/api/stats` dengan pool koneksi database MariaDB / MySQL.

---

## [1.2.0] - 2026-11-02
### Added
- **Spesifikasi Struktur Direktori Lengkap:** Pemetaan arsitektur folder dan file di `PRD.md` (komponen layout, iklan, game, lib database, public games, dan types).
- **Standalone Build Target:** Konfigurasi Next.js `output: "standalone"` untuk mendukung CloudLinux Node.js Selector di DirectAdmin Hostdata.id.

---

## [1.1.0] - 2026-11-02
### Added
- **Spesifikasi Server Hostdata.id & Database:**
  - Penyesuaian arsitektur untuk DirectAdmin, LiteSpeed Web Server, CloudLinux CageFS, dan Node.js v20.20.2 LTS.
  - Skema database MariaDB 10.11 / MySQL lokal dengan nama database `immanuel_travelista_game`.
  - Prosedur delegasi DNS A Record subdomain `game.travelista.id`.

---

## [1.0.0] - 2026-11-02
### Added (Initial Blueprint & Specification Release)
- **Design System (`Design.md`):** Token warna, blueprint navbar 2-tier, aturan slot iklan AdSense / Better Ads Standards, dan grid katalog ala Friv.
- **Konsep Game (`List-Game.md`):** Brainstorming 12 konsep game mini bertema wisata, kuliner, dan transportasi nusantara beserta use case dan spesifikasi teknis HTML5.
- **Product Requirements Document (`PRD.md`):** Dokumen spesifikasi kebutuhan produk, arsitektur sistem, dan roadmap peluncuran.

