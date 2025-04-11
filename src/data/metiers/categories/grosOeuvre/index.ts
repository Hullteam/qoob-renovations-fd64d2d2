
import { MetierData } from "@/types/metierTypes";
import { maconnerieData } from "../../maconnerie";
import { coffreurData } from "../../coffreur";
import { ferrailleurData } from "../../ferrailleur";

// Export all trades in this category
export const grosOeuvreMetiers: MetierData[] = [
  maconnerieData,
  coffreurData,
  ferrailleurData
  // Additional trades to be added later:
  // terrassierData,
  // demolisseurData,
];
