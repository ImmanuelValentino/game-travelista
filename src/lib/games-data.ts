import { Game, CategoryInfo } from "@/types/game";

export const CATEGORIES: CategoryInfo[] = [
  { id: "all", label: "Semua Game", icon: "🎮", colorClass: "bg-red-500" },
  { id: "arcade", label: "Arcade", icon: "🕹️", colorClass: "bg-amber-500" },
  { id: "adventure", label: "Petualangan", icon: "🧭", colorClass: "bg-emerald-500" },
  { id: "puzzle", label: "Puzzle", icon: "🧩", colorClass: "bg-sky-500" },
  { id: "action", label: "Aksi", icon: "⚡", colorClass: "bg-purple-500" },
  { id: "casual", label: "Santai", icon: "☕", colorClass: "bg-pink-500" },
  { id: "sports", label: "Olahraga", icon: "⚽", colorClass: "bg-blue-500" },
];

export const INITIAL_GAMES: Game[] = [
  // 1. Nusantara Runner (Hero Featured)
  {
    id: "nusantara-runner",
    slug: "nusantara-runner",
    title: "Nusantara Runner: Escape to Bali",
    description: "Lari santai melintasi Malioboro, Bromo, hingga Pantai Kuta. Hindari rintangan dan kumpulkan tiket kapal!",
    category: "arcade",
    thumbnailUrl: "/images/games/nusantara-runner.webp",
    gamePath: "/games/nusantara-runner/index.html",
    playCount: 14250,
    likesCount: 1240,
    rating: 4.9,
    badge: "HOT",
    featured: true,
    controlsGuide: {
      keyboard: ["Spasi / Panah Atas : Lompat", "Panah Bawah : Meluncur"],
      touch: "Tap atas untuk lompat, swipe bawah untuk meluncur",
    },
  },
  // 2. Kapal Feri (Hero Featured)
  {
    id: "kapal-feri",
    slug: "kapal-feri",
    title: "Kapal Feri: Island Hopper",
    description: "Kemudikan kapal penyeberangan antar pulau Merak - Bakauheni. Arungi ombak dan sandar di dermaga!",
    category: "adventure",
    thumbnailUrl: "/images/games/kapal-feri.webp",
    gamePath: "/games/kapal-feri/index.html",
    playCount: 9820,
    likesCount: 890,
    rating: 4.8,
    badge: "BARU",
    featured: true,
    controlsGuide: {
      keyboard: ["W / Panah Atas : Maju", "A/D : Belok Kemudi", "S : Rem / Mundur"],
      touch: "Gunakan setir di layar dan tombol gas",
    },
  },
  // 3. Packing Master (Hero Featured)
  {
    id: "packing-master",
    slug: "packing-master",
    title: "Packing Master: Koper Rapi",
    description: "Tata perlengkapan traveling ke dalam koper bagasi dengan ruang terbatas sebelum jadwal terbang tiba!",
    category: "puzzle",
    thumbnailUrl: "/images/games/packing-master.webp",
    gamePath: "/games/packing-master/index.html",
    playCount: 12100,
    likesCount: 1120,
    rating: 4.9,
    badge: "POPULAR",
    featured: true,
    controlsGuide: {
      keyboard: ["Klik & Drag : Pindahkan Barang", "R / Dobel Klik : Putar Barang"],
      touch: "Tahan dan geser barang ke dalam koper",
    },
  },
  // 4. Becak Drift (New from list-game2.md)
  {
    id: "becak-drift",
    slug: "becak-drift",
    title: "Becak Drift: Malioboro Rush",
    description: "Ngebut meliuk di lorong Malioboro & Keraton Jogja! Lakukan drifting tajam, hindari andong, dan jemput turis!",
    category: "arcade",
    thumbnailUrl: "/images/games/becak-drift.webp",
    gamePath: "/games/becak-drift/index.html",
    playCount: 8750,
    likesCount: 780,
    rating: 4.8,
    badge: "BARU",
    controlsGuide: {
      keyboard: ["A / D atau Panah Kiri / Kanan : Kemudi Belok & Drift"],
      touch: "Tap sisi kiri atau kanan layar untuk belok",
    },
  },
  // 5. Candi Stacker (New from list-game2.md)
  {
    id: "candi-stacker",
    slug: "candi-stacker",
    title: "Candi Stacker: Megalitikum",
    description: "Tumpuk batu andesit bertingkat setinggi langit Borobudur! Pasang balok dengan presisi tanpa terpotong!",
    category: "casual",
    thumbnailUrl: "/images/games/candi-stacker.webp",
    gamePath: "/games/candi-stacker/index.html",
    playCount: 11340,
    likesCount: 960,
    rating: 4.9,
    badge: "HOT",
    controlsGuide: {
      keyboard: ["Spasi : Jatuhkan Balok Batu"],
      touch: "Tap layar di mana saja untuk menjatuhkan balok",
    },
  },
  // 6. Batik Flow (New from list-game2.md)
  {
    id: "batik-flow",
    slug: "batik-flow",
    title: "Batik Flow: Sambung Canting",
    description: "Putar potongan ukiran lilin malam panas agar tersambung dari canting tembaga menuju mahkota batik nusantara!",
    category: "puzzle",
    thumbnailUrl: "/images/games/batik-flow.webp",
    gamePath: "/games/batik-flow/index.html",
    playCount: 6420,
    likesCount: 540,
    rating: 4.7,
    badge: "BARU",
    controlsGuide: {
      keyboard: ["Klik Ubin : Putar 90 Derajat"],
      touch: "Tap ubin kain untuk memutar arah jalur",
    },
  },
  // 7. Layangan Sanur (New from list-game2.md)
  {
    id: "layangan-sanur",
    slug: "layangan-sanur",
    title: "Layangan Sanur: Wind Battle",
    description: "Adu tarik-ulur benang layangan bebean di pantai Bali! Potong benang lawan tanpa membuat benang sendiri putus!",
    category: "action",
    thumbnailUrl: "/images/games/layangan-sanur.webp",
    gamePath: "/games/layangan-sanur/index.html",
    playCount: 9230,
    likesCount: 810,
    rating: 4.8,
    badge: "POPULAR",
    controlsGuide: {
      keyboard: ["Tahan Spasi : Tarik Menukik Tajam", "Lepas Spasi : Mengulur Benang"],
      touch: "Tahan layar untuk menukik, lepas untuk mengulur",
    },
  },
  // 8. Kopi Klotok (New from list-game2.md)
  {
    id: "kopi-klotok",
    slug: "kopi-klotok",
    title: "Kopi Klotok: Barista Rhythm",
    description: "Ketuk seduhan kopi tepat saat tetesan air mendidih & biji kopi panggang menyentuh cangkir tanah liat!",
    category: "casual",
    thumbnailUrl: "/images/games/kopi-klotok.webp",
    gamePath: "/games/kopi-klotok/index.html",
    playCount: 7890,
    likesCount: 670,
    rating: 4.8,
    badge: "HOT",
    controlsGuide: {
      keyboard: ["Spasi : Seduh Kopi Sesuai Ritme"],
      touch: "Tap tombol SEDOH di bawah cangkir",
    },
  },
  // 9. Lembah Bromo (New from list-game2.md)
  {
    id: "lembah-bromo",
    slug: "lembah-bromo",
    title: "Lembah Bromo: Hang Glider",
    description: "Kemudikan paralayang melintasi bukit pasir Bromo! Tukik menuruni lembah untuk momentum terbang melayang di udara!",
    category: "adventure",
    thumbnailUrl: "/images/games/lembah-bromo.webp",
    gamePath: "/games/lembah-bromo/index.html",
    playCount: 8450,
    likesCount: 720,
    rating: 4.8,
    badge: "BARU",
    controlsGuide: {
      keyboard: ["Tahan Spasi : Menukik ke Bawah (Dive)", "Lepas Spasi : Meluncur ke Atas"],
      touch: "Tahan layar saat menuruni bukit, lepas di puncak bukit",
    },
  },
  // 10. Pasar Terapung (New from list-game2.md)
  {
    id: "pasar-terapung",
    slug: "pasar-terapung",
    title: "Pasar Terapung: Fruit Catch",
    description: "Geser perahu jukung di Sungai Martapura Banjarmasin! Tangkap buah-buahan segar nusantara & hindari batu sungai!",
    category: "arcade",
    thumbnailUrl: "/images/games/pasar-terapung.webp",
    gamePath: "/games/pasar-terapung/index.html",
    playCount: 10560,
    likesCount: 930,
    rating: 4.9,
    badge: "HOT",
    controlsGuide: {
      keyboard: ["A / D atau Panah Kiri / Kanan : Kayuh Perahu"],
      touch: "Geser jari di layar untuk memandu perahu jukung",
    },
  },
  // 11. Kamus Kelana (New from list-game2.md)
  {
    id: "kamus-kelana",
    slug: "kamus-kelana",
    title: "Kamus Kelana: Kata Tersembunyi",
    description: "Hubungkan huruf pada roda kompas untuk mengungkap nama-nama destinasi wisata nusantara tersembunyi!",
    category: "puzzle",
    thumbnailUrl: "/images/games/kamus-kelana.webp",
    gamePath: "/games/kamus-kelana/index.html",
    playCount: 6120,
    likesCount: 510,
    rating: 4.7,
    badge: "BARU",
    controlsGuide: {
      keyboard: ["Klik & Drag Huruf : Sambung Kata"],
      touch: "Tarik garis antar huruf menggunakan jari",
    },
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return INITIAL_GAMES.find((g) => g.slug === slug);
}

export function getGamesByCategory(category: string): Game[] {
  if (!category || category === "all") {
    return INITIAL_GAMES;
  }
  return INITIAL_GAMES.filter((g) => g.category === category);
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase().trim();
  if (!q) return INITIAL_GAMES;
  return INITIAL_GAMES.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
  );
}
