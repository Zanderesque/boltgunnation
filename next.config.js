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

  // Use 'export' output for static file hosting on cPanel
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Re-enable webpack cache for better build performance
  webpack: (config, { dev, isServer }) => {
    // Enable persistent caching for production builds
    if (!dev) {
      config.cache = true;
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
