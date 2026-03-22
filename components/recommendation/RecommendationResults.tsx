'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Ticket, Clock, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { RecommendationResult } from '@/types/recommendation';

interface RecommendationResultsProps {
  results: RecommendationResult[];
  locale?: string;
}

export default function RecommendationResults({ results, locale = 'id' }: RecommendationResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <Sparkles className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-bold mb-2">No recommendations found</h3>
        <p className="text-gray-500">Try adjusting your preferences</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-black text-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-6 h-6" />
          <h2 className="text-2xl font-bold font-playfair">AI Recommendations</h2>
        </div>
        <p className="text-gray-300">
          Based on your preferences, we found {results.length} perfect destinations for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, index) => (
          <Link
            key={result.destination.id}
            href={`/${locale}/destinations/${result.destination.slug}`}
            className="block bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <Image
                src={result.destination.image}
                alt={result.destination.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                  #{index + 1}
                </span>
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {result.destination.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-xl font-bold text-white font-playfair mb-1">
                  {result.destination.name}
                </h3>
                <div className="flex items-center text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{result.destination.location}</span>
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {result.destination.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <Ticket className="w-4 h-4 mr-1.5" />
                  <span className="font-medium">{result.destination.ticketPrice}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1.5" />
                  <span>{result.destination.hours}</span>
                </div>
              </div>

              {result.score.matchFactors.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {result.score.matchFactors.slice(0, 3).map((factor, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full transition-all duration-500"
                      style={{ width: `${result.score.totalScore * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {Math.round(result.score.totalScore * 100)}% match
                  </span>
                </div>
                <span className="flex items-center text-sm font-semibold text-black">
                  Detail <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center pt-4">
        <Link
          href={`/${locale}/destinations`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors"
        >
          Lihat Semua Destinasi
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
