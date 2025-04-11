
import { MetierData } from "@/types/metierTypes";
import { facadesData } from "../../facades";
import { toituresData } from "../../toitures";
import { terrassesData } from "../../terrasses";
import { amenagementsExterieursData } from "../../amenagements-exterieurs";

// Assurons-nous que chaque métier a la propriété categoryId
const categorizeFacadesData = {...facadesData, categoryId: "exterieur-paysager"};
const categorizeToituresData = {...toituresData, categoryId: "exterieur-paysager"};
const categorizeTerrassesData = {...terrassesData, categoryId: "exterieur-paysager"};
const categorizeAmenagementsExterieursData = {...amenagementsExterieursData, categoryId: "exterieur-paysager"};

// Export all trades in this category
export const exterieurPaysagerMetiers: MetierData[] = [
  categorizeFacadesData,
  categorizeToituresData,
  categorizeTerrassesData,
  categorizeAmenagementsExterieursData
  // Additional trades to be added later:
  // paysagisteData,
  // poseurTerrasseData,
  // poseurClotureData,
];
