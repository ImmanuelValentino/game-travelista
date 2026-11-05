import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Travelista Games",
  description:
    "Mainkan ratusan game petualangan, arcade, puzzle, dan kuliner nusantara seru gratis tanpa download di Travelista Games!",
  keywords: [
    "game web",
    "game friv",
    "travelista games",
    "game online gratis",
    "nusantara runner",
    "game html5",
  ],
  authors: [{ name: "Travelista Indonesia" }],
  icons: {
    icon: [
      { url: "/travelista-logo-gram.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/travelista-logo-gram.png",
    apple: "/travelista-logo-gram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

