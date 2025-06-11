"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Zap, Activity, Wind, Lightbulb, Shield, FileText, Snowflake, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function ServicesDetailPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Wrench,
      title: t("regularMaintenance"),
      description: t("regularMaintenanceDesc"),
      image: "/images/services/maintenance.jpg",
      details: [
        t("regularMaintenanceDetail1"),
        t("regularMaintenanceDetail2"),
        t("regularMaintenanceDetail3"),
        t("regularMaintenanceDetail4"),
        t("regularMaintenanceDetail5"),
        t("regularMaintenanceDetail6"),
        t("regularMaintenanceDetail7"),
      ],
    },
    {
      icon: Shield,
      title: t("brakeService"),
      description: t("brakeServiceDesc"),
      image: "/images/services/brakes.jpg",
      details: [
        t("brakeServiceDetail1"),
        t("brakeServiceDetail2"),
        t("brakeServiceDetail3"),
        t("brakeServiceDetail4"),
        t("brakeServiceDetail5"),
        t("brakeServiceDetail6"),
      ],
    },
    {
      icon: Zap,
      title: t("electricalServices"),
      description: t("electricalServicesDesc"),
      image: "/images/services/electrical.jpg",
      details: [
        t("electricalServicesDetail1"),
        t("electricalServicesDetail2"),
        t("electricalServicesDetail3"),
        t("electricalServicesDetail4"),
        t("electricalServicesDetail5"),
        t("electricalServicesDetail6"),
        t("electricalServicesDetail7"),
      ],
    },
    {
      icon: Activity,
      title: t("suspensionService"),
      description: t("suspensionServiceDesc"),
      image: "/images/services/suspension.webp",
      details: [
        t("suspensionServiceDetail1"),
        t("suspensionServiceDetail2"),
        t("suspensionServiceDetail3"),
        t("suspensionServiceDetail4"),
        t("suspensionServiceDetail5"),
        t("suspensionServiceDetail6"),
      ],
    },
    {
      icon: Wind,
      title: t("exhaustSystems"),
      description: t("exhaustSystemsDesc"),
      image: "/images/services/exhaust.jpg",
      details: [
        t("exhaustSystemsDetail1"),
        t("exhaustSystemsDetail2"),
        t("exhaustSystemsDetail3"),
        t("exhaustSystemsDetail4"),
        t("exhaustSystemsDetail5"),
        t("exhaustSystemsDetail6"),
      ],
    },
    {
      icon: Snowflake,
      title: t("airConditioningService"),
      description: t("airConditioningServiceDesc"),
      image: "/images/services/air-conditioning.webp",
      details: [
        t("airConditioningServiceDetail1"),
        t("airConditioningServiceDetail2"),
        t("airConditioningServiceDetail3"),
        t("airConditioningServiceDetail4"),
        t("airConditioningServiceDetail5"),
        t("airConditioningServiceDetail6"),
      ],
    },
    {
      icon: FileText,
      title: t("technicalInspection"),
      description: t("technicalInspectionDesc"),
      image: "/images/services/technical-inspection.jpg",
      details: [
        t("technicalInspectionDetail1"),
        t("technicalInspectionDetail2"),
        t("technicalInspectionDetail3"),
        t("technicalInspectionDetail4"),
        t("technicalInspectionDetail5"),
        t("technicalInspectionDetail6"),
        t("technicalInspectionDetail7"),
      ],
    },
    {
      icon: Lightbulb,
      title: t("lightingService"),
      description: t("lightingServiceDesc"),
      image: "/images/services/lighting.jpg",
      details: [
        t("lightingServiceDetail1"),
        t("lightingServiceDetail2"),
        t("lightingServiceDetail3"),
        t("lightingServiceDetail4"),
        t("lightingServiceDetail5"),
        t("lightingServiceDetail6"),
        t("lightingServiceDetail7"),
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 mb-8 rounded-xl px-6 py-3"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">{t("backToHome")}</span>
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto pb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t("servicesPageTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("servicesPageDescription")}
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="space-y-12 md:space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isEven = index % 2 === 0
            const serviceNumber = String(index + 1).padStart(2, "0")

            return (
              <Card key={index} className="bg-white dark:bg-gray-800 shadow-md border-0 rounded-3xl overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative h-80 lg:h-96 overflow-hidden ${!isEven ? "lg:col-start-2" : ""}`}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                    {/* Service Number Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                        {serviceNumber}
                      </div>
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-blue-600 dark:bg-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent
                    className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-6">
                      {/* Service Header */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{serviceNumber}</span>
                          <div className="h-px bg-blue-200 dark:bg-blue-800 flex-1" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t("whatIncludes")}</h3>
                        <div className="grid gap-3">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          asChild
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-2xl px-8 py-4 text-lg font-medium shadow-md"
                        >
                          <Link href="/#contact">{t("requestQuote")}</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 md:mt-32">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 border-0 rounded-3xl overflow-hidden shadow-xl">
            <CardContent className="p-8 md:p-16 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t("servicesQuestion")}</h2>
                <p className="text-xl text-blue-100 leading-relaxed">{t("servicesBottomCTA")}</p>
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white hover:bg-gray-50 text-blue-600 rounded-2xl px-10 py-4 text-lg font-semibold shadow-lg"
                  >
                    <Link href="/#contact">{t("contactUs")}</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
