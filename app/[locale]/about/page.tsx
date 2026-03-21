import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, Mountain, Waves, Building, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {t('geography.label')}
              </span>
              <h2 className="text-4xl font-bold font-playfair mt-4 mb-6">
                {t('geography.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('geography.description1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('geography.description2')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold text-black">{t('geography.area')}</div>
                    <div className="text-sm">{t('geography.areaValue')}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold text-black">{t('geography.population')}</div>
                    <div className="text-sm">{t('geography.populationValue')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
                alt="Pemandangan Kebumen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                alt="Gua Jatijajar"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {t('geopark.label')}
              </span>
              <h2 className="text-4xl font-bold font-playfair mt-4 mb-6">
                {t('geopark.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('geopark.description1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('geopark.description2')}
              </p>
              <Link
                href={`/${locale}/destinations`}
                className="inline-flex items-center bg-black text-white px-6 py-3 font-semibold rounded-full hover:bg-gray-800 transition-all"
              >
                {t('geopark.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-6">
              {t('facts.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                {t('facts.caves.title')}
              </h3>
              <p className="text-gray-600">
                {t('facts.caves.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                {t('facts.beach.title')}
              </h3>
              <p className="text-gray-600">
                {t('facts.beach.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-4">
                {t('facts.history.title')}
              </h3>
              <p className="text-gray-600">
                {t('facts.history.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold font-playfair mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/destinations`}
                className="inline-flex items-center bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                {t('cta.button1')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/articles`}
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 font-bold rounded-full hover:bg-white hover:text-black transition-all"
              >
                {t('cta.button2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
