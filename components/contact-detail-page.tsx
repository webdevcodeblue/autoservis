'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { submitContactForm } from '@/lib/actions';
import Link from 'next/link';

export function ContactDetailPage() {
  const { t } = useLanguage();
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

  const contactInfo = [
    {
      icon: MapPin,
      title: t('ourLocation'),
      content: (
        <div className="space-y-2">
          <p className="font-semibold text-gray-900 dark:text-white">
            Finčevec 9
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            48260 Sveti Petar Orehovec
          </p>
          <p className="text-gray-600 dark:text-gray-300">{t('croatia')}</p>
        </div>
      ),
      action: {
        label: t('openGoogleMaps'),
        href: 'https://www.google.com/maps/place/Castrol+Service+AUTOSERVIS+KATANOVI%C4%86/@46.098068,16.4271745,17z/data=!3m1!4b1!4m6!3m5!1s0x476611ad66b4b2cb:0x7b156bb2c12a7b10!8m2!3d46.098068!4d16.4271745!16s%2Fg%2F11q3j8k8qx',
      },
    },
    {
      icon: Phone,
      title: t('phone'),
      content: (
        <div className="space-y-2">
          <p className="font-semibold text-gray-900 dark:text-white">
            +385 95 842 7667
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t('availableDuringWorkingHours')}
          </p>
        </div>
      ),
      action: {
        label: t('callNow'),
        href: 'tel:+385958427667',
      },
    },
    {
      icon: Mail,
      title: t('email'),
      content: (
        <div className="space-y-2">
          <p className="font-semibold text-gray-900 dark:text-white">
            autoserviskatanovic@gmail.com
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t('emailResponse')}
          </p>
        </div>
      ),
      action: {
        label: t('sendEmail'),
        href: 'mailto:autoserviskatanovic@gmail.com',
      },
    },
    {
      icon: Clock,
      title: t('workingHours'),
      content: (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">
              {t('mondayFriday')}:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              08:00 - 20:00
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">
              {t('saturday')}:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              08:00 - 14:00
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">
              {t('sunday')}:
            </span>
            <span className="font-semibold text-red-600 dark:text-red-400">
              {t('closed')}
            </span>
          </div>
        </div>
      ),
    },
  ];

  const quickActions = [
    {
      icon: Phone,
      title: t('urgentCall'),
      description: t('urgentCallDesc'),
      action: t('callNow') + ' +385 95 842 7667',
      href: 'tel:+385958427667',
      color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    },
    {
      icon: MessageSquare,
      title: t('quickMessage'),
      description: t('quickMessageDesc'),
      action: t('fillForm'),
      href: '#contact-form',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Navigation,
      title: t('navigation'),
      description: t('navigationDesc'),
      action: t('openGoogleMaps'),
      href: 'https://www.google.com/maps/place/Castrol+Service+AUTOSERVIS+KATANOVI%C4%86/@46.098068,16.4271745,17z/data=!3m1!4b1!4m6!3m5!1s0x476611ad66b4b2cb:0x7b156bb2c12a7b10!8m2!3d46.098068!4d16.4271745!16s%2Fg%2F11q3j8k8qx',
      color:
        'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    },
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
              {t('contactPageTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('contactPageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('quickContact')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('chooseContactMethod')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${action.color}`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {action.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <a
                        href={action.href}
                        target={
                          action.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          action.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {action.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contactInfo')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contactInfoDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {info.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {info.content}
                      {info.action && (
                        <Button
                          asChild
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <a
                            href={info.action.href}
                            target={
                              info.action.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              info.action.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                          >
                            {info.action.label}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div id="contact-form" className="scroll-mt-12 lg:scroll-mt-20 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sendUsMessage')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('fillFormBelow')}
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>{t('contactForm')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    action={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t('fullName')} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder={t('enterFullName')}
                          className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t('emailAddress')} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder={t('enterEmailAddress')}
                          className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t('phoneNumber')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t('enterPhoneNumber')}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t('subject')} *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder={t('brieflyDescribeReason')}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t('message')} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={t('messageDetails')}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <p className="text-green-800 dark:text-green-200 font-medium">
                            {t('messageSuccess')}
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                          <p className="text-red-800 dark:text-red-200 font-medium">
                            {t('messageError')}
                          </p>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-xl shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t('sending')}</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          <Send className="h-5 w-5" />
                          <span>{t('sendMessage')}</span>
                        </span>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      {t('requiredFields')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('findUsTitle')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('findUsDesc')}
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-0">
                  <div className="h-96 lg:h-[500px] w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.8305295043628!2d16.4271745!3d46.098068399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476611ad66b4b2cb%3A0x7b156bb2c12a7b10!2sCastrol%20Service%20AUTOSERVIS%20KATANOVI%C4%86!5e0!3m2!1shr!2shr!4v1749310342050!5m2!1shr!2shr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Autoservis Katanović lokacija na Google Maps"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
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
                  {t('needUrgentHelp')}
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                  {t('urgentHelpDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-white hover:bg-gray-50 text-blue-600 rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    <a href="tel:+385958427667">
                      <Phone className="h-5 w-5 mr-2" />
                      {t('callNow')}
                    </a>
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
