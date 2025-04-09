
import { City, Department, mainLocation, serviceRadius } from './types';
import { lotEtGaronne } from './lotEtGaronne';
import { lot } from './lot';
import { dordogne } from './dordogne';
import { tarnEtGaronne } from './tarnEtGaronne';
import { gers } from './gers';
import { gironde } from './gironde';
import { interventionFAQs } from './faq';

// Combined list of all departments
export const departments: Department[] = [
  lotEtGaronne,
  lot,
  dordogne,
  tarnEtGaronne,
  gers,
  gironde
];

// Re-export individual departments and other data
export {
  mainLocation,
  serviceRadius,
  lotEtGaronne,
  lot,
  dordogne,
  tarnEtGaronne,
  gers,
  gironde,
  interventionFAQs
};

// Compute all cities once for better performance
export const allCities = departments.flatMap(dept => dept.cities);

// Major cities for highlighting
export const majorCities = allCities.filter(city => city.isMajor);
