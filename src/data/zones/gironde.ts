
import { Department } from './types';

export const gironde: Department = {
  name: "Gironde",
  code: "33",
  description: "Notre zone d'intervention inclut également le sud-est de la Gironde, limitrophe du Lot-et-Garonne.",
  cities: [
    { name: "La Réole", postalCode: "33190", department: "Gironde" },
    { name: "Langon", postalCode: "33210", department: "Gironde", isMajor: true },
    { name: "Sainte-Foy-la-Grande", postalCode: "33220", department: "Gironde" },
    { name: "Pellegrue", postalCode: "33790", department: "Gironde" },
    { name: "Monségur", postalCode: "33580", department: "Gironde" },
    { name: "Sauveterre-de-Guyenne", postalCode: "33540", department: "Gironde" },
    // Ajout de communes autour de Langon
    { name: "Saint-Macaire", postalCode: "33490", department: "Gironde" },
    { name: "Toulenne", postalCode: "33210", department: "Gironde" },
    { name: "Roaillan", postalCode: "33210", department: "Gironde" },
    { name: "Fargues", postalCode: "33210", department: "Gironde" },
    { name: "Saint-Pierre-d'Aurillac", postalCode: "33490", department: "Gironde" },
    { name: "Castets-en-Dorthe", postalCode: "33210", department: "Gironde" },
    { name: "Bazas", postalCode: "33430", department: "Gironde" }
  ]
};
