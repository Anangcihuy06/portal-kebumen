'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import LatestArticles from '@/components/home/LatestArticles';
import StatsSection from '@/components/home/StatsSection';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchArticlesStart } from '@/store/slices/articleSlice';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector((state) => state.articles);

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticlesStart({ page: 1 }));
    }
  }, [dispatch, articles.length]);

  return (
    <main>
      <Navbar transparent />
      <HeroSlider />
      <FeaturedDestinations />
      <LatestArticles articles={articles} />
      <StatsSection />
      <Footer />
    </main>
  );
}
