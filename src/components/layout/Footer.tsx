import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Compass, Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-16 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Kolom 1: Brand Info */}
          <div className="space-y-3">
            <Link
              href="https://travelista.id"
              className="inline-flex items-center gap-2 group"
              title="Kunjungi Travelista.id"
            >
              <Image
                src="/travelista-logo-light.png"
                alt="Travelista Logo"
                width={130}
                height={32}
                className="h-7 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                GAMES
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Portal game web instan resmi Travelista. Mainkan ratusan game petualangan, arcade, puzzle, dan kuliner nusantara secara gratis tanpa perlu instalasi aplikasi!
            </p>
          </div>

          {/* Kolom 2: Kategori Populer */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Kategori Game
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/arcade" className="hover:text-red-400 transition-colors">
                  🕹️ Game Arcade Populer
                </Link>
              </li>
              <li>
                <Link href="/category/adventure" className="hover:text-red-400 transition-colors">
                  🧭 Petualangan Nusantara
                </Link>
              </li>
              <li>
                <Link href="/category/puzzle" className="hover:text-red-400 transition-colors">
                  🧩 Asah Otak & Packing Koper
                </Link>
              </li>
              <li>
                <Link href="/category/casual" className="hover:text-red-400 transition-colors">
                  ☕ Kuliner & Santai
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Travelista Utama */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Layanan Travelista
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://travelista.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <span>🚢 Booking Tiket Kapal Feri</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://travelista.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>🎒 Paket Wisata & Open Trip</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://travelista.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>📖 Tips & Rekomendasi Destinasi</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Legal & Keamanan */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Tentang Kami
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Seluruh game HTML5 dioptimalkan untuk performa tinggi, ramah kuota, dan aman dimainkan di seluruh perangkat desktop dan mobile.
            </p>
            <div className="mt-3 flex items-center gap-3 text-slate-500">
              <span className="flex items-center gap-1 text-[11px]">
                <Shield className="w-3.5 h-3.5 text-emerald-500" /> Bebas Malware
              </span>
              <span className="flex items-center gap-1 text-[11px]">
                <Gamepad2 className="w-3.5 h-3.5 text-sky-500" /> HTML5 Instant
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Travelista Games (game.travelista.id). All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dibuat dengan</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>untuk Traveler & Gamers Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

