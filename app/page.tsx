import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Autoservis Katanović - Profesionalni autoservis u Finčevcu",
  description:
    "Autoservis Katanović je pouzdan i stručan servis za sve vrste vozila. Pružamo širok spektar usluga od redovnog održavanja do složenih popravaka i dijagnostike.",
  keywords: "autoservis, popravak automobila, održavanje vozila, dijagnostika, Finčevec, Sveti Petar Orehovec",
  authors: [{ name: "Autoservis Katanović" }],
  openGraph: {
    title: "Autoservis Katanović - Profesionalni autoservis",
    description: "Pouzdan i stručan servis za sve vrste vozila osnovan 2015. godine",
    type: "website",
    locale: "hr_HR",
    siteName: "Autoservis Katanović",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://autoservis-katanovic.com",
    languages: {
      hr: "https://autoservis-katanovic.com/hr",
      en: "https://autoservis-katanovic.com/en",
      de: "https://autoservis-katanovic.com/de",
      it: "https://autoservis-katanovic.com/it",
      es: "https://autoservis-katanovic.com/es",
    },
  },
}

export default function HomePage() {
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
