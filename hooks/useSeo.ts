import { Metadata } from 'next';

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}

export function generateSeoMetadata(config: SeoConfig): Metadata {
  const baseTitle = config.title;
  const fullTitle = `${baseTitle} | Portal Pariwisata Kebumen`;
  
  const defaultKeywords = ['Kebumen', 'Pariwisata', 'Wisata Kebumen', 'Jawa Tengah', 'Indonesia'];
  const keywords = config.keywords ? [...config.keywords, ...defaultKeywords] : defaultKeywords;

  return {
    title: fullTitle,
    description: config.description,
    keywords,
    openGraph: {
      title: fullTitle,
      description: config.description,
      type: config.type || 'website',
      images: config.image ? [{ url: config.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: config.image ? [config.image] : [],
    },
  };
}

export function generateArticleJsonLd(title: string, description: string, image: string, publishedAt: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: {
      '@type': 'Person',
      name: 'Portal Pariwisata Kebumen',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Portal Pariwisata Kebumen',
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portal Pariwisata Kebumen',
    url: 'https://kebumen.web.id',
    description: 'Portal resmi pariwisata Kabupaten Kebumen, Jawa Tengah. Temukan destinasi wisata, artikel, dan informasi perjalanan.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://kebumen.web.id/articles?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}
