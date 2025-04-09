
// Import des données spécifiques à chaque métier
import { cuisinierData } from './metiers/cuisinierData';
import { menuisierCuisinisteData } from './metiers/menuisierCuisiniste';
import { plombierSanitaireData } from './metiers/plombierSanitaire';
import { electricienData } from './metiers/electricien';
import { carreleurData } from './metiers/carreleur';
import { ebenisteMeubleData } from './metiers/ebenisteMeuble';
import { designerInteriorData } from './metiers/designerInterior';
import { sallesDeBainsSpecialisteData } from './metiers/sallesDeBainsSpecialiste';
import { cuisinesSurMesureData } from './metiers/cuisinesSurMesure';
import { peintureData } from './metiers/peinture';
import { solsData } from './metiers/sols';
import { plafondsData } from './metiers/plafonds';
import { cloisonsData } from './metiers/cloisons';
import { meublesSurMesureData } from './metiers/meublesSurMesure';

// Import des données des métiers de rénovation extérieure
import { facadesData } from './metiers/facades';
import { toituresData } from './metiers/toitures';
import { terrassesData } from './metiers/terrasses';
import { amenagementsExterieursData } from './metiers/amenagements-exterieurs';

// Import des données des métiers de rénovation énergétique
import { systemesChauffageData } from './metiers/systemesChauffe';
import { isolationThermiqueData } from './metiers/isolationThermique';
import { isolationAcoustiqueData } from './metiers/isolationAcoustique';
import { materiauxIsolantsData } from './metiers/materiauxIsolants';

// Export combiné de tous les métiers
export const metierDetailsData = [
  // Métiers de rénovation intérieure
  cuisinierData,
  menuisierCuisinisteData,
  plombierSanitaireData,
  electricienData,
  carreleurData,
  ebenisteMeubleData,
  designerInteriorData,
  sallesDeBainsSpecialisteData,
  cuisinesSurMesureData,
  meublesSurMesureData,
  peintureData,
  solsData,
  plafondsData,
  cloisonsData,
  
  // Métiers de rénovation extérieure
  facadesData,
  toituresData,
  terrassesData,
  amenagementsExterieursData,
  
  // Métiers de rénovation énergétique
  systemesChauffageData,
  isolationThermiqueData,
  isolationAcoustiqueData,
  materiauxIsolantsData
];
