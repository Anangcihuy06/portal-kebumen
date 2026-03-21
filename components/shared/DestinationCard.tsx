import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Ticket, Clock, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
  locale?: string;
}

export default function DestinationCard({ destination, locale = 'id' }: DestinationCardProps) {
  const t = useTranslations('destinations');
  const tCommon = useTranslations('common');

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-black text-xs font-medium rounded-full">
            {destination.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white font-playfair mb-2">
            {destination.name}
          </h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {destination.location}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {destination.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Ticket className="w-4 h-4 mr-2" />
            {destination.ticketPrice}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {destination.hours}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {destination.facilities.slice(0, 3).map((facility, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {facility}
            </span>
          ))}
          {destination.facilities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{destination.facilities.length - 3} more
            </span>
          )}
        </div>

        <Link
          href={`/${locale}/destinations`}
          className="inline-flex items-center text-black font-semibold group-hover:gap-2 transition-all"
        >
          <span>{tCommon('readMore')}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
