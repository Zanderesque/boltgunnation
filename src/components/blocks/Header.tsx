import React from 'react';
import Link from 'next/link';
import { Navigation } from '.';

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
    <header className={`w-full bg-wp-base border-b border-wp-contrast/10 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between py-4">
          {/* Brand Section */}
          <div className="flex items-center space-x-4">
            {/* Logo/Icon Placeholder - Can add actual logo later */}
            <div className="w-12 h-12 bg-wp-accent-1 rounded-full flex items-center justify-center">
              <span className="text-wp-contrast font-bold text-lg">BGN</span>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <Link 
                href="/" 
                className="text-2xl font-bold text-wp-contrast hover:text-wp-accent-1 transition-colors"
              >
                Bolt Gun Nation
              </Link>
              <span className="text-sm text-wp-contrast/70 font-medium tracking-wide">
                PRECISION • COMPETITION • EXCELLENCE
              </span>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-wp-contrast hover:text-wp-accent-1 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Join Group Button */}
            <Link
              href="https://www.facebook.com/groups/339663940504983/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Group
            </Link>

            {/* Mobile Navigation Component */}
            <div className="lg:hidden">
              <Navigation 
                items={[
                  ...navigationItems,
                ]} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
