import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation, SiteTitle } from '.';

interface HeaderProps {
  className?: string;
}

/**
 * Consolidated Header component - Single cohesive navigation header
 * Styled with gradient background and bold black text
 * Based on Bolt Gun Nation's mission and New Mexican precision rifle community
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Points Race', href: '/points-race' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Community', href: 'https://www.facebook.com/groups/339663940504983/', external: true },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 ${className}`}>
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/media/images/uploads/2023/03/boltgun_logo-1024x1024.png"
                  alt="Bolt Gun Nation Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
              <SiteTitle
                className="text-xl font-bold tracking-tight text-black"
                headingLevel="h1"
              />
            </div>
            <div className="text-black">
              <Navigation items={navigationItems} className="font-semibold hover:text-gray-700 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
