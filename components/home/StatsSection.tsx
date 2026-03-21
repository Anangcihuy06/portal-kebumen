'use client';

import { useEffect, useState } from 'react';
import { MapPin, Mountain, Waves, Landmark } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('stats');

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      icon: MapPin,
      value: 50,
      suffix: '+',
      label: t('destinations'),
    },
    {
      icon: Mountain,
      value: 365,
      suffix: '',
      label: t('caves'),
    },
    {
      icon: Waves,
      value: 20,
      suffix: 'km',
      label: t('beach'),
    },
    {
      icon: Landmark,
      value: 982,
      suffix: '',
      label: t('hills'),
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const [count, setCount] = useState(0);

            useEffect(() => {
              if (!mounted) return;
              
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  setCount(stat.value);
                  clearInterval(timer);
                } else {
                  setCount(Math.floor(current));
                }
              }, duration / steps);

              return () => clearInterval(timer);
            }, [mounted, stat.value]);

            return (
              <div
                key={index}
                className={`text-center p-6 ${
                  index !== 0 ? 'md:border-l md:border-gray-800' : ''
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-playfair mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
