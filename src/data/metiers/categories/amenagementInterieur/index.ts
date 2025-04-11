
import { MetierData } from "@/types/metierTypes";
import { cuisinesSurMesureData } from "../../cuisinesSurMesure";
import { menuisierCuisinisteData } from "../../menuisierCuisiniste";
import { ebenisteMeubleData } from "../../ebenisteMeuble";
import { designerInteriorData } from "../../designerInterior";
import { sallesDeBainsSpecialisteData } from "../../sallesDeBainsSpecialiste";
import { meublesSurMesureData } from "../../meublesSurMesure";

// Assurons-nous que chaque métier a la propriété categoryId
const categorizeCuisinesData = {...cuisinesSurMesureData, categoryId: "amenagement-interieur"};
const categorizeMenuisierCuisinisteData = {...menuisierCuisinisteData, categoryId: "amenagement-interieur"};
const categorizeEbenisteData = {...ebenisteMeubleData, categoryId: "amenagement-interieur"};
const categorizeDesignerData = {...designerInteriorData, categoryId: "amenagement-interieur"};
const categorizeSallesBainsData = {...sallesDeBainsSpecialisteData, categoryId: "amenagement-interieur"};
const categorizeMeublesData = {...meublesSurMesureData, categoryId: "amenagement-interieur"};

// Export all trades in this category
export const amenagementInterieurMetiers: MetierData[] = [
  categorizeCuisinesData,
  categorizeMenuisierCuisinisteData,
  categorizeEbenisteData,
  categorizeDesignerData,
  categorizeSallesBainsData,
  categorizeMeublesData
];
