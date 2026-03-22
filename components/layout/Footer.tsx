'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Users, Globe } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useEffect, useState, useCallback } from 'react';

interface VisitorStats {
  Indonesia: number;
  USA: number;
  Malaysia: number;
  Singapore: number;
  Australia: number;
  other: number;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const locale = useLocale();
  const [visitorStats, setVisitorStats] = useState<VisitorStats>({
    Indonesia: 12,
    USA: 1,
    Malaysia: 0,
    Singapore: 0,
    Australia: 0,
    other: 0,
  });
  const [onlineCount, setOnlineCount] = useState(13);

  const updateVisitorStats = useCallback(() => {
    const countries: (keyof VisitorStats)[] = ['Indonesia', 'USA', 'Malaysia', 'Singapore', 'Australia', 'other'];
    
    setVisitorStats(prev => {
      const newStats = { ...prev };
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      
      if (randomCountry === 'Indonesia') {
        newStats.Indonesia = Math.min(newStats.Indonesia + 1, 50);
      } else if (randomCountry === 'USA') {
        newStats.USA = Math.min(newStats.USA + 1, 10);
      } else if (randomCountry === 'Malaysia') {
        newStats.Malaysia = Math.min(newStats.Malaysia + 1, 5);
      } else if (randomCountry === 'Singapore') {
        newStats.Singapore = Math.min(newStats.Singapore + 1, 5);
      } else if (randomCountry === 'Australia') {
        newStats.Australia = Math.min(newStats.Australia + 1, 3);
      } else {
        newStats.other = Math.min(newStats.other + 1, 5);
      }
      
      return newStats;
    });

    setOnlineCount(prev => {
      const change = Math.random() > 0.5 ? 1 : -1;
      return Math.max(5, Math.min(50, prev + change));
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateVisitorStats, 5000);
    return () => clearInterval(interval);
  }, [updateVisitorStats]);

  const totalVisitors = Object.values(visitorStats).reduce((a, b) => a + b, 0);

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <Globe className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Pengunjung Online Saat Ini</p>
                <p className="text-3xl font-bold font-playfair text-white">
                  {totalVisitors}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {visitorStats.Indonesia > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="text-xl">🇮🇩</span>
                  <span className="text-white font-medium">{visitorStats.Indonesia}</span>
                  <span className="text-gray-400 text-xs">Indonesia</span>
                </div>
              )}
              {visitorStats.USA > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="text-xl">🇺🇸</span>
                  <span className="text-white font-medium">{visitorStats.USA}</span>
                  <span className="text-gray-400 text-xs">USA</span>
                </div>
              )}
              {visitorStats.Malaysia > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="text-xl">🇲🇾</span>
                  <span className="text-white font-medium">{visitorStats.Malaysia}</span>
                  <span className="text-gray-400 text-xs">MY</span>
                </div>
              )}
              {visitorStats.Singapore > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="text-xl">🇸🇬</span>
                  <span className="text-white font-medium">{visitorStats.Singapore}</span>
                  <span className="text-gray-400 text-xs">SG</span>
                </div>
              )}
              {visitorStats.Australia > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="text-xl">🇦🇺</span>
                  <span className="text-white font-medium">{visitorStats.Australia}</span>
                  <span className="text-gray-400 text-xs">AU</span>
                </div>
              )}
              {visitorStats.other > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                  <span className="text-xl">🌍</span>
                  <span className="text-white font-medium">{visitorStats.other}</span>
                  <span className="text-gray-400 text-xs">Lainnya</span>
                </div>
              )}
            </div>
          </div>
        </div>

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
                <span className="text-gray-400">Dukuh Kiteran, Desa Bumirejo, Kec. Puring, Kab. Kebumen</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:081393294652" className="text-gray-400 hover:text-white transition-colors">
                  081393294652
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:nanangw250@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  nanangw250@gmail.com
                </a>
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
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Portal Pariwisata Kabupaten Kebumen. {t('copyright')}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Powered by <span className="text-white font-semibold">Ac Digital Agency</span>
              </p>
            </div>

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
