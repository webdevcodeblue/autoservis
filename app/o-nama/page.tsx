import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutPage } from '@/components/about-page';

export const metadata: Metadata = {
  title: 'O nama | Autoservis Katanović',
  description:
    'Saznajte više o Autoservisu Katanović - našoj priči, vrijednostima i stručnosti. Pouzdan partner za vaš automobil od 2018. godine.',
  keywords: [
    'o nama',
    'autoservis katanović',
    'povijest',
    'stručnost',
    'certifikati',
    'tim',
    'vrijednosti',
    'finčevec',
    'sveti petar orehovec',
  ],
  openGraph: {
    title: 'O nama | Autoservis Katanović',
    description:
      'Naša priča, vrijednosti i stručnost - pouzdan partner za vaš automobil od 2018. godine',
    type: 'website',
    images: [
      {
        url: '/images/about-autoservis.webp',
        width: 1200,
        height: 630,
        alt: 'Autoservis Katanović',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O nama | Autoservis Katanović',
    description:
      'Naša priča, vrijednosti i stručnost - pouzdan partner za vaš automobil od 2018. godine',
    images: ['/images/about-autoservis.webp'],
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
