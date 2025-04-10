
// Import individual service data files
import { renovationInterieureData } from './services/renovationInterieure';
import { renovationExterieureData } from './services/renovationExterieure';
import { renovationEnergetiqueData } from './services/renovationEnergetique';
import { cuisinesSallesDeBainsData } from './services/cuisinesSallesDeBains';
import { extensionsSurelevationData } from './services/extensionsSurelevation';

// Export combined array of all services
export const serviceDetailsData = [
  renovationInterieureData,
  renovationExterieureData,
  renovationEnergetiqueData,
  cuisinesSallesDeBainsData,
  extensionsSurelevationData
];
