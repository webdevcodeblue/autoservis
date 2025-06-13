'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Star,
  Users,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import Link from 'next/link';

export function TeamDetailPage() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 'ivan-katanovic',
      name: 'Ivan Katanović',
      role: t('ownerAndMainMechanic'),
      experience: t('twentyPlusYearsExperience'),
      specialization: t('diagnostics') + ', ' + t('management'),
      image: '/images/team/ivan-katanovic.jpg',
      description: t('ivanDescription'),
      achievements: [
        t('founderAutoservis'),
        t('castrolServicePartner'),
        t('hybridVehicleSpecialist'),
        t('diagnosticEquipmentSpecialist'),
        t('autoElectronicsExpert'),
        t('twentyYearsExperience'),
      ],
      contact: {
        phone: '+385 95 842 7667',
        email: 'ivan@autoserviskatanovic.com',
      },
      social: {
        facebook: 'https://www.facebook.com/ivan.katanovic.1',
        instagram: 'https://www.instagram.com/ivankatanovic/',
      },
    },
    {
      id: 'matija-nemcic',
      name: 'Matija Nemčić',
      role: t('mechanic'),
      experience: t('fifteenPlusYearsExperience'),
      specialization: t('electricalServices') + ', ' + t('diagnostics'),
      image: '/images/team/matija-nemcic.jpg',
      description: t('matijaDescription'),
      achievements: [
        t('certifiedHybridWork'),
        t('autoElectronicsSpecialist'),
        t('classicVehicleExpert'),
        t('fifteenYearsExperience'),
      ],
      contact: {
        phone: '+385 95 842 7667',
        email: 'matija@autoserviskatanovic.com',
      },
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100006224880058',
        instagram: 'https://www.instagram.com/matijanemcic/',
      },
    },
    {
      id: 'ivan-mikec',
      name: 'Ivan Mikec',
      role: t('mechanic'),
      experience: t('tenPlusYearsExperience'),
      specialization: t('suspensionService') + ', ' + t('brakeService'),
      image: '/images/team/ivan-mikec.jpg',
      description: t('ivanMikeDescription'),
      achievements: [
        t('suspensionBrakesSpecialist'),
        t('wheelAlignmentCertified'),
        t('classicVehicleExpert'),
        t('tenYearsExperience'),
      ],
      contact: {
        phone: '+385 95 842 7667',
        email: 'ivan.mikec@autoserviskatanovic.com',
      },
      social: {
        facebook: 'https://www.facebook.com/ivan.mikec.33',
        instagram: 'https://www.instagram.com/ivan.mikec.33/',
      },
    },
    {
      id: 'karolina-sok',
      name: 'Karolina Šok',
      role: t('accounting'),
      experience: t('fivePlusYearsExperience'),
      specialization: t('finance') + ', ' + t('customerSupport'),
      image: '/images/team/karolina-sok.jpg',
      description: t('karolinaDescription'),
      achievements: [
        t('financeExpert'),
        t('certifiedAccountant'),
        t('customerSupportSpecialist'),
        t('fiveYearsExperience'),
      ],
      contact: {
        phone: '+385 95 842 7667',
        email: 'karolina@autoserviskatanovic.com',
      },
      social: {
        facebook: 'https://www.facebook.com/karolina.sok4',
        instagram: 'https://www.instagram.com/karolina.sok/',
      },
    },
  ];

  const teamStats = [
    {
      number: '4',
      label: t('experts'),
      icon: Users,
    },
    {
      number: '38+',
      label: t('totalExperience'),
      icon: Calendar,
    },
    {
      number: '1000+',
      label: t('satisfiedClients'),
      icon: Star,
    },
    {
      number: '5000+',
      label: t('successfulServices'),
      icon: Wrench,
    },
  ];

  const certifications = [
    t('authorizedCastrolPartners'),
    t('certifiedHybridVehicles'),
    t('professionalTrainingLatest'),
    t('regularKnowledgeUpdates'),
    t('specializedDiagnosticEquipment'),
    t('certifiedWheelAlignment'),
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 mb-8 rounded-xl px-6 py-3"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">{t('backToHome')}</span>
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto pb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('teamPageTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('teamPageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('expertsYouCanCount')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('expertsDescription')}
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={member.id} className="max-w-7xl mx-auto">
                  <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-3xl overflow-hidden">
                    <div
                      className={`grid lg:grid-cols-2 gap-0 ${
                        !isEven ? 'lg:grid-flow-col-dense' : ''
                      }`}
                    >
                      {/* Image Section */}
                      <div
                        className={`relative h-80 lg:h-96 overflow-hidden ${
                          !isEven ? 'lg:col-start-2' : ''
                        }`}
                      >
                        <img
                          src={member.image || '/placeholder.svg'}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                        {/* Professional Badge */}
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                            {member.experience}
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="absolute bottom-6 right-6 flex space-x-3">
                          <a
                            href={member.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                            aria-label={`${member.name} Facebook profil`}
                          >
                            <Facebook className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </a>
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-xl shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                            aria-label={`${member.name} Instagram profil`}
                          >
                            <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                          </a>
                        </div>
                      </div>

                      {/* Content Section */}
                      <CardContent
                        className={`p-8 lg:p-12 flex flex-col justify-center ${
                          !isEven ? 'lg:col-start-1' : ''
                        }`}
                      >
                        <div className="space-y-6">
                          {/* Header */}
                          <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                              <div className="bg-blue-600 dark:bg-blue-500 w-1 h-12 rounded-full" />
                              <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                                  {member.name}
                                </h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                  {member.role}
                                </p>
                              </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                {t('specialization')}:
                              </p>
                              <p className="text-gray-900 dark:text-white font-semibold">
                                {member.specialization}
                              </p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {member.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {t('keyAchievements')}
                            </h4>
                            <div className="grid gap-3">
                              {member.achievements.map((achievement, i) => (
                                <div
                                  key={i}
                                  className="flex items-start space-x-3"
                                >
                                  <div className="bg-green-100 dark:bg-green-900/20 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Contact */}
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col sm:flex-row gap-4">
                              <a
                                href={`tel:${member.contact.phone}`}
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                <Phone className="h-4 w-4" />
                                <span className="text-sm">
                                  {member.contact.phone}
                                </span>
                              </a>
                              <a
                                href={`mailto:${member.contact.email}`}
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">
                                  {member.contact.email}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Expertise */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('certifiedExpertise')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('certifiedExpertiseDescription')}
              </p>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t('professionalCertificates')}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t('professionalCertificatesDescription')}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-green-100 dark:bg-green-900/20 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 border-0 rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-16 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {t('trustYourCarExperts')}
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                  {t('trustYourCarDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white hover:bg-gray-50 text-blue-600 rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    <Link href="/#contact">{t('contactUs')}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-blue-600 hover:text-blue-700 border border-white/20 dark:bg-gray-800/90 dark:hover:bg-white dark:text-white dark:hover:text-blue-600 dark:border-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    <Link href="/usluge">{t('viewServices')}</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
