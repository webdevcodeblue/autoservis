"use client"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Activity, Wind, Lightbulb, Shield, FileText, Snowflake, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-intersection-observer"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function DetailedServicesSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const router = useRouter()

  const services = [
    {
      icon: Wrench,
      title: t("regularMaintenance"),
      description: t("regularMaintenanceDesc"),
      image: "/images/services/maintenance.jpg",
      detailedDescription: `
        Redovno održavanje vašeg vozila ključno je za njegovu dugovječnost i pouzdanost. 
        U Autoservisu Katanović nudimo kompletnu uslugu redovnog održavanja koja uključuje:
        
        • Zamjenu motornog ulja i filtera ulja
        • Zamjenu filtera zraka, goriva i kabinskog filtera
        • Provjeru i zamjenu svjećica
        • Provjeru i podešavanje razine tekućina
        • Provjeru remenja i zamjenu po potrebi
        • Provjeru i održavanje akumulatora
        • Dijagnostiku i resetiranje servisnih intervala
        
        Koristimo samo kvalitetna ulja i originalne ili kvalitetne zamjenske dijelove, ovisno o vašim preferencijama i budžetu.
      `,
    },
    {
      icon: Shield,
      title: t("brakeService"),
      description: t("brakeServiceDesc"),
      image: "/images/services/brakes.jpg",
      detailedDescription: `
        Kočioni sustav je jedan od najvažnijih sigurnosnih elemenata vašeg vozila. 
        Naša usluga servisa kočnica uključuje:
        
        • Zamjenu kočionih pločica i diskova
        • Zamjenu kočionih čeljusti i cilindara
        • Zamjenu kočione tekućine
        • Popravak i održavanje ABS sustava
        • Dijagnostiku problema s kočnicama
        • Podešavanje parkirne kočnice
        
        Koristimo visokokvalitetne kočione dijelove koji osiguravaju optimalnu zaustavnu moć i sigurnost vašeg vozila.
      `,
    },
    {
      icon: Zap,
      title: t("electricalServices"),
      description: t("electricalServicesDesc"),
      image: "/images/services/electrical.jpg",
      detailedDescription: `
        Moderni automobili imaju složene električne sustave koji zahtijevaju stručno održavanje. 
        Naše autoelektričarske usluge uključuju:
        
        • Dijagnostiku i popravak električnih kvarova
        • Popravak alternatora i startera
        • Servis i popravak sustava paljenja
        • Popravak električnih instalacija
        • Ugradnju dodatne opreme (radio, zvučnici, alarmi)
        • Popravak sustava za punjenje
        • Dijagnostiku i popravak senzora
        
        Naši tehničari koriste najmoderniju dijagnostičku opremu za precizno otkrivanje i rješavanje električnih problema.
      `,
    },
    {
      icon: Activity,
      title: t("suspensionService"),
      description: t("suspensionServiceDesc"),
      image: "/images/services/suspension.webp",
      detailedDescription: `
        Ovjes i upravljački sustav direktno utječu na udobnost vožnje i upravljivost vozila. 
        Naše usluge uključuju:
        
        • Zamjenu amortizera i opruga
        • Zamjenu kugli, sponki i krajnika
        • Geometriju kotača (centriranje)
        • Popravak i održavanje servo upravljača
        • Zamjenu ležajeva kotača
        • Popravak i održavanje stabilizatora
        
        Pravilno održavan ovjes osigurava stabilnost vozila, precizno upravljanje i duži životni vijek guma.
      `,
    },
    {
      icon: Wind,
      title: t("exhaustSystems"),
      description: t("exhaustSystemsDesc"),
      image: "/images/services/exhaust.jpg",
      detailedDescription: `
        Ispušni sustav važan je za performanse motora i smanjenje emisije štetnih plinova. 
        Naše usluge uključuju:
        
        • Zamjenu ispušnih cijevi
        • Zamjenu katalizatora
        • Zamjenu lambda sonde
        • Popravak i zamjenu prigušivača
        • Zamjenu brtvi ispušnog sustava
        • Popravak nosača ispušnog sustava
        
        Koristimo kvalitetne dijelove koji osiguravaju optimalnu funkcionalnost i smanjenu buku ispušnog sustava.
      `,
    },
    {
      icon: Snowflake,
      title: t("airConditioningService"),
      description: t("airConditioningServiceDesc"),
      image: "/images/services/air-conditioning.webp",
      detailedDescription: `
        Klima uređaj u vozilu osigurava ugodnu vožnju tijekom cijele godine. 
        Naše usluge servisa klima uređaja uključuju:
        
        • Punjenje i dopunjavanje rashladnog sredstva
        • Dezinfekciju i čišćenje sustava
        • Zamjenu filtera kabine
        • Popravak i zamjenu kompresora klime
        • Detekciju i popravak curenja
        • Provjeru i popravak elektronike klima sustava
        
        Redovito održavanje klima uređaja osigurava čist zrak u kabini i sprječava razvoj bakterija i neugodnih mirisa.
      `,
    },
    {
      icon: FileText,
      title: t("technicalInspection"),
      description: t("technicalInspectionDesc"),
      image: "/images/services/technical-inspection.jpg",
      detailedDescription: `
        Priprema za tehnički pregled ključna je za uspješno prolaženje obveznog godišnjeg pregleda. 
        Naša usluga uključuje:
        
        • Kompletnu provjeru vozila prema zahtjevima tehničkog pregleda
        • Popravak uočenih nedostataka
        • Provjeru i podešavanje svjetala
        • Provjeru kočionog sustava i upravljačkog mehanizma
        • Provjeru ispušnog sustava i emisije ispušnih plinova
        • Provjeru podvozja i ovjesa
        • Pripremu potrebne dokumentacije
        
        S našom pripremom, vaše vozilo će biti spremno za uspješno prolaženje tehničkog pregleda.
      `,
    },
    {
      icon: Lightbulb,
      title: t("lightingService"),
      description: t("lightingServiceDesc"),
      image: "/images/services/lighting.jpg",
      detailedDescription: `
        Dobra vidljivost ključna je za sigurnu vožnju. 
        Naše usluge servisa svjetala i vidljivosti uključuju:
        
        • Zamjenu žarulja i LED svjetala
        • Popravak i zamjenu farova
        • Podešavanje visine svjetlosnog snopa
        • Zamjenu brisača vjetrobranskog stakla
        • Popravak sustava za pranje stakala
        • Popravak i zamjenu unutarnje rasvjete
        • Ugradnju dodatnih svjetala
        
        Osiguravamo optimalnu vidljivost u svim vremenskim uvjetima i dobima dana.
      `,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <ArrowLeft className="h-4 w-4" />
              <span>Povratak na početnu</span>
            </Button>
          </Link>
        </div>

        <div className={`text-center mb-16 animate-fade-in ${inView ? "visible" : ""}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-2">
            <span className="text-gradient dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 dark:bg-clip-text dark:text-transparent">
              {t("ourServices")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Autoservis Katanović nudi širok spektar usluga za održavanje i popravak vašeg vozila. Naš stručni tim
            mehaničara koristi najmoderniju opremu i kvalitetne dijelove kako bi osigurao najbolju uslugu za vaš
            automobil.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in ${
                  inView ? "visible" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                      {service.detailedDescription.split("\n").map((paragraph, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-300 mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button
                        onClick={() => router.push("/#contact")}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                      >
                        Zatražite ponudu
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Imate pitanja o našim uslugama ili trebate savjet za vaše vozilo?
          </p>
          <Button
            onClick={() => router.push("/#contact")}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg rounded-full"
          >
            Kontaktirajte nas
          </Button>
        </div>
      </div>
    </section>
  )
}
