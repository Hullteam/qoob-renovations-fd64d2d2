
import { MetierData } from "@/types/metierTypes";
import { electricienData } from "../../electricien";
import { plombierSanitaireData } from "../../plombierSanitaire";
import { chauffagisteData } from "../../chauffagiste";

// Assurons-nous que chaque métier a la propriété categoryId
const categorizeElectricienData = {...electricienData, categoryId: "second-oeuvre-reseaux"};
const categorizePlombierData = {...plombierSanitaireData, categoryId: "second-oeuvre-reseaux"};
const categorizeChauffagisteData = {...chauffagisteData, categoryId: "second-oeuvre-reseaux"};

// Export all trades in this category
export const secondOeuvreReseauxMetiers: MetierData[] = [
  categorizeElectricienData,
  categorizePlombierData,
  categorizeChauffagisteData
  // Additional trades to be added later:
  // electricienDomotiqueData,
  // climaticienData,
  // installateurPacData,
];
