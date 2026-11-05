# DAFTAR KONSEP GAME TAMBAHAN & SPESIFIKASI KEBUTUHAN ASET (LOW-ASSET EDITION)
## Subdomain: game.travelista.id (Portal Mini Game HTML5)

Dokumen ini disusun sebagai panduan pengembangan **8 konsep game baru bertema perjalanan & budaya Indonesia** yang dirancang dengan prinsip **Ultra-Low Asset Footprint (Zero/Minimal External Assets)**. 

Seluruh game ini dirancang agar **dapat langsung berjalan (run) secara mandiri** di dalam arsitektur `game.travelista.id` (Next.js 16 App Router + iframe runner sandbox + Web Audio API procedural synthesis), tanpa ketergantungan pada file sprite sheet besar, texture packs berbayar, atau file audio MP3/WAV eksternal.

---

## 1. Filosofi Desain: "Zero-Asset & Procedural Running"

Untuk memastikan game dapat dimuat dalam waktu kurang dari 0.5 detik bahkan pada koneksi 3G/seluler hemat kuota, sistem aset mengadopsi 4 pilar teknis:
1. **Visual Procedural (Canvas 2D & SVG Native):** Seluruh objek, karakter, rintangan, dan partikel digambar langsung menggunakan perintah `CanvasRenderingContext2D` (`arc`, `bezierCurveTo`, `fillRect`, `linearGradient`) atau Unicode Emoji beresolusi tinggi yang di-render native oleh OS.
2. **Audio Procedural (Web Audio API Synthesizer):** Efek suara (*SFX: lompat, koin, tabrakan, klik*) dihasilkan secara real-time via `OscillatorNode` (gelombang *sine*, *square*, *sawtooth*, *triangle*) dan frekuensi ramp. **Nol byte file MP3/WAV diunduh.**
3. **Zero Third-Party Game Engine:** Ditulis dengan vanilla JavaScript / TypeScript ringan tanpa engine berat seperti Phaser (900KB) atau Pixi.js (500KB), sehingga ukuran total satu game `< 30 KB`.
4. **Standard Iframe Bridge Protocol:** Mengirimkan skor ke portal Travelista secara otomatis menggunakan:
   ```javascript
   window.parent.postMessage({ type: "GAME_OVER", score: currentScore }, "*");
   ```

---

## 2. Matriks Ringkasan 8 Game Baru (Low-Asset)

| No | Judul Game | Genre / Kategori | Render Engine | Kebutuhan File Eksternal | Ukuran Total | Estimasi Pengerjaan |
|:--:|:---|:---|:---:|:---:|:---:|:---:|
| 1 | **Becak Drift: Malioboro Rush** | Arcade / Top-Down Drift | Canvas 2D Procedural | 0 File (100% Code) | ~18 KB | 1-2 Hari |
| 2 | **Candi Stacker: Megalitikum** | Casual / Precision Stacking | Canvas 2D + Gradient | 0 File (100% Code) | ~14 KB | 1 Hari |
| 3 | **Batik Flow: Sambung Canting** | Puzzle / Pipeline Grid | Canvas 2D Vector Path | 0 File (100% Code) | ~20 KB | 2 Hari |
| 4 | **Layangan Sanur: Wind Battle** | Action / One-Tap Tension | Canvas 2D Verlets Physics | 0 File (100% Code) | ~22 KB | 2-3 Hari |
| 5 | **Kopi Klotok: Barista Rhythm** | Casual / Rhythm & Timing | DOM HTML5 / Canvas | 0 File (100% Code) | ~16 KB | 1-2 Hari |
| 6 | **Lembah Bromo: Hang Glider** | Adventure / Flight Physics | Sinusoidal Heightmap Canvas | 0 File (100% Code) | ~24 KB | 2-3 Hari |
| 7 | **Pasar Terapung: Fruit Catch** | Arcade / Falling Catcher | Unicode Emoji + Canvas 2D | 0 File (100% Code) | ~15 KB | 1 Hari |
| 8 | **Kamus Kelana: Kata Tersembunyi**| Puzzle / Word Connect | Pure HTML/CSS + JS Matrix | 0 File (100% Code) | ~25 KB | 1-2 Hari |

---

## 3. Rincian Detail Konsep & Daftar Aset yang Dibutuhkan

---

### 1. Becak Drift: Malioboro Rush
* **Kategori Portal:** `arcade`
* **Slug URL:** `/play/becak-drift`
* **Target Gameplay:** Top-down micro-racing ala *Micro Machines* atau *Drift Boss*. Pemain mengendalikan becak motor/kayuh yang meluncur kencang di lorong Malioboro dan sekitar Keraton Jogja. 
* **Core Loop:**
  * Becak melaju otomatis ke atas; pemain menekan `Kiri / Kanan` (atau Tap sisi layar) untuk membelokkan roda depan.
  * Menahan belokan saat menikung akan menghasilkan status *"DRIFT BONUS"* dengan efek asap ban.
  * Hindari rintangan: Andong kuda berhenti, tiang lampu khas Jogja, dan genangan air hujan.
  * Ambil item penumpang turis di trotoar untuk mendapatkan skor multiplier.
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas Code):**
    * *Badan Becak:* 1 Kotak lengkung (kabin penumpang, `#e53935`), 1 Segitiga rangka sepeda (`#334155`), dan 3 Lingkaran hitam berotasi untuk roda.
    * *Jalanan:* Garis marka jalan putih putus-putus (`ctx.setLineDash([20, 20])`), aspal abu-abu gelap (`#1e293b`), dan trotoar paving motif batik geometris sederhana.
    * *Rintangan Andong & Tiang:* Persegi panjang cokelat dengan roda kecil atau lingkaran lampu bulat kuning bercahaya (`ctx.shadowBlur = 10`).
    * *Efek Skid Mark:* Garis hitam semi-transparan (`rgba(0,0,0,0.2)`) yang tertinggal di aspal saat berbelok tajam.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Mesin/Kayuh:* Loop frekuensi rendah kontinu `sawtooth` pitch modulasi (40Hz - 80Hz).
    * *Decit Ban (Drift Squeal):* Filtered White Noise berfrekuensi tinggi (800Hz - 2400Hz).
    * *Ambil Penumpang / Koin:* Nada lonceng sepeda klinting ting-ting (nada `C6` lalu `E6` via sine wave 1046Hz -> 1318Hz, decay 0.15s).
    * *Tabrakan:* Noise burst rendah + sine pitch drop (120Hz ke 30Hz, durasi 0.3s).
  * **Aset UI & Font:**
    * Menggunakan font sistem modern: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
    * HUD skor di pojok kiri atas dan indikator kecepatan di pojok kanan atas.
* **Sinergi Travelista:** Promosi wisata budaya Yogyakarta, panduan sewa kendaraan dan rute keliling Malioboro.

---

### 2. Candi Stacker: Megalitikum
* **Kategori Portal:** `casual`
* **Slug URL:** `/play/candi-stacker`
* **Target Gameplay:** Timing & precision puzzle ala game legendaris *Stack / Tower Bloxx*.
* **Core Loop:**
  * Sebuah balok batu andesit bertingkat bergerak bolak-balik secara horizontal di atas pondasi candi.
  * Pemain menekan `Spasi / Tap Layar` untuk menjatuhkan balok batu ke susunan candi di bawahnya.
  * Bagian balok yang meleset dari tepi pondasi akan terpotong dan jatuh ke jurang.
  * Jika pemain berhasil menaruh balok dengan presisi sempurna (*Perfect Drop*), balok akan sedikit membesar kembali dan memunculkan efek pendar emas stupa.
  * Target: Membangun menara candi setinggi mungkin menuju langit.
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas Code):**
    * *Balok Candi:* `ctx.fillRect` dengan gradien batu andesit abu-abu (`#475569` hingga `#334155`) ditambah garis relief horizontal berulang tipis (`#64748b`).
    * *Stupa Puncak:* Saat mencapai ketinggian tertentu, balok berganti bentuk siluet stupa bertingkat (lingkaran lonjong + kerucut puncak emas `#f59e0b`).
    * *Latar Langit Dinamis:* Gradasi warna langit vertikal (`LinearGradient`) yang berubah secara halus dari fajar oranye Borobudur (`#f97316` ke `#fbbf24`), siang cerah, hingga malam bintang berkedip (`#0f172a`).
    * *Partikel Puing Batu:* 8-12 kotak kecil yang terpental jatuh saat batu terpotong.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Batu Mendarat (Thud):* Triangle wave berfrekuensi 110Hz dengan peredaman cepat (decay 0.08s).
    * *Perfect Drop Combo:* Arpeggio nada gamelan selendro yang naik 1 oktaf setiap combo berturut-turut (nada pentatonik: 261Hz, 294Hz, 329Hz, 392Hz, 440Hz).
    * *Game Over / Menara Runtuh:* Nada guruh rendah bergemuruh (filtered noise 60Hz - 200Hz).
  * **Aset UI & Font:**
    * Indikator Combo (`"PERFECT x3!"`) dengan teks membesar sesaat (*CSS scale transition*).
* **Sinergi Travelista:** Relevan dengan artikel eksplorasi Candi Borobudur, Prambanan, dan tips wisata sejarah nusantara.

---

### 3. Batik Flow: Sambung Canting
* **Kategori Portal:** `puzzle`
* **Slug URL:** `/play/batik-flow`
* **Target Gameplay:** Rotating pipe puzzle berlatar kain mori putih dengan canting lilin malam panas.
* **Core Loop:**
  * Grid ubin ukuran 4x4 atau 5x5 berisi potongan garis ukiran motif batik tradisional (lengkung, persimpangan, sudut siku).
  * Terdapat 1 wadah canting tembaga di titik awal dan pola mahkota motif di titik akhir.
  * Pemain mengklik/tap setiap ubin untuk memutarnya sebesar 90 derajat searah jarum jam.
  * Saat semua jalur tersambung dari hulu ke hilir, lilin malam emas cair akan mengalir mengisi seluruh kain dan memunculkan motif batik utuh nan indah.
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas Code):**
    * *Kain Dasar Mori:* Latar krem bertekstur halus (`#fdfbf7`) dengan border kayu pembidang batik (`#854d0e`).
    * *Jalur Malam Batik:* Garis vektor kurva bezier tebal (`ctx.lineWidth = 8`, `ctx.strokeStyle = '#78350f'` untuk lilin dingin, berganti `#d97706` berbinar saat dialiri lilin panas).
    * *Ubin Grid:* Garis kisi samar (`#e2e8f0`) dengan rounded corners lembut.
    * *Efek Aliran Cairan:* Animasi dash offset (`ctx.lineDashOffset`) yang bergerak maju menciptakan ilusi cairan lilin mengalir.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Putar Ubin (Tile Rotate):* Suara klik kayu bambu renyah (klik cepat frekuensi 600Hz decay 0.03s).
    * *Aliran Malam Tersambung:* Suara mendesis halus (*filtered pink noise* menyimulasikan uap malam panas).
    * *Pola Selesai (Level Clear):* Melodi gamelan saron 3 nada manis (frekuensi 523Hz, 659Hz, 784Hz).
  * **Aset UI & Font:**
    * Tombol restart level, penghitung langkah putaran, dan nama motif batik yang sedang dirakit (*Batik Parang Rusak, Mega Mendung, Kawung*).
* **Sinergi Travelista:** Edukasi budaya nusantara, mendukung kanal artikel seni kerajinan tangan dan oleh-oleh khas daerah.

---

### 4. Layangan Sanur: Wind Battle
* **Kategori Portal:** `action`
* **Slug URL:** `/play/layangan-sanur`
* **Target Gameplay:** Action timing tarik-ulur benang layangan aduan di tepi pantai berangin kencang.
* **Core Loop:**
  * Layangan tradisional pemain (tipe *Bebean / Janggan*) terbang di langit pantai berhadapan dengan layangan lawan yang mendekat.
  * Terdapat meteran tegangan benang (*Tension Meter*):
    * **Tahan Tekan Layar / Spasi:** Menarik benang (kecepatan layangan naik menukik untuk menyerang benang musuh, tetapi meteran panas benang meningkat).
    * **Lepaskan Tekan:** Mengulur benang (layangan mengambang tertiup angin, meteran tegangan mendingin).
  * Pemain harus memotong benang layangan lawan saat berada di sudut potong yang tepat tanpa membuat benang sendiri putus karena tarikan berlebih.
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas Code):**
    * *Layangan Pemain:* Poligon 4 sudut segitiga lancip dengan warna merah-putih-hitam khas Bali (`#dc2626`, `#f8fafc`, `#020617`).
    * *Ekor Pita Panjang (Tail Physics):* Rangkaian 15-20 titik sambungan fisika kurva sinus yang meliuk-liuk tertiup angin pantai secara dinamis.
    * *Benang Layangan:* Garis tipis 1 pixel semi-transparan yang menghubungkan layangan ke sudut bawah layar.
    * *Latar Laut & Ombak:* Gradien langit biru toska dan kurva sinus animasi air laut di bagian bawah layar.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Deru Angin (Wind Gust):* Modulasi low-pass noise yang membesar saat layangan menukik kencang.
    * *Benang Bergesekan:* Suara dengung senar tegang (sawtooth wave 440Hz dengan vibrato pitch).
    * *Benang Putus (Snap):* Ledakan tajam frekuensi 1200Hz ke 200Hz berdurasi 0.05s (*Whip snap*).
  * **Aset UI & Font:**
    * Bar tegangan benang (*Tension Gauge*) berwarna hijau -> kuning -> merah berkedip saat kritis.
* **Sinergi Travelista:** Mengangkat tradisi Festival Layang-Layang Internasional Sanur Bali dan aktivitas seru pantai nusantara.

---

### 5. Kopi Klotok: Barista Rhythm
* **Kategori Portal:** `casual`
* **Slug URL:** `/play/kopi-klotok`
* **Target Gameplay:** Rhythm & reaction mini-game bertema warung kopi tradisional khas Yogyakarta / Aceh.
* **Core Loop:**
  * Butiran kopi panggang dan tetesan air mendidih jatuh berirama menuju cangkir tanah liat di atas meja kayu.
  * Garis ketukan (*Hit Line*) berada tepat di bibir cangkir.
  * Pemain menekan tombol tap tepat saat elemen jatuh bertepatan dengan garis hit untuk menghasilkan seduhan kopi sempurna (*"Sedap!", "Pas!", "Kurang Pas"*).
  * Hindari arang panas yang sesekali jatuh melenceng!
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas Code):**
    * *Cangkir & Piring:* Siluet cangkir lurik hijau-putih jadul atau tanah liat cokelat (`#78350f`) menggunakan garis lengkung canvas sederhana.
    * *Tetesan Kopi & Biji:* Lingkaran oval cokelat gelap berkilau (`#29150b`).
    * *Uap Panas:* 4-6 partikel lingkaran putih transparan yang membubung ke atas sambil memudar (`alpha -= 0.02`).
    * *Efek Ripple Air:* Lingkaran elips meluas di dalam cangkir saat air mendarat pas.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Beat Ritme Lofi:* Ketukan drum tendang bas sintesis (sine wave pitch drop 150Hz ke 30Hz) dan hi-hat desis (noise burst 0.02s).
    * *Tetesan Masuk Cangkir (Plink):* Nada air gelembung (*liquid drop*) menggunakan sine wave modulasi cepat dari 600Hz ke 1200Hz dalam 0.04 detik.
    * *Uap Mendidih:* White noise desis lembut terfilter.
  * **Aset UI & Font:**
    * Teks feedback akurasi: `"SEMPURNA!"` (warna hijau), `"PAS!"` (kuning), `"PEKAT!"` (oranye).
* **Sinergi Travelista:** Sangat bersinergi dengan panduan kuliner, wisata nongkrong kopi klotok, dan cafe hits nusantara di Travelista.

---

### 6. Lembah Bromo: Hang Glider
* **Kategori Portal:** `adventure`
* **Slug URL:** `/play/lembah-bromo`
* **Target Gameplay:** Physics momentum flight ala *Tiny Wings* atau *Alto's Adventure*.
* **Core Loop:**
  * Pemain mengemudikan gantole / paralayang melintasi kontur perbukitan pasir Bromo dan bukit Teletubbies yang bergelombang.
  * **Tahan Layar:** Menukik tajam (*dive*) menuruni lembah untuk menumpuk momentum gaya gravitasi.
  * **Lepaskan Layar:** Melontarkan gantole ke atas saat berada di puncak bukit untuk meluncur tinggi di udara (*catch the thermal updraft*).
  * Tangkap koin tiket wisata yang melayang di udara dan hindari mendarat di permukaan pasir saat momentum habis sebelum mencapai pos pemeriksaan berikutnya.
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas Code):**
    * *Gantole:* Siluet segitiga layang gantung delta (`#e11d48`) dengan titik kecil pilot di bawahnya.
    * *Kontur Bukit Pasir:* Garis permukaan tanah matematis dihasilkan menggunakan formula trigonometri `height = sin(x * 0.005) * 80 + cos(x * 0.002) * 120` yang digambar mulus dengan `ctx.lineTo`.
    * *Siluet Gunung Bromo & Asap Kawah:* Latar belakang gunung segitiga abu-abu gelap dengan partikel asap putih tipis berputar lambat di kejauhan.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Kecepatan Meluncur:* Frekuensi deru angin bertambah tinggi proporsional dengan kecepatan gantole (*dynamic pitch tracking*).
    * *Lontaran Angin Panas (Updraft Boost):* Nada sapuan meluncur naik dari 300Hz ke 900Hz.
    * *Pendaratan Halus:* Suara desiran gesekan pasir laut (*low pass noise*).
  * **Aset UI & Font:**
    * Indikator ketinggian (meter dpl) dan jarak tempuh perjalanan (kilometer).
* **Sinergi Travelista:** Relevan dengan paket wisata Bromo Sunrise, tips paralayang di Batu/Malang, dan petualangan alam terbuka.

---

### 7. Pasar Terapung: Fruit Catch
* **Kategori Portal:** `arcade`
* **Slug URL:** `/play/pasar-terapung`
* **Target Gameplay:** Fast-paced falling item catcher ala game arkade klasik *Fruit Catcher*.
* **Core Loop:**
  * Berlokasi di perairan Sungai Martapura / Lok Baintan Banjarmasin.
  * Pemain menggeser perahu jukung tradisional ke kiri dan ke kanan untuk menangkap buah-buahan lokal yang dilempar dari perahu pedagang pasar terapung.
  * Buah bernilai poin: Pisang (`🍌`), Mangga (`🥭`), Kelapa (`🥥`), Durian (`Durian Mas`).
  * Hindari sampah sungai atau air cipratan kotor yang mengurangi sisa nyawa perahu.
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% Canvas & Unicode Native):**
    * *Buah-buahan:* Menggunakan Unicode Emoji Native (`font: 32px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`) yang tajam di semua layar perangkat tanpa beban unduh file gambar.
    * *Perahu Jukung Pemain:* Trapesium ramping kayu cokelat (`#854d0e`) dengan pendayung bertopi caping kerucut anyaman kuning (`#facc15`).
    * *Riak Air Sungai:* Garis-garis elips horizontal biru kehijauan (`#0d9488`) yang bergetar lambat.
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Tangkap Buah:* Nada *pop* renyah ceria (sine wave melompat dari 400Hz ke 800Hz durasi 0.08s).
    * *Kena Durian Bonus:* Gemerincing koin ganda (dua nada cepat oktaf tinggi).
    * *Cipratan Air Meleset:* Percikan air tumpul (*short noise splash*).
  * **Aset UI & Font:**
    * Penghitung 3 ikon hati nyawa (`❤️❤️❤️`) dan papan skor panen buah di bagian atas.
* **Sinergi Travelista:** Memperkenalkan keunikan budaya Pasar Terapung Kalimantan, eksplorasi kuliner buah tropis nusantara.

---

### 8. Kamus Kelana: Kata Tersembunyi
* **Kategori Portal:** `puzzle`
* **Slug URL:** `/play/kamus-kelana`
* **Target Gameplay:** Word connect & spatial vocabulary puzzle bertema destinasi dan bahasa daerah nusantara.
* **Core Loop:**
  * Pemain disuguhkan roda lingkaran berisi 4 hingga 6 huruf acak (misal: `K`, `U`, `T`, `A`, `B`, `L`, `I`).
  * Pemain menarik garis menghubungkan huruf-huruf tersebut untuk membentuk kata-kata traveling nusantara tersembunyi pada kotak teka-teki silang di atasnya (contoh: `KUTA`, `BALI`, `BUKIT`, dll).
  * Terdapat penjelasan ringkas budaya di setiap kata yang berhasil ditebak (misal: *"KUTA: Pantai legendaris di Badung, Bali"*).
* **Daftar Kebutuhan Aset Agar Game Running:**
  * **Aset Gambar / Visual (0 File - 100% CSS & Canvas UI):**
    * *Roda Huruf:* Lingkaran interaktif dengan tombol-tombol huruf bulat modern bergaya flat UI (`#ffffff` dengan bayangan `box-shadow` halus di atas background gradasi `#0f172a`).
    * *Garis Penghubung:* Garis canvas dinamis mengikuti posisi sentuhan jari/kursor mouse warna merah Travelista (`#e53935`).
    * *Kotak Kata Silang:* Kotak-kotak minimalis transparan yang terisi huruf animasi flip saat berhasil menebak.
  * **Aset Data (0 File Eksternal):**
    * Dictionary kata disimpan langsung di dalam array JavaScript internal file `index.html` (50+ level ringan, ukuran data `< 10 KB`).
  * **Aset Audio (0 File MP3 - Web Audio Synth):**
    * *Sentuh Huruf:* Nada marimba lembut berurutan naik nada setiap huruf terhubung (Do-Re-Mi-Fa-Sol via sine wave).
    * *Kata Berhasil Tertebak:* Kord harpa sukses (arpeggio C Major: 523Hz, 659Hz, 784Hz, 1046Hz).
    * *Kata Salah / Reset:* Getaran getar bass pendek (80Hz square wave).
  * **Aset UI & Font:**
    * Modal popup edukasi destinasi Travelista setiap level terselesaikan dengan tautan membaca artikel panduan terkait.
* **Sinergi Travelista:** Edukasi bahasa daerah dan destinasi nusantara yang sangat berpotensi viral dibagikan ke media sosial pembaca.

---

## 4. Spesifikasi Teknis Integrasi ke Arsitektur `game.travelista.id`

Setiap game di atas harus mematuhi standar arsitektur direktori dan runtime yang telah dibangun pada proyek ini:

### 4.1 Struktur Lokasi Berkas
Setiap game baru ditempatkan pada folder publik mandiri:
```text
game/
└── public/
    └── games/
        ├── becak-drift/
        │   └── index.html      <-- 1 file mandiri berisi HTML + CSS + JS (Zero dependencies)
        ├── candi-stacker/
        │   └── index.html
        ├── batik-flow/
        │   └── index.html
        ├── layangan-sanur/
        │   └── index.html
        ├── kopi-klotok/
        │   └── index.html
        ├── lembah-bromo/
        │   └── index.html
        ├── pasar-terapung/
        │   └── index.html
        └── kamus-kelana/
            └── index.html
```

### 4.2 Kontrak Komunikasi `postMessage` (Leaderboard & Rekor)
Di dalam `index.html`, saat kondisi pemain kalah / game over terpenuhi, kirim event skor ke komponen induk `GameFrame.tsx`:
```javascript
function onGameOver(finalScore) {
  // Kirim data ke portal Travelista Next.js
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({
      type: "GAME_OVER",
      score: Math.floor(finalScore)
    }, "*");
  }
}
```

### 4.3 Registrasi Metadata pada `game/src/lib/games-data.ts`
Setiap game baru didaftarkan ke array `INITIAL_GAMES` dengan format:
```typescript
{
  id: "becak-drift",
  slug: "becak-drift",
  title: "Becak Drift: Malioboro Rush",
  description: "Sensasi drifting seru mengemudikan becak keliling Malioboro & Keraton Jogja tanpa menabrak andong!",
  category: "arcade",
  thumbnailUrl: "/images/games/becak-drift.webp", // atau SVG icon fallback
  gamePath: "/games/becak-drift/index.html",
  playCount: 1540,
  likesCount: 120,
  rating: 4.8,
  badge: "BARU",
  controlsGuide: {
    keyboard: ["A/D atau Panah Kiri/Kanan : Belok Kemudi", "Spasi : Rem Tangan / Drift"],
    touch: "Tap sisi kiri/kanan layar untuk berbelok",
  },
}
```

---

## 5. Starter Engine: Modul Audio & Canvas Procedural Siap Pakai

Berikut adalah modul kode boilerplate Web Audio API dan Canvas Loop berukuran ultra-kecil (< 2 KB) yang dapat langsung di-copy paste ke dalam berkas `index.html` game mana pun di atas agar game **langsung berbunyi dan berjalan 100% tanpa file eksternal**:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Travelista Mini Game Starter</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: #0f172a; font-family: system-ui, sans-serif; }
    canvas { width: 100%; height: 100%; display: block; }
  </style>
</head>
<body>
  <canvas id="gameCanvas"></canvas>

  <script>
    // 1. ENGINE AUDIO PROCEDURAL (ZERO MP3 ASSET NEEDED)
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    let actx = null;
    function initAudio() {
      if (!actx) actx = new AudioCtx();
      if (actx.state === 'suspended') actx.resume();
    }

    const Sound = {
      jump: () => {
        initAudio();
        const osc = actx.createOscillator(), gain = actx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, actx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, actx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, actx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, actx.currentTime + 0.15);
        osc.connect(gain); gain.connect(actx.destination);
        osc.start(); osc.stop(actx.currentTime + 0.15);
      },
      coin: () => {
        initAudio();
        const osc = actx.createOscillator(), gain = actx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(987, actx.currentTime); // B5
        osc.frequency.setValueAtTime(1318, actx.currentTime + 0.08); // E6
        gain.gain.setValueAtTime(0.25, actx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, actx.currentTime + 0.25);
        osc.connect(gain); gain.connect(actx.destination);
        osc.start(); osc.stop(actx.currentTime + 0.25);
      },
      hit: () => {
        initAudio();
        const osc = actx.createOscillator(), gain = actx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, actx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, actx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.3, actx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, actx.currentTime + 0.2);
        osc.connect(gain); gain.connect(actx.destination);
        osc.start(); osc.stop(actx.currentTime + 0.2);
      }
    };

    // 2. SETUP CANVAS DINAMIS RESPONSIF
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // 3. GAME LOOP UTAMA
    function update(dt) {
      // Perhitungan logika fisika game di sini
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      // Penggambaran procedural di sini
    }

    let lastTime = 0;
    function loop(time) {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      update(dt);
      render();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  </script>
</body>
</html>
```

---

## 6. Rekomendasi Urutan Eksekusi Pembuatan (Priority Order)

Berdasarkan rasio **"kemudahan coding : keunikan konsep : minimnya aset"**, berikut adalah urutan rekomendasi pembuatan:

1. **Prioritas 1 (Eksekusi 1 Hari):**
   * **Candi Stacker: Megalitikum** -> Logika matematika balok memotong sangat simpel, grafis 100% balok gradien canvas, efek audio gamelan adiktif.
   * **Pasar Terapung: Fruit Catch** -> Menggunakan emoji buah native OS, kontrol perahu sangat intuitif, menyenangkan untuk segala usia.
2. **Prioritas 2 (Eksekusi 1-2 Hari):**
   * **Becak Drift: Malioboro Rush** -> Game bertema kearifan lokal yang sangat menjual dan memicu kompetisi high-score.
   * **Kopi Klotok: Barista Rhythm** -> Visual warung kopi unik dengan audio sintetis ritmis yang santai.
3. **Prioritas 3 (Eksekusi 2-3 Hari):**
   * **Batik Flow: Sambung Canting** -> Puzzle asah otak bernilai estetika tinggi untuk pembaca dewasa Travelista.
   * **Lembah Bromo: Hang Glider** -> Fisika terbang menukik berkecepatan tinggi yang memukau secara visual.
