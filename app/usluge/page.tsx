import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesDetailPage } from "@/components/services-detail-page"

export const metadata: Metadata = {
  title: "Usluge | Autoservis Katanović",
  description:
    "Detaljan pregled svih usluga koje nudi Autoservis Katanović - od redovnog održavanja do složenih popravaka i dijagnostike.",
  keywords: "autoservis, usluge, održavanje vozila, dijagnostika, popravak automobila, Finčevec, Sveti Petar Orehovec",
  openGraph: {
    title: "Usluge | Autoservis Katanović",
    description: "Profesionalne autoservisne usluge za sve tipove vozila",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <ServicesDetailPage />
      </main>
      <Footer />
    </div>
  )
}
