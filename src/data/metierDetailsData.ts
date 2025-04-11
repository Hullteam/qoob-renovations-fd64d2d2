
import { MetierData } from "@/types/metierTypes";
import { metierCategories, allMetiers } from "./metiers/categories";

// S'assurer que toutes les données de métier ont la propriété categoryId
// et conversion des formats inconsistants si nécessaire
const ensureMetierDataFormat = (metier: any): MetierData => {
  // S'assurer que presentationText est toujours un tableau
  const presentationText = Array.isArray(metier.presentationText) 
    ? metier.presentationText 
    : [metier.presentationText];
  
  // S'assurer que les expertises ont toujours le bon format
  const expertises = metier.expertises.map((expertise: any) => ({
    title: expertise.title,
    description: expertise.description,
    features: expertise.features || []
  }));
  
  // S'assurer que relatedMetiers a toujours le bon format
  const relatedMetiers = metier.relatedMetiers.map((related: any) => ({
    id: related.id,
    name: related.name || related.title || ""
  }));
  
  return {
    ...metier,
    categoryId: metier.categoryId || "non-categorise",
    presentationText,
    expertises,
    relatedMetiers
  };
};

// Export combiné de tous les métiers actuellement disponibles
export const metierDetailsData: MetierData[] = allMetiers.map(ensureMetierDataFormat);

// Fonction pour obtenir les métiers par catégorie
export const getMetiersByCategory = (categoryId: string): MetierData[] => {
  return metierDetailsData.filter(metier => metier.categoryId === categoryId);
};

// Fonction pour obtenir tous les métiers d'une catégorie principale
export const getAllMetiersByCategoryName = (categoryName: string): MetierData[] => {
  const category = metierCategories.find(cat => cat.name === categoryName);
  if (!category) return [];
  return metierDetailsData.filter(metier => metier.categoryId === category.id);
};

export { metierCategories };
