
import { MetierData } from "@/types/metierTypes";
import { facadesData } from "../../facades";
import { toituresData } from "../../toitures";
import { terrassesData } from "../../terrasses";
import { amenagementsExterieursData } from "../../amenagements-exterieurs";

// Export all trades in this category
export const exterieurPaysagerMetiers: MetierData[] = [
  facadesData,
  toituresData,
  terrassesData,
  amenagementsExterieursData
  // Additional trades to be added later:
  // paysagisteData,
  // poseurTerrasseData,
  // poseurClotureData,
];
