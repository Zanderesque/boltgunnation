import React from 'react';

interface SiteTitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children?: React.ReactNode;
  showTagline?: boolean;
  headingLevel?: string;
}

/**
 * SiteTitle component - Converts WordPress wp:site-title block to React
 * Equivalent to WordPress site title block with configurable heading level
 * Enhanced with solid black text styling for better visibility
 */
export default function SiteTitle({ 
  level = 1, 
  className = '', 
  children,
  showTagline = false,
  headingLevel
}: SiteTitleProps) {
  
  const siteTitle = children || "Bolt Gun Nation"; // Use children if provided, otherwise default
  const siteTagline = "New Mexico's Premier Precision Rifle Community";
  
  // Dynamic heading tag based on level or headingLevel prop
  const HeadingTag = headingLevel || `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <div className="flex flex-col gap-1">
      <HeadingTag className={`text-2xl font-bold ${className}`}>
        <span className="text-black hover:text-gray-700 transition-colors relative group">
          {siteTitle}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </span>
      </HeadingTag>
      
      {showTagline && (
        <p className="text-sm text-black/70 font-medium">
          {siteTagline}
        </p>
      )}
    </div>
  );
}
