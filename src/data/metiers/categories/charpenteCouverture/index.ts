
import { MetierData } from "@/types/metierTypes";
import { couvreurData } from "../../couvreur";
import { charpentierBoisData } from "../../charpentierBois";

// Export all trades in this category
export const charpenteCouvertureMetiers: MetierData[] = [
  couvreurData,
  charpentierBoisData
  // Additional trades to be added later:
  // charpentierMetalliqueData,
  // zingueurData,
  // etancheurData,
];
