'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  Wrench,
  Clock,
  Shield,
  Award,
  Target,
  Heart,
  Zap,
  ArrowLeft,
  CheckCircle,
  Star,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import Link from 'next/link';

export function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    {
      number: '2018',
      label: t('establishedYear'),
      icon: Calendar,
    },
    {
      number: '1000+',
      label: t('satisfiedClients'),
      icon: Users,
    },
    {
      number: '5000+',
      label: t('successfulServices'),
      icon: Wrench,
    },
    {
      number: '100%',
      label: t('qualityGuarantee'),
      icon: Shield,
    },
  ];

  const values = [
    {
      icon: Target,
      title: t('precisionTitle'),
      description: t('precisionDescription'),
    },
    {
      icon: Heart,
      title: t('dedicationTitle'),
      description: t('dedicationDescription'),
    },
    {
      icon: Zap,
      title: t('innovationTitle'),
      description: t('innovationDescription'),
    },
    {
      icon: Award,
      title: t('excellenceTitle'),
      description: t('excellenceDescription'),
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: t('milestone2018Title'),
      description: t('milestone2018Description'),
    },
    {
      year: '2020',
      title: t('milestone2020Title'),
      description: t('milestone2020Description'),
    },
    {
      year: '2021',
      title: t('milestone2021Title'),
      description: t('milestone2021Description'),
    },
    {
      year: '2022',
      title: t('milestone2022Title'),
      description: t('milestone2022Description'),
    },
    {
      year: '2024',
      title: t('milestone2024Title'),
      description: t('milestone2024Description'),
    },
  ];

  const certifications = [
    t('certifiedCastrol'),
    t('certifiedHybrid'),
    t('certifiedTraining'),
    t('regularKnowledgeUpdates'),
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
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
              {t('aboutUsPageTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('aboutUsPageSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Story Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('ourStoryTitle')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('ourStoryDescription1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('ourStoryDescription2')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/about-autoservis.webp"
                alt={t('aboutImageAlt')}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-1">
                    2018
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {t('establishedYear')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ourValuesTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('ourValuesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-0 rounded-2xl shadow-md"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('ourJourneyTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('ourJourneyDescription')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1 bg-white dark:bg-gray-800 border-0 rounded-2xl shadow-md">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {t('expertiseTitle')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('expertiseDescription')}
                </p>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/20 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {t('averageRating')}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    24h
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {t('averageServiceTime')}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl shadow-md col-span-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('warranty')}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {t('warrantyDescription')}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 border-0 rounded-3xl overflow-hidden shadow-xl">
          <CardContent className="p-8 md:p-16 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {t('joinOurStoryTitle')}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('joinOurStoryDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white hover:bg-gray-50 text-blue-600 rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  <Link href="/kontakt">{t('contactUs')}</Link>
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
    </div>
  );
}
