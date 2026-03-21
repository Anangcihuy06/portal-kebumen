'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function HeroSlider() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const slides = [
    {
      id: 1,
      title: t('slide1.title'),
      subtitle: t('slide1.subtitle'),
      description: t('slide1.description'),
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
      cta: t('slide1.cta'),
    },
    {
      id: 2,
      title: t('slide2.title'),
      subtitle: t('slide2.subtitle'),
      description: t('slide2.description'),
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80',
      cta: t('slide2.cta'),
    },
    {
      id: 3,
      title: t('slide3.title'),
      subtitle: t('slide3.subtitle'),
      description: t('slide3.description'),
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80',
      cta: t('slide3.cta'),
    },
    {
      id: 4,
      title: t('slide4.title'),
      subtitle: t('slide4.subtitle'),
      description: t('slide4.description'),
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80',
      cta: t('slide4.cta'),
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="h-full w-full">
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full">
                  <div className="max-w-3xl">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full mb-6 animate-fadeIn">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair animate-fadeInUp">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fadeInUp delay-200">
                      {slide.description}
                    </p>
                    <Link
                      href={`/${locale}/destinations`}
                      className="inline-flex items-center bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fadeInUp delay-300"
                    >
                      {slide.cta}
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
