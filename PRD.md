# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Portal Game Web Travelista (Subdomain: game.travelista.id)

* **Versi Dokumen:** 1.2.0 (Complete Folder Structure & Hostdata.id Specs)
* **Status:** Final - Ready for Development & Deployment
* **Target Domain:** `game.travelista.id`
* **Infrastruktur Hosting:** Hostdata.id (DirectAdmin + LiteSpeed + CloudLinux Node.js Selector + MariaDB)

---

## 1. Executive Summary & Visi Produk

**Travelista Games** (`game.travelista.id`) adalah platform game mini web instan bergaya **Friv/Poki** yang terintegrasi secara visual dan fungsional dengan portal media perjalanan **Travelista**. 

### 1.1 Tujuan Bisnis & Produk
1. **Meningkatkan Time-on-Site & Retensi Pengguna:** Menahan pengunjung lebih lama di dalam ekosistem Travelista melalui gameplay kasual yang adiktif.
2. **Monetisasi Iklan Terarah:** Menghasilkan pendapatan melalui unit Google AdSense / Google Ad Manager (GAM) dengan viewability tinggi yang aman dari risiko penalti kebijakan iklan.
3. **Sinergi Produk Travelista:** Mempromosikan produk inti Travelista (*Tiket Kapal, Paket Wisata, dan Artikel Rekomendasi Destinasi*) melalui reward dalam game dan banner internal.

---

## 2. Arsitektur Spesifik Server Hostdata.id & Alur Subdomain

Berdasarkan konfigurasi aktual control panel server **Hostdata.id**:

```
+-----------------------------------------------------------------------------------------------+
|  DOMAIN UTAMA (travelista.id)                                                                 |
|  DNS Manager (Cloudflare / Registrar)                                                         |
|  ├─► www / @  ──────────────►  Vercel (Website Utama Travelista)                              |
|  └─► game (A Record)  ──────►  IP Server Hostdata.id                                          |
+-----------------------------------------------------------------------------------------------+
                                               │
                                               ▼
+-----------------------------------------------------------------------------------------------+
|  WEB SERVER HOSTDATA.ID (DirectAdmin Panel)                                                   |
|  ├─ Web Server Engine : LiteSpeed Web Server                                                  |
|  ├─ OS Layer          : CloudLinux with CageFS                                                |
|  ├─ Node.js Runtime   : CloudLinux Node.js Selector (v20.20.2 LTS - Production Mode)          |
|  ├─ Database          : MariaDB 10.11.19 (phpMyAdmin DA PMA SignOn:3306)                     |
|  ├─ User Base Path    : /home/immanuel/                                                       |
|  └─ App Root Directory: /home/immanuel/travelista-game                                        |
+-----------------------------------------------------------------------------------------------+
```

### 2.1 Spesifikasi Lingkungan Server Hostdata.id (Aktual)
* **Control Panel:** DirectAdmin Web Control Panel.
* **Web Server:** LiteSpeed Web Server (mendukung LSCache dan kompresi Brotli/Gzip otomatis).
* **Node.js Selector:** Phusion Passenger / CloudLinux Node.js Selector versi **`v20.20.2` LTS**.
* **Database Server:** MariaDB `10.11.19-MariaDB-cll-lve` (kompatibel penuh dengan sintaks MySQL 8.0).
* **Port / Socket DB:** Localhost via UNIX socket / Port `3306`.
* **Tools Manajemen DB:** phpMyAdmin (Versi 5.2.3).
* **Akun User Server:** `immanuel` (`/home/immanuel/`).

### 2.2 Langkah Setup Subdomain di Server Hostdata.id
1. **Langkah 1: Delegasi DNS dari Domain Utama (`travelista.id`)**
   * Pihak admin domain utama Travelista menambahkan record berikut di DNS Management mereka:
     * **Tipe:** `A Record`
     * **Name / Host:** `game`
     * **IPv4 Address:** `[IP_SERVER_HOSTDATA_ID]` (IP yang sama dengan yang digunakan oleh domain `immanuel.my.id`).
     * **Proxy Status / TTL:** DNS Only / Auto.
2. **Langkah 2: Menambahkan Domain di DirectAdmin Hostdata.id**
   * Buka panel DirectAdmin -> Masuk menu **Domain Setup** (atau **Subdomain Management**).
   * Tambahkan domain baru: `game.travelista.id`.
   * Aktifkan SSL gratis via menu **SSL Certificates** -> Pilih *Free & automatic certificate from Let's Encrypt* untuk hostname `game.travelista.id`.
3. **Langkah 3: Konfigurasi Aplikasi di Node.js Selector**
   * Buka menu **Setup Node.js App** di DirectAdmin.
   * Klik tombol **+ CREATE APPLICATION**:
     * **Node.js version:** `20.20.2` (sesuai ketersediaan di server).
     * **Application mode:** `Production`.
     * **Application root:** `/home/immanuel/travelista-game` (atau folder deploy yang ditentukan).
     * **Application URL:** Pilih domain `game.travelista.id` / root (`/`).
     * **Application startup file:** `server.js` (Next.js Standalone Server).
   * Klik tombol **Create** dan jalankan `npm install` melalui terminal virtual atau via tombol NPM di panel.
4. **Langkah 4: Konfigurasi Database MariaDB di DirectAdmin**
   * Buka menu **MySQL Management** -> Klik **Create New Database**:
     * **Database Name:** `immanuel_travelista_game`
     * **Database User:** `immanuel_gameuser`
     * **Password:** *(Generate password aman)*
   * Catat informasi tersebut untuk dimasukkan ke variabel lingkungan `.env.production`.

---

## 3. Tech Stack & Arsitektur Aplikasi

* **Framework:** Next.js 16 (App Router) dengan output mode **`standalone`** (menghasilkan file `server.js` mandiri yang sangat optimal untuk Phusion Passenger Node.js Selector di DirectAdmin).
* **Language:** TypeScript & React 19.
* **Styling & Design Tokens:** Tailwind CSS v4 (mengacu pada [Design.md](Design.md)).
* **Database Driver:** `mysql2/promise` (koneksi pool efisien ke MariaDB socket localhost port `3306`).
* **Client-Side Cache:** Browser `LocalStorage` (untuk riwayat bermain, daftar bookmark favorit offline, dan state preferensi).
* **Game Delivery System:** File statis HTML5 disimpan di direktori internal `/public/games/[slug]/` dan dimuat melalui komponen iframe yang terisolasi dengan atribut `sandbox`.
* **Ad Engine:** Script Google AdSense / Google Ad Manager (GAM) + Fallback Banner Internal Travelista.

---

## 4. Struktur Folder & File Lengkap (Project File Tree Architecture)

Berikut adalah struktur direktori lengkap project `game/` di lokal dan pada saat di-deploy ke server Hostdata.id:

```
travelista-game/
├── Design.md                     # Panduan desain, warna, & ad placement
├── List-Game.md                  # Daftar 12 konsep game HTML5
├── PRD.md                        # Dokumen spesifikasi produk & server
│
└── game/                         # Root direktori Next.js Application
    ├── .env.example              # Template variabel lingkungan
    ├── .env.local                # Konfigurasi lokal dev
    ├── .env.production           # Kredensial MariaDB & host Hostdata.id
    ├── next.config.ts            # Konfigurasi Next.js (output: 'standalone')
    ├── package.json              # Daftar dependency & script build
    ├── tsconfig.json             # Konfigurasi path alias TypeScript (@/*)
    │
    ├── public/                   # Aset Statis Publik (Bisa diakses langsung via URL)
    │   ├── favicon.ico
    │   ├── travelista-logo-light.png  # Logo resmi Travelista
    │   │
    │   ├── images/               # Aset gambar portal
    │   │   ├── placeholders/     # Default image jika thumbnail error
    │   │   ├── badges/           # Ikon Hot, Baru, Trophy
    │   │   └── hero/             # Banner hero section unggulan
    │   │
    │   ├── ads/                  # Fallback Banner Internal Travelista
    │   │   ├── tiket-kapal-160x600.webp   # Banner skyscraper kiri fallback
    │   │   ├── paket-tur-160x600.webp     # Banner skyscraper kanan fallback
    │   │   ├── promo-bottom-728x90.webp   # Banner bottom anchor fallback
    │   │   └── companion-300x250.webp     # Banner companion play screen
    │   │
    │   └── games/                # DIRECT HOSTING: File Game HTML5 Internal
    │       ├── nusantara-runner/ # Game 1: Endless Runner Nusantara
    │       │   ├── index.html    # Entry point game
    │       │   ├── game.js       # Engine logika game HTML5
    │       │   ├── style.css
    │       │   └── assets/       # Spritesheet, audio FX, icon
    │       │
    │       ├── kapal-feri/       # Game 2: Island Hopper
    │       │   ├── index.html
    │       │   ├── game.js
    │       │   └── assets/
    │       │
    │       └── packing-master/   # Game 3: Koper Rapi
    │           ├── index.html
    │           ├── game.js
    │           └── assets/
    │
    └── src/                      # Source Code Aplikasi
        │
        ├── app/                  # Next.js 16 App Router
        │   ├── globals.css       # Tailwind CSS v4 & custom keyframes
        │   ├── layout.tsx        # Root HTML Layout + AdSense Script Injection
        │   ├── page.tsx          # Homepage: Hero + Category Pills + Friv Grid
        │   │
        │   ├── play/             # Rute Halaman Bermain Game
        │   │   └── [slug]/
        │   │       └── page.tsx  # Iframe runner, mode teater/fullscreen, & companion ad
        │   │
        │   ├── category/         # Rute Halaman Kategori Spesifik
        │   │   └── [category]/
        │   │       └── page.tsx  # Grid khusus kategori terpilih
        │   │
        │   └── api/              # Backend Route Handlers (MariaDB Hostdata.id)
        │       ├── games/
        │       │   └── route.ts  # GET: Ambil daftar game, filter kategori, search
        │       ├── leaderboard/
        │       │   └── route.ts  # GET: Top 10 skor | POST: Kirim skor baru
        │       └── stats/
        │           └── route.ts  # POST: Track play count & like count
        │
        ├── components/           # Komponen UI Modular
        │   │
        │   ├── layout/           # Komponen Rangka Halaman
        │   │   ├── Navbar.tsx             # Tier-1 Main Navbar (Logo, pills, search)
        │   │   ├── BreakingTicker.tsx     # Tier-2 Sub-bar Merah (Marquis info)
        │   │   ├── Footer.tsx             # Footer SEO & link ekosistem Travelista
        │   │   └── LayoutWrapper.tsx      # Penata gutter kiri & kanan untuk Skyscraper Ad
        │   │
        │   ├── ads/              # Komponen Unit Iklan (Google AdSense + Fallback)
        │   │   ├── AdSkyscraper.tsx       # Slot 1 & 2: Banner sisi kiri/kanan (1440px+)
        │   │   ├── AdBottomAnchor.tsx     # Slot 3: Sticky bottom banner + tombol collapse
        │   │   ├── AdNativeTile.tsx       # Slot 4: Iklan 1:1 di dalam grid Friv
        │   │   ├── AdCompanion.tsx        # Slot 5: Banner 300x250 di layar bermain
        │   │   └── AdSenseScript.tsx      # Loader script resmi AdSense
        │   │
        │   └── game/             # Komponen Terkait Game
        │       ├── GameCard.tsx           # Kartu ubin Friv (hover zoom, rating, badge)
        │       ├── GameGrid.tsx           # Wadah CSS Grid responsif ratusan game
        │       ├── GameHero.tsx           # Baris 3 game unggulan Travelista
        │       ├── CategoryChips.tsx      # Baris chip filter "Jelajahi"
        │       ├── GameFrame.tsx          # Kontainer iframe game + listener postMessage
        │       ├── GameControlsBar.tsx    # Tombol Fullscreen, Restart, Mute, Share
        │       ├── LeaderboardModal.tsx   # Modal pop-up skor tertinggi mingguan
        │       └── SearchModal.tsx        # Dialog pencarian instan cepat
        │
        ├── lib/                  # Library & Utility Functions
        │   ├── db.ts             # Koneksi Database Pool MariaDB Hostdata.id (mysql2)
        │   ├── games-data.ts     # Data statis katalog game (fallback jika DB offline)
        │   ├── local-storage.ts  # Helper simpan favorit, riwayat bermain, skor lokal
        │   └── utils.ts          # Class helper (cn, format number, slugify)
        │
        └── types/                # Definisi TypeScript Interfaces
            ├── game.ts           # Tipe data Game, Category, Filter
            ├── leaderboard.ts    # Tipe data Skor, Request Payload
            └── ads.ts            # Tipe konfigurasi ukuran & status slot iklan
```

---

## 5. Spesifikasi Modul & Fitur (Requirements)

### 5.1 Modul Navigasi & Identitas Travelista
* **Navbar Tier-1 (Main Bar - Tinggi 68px):**
  * Logo teks *Travelista* + badge *GAMES* warna merah `#E53935`.
  * Menu navigasi kategori: *Semua, Arcade, Petualangan, Puzzle, Aksi, Olahraga, Santai*.
  * Dual Action Badges khas Travelista:
    * `[ 🎮 Main Acak ]` (Aksen Biru `#0284C7`) -> Memilih dan membuka game acak secara instan.
    * `[ 🏆 Leaderboard ]` (Aksen Hijau `#16A34A`) -> Membuka modal skor tertinggi global.
  * Search Bar dengan auto-complete instan berbasis judul dan kategori game.
* **Navbar Tier-2 (Sub-bar Ticker Merah - Tinggi 36px):**
  * Background merah solid `#E53935` dengan badge putih *"TRENDING"*.
  * Ticker teks berjalan (marquis halus): berita game baru, pemain teratas, dan event berhadiah promo tiket kapal.

### 5.2 Modul Katalog Game Ala Friv (Home Page)
* **Baris Filter Kategori ("JELAJAHI"):** Tombol pil filter instan tanpa perlu memuat ulang halaman (*instant client filtering*).
* **Hero Section (3 Game Unggulan):**
  * 1 Kartu Utama Besar (kiri): Game of the Week dengan deskripsi singkat dan tombol play instan.
  * 2 Kartu Sedang Bertumpuk (kanan): Game yang sedang trending minggu ini.
* **Friv-Style Responsive Game Grid:**
  * Grid ratusan kartu game berbentuk kotak (`aspect-square`) dengan sudut membulat `rounded-2xl`.
  * Interaksi hover: Zoom lembut (`scale-105`), bayangan tebal, dan tombol "Main Sekarang".
  * Badge visual di kartu: `BARU`, `HOT`, dan bintang rating emas.
  * Breakpoints kolom grid:
    * Mobile: 3 kolom
    * Tablet: 4-5 kolom
    * Desktop: 6-7 kolom
    * Layar Lebar (>= 1440px): 8-10 kolom (diapit oleh 2 banner Skyscraper).

### 5.3 Modul Layar Permainan (Game Play Screen & Modal)
* **Frame Game HTML5:**
  * Iframe container responsif dengan atribut `sandbox="allow-scripts allow-same-origin allow-pointer-lock"`.
  * Fitur kontrol: *Tombol Layar Penuh (Fullscreen)*, *Muat Ulang*, *Simpan ke Favorit*, dan *Bagikan Link*.
* **Companion Sidebar (Desktop):**
  * Banner iklan `300x250`.
  * Panduan tombol kendali (Keyboard WASD / Spasi / Touch).
  * Rekomendasi 4 game serupa.

### 5.4 Modul Leaderboard & High Score (Hybrid LocalStorage + MariaDB)
1. Game HTML5 mengirim skor saat game over melalui `window.parent.postMessage({ type: 'GAME_OVER', score: number, gameId: string })`.
2. Portal mencatat skor lokal di `LocalStorage` browser agar pemain langsung melihat progres tanpa wajib login.
3. Pemain dapat memasukkan *Nickname* (3-12 karakter) untuk mengirim skor ke MariaDB Hostdata.id via API endpoint `/api/leaderboard`.
4. Global Leaderboard menampilkan Top 10 skor tertinggi mingguan per kategori game.

---

## 6. Tata Letak & Kebijakan Iklan (Monetization Engine)

| Kode Slot | Jenis Iklan | Dimensi Unit | Posisi Penempatan | Aturan Tampil & Safe-Zone |
| :--- | :--- | :--- | :--- | :--- |
| `AD-01` | **Skyscraper Kiri** | 160x600 / 300x600 | Menempel di sisi kiri layar | **Hanya aktif di desktop lebar (`>= 1440px`)**. Hidden di tablet & HP. |
| `AD-02` | **Skyscraper Kanan** | 160x600 / 300x600 | Menempel di sisi kanan layar | **Hanya aktif di desktop lebar (`>= 1440px`)**. Hidden di tablet & HP. |
| `AD-03` | **Sticky Bottom Anchor** | 728x90 (Desktop)<br>320x50 (Mobile) | Mengapung di tengah bawah layar | Wajib tombol **Minimize/Collapse**; Container utama diberi `padding-bottom: 110px`. |
| `AD-04` | **In-Grid Native Tile** | 1:1 Aspect Tile | Di sela-sela grid game (slot ke-9, 25) | Berlabel tegas `"SPONSORED"`. |
| `AD-05` | **Play Companion Ad** | 300x250 | Di samping / bawah frame game | Hanya tampil saat game dimainkan. |

> [!NOTE]
> **Ad Fallback Mechanism:** Jika Google AdSense diblokir oleh AdBlock atau belum disetujui, komponen slot otomatis menampilkan banner promosi internal Travelista (misal: "Diskon Tiket Kapal 20%" atau "Paket Wisata Bali Murah").

---

## 7. Desain Skema Database (MariaDB 10.11 & MySQL Lokal)

> [!IMPORTANT]
> **Catatan Khusus Fase Development (Local MySQL Environment):**  
> Pada tahap pengembangan (development) di mesin lokal, sistem menggunakan database **MySQL lokal via phpMyAdmin**:
> * **Akses phpMyAdmin Lokal:** `http://localhost/phpmyadmin/index.php?route=/database/structure&db=immanuel_travelista_game`
> * **Nama Database Lokal:** `immanuel_travelista_game` (disamakan persis dengan nama database target di server Hostdata.id).
> * **File Konfigurasi `.env.local` (Development):**
>   ```env
>   NODE_ENV=development
>   PORT=3000
>   DB_HOST=localhost
>   DB_PORT=3306
>   DB_USER=root
>   DB_PASSWORD=
>   DB_NAME=immanuel_travelista_game
>   NEXT_PUBLIC_SITE_URL=http://localhost:3000
>   ```
> * **Alur Migrasi:** Seluruh pengujian query, tabel, dan API dijalankan di MySQL lokal terlebih dahulu. Setelah teruji stabil, struktur dan data diekspor (*Export SQL*) dari phpMyAdmin lokal dan diimpor langsung ke phpMyAdmin Hostdata.id saat fase deployment.

### 7.1 Skema SQL Tabel Database

Skema SQL berikut dapat dieksekusi langsung di phpMyAdmin lokal maupun phpMyAdmin Hostdata.id:

```sql
-- 1. Tabel Master Game
CREATE TABLE games (
    id VARCHAR(64) PRIMARY KEY,
    slug VARCHAR(64) UNIQUE NOT NULL,
    title VARCHAR(128) NOT NULL,
    description TEXT,
    category ENUM('arcade', 'adventure', 'puzzle', 'action', 'sports', 'casual') NOT NULL,
    thumbnail_url VARCHAR(255) NOT NULL,
    game_path VARCHAR(255) NOT NULL, -- e.g. /games/nusantara-runner/index.html
    play_count INT UNSIGNED DEFAULT 0,
    likes_count INT UNSIGNED DEFAULT 0,
    badge ENUM('NONE', 'BARU', 'HOT', 'POPULAR') DEFAULT 'NONE',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_play_count (play_count DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Tabel Papan Skor (Leaderboard)
CREATE TABLE leaderboards (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    game_id VARCHAR(64) NOT NULL,
    player_name VARCHAR(32) NOT NULL,
    score INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_game_score (game_id, score DESC),
    CONSTRAINT fk_game_leaderboard FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Tabel Statistik & Tracking Sederhana
CREATE TABLE game_stats (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    game_id VARCHAR(64) NOT NULL,
    event_type ENUM('PLAY', 'SHARE', 'COMPLETE') NOT NULL,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_game_stats FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

## 8. Prosedur Build & Deployment di Hostdata.id

Karena server menggunakan **CloudLinux Node.js Selector (Phusion Passenger)**:

1. **Konfigurasi `next.config.ts`:**
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "standalone", // Wajib agar menghasilkan standalone server.js
   };

   export default nextConfig;
   ```
2. **File Startup `server.js`:**
   Pada mode `standalone`, Next.js otomatis membuat file `server.js` di dalam folder `.next/standalone/` yang dapat langsung dieksekusi oleh Node.js Selector versi `20.20.2`.
3. **Variabel Lingkungan (`.env.production`):**
   ```env
   NODE_ENV=production
   PORT=3000
   DB_HOST=localhost
   DB_USER=immanuel_gameuser
   DB_PASSWORD=your_secure_password
   DB_NAME=immanuel_travelista_game
   NEXT_PUBLIC_SITE_URL=https://game.travelista.id
   ```
4. **Perintah Deploy & Restart:**
   * Di dalam terminal atau panel DirectAdmin Node.js
     ```bash
     npm run build
     # Restart aplikasi melalui tombol Restart di halaman Web Applications Node.js
     ```

---

## 9. Milestone Pengembangan

1. **Milestone 1:** Struktur Project Next.js Standalone + Token Desain Tailwind CSS v4 ([Design.md](Design.md)).
2. **Milestone 2:** Implementasi Layout (Navbar 2-Tier, Ticker Merah, Slot Iklan Skyscraper & Sticky Anchor).
3. **Milestone 3:** Implementasi Katalog Game Friv (Hero Section, Game Grid, Filter Kategori).
4. **Milestone 4:** Integrasi 3 Game HTML5 Perdana ([List-Game.md](List-Game.md)) di `/public/games/`.
5. **Milestone 5:** Koneksi API Leaderboard ke MariaDB Hostdata.id + Fallback LocalStorage.
6. **Milestone 6:** Final Testing & Live Deployment di Subdomain `game.travelista.id`.
