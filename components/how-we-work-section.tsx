"use client"

import { Search, FileText, Wrench, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"

export function HowWeWorkSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const steps = [
    {
      icon: Search,
      title: t("diagnostics"),
      description: t("diagnosticsStep"),
      number: "01",
    },
    {
      icon: FileText,
      title: t("quote"),
      description: t("quoteStep"),
      number: "02",
    },
    {
      icon: Wrench,
      title: t("repair"),
      description: t("repairStep"),
      number: "03",
    },
    {
      icon: ThumbsUp,
      title: t("satisfaction"),
      description: t("satisfactionStep"),
      number: "04",
    },
  ]

  return (
    <section id="how-we-work" className="section-padding relative overflow-hidden">
      {/* Pojednostavljena pozadina */}
      <div className="absolute inset-0 bg-simple-gradient dark:bg-simple-gradient-dark"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 animate-fade-in ${inView ? "visible" : ""}`}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {t("ourProcess")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            <span className="text-gradient">{t("howWeWork")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("howWeWorkDesc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className={`relative animate-fade-in ${inView ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center h-full border border-gray-200 dark:border-gray-700 card-hover">
                  {/* Step Number */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-600 dark:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="bg-blue-100 dark:bg-blue-900/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mt-0">
                    <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Pojednostavljena linija */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-blue-600 transform -translate-y-1/2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
