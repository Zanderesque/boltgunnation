import React from 'react';
import Link from 'next/link';

interface SiteTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

/**
 * SiteTitle component - Converts WordPress wp:site-title block to React
 * Equivalent to WordPress site title block with configurable heading level
 */
export default function SiteTitle({ 
  level = 1, 
  className = '', 
  children 
}: SiteTitleProps) {
  
  const siteTitle = "Bolt Gun Nation"; // This would come from your site config
  
  // Dynamic heading tag based on level
  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <HeadingTag className={`text-xl font-bold ${className}`}>
      <Link 
        href="/" 
        className="text-wp-contrast hover:text-wp-accent-1 transition-colors"
      >
        {siteTitle}
      </Link>
    </HeadingTag>
  );
}
