
import { MetierData } from "@/types/metierTypes";
import { systemesChauffageData } from "../../systemesChauffe";
import { isolationThermiqueData } from "../../isolationThermique";
import { isolationAcoustiqueData } from "../../isolationAcoustique";
import { materiauxIsolantsData } from "../../materiauxIsolants";

// Assurons-nous que chaque métier a la propriété categoryId
const categorizeSystemesChauffageData = {...systemesChauffageData, categoryId: "performance-energetique"};
const categorizeIsolationThermiqueData = {...isolationThermiqueData, categoryId: "performance-energetique"};
const categorizeIsolationAcoustiqueData = {...isolationAcoustiqueData, categoryId: "performance-energetique"};
const categorizeIsolantsData = {...materiauxIsolantsData, categoryId: "performance-energetique"};

// Export all trades in this category
export const performanceEnergetiqueMetiers: MetierData[] = [
  categorizeSystemesChauffageData,
  categorizeIsolationThermiqueData,
  categorizeIsolationAcoustiqueData,
  categorizeIsolantsData
  // Additional trades to be added later:
  // diagnostiqueurData,
  // conseillerRenovationData,
  // thermicienData,
];
