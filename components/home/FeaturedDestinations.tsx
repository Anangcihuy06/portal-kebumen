'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchDestinationsStart } from '@/store/slices/destinationSlice';

export default function FeaturedDestinations() {
  const dispatch = useAppDispatch();
  const { featured, loading } = useAppSelector((state) => state.destinations);
  const t = useTranslations('featured');
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchDestinationsStart());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {t('title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((destination, index) => (
            <Link
              key={destination.id}
              href={`/${locale}/destinations`}
              className={`group relative overflow-hidden rounded-2xl shadow-lg card-hover ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-full min-h-[400px]' : 'h-72'}`}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full mb-3">
                    {destination.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-playfair mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {destination.location}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/destinations`}
            className="inline-flex items-center bg-black text-white px-8 py-4 font-bold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            {t('cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
