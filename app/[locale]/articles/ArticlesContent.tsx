'use client';

import { useEffect, useCallback } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/shared/ArticleCard';
import LoadMore, { SkeletonCard } from '@/components/shared/LoadMore';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchArticlesStart, resetArticles } from '@/store/slices/articleSlice';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function ArticlesContent() {
  const dispatch = useAppDispatch();
  const { articles, loading, page, hasMore } = useAppSelector((state) => state.articles);
  const t = useTranslations('articles');
  const locale = useLocale();

  useEffect(() => {
    dispatch(resetArticles());
    dispatch(fetchArticlesStart({ page: 1 }));
  }, [dispatch]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      dispatch(fetchArticlesStart({ page }));
    }
  }, [dispatch, loading, hasMore, page]);

  const lastElementRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: loadMore,
  });

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                isLast={index === articles.length - 1}
                refCallback={lastElementRef}
                locale={locale}
              />
            ))}
            {loading && (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            )}
          </div>

          <LoadMore loading={loading} hasMore={hasMore} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
