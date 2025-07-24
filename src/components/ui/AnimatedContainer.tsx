'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { motionVariants } from '@/lib/styles';

interface AnimatedContainerProps {
  children: ReactNode;
  variant?: keyof typeof motionVariants;
  customVariant?: Variants;
  delay?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  viewport?: boolean;
  viewportMargin?: string;
  viewportOnce?: boolean;
  id?: string;
}

/**
 * Reusable animated container component for consistent animations
 * Supports all predefined animation variants and custom variants
 * Can be used as a stagger container for child elements
 */
export default function AnimatedContainer({
  children,
  variant = 'fadeIn',
  customVariant,
  delay = 0,
  className = '',
  stagger = false,
  staggerDelay = 0.1,
  viewport = false,
  viewportMargin = '0px',
  viewportOnce = true,
  id
}: AnimatedContainerProps) {
  // Get the appropriate animation variant
  const selectedVariant = customVariant || motionVariants[variant];
  
  // Create stagger container if requested
  const staggerContainer = stagger ? {
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  } : {};
  
  // Combine variants
  const combinedVariants = stagger ? 
    { ...selectedVariant, ...staggerContainer } : 
    selectedVariant;
  
  // Add delay to transition if not a stagger container
  const transition = !stagger && delay > 0 ? {
    transition: {
      ...(selectedVariant.transition || {}),
      delay
    }
  } : {};
  
  // Viewport options for scroll-based animations
  const viewportOptions = viewport ? {
    viewport: { 
      once: viewportOnce,
      margin: viewportMargin
    }
  } : {};
  
  return (
    <motion.div
      id={id}
      className={className}
      variants={combinedVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...transition}
      {...viewportOptions}
    >
      {children}
    </motion.div>
  );
}
