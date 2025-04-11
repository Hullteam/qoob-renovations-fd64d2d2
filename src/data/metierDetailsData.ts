
// Import des données spécifiques à chaque métier
import { cuisinesSurMesureData } from './metiers/cuisinesSurMesure';
import { menuisierCuisinisteData } from './metiers/menuisierCuisiniste';
import { plombierSanitaireData } from './metiers/plombierSanitaire';
import { electricienData } from './metiers/electricien';
import { carreleurData } from './metiers/carreleur';
import { ebenisteMeubleData } from './metiers/ebenisteMeuble';
import { designerInteriorData } from './metiers/designerInterior';
import { sallesDeBainsSpecialisteData } from './metiers/sallesDeBainsSpecialiste';
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

// Import des données des métiers du gros œuvre
import { maconnerieData } from './metiers/maconnerie';

// Définition des catégories principales de métiers
export const metierCategories = [
  {
    id: "gros-oeuvre",
    name: "Gros œuvre",
    icon: "Building", // Nom de l'icône Lucide
    description: "Fondations, structures porteuses et travaux de terrassement"
  },
  {
    id: "charpente-couverture",
    name: "Charpente & Couverture",
    icon: "Home",
    description: "Charpentes, toitures et structures de couverture"
  },
  {
    id: "second-oeuvre-structure",
    name: "Second œuvre – Structure & cloisonnement",
    icon: "Layers",
    description: "Cloisons, plâtrerie et isolation des murs et plafonds"
  },
  {
    id: "second-oeuvre-reseaux",
    name: "Second œuvre – Réseaux & fluides",
    icon: "Cable",
    description: "Électricité, plomberie, chauffage et systèmes de ventilation"
  },
  {
    id: "amenagement-interieur",
    name: "Aménagement intérieur",
    icon: "Sofa",
    description: "Cuisines, salles de bains et menuiserie d'intérieur"
  },
  {
    id: "finitions",
    name: "Finitions",
    icon: "PaintBucket",
    description: "Carrelage, peinture, revêtements de sol et muraux"
  },
  {
    id: "menuiserie-serrurerie",
    name: "Menuiserie & serrurerie",
    icon: "Lock",
    description: "Menuiserie bois/alu/PVC et serrurerie métallique"
  },
  {
    id: "exterieur-paysager",
    name: "Extérieur et aménagement paysager",
    icon: "Sprout",
    description: "Aménagement de jardin, terrasses et accès extérieurs"
  },
  {
    id: "performance-energetique",
    name: "Performance énergétique & environnement",
    icon: "Leaf",
    description: "Diagnostics, audits et solutions d'efficacité énergétique"
  },
  {
    id: "pilotage-conseil",
    name: "Pilotage, conseil & maîtrise d'œuvre",
    icon: "ClipboardList",
    description: "Conception, coordination et suivi des projets de construction"
  }
];

// Export combiné de tous les métiers actuellement disponibles
export const metierDetailsData = [
  // Métiers de rénovation intérieure
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
  materiauxIsolantsData,
  
  // Métiers du gros œuvre
  maconnerieData,
  
  // Note: Les imports ci-dessous ont été commentés car les fichiers n'existent pas encore
  // À décommenter au fur et à mesure de leur création
  /*
  // Métiers du gros œuvre
  coffreurData,
  ferrailleurData,
  terrassierData,
  demolisseurData,
  
  // Métiers de charpente & couverture
  charpentierBoisData,
  charpentierMetalliqueData,
  couvreurData,
  zingueurData,
  etancheurData,
  
  // Métiers de second œuvre - structure
  platrierPlaquisteData,
  poseurCloisonsData,
  monteurFauxPlafondsData,
  poseurIsolantsData,
  
  // Métiers de réseaux & fluides
  electricienDomotiqueData,
  chauffagisteData,
  climaticienData,
  installateurPacData,
  
  // Métiers de menuiserie & serrurerie
  menuisierBoisData,
  menuisierAluData,
  poseurPortesData,
  serrurierMetallierData,
  
  // Métiers d'extérieur
  paysagisteData,
  poseurTerrasse,
  poseurCloture,
  
  // Métiers de performance énergétique
  diagnostiqueurData,
  conseillerRenovationData,
  thermicienData,
  
  // Métiers de pilotage & conseil
  architecteData,
  maitreDoeuvreData,
  conducteurTravauxData,
  economisteConstructionData
  */
];

// Fonction pour obtenir les métiers par catégorie
export const getMetiersByCategory = (categoryId: string) => {
  return metierDetailsData.filter(metier => metier.categoryId === categoryId);
};

// Fonction pour obtenir tous les métiers d'une catégorie principale
export const getAllMetiersByCategoryName = (categoryName: string) => {
  const category = metierCategories.find(cat => cat.name === categoryName);
  if (!category) return [];
  return metierDetailsData.filter(metier => metier.categoryId === category.id);
};
