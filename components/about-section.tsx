'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, Wrench, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-intersection-observer';

export function AboutSection() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Users,
      title: t('experiencedTeam'),
      description: t('experiencedTeamDesc'),
    },
    {
      icon: Wrench,
      title: t('modernTechnology'),
      description: t('modernTechnologyDesc'),
    },
    {
      icon: Clock,
      title: t('fastReliableRepairs'),
      description: t('fastReliableRepairsDesc'),
    },
    {
      icon: Shield,
      title: t('transparencyTrust'),
      description: t('transparencyTrustDesc'),
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`animate-fade-in ${inView ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('aboutOurService')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg border border-white/20 dark:border-gray-700/20 animate-fade-in ${
                      inView ? 'visible' : ''
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative animate-fade-in ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/images/about-autoservis.webp"
                alt="Autoservis Katanović - vanjski pogled na radionicu s Castrol Service znakom"
                className="w-full h-full object-cover img-hover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-800/95 border-white/20 dark:border-gray-700/20 card-hover">
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
    </section>
  );
}
