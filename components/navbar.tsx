'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Globe, Phone, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const languages = [
    { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+385958427667"
                className="hover:text-blue-200 transition-colors"
              >
                +385 95 842 7667
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>autoserviskatanovic@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="hidden xl:inline">
              {t('workingHours')}: {t('mondayFriday')} 08:00-20:00,{' '}
              {t('saturday')} 08:00-16:00
            </span>
            <span className="hidden lg:inline xl:hidden">
              {t('mondayFriday')} 08:00-20:00, {t('saturday')} 08:00-16:00
            </span>
            <span className="hidden md:inline lg:hidden">
              {t('mondayFriday')} 08:00-20:00
            </span>

            {/* Mobile Language Selector */}
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-1"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    <span>
                      {languages.find((lang) => lang.code === language)?.flag}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white/95 dark:bg-gray-800/95 border border-blue-100 dark:border-gray-700"
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`${
          scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg'
            : 'bg-gradient-to-r from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
        } sticky top-0 z-50 border-b border-white/20 dark:border-gray-700/20`}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center py-4 relative z-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/autoservis-logo.png"
                alt="Autoservis Katanović Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h1 className="font-bold text-xl text-gray-800 dark:text-white">
                  Autoservis Katanović
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {t('home')}
              </Link>
              <Link
                href="/usluge"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {t('services')}
              </Link>
              <Link
                href="/o-nama"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {t('about')}
              </Link>
              <Link
                href="/tim"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {t('team')}
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {t('contact')}
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Selector */}
              <div className="hidden lg:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 border-blue-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700"
                    >
                      <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>
                        {languages.find((lang) => lang.code === language)?.flag}
                      </span>
                      <span className="hidden md:inline">
                        {languages.find((lang) => lang.code === language)?.name}
                      </span>
                      <ChevronDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white/95 dark:bg-gray-800/95 border border-blue-100 dark:border-gray-700"
                  >
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-gray-700"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t relative z-20 bg-white/95 dark:bg-gray-900/95">
              <div className="flex flex-col space-y-0 pl-4">
                <Link
                  href="/"
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 border-b border-gray-100 dark:border-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t('home')}
                </Link>
                <Link
                  href="/usluge"
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 border-b border-gray-100 dark:border-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t('services')}
                </Link>
                <Link
                  href="/o-nama"
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 border-b border-gray-100 dark:border-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t('about')}
                </Link>
                <Link
                  href="/tim"
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3 border-b border-gray-100 dark:border-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {t('team')}
                </Link>
                <Link
                  href="/kontakt"
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t('contact')}
                </Link>

                {/* Language Selector in Mobile Menu */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-between bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span>
                            {
                              languages.find((lang) => lang.code === language)
                                ?.flag
                            }
                          </span>
                          <span>
                            {
                              languages.find((lang) => lang.code === language)
                                ?.name
                            }
                          </span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      className="w-full bg-white/95 dark:bg-gray-800/95 border border-gray-200 dark:border-gray-600"
                    >
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any);
                            setIsOpen(false);
                          }}
                          className="flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
