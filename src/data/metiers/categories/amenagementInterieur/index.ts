
import { MetierData } from "@/types/metierTypes";
import { cuisinesSurMesureData } from "../../cuisinesSurMesure";
import { menuisierCuisinisteData } from "../../menuisierCuisiniste";
import { ebenisteMeubleData } from "../../ebenisteMeuble";
import { designerInteriorData } from "../../designerInterior";
import { sallesDeBainsSpecialisteData } from "../../sallesDeBainsSpecialiste";
import { meublesSurMesureData } from "../../meublesSurMesure";

// Export all trades in this category
export const amenagementInterieurMetiers: MetierData[] = [
  cuisinesSurMesureData,
  menuisierCuisinisteData,
  ebenisteMeubleData,
  designerInteriorData,
  sallesDeBainsSpecialisteData,
  meublesSurMesureData
];
