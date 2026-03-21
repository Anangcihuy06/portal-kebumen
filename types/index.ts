export interface Destination {
  id: number;
  name: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  facilities: string[];
  ticketPrice: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

export interface ArticleState {
  articles: Article[];
  currentArticle: Article | null;
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

export interface DestinationState {
  destinations: Destination[];
  featured: Destination[];
  currentDestination: Destination | null;
  loading: boolean;
  error: string | null;
}
