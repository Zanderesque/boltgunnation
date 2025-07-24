'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardStyles, createMotionProps } from '@/lib/styles';

interface CardProps {
  children: ReactNode;
  variant?: 'base' | 'highlight' | 'gradient' | 'white' | 'transparent';
  className?: string;
  animationDelay?: number;
  withHeader?: boolean;
  headerContent?: ReactNode;
  withFooter?: boolean;
  footerContent?: ReactNode;
  onClick?: () => void;
}

/**
 * Reusable card component with consistent styling
 * Supports different variants, headers, footers, and animations
 */
export default function Card({
  children,
  variant = 'base',
  className = '',
  animationDelay = 0,
  withHeader = false,
  headerContent,
  withFooter = false,
  footerContent,
  onClick
}: CardProps) {
  // Get the appropriate card style based on variant
  const cardStyle = cardStyles[variant];
  
  return (
    <motion.div 
      className={`${cardStyle} ${className}`}
      {...createMotionProps('fadeInUp', animationDelay)}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {withHeader && headerContent && (
        <div className={cardStyles.header}>
          {headerContent}
        </div>
      )}
      
      <div className={cardStyles.body}>
        {children}
      </div>
      
      {withFooter && footerContent && (
        <div className={cardStyles.footer}>
          {footerContent}
        </div>
      )}
    </motion.div>
  );
}
