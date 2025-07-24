'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { buttonStyles, createMotionProps } from '@/lib/styles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animateOnHover?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Reusable button component with consistent styling
 * Supports different variants, sizes, and can be rendered as a link
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  disabled = false,
  className = '',
  onClick,
  icon,
  iconPosition = 'left',
  animateOnHover = true,
  fullWidth = false,
  type = 'button'
}: ButtonProps) {
  // Get the appropriate button style based on variant and size
  const baseStyle = buttonStyles[variant];
  const sizeStyle = size === 'md' ? '' : buttonStyles[size];
  const disabledStyle = disabled ? buttonStyles.disabled : '';
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const combinedStyles = `${baseStyle} ${sizeStyle} ${disabledStyle} ${widthStyle} ${className} ${
    animateOnHover ? 'transform transition-transform hover:scale-[1.02] active:scale-[0.98]' : ''
  } flex items-center justify-center`;

  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'} inline-flex`}>
        {icon}
      </span>
    );
  };

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // If href is provided, render as a link
  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    
    return (
      <Link 
        href={disabled ? '#' : href} 
        className={combinedStyles}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }
  
  // Otherwise render as a button
  return (
    <motion.button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      whileHover={animateOnHover && !disabled ? { scale: 1.02 } : {}}
      whileTap={animateOnHover && !disabled ? { scale: 0.98 } : {}}
    >
      {content}
    </motion.button>
  );
}
