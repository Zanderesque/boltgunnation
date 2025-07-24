'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { typographyStyles, createMotionProps } from '@/lib/styles';

interface TypographyProps {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodyLg' | 'bodySm' | 'muted' | 'emphasis' | 'caption' | 'quote' | 'code';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'blockquote' | 'code';
  className?: string;
  gradient?: boolean;
  animate?: boolean;
  animationVariant?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight';
  animationDelay?: number;
}

/**
 * Reusable Typography component for consistent text styling
 * Supports all heading levels, body text, and special text styles
 * Can be animated with Framer Motion
 */
export default function Typography({
  children,
  variant,
  component,
  className = '',
  gradient = false,
  animate = false,
  animationVariant = 'fadeIn',
  animationDelay = 0
}: TypographyProps) {
  // Determine the HTML element to use based on variant and component prop
  const getComponent = (): keyof JSX.IntrinsicElements => {
    if (component) return component;
    
    // Default components based on variant
    switch (variant) {
      case 'h1': return 'h1';
      case 'h2': return 'h2';
      case 'h3': return 'h3';
      case 'h4': return 'h4';
      case 'h5': return 'h5';
      case 'h6': return 'h6';
      case 'quote': return 'blockquote';
      case 'code': return 'code';
      default: return 'p';
    }
  };
  
  // Get the appropriate typography style
  const style = typographyStyles[variant];
  
  // Add gradient text if requested
  const gradientStyle = gradient ? typographyStyles.gradientText : '';
  
  // Combine all classes
  const combinedClasses = `${style} ${gradientStyle} ${className}`;
  
  // If animation is enabled, use motion component
  if (animate) {
    return React.createElement(
      motion[getComponent() as keyof typeof motion],
      {
        className: combinedClasses,
        ...createMotionProps(animationVariant, animationDelay)
      },
      children
    );
  }
  
  // Otherwise use regular HTML element
  return React.createElement(
    getComponent(),
    { className: combinedClasses },
    children
  );
}
