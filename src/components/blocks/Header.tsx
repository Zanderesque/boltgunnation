import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation, SiteTitle } from '.';

interface HeaderProps {
  className?: string;
}

/**
 * Consolidated Header component - Single cohesive navigation header
 * Combines branding, tagline, navigation, and social integration
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
    <header className={`sticky top-0 z-50 w-full border-b border-wp-accent-2/20 bg-wp-base/80 backdrop-blur-md ${className}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/media/images/uploads/2023/03/boltgun_logo-1024x1024.png"
              alt="Bolt Gun Nation Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <SiteTitle
              className="text-xl font-bold tracking-tight text-wp-contrast"
              headingLevel="h1"
            />
          </Link>
        </div>
        <Navigation items={navigationItems} />
      </div>
      <div className="nm-divider w-full"></div>
    </header>
  );
};

export default Header;
