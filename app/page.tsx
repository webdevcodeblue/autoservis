import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { HowWeWorkSection } from '@/components/how-we-work-section';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TeamSection } from '@/components/team-section';
import { AboutSection } from '@/components/about-section';
import { BlogSection } from '@/components/blog-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { getLatestPosts } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'Autoservis Katanović - Profesionalni autoservis u Finčevcu',
  description:
    'Autoservis Katanović je pouzdan i stručan servis za sve vrste vozila. Pružamo širok spektar usluga od redovnog održavanja do složenih popravaka i dijagnostike.',
  keywords:
    'autoservis, popravak automobila, održavanje vozila, dijagnostika, Finčevec, Sveti Petar Orehovec',
  authors: [{ name: 'Autoservis Katanović' }],
  openGraph: {
    title: 'Autoservis Katanović - Profesionalni autoservis',
    description:
      'Pouzdan i stručan servis za sve vrste vozila osnovan 2018. godine',
    type: 'website',
    locale: 'hr_HR',
    siteName: 'Autoservis Katanović',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://autoservis-katanovic.com',
    languages: {
      hr: 'https://autoservis-katanovic.com/hr',
      en: 'https://autoservis-katanovic.com/en',
      de: 'https://autoservis-katanovic.com/de',
      it: 'https://autoservis-katanovic.com/it',
      es: 'https://autoservis-katanovic.com/es',
    },
  },
};

export const revalidate = 60;

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <HowWeWorkSection />
        <ServicesSection />
        <TestimonialsSection />
        <TeamSection />
        <AboutSection />
        <BlogSection posts={latestPosts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
