"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex justify-center lg:justify-start">
              <img
                src="/images/autoservis-logo-light.svg"
                alt="Autoservis Katanović Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-4">{t("footerDescription")}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Autoservis Katanović. {t("allRightsReserved")}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("services")}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>{t("regularMaintenance")}</li>
              <li>{t("brakeService")}</li>
              <li>{t("electricalServices")}</li>
              <li>{t("suspensionService")}</li>
              <li>{t("airConditioningService")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("contact")}</h4>
            <div className="space-y-3 text-gray-400 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Finčevec 9, Sveti Petar Orehovec</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+385 95 842 7667</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">autoserviskatanovic@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("workingHours")}</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div className="text-sm">
                  <div>{t("mondayFriday")}: 08:00 - 20:00</div>
                  <div>{t("saturday")}: 08:00 - 14:00</div>
                  <div>
                    {t("sunday")}: {t("closed")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
