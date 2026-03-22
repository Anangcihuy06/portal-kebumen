'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Ticket, ArrowLeft, Share2, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DestinationCard from '@/components/shared/DestinationCard';
import { useLocale } from 'next-intl';
import { destinations as allDestinations } from '@/data/mockData';

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const [destination, setDestination] = useState<typeof allDestinations[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const found = allDestinations.find((d) => d.slug === slug);
    setDestination(found || null);
    setLoading(false);
    setCurrentGalleryIndex(0);
  }, [slug]);

  const relatedDestinations = allDestinations
    .filter((d) => d.slug !== slug)
    .slice(0, 3);

  const nextGalleryImage = () => {
    if (destination) {
      setCurrentGalleryIndex((prev) => 
        prev === destination.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevGalleryImage = () => {
    if (destination) {
      setCurrentGalleryIndex((prev) => 
        prev === 0 ? destination.gallery.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-80 bg-gray-200 rounded-2xl animate-pulse mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!destination) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold">Destinasi tidak ditemukan</h1>
          <Link href={`/${locale}/destinations`} className="text-blue-500 hover:underline mt-4 inline-block">
            Kembali ke Destinations
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar transparent backgroundImage={destination.image} />
      
      <div className="pt-20">
        <div className="relative h-[50vh] min-h-[300px] max-h-[450px]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <Link
                href={`/${locale}/destinations`}
                className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full mb-4 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </Link>
              <span className="inline-block px-3 py-1 bg-white/90 text-black text-xs sm:text-sm font-medium rounded-full mb-3">
                {destination.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-2">
                {destination.name}
              </h1>
              <div className="flex items-center text-white/90 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {destination.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 sm:p-6 bg-gray-light rounded-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-2 shadow-sm">
              <Ticket className="w-5 h-5 text-black" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">Tiket Masuk</p>
            <p className="text-sm sm:text-base font-semibold">{destination.ticketPrice}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-2 shadow-sm">
              <Clock className="w-5 h-5 text-black" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">Jam Operasional</p>
            <p className="text-sm sm:text-base font-semibold">{destination.hours}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-2 shadow-sm">
              <Users className="w-5 h-5 text-black" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">Fasilitas</p>
            <p className="text-sm sm:text-base font-semibold">{destination.facilities.length}+</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-2 shadow-sm">
              <MapPin className="w-5 h-5 text-black" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500">Lokasi</p>
            <p className="text-sm sm:text-base font-semibold">Kebumen</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-4">Tentang</h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {destination.description}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-4">Fasilitas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {destination.facilities.map((facility, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-light rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-4">Galeri</h2>
          
          <div className="relative rounded-2xl overflow-hidden">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={destination.gallery[currentGalleryIndex]}
                alt={`${destination.name} - Image ${currentGalleryIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>
            
            {destination.gallery.length > 1 && (
              <>
                <button
                  onClick={prevGalleryImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                
                <button
                  onClick={nextGalleryImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {destination.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentGalleryIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-3">
            {currentGalleryIndex + 1} / {destination.gallery.length}
          </p>
        </div>

        <div className="p-6 bg-black text-white rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-playfair mb-2">
            Siap Mengunjungi {destination.name}?
          </h3>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Nikmati keindahan dan keunikan destinasi wisata ini bersama keluarga dan teman
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/articles`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Baca Artikel Terkait
            </Link>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Bagikan
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-8 text-center">
            Destinasi Lainnya
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
