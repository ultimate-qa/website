import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'UltimateQA - World\'s Best Test Automation Solutions',
  description: 'Poor software quality can be the exception rather than the norm. UltimateQA\'s automated QA testing saves time and money and protects your company\'s reputation for fast, flawless IT delivery.',
  keywords: [
    'test automation',
    'QA testing',
    'software quality',
    'Playwright',
    'Salesforce testing',
    'MuleSoft testing',
    'automation framework',
    'quality assurance'
  ],
  authors: [{ name: 'UltimateQA' }],
  creator: 'UltimateQA',
  publisher: 'UltimateQA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ultimateqa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UltimateQA - World\'s Best Test Automation Solutions',
    description: 'Transform your testing with automated QA solutions. 200+ businesses helped, 150,000+ engineers trained worldwide.',
    url: 'https://ultimateqa.com',
    siteName: 'UltimateQA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UltimateQA - Test Automation Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UltimateQA - World\'s Best Test Automation Solutions',
    description: 'Transform your testing with automated QA solutions. 200+ businesses helped, 150,000+ engineers trained worldwide.',
    images: ['/og-image.jpg'],
    creator: '@ultimateqa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/hero-bg.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.hsforms.com" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//js.hs-scripts.com" />
        <link rel="dns-prefetch" href="//api.hsforms.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#0066CC" />
        <meta name="msapplication-TileColor" content="#0066CC" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'UltimateQA',
              url: 'https://ultimateqa.com',
              logo: 'https://ultimateqa.com/logo.png',
              description: 'World\'s best test automation solutions helping businesses deliver quality software faster.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                url: 'https://ultimateqa.com/contact',
              },
              sameAs: [
                'https://twitter.com/ultimateqa',
                'https://linkedin.com/company/ultimateqa',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <div id="root">
          {children}
        </div>
        
        {/* HubSpot tracking will be initialized by the HubSpot component */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
} 