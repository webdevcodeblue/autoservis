"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"
import { Facebook, Instagram } from "lucide-react"

export function TeamSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const teamMembers = [
    {
      name: "Ivan Katanović",
      role: t("ownerAndMainMechanic"),
      image: "/images/team/ivan-katanovic.jpg",
      description: t("ivanDescription"),
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Matija Nemčić",
      role: t("mechanic"),
      image: "/images/team/matija-nemcic.jpg",
      description: t("matijaDescription"),
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Ivan Mikec",
      role: t("mechanic"),
      image: "/images/team/ivan-mikec.jpg",
      description: t("ivanMikeDescription"),
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Karolina Šok",
      role: t("accounting"),
      image: "/images/team/karolina-sok.jpg",
      description: t("karolinaDescription"),
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 animate-fade-in ${inView ? "visible" : ""}`}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {t("ourExperts")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            <span className="text-gradient dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 dark:bg-clip-text dark:text-transparent">
              {t("meetOurTeam")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("teamDescription")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 card-hover animate-fade-in ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover img-hover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-200 dark:text-blue-100 font-medium">{member.role}</p>
                </div>

                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  PRO
                </div>

                <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.facebook}
                    className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full btn-hover"
                    aria-label={`${member.name} Facebook`}
                  >
                    <Facebook className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full btn-hover"
                    aria-label={`${member.name} Instagram`}
                  >
                    <Instagram className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
