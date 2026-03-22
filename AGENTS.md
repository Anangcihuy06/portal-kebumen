# Portal Pariwisata Kabupaten Kebumen

## Project Overview
Portal pariwisata untuk Kabupaten Kebumen, Jawa Tengah. Next.js 14 (App Router) dengan design profesional & elegan. Base color hitam dan putih.

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

## Color Palette (CSS Variables)
```css
--primary: #000000;        /* Primary text */
--secondary: #FFFFFF;     /* Background */
--gray-light: #F5F5F5;    /* Light backgrounds */
--gray-medium: #666666;   /* Secondary text */
--gray-dark: #333333;     /* Dark text */
--accent: #E0E0E0;        /* Borders/dividers */
```

---

## Build, Lint, and Test Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint (code quality)
npm run lint

# TypeScript type checking (without building)
npx tsc --noEmit
```

### Running Single Test Files (if tests are added)
```bash
# Using Vitest (recommended for Next.js)
npx vitest run src/components/Feature.test.tsx

# Run specific test file with coverage
npx vitest run --coverage src/store/slices/articleSlice.test.ts

# Run tests in watch mode during development
npx vitest src/components/Feature.test.tsx
```

### Adding Tests (Recommended Setup)
```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Add to package.json scripts:
# "test": "vitest",
# "test:run": "vitest run",
# "test:coverage": "vitest run --coverage"
```

---

## Code Style Guidelines

### 1. TypeScript Conventions

**Types First:**
```typescript
// Define interfaces in types/index.ts
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
  coordinates: { lat: number; lng: number; };
}

// Use explicit return types for functions
function fetchDestinations(): Promise<Destination[]> { ... }
```

**Avoid `any`:**
```typescript
// Bad
const data: any = response;

// Good - use specific types
const data: Destination = response;
const data: Destination | null = response;
```

### 2. File Structure & Imports

**Path Aliases (tsconfig.json):**
```typescript
import Navbar from '@/components/layout/Navbar';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchArticlesStart } from '@/store/slices/articleSlice';
import { destinations } from '@/data/mockData';
```

**Import Order:**
1. React/Next.js imports (`'use client'`, `useEffect`, etc.)
2. Third-party imports (lucide-react, swiper, next-intl)
3. Next.js components (Image, Link, etc.)
4. Internal imports (@/components, @/store, @/hooks, @/types)
5. Relative imports (./components, ../utils)

### 3. Component Patterns

**Client Components:**
```typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { MapPin, Clock } from 'lucide-react';

interface ComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function ComponentName({ title, variant = 'primary' }: ComponentProps) {
  const t = useTranslations('section');
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Cleanup event listeners
    return () => {};
  }, []);

  return (
    <div className="...">
      {/* JSX content */}
    </div>
  );
}
```

**Props Interface Naming:** Use PascalCase and suffix with `Props`
```typescript
interface DestinationCardProps {
  destination: Destination;
  locale: string;
}
```

### 4. Redux Toolkit + Saga Patterns

**Slice Pattern (store/slices/articleSlice.ts):**
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleState } from '@/types';

const initialState: ArticleState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchArticlesStart: (state, _action: PayloadAction<{ page: number }>) => {
      state.loading = true;
      state.error = null;
    },
    // ... other reducers
  },
});

export const { /* exports */ } = articleSlice.actions;
export default articleSlice.reducer;
```

**Saga Pattern (store/sagas/articleSaga.ts):**
```typescript
import { call, put, takeLatest, delay } from 'redux-saga/effects';

function* fetchArticles(action: { type: string; payload: { page: number } }) {
  try {
    yield delay(500); // Simulate API
    // ... logic
    yield put(fetchArticlesSuccess({ articles, hasMore }));
  } catch (error) {
    yield put(fetchArticlesFailure('Failed to fetch articles'));
  }
}

export default function* articleSaga() {
  yield takeLatest(fetchArticlesStart.type, fetchArticles);
}
```

### 5. Tailwind CSS Conventions

**Class Organization:**
```typescript
// Layout first, then modifiers, then responsive
className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:p-6"

// Common patterns (defined in globals.css @layer components)
className="btn-primary"
className="section-title"
className="card-hover"
```

**Custom Fonts:**
```tsx
// Use font-playfair for headings
<h1 className="text-4xl font-bold font-playfair">Title</h1>

// Use font-manrope explicitly for body (body already uses Manrope)
<p className="font-manrope">Body text</p>
```

### 6. i18n (next-intl) Patterns

**Translations:**
```typescript
// Component usage
const t = useTranslations('hero');
const title = t('slide1.title');

// Translation keys (messages/id.json):
{
  "hero": {
    "slide1": {
      "title": "Judul Slide",
      "subtitle": "Subtitle"
    }
  }
}
```

**Locale-aware Links:**
```typescript
import { useLocale } from 'next-intl';
const locale = useLocale();
<Link href={`/${locale}/destinations`}>Destinations</Link>
```

### 7. Error Handling

**Component Error States:**
```typescript
if (loading) {
  return (
    <div className="h-80 bg-gray-200 rounded-2xl animate-pulse" />
  );
}

if (!data) {
  return (
    <div className="text-center">
      <h1>Item not found</h1>
      <Link href={`/${locale}/page`}>Back</Link>
    </div>
  );
}
```

**Saga Error Handling:**
```typescript
try {
  // async operation
} catch (error) {
  yield put(fetchFailure('Descriptive error message'));
}
```

### 8. Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSlider.tsx`, `DestinationCard.tsx` |
| Slices | camelCase | `articleSlice.ts`, `destinationSlice.ts` |
| Hooks | camelCase | `useInfiniteScroll.ts`, `useSeo.ts` |
| Types/Interfaces | PascalCase | `Destination`, `ArticleState` |
| Constants | SCREAMING_SNAKE | `ITEMS_PER_PAGE`, `MAX_IMAGE_SIZE` |
| CSS variables | kebab-case | `--gray-light`, `--overlay` |

### 9. Performance Guidelines

**Images:**
```tsx
import Image from 'next/image';

// External images must be in next.config.js remotePatterns
<Image
  src={destination.image}
  alt={destination.name}
  fill
  priority={index === 0}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Client Components:** Only add `'use client'` when the component needs:
- useState / useReducer
- useEffect
- Browser APIs
- Event listeners
- Redux hooks (useAppDispatch, useAppSelector)

### 10. SEO Requirements

**Every page must export metadata:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - Portal Pariwisata Kebumen',
  description: 'Page description here',
};
```

**JSON-LD for articles:**
```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  image: article.image,
  author: { '@type': 'Person', name: 'Admin' },
  publisher: { '@type': 'Organization', name: 'Portal Pariwisata Kebumen' },
  datePublished: article.publishedAt,
};
```

---

## Folder Structure
```
portal-kebumen/
├── app/[locale]/          # Pages with i18n routing
├── components/            # Reusable components
│   ├── layout/           # Navbar, Footer, LanguageSwitcher
│   ├── home/             # Home page components
│   └── shared/           # Shared UI components
├── store/                 # Redux Toolkit + Saga
│   ├── slices/           # Redux slices
│   └── sagas/            # Redux sagas
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript interfaces
├── messages/              # i18n translations (id.json, en.json)
├── data/                  # Mock data
└── i18n/                  # next-intl configuration
```

---

## Common Development Tasks

**Add a new destination:**
1. Add to `data/mockData.ts`
2. Add translation keys to `messages/id.json` and `messages/en.json`
3. Create detail page at `app/[locale]/destinations/[slug]/page.tsx`

**Add a new translation:**
1. Add key to `messages/id.json`
2. Add key to `messages/en.json`
3. Use in component: `const t = useTranslations('section'); t('key')`

**Add a new Redux feature:**
1. Define types in `types/index.ts`
2. Create slice in `store/slices/[feature]Slice.ts`
3. Create saga in `store/sagas/[feature]Saga.ts`
4. Register in `store/sagas/index.ts`
5. Export actions and use in components
