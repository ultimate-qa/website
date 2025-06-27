# UltimateQA Landing Page

A blazing-fast, conversion-optimized landing page built with Next.js 15, designed to achieve sub-500ms load times and maximum conversion rates.

## 🚀 Performance Targets

- **Page Load Time**: < 500ms
- **Largest Contentful Paint (LCP)**: < 300ms  
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Performance Score**: > 95

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion (lazy-loaded)
- **Icons**: Lucide React
- **Testing**: Playwright
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## 📋 Features

### Landing Page Sections
- ✅ Hero section with animated stats
- ✅ Professional services showcase
- ✅ Results and case studies
- ✅ Client testimonials with NPS score
- ✅ Multiple conversion-focused CTAs

### Technical Features
- ✅ Static generation for maximum performance
- ✅ Aggressive image optimization
- ✅ Critical CSS inlining
- ✅ Font loading optimization
- ✅ HubSpot form integration
- ✅ Mobile-first responsive design
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ SEO optimization

### Testing & Quality
- ✅ Performance testing with Playwright
- ✅ Cross-browser testing (Chrome, Firefox, Safari)
- ✅ Mobile responsiveness testing
- ✅ Form validation testing
- ✅ Lighthouse CI integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ultimateqa/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your HubSpot credentials
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript compilation check

# Testing
npm run test         # Run all Playwright tests
npm run test:ui      # Run tests with UI mode
npm run test:mobile  # Run mobile-specific tests
npm run test:perf    # Run performance tests only
```

## 🧪 Testing

### Performance Tests
```bash
# Run performance tests
npm run test tests/performance.spec.ts

# Specific performance test
npx playwright test --grep "page loads within 500ms"
```

### Cross-Browser Testing
```bash
# Test across all browsers
npm run test

# Test specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Mobile Testing
```bash
# Run mobile-specific tests
npm run test tests/mobile.spec.ts

# Test specific mobile device
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

## 🔧 Configuration

### HubSpot Integration

1. **Get your HubSpot credentials**:
   - Portal ID: Found in HubSpot account settings
   - Form ID: Create a form in HubSpot and get its ID
   - Tracking Code: Optional, for advanced analytics

2. **Configure environment variables**:
   ```env
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
   NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
   NEXT_PUBLIC_HUBSPOT_TRACKING_CODE=your_tracking_code
   ```

### Performance Optimization

The site is pre-configured with:
- Static generation (`output: 'export'`)
- Optimized images with Next.js Image component
- Font optimization with `font-display: swap`
- Critical CSS inlining
- Lazy loading for non-critical components

## 🚀 Deployment

### Automatic Deployment

The project includes GitHub Actions for automatic deployment:

- **Staging**: Deploys on push to `develop` branch
- **Production**: Deploys on push to `main` branch

### Manual Deployment

1. **Set up Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**:
   ```bash
   # Deploy to preview
   vercel

   # Deploy to production
   vercel --prod
   ```

### Environment Variables for Deployment

Required GitHub Secrets:
```
HUBSPOT_PORTAL_ID
HUBSPOT_FORM_ID
HUBSPOT_TRACKING_CODE
GOOGLE_VERIFICATION
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

## 📊 Performance Monitoring

### Lighthouse CI

The project includes Lighthouse CI in the GitHub Actions pipeline:

```yaml
# .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.95}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'categories:best-practices': ['error', {minScore: 0.95}],
        'categories:seo': ['error', {minScore: 0.95}]
      }
    }
  }
};
```

### Core Web Vitals Monitoring

Performance is continuously monitored with:
- Real User Monitoring (RUM)
- Synthetic testing via Playwright
- Lighthouse CI in pull requests

## 📱 Mobile Optimization

The landing page is optimized for mobile with:
- Mobile-first responsive design
- Touch-friendly interface
- Optimized font sizes (min 16px)
- Fast loading on 3G connections
- Progressive Web App features

## ♿ Accessibility

WCAG 2.1 AA compliance includes:
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🔒 Security

Security measures include:
- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure form handling
- Data validation with Zod
- Regular dependency audits

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Workflow

1. All code must pass TypeScript compilation
2. ESLint rules must be satisfied
3. All Playwright tests must pass
4. Performance targets must be met
5. Lighthouse scores must be > 95

## 📈 Performance Monitoring & Analytics

### Key Metrics Tracked
- Page load time
- Core Web Vitals (LCP, FID, CLS)
- Conversion rate (form submissions)
- Bounce rate
- Time on page
- Mobile vs desktop performance

### Tools Used
- Google Analytics 4
- Google PageSpeed Insights
- Lighthouse CI
- HubSpot Analytics
- Playwright performance tests

## 🆘 Support

For issues and questions:
- **Issues**: [GitHub Issues](https://github.com/ultimateqa/website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ultimateqa/website/discussions)
- **Email**: info@ultimateqa.com

## 📄 License

This project is proprietary to UltimateQA. All rights reserved.

---

Built with ❤️ by the UltimateQA Team 