
import { MetierData } from "@/types/metierTypes";
import { peintureData } from "../../peinture";
import { solsData } from "../../sols";
import { plafondsData } from "../../plafonds";
import { cloisonsData } from "../../cloisons";
import { carreleurData } from "../../carreleur";

// Assurons-nous que chaque métier a la propriété categoryId
const categorizePeintureData = {...peintureData, categoryId: "finitions"};
const categorizeSolsData = {...solsData, categoryId: "finitions"};
const categorizePlafondsData = {...plafondsData, categoryId: "finitions"};
const categorizeCloisonsData = {...cloisonsData, categoryId: "finitions"};
const categorizeCarreleurData = {...carreleurData, categoryId: "finitions"};

// Export all trades in this category
export const finitionsMetiers: MetierData[] = [
  categorizePeintureData,
  categorizeSolsData,
  categorizePlafondsData,
  categorizeCloisonsData,
  categorizeCarreleurData
];
