# DAFTAR KONSEP GAME & SPESIFIKASI FITUR
## Subdomain: game.travelista.id (Portal Mini Game HTML5)

Dokumen ini memuat hasil *brainstorming* **12 konsep game mini berbasis HTML5** yang dirancang khusus untuk portal **game.travelista.id**. Seluruh konsep memadukan *gameplay loop* adiktif khas Friv/Poki dengan tema perjalanan (*travel, adventure, culinary, transport, outdoor survival*) yang bersinergi langsung dengan ekosistem konten **Travelista**.

---

## Matriks Ringkasan 12 Game

| No | Judul Game | Genre / Gaya | Tingkat Kesulitan Dev | Target Pemain | Sinergi Konten Travelista |
|:--:|:---|:---|:---:|:---:|:---|
| 1 | **Nusantara Runner: Escape to Bali** | Endless Runner (2D) | Medium | Semua Umur (Kasual) | Promosi Destinasi & Tiket |
| 2 | **Packing Master: Koper Rapi** | Spatial Grid Puzzle | Low - Medium | Kasual / Brain-Teaser | Artikel Tips Packing & Bagasi |
| 3 | **Kapal Feri: Island Hopper** | Physics Navigation Arcade | Medium | Remaja & Dewasa | Fitur Utama "Tiket Kapal" |
| 4 | **Warung Keliling: Street Food Tycoon** | Time-Management Cooking | Medium | Kasual / Penggemar Dash | Kategori "Food" & Kuliner |
| 5 | **GeoTraveler IQ: Tebak Lokasi** | Visual Trivia & Map Quiz | Low | Pelajar & Traveler | Edukasi Wisata & Budaya |
| 6 | **Survival Camp: Api & Tenda** | Resource Management / Cozy | Medium | Petualang / Pecinta Alam | Kategori "Tips Outdoor" & Gunung |
| 7 | **Tol Trans-Java Blitz** | Top-Down Retro Traffic Dodge| Low - Medium | Pecinta Game Arcade Retro| Tips Road Trip & Wisata Darat |
| 8 | **Relik Candi: Jewel Quest** | Match-3 Cascading Puzzle | Low | Semua Umur (Santai) | Kategori "Misteri" & Sejarah |
| 9 | **Bandara Runway ATC** | Line-Drawing Strategy | Medium | Puzzle Strategi | Transportasi Udara & Wisata |
| 10 | **Jalak Bali Flap** | One-Tap Precision Arcade | Low (Sangat Ringan) | Semua Umur (Instant Play) | Turnamen Skor Mingguan |
| 11 | **Spot The Difference: Photo Hunter**| Visual Spot-Difference | Low | Keluarga & Santai | Galeri Foto Destinasi |
| 12 | **Jalur Kereta Wisata: Track Builder**| Rotating Tile Puzzle | Low - Medium | Asah Otak Cepat | Wisata Kereta Panoramik |

---

## Rincian Detail 12 Konsep Game

---

### 1. Nusantara Runner: Escape to Bali
* **Genre:** Endless Runner / 2D Side-Scrolling Platformer (Gaya: *Subway Surfers / Alto's Adventure versi 2D*)
* **Gameplay Core Loop:**
  * Karakter traveler (ransel di punggung) berlari otomatis melintasi rute ikonik nusantara (Jalan Malioboro -> Sabana Bromo -> Pantai Kuta).
  * Pemain menggunakan tombol `Spasi / Tap` untuk melompat dan `Panah Bawah` untuk meluncur (*slide*).
  * Menghindari rintangan jalan: becak berhenti, monyet usil, koper jatuh, dan genangan air.
  * Mengumpulkan koin emas dan item spesial *"Tiket Kapal Travelista"* untuk mode turbo kebal tabrakan (*invincible boost*).
* **Fitur Utama:**
  * 3 Pilihan Karakter: Backpacker Santai, Fotografer Petualang, dan Pendaki Gunung.
  * Pergantian latar dinamis (siang, sore sunset, malam berbintang).
  * Papan skor harian (*Daily High Score Leaderboard*).
* **Spesifikasi HTML5:** HTML5 Canvas 2D + Web Audio API (ringan, < 2MB total aset, berjalan lancar di 60 FPS pada smartphone murah).
* **Use Case & Monetisasi:**
  * Slot iklan *Revive* (tonton video iklan 5 detik untuk melanjutkan lari saat menabrak rintangan).
  * Sinergi promosi: Banner akhir skor menawarkan kode diskon booking perjalanan.

---

### 2. Packing Master: Koper Rapi
* **Genre:** Spatial Block Puzzle / Inventory Management (Gaya: *Unpacking / Tetris Inventory*)
* **Gameplay Core Loop:**
  * Pemain disuguhkan sebuah koper/tas ransel dengan batas grid tertentu (misal: 6x6 petak).
  * Di samping koper ada tumpukan barang bawaan (kamera, sepatu trekking, jaket lipat, botol minum, passport, payung) dengan bentuk poligon unik ala Tetris.
  * Pemain harus memutar (*rotate*) dan memasukkan semua barang ke dalam koper hingga tertutup sempurna tanpa ada barang tertinggal sebelum hitungan waktu penerbangan habis.
* **Fitur Utama:**
  * 40+ Level dengan kapasitas koper bervariasi: *Tas Kabin 7Kg, Koper Bagasi 20Kg, Ransel Carrier 60L*.
  * Tantangan barang pecah belah (*Fragile*) yang tidak boleh ditimpa barang berat.
  * Tombol petunjuk (*Hint*) yang dapat dibuka dengan menonton iklan reward.
* **Spesifikasi HTML5:** DOM Drag-and-Drop atau Canvas interaktif dengan efek suara *zipper* dan klik memuaskan (*satisfying audio feedback*).
* **Use Case & Sinergi:**
  * Sangat cocok diletakkan sebagai widget interaktif di dalam artikel Travelista: *"Checklist Barang yang Harus Dibawa Saat Traveling"*.

---

### 3. Kapal Feri: Island Hopper
* **Genre:** 2D Physics Navigation & Docking Arcade
* **Gameplay Core Loop:**
  * Pemain mengemudikan kapal feri penumpang dari satu dermaga pulau ke dermaga seberang (rute: Ketapang - Gilimanuk, Merak - Bakauheni, atau antar pulau Labuan Bajo).
  * Kontrol arah kemudi dan daya dorong mesin (*Throttle & Rudder*).
  * Menghadapi tantangan laut realistis: arus ombak dinamis, karang terjal, kapal nelayan melintas, dan kabut tebal.
  * Berhasil menyandarkan kapal di dermaga dengan kecepatan aman tanpa menabrak dinding pelabuhan.
* **Fitur Utama:**
  * Pilihan armada: Speedboat Cepat, Kapal Roro Besar, dan Perahu Pinisi Tradisional.
  * Sistem fisika air sederhana (inersia kapal terapung terasa berbobot).
  * Sistem bintang 1-3 berdasarkan sisa waktu dan kenyamanan penumpang (tidak terombang-ambing keras).
* **Spesifikasi HTML5:** Canvas 2D dengan partikel buih air dan fisika akselerasi kapal sederhana.
* **Use Case & Sinergi:**
  * **Koneksi Utama Brand:** Promosi langsung tombol navbar `[Tiket Kapal]`. Pemain yang menyelesaikan misi rute feri melihat informasi jadwal asli penyeberangan feri di Travelista.

---

### 4. Warung Keliling: Street Food Tycoon
* **Genre:** Time-Management Cooking / Rapid Tap (Gaya: *Cooking Mama / Diner Dash*)
* **Gameplay Core Loop:**
  * Pemain mengelola stan kuliner khas Indonesia di pasar malam wisata.
  * Turis lokal & mancanegara berdatangan dengan balon pesanan di atas kepala: Sate Ayam, Bakso Kuah, Nasi Goreng Spesial, atau Es Kelapa Muda.
  * Pemain harus memanggang sate tepat waktu (jangan sampai gosong), menuangkan bumbu kacang, dan menyajikannya sebelum tingkat kesabaran pembeli habis.
* **Fitur Utama:**
  * Upgrade warung: kompor lebih cepat, piring ekstra, kipas sate otomatis, dan dekorasi lampu hias.
  * Level berdasar kota: Sentra Kuliner Bandung -> Malioboro Jogja -> Pantai Losari Makassar.
  * Mode *"Rush Hour"* yang memacu adrenalin.
* **Spesifikasi HTML5:** State-driven 2D Canvas / Sprite animations, aset grafis makanan ilustrasi kartun yang lezat dan menarik.
* **Use Case & Sinergi:**
  * Mendukung penuh kanal artikel **"Food"** Travelista. Mengundang minat kuliner daerah dan dapat memunculkan banner rekomendasi tempat makan khas kota tersebut.

---

### 5. GeoTraveler IQ: Tebak Lokasi
* **Genre:** Visual Geography Trivia & Map Guesser (Gaya: *GeoGuessr Lite / Kahoot*)
* **Gameplay Core Loop:**
  * Di layar muncul foto lanskap pemandangan indah, pura, candi, pantai, atau kuliner khas tanpa keterangan nama.
  * Pemain memiliki waktu 15 detik untuk memilih 1 dari 4 pilihan lokasi ganda, ATAU meletakkan pin pada peta mini kepulauan Indonesia.
  * Semakin cepat dan semakin presisi tebakan koordinatnya, semakin tinggi skor poin yang diraih.
* **Fitur Utama:**
  * Database 200+ destinasi wisata terverifikasi (Indonesia & Destinasi Populer Asia Tenggara).
  * Mode Permainan: *Tebak Candi & Budaya, Tebak Pantai, Tebak Gunung, dan Destinasi Internasional*.
  * Tautan ringkasan di akhir kuis: *"Ingin mengunjungi tempat ini? Baca panduan wisatanya di Travelista"*.
* **Spesifikasi HTML5:** Vue/React komponen interaktif ringan + SVG Map / Canvas. Sangat hemat kuota data dan instan terbuka.
* **Use Case & Sinergi:**
  * Potensi *viral share*: Pemain bisa membagikan hasil kuis ke WhatsApp / Instagram Story (*"Skor IQ Travelista Saya: 94/100, Kamu Bisa Kalahkan?"*).

---

### 6. Survival Camp: Api & Tenda
* **Genre:** Cozy Outdoor Survival / Micro-Simulation
* **Gameplay Core Loop:**
  * Mengambil inspirasi dari artikel hero Travelista: *"Cara Memasak di Alam Tanpa Membawa Korek Api"*.
  * Pemain terdampar di kaki gunung saat senja dan harus menyiapkan perkemahan sebelum malam tiba dan suhu turun drastis.
  * Mini-game terpadu:
    1. Menggosok kayu/batu api dengan ritme tap yang tepat untuk memantik percikan api unggun.
    2. Menjaga nyala api dengan meniup dan menambahkan ranting kering.
    3. Memasang tali dan pasak tenda sebelum angin gunung bertiup kencang.
    4. Memasak mi/kopi di atas trangia camping.
* **Fitur Utama:**
  * Audio alam relaksasi ASMR (suara gemeretak api kayu, hembusan angin pinus, gemericik air sungai).
  * Siklus waktu siang-sore-malam dengan pencahayaan hangat.
* **Spesifikasi HTML5:** Matter.js physics sederhana atau Canvas 2D frame-by-frame animation.
* **Use Case & Sinergi:**
  * Konversi langsung untuk pembaca kategori **"Tips Traveling"** dan promosi perlengkapan outdoor travel gear.

---

### 7. Tol Trans-Java Blitz
* **Genre:** Top-Down Retro Highway Driving (Gaya: *Road Fighter / Micro Machines*)
* **Gameplay Core Loop:**
  * Mengendarai mobil travel (HiAce / Elf Pariwisata) melaju cepat di jalan tol Trans-Jawa.
  * Menghindari truk gandeng bermuatan berat, bus malam yang ngeblong, dan lubang jalanan.
  * Mengambil koin bahan bakar untuk menjaga meteran bensin agar tidak mogok.
  * Fitur unik: Gerbang Tol Otomatis — pemain harus memperlambat mobil dan menekan tombol *Tap E-Toll* tepat di zona hijau untuk membuka palang pintu tol.
* **Fitur Utama:**
  * Gaya grafis pixel-art retro yang sangat diminati di situs mini game Friv.
  * Rest Area checkpoint: tempat memperbaiki ban kempes dan melipatgandakan koin.
  * Variasi cuaca: Hujan lebat dengan efek wiper kaca depan.
* **Spesifikasi HTML5:** Canvas 2D Game Loop murni (sangat enteng, zero dependencies, < 500KB).
* **Use Case & Sinergi:**
  * Game kasual yang memicu replay berulang-ulang (*high retention*), sangat ideal untuk penempatan iklan di jeda restart game (*Game Over Screen*).

---

### 8. Relik Candi: Jewel Quest
* **Genre:** Match-3 Cascading Tile Puzzle (Gaya: *Candy Crush / Bejeweled*)
* **Gameplay Core Loop:**
  * Menggeser dan mencocokkan minimal 3 batu relik candi nusantara (Batu Giok Hijau, Permata Ruby Merah, Ukiran Bunga Teratai, Mahkota Kencana, Prasasti Emas).
  * Menghancurkan balok batu lumut dan melepaskan rantai kuno yang mengunci pintu masuk candi.
  * Kombo 4-5 batu memicu kekuatan pusaka (Lentera Api yang membersihkan 1 baris, atau Keris Sakti yang meledakkan batu sewarna).
* **Fitur Utama:**
  * 50+ Level petualangan bertahap dengan peta eksplorasi Candi Prambanan hingga Borobudur.
  * Animasi ledakan permata dan kombo angka yang memuaskan.
* **Spesifikasi HTML5:** Pure HTML5 Canvas / Phaser.js ringan, mendukung sentuhan gesture swipe mulus di layar ponsel.
* **Use Case & Sinergi:**
  * Menargetkan demografi pemain wanita dan keluarga yang mencari game relaksasi santai tanpa batas waktu yang menegangkan.

---

### 9. Bandara Runway ATC (Air Traffic Controller)
* **Genre:** Line-Drawing Airport Strategy (Gaya: *Flight Control*)
* **Gameplay Core Loop:**
  * Layar menampilkan bandara udara internasional dengan 2 landasan pacu (landasan aspal untuk pesawat jet dan helipad untuk helikopter wisata).
  * Pesawat berbagai ukuran masuk ke layar dari tepi dengan ketinggian berbeda.
  * Pemain menggambar garis rute menggunakan jari/mouse untuk mengarahkan setiap pesawat mendarat dengan aman tanpa bersenggolan satu sama lain di udara.
* **Fitur Utama:**
  * Berbagai jenis pesawat: Jet Komersil, Pesawat Amfibi Pulau, Helikopter Tur Pribadi, dan Jet Pribadi VIP.
  * Skala tantangan meningkat bertahap seiring bertambahnya kepadatan lalu lintas udara.
* **Spesifikasi HTML5:** Path-drawing listener di Canvas 2D dengan deteksi tabrakan koordinat lingkaran (*Circle Collision Detection*).
* **Use Case & Sinergi:**
  * Game strategi otak yang sangat adiktif dengan sesi bermain 3-7 menit, menghasilkan *time-on-site* tinggi untuk meningkatkan viewability iklan sticky di bawah layar.

---

### 10. Jalak Bali Flap
* **Genre:** One-Tap Endless Precision Arcade (Gaya: *Flappy Bird*)
* **Gameplay Core Loop:**
  * Mengendalikan maskot burung langka Jalak Bali putih yang terbang menjelajahi celah-celah pilar pura batu dan rimbunnya hutan tropis.
  * Setiap satu ketukan layar (*single-tap*) membuat burung mengepakkan sayap ke atas melawan gravitasi.
  * Melewati celah pilar menghasilkan 1 poin skor. Kesalahan 1 piksel saja berarti game over.
* **Fitur Utama:**
  * Loading instan dalam 0.3 detik (ukuran file di bawah 150 KB).
  * Mode "Turnamen Mingguan" di mana skor tertinggi pemain ditampilkan di bar **Ticker Merah** navbar Travelista.
  * Skin lucu: Burung berhelm pilot, burung berkacamata hitam, burung berblangkon.
* **Spesifikasi HTML5:** Single Canvas 60 FPS physics loop, kompatibel dengan browser paling lawas sekalipun.
* **Use Case & Sinergi:**
  * Game instan pembuka bagi pengguna dengan koneksi internet terbatas di daerah wisata terpencil.

---

### 11. Spot The Difference: Photo Hunter
* **Genre:** Visual Search / Spot the Difference Puzzle
* **Gameplay Core Loop:**
  * Menampilkan dua foto pemandangan wisata eksotis bersebelahan (kiri vs kanan) yang tampak identik.
  * Terdapat 5 perbedaan kecil yang dimanipulasi secara cerdas (misal: warna tas ransel traveler, burung camar terbang di langit, perahu kecil di bibir pantai, atau awan di puncak gunung).
  * Pemain mengklik titik perbedaan sebelum waktu 60 detik berakhir.
* **Fitur Utama:**
  * Foto asli resolusi tinggi berlisensi resmi dari dokumentasi perjalanan Travelista.
  * Sistem *Hint* kaca pembesar dan tombol *Zoom In/Out* untuk pengguna mobile.
  * Galeri 100+ lokasi wisata dari Sabang sampai Merauke.
* **Spesifikasi HTML5:** Dual-image HTML Canvas comparison dengan coordinate tagging yang ringan.
* **Use Case & Sinergi:**
  * Promosi visual destinasi pariwisata yang sangat elegan, memperkenalkan spot-spot tersembunyi (*hidden gems*) kepada calon wisatawan.

---

### 12. Jalur Kereta Wisata: Track Builder
* **Genre:** Rotating Tile / Pipe Routing Puzzle (Gaya: *Trainyard / Pipe Dream*)
* **Gameplay Core Loop:**
  * Papan permainan kotak berukuran 5x5 berisi potongan-potongan rel kereta api acak (rel lurus, tikungan 90 derajat, rel jembatan, terowongan).
  * Kereta api wisata panorama sudah mulai berjalan pelan dari stasiun awal.
  * Pemain harus memutar (*tap to rotate*) ubin-ubin rel agar tersambung sempurna menuju stasiun tujuan sebelum kereta tiba di ujung rel buntu dan anjlok.
* **Fitur Utama:**
  * Jalur rel melintasi pemandangan spektakuler: Jembatan Cikubang, Terowongan Ijo, dan pemandangan sawah terasering.
  * Bonus bintang jika berhasil melewati rel dengan ubin pemandangan khusus.
  * 3 Tingkat Kesulitan: Santai (tanpa batas waktu kereta), Normal, dan Kilat.
* **Spesifikasi HTML5:** Matrix array grid evaluation (logika algoritma pathfinding A* sederhana) yang sangat cepat dan ringan.
* **Use Case & Sinergi:**
  * Menargetkan penggemar moda transportasi darat dan wisata rel kereta api panoramik Indonesia.

---

## 3. Strategi Integrasi Iklan & Monetisasi Game

Seluruh game di atas dirancang dengan titik integrasi iklan ramah pemain (*Non-Intrusive Monetization*):

1. **Rewarded Ads (Iklan Sukarela Berhadiah):**
   * *Nusantara Runner & Tol Trans-Java:* Tonton iklan 5 detik untuk melanjutkan permainan setelah jatuh (*Revive*).
   * *Packing Master & Photo Hunter:* Tonton iklan untuk mendapatkan bantuan petunjuk (*Hint*).
2. **Interstitial Between Levels (Iklan Antar Level):**
   * Ditampilkan hanya setelah pemain menyelesaikan 3 level berturut-turut pada game *Relik Candi* atau *Packing Master* (tidak di setiap level agar pemain tidak frustrasi).
3. **Companion Banner (300x250):**
   * Tetap aktif dan terlihat di samping frame permainan pada mode desktop tanpa mengganggu fokus kendali tombol game.

---

## 4. Rekomendasi Tahap Peluncuran (Roadmap MVP)

Untuk peluncuran versi perdana (MVP - *Minimum Viable Product*) `game.travelista.id`, disarankan merilis **3 game pertama** yang mewakili genre berbeda:

1. **Game 1 (Arcade Adiktif):** *Nusantara Runner: Escape to Bali* (Menarik audiens anak muda & mobile).
2. **Game 2 (Kasual & Brand Sinergi Feri):** *Kapal Feri: Island Hopper* (Memperkuat produk inti tiket kapal Travelista).
3. **Game 3 (Brain Puzzle Ringan):** *Packing Master: Koper Rapi* (Viral dan sangat cocok di-embed ke artikel blog Travelista).

