import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // New Mexican & Patriotic color palette
      colors: {
        // Base WordPress colors (keeping for compatibility)
        'wp-base': '#FFFFFF',
        'wp-contrast': '#111111', 
        'wp-accent-1': '#FFEE58',
        'wp-accent-2': '#F6CFF4',
        
        // Semantic color mapping
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // New Mexican Desert Colors
        turquoise: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6', // Main turquoise
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        
        // Terra Cotta / Adobe
        'terra-cotta': {
          50: '#FEF7F0',
          100: '#FDEEE0',
          200: '#FADCC2',
          300: '#F6C89F',
          400: '#F0B27A',
          500: '#E2725B', // Main terra cotta
          600: '#D35400',
          700: '#A04000',
          800: '#7D3C00',
          900: '#5A2C00',
        },
        
        // Sage Green
        sage: {
          50: '#F6F7F4',
          100: '#EDEEE8',
          200: '#DADDD1',
          300: '#C7CCBA',
          400: '#B4BBA3',
          500: '#9CAF88', // Main sage
          600: '#7A8F5F',
          700: '#5A6B43',
          800: '#3D4A2D',
          900: '#212A18',
        },
        
        // Sand/Cream
        sand: {
          50: '#FEFCF9',
          100: '#FDF9F3',
          200: '#FAF3E7',
          300: '#F7EDDB',
          400: '#F2E4C7',
          500: '#F5E6D3', // Main sand
          600: '#E6D4B7',
          700: '#D4C19B',
          800: '#C2AE7F',
          900: '#A08A5A',
        },
        
        // Patriotic Colors (enhanced)
        patriot: {
          red: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#8B0000', // Deep red
            900: '#7F1D1D',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E3A8A', // Navy blue
            900: '#1E40AF',
          },
        },
        
        // Enhanced amber for southwestern feel
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      
      // WordPress spacing system (keeping for compatibility)
      spacing: {
        '10': '0.5rem',   // var(--wp--preset--spacing--10)
        '20': '1rem',     // var(--wp--preset--spacing--20)
        '30': '1.5rem',   // var(--wp--preset--spacing--30)
        '40': '2rem',     // var(--wp--preset--spacing--40)
        '50': '2.5rem',   // var(--wp--preset--spacing--50)
        '60': '3rem',     // var(--wp--preset--spacing--60)
        '70': '3.5rem',   // var(--wp--preset--spacing--70)
        '80': '4rem',     // var(--wp--preset--spacing--80)
      },
      
      // Typography system
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      
      // Container and layout
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px', 
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      
      // Border radius matching WordPress blocks
      borderRadius: {
        'wp': '0.375rem',
        'wp-lg': '0.5rem',
      },
      
      // Southwestern/Desert themed animations
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'desert-wind': 'desertWind 8s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        desertWind: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(5px) rotate(1deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-1deg)' },
        },
      },
      
      // Animation delays for patriotic staggered effects
      animationDelay: {
        '1000': '1s',
        '2000': '2s',
        '3000': '3s',
        '4000': '4s',
      },
      
      // Enhanced backdrop blur for desert haze effect
      backdropBlur: {
        xs: '2px',
        'desert': '8px',
      },
      
      // Box shadows with southwestern colors
      boxShadow: {
        'desert': '0 10px 25px -3px rgba(226, 114, 91, 0.1), 0 4px 6px -2px rgba(226, 114, 91, 0.05)',
        'turquoise': '0 10px 25px -3px rgba(20, 184, 166, 0.1), 0 4px 6px -2px rgba(20, 184, 166, 0.05)',
        'patriot': '0 10px 25px -3px rgba(185, 28, 28, 0.15), 0 4px 6px -2px rgba(30, 58, 138, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
