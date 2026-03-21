'use client';

import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface LoadMoreProps {
  loading: boolean;
  hasMore: boolean;
  children?: React.ReactNode;
}

export default function LoadMore({ loading, hasMore, children }: LoadMoreProps) {
  const t = useTranslations('common');

  if (!hasMore && !loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">{t('noMore')}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      {loading && (
        <>
          <Loader2 className="w-8 h-8 animate-spin text-black" />
          <p className="text-gray-500">{t('loadMore')}</p>
        </>
      )}
      {children}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="h-56 bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
