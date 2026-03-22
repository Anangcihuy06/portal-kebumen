import { Destination } from './index';

export interface TravelPreference {
  categories: string[];
  budget: 'budget' | 'medium' | 'premium';
  duration: number;
  travelStyle: 'adventure' | 'relaxing' | 'family' | 'culture';
  activities: string[];
  accessibility: 'all' | 'easy' | 'moderate';
}

export interface RecommendationScore {
  destinationId: number;
  totalScore: number;
  contentScore: number;
  popularityScore: number;
  matchFactors: string[];
}

export interface RecommendationResult {
  destination: Destination;
  score: RecommendationScore;
}
