'use client';

import Head from 'next/head';

export function PerformanceOptimization() {
  return (
    <Head>
      {/* Preload critical images */}
      <link
        rel="preload"
        href="/images/services/maintenance.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/images/services/brakes.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/images/services/electrical.webp"
        as="image"
        type="image/webp"
      />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Resource hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </Head>
  );
}
