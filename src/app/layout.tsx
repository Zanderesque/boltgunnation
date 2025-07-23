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
      <body className={`${inter.className} bg-wp-base text-wp-contrast min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
