'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Head from 'next/head';
import { Sparkles, Bot, Zap } from 'lucide-react';
import PreferenceForm from '@/components/recommendation/PreferenceForm';
import RecommendationResults from '@/components/recommendation/RecommendationResults';
import { TravelPreference, RecommendationResult } from '@/types/recommendation';
import { destinations } from '@/data/mockData';
import { generateRecommendations } from '@/services/recommendationService';

export default function RecommendationsPage() {
  const t = useTranslations('recommendation');
  const locale = useLocale();
  const [results, setResults] = useState<RecommendationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (preference: TravelPreference) => {
    setIsLoading(true);
    setShowResults(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const recommendations = generateRecommendations(destinations, preference);
    setResults(recommendations);
    setIsLoading(false);
  };

  const handleReset = () => {
    setResults([]);
    setShowResults(false);
  };

  return (
    <>
      <Head>
        <title>{t('title')} - Portal Pariwisata Kebumen</title>
        <meta name="description" content={t('subtitle')} />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {!showResults ? (
          <>
            <section className="relative bg-black text-white py-16 sm:py-24 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
                <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">AI-Powered</span>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair mb-6">
                    {t('hero.title')}
                  </h1>

                  <p className="text-xl sm:text-2xl text-gray-300 mb-4">
                    {t('hero.subtitle')}
                  </p>

                  <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                    {t('hero.description')}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                      <Bot className="w-5 h-5" />
                      <span className="text-sm">Content-Based Filtering</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                      <Zap className="w-5 h-5" />
                      <span className="text-sm">Popularity Scoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-12 sm:py-16">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <PreferenceForm onSubmit={handleSubmit} isLoading={isLoading} />
              </div>
            </section>
          </>
        ) : (
          <section className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-gray-200 rounded-full" />
                    <div className="absolute top-0 left-0 w-20 h-20 border-4 border-black border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-lg font-medium">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span>AI menganalisis preferensi kamu...</span>
                  </div>
                  <p className="mt-2 text-gray-500">Mencocokkan destinasi berdasarkan preferensi dan popularitas</p>
                </div>
              ) : (
                <>
                  <RecommendationResults results={results} locale={locale} />
                  <div className="text-center mt-8">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors"
                    >
                      Coba Preferensi Lain
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <Bot className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-2">Content-Based</h3>
                <p className="text-gray-400 text-sm">
                  Mencocokkan preferensi kategori, aktivitas, dan budget dengan karakteristik destinasi
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-2">Popularity Score</h3>
                <p className="text-gray-400 text-sm">
                  Mempertimbangkan tingkat popularitas dan rating setiap destinasi wisata
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-playfair mb-2">Hybrid Approach</h3>
                <p className="text-gray-400 text-sm">
                  Kombinasi kedua metode untuk hasil rekomendasi yang akurat dan relevan
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
