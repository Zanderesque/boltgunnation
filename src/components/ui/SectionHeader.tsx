'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { sectionStyles, typographyStyles, createMotionProps } from '@/lib/styles';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withAccentLine?: boolean;
  animationDelay?: number;
}

/**
 * Reusable section header component with consistent styling
 * Can be centered, include a subtitle, and an accent line
 */
export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  withAccentLine = true,
  animationDelay = 0
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={`${sectionStyles.header} ${centered ? 'justify-center text-center' : ''}`}
      {...createMotionProps('fadeInUp', animationDelay)}
    >
      {withAccentLine && (
        <div className={sectionStyles.headerLine}></div>
      )}
      
      <div>
        <h2 className={`${typographyStyles.h2} m-0`}>{title}</h2>
        {subtitle && (
          <p className={`${typographyStyles.muted} mt-2`}>{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
