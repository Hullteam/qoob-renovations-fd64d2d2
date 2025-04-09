
import { Department } from './types';

export const lot: Department = {
  name: "Lot",
  code: "46",
  description: "Notre équipe intervient dans les communes du Lot situées dans notre rayon d'action de 50km.",
  cities: [
    { name: "Cahors", postalCode: "46000", department: "Lot", isMajor: true },
    { name: "Figeac", postalCode: "46100", department: "Lot", isMajor: true },
    { name: "Gourdon", postalCode: "46300", department: "Lot", isMajor: true },
    { name: "Puy-l'Évêque", postalCode: "46700", department: "Lot" },
    { name: "Prayssac", postalCode: "46220", department: "Lot" },
    { name: "Luzech", postalCode: "46140", department: "Lot" },
    { name: "Castelfranc", postalCode: "46140", department: "Lot" },
    { name: "Duravel", postalCode: "46700", department: "Lot" },
    { name: "Montcuq", postalCode: "46800", department: "Lot" },
    { name: "Lachapelle-Auzac", postalCode: "46200", department: "Lot" },
    // Ajout de communes autour de Cahors
    { name: "Pradines", postalCode: "46090", department: "Lot" },
    { name: "Mercuès", postalCode: "46090", department: "Lot" },
    { name: "Espère", postalCode: "46090", department: "Lot" },
    { name: "Labastide-Marnhac", postalCode: "46090", department: "Lot" },
    { name: "Le Montat", postalCode: "46090", department: "Lot" },
    { name: "Arcambal", postalCode: "46090", department: "Lot" },
    { name: "Flaujac-Poujols", postalCode: "46090", department: "Lot" },
    { name: "Douelle", postalCode: "46140", department: "Lot" },
    // Ajout de communes autour de Figeac
    { name: "Capdenac-Gare", postalCode: "12700", department: "Aveyron" },
    { name: "Bagnac-sur-Célé", postalCode: "46270", department: "Lot" },
    { name: "Planioles", postalCode: "46100", department: "Lot" },
    { name: "Camboulit", postalCode: "46100", department: "Lot" },
    { name: "Lissac-et-Mouret", postalCode: "46100", department: "Lot" },
    { name: "Cambes", postalCode: "46100", department: "Lot" },
    { name: "Viazac", postalCode: "46100", department: "Lot" },
    // Ajout de communes autour de Gourdon
    { name: "Payrignac", postalCode: "46300", department: "Lot" },
    { name: "Le Vigan", postalCode: "46300", department: "Lot" },
    { name: "Saint-Cirq-Madelon", postalCode: "46300", department: "Lot" },
    { name: "Saint-Clair", postalCode: "46300", department: "Lot" },
    { name: "Milhac", postalCode: "46300", department: "Lot" },
    { name: "Salviac", postalCode: "46340", department: "Lot" },
    { name: "Souillac", postalCode: "46200", department: "Lot" },
    { name: "Martel", postalCode: "46600", department: "Lot" }
  ]
};
