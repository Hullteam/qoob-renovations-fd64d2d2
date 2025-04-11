
import { MetierData } from "@/types/metierTypes";
import { peintureData } from "../../peinture";
import { solsData } from "../../sols";
import { plafondsData } from "../../plafonds";
import { cloisonsData } from "../../cloisons";
import { carreleurData } from "../../carreleur";

// Export all trades in this category
export const finitionsMetiers: MetierData[] = [
  peintureData,
  solsData,
  plafondsData,
  cloisonsData,
  carreleurData
];
