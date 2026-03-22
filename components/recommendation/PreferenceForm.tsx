'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, ChevronRight, Loader2 } from 'lucide-react';
import { TravelPreference } from '@/types/recommendation';

interface PreferenceFormProps {
  onSubmit: (preference: TravelPreference) => void;
  isLoading?: boolean;
}

const CATEGORIES = ['Pantai', 'Gua', 'Bukit', 'Air Terjun', 'Danau', 'Wisata Alam', 'Sejarah', 'WATERPARK', 'Geopark'];
const ACTIVITIES = ['Fotografi', 'Berenang', 'Berkemah', 'Hiking', 'Caving', 'Mancing', 'Belajar', 'Kuliner'];

export default function PreferenceForm({ onSubmit, isLoading }: PreferenceFormProps) {
  const t = useTranslations('recommendation');
  const [preference, setPreference] = useState<TravelPreference>({
    categories: [],
    budget: 'medium',
    duration: 2,
    travelStyle: 'family',
    activities: [],
    accessibility: 'all',
  });

  const toggleCategory = (category: string) => {
    setPreference(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleActivity = (activity: string) => {
    setPreference(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preference);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-black rounded-xl">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-playfair">{t('categoryTitle')}</h3>
            <p className="text-sm text-gray-500">{t('categorySubtitle')}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {CATEGORIES.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                preference.categories.includes(category)
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <h3 className="text-lg font-bold font-playfair mb-4">{t('budgetTitle')}</h3>
        <div className="grid grid-cols-3 gap-3">
          {(['budget', 'medium', 'premium'] as const).map(budget => (
            <button
              key={budget}
              type="button"
              onClick={() => setPreference(prev => ({ ...prev, budget }))}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                preference.budget === budget
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="block text-lg font-bold capitalize">{budget}</span>
              <span className="text-xs opacity-70">
                {budget === 'budget' && '< Rp 15.000'}
                {budget === 'medium' && 'Rp 15-50.000'}
                {budget === 'premium' && '> Rp 50.000'}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <h3 className="text-lg font-bold font-playfair mb-4">{t('durationTitle')}</h3>
        <div className="space-y-4">
          <input
            type="range"
            min={1}
            max={5}
            value={preference.duration}
            onChange={(e) => setPreference(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>1 {t('day')}</span>
            <span className="font-semibold text-black">{preference.duration} {t('days')}</span>
            <span>5 {t('days')}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <h3 className="text-lg font-bold font-playfair mb-4">{t('styleTitle')}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {([
            { value: 'adventure', icon: '🧗' },
            { value: 'relaxing', icon: '🌴' },
            { value: 'family', icon: '👨‍👩‍👧' },
            { value: 'culture', icon: '🏛️' },
          ] as const).map(style => (
            <button
              key={style.value}
              type="button"
              onClick={() => setPreference(prev => ({ ...prev, travelStyle: style.value }))}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                preference.travelStyle === style.value
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="block text-2xl mb-1">{style.icon}</span>
              <span className="text-sm font-medium capitalize">{style.value}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-black" />
          <div>
            <h3 className="text-lg font-bold font-playfair">{t('activityTitle')}</h3>
            <p className="text-sm text-gray-500">{t('activitySubtitle')}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {ACTIVITIES.map(activity => (
            <button
              key={activity}
              type="button"
              onClick={() => toggleActivity(activity)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                preference.activities.includes(activity)
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {activity}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || (preference.categories.length === 0 && preference.activities.length === 0)}
        className="w-full py-4 bg-black text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('generating')}
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            {t('submit')}
            <ChevronRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
