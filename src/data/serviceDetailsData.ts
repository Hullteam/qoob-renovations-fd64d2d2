
// Import individual service data files
import { renovationInterieureData } from './services/renovationInterieure';
import { renovationExterieureData } from './services/renovationExterieure';
import { isolationData } from './services/isolation';
import { cuisinesSallesDeBainsData } from './services/cuisinesSallesDeBains';

// Export combined array of all services
export const serviceDetailsData = [
  renovationInterieureData,
  renovationExterieureData,
  isolationData,
  cuisinesSallesDeBainsData
];
