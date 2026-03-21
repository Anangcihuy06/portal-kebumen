import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/routing';
import { Providers } from './providers';
import './globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: 'Portal Pariwisata Kabupaten Kebumen | Tourism Portal',
    template: '%s | Portal Pariwisata Kebumen',
  },
  description: 'Official tourism portal of Kebumen Regency, Central Java. Discover stunning natural beauty and cultural heritage.',
  keywords: ['Kebumen', 'Tourism', 'Travel', 'Indonesia', 'Beach', 'Cave', 'Geopark'],
  authors: [{ name: 'Portal Pariwisata Kebumen' }],
  openGraph: {
    title: 'Portal Pariwisata Kabupaten Kebumen',
    description: 'Official tourism portal of Kebumen Regency, Central Java',
    type: 'website',
    locale: 'id_ID',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-manrope antialiased">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
