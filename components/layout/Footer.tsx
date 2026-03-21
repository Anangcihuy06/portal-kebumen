'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-8 h-8" />
              <span className="text-2xl font-bold font-playfair">KEBUMEN</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-playfair mb-6">{t('navigation')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/destinations`} className="text-gray-400 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/articles`} className="text-gray-400 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-playfair mb-6">{t('popular')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/destinations`} className="text-gray-400 hover:text-white transition-colors">
                  Pantai Logending
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/destinations`} className="text-gray-400 hover:text-white transition-colors">
                  Gua Jatijajar
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/destinations`} className="text-gray-400 hover:text-white transition-colors">
                  Gua Petruk
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/destinations`} className="text-gray-400 hover:text-white transition-colors">
                  Danau Sempor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-playfair mb-6">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">(0287) 383349</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">kominfo@kebumenkab.go.id</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">{t('hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Portal Pariwisata Kabupaten Kebumen. {t('copyright')}
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
