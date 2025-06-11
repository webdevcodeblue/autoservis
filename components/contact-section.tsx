'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-intersection-observer';
import { submitContactForm } from '@/lib/actions';

export function ContactSection() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      const form = document.getElementById('contact-form') as HTMLFormElement;
      form?.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>

      <div
        ref={ref}
        className="container mx-auto px-1 xs:px-2 sm:px-4 md:px-6 relative z-10"
      >
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in ${
            inView ? 'visible' : ''
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contactUs')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
            {[
              {
                icon: MapPin,
                title: t('ourLocation'),
                content: (
                  <>
                    Finčevec 9<br />
                    48260 Sveti Petar Orehovec
                    <br />
                    {t('croatia')}
                  </>
                ),
              },
              {
                icon: Phone,
                title: t('phone'),
                content: '+385 95 842 7667',
              },
              {
                icon: Mail,
                title: t('email'),
                content: 'autoserviskatanovic@gmail.com',
              },
              {
                icon: Clock,
                title: t('workingHours'),
                content: (
                  <div className="space-y-1">
                    <p>{t('mondayFriday')}: 08:00 - 20:00</p>
                    <p>{t('saturday')}: 08:00 - 14:00</p>
                    <p>
                      {t('sunday')}: {t('closed')}
                    </p>
                  </div>
                ),
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className={`bg-white/80 dark:bg-gray-800/80 border-white/20 dark:border-gray-700/20 card-hover animate-fade-in ${
                    inView ? 'visible' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-5 sm:p-6 md:p-7">
                    <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-4">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 w-16 h-16 sm:w-18 sm:h-18 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-8 w-8 sm:h-9 sm:w-9 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg sm:text-xl">
                          {item.title}
                        </h3>
                        <div className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Contact Form */}
            <Card
              className={`bg-white/90 dark:bg-gray-800/90 border-white/20 dark:border-gray-700/20 animate-fade-in ${
                inView ? 'visible' : ''
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <CardHeader className="p-4 sm:p-5 md:p-6">
                <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl">
                  {t('contactForm')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 md:p-7">
                <form
                  id="contact-form"
                  action={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t('name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={t('enterName')}
                        className="bg-white/80 dark:bg-gray-700/80 dark:border-gray-600 dark:text-white text-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t('email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t('enterEmail')}
                        className="bg-white/80 dark:bg-gray-700/80 dark:border-gray-600 dark:text-white text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('phone')}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t('enterPhone')}
                      className="bg-white/80 dark:bg-gray-700/80 dark:border-gray-600 dark:text-white text-lg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('subject')} *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder={t('enterSubject')}
                      className="bg-white/80 dark:bg-gray-700/80 dark:border-gray-600 dark:text-white text-lg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t('message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={t('enterMessage')}
                      className="bg-white/80 dark:bg-gray-700/80 dark:border-gray-600 dark:text-white text-lg resize-none"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-3 py-2 rounded-md text-xs sm:text-sm">
                      {t('messageSuccess')}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-3 py-2 rounded-md text-xs sm:text-sm">
                      {t('messageError')}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-lg sm:text-xl py-4 sm:py-5 btn-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('sending') : t('sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card
              className={`bg-white/90 dark:bg-gray-800/90 border-white/20 dark:border-gray-700/20 animate-fade-in ${
                inView ? 'visible' : ''
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <CardHeader className="p-4 sm:p-5 md:p-6">
                <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl">
                  {t('findUs')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-56 xs:h-64 sm:h-64 md:h-80 lg:h-96 w-full rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.8305295043628!2d16.4271745!3d46.098068399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476611ad66b4b2cb%3A0x7b156bb2c12a7b10!2sCastrol%20Service%20AUTOSERVIS%20KATANOVI%C4%86!5e0!3m2!1shr!2shr!4v1749310342050!5m2!1shr!2shr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Autoservis Katanović Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
