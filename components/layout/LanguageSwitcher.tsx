'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'id', label: 'ID', name: 'Indonesia' },
  { code: 'en', label: 'EN', name: 'English' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    startTransition(() => {
      router.replace(`/${newLocale}/${currentPath}`);
    });
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-full border border-white/30 hover:border-white/60 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </button>
      
      <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            disabled={isPending || locale === lang.code}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
              locale === lang.code ? 'font-semibold text-black' : 'text-gray-700'
            }`}
          >
            <span>{lang.name}</span>
            <span className="text-xs text-gray-500">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
