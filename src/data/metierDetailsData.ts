
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
import { coffreurData } from './metiers/coffreur';
import { ferrailleurData } from './metiers/ferrailleur';

// Import des métiers de charpente & couverture
import { couvreurData } from './metiers/couvreur';
import { charpentierBoisData } from './metiers/charpentierBois';

// Import des métiers de second œuvre - structure
import { platrierPlaquisteData } from './metiers/platrierPlaquiste';

// Import des métiers de second œuvre - réseaux et fluides
import { chauffagisteData } from './metiers/chauffagiste';

// Import des métiers de menuiserie & serrurerie
import { menuisierBoisData } from './metiers/menuisierBois';

// Type définition pour uniformiser les données des métiers
export interface MetierData {
  id: string;
  categoryId: string;
  serviceSlug: string;
  serviceName: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  presentationTitle: string;
  presentationText: string[];
  presentationImage: string;
  keyPoints: string[];
  expertises: {
    title: string;
    description: string;
    features: string[];
  }[];
  workProcess: {
    title: string;
    description: string;
    duration?: string;
    step?: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedMetiers: {
    id: string;
    name: string;
  }[];
}

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

// S'assurer que toutes les données de métier ont la propriété categoryId
// et conversion des formats inconsistants si nécessaire
const ensureMetierDataFormat = (metier: any): MetierData => {
  // S'assurer que presentationText est toujours un tableau
  const presentationText = Array.isArray(metier.presentationText) 
    ? metier.presentationText 
    : [metier.presentationText];
  
  // S'assurer que les expertises ont toujours le bon format
  const expertises = metier.expertises.map((expertise: any) => ({
    title: expertise.title,
    description: expertise.description,
    features: expertise.features || []
  }));
  
  // S'assurer que relatedMetiers a toujours le bon format
  const relatedMetiers = metier.relatedMetiers.map((related: any) => ({
    id: related.id,
    name: related.name || related.title || ""
  }));
  
  return {
    ...metier,
    categoryId: metier.categoryId || "non-categorise",
    presentationText,
    expertises,
    relatedMetiers
  };
};

// Export combiné de tous les métiers actuellement disponibles
export const metierDetailsData: MetierData[] = [
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
  coffreurData,
  ferrailleurData,
  
  // Métiers de charpente & couverture
  couvreurData,
  charpentierBoisData,
  
  // Métiers de second œuvre - structure
  platrierPlaquisteData,
  
  // Métiers de second œuvre - réseaux et fluides
  chauffagisteData,
  
  // Métiers de menuiserie & serrurerie
  menuisierBoisData
  
  // Note: Les imports ci-dessous ont été commentés car les fichiers n'existent pas encore
  // À décommenter au fur et à mesure de leur création
  /*
  // Métiers du gros œuvre
  terrassierData,
  demolisseurData,
  
  // Métiers de charpente & couverture
  charpentierMetalliqueData,
  zingueurData,
  etancheurData,
  
  // Métiers de second œuvre - structure
  poseurCloisonsData,
  monteurFauxPlafondsData,
  poseurIsolantsData,
  
  // Métiers de réseaux & fluides
  electricienDomotiqueData,
  climaticienData,
  installateurPacData,
  
  // Métiers de menuiserie & serrurerie
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
].map(ensureMetierDataFormat);

// Fonction pour obtenir les métiers par catégorie
export const getMetiersByCategory = (categoryId: string): MetierData[] => {
  return metierDetailsData.filter(metier => metier.categoryId === categoryId);
};

// Fonction pour obtenir tous les métiers d'une catégorie principale
export const getAllMetiersByCategoryName = (categoryName: string): MetierData[] => {
  const category = metierCategories.find(cat => cat.name === categoryName);
  if (!category) return [];
  return metierDetailsData.filter(metier => metier.categoryId === category.id);
};
