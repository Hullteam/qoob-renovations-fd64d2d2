
import { MetierData } from "@/types/metierTypes";
import { electricienData } from "../../electricien";
import { plombierSanitaireData } from "../../plombierSanitaire";
import { chauffagisteData } from "../../chauffagiste";

// Export all trades in this category
export const secondOeuvreReseauxMetiers: MetierData[] = [
  electricienData,
  plombierSanitaireData,
  chauffagisteData
  // Additional trades to be added later:
  // electricienDomotiqueData,
  // climaticienData,
  // installateurPacData,
];
