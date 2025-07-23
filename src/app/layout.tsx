import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/blocks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolt Gun Nation",
  description: "Migrated from WordPress to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Global background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 -z-10"></div>
        
        {/* Subtle geometric background */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <Header />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
