'use client';

import React, { ReactNode } from 'react';
import { badgeStyles } from '@/lib/styles';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  className?: string;
}

/**
 * Reusable badge component with consistent styling
 * Used for status indicators, tags, and labels
 */
export default function Badge({
  children,
  variant = 'primary',
  icon,
  className = ''
}: BadgeProps) {
  // Get the appropriate badge style based on variant
  const variantStyle = badgeStyles[variant];
  
  return (
    <span className={`${badgeStyles.base} ${variantStyle} ${className}`}>
      {icon && (
        <span className="mr-1 inline-flex">{icon}</span>
      )}
      {children}
    </span>
  );
}
