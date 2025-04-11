
import { MetierData } from "@/types/metierTypes";
import { electricienData } from "../../electricien";
import { plombierSanitaireData } from "../../plombierSanitaire";
import { chauffagisteData } from "../../chauffagiste";

// Assurons-nous que chaque métier a la propriété categoryId et le bon serviceSlug
const categorizeElectricienData = {
  ...electricienData, 
  categoryId: "second-oeuvre-reseaux",
  serviceSlug: "renovation-interieure"  // Mise à jour pour l'inclure dans rénovation intérieure
};
const categorizePlombierData = {
  ...plombierSanitaireData, 
  categoryId: "second-oeuvre-reseaux",
  serviceSlug: "renovation-interieure"  // Mise à jour pour l'inclure dans rénovation intérieure
};
const categorizeChauffagisteData = {
  ...chauffagisteData, 
  categoryId: "second-oeuvre-reseaux"
};

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
