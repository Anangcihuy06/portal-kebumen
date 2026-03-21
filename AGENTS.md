# Portal Pariwisata Kabupaten Kebumen

## Project Overview
Portal pariwisata untuk Kabupaten Kebumen, Jawa Tengah. Menggunakan design profesional & elegan dengan referensi slider dari indonesia.travel. Base color hitam dan putih.

## Tech Stack
- **Framework:** Next.js 14 (App Router) - TypeScript
- **State Management:** Redux Toolkit + Redux Saga
- **Styling:** Tailwind CSS + Custom CSS
- **Slider:** Swiper.js
- **SEO:** Next.js Metadata API + JSON-LD Schema
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Fonts:** Manrope + Playfair Display (Google Fonts)
- **Internationalization:** next-intl (Indonesian & English)

## Color Palette
```css
--primary: #000000          /* Hitam - Primary */
--secondary: #FFFFFF       /* Putih - Background */
--gray-light: #F5F5F5      /* Abu terang */
--gray-medium: #666666     /* Abu medium */
--gray-dark: #333333       /* Abu gelap */
--accent: #E0E0E0          /* Accent gray */
--text-primary: #000000     /* Text hitam */
--text-secondary: #666666  /* Text abu */
--overlay: rgba(0,0,0,0.5) /* Overlay slider */
```

## Folder Structure
```
portal-kebumen/
├── app/
│   └── [locale]/
│       ├── layout.tsx              # Root layout with Redux Provider
│       ├── page.tsx               # Homepage
│       ├── globals.css            # Global styles
│       ├── providers.tsx          # Redux Provider
│       ├── destinations/
│       │   ├── page.tsx          # Destinations page (server)
│       │   └── DestinationsContent.tsx # Destinations content (client)
│       ├── articles/
│       │   ├── page.tsx          # Articles page (server)
│       │   ├── ArticlesContent.tsx # Articles content (client)
│       │   └── [slug]/
│       │       └── page.tsx       # Article detail (client)
│       └── about/
│           └── page.tsx           # About page (server)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation with language switcher
│   │   ├── Footer.tsx           # Footer
│   │   └── LanguageSwitcher.tsx # Language switcher
│   ├── home/
│   │   ├── HeroSlider.tsx       # Hero slider
│   │   ├── FeaturedDestinations.tsx
│   │   ├── LatestArticles.tsx
│   │   └── StatsSection.tsx
│   └── shared/
│       ├── ArticleCard.tsx
│       ├── DestinationCard.tsx
│       └── LoadMore.tsx
├── store/
│   ├── index.ts
│   ├── hooks.ts
│   ├── slices/
│   │   ├── articleSlice.ts
│   │   └── destinationSlice.ts
│   └── sagas/
│       ├── index.ts
│       ├── articleSaga.ts
│       └── destinationSaga.ts
├── hooks/
│   ├── useInfiniteScroll.ts
│   └── useSeo.ts
├── i18n/
│   ├── routing.ts       # Locale routing config
│   └── request.ts      # Request config for next-intl
├── messages/
│   ├── id.json         # Indonesian translations
│   └── en.json         # English translations
├── services/
│   └── api.ts
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
└── middleware.ts       # next-intl middleware
```

## Destinations Data
1. **Pantai Logending** - Beach dengan sejarah benteng Jepang/Belanda, muara Sungai Bodo
2. **Gua Jatijajar** - Gua stalaktit-stalagmit, legenda Raden Kamandaka, 4 mata air
3. **Gua Petruk** - Cave adventure, 2km panjang, 365 gua di kawasan karst
4. **Pantai Karang Bolong** - Beach dengan goa burung walet
5. **Danau Sempor** - Danau di kaki Gunung Slamet
6. **Songking Waterpark** - Waterpark family-friendly

## Image Sources (Eksternal)
- Unsplash: `https://images.unsplash.com/photo-xxx`
- Wikimedia Commons
- Google Maps embeds
- Instagram embeds

## Features

### 1. Multi-Language (Indonesian & English)
- Bahasa Indonesia (default) dan English
- Locale prefix di URL: `/id/` dan `/en/`
- Language switcher di Navbar
- Semua konten UI sudah di-translate

### 2. Hero Slider (Referensi: indonesia.travel)
- Full-width viewport height (100vh)
- Swiper.js dengan autoplay (5 detik)
- Gradient overlay hitam
- Navigation dots + arrows
- Text overlay dengan animasi fade-in
- CTA button

### 3. SEO Dynamic Titles
- Homepage: `"Portal Pariwisata Kabupaten Kebumen | Wisata & Travel"`
- Destinations: `"Destinasi Wisata Kebumen | [Nama Destinasi]"`
- Articles: `"Artikel Kebumen | [Judul Artikel]"`
- Detail: `"[Judul] - Portal Pariwisata Kebumen"`

### 4. Auto Loadmore (Infinite Scroll)
- Intersection Observer API
- Load 6 items per scroll
- Loading skeleton animation
- Smooth transition

### 5. Redux Toolkit + Saga Pattern
```typescript
// articleSlice.ts
interface ArticleState {
  articles: Article[];
  currentArticle: Article | null;
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

// destinationSlice.ts
interface DestinationState {
  destinations: Destination[];
  featured: Destination[];
  loading: boolean;
  error: string | null;
}
```

## Pages Structure

| Page | Route (ID) | Route (EN) | Title Template |
|------|------------|------------|---------------|
| Homepage | `/id` | `/en` | Portal Pariwisata Kebumen |
| Destinations | `/id/destinations` | `/en/destinations` | Destinations |
| Articles | `/id/articles` | `/en/articles` | Articles |
| Article Detail | `/id/articles/[slug]` | `/en/articles/[slug]` | [Title] |
| About | `/id/about` | `/en/about` | About |

## JSON-LD Schema
 Setiap article page harus include:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Judul Artikel",
  "description": "Deskripsi",
  "image": "URL gambar",
  "author": { "@type": "Person", "name": "Admin" },
  "publisher": { "@type": "Organization", "name": "Portal Pariwisata Kebumen" },
  "datePublished": "2026-03-21"
}
```

## Implementation Phases

### Phase 1: Setup Project
- [x] Initialize Next.js + TypeScript + Tailwind
- [x] Install dependencies (@reduxjs/toolkit, react-redux, redux-saga, axios, lucide-react, swiper)
- [x] Setup folder structure
- [x] Create type definitions

### Phase 2: Redux Setup
- [x] Create store configuration
- [x] Create slices (article, destination)
- [x] Create sagas
- [x] Create typed hooks
- [x] Setup Provider in layout

### Phase 3: Layout Components
- [x] Create Navbar (responsive, transparent → white on scroll)
- [x] Create Footer
- [x] Setup Google Fonts
- [x] Global CSS variables
- [x] Add Language Switcher

### Phase 4: Home Components
- [x] HeroSlider with Swiper (referensi indonesia.travel)
- [x] FeaturedDestinations
- [x] LatestArticles
- [x] StatsSection
- [x] Homepage layout

### Phase 5: Page Development
- [x] Destinations page
- [x] Articles page with loadmore
- [x] Article detail with dynamic route
- [x] About page
- [x] SEO metadata each page

### Phase 6: Multi-Language
- [x] Setup next-intl
- [x] Create translation files (id.json, en.json)
- [x] Configure middleware
- [x] Update all components for i18n
- [x] Language switcher in Navbar

### Phase 7: Polish
- [x] Animations
- [x] Loading states
- [x] Mobile responsiveness
- [x] SEO validation

## Important Notes
1. Images: Gunakan URL eksternal dari Unsplash/Wikimedia untuk demo
2. API: Menggunakan mock data untuk sementara
3. SEO: Setiap page gunakan Metadata API untuk dynamic titles
4. Performance: Gunakan Next.js Image optimization, lazy loading
5. Fonts: Manrope untuk body, Playfair Display untuk headlines
6. i18n: Semua teks UI menggunakan next-intl dengan translation files

## Commands
```bash
# Install dependencies
npm install @reduxjs/toolkit react-redux redux-saga axios lucide-react swiper next-intl

# Run development
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## URLs After Multi-Language Setup
- Indonesian: http://localhost:3000/id
- English: http://localhost:3000/en

 Semua page akan redirect ke locale yang sesuai.
