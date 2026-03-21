'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/shared/ArticleCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchArticleDetailStart } from '@/store/slices/articleSlice';
import { articles as allArticles } from '@/data/mockData';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const dispatch = useAppDispatch();
  const { currentArticle, loading } = useAppSelector((state) => state.articles);
  const t = useTranslations('article');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchArticleDetailStart(slug));
  }, [dispatch, slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const relatedArticles = allArticles
    .filter((article) => article.slug !== slug)
    .slice(0, 3);

  if (loading || !currentArticle) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-96 bg-gray-200 rounded-2xl animate-pulse mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href={`/${locale}/articles`}
              className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Link>
            <Link
              href={`/${locale}/articles`}
              className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
            >
              {t('backToArticles')}
            </Link>
          </div>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
              {currentArticle.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 leading-tight">
            {currentArticle.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 mb-8 text-sm">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {currentArticle.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(currentArticle.publishedAt)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {currentArticle.readTime} {tCommon('minutes')}
            </div>
            <button className="flex items-center hover:text-black transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              {tCommon('share')}
            </button>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={currentArticle.image}
              alt={currentArticle.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {currentArticle.excerpt}
            </p>
            
            {currentArticle.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <span className="text-gray-500 text-sm">{tCommon('tags')}:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  {currentArticle.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  Kebumen
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  {locale === 'en' ? 'Tourism' : 'Pariwisata'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-playfair mb-12 text-center">
            {tCommon('relatedArticles')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
