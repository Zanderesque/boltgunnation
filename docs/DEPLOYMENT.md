# Bolt Gun Nation - Deployment Guide

This guide covers deploying the Bolt Gun Nation website using the automated CI/CD pipeline.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [CI/CD Pipeline Overview](#cicd-pipeline-overview)
3. [Hosting Setup](#hosting-setup)
4. [GitHub Secrets Configuration](#github-secrets-configuration)
5. [Deployment Process](#deployment-process)
6. [Environment Variables](#environment-variables)
7. [Monitoring & Health Checks](#monitoring--health-checks)
8. [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

- GitHub repository with the Bolt Gun Nation codebase
- Node.js 18+ installed locally for development
- Hosting platform account (Vercel recommended)
- GitHub account with repository admin access

## 🚀 CI/CD Pipeline Overview

The automated pipeline includes:

### Quality Assurance
- **ESLint**: Code quality and style checking
- **TypeScript**: Type checking and compilation
- **Prettier**: Code formatting validation
- **Security Audit**: Vulnerability scanning with `npm audit`
- **Dependency Check**: Critical vulnerability detection

### Build & Test
- **Next.js Build**: Production-ready compilation
- **Test Suite**: Automated testing with coverage reports
- **Artifact Storage**: Build files cached for deployment

### Deployment Stages
- **Staging**: Automatic deployment for Pull Requests
- **Production**: Deployment on merge to `main` branch
- **Health Checks**: Post-deployment verification

## 🌐 Hosting Setup

### Option 1: Vercel (Recommended)

Vercel provides the best Next.js hosting experience with automatic deployments.

1. **Create Vercel Account**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **Link Project**
   ```bash
   vercel link
   ```

3. **Get Project Details**
   ```bash
   vercel project ls
   ```

### Option 2: Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Option 3: Traditional Hosting

For VPS or shared hosting, you'll need to:
1. Build the application: `npm run build`
2. Upload the `.next` folder and dependencies
3. Configure Node.js environment
4. Set up reverse proxy (nginx/Apache)

## 🔐 GitHub Secrets Configuration

Navigate to your GitHub repository → Settings → Secrets and variables → Actions

### Required Secrets

#### For Vercel Deployment:
```
VERCEL_TOKEN=your_vercel_api_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

#### Environment URLs:
```
STAGING_API_URL=https://your-staging-site.vercel.app
PRODUCTION_API_URL=https://your-production-site.com
PRODUCTION_URL=https://boltgunnation.com
```

### How to Get Vercel Credentials

1. **Vercel Token**:
   - Go to [Vercel Dashboard](https://vercel.com/account/tokens)
   - Create new token → Copy the token

2. **Organization ID**:
   ```bash
   vercel teams ls
   ```

3. **Project ID**:
   ```bash
   vercel project ls
   ```

## 🚦 Deployment Process

### Automatic Deployments

1. **Pull Request Workflow**:
   ```
   Create PR → CI/CD runs → Deploy to staging → Review changes
   ```

2. **Production Deployment**:
   ```
   Merge PR to main → CI/CD runs → Deploy to production → Health check
   ```

### Manual Deployment

If you need to deploy manually:

```bash
# Build the application
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=.next
```

## 🌍 Environment Variables

Create environment files for different stages:

### `.env.local` (Development)
```bash
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### `.env.staging` (Staging)
```bash
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://staging.boltgunnation.com
```

### `.env.production` (Production)
```bash
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://boltgunnation.com
```

### Points Race Specific Variables
```bash
# If using external database for standings
DATABASE_URL=your_database_connection_string

# API rate limiting
API_RATE_LIMIT=100

# Cache settings
STANDINGS_CACHE_TTL=300
```

## 📊 Monitoring & Health Checks

### Health Check Endpoint

The pipeline includes a health check at `/api/health` that monitors:
- API responsiveness
- System uptime
- Service status
- Points Race API functionality

### Access Health Status
```bash
curl https://your-site.com/api/health
```

### Expected Response
```json
{
  "status": "healthy",
  "timestamp": "2025-01-22T14:25:00.000Z",
  "uptime": 12345.67,
  "environment": "production",
  "version": "1.0.0",
  "services": {
    "api": "operational",
    "standings": "operational"
  }
}
```

### Monitoring Setup

Consider adding external monitoring:
- **Uptime Robot**: Free uptime monitoring
- **Pingdom**: Performance monitoring
- **Sentry**: Error tracking and performance monitoring

## 🔍 Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Check Node.js version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Run build locally
npm run build
```

#### 2. Deployment Failures
- Verify all GitHub secrets are set correctly
- Check Vercel/hosting platform logs
- Ensure environment variables are configured

#### 3. Health Check Failures
- Verify the `/api/health` endpoint is accessible
- Check server logs for errors
- Ensure all dependencies are installed

#### 4. Points Race API Issues
```bash
# Test the standings API
curl https://your-site.com/api/standings

# Check for CORS issues
curl -H "Origin: https://your-site.com" https://your-site.com/api/standings
```

### Debug Commands

```bash
# View deployment logs
vercel logs your-deployment-url

# Test API endpoints locally
npm run dev
curl http://localhost:3000/api/health
curl http://localhost:3000/api/standings
```

### Getting Help

1. Check the [GitHub Actions logs](https://github.com/your-repo/actions)
2. Review hosting platform logs (Vercel/Netlify dashboard)
3. Test API endpoints with curl or Postman
4. Verify environment variables are set correctly

## 🎯 Production Checklist

Before going live:

- [ ] All GitHub secrets configured
- [ ] Environment variables set
- [ ] Health check endpoint responding
- [ ] Points Race API functional
- [ ] SSL certificate configured
- [ ] Domain name pointed to hosting platform
- [ ] Monitoring tools configured
- [ ] Backup strategy in place
- [ ] Error tracking enabled

## 🔄 Updating the Site

### For Code Changes:
1. Create feature branch
2. Make changes
3. Create Pull Request
4. Review staging deployment
5. Merge to main for production

### For Content Updates:
- Points Race data updates through API
- Static content changes through code updates
- Media uploads through hosting platform

## 📞 Support

For deployment issues:
- Check this guide first
- Review GitHub Actions logs
- Contact hosting platform support
- Create GitHub issue for code-related problems

---

**Note**: This deployment guide is specifically tailored for the Bolt Gun Nation precision rifle community website with its Points Race leaderboard functionality.
