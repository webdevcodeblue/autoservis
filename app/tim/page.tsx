import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamDetailPage } from "@/components/team-detail-page"

export const metadata: Metadata = {
  title: "Tim | Autoservis Katanović",
  description:
    "Upoznajte stručni tim Autoservisa Katanović - iskusne mehaničare i stručnjake koji se brinu za vaš automobil s najvišom razinom profesionalnosti i stručnosti.",
  keywords: [
    "tim autoservisa",
    "mehaničari",
    "ivan katanović",
    "matija nemčić",
    "ivan mikec",
    "karolina šok",
    "stručnjaci",
    "iskustvo",
    "autoservis tim",
    "finčevec",
    "sveti petar orehovec",
  ],
  openGraph: {
    title: "Tim | Autoservis Katanović",
    description: "Stručni tim mehaničara s višegodišnjim iskustvom u automobilskoj industriji",
    type: "website",
    images: [
      {
        url: "/images/team/ivan-katanovic.jpg",
        width: 1200,
        height: 630,
        alt: "Tim Autoservisa Katanović",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim | Autoservis Katanović",
    description: "Stručni tim mehaničara s višegodišnjim iskustvom u automobilskoj industriji",
    images: ["/images/team/ivan-katanovic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <TeamDetailPage />
      </main>
      <Footer />
    </div>
  )
}
