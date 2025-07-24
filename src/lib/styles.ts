/**
 * styles.ts
 * Shared styles and animations for consistent UI across the Bolt Gun Nation website
 * Based on the Points-Race page styling as the baseline
 */

import { MotionProps } from 'framer-motion';

/**
 * Card Styles
 * Standardized card components for consistent look and feel
 */
export const cardStyles = {
  // Base card style with subtle hover effect
  base: "bg-wp-base rounded-xl shadow-md overflow-hidden border border-wp-contrast/10 hover:shadow-lg transition-all duration-300",
  
  // Highlighted card with stronger shadow and border
  highlight: "bg-wp-base shadow-xl rounded-xl overflow-hidden border border-wp-accent-1/20 hover:shadow-2xl transition-all duration-300",
  
  // Card with gradient background
  gradient: "bg-gradient-to-r from-wp-accent-1/10 to-wp-accent-2/10 rounded-xl shadow-md border border-wp-contrast/10 hover:shadow-lg transition-all duration-300",
  
  // Card with white background and subtle border
  white: "bg-white backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300",
  
  // Card with transparent background
  transparent: "bg-transparent border border-wp-contrast/10 rounded-xl hover:border-wp-contrast/20 transition-all duration-300",
  
  // Card header
  header: "p-6 border-b border-wp-contrast/10",
  
  // Card body
  body: "p-6",
  
  // Card footer
  footer: "p-6 border-t border-wp-contrast/10 bg-wp-contrast/5"
};

/**
 * Button Styles
 * Standardized button components for consistent look and feel
 */
export const buttonStyles = {
  // Primary action button
  primary: "bg-wp-accent-1 hover:bg-wp-accent-1/90 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-300",
  
  // Secondary action button
  secondary: "bg-wp-base border border-wp-contrast/20 text-wp-contrast px-4 py-2 rounded-lg font-medium hover:bg-wp-contrast/5 hover:shadow transition-all duration-300",
  
  // Outline button
  outline: "bg-transparent border border-wp-accent-1 text-wp-accent-1 px-4 py-2 rounded-lg font-medium hover:bg-wp-accent-1/10 transition-all duration-300",
  
  // Link button
  link: "text-wp-accent-1 hover:text-wp-accent-2 font-medium inline-flex items-center transition-colors duration-300",
  
  // Disabled state
  disabled: "opacity-50 cursor-not-allowed",
  
  // Small size
  sm: "text-sm px-3 py-1.5 rounded-md",
  
  // Large size
  lg: "text-lg px-6 py-3 rounded-lg"
};

/**
 * Section Styles
 * Standardized section components for consistent page layout
 */
export const sectionStyles = {
  // Base section container
  base: "container mx-auto px-4 py-16",
  
  // Section with background
  withBackground: "bg-wp-base/50 backdrop-blur-sm",
  
  // Section header with accent line
  header: "flex items-center gap-3 mb-6",
  headerLine: "h-1 w-12 bg-wp-accent-1",
  headerTitle: "text-3xl font-bold text-wp-contrast m-0",
  
  // Section content container
  content: "bg-wp-base shadow-md rounded-lg p-8 border border-wp-contrast/10",
  
  // Hero section
  hero: "mb-16 relative",
  heroOverlay: "absolute inset-0 bg-gradient-to-r from-wp-accent-1/30 to-wp-accent-2/30 rounded-xl -z-10",
  heroContent: "bg-wp-base/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-wp-contrast/10"
};

/**
 * Typography Styles
 * Standardized text styles for consistent typography
 */
export const typographyStyles = {
  // Gradient text
  gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-wp-accent-1 to-wp-accent-2",
  
  // Heading styles
  h1: "text-4xl md:text-6xl font-bold text-wp-contrast mb-6",
  h2: "text-3xl md:text-4xl font-bold text-wp-contrast mb-5",
  h3: "text-2xl md:text-3xl font-bold text-wp-contrast mb-4",
  h4: "text-xl md:text-2xl font-bold text-wp-contrast mb-3",
  h5: "text-lg md:text-xl font-semibold text-wp-contrast mb-2",
  h6: "text-base md:text-lg font-semibold text-wp-contrast mb-2",
  
  // Body text styles
  body: "text-base text-wp-contrast leading-relaxed",
  bodyLg: "text-lg text-wp-contrast leading-relaxed",
  bodySm: "text-sm text-wp-contrast leading-relaxed",
  
  // Muted text (secondary text)
  muted: "text-wp-contrast/70",
  
  // List styles
  list: "list-disc list-inside space-y-2 text-wp-contrast leading-relaxed ml-4",
  orderedList: "list-decimal list-inside space-y-2 text-wp-contrast leading-relaxed ml-4",
  
  // Emphasis text
  emphasis: "font-medium text-wp-accent-1",
  
  // Caption text
  caption: "text-sm text-wp-contrast/60 italic",
  
  // Quote text
  quote: "border-l-4 border-wp-accent-2 pl-4 italic text-wp-contrast/80",
  
  // Code text
  code: "font-mono text-sm bg-wp-contrast/10 px-1.5 py-0.5 rounded",
  
  // Link text
  link: "text-wp-accent-1 hover:text-wp-accent-2 underline underline-offset-2 transition-colors duration-300"
};

/**
 * Spacing Standards
 * Standardized spacing and padding for consistent layout
 */
export const spacingStyles = {
  // Section spacing
  section: "py-16",
  betweenSections: "mb-16",
  
  // Element spacing
  betweenElements: "mb-8",
  betweenItems: "gap-6",
  
  // Padding
  cardPadding: "p-6",
  cardPaddingCompact: "p-4",
  sectionPadding: "px-4 py-16",
  containerPadding: "px-4 sm:px-6"
};

/**
 * Framer Motion Animation Variants
 * Standardized animations for consistent motion across the site
 */
export const motionVariants = {
  // Fade in up animation (for cards, sections)
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Stagger container (for groups of elements)
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // Fade in animation (for hero sections)
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Scale in animation (for buttons, interactive elements)
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Fade in with slight scale
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Hover scale effect (for interactive elements)
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  },
  
  // Page transition
  pageTransition: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
  
  // Staggered fade in for lists
  staggeredFadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

/**
 * Helper function to create motion props with delay
 * @param variant The animation variant to use
 * @param delay Optional delay in seconds
 * @returns Motion props object for Framer Motion components
 */
export const createMotionProps = (
  variant: keyof typeof motionVariants, 
  delay?: number
): MotionProps => {
  const baseVariant = motionVariants[variant];
  
  if (!delay) {
    return baseVariant;
  }
  
  return {
    ...baseVariant,
    transition: {
      ...(baseVariant.transition || {}),
      delay
    }
  };
};

/**
 * Badge Styles
 * Standardized badge components for status indicators
 */
export const badgeStyles = {
  // Base badge style
  base: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
  
  // Primary badge
  primary: "bg-wp-primary/10 text-wp-primary",
  
  // Accent badge
  accent: "bg-wp-accent/10 text-wp-accent",
  
  // Secondary badge
  secondary: "bg-wp-secondary/10 text-wp-secondary",
  
  // Tertiary badge
  tertiary: "bg-wp-tertiary/10 text-wp-tertiary",
  
  // Success badge
  success: "bg-green-100 text-green-800",
  
  // Warning badge
  warning: "bg-amber-100 text-amber-800",
  
  // Error badge
  error: "bg-red-100 text-red-800"
};

/**
 * Table Styles
 * Standardized table components for consistent data display
 */
export const tableStyles = {
  // Base table container
  container: "overflow-x-auto rounded-xl border border-wp-contrast/10 shadow-md",
  
  // Table element
  table: "min-w-full divide-y divide-wp-contrast/10",
  
  // Table header
  thead: "bg-wp-contrast/5",
  th: "px-6 py-3 text-left text-xs font-medium text-wp-contrast/70 uppercase tracking-wider",
  
  // Table body
  tbody: "bg-wp-base divide-y divide-wp-contrast/10",
  td: "px-6 py-4 whitespace-nowrap text-sm text-wp-contrast",
  
  // Alternating row colors
  trEven: "bg-wp-contrast/[0.02]",
  trOdd: "bg-wp-base",
  
  // Hover effect
  trHover: "hover:bg-wp-contrast/5 transition-colors duration-150"
};

/**
 * Form Styles
 * Standardized form components for consistent input styling
 */
export const formStyles = {
  // Form group
  group: "mb-4",
  
  // Label
  label: "block text-sm font-medium text-wp-contrast mb-1",
  
  // Text input
  input: "w-full rounded-md border border-wp-contrast/20 bg-wp-base px-4 py-2 text-wp-contrast focus:border-wp-accent-1 focus:outline-none focus:ring-1 focus:ring-wp-accent-1 transition-all duration-200",
  
  // Select input
  select: "w-full rounded-md border border-wp-contrast/20 bg-wp-base px-4 py-2 text-wp-contrast focus:border-wp-accent-1 focus:outline-none focus:ring-1 focus:ring-wp-accent-1 transition-all duration-200",
  
  // Textarea
  textarea: "w-full rounded-md border border-wp-contrast/20 bg-wp-base px-4 py-2 text-wp-contrast focus:border-wp-accent-1 focus:outline-none focus:ring-1 focus:ring-wp-accent-1 transition-all duration-200",
  
  // Checkbox and radio
  checkbox: "rounded border-wp-contrast/20 text-wp-accent-1 focus:ring-wp-accent-1 transition-all duration-200",
  radio: "border-wp-contrast/20 text-wp-accent-1 focus:ring-wp-accent-1 transition-all duration-200",
  
  // Error state
  error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  errorText: "mt-1 text-sm text-red-600"
};
