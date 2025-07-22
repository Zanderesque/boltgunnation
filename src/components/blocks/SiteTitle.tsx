import React from 'react';
import Link from 'next/link';

interface SiteTitleProps {
  className?: string;
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * SiteTitle component - Converts WordPress wp:site-title block to React
 * Equivalent to WordPress site title block with configurable heading level
 */
const SiteTitle: React.FC<SiteTitleProps> = ({ 
  className = '', 
  level = 0 
}) => {
  const siteTitle = "Bolt Gun Nation"; // This would come from your site config
  
  // WordPress uses level 0 to indicate no heading tag (just text)
  if (level === 0) {
    return (
      <Link 
        href="/" 
        className={`text-xl font-bold text-wp-contrast hover:text-wp-accent-1 transition-colors ${className}`}
      >
        {siteTitle}
      </Link>
    );
  }
  
  // Dynamic heading tag based on level
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
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
};

export default SiteTitle;
