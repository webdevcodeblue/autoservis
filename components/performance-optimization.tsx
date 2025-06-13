'use client';

import Head from 'next/head';

export function PerformanceOptimization() {
  return (
    <Head>
      {/* Preload critical images */}
      <link
        rel="preload"
        href="/images/services/maintenance.jpg"
        as="image"
        type="image/jpeg"
      />
      <link
        rel="preload"
        href="/images/services/brakes.jpg"
        as="image"
        type="image/jpeg"
      />
      <link
        rel="preload"
        href="/images/services/electrical.jpg"
        as="image"
        type="image/jpeg"
      />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Resource hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </Head>
  );
}
