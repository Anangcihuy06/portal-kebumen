import { Destination } from '@/types';
import { TravelPreference, RecommendationResult, RecommendationScore } from '@/types/recommendation';

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  'Pantai': ['pantai', 'pasir', 'ombak', 'sunset', 'beach', 'laut', 'berenang', 'surfing'],
  'Gua': ['gua', 'cave', 'stalaktit', 'stalagmit', 'underground', 'petualangan', 'caving'],
  'Bukit': ['bukit', 'hill', 'sunrise', 'sunset', 'camping', 'view', 'panorama'],
  'Air Terjun': ['air terjun', 'waterfall', 'curug', 'kolam', 'alam', 'segar'],
  'Danau': ['danau', 'lake', 'perahu', 'mancing', 'memancing', 'danau'],
  'Wisata Alam': ['alam', 'hutan', 'taman', 'natural', 'nature', 'green'],
  'Sejarah': ['sejarah', 'history', 'benteng', 'museum', 'heritage', 'kolonial'],
  'WATERPARK': ['waterpark', 'kolam renang', 'seluncur', 'air', 'water', 'bermain'],
  'Geopark': ['geopark', 'geologi', 'batuan', 'karst', 'fosil', 'educational'],
};

const ACTIVITY_KEYWORDS: Record<string, string[]> = {
  'Fotografi': ['foto', 'photo', 'instagram', 'spot foto', 'selfie', 'landscape'],
  'Berenang': ['berenang', 'swimming', 'swim', 'kolam'],
  'Berkemah': ['kemah', 'camping', 'tenda', 'camp'],
  'Hiking': ['hiking', 'daki', 'naik', 'pendakian', 'trek'],
  'Caving': ['caving', 'susur gua', 'explore gua'],
  'Mancing': ['mancing', 'fishing', 'pemancingan'],
  'Belajar': ['belajar', 'edu', 'museum', 'edukasi', 'education'],
  'Kuliner': ['kuliner', 'makan', 'food', 'warung', 'seafood'],
};

const BUDGET_RANGES = {
  budget: { min: 0, max: 15000 },
  medium: { min: 15000, max: 50000 },
  premium: { min: 50000, max: Infinity },
};

const ACCESSIBILITY_MAP: Record<string, number[]> = {
  easy: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  moderate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
};

const POPULARITY_SCORES: Record<number, number> = {
  1: 95,
  2: 90,
  3: 75,
  4: 85,
  5: 70,
  6: 80,
  7: 88,
  8: 82,
  9: 65,
  10: 60,
  11: 78,
  12: 72,
  13: 68,
  14: 66,
  15: 76,
  16: 85,
};

function parsePrice(priceString: string): number {
  const match = priceString.match(/Rp\s*([\d.]+)/);
  if (!match) {
    if (priceString.toLowerCase().includes('gratis') || priceString === 'Free') {
      return 0;
    }
    return 0;
  }
  const price = parseInt(match[1].replace(/\./g, ''), 10);
  return isNaN(price) ? 0 : price;
}

function calculateTextSimilarity(text: string, keywords: string[]): number {
  const lowerText = text.toLowerCase();
  let score = 0;
  let matchedKeywords = 0;

  for (const keyword of keywords) {
    if (lowerText.includes(keyword.toLowerCase())) {
      score += 1;
      matchedKeywords++;
    }
  }

  if (keywords.length === 0) return 0.5;
  return matchedKeywords / keywords.length;
}

function calculateContentScore(destination: Destination, preference: TravelPreference): { score: number; matchFactors: string[] } {
  let score = 0;
  const matchFactors: string[] = [];

  const categoryKeywords = preference.categories.flatMap(cat => CATEGORY_KEYWORDS[cat] || []);
  const categoryScore = calculateTextSimilarity(
    `${destination.name} ${destination.category} ${destination.description} ${destination.facilities.join(' ')}`,
    categoryKeywords
  );
  
  if (preference.categories.includes(destination.category)) {
    score += 0.4;
    matchFactors.push(`Kategori: ${destination.category}`);
  }
  score += categoryScore * 0.2;

  for (const activity of preference.activities) {
    const activityKeywords = ACTIVITY_KEYWORDS[activity] || [];
    const activityScore = calculateTextSimilarity(
      `${destination.description} ${destination.facilities.join(' ')}`,
      activityKeywords
    );
    if (activityScore > 0.3) {
      score += activityScore * 0.15;
      matchFactors.push(`Aktivitas: ${activity}`);
    }
  }

  const price = parsePrice(destination.ticketPrice);
  const budgetRange = BUDGET_RANGES[preference.budget];
  if (price >= budgetRange.min && price <= budgetRange.max) {
    score += 0.15;
    matchFactors.push('Sesuai budget');
  } else if (price < budgetRange.min) {
    score += 0.05;
  }

  if (preference.travelStyle === 'adventure') {
    if (['Gua', 'Bukit', 'Wisata Alam'].includes(destination.category)) {
      score += 0.1;
      matchFactors.push('Cocok untuk petualangan');
    }
  } else if (preference.travelStyle === 'relaxing') {
    if (['Pantai', 'Danau'].includes(destination.category)) {
      score += 0.1;
      matchFactors.push('Suasana santai');
    }
  } else if (preference.travelStyle === 'family') {
    if (destination.facilities.some(f => 
      f.toLowerCase().includes('toilet') || 
      f.toLowerCase().includes('parkir') || 
      f.toLowerCase().includes('gazebo')
    )) {
      score += 0.1;
      matchFactors.push('Ramah keluarga');
    }
  } else if (preference.travelStyle === 'culture') {
    if (['Sejarah', 'Geopark'].includes(destination.category)) {
      score += 0.1;
      matchFactors.push('Nilai budaya & sejarah');
    }
  }

  return { score: Math.min(score, 1), matchFactors };
}

function calculatePopularityScore(destinationId: number): number {
  return (POPULARITY_SCORES[destinationId] || 50) / 100;
}

function calculateDistanceScore(destination: Destination, allDestinations: Destination[]): number {
  const avgLat = allDestinations.reduce((sum, d) => sum + d.coordinates.lat, 0) / allDestinations.length;
  const avgLng = allDestinations.reduce((sum, d) => sum + d.coordinates.lng, 0) / allDestinations.length;
  
  const latDiff = Math.abs(destination.coordinates.lat - avgLat);
  const lngDiff = Math.abs(destination.coordinates.lng - avgLng);
  
  const maxDiff = 0.15;
  const distanceScore = 1 - Math.min((latDiff + lngDiff) / (2 * maxDiff), 1);
  
  return distanceScore * 0.1;
}

export function generateRecommendations(
  destinations: Destination[],
  preference: TravelPreference
): RecommendationResult[] {
  const results: RecommendationResult[] = [];

  for (const destination of destinations) {
    const contentResult = calculateContentScore(destination, preference);
    const popularityScore = calculatePopularityScore(destination.id);
    const distanceScore = calculateDistanceScore(destination, destinations);

    const totalScore = (
      contentResult.score * 0.6 +
      popularityScore * 0.3 +
      distanceScore * 0.1
    );

    const score: RecommendationScore = {
      destinationId: destination.id,
      totalScore,
      contentScore: contentResult.score,
      popularityScore,
      matchFactors: contentResult.matchFactors,
    };

    results.push({
      destination,
      score,
    });
  }

  results.sort((a, b) => b.score.totalScore - a.score.totalScore);

  return results.slice(0, 6);
}

export function getRecommendationsByCategories(
  destinations: Destination[],
  categories: string[],
  limit: number = 4
): Destination[] {
  const filtered = destinations.filter(d => categories.includes(d.category));
  return filtered.slice(0, limit);
}

export function getSimilarDestinations(
  destination: Destination,
  allDestinations: Destination[],
  limit: number = 4
): Destination[] {
  const scores: { destination: Destination; score: number }[] = [];

  for (const other of allDestinations) {
    if (other.id === destination.id) continue;

    let score = 0;
    if (other.category === destination.category) score += 0.5;
    
    const otherKeywords = `${other.description} ${other.facilities.join(' ')}`.toLowerCase();
    const destKeywords = `${destination.description} ${destination.facilities.join(' ')}`.toLowerCase();
    
    const commonWords = destKeywords.split(' ').filter(word => 
      word.length > 4 && otherKeywords.includes(word)
    ).length;
    score += Math.min(commonWords / 10, 0.3);

    const latDiff = Math.abs(other.coordinates.lat - destination.coordinates.lat);
    const lngDiff = Math.abs(other.coordinates.lng - destination.coordinates.lng);
    if (latDiff < 0.1 && lngDiff < 0.1) score += 0.2;

    scores.push({ destination: other, score });
  }

  scores.sort((a, b) => b.score - a.score);

  return scores.slice(0, limit).map(s => s.destination);
}
