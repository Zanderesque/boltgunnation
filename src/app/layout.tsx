import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/blocks";

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
    <html lang="en">
      <body className={`${inter.className} bg-wp-base text-wp-contrast`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/* Footer will be added here */}
      </body>
    </html>
  );
}
