import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  isLast?: boolean;
  refCallback?: (node?: HTMLDivElement | null) => void;
  locale?: string;
}

export default function ArticleCard({ article, isLast, refCallback, locale = 'id' }: ArticleCardProps) {
  const tCommon = useTranslations('common');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div
      ref={isLast ? refCallback : undefined}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs font-medium rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(article.publishedAt)}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {article.readTime} {tCommon('minutes')}
          </div>
        </div>

        <h3 className="text-xl font-bold font-playfair mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <Link
          href={`/${locale}/articles/${article.slug}`}
          className="inline-flex items-center text-black font-semibold group-hover:gap-2 transition-all"
        >
          <span>{tCommon('readMore')}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
