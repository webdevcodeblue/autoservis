"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Immediate visibility for critical content
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToNextSection = () => {
    const element = document.getElementById("how-we-work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Optimized background images - using CSS for fastest rendering */}
      <div className="absolute inset-0">
        {/* Desktop background */}
        <div className="hero-bg-desktop hidden md:block" />
        {/* Mobile background */}
        <div className="hero-bg-mobile block md:hidden" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Hero text - immediate visibility for LCP */}
          <div className="mb-16">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Autoservis Katanović
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-light text-blue-200 tracking-wide">
                <span className="inline-block border-l-4 border-blue-400 pl-4">
                  {t("heroTitle").split(" - ")[1] || t("reliablePartner")}
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed italic">
              {t("heroSubtitle")}
            </p>

            {/* Elegant feature highlights - immediate visibility */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16 text-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200 font-medium">{t("maintenance")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200 font-medium">{t("diagnostics")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200 font-medium">{t("fastService")}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - immediate visibility */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg rounded-full transition-transform duration-200 hover:scale-105"
              onClick={scrollToContact}
            >
              {t("contactUs")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.open("tel:+385958427667")}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("callNow")}
            </Button>
          </div>

          {/* Contact Info - immediate visibility */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-200">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+385 95 842 7667</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>autoserviskatanovic@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Finčevec 9, Sveti Petar Orehovec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 flex justify-center text-white text-center z-10">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-200"
          aria-label={t("scrollDown")}
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">{t("scrollDown")}</span>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  )
}
