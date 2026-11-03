import React from "react";
import AdSkyscraper from "../ads/AdSkyscraper";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen flex flex-col pb-28">
      {/* Skyscraper Kiri (Hanya muncul di desktop lebar >= 1440px) */}
      <AdSkyscraper position="left" />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Skyscraper Kanan (Hanya muncul di desktop lebar >= 1440px) */}
      <AdSkyscraper position="right" />
    </div>
  );
}

