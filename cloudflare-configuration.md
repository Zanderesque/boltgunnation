# Cloudflare Configuration Documentation

This document preserves all Cloudflare-related configuration for the Bolt Gun Nation project before migration to cPanel hosting. This documentation can be used to restore Cloudflare configuration if needed in the future.

## Table of Contents
- [Cloudflare Pages Configuration](#cloudflare-pages-configuration)
- [Next.js Configuration for Cloudflare](#nextjs-configuration-for-cloudflare)
- [Build and Deployment Settings](#build-and-deployment-settings)
- [Known Issues and Solutions](#known-issues-and-solutions)
- [Migration Notes](#migration-notes)

## Cloudflare Pages Configuration

### wrangler.toml
This file configures the Cloudflare Pages deployment:

```toml
# Bolt Gun Nation - Cloudflare Pages Configuration
name = "bolt-gun-nation"
compatibility_date = "2025-07-23"

# Pages Configuration
# This tells Cloudflare where to find the built Next.js output
pages_build_output_dir = ".next"

# Environment Variables
# Add any environment variables your application needs here
# Example:
# [env.production]
# MY_VAR = "production-value"

# Important: Build command must be configured in Cloudflare Pages dashboard
# Recommended build command: npm install && npm run build
# Do NOT use npm ci as it requires perfect package.json/package-lock.json sync
```

### .cloudflare/pages.toml
This file overrides the default build settings for Cloudflare Pages:

```toml
# Cloudflare Pages Build Configuration
# This overrides the default build settings for Cloudflare Pages

[build]
command = "npm install && npm run build"
output_directory = ".next"
```

## Next.js Configuration for Cloudflare

The `next.config.js` file contains several Cloudflare-specific optimizations:

```javascript
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
```

## Build and Deployment Settings

### Cloudflare Pages Dashboard Settings
- **Project name**: bolt-gun-nation
- **Build command**: `npm install && npm run build`
- **Build output directory**: `.next`
- **Node.js version**: (Latest stable version)

### Key Optimizations for Cloudflare
1. **Static Export Mode**: Using `output: 'export'` in Next.js config to generate static files
2. **Unoptimized Images**: Setting `images: { unoptimized: true }` to reduce build size
3. **Disabled Webpack Cache**: Preventing large cache files in production builds
4. **Build Command**: Using `npm install` instead of `npm ci` to avoid package-lock.json sync issues

## Known Issues and Solutions

### File Size Limitations
Cloudflare Pages has a 25MB file size limit for individual files. The following strategies were implemented to stay within this limit:

1. Using static export mode instead of standalone mode
2. Disabling image optimization
3. Disabling webpack cache for production builds
4. Removing large video files (*.mov) exceeding 25MB
5. Optimizing image assets by:
   - Removing non-HD images (below 1280x720 resolution)
   - Removing duplicate images, keeping only highest resolution versions
   - Keeping only the largest version of each image set

### API Routes in Static Export
When using `output: 'export'` in Next.js, API routes require special handling:

1. API routes must be marked as static by adding `export const dynamic = 'force-static'` at the top of each route file
2. Dynamic API functionality is limited in static exports - all data must be available at build time
3. For truly dynamic API functionality with Cloudflare Pages, Cloudflare Workers or Functions can be used

## Migration Notes

When migrating from Cloudflare to cPanel, the following changes will be needed:

1. **Next.js Configuration**: 
   - Change `output: 'export'` back to `output: 'standalone'` for better server-side rendering support
   - Re-enable image optimization by removing `images: { unoptimized: true }`
   - Re-enable webpack cache for better build performance

2. **Build Process**:
   - Update build commands according to cPanel Git deployment requirements
   - Remove Cloudflare-specific configuration files (wrangler.toml, .cloudflare/pages.toml)

3. **Environment Variables**:
   - Transfer any environment variables from Cloudflare Pages to cPanel
