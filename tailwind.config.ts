import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wp-base': 'var(--wp-base)',
        'wp-contrast': 'var(--wp-contrast)',
        'wp-accent-1': 'var(--wp-accent-1)',
        'wp-accent-2': 'var(--wp-accent-2)',
      },
      // Add container queries support (new in Tailwind v4)
      containerQueries: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
