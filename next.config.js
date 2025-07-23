/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  // Use the correct configuration key for external packages
  serverExternalPackages: [],

  // Change from 'standalone' to 'export' for Cloudflare Pages
  output: 'export',

  // Disable image optimization to reduce build size
  images: {
    unoptimized: true,
  },

  // Disable webpack cache to avoid large files
  webpack: (config, { dev, isServer }) => {
    // Disable persistent caching for production builds
    if (!dev) {
      config.cache = false;
    }

    return config;
  },

  // Allow cross-origin requests during development
  allowedDevOrigins: [
    '10.0.0.59', // Add the IP address from the warning
    'localhost',
  ],

  // Experimental features that are supported in Next.js 15
  experimental: {
    // Improve package imports for components
    optimizePackageImports: ['@heroicons/react'],
  },
};

module.exports = nextConfig;
