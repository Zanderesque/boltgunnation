import React from 'react';

interface SiteTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children?: React.ReactNode;
  showTagline?: boolean;
}

/**
 * SiteTitle component - Converts WordPress wp:site-title block to React
 * Equivalent to WordPress site title block with configurable heading level
 * Enhanced with New Mexican color scheme and optional tagline
 */
export default function SiteTitle({ 
  level = 1, 
  className = '', 
  children,
  showTagline = false
}: SiteTitleProps) {
  
  const siteTitle = children || "Bolt Gun Nation"; // Use children if provided, otherwise default
  const siteTagline = "New Mexico's Premier Precision Rifle Community";
  
  // Dynamic heading tag based on level
  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <div className="flex flex-col gap-1">
      <HeadingTag className={`text-2xl font-bold ${className}`}>
        <span className="text-wp-contrast hover:text-wp-accent-1 transition-colors relative group">
          {siteTitle}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wp-accent-1 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </HeadingTag>
      
      {showTagline && (
        <p className="text-sm text-wp-contrast/70 font-medium">
          {siteTagline}
        </p>
      )}
    </div>
  );
}
