import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactDetailPage } from "@/components/contact-detail-page"

export const metadata: Metadata = {
  title: "Kontakt | Autoservis Katanović",
  description:
    "Kontaktirajte Autoservis Katanović za sve vaše potrebe vezane uz automobil. Nalazimo se u Finčevcu 9, Sveti Petar Orehovec. Telefon: +385 95 842 7667.",
  keywords: [
    "kontakt autoservis",
    "autoservis katanović kontakt",
    "telefon autoservis",
    "adresa autoservis",
    "finčevec autoservis",
    "sveti petar orehovec",
    "radno vrijeme autoservis",
    "email autoservis",
    "lokacija autoservis",
    "kako doći autoservis",
  ],
  openGraph: {
    title: "Kontakt | Autoservis Katanović",
    description: "Kontaktirajte nas za sve vaše potrebe vezane uz automobil. Profesionalna usluga u Finčevcu.",
    type: "website",
    images: [
      {
        url: "/images/about-autoservis.webp",
        width: 1200,
        height: 630,
        alt: "Autoservis Katanović kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Autoservis Katanović",
    description: "Kontaktirajte nas za sve vaše potrebe vezane uz automobil. Profesionalna usluga u Finčevcu.",
    images: ["/images/about-autoservis.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <ContactDetailPage />
      </main>
      <Footer />
    </div>
  )
}
