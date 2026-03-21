'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Menu, X, MapPin, Globe } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/destinations`, label: t('destinations') },
    { href: `/${locale}/articles`, label: t('articles') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <MapPin className={`w-8 h-8 ${isScrolled ? 'text-black' : 'text-white'}`} />
            <span
              className={`text-xl font-bold font-playfair ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              KEBUMEN
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative group">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full border transition-colors ${
                  isScrolled
                    ? 'border-black/20 hover:border-black/40 text-gray-700 hover:text-black'
                    : 'border-white/30 hover:border-white/60 text-white'
                }`}
                aria-label="Change language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>
              
              <div className={`absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50`}>
                <Link
                  href="/id"
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
                    locale === 'id' ? 'font-semibold text-black' : 'text-gray-700'
                  }`}
                >
                  <span>Indonesia</span>
                  <span className="text-xs text-gray-500">ID</span>
                </Link>
                <Link
                  href="/en"
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
                    locale === 'en' ? 'font-semibold text-black' : 'text-gray-700'
                  }`}
                >
                  <span>English</span>
                  <span className="text-xs text-gray-500">EN</span>
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        } ${isScrolled ? 'bg-white' : 'bg-black/90'}`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-sm font-semibold uppercase tracking-wider ${
                isScrolled
                  ? 'text-gray-700 hover:text-black'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-2 border-t border-gray-200/20">
            <Link
              href="/id"
              className={`px-3 py-1 rounded ${
                locale === 'id' ? 'bg-white text-black' : 'text-white'
              }`}
            >
              ID
            </Link>
            <Link
              href="/en"
              className={`px-3 py-1 rounded ${
                locale === 'en' ? 'bg-white text-black' : 'text-white'
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
