'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DestinationCard from '@/components/shared/DestinationCard';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchDestinationsStart } from '@/store/slices/destinationSlice';

export default function DestinationsContent() {
  const dispatch = useAppDispatch();
  const { destinations, loading } = useAppSelector((state) => state.destinations);
  const t = useTranslations('destinations');
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchDestinationsStart());
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} locale={locale} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
