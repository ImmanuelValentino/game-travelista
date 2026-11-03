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
  {
    id: "warung-keliling",
    slug: "warung-keliling",
    title: "Warung Keliling: Street Food",
    description: "Layani pesanan sate, bakso, dan es kelapa turis lapar di pasar malam wisata sebelum pelanggan marah!",
    category: "casual",
    thumbnailUrl: "/images/games/warung-keliling.webp",
    gamePath: "/games/packing-master/index.html", // fallback prototype
    playCount: 6540,
    likesCount: 430,
    rating: 4.7,
    badge: "HOT",
    controlsGuide: {
      keyboard: ["Klik Bahan : Racik Makanan", "Klik Meja : Sajikan ke Tamu"],
      touch: "Tap bahan makanan untuk memasak",
    },
  },
  {
    id: "geotraveler-iq",
    slug: "geotraveler-iq",
    title: "GeoTraveler IQ: Tebak Lokasi",
    description: "Tebak nama destinasi dan letakkan pin koordinat tempat wisata eksotis nusantara dalam 15 detik!",
    category: "puzzle",
    thumbnailUrl: "/images/games/geotraveler-iq.webp",
    gamePath: "/games/packing-master/index.html",
    playCount: 8930,
    likesCount: 780,
    rating: 4.9,
    badge: "BARU",
  },
  {
    id: "survival-camp",
    slug: "survival-camp",
    title: "Survival Camp: Api & Tenda",
    description: "Belajar membuat api unggun dengan gesekan kayu, mendirikan tenda, dan menyaring air di gunung.",
    category: "adventure",
    thumbnailUrl: "/images/games/survival-camp.webp",
    gamePath: "/games/kapal-feri/index.html",
    playCount: 4500,
    likesCount: 390,
    rating: 4.6,
  },
  {
    id: "tol-trans-java",
    slug: "tol-trans-java",
    title: "Tol Trans-Java Blitz",
    description: "Kemudikan mobil travel di jalan tol, hindari bus malam dan tap e-toll dengan presisi tinggi!",
    category: "arcade",
    thumbnailUrl: "/images/games/tol-trans-java.webp",
    gamePath: "/games/nusantara-runner/index.html",
    playCount: 11400,
    likesCount: 940,
    rating: 4.8,
    badge: "HOT",
  },
  {
    id: "relik-candi",
    slug: "relik-candi",
    title: "Relik Candi: Jewel Quest",
    description: "Cocokkan 3 batu giok pusaka dan artefak kuno untuk membuka gerbang rahasia candi Borobudur.",
    category: "puzzle",
    thumbnailUrl: "/images/games/relik-candi.webp",
    gamePath: "/games/packing-master/index.html",
    playCount: 7820,
    likesCount: 650,
    rating: 4.7,
  },
  {
    id: "bandara-runway-atc",
    slug: "bandara-runway-atc",
    title: "Bandara Runway ATC",
    description: "Tarik garis jalur terbang pesawat dan helikopter wisata agar mendarat mulus tanpa tubrukan.",
    category: "action",
    thumbnailUrl: "/images/games/bandara-atc.webp",
    gamePath: "/games/kapal-feri/index.html",
    playCount: 5200,
    likesCount: 410,
    rating: 4.5,
  },
  {
    id: "jalak-bali-flap",
    slug: "jalak-bali-flap",
    title: "Jalak Bali Flap",
    description: "Satu ketukan untuk terbang melewati pilar batu pura. Sangat adiktif dan super ringan!",
    category: "arcade",
    thumbnailUrl: "/images/games/jalak-bali.webp",
    gamePath: "/games/nusantara-runner/index.html",
    playCount: 16900,
    likesCount: 1450,
    rating: 4.6,
    badge: "HOT",
  },
  {
    id: "photo-hunter",
    slug: "photo-hunter",
    title: "Photo Hunter: Spot Difference",
    description: "Cari 5 perbedaan halus pada foto pemandangan wisata eksotis sebelum waktu 60 detik habis.",
    category: "casual",
    thumbnailUrl: "/images/games/photo-hunter.webp",
    gamePath: "/games/packing-master/index.html",
    playCount: 3900,
    likesCount: 310,
    rating: 4.7,
  },
  {
    id: "kereta-wisata",
    slug: "kereta-wisata",
    title: "Jalur Kereta Wisata",
    description: "Putar potongan rel kereta panoramik sebelum lokomotif tiba melewati jembatan jurang nan indah.",
    category: "puzzle",
    thumbnailUrl: "/images/games/kereta-wisata.webp",
    gamePath: "/games/packing-master/index.html",
    playCount: 4600,
    likesCount: 380,
    rating: 4.8,
    badge: "BARU",
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

