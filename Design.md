# PANDUAN DESAIN & DOKUMEN SPESIFIKASI UI/UX
## Subdomain: game.travelista.id (Portal Game Ala Friv)

> **Catatan Dokumen:**  
> Dokumen ini adalah **panduan desain tunggal (Single Source of Truth / Design System)** untuk `game.travelista.id`. Seluruh implementasi kode nantinya **wajib mengacu** pada spesifikasi token warna, komponen navigasi, aturan slot iklan, dan struktur grid yang dirumuskan di sini.

---

## 1. Brand Identity & Design Tokens

Desain `game.travelista.id` mengadopsi DNA visual portal induk **Travelista** dengan sentuhan dinamis, playful, dan bersih untuk portal ribuan game mini (seperti Friv/Poki).

### 1.1 Palet Warna Resmi (Color Palette)

| Kategori Token | Nama Token | Nilai HEX | RGB / HSL | Implementasi & Karakteristik |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | `travelista-red` | `#E53935` | `rgb(229, 57, 53)` | Warna identitas utama Travelista. Digunakan untuk background Ticker Berita, tombol aksi primer, badge "HOT", dan highlight aktif. |
| **Primary Dark** | `travelista-red-dark` | `#C62828` | `rgb(198, 40, 40)` | State hover pada tombol primer dan border elemen aksen merah. |
| **Neutral Dark** | `neutral-black` | `#1A1D20` | `rgb(26, 29, 32)` | Warna teks judul utama, navbar background (mode gelap), dan elemen kontras tinggi. |
| **Neutral Body** | `neutral-gray-700` | `#374151` | `rgb(55, 65, 81)` | Warna teks deskripsi, metadata game, dan link navigasi sekunder. |
| **Neutral Border** | `neutral-gray-200` | `#E5E7EB` | `rgb(229, 231, 235)` | Garis pembatas kartu game, pemisah navbar, dan placeholder iklan. |
| **Canvas Background**| `canvas-light` | `#F8FAFC` | `rgb(248, 250, 252)` | Latar belakang halaman utama agar mata pengguna tidak cepat lelah saat browsing ratusan game. |
| **Surface White** | `surface-white` | `#FFFFFF` | `rgb(255, 255, 255)` | Warna latar kartu game, header navbar, dan modal pop-up. |
| **Accent Sky Blue** | `travelista-blue` | `#0284C7` | `rgb(2, 132, 199)` | Mengikuti pill *"Tiket Kapal"* Travelista. Digunakan untuk tombol *"Main Acak"* dan kategori puzzle/santai. |
| **Accent Blue Soft**| `travelista-blue-light`| `#E0F2FE` | `rgb(224, 242, 254)` | Background badge pill biru pada mode terang. |
| **Accent Green** | `travelista-green` | `#16A34A` | `rgb(22, 163, 74)` | Mengikuti pill *"Paket Wisata"* Travelista. Digunakan untuk tombol *"Leaderboard"* dan badge "BARU". |
| **Accent Green Soft**| `travelista-green-light`| `#DCFCE7`| `rgb(220, 252, 231)` | Background badge pill hijau pada mode terang. |
| **Accent Amber** | `travelista-amber` | `#F59E0B` | `rgb(245, 158, 11)` | Warna bintang rating dan ikon trofi ranking. |

---

### 1.2 Sistem Tipografi (Typography)

* **Font Primer (Display & Body):** `Inter`, `system-ui`, `-apple-system`, `sans-serif`. Bersih, terbaca jelas pada ukuran kecil di thumbnail kartu game.
* **Font Aksen (Logo & Ticker):** `Poppins` atau `Montserrat` (bold 700 / 800) untuk mencerminkan gaya logo Travelista yang dinamis.

#### Skala Hirarki Tipografi:
* **H1 / Page Title:** 24px – 28px | Bold 700 | Line-height 1.2
* **Game Card Title:** 13px – 14px | Semi-bold 600 | Line-height 1.3 (truncate 1 baris)
* **Navbar Items:** 14px | Medium 500
* **Pill Badges:** 12px | Semi-bold 600
* **Ad Label / Tiny Meta:** 10px – 11px | Regular 400 | Uppercase & tracking-wider

---

### 1.3 Sistem Sudut & Bayangan (Radius & Elevations)

* **Game Card Radius:** `16px` (Rounded-2xl) – Karakteristik Friv yang ramah pengguna dan modern.
* **Button & Pill Radius:** `9999px` (Full Rounded).
* **Modal & Container Radius:** `20px`.
* **Elevasi Bayangan (Shadows):**
  * Normal: `0 2px 4px -1px rgba(0, 0, 0, 0.06)`
  * Hover Game Card: `0 12px 24px -4px rgba(0, 0, 0, 0.18)` + border glow tipis warna merah/biru.

---

## 2. Blueprint & Spesifikasi Navbar

Navbar `game.travelista.id` terdiri dari 2 tingkat: **Tier 1 (Main Bar)** dan **Tier 2 (Ticker Bar Merah)**.

```
+---------------------------------------------------------------------------------------------------------------+
|  [Logo: Travelista ]    Arcade   Petualangan   Puzzle   Aksi   Santai   | [🎮 Main Acak] [🏆 Ranking]  🔍 [ID] |
+---------------------------------------------------------------------------------------------------------------+
```

### 2.1 Tier 1: Main Bar (Tinggi: 68px)
1. **Logo & Sub-brand:**
   * Logo teks melengkung *"Travelista"* warna gelap/ungu tua, ada di folder public travelista-logo.
   * Teks badge tebal *"GAMES"* di sisi kanan logo dengan background merah `#E53935` dan teks putih `text-[10px] uppercase font-black px-2 py-0.5 rounded-md`.
   * Klik logo: me-refresh atau kembali ke homepage `game.travelista.id`.
   * Terdapat link mikro *"Kembali ke Travelista Utama"* untuk akses balik ke portal travel.
2. **Kategori Navigasi:**
   * Item: `Semua`, `Arcade`, `Petualangan`, `Puzzle`, `Aksi`, `Olahraga`, `Santai`, `Multiplayer`.
   * Indikator aktif: Teks berubah jadi merah `#E53935` dengan garis indikator bawah 2px.
3. **Pills Aksi Khas Travelista (Dual Badges):**
   * **Pill 1 (Biru):** `[ 🎮 Main Acak ]`
     * Latar: `#E0F2FE`, border: `#BAE6FD`, teks & ikon: `#0284C7`.
     * Fungsi: Membuka game acak secara instan (fitur favorit portal mini game).
   * **Pill 2 (Hijau):** `[ 🏆 Leaderboard ]`
     * Latar: `#DCFCE7`, border: `#BBF7D0`, teks & ikon: `#16A34A`.
     * Fungsi: Membuka tabel skor tertinggi pemain.
4. **Alat Pengguna (Right Utilities):**
   * Ikon Pencarian: Membuka modal pencarian instan dengan auto-complete judul game.
   * Pemilih Bahasa: Dropdown `ID` / `EN`.

### 2.2 Tier 2: Sub-bar Ticker Merah (Tinggi: 36px)
* **Background:** Merah solid `#E53935`.
* **Badge Kiri:** Kotak teks putih tebal *"TRENDING"* atau *"BREAKING"* dengan aksen gelap tipis.
* **Area Teks Berjalan (Marquis):**
  * Teks putih bersih `text-xs font-medium`.
  * Menampilkan informasi dinamis: nama game yang sedang viral, skor tertinggi terbaru, atau game baru yang baru ditambahkan.
  * Efek jeda (pause) saat kursor mouse diarahkan ke area ticker (*hover-pause*).

---

## 3. Tata Letak Placeholder Iklan (Ad Placements Guide)

Integrasi iklan dirancang agar menghasilkan **eCPM maksimal** tanpa melanggar kebijakan Google AdSense (*accidental clicks & content occlusion*) serta menjaga kenyamanan bermain.

```
========================================================================================================
[                                          NAVBAR & TICKER                                             ]
========================================================================================================
+----------------------+-------------------------------------------------------+-----------------------+
|                      |  [BARIS FILTER KATEGORI: JELAJAHI PILLS]              |                       |
|  AD SKYSCRAPER KIRI  |-------------------------------------------------------|  AD SKYSCRAPER KANAN  |
|  (Fixed Sticky)      |  [HERO SECTION: 1 Game Utama + 2 Game Unggulan]       |  (Fixed Sticky)       |
|                      |-------------------------------------------------------|                       |
|  Ukuran: 160x600 px  |  [FRIV-STYLE GAME GRID]                               |  Ukuran: 160x600 px   |
|  atau 300x600 px     |  [Game] [Game] [Game] [Game] [SPONSORED AD TILE] [Game] |  atau 300x600 px     |
|                      |  [Game] [Game] [Game] [Game] [Game] [Game] [Game] [Game] |                       |
|  Hanya tampil pada   |  [Game] [Game] [Game] [Game] [Game] [Game] [Game] [Game] |  Hanya tampil pada    |
|  layar >= 1440px     |-------------------------------------------------------|  layar >= 1440px      |
|                      |  [LEADERBOARD BANNER AD: 728x90 px / 970x250 px]      |                       |
+----------------------+-------------------------------------------------------+-----------------------+
========================================================================================================
[  [X Minimize]         STICKY BOTTOM ANCHOR AD (Banner Melayang 728x90 / 320x50)                      ]
========================================================================================================
```

### 3.1 Detail Spesifikasi Setiap Slot Iklan

#### A. Slot 1 & 2: Gutter / Skyscraper Ads (Sisi Kiri & Kanan Layar)
* **Format:** `160x600` (Wide Skyscraper) atau `300x600` (Half Page Banner).
* **Posisi:** Menempel tetap (*fixed / sticky*) di margin kiri dan kanan di luar kontainer konten utama.
* **Perilaku Responsif:**
  * **Screen >= 1440px (Ultra-wide / Large Desktop):** Kedua sisi aktif ditampilkan.
  * **Screen 1280px - 1439px:** Hanya tampilkan sisi kanan, atau matikan kedua sisi agar grid game tidak terhimpit.
  * **Screen < 1280px (Laptop biasa, Tablet, Mobile):** **Wajib disembunyikan total (`display: none`)**.
* **Aturan Visual:**
  * Wajib diberi label teks abu-abu kecil `"IKLAN / ADVERTISEMENT"` di atas banner dengan ukuran 9px.
  * Harus memiliki border tipis `#E5E7EB` untuk membedakan materi iklan dengan kanvas konten.

#### B. Slot 3: Sticky Bottom Anchor Ad (Melayang di Bawah Layar)
* **Format:** `728x90` (Desktop) dan `320x50` / `300x50` (Mobile).
* **Posisi:** Melayang di bagian bawah tengah layar (*fixed bottom*).
* **Fitur Wajib (Anti-Penalti Google):**
  * **Tombol Minimize / Tutup:** Memiliki tombol chevron lipat atau tombol `X` di atas banner agar pemain game tidak terhalang.
  * **Safe-Zone Padding:** Elemen kontainer halaman terbawah wajib diberi padding ekstra sebesar `110px` di desktop dan `70px` di mobile agar banner tidak menutupi kartu game paling bawah (*no content overlap*).
  * **Tidak Boleh Menabrak Tombol Navigasi:** Jika ada tombol bantuan atau chat, letakkan di pojok kanan atas atau integrasikan agar tidak tumpang tindih.

#### C. Slot 4: In-Grid Native Ad Tiles (Gaya Khas Friv / Poki)
* **Format:** Kartu berbentuk kotak yang berbaur secara proporsional dengan kartu game (ukuran 1:1 atau 2:1 span).
* **Penempatan:** Disisipkan otomatis di antara deretan kartu game (misal: di posisi slot ke-9 dan slot ke-25).
* **Aturan Desain:**
  * Menggunakan border dengan garis putus-putus halus atau warna latar sedikit berbeda (misal abu-abu terang `#F1F5F9`).
  * Memiliki label jelas `"SPONSORED"` atau `"IKLAN"` di pojok atas agar pengguna tidak terkecoh.

#### D. Slot 5: Play Screen Ads (Saat Mode Permainan Berjalan)
Ketika pemain mengklik suatu game dan masuk ke halaman/modal gameplay:
1. **Pre-roll Transition Ad:** Layar tunggu 5 detik dengan countdown sebelum frame game dapat dimainkan.
2. **Companion Sidebar Ad (300x250):** Terletak di sisi kanan atau bawah frame game berdampingan dengan petunjuk tombol keyboard (WASD / Panah) dan tombol *"Layar Penuh"*.

---

## 4. Konsep Desain Katalog Game (Friv-Style)

Konsep **Friv** berfokus pada eksplorasi visual: puluhan kotak game berwarna-warni yang padat, rapi, dan instan.

### 4.1 Filter Kategori "Jelajahi" (Pill Chips)
Tepat di bawah ticker, terdapat deretan chip filter bergaya Travelista:
* Format: `JELAJAHI > [ Semua ] [ 🔥 Populer ] [ 🚗 Balapan ] [ ⚔️ Aksi ] [ 🧩 Puzzle ] [ 👗 Santai ]`
* Chip aktif: Background merah `#E53935`, teks putih, shadow halus.
* Chip non-aktif: Background putih `#FFFFFF`, border abu-abu `#E2E8F0`, teks abu-abu gelap `#374151`.

### 4.2 Hero Section Unggulan (Meniru Grid Travelista)
Sebelum masuk ke grid penuh Friv, baris teratas menampilkan 3 game terbaik minggu ini:
* **1 Kartu Besar (Kiri):** Game of the Week dengan thumbnail sinematik, badge rating bintang, jumlah pemain aktif, dan tombol *"Main Sekarang"*.
* **2 Kartu Sedang Bertumpuk (Kanan):** Game yang sedang trending dengan layout horizontal.

### 4.3 Dinding Grid Game Utama (The Friv Grid)
* **Rasio Kartu:** Kotak presisi 1:1 (`aspect-square`) dengan sudut lengkung `rounded-2xl`.
* **Breakpoints Grid Kolom:**
  * Layar HP (Mobile): **3 kolom** (`grid-cols-3`)
  * Tablet: **4 - 5 kolom** (`grid-cols-4 md:grid-cols-5`)
  * Laptop: **6 - 7 kolom** (`lg:grid-cols-6 xl:grid-cols-7`)
  * Monitor Lebar (Desktop 1440px+): **8 - 10 kolom** di antara dua banner Skyscraper.
* **Interaksi Hover (Desktop):**
  * Zoom halus `scale-105` dengan transisi 200ms.
  * Overlay gelap transparan (scrim) muncul menampilkan judul game dan ikon play segitiga.
  * Elevation shadow meningkat tajam (`shadow-xl`).
* **Badge Status Game:**
  * `BARU` (Hijau emerald) di pojok kiri atas.
  * `HOT` (Merah cerah) di pojok kiri atas.
  * `RATING` (Bintang emas di pojok kanan bawah).

---

## 5. Arsitektur Komponen Antarmuka (UI Architecture)

Pemetaan komponen kode yang akan dibuat nantinya:

```
[game.travelista.id]
│
├── components/layout/
│   ├── MainNavbar.tsx           # Navbar Tier-1 (Logo, menu, pills, tools)
│   ├── BreakingTicker.tsx       # Navbar Tier-2 (Ticker marquis merah)
│   ├── CategoryChips.tsx        # Baris filter kategori "Jelajahi"
│   └── AppFooter.tsx            # Footer SEO & link jaringan Travelista
│
├── components/ads/
│   ├── AdSkyscraper.tsx         # Banner vertikal kiri & kanan (responsive 1440px+)
│   ├── AdStickyBottom.tsx       # Banner melayang bawah dengan tombol collapse
│   ├── AdNativeCard.tsx         # Iklan kotak di dalam grid Friv
│   └── AdPlayCompanion.tsx      # Iklan 300x250 di sebelah layar game
│
├── components/game/
│   ├── GameHeroGrid.tsx         # 3 game unggulan format besar ala Travelista
│   ├── FrivGrid.tsx             # Grid wadah ratusan kartu game mini
│   ├── GameCard.tsx             # Kartu individual game (hover effect & badge)
│   ├── GameFrameModal.tsx       # Modal layar permainan (iframe loader)
│   └── SearchModal.tsx          # Modal pencarian cepat game
│
└── types/
    ├── game.ts                  # Interface TypeScript untuk metadata game
    └── ads.ts                   # Tipe konfigurasi & ukuran slot iklan
```

---

## 6. Matriks Responsivitas Layar (Responsive Breakpoints Matrix)

| Breakpoint | Target Layar | Lebar Layar | Skyscraper Kiri-Kanan | Sticky Bottom Ad | Kolom Grid Game |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `sm` | Ponsel (Portrait) | `< 640px` | Sembunyi (Hidden) | Tampil (320x50) | 3 Kolom |
| `md` | Tablet / Foldable | `640px - 1023px`| Sembunyi (Hidden) | Tampil (320x50 / 468x60) | 4 - 5 Kolom |
| `lg` | Laptop Standar | `1024px - 1279px`| Sembunyi (Hidden) | Tampil (728x90) | 6 Kolom |
| `xl` | Desktop / Laptop Besar| `1280px - 1439px`| Sembunyi (Opsional kanan)| Tampil (728x90) | 7 Kolom |
| `2xl`| Wide Desktop | `>= 1440px` | **Tampil Lengkap (Kiri & Kanan)** | Tampil (728x90) | 8 - 10 Kolom |

---

## 7. Status Dokumen & Langkah Selanjutnya

> [!IMPORTANT]
> **Status:** Panduan desain selesai dirumuskan dan telah disetujui untuk arsitektur UI/UX `game.travelista.id`.
> 
> **Langkah Berikutnya (Menunggu instruksi pembuatan kode):**
> 1. Konfigurasi token warna dan font di stylesheet Next.js (`globals.css`).
> 2. Implementasi komponen layout dasar: Navbar 2-Tier & Ticker.
> 3. Implementasi wrapper layout iklan Skyscraper & Bottom Sticky.
> 4. Implementasi Friv-style Game Grid & Game Card interaktif.
