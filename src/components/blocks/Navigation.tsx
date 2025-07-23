"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

interface NavigationProps {
  className?: string;
  items: NavigationItem[];
}

/**
 * Navigation component - Mobile-optimized navigation for consolidated header
 * Handles both internal and external links (like Facebook group)
 * Enhanced with hover effects and animations for better UX
 */
const Navigation: React.FC<NavigationProps> = ({ 
  className = '',
  items 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const renderNavigationLink = (item: NavigationItem, isMobile: boolean = false) => {
    const isExternal = item.href.startsWith('http') || item.external;
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
      ...(isExternal ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})
    };

    const baseClasses = isMobile 
      ? "hover:text-wp-accent-1 transition-colors font-medium py-3 block border-b border-wp-contrast/10 w-full"
      : "hover:text-wp-accent-1 transition-colors font-medium relative group";

    if (isExternal) {
      return (
        <a
          href={item.href}
          className={baseClasses}
          onClick={() => setIsOpen(false)}
          {...linkProps}
        >
          {item.label}
          {!isMobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wp-accent-1 transition-all duration-300 group-hover:w-full"></span>
          )}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className={baseClasses}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wp-accent-1 transition-all duration-300 group-hover:w-full"></span>
        )}
      </Link>
    );
  };

  return (
    <nav className={`relative ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {items.map((item) => (
          <div key={item.href} className="relative">
            {renderNavigationLink(item)}
          </div>
        ))}
        
        {/* Facebook Join Group Button for Desktop */}
        <a
          href="https://www.facebook.com/groups/339663940504983/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-wp-accent-1 text-wp-contrast font-medium rounded-lg hover:bg-wp-accent-1/80 transition-colors"
        >
          Join Group
        </a>
      </div>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden p-2 text-wp-contrast hover:text-wp-accent-1 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-wp-accent-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
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
            className="fixed inset-0 bg-wp-contrast/50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-72 bg-wp-base shadow-lg z-50 md:hidden transform transition-transform duration-300 overflow-y-auto">
            <div className="flex flex-col p-6">
              <div className="flex justify-between items-center mb-6 border-b border-wp-contrast/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-wp-accent-1 rounded-full flex items-center justify-center">
                    <span className="text-wp-contrast font-bold text-xs">BGN</span>
                  </div>
                  <span className="font-bold text-wp-contrast">Menu</span>
                </div>
                <button
                  className="p-2 text-wp-contrast hover:text-wp-accent-1 rounded-full focus:outline-none focus:ring-2 focus:ring-wp-accent-1"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-1">
                {items.map((item) => (
                  <div key={item.href} className="w-full">
                    {renderNavigationLink(item, true)}
                  </div>
                ))}
              </div>
              
              {/* Facebook Join Group Button for Mobile */}
              <a
                href="https://www.facebook.com/groups/339663940504983/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center px-4 py-3 bg-wp-accent-1 text-wp-contrast font-medium rounded-lg hover:bg-wp-accent-1/80 transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Join Facebook Group
              </a>
              
              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-wp-contrast/10 text-sm text-wp-contrast/70">
                <p className="mb-2">New Mexico's Premier Precision Rifle Community</p>
                <p>Questions? Contact us at <a href="mailto:info@boltgunnation.com" className="text-wp-accent-1 hover:underline">info@boltgunnation.com</a></p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
