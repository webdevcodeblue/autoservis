import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import { ThemeProvider } from '@/lib/theme-context';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autoservis-44sz.vercel.app'),
  title: {
    default: 'Autoservis Katanović - Profesionalni autoservis u Finčevcu',
    template: '%s | Autoservis Katanović',
  },
  description:
    'Autoservis Katanović je pouzdan i stručan servis za sve vrste vozila. Pružamo širok spektar usluga od redovnog održavanja do složenih popravaka i dijagnostike.',
  keywords: [
    'autoservis',
    'popravak automobila',
    'održavanje vozila',
    'dijagnostika',
    'Finčevec',
    'Sveti Petar Orehovec',
    'Hrvatska',
  ],
  authors: [{ name: 'Autoservis Katanović' }],
  creator: 'Autoservis Katanović',
  publisher: 'Autoservis Katanović',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://autoservis-44sz.vercel.app',
    siteName: 'Autoservis Katanović',
    title: 'Autoservis Katanović - Profesionalni autoservis',
    description:
      'Pouzdan i stručan servis za sve vrste vozila osnovan 2018. godine',
    images: [
      {
        url: 'https://autoservis-44sz.vercel.app/images/about-autoservis.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoservis Katanović - Profesionalni autoservis u Finčevcu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoservis Katanović - Profesionalni autoservis',
    description:
      'Pouzdan i stručan servis za sve vrste vozila osnovan 2018. godine',
    images: ['https://autoservis-44sz.vercel.app/images/about-autoservis.jpg'],
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
    google: 'your-google-verification-code',
  },
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        {/* CRITICAL: DNS prefetch for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* CRITICAL: Preload hero images with highest priority */}
        {/* Preload samo mobilnu sliku jer se uvijek učitava prva (mobile-first) */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-mobile-1.webp"
          fetchPriority="high"
        />

        {/* CRITICAL: Inline critical CSS to prevent render blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS for hero section */
            #home {
              min-height: 100vh;
              display: flex;
              align-items: center;
              position: relative;
            }
            

            
            /* Prevent layout shift */
            body {
              margin: 0;
              min-height: 100vh;
            }
            
            /* Critical font loading */
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          `,
          }}
        />

        {/* Standard meta tags */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />

        {/* Explicit Open Graph meta tags for better WhatsApp support */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoservis-44sz.vercel.app" />
        <meta
          property="og:title"
          content="Autoservis Katanović - Profesionalni autoservis"
        />
        <meta
          property="og:description"
          content="Pouzdan i stručan servis za sve vrste vozila osnovan 2018. godine"
        />
        <meta
          property="og:image"
          content="https://autoservis-44sz.vercel.app/images/about-autoservis.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Autoservis Katanović - Profesionalni autoservis u Finčevcu"
        />
        <meta property="og:site_name" content="Autoservis Katanović" />
        <meta property="og:locale" content="hr_HR" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Autoservis Katanović - Profesionalni autoservis"
        />
        <meta
          name="twitter:description"
          content="Pouzdan i stručan servis za sve vrste vozila osnovan 2018. godine"
        />
        <meta
          name="twitter:image"
          content="https://autoservis-44sz.vercel.app/images/about-autoservis.jpg"
        />

        {/* CRITICAL: Theme script - must be synchronous */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* Structured data - can be deferred */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Autoservis Katanović',
              description: 'Profesionalni autoservis za sve vrste vozila',
              url: 'https://autoservis-44sz.vercel.app',
              telephone: '+385958427667',
              email: 'autoserviskatanovic@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Finčevec 9',
                addressLocality: 'Sveti Petar Orehovec',
                postalCode: '48260',
                addressCountry: 'HR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '46.1',
                longitude: '16.2',
              },
              openingHours: ['Mo-Fr 08:00-20:00', 'Sa 08:00-14:00'],
              priceRange: '$$',
              image:
                'https://autoservis-44sz.vercel.app/images/about-autoservis.jpg',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
