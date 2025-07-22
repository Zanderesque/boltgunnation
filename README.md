# Bolt Gun Nation

**New Mexico's Premier Precision Rifle Competition Community**

*Precision • Competition • Excellence*

---

## About

Bolt Gun Nation is a community-driven platform for New Mexico's precision rifle shooters. Our mission is to use the crucible of competition to improve precision rifle shooters' skills and prepare them to attend bigger regional and national matches. We bring together like-minded individuals to grow our sport, our club, and foster fellowship among the precision rifle community.

### Our Mission
- **Skill Development**: Use structured competition to improve precision rifle shooting skills
- **Community Building**: Connect New Mexico's precision rifle enthusiasts
- **Competition Preparation**: Prepare members for regional and national matches
- **Fellowship**: Foster lasting relationships within the shooting community

## Features

### 🏆 Points Race System
- **Live Leaderboard**: Real-time standings integrated with Google Sheets
- Annual competition series running from March to September
- Monthly matches at premier New Mexico venues:
  - **Del Norte Gun Club** (Rio Rancho, 2nd Sunday)
  - **Zia Rifle And Pistol Club** (Albuquerque, 3rd Saturday)
- Comprehensive scoring system based on performance and competition
- Two-day finale with awards banquet
- **Registration**: [Sign up for the Points Race](https://docs.google.com/forms/d/e/1FAIpQLScrVfdf7qWpmMe91bAs9JCA4yMqXOMogH7LaMETfwj4gkmPHg/viewform)

### 📊 Live Leaderboard Integration
- **Google Sheets Integration**: Real-time data fetching from published spreadsheets
- **CORS Proxy System**: Multiple fallback proxies for reliable data access
- **Auto-refresh**: Updates every 5 minutes with manual refresh option
- **Data Structure**: Season rank, total points, shooter names, and top 3 scores
- **Visual Design**: Trophy badges for top 3 positions with responsive layout

### 🎯 Competition Venues
- **Del Norte Gun Club** - Rio Rancho
- **Zia Rifle And Pistol Club** - Albuquerque

### 👥 Community Integration
- **Facebook Group**: [Join our active community](https://www.facebook.com/groups/339663940504983/)
- Match updates and results
- Equipment discussions and tips
- Fellowship and networking

### 💰 Sponsor Support
- **5-Tier Sponsorship System**: Bronze ($100) to Stage ($1,250+)
- Partnership opportunities for local businesses
- Equipment and prize support for competitions
- Community recognition and visibility
- **Benefits**: Match book recognition, jersey logos, social media promotion

## Technical Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom WordPress-compatible variables
- **UI Components**: Headless UI with Heroicons
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)
- **Data Integration**: Google Sheets CSV export with CORS proxy fallback

### Architecture
- **Migrated from WordPress**: Converted from WordPress Twenty Twenty-Five theme
- **Component-based**: Modular React components in `/src/components/blocks/`
- **Responsive Design**: Mobile-first approach with consistent styling
- **SEO Optimized**: Next.js metadata and structured content
- **Real-time Data**: Live Google Sheets integration for competition standings

### Google Sheets Integration
- **CSV Export**: Uses public Google Sheets CSV export URLs
- **CORS Handling**: Multiple proxy services (corsproxy.io, allorigins.win, cors-anywhere)
- **Data Processing**: Automatic CSV parsing and leaderboard generation
- **Error Handling**: Fallback states and loading indicators
- **Cache Management**: No-cache headers for fresh data

## Development Standards

### CSS Consistency
- **WordPress Variables**: Uses `wp-base`, `wp-contrast`, `wp-accent-1`, `wp-accent-2`
- **Global Styling**: Consistent color scheme across all pages
- **Responsive Design**: Mobile-first with proper breakpoints

### Navigation
- **Unified Header**: Single Header component used across all pages
- **Mobile Optimized**: Hamburger menu with slide-out navigation
- **Facebook Integration**: Direct link to community group

### Code Quality
- **TypeScript**: Strict typing for better development experience
- **Component Structure**: Reusable, well-documented components
- **Performance**: Optimized images, fonts, and animations
- **Error Handling**: Comprehensive error states and fallbacks

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Bolt_Gun_Nation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog posts
│   ├── points-race/       # Points race leaderboard and info
│   ├── sponsors/          # Sponsors page with tier system
│   ├── globals.css        # Global styles with WordPress variables
│   ├── layout.tsx         # Root layout with Header
│   └── page.tsx           # Homepage
├── components/
│   └── blocks/            # Reusable UI components
│       ├── Header.tsx     # Unified navigation header
│       ├── Navigation.tsx # Mobile navigation component
│       └── SiteTitle.tsx  # Site branding component
├── lib/                   # Utility functions
│   ├── sheets.ts          # Google Sheets integration utilities
│   └── api.ts             # API helper functions
└── public/                # Static assets
```

## Points Race Integration

### Google Sheets Setup
1. **Publish Sheet**: Make your Google Sheet publicly accessible
2. **Column Structure**: SEASON RANK, Season Total, NAME, Top Score, 2nd Top Score, 3rd Score
3. **URL Format**: Use the published sheet URL in the Points Race page
4. **Data Updates**: Changes in the sheet automatically reflect on the website

### Leaderboard Features
- **Real-time Updates**: Fetches fresh data every 5 minutes
- **Manual Refresh**: Users can manually refresh for immediate updates
- **Trophy System**: Automatic badges for top 3 positions (🏆, 🥈, 🥉)
- **Responsive Design**: Works on all device sizes
- **Loading States**: Professional loading and error handling

### Data Flow
1. Google Sheets → CSV Export URL
2. CORS Proxy → Fetch CSV Data
3. Parse CSV → Leaderboard Entries
4. React State → UI Display
5. Auto-refresh → Updated Data

## WordPress Migration

This project was migrated from a WordPress site using the Twenty Twenty-Five theme:

### Migrated Elements
- ✅ **Color Palette**: WordPress color variables maintained
- ✅ **Navigation Structure**: Unified header with mobile support
- ✅ **Content Pages**: About, Blog, Points Race, Sponsors
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **SEO Structure**: Proper metadata and page structure

### Improvements Made
- **Performance**: Faster loading with Next.js optimization
- **Modern Stack**: TypeScript, Tailwind CSS, Framer Motion
- **Component Architecture**: Reusable, maintainable components
- **Developer Experience**: Hot reload, TypeScript support
- **Live Data**: Real-time Google Sheets integration

## Community

### Facebook Group
Join our active Facebook community with 500+ precision rifle enthusiasts:
- **Link**: [Bolt Gun Nation Facebook Group](https://www.facebook.com/groups/339663940504983/)
- **Features**: Match updates, equipment discussions, community support

### Contact
For questions about competitions, membership, or website issues, connect with us through our Facebook group.

## Contributing

We welcome contributions to improve the Bolt Gun Nation platform:

1. Fork the repository
2. Create a feature branch
3. Make your changes following our development standards
4. Test across multiple pages for consistency
5. Submit a pull request

### Development Standards
- **CSS Consistency**: Use WordPress variables throughout
- **Navigation**: Maintain unified Header component
- **Testing**: Verify changes work across all pages
- **Code Quality**: Follow TypeScript best practices
- **Propose Edits**: Use the propose_code interface for all changes

## Sponsor Management

### Sponsorship Tiers
- **Stage ($1,250+)**: Premium benefits including finale speech and stage sponsorship
- **Platinum ($1,000)**: Large logo placement and comprehensive recognition
- **Gold ($500)**: Medium logo and multi-channel promotion
- **Silver ($250)**: Small logo and social media recognition
- **Bronze ($100)**: Basic recognition package

### Benefits Include
- Match book recognition
- Jersey logo placement (size varies by tier)
- Social media recognition
- Sponsorship webpage placement
- Press release distribution
- Special finale event privileges (Stage tier)

## License

This project is proprietary to Bolt Gun Nation and the New Mexico precision rifle community.

---

**Built with ❤️ for the New Mexico Precision Rifle Community**
