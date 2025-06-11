"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Activity, Wind, Lightbulb, Shield, FileText, Snowflake, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"
import { useState } from "react"
import Link from "next/link"

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const services = [
    {
      icon: Wrench,
      title: t("regularMaintenance"),
      description: t("regularMaintenanceDesc"),
      image: "/images/services/maintenance.jpg",
    },
    {
      icon: Shield,
      title: t("brakeService"),
      description: t("brakeServiceDesc"),
      image: "/images/services/brakes.jpg",
    },
    {
      icon: Zap,
      title: t("electricalServices"),
      description: t("electricalServicesDesc"),
      image: "/images/services/electrical.jpg",
    },
    {
      icon: Activity,
      title: t("suspensionService"),
      description: t("suspensionServiceDesc"),
      image: "/images/services/suspension.webp",
    },
    {
      icon: Wind,
      title: t("exhaustSystems"),
      description: t("exhaustSystemsDesc"),
      image: "/images/services/exhaust.jpg",
    },
    {
      icon: Snowflake,
      title: t("airConditioningService"),
      description: t("airConditioningServiceDesc"),
      image: "/images/services/air-conditioning.webp",
    },
    {
      icon: FileText,
      title: t("technicalInspection"),
      description: t("technicalInspectionDesc"),
      image: "/images/services/technical-inspection.jpg",
    },
    {
      icon: Lightbulb,
      title: t("lightingService"),
      description: t("lightingServiceDesc"),
      image: "/images/services/lighting.jpg",
    },
  ]

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Pojednostavljena pozadina */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 animate-fade-in ${inView ? "visible" : ""}`}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {t("expertSolutions")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            <span className="text-gradient">{t("ourServices")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("ourServicesDesc")}</p>
        </div>

        {/* Mobile: Horizontal scroll - optimiziran */}
        <div className="md:hidden">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 scrollbar-hide"
            onScroll={(e) => {
              const container = e.target as HTMLElement
              const scrollLeft = container.scrollLeft
              const cardWidth = 288 + 16 // card width + gap
              const newIndex = Math.round(scrollLeft / cardWidth)
              if (newIndex !== activeIndex && newIndex >= 0 && newIndex < services.length) {
                setActiveIndex(newIndex)
              }
            }}
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isActive = activeIndex === index
              return (
                <div
                  key={index}
                  className="flex-none w-72 snap-center snap-always"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <Card
                    className={`bg-white dark:bg-gray-800 border-2 transition-colors duration-200 h-full ${
                      isActive ? "border-blue-500 dark:border-blue-400" : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-t-lg" />
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                            isActive ? "bg-blue-500" : "bg-blue-600"
                          }`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Optimizirani scroll indikatori */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    activeIndex === index ? "bg-blue-600 dark:bg-blue-400 w-6" : "bg-blue-300 dark:bg-blue-600 w-2"
                  }`}
                  onClick={() => {
                    setActiveIndex(index)
                    const container = document.querySelector(".scrollbar-hide") as HTMLElement
                    if (container) {
                      const cardWidth = 288 + 16 // card width + gap
                      container.scrollTo({
                        left: index * cardWidth,
                        behavior: "smooth",
                      })
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 card-hover animate-fade-in ${inView ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Pojednostavljen overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-t-lg" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <Link href="/usluge">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md btn-hover">
              {t("viewAllServices")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
