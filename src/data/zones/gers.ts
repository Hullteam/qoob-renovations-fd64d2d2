
import { Department } from './types';

export const gers: Department = {
  name: "Gers",
  code: "32",
  description: "Une partie du département du Gers est également couverte par nos services.",
  cities: [
    { name: "Condom", postalCode: "32100", department: "Gers", isMajor: true },
    { name: "Auch", postalCode: "32000", department: "Gers", isMajor: true },
    { name: "Lectoure", postalCode: "32700", department: "Gers" },
    { name: "Fleurance", postalCode: "32500", department: "Gers" },
    { name: "Eauze", postalCode: "32800", department: "Gers" },
    { name: "Miradoux", postalCode: "32340", department: "Gers" },
    { name: "Saint-Clar", postalCode: "32380", department: "Gers" },
    { name: "La Romieu", postalCode: "32480", department: "Gers" },
    // Ajout de communes autour de Condom
    { name: "Valence-sur-Baïse", postalCode: "32310", department: "Gers" },
    { name: "Cassaigne", postalCode: "32100", department: "Gers" },
    { name: "Larressingle", postalCode: "32100", department: "Gers" },
    { name: "Montréal", postalCode: "32250", department: "Gers" },
    { name: "Saint-Orens-Pouy-Petit", postalCode: "32100", department: "Gers" },
    { name: "Béraut", postalCode: "32100", department: "Gers" },
    { name: "Mouchan", postalCode: "32330", department: "Gers" },
    // Ajout de communes autour d'Auch
    { name: "Preignan", postalCode: "32810", department: "Gers" },
    { name: "Pavie", postalCode: "32550", department: "Gers" },
    { name: "Pessan", postalCode: "32550", department: "Gers" },
    { name: "Duran", postalCode: "32810", department: "Gers" },
    { name: "Castin", postalCode: "32810", department: "Gers" },
    { name: "Roquelaure", postalCode: "32810", department: "Gers" },
    // Ajout de communes autour de Lectoure
    { name: "Saint-Mézard", postalCode: "32700", department: "Gers" },
    { name: "Marsolan", postalCode: "32700", department: "Gers" },
    { name: "Pergain-Taillac", postalCode: "32700", department: "Gers" },
    { name: "La Sauvetat", postalCode: "32500", department: "Gers" },
    { name: "Sainte-Mère", postalCode: "32700", department: "Gers" },
    { name: "Terraube", postalCode: "32700", department: "Gers" }
  ]
};
