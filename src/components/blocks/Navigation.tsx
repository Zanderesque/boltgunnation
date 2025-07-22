"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

interface NavigationProps {
  className?: string;
  items?: NavigationItem[];
}

/**
 * Navigation component - Mobile-optimized navigation for consolidated header
 * Handles both internal and external links (like Facebook group)
 */
const Navigation: React.FC<NavigationProps> = ({ 
  className = '',
  items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavigationLink = (item: NavigationItem) => {
    const isExternal = item.href.startsWith('http') || item.external;
    const linkProps = isExternal ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {};

    if (isExternal) {
      return (
        <a
          href={item.href}
          className="text-wp-contrast hover:text-wp-accent-1 transition-colors font-medium py-2 block"
          onClick={() => setIsOpen(false)}
          {...linkProps}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className="text-wp-contrast hover:text-wp-accent-1 transition-colors font-medium py-2 block"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className={`relative ${className}`}>
      {/* Desktop Navigation - Hidden when used in consolidated header */}
      <div className="hidden md:flex items-center space-x-8">
        {items.map((item) => {
          const isExternal = item.href.startsWith('http') || item.external;
          const linkProps = isExternal ? {
            target: "_blank",
            rel: "noopener noreferrer"
          } : {};

          if (isExternal) {
            return (
              <a
                key={item.href}
                href={item.href}
                className="text-wp-contrast hover:text-wp-accent-1 transition-colors font-medium"
                {...linkProps}
              >
                {item.label}
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-wp-contrast hover:text-wp-accent-1 transition-colors font-medium"
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden p-2 text-wp-contrast hover:text-wp-accent-1 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-wp-contrast/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-wp-base shadow-lg z-50 md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              <button
                className="self-end p-2 text-wp-contrast hover:text-wp-accent-1"
                onClick={() => setIsOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              
              {items.map((item) => (
                <div key={item.href}>
                  {renderNavigationLink(item)}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
