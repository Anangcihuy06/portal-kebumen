'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Menu, X, MapPin, Globe } from 'lucide-react';

interface NavbarProps {
  transparent?: boolean;
  backgroundImage?: string;
}

export default function Navbar({
  transparent = false,
  backgroundImage,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: t('home'), exact: true },
    { href: `/${locale}/destinations`, label: t('destinations'), exact: false },
    { href: `/${locale}/recommendations`, label: 'AI Rekomendasi', exact: false },
    { href: `/${locale}/articles`, label: t('articles'), exact: false },
    { href: `/${locale}/about`, label: t('about'), exact: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const showTransparent = transparent && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          showTransparent
            ? 'bg-black/40 backdrop-blur-md'
            : isScrolled
              ? 'bg-white shadow-sm'
              : 'bg-white shadow-sm'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 sm:h-20'>
            <Link href={`/${locale}`} className='flex items-center space-x-2'>
              <MapPin
                className={`w-6 h-6 sm:w-8 sm:h-8 ${showTransparent ? 'text-white' : 'text-black'}`}
              />
              <span
                className={`text-lg sm:text-xl font-bold font-playfair ${
                  showTransparent ? 'text-white' : 'text-black'
                }`}
              >
                KEBUMEN
              </span>
            </Link>

            <div className='hidden lg:flex items-center space-x-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive(link.href, link.exact)
                      ? showTransparent
                        ? 'text-white bg-white/20'
                        : 'text-black bg-gray-100'
                      : showTransparent
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className='ml-2'>
                <Link
                  href={locale === 'id' ? '/en' : '/id'}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    showTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Globe className='w-4 h-4' />
                  <span className='uppercase'>
                    {locale === 'id' ? 'EN' : 'ID'}
                  </span>
                </Link>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                showTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-black hover:bg-gray-100'
              }`}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-[99] transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 ${isMobileMenuOpen ? '' : 'hidden'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center space-x-2'>
              <MapPin className='w-6 h-6 text-black' />
              <span className='text-lg font-bold font-playfair text-black'>
                KEBUMEN
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className='p-2 text-gray-500 hover:text-black rounded-lg hover:bg-gray-100'
            >
              <X size={24} />
            </button>
          </div>

          <div className='p-4'>
            <div className='space-y-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    isActive(link.href, link.exact)
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className='mt-6 pt-6 border-t'>
              <p className='px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3'>
                Language
              </p>
              <div className='grid grid-cols-2 gap-2'>
                <Link
                  href='/id'
                  className={`flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    locale === 'id'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Indonesia
                </Link>
                <Link
                  href='/en'
                  className={`flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    locale === 'en'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  English
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
