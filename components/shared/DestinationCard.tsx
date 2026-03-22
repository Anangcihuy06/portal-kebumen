import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Ticket, Clock, ChevronRight } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
  locale?: string;
}

export default function DestinationCard({ destination, locale = 'id' }: DestinationCardProps) {
  return (
    <Link
      href={`/${locale}/destinations`}
      className="block bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-sm text-black text-xs sm:text-sm font-medium rounded-full">
            {destination.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-playfair mb-1 line-clamp-1">
            {destination.name}
          </h3>
          <div className="flex items-center text-white/90 text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="line-clamp-1">{destination.location}</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <Ticket className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="font-medium">{destination.ticketPrice}</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span>{destination.hours}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {destination.facilities.slice(0, 2).map((facility, index) => (
            <span
              key={index}
              className="px-2 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {facility}
            </span>
          ))}
          {destination.facilities.length > 2 && (
            <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{destination.facilities.length - 2}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-black">
          <span className="text-sm sm:text-base font-semibold">Selengkapnya</span>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
