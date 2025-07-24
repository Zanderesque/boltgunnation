/**
 * @type {import('next').NextConfig}
 *
 * Next.js configuration for Bolt Gun Nation
 * - Uses 'standalone' for local development
 * - Uses 'export' for Cloudflare Pages deployment (respects 25MB file size limit)
 */

// Determine if we're in a Cloudflare Pages environment
const isCloudflarePages = process.env.CF_PAGES === 'true';

const nextConfig = {
  // Disable ESLint during builds for speed
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // External packages configuration
  serverExternalPackages: [],

  // Output mode - conditional based on environment
  // - 'standalone' for local development (better DX)
  // - 'export' for Cloudflare Pages (static output, smaller size)
  output: isCloudflarePages ? 'export' : 'standalone',

  // Image optimization settings
  images: {
    unoptimized: true, // Required for 'export' mode
    domains: [], // Add domains if you use remote images
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Disable persistent caching for production builds to reduce size
    if (!dev) {
      config.cache = false;
    }

    return config;
  },

  // Development server configuration
  // Note: To change host/port, use CLI args: `next dev -H 0.0.0.0 -p 3000`
  // or set environment variables: `HOST=0.0.0.0 PORT=3000 next dev`
  experimental: {
    // Optimize imports for better performance
    optimizePackageImports: ['@heroicons/react'],
  },
};

module.exports = nextConfig;
