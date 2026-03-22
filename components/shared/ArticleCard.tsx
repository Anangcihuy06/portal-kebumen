import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  isLast?: boolean;
  refCallback?: (node?: HTMLDivElement | null) => void;
  locale?: string;
}

export default function ArticleCard({ article, isLast, refCallback, locale = 'id' }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Link
      href={`/${locale}/articles/${article.slug}`}
      className="block group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
    >
      <div ref={isLast ? refCallback : undefined} className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 space-x-3">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            {formatDate(article.publishedAt)}
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            {article.readTime} min
          </div>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold font-playfair mb-2 sm:mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-black">
          <span className="text-sm font-semibold">Baca Selengkapnya</span>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
