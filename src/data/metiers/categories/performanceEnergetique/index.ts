
import { MetierData } from "@/types/metierTypes";
import { systemesChauffageData } from "../../systemesChauffe";
import { isolationThermiqueData } from "../../isolationThermique";
import { isolationAcoustiqueData } from "../../isolationAcoustique";
import { materiauxIsolantsData } from "../../materiauxIsolants";

// Export all trades in this category
export const performanceEnergetiqueMetiers: MetierData[] = [
  systemesChauffageData,
  isolationThermiqueData,
  isolationAcoustiqueData,
  materiauxIsolantsData
  // Additional trades to be added later:
  // diagnostiqueurData,
  // conseillerRenovationData,
  // thermicienData,
];
