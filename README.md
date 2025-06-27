# UltimateQA Landing Page

[![Test and Build](https://github.com/ultimate-qa/website/actions/workflows/test-and-deploy.yml/badge.svg)](https://github.com/ultimate-qa/website/actions/workflows/test-and-deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

High-performance, modern landing page for UltimateQA - delivering world-class software development and test automation solutions. Built with Next.js 15, TypeScript, and optimized for maximum performance and conversion.

## 🚀 Features

- **⚡ High Performance**: Sub-3s load times with optimized assets and static generation
- **🎨 Modern Design**: Beautiful, responsive UI inspired by leading design systems
- **📱 Mobile-First**: Fully responsive design that works on all devices
- **🔍 SEO Optimized**: Complete meta tags, structured data, and performance optimization
- **🧪 Comprehensive Testing**: 56+ automated tests covering performance, functionality, and mobile
- **♿ Accessible**: WCAG AA compliant with proper contrast and semantic HTML
- **🎯 Conversion Optimized**: Strategic CTAs and social proof for maximum engagement

## 🛠️ Technologies Used

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and static generation
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[React 18](https://reactjs.org/)** - Modern React with hooks and concurrent features

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations and interactions
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **Custom Design System** - UltimateQA brand colors and typography

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[HubSpot Forms API](https://developers.hubspot.com/docs/api/marketing/forms)** - Lead capture integration

### Testing & Quality
- **[Playwright](https://playwright.dev/)** - End-to-end testing across browsers
- **[ESLint](https://eslint.org/)** - Code linting and quality enforcement
- **Performance Testing** - Custom performance metrics and monitoring
- **API Testing** - Comprehensive link and endpoint validation

### Development Tools
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[Autoprefixer](https://autoprefixer.github.io/)** - Automatic CSS vendor prefixing
- **[TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)** - Maximum type safety

## 📊 Performance Metrics

Our landing page achieves excellent performance scores:

- **Load Time**: < 3 seconds (typically ~1.3s)
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Performance Score**: 95+ (Lighthouse)

## 🧪 Testing Suite

Comprehensive testing with **56+ automated tests**:

### Performance Tests
- Page load time validation
- Core Web Vitals monitoring
- Resource loading verification
- Font loading optimization

### Functional Tests
- **Chrome Tests**: Full functionality testing on Chromium
- **Safari Tests**: Cross-browser compatibility on WebKit
- API endpoint validation
- Form submission workflows

### Mobile & Responsive Tests
- Mobile viewport rendering
- Tablet compatibility
- Touch-friendly interactions
- Responsive design validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ultimate-qa/website.git
cd website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your HubSpot credentials

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm test             # Run all Playwright tests
npm run test:chrome  # Run Chrome-specific tests
npm run test:safari  # Run Safari-specific tests
npm run test:perf    # Run performance tests only

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript compilation check
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and CSS variables
│   ├── layout.tsx      # Root layout with SEO and meta tags
│   └── page.tsx        # Homepage component
├── components/         # React components
│   ├── CTASection.tsx  # Final call-to-action section
│   ├── FeaturedIn.tsx  # Social proof and recognition
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with animated stats
│   ├── HubSpotForm.tsx # Contact form with validation
│   ├── Results.tsx     # Case studies and results
│   ├── Services.tsx    # Service offerings grid
│   └── Testimonials.tsx # Client testimonials carousel
├── lib/                # Utility functions
│   ├── hubspot.ts      # HubSpot API integration
│   └── utils.ts        # General utilities
└── types/              # TypeScript type definitions
    └── index.ts        # Shared types and interfaces

tests/                  # Test suites
├── api.spec.ts        # API and link validation tests
├── links.spec.ts      # Navigation and interaction tests
├── mobile.spec.ts     # Mobile responsiveness tests
└── performance.spec.ts # Performance and metrics tests
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#003c96` - Main brand color
- **Primary Purple**: `#8c3cf9` - Secondary brand accent
- **Charcoal**: `#252525` - Primary text color
- **Medium Gray**: `#797979` - Secondary text
- **Light Gray**: `#d6d6d6` - Borders and dividers

### Typography
- **Headings**: Noir Pro (fallback: Arial Black)
- **Body Text**: Roboto
- **Responsive Scale**: Mobile-first with fluid typography

## 🔧 Configuration

### Environment Variables

```bash
# HubSpot Integration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
NEXT_PUBLIC_HUBSPOT_TRACKING_CODE=your_tracking_code

# SEO
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
```

### Browser Support
- **Chrome/Chromium**: Full support with comprehensive testing
- **Safari/WebKit**: Full support with dedicated test suite
- **Mobile Browsers**: Optimized for iOS Safari and Chrome Mobile
- **Firefox**: Basic support (not actively tested in CI)

## 📈 Performance Optimization

- **Static Generation**: Pre-built pages for maximum speed
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Preloaded fonts with display: swap
- **Bundle Splitting**: Automatic code splitting and tree shaking
- **CSS Optimization**: Purged unused styles and critical CSS inlining
- **Lazy Loading**: Framer Motion animations loaded on demand

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Quality Standards
- TypeScript strict mode enabled
- ESLint configuration enforced
- All tests must pass
- Performance budgets maintained

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About UltimateQA

UltimateQA is a leading provider of software development and test automation solutions. Since 2015, we've helped 200+ businesses and trained 150,000+ engineers across 184 countries.

**Services:**
- AI Development & Machine Learning
- Web Development & Modern Applications  
- Test Automation & Quality Assurance
- Cloud Solutions & DevOps
- API Development & Microservices
- Software Consulting & Strategy

**Contact:**
- Website: [https://ultimateqa.com](https://ultimateqa.com)
- Email: info@ultimateqa.com
- Phone: +1 (555) ULTIMATE

---

**Built with ❤️ by the UltimateQA Team** 