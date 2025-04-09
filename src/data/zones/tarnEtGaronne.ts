
import { Department } from './types';

export const tarnEtGaronne: Department = {
  name: "Tarn-et-Garonne",
  code: "82",
  description: "Notre zone d'intervention s'étend jusqu'au nord du Tarn-et-Garonne.",
  cities: [
    { name: "Montauban", postalCode: "82000", department: "Tarn-et-Garonne", isMajor: true },
    { name: "Moissac", postalCode: "82200", department: "Tarn-et-Garonne", isMajor: true },
    { name: "Castelsarrasin", postalCode: "82100", department: "Tarn-et-Garonne", isMajor: true },
    { name: "Valence", postalCode: "82400", department: "Tarn-et-Garonne" },
    { name: "Lauzerte", postalCode: "82110", department: "Tarn-et-Garonne" },
    { name: "Montaigu-de-Quercy", postalCode: "82150", department: "Tarn-et-Garonne" },
    { name: "Roquecor", postalCode: "82150", department: "Tarn-et-Garonne" },
    { name: "Cazes-Mondenard", postalCode: "82110", department: "Tarn-et-Garonne" },
    // Ajout de communes autour de Montauban
    { name: "Bressols", postalCode: "82710", department: "Tarn-et-Garonne" },
    { name: "Montbeton", postalCode: "82290", department: "Tarn-et-Garonne" },
    { name: "Lacourt-Saint-Pierre", postalCode: "82290", department: "Tarn-et-Garonne" },
    { name: "Lamothe-Capdeville", postalCode: "82130", department: "Tarn-et-Garonne" },
    { name: "Saint-Étienne-de-Tulmont", postalCode: "82410", department: "Tarn-et-Garonne" },
    { name: "Albefeuille-Lagarde", postalCode: "82290", department: "Tarn-et-Garonne" },
    // Ajout de communes autour de Moissac
    { name: "Castelmayran", postalCode: "82210", department: "Tarn-et-Garonne" },
    { name: "Saint-Nicolas-de-la-Grave", postalCode: "82210", department: "Tarn-et-Garonne" },
    { name: "Lizac", postalCode: "82200", department: "Tarn-et-Garonne" },
    { name: "Montesquieu", postalCode: "82200", department: "Tarn-et-Garonne" },
    { name: "Boudou", postalCode: "82200", department: "Tarn-et-Garonne" },
    { name: "Durfort-Lacapelette", postalCode: "82390", department: "Tarn-et-Garonne" },
    // Ajout de communes autour de Castelsarrasin
    { name: "Meauzac", postalCode: "82290", department: "Tarn-et-Garonne" },
    { name: "Barry-d'Islemade", postalCode: "82290", department: "Tarn-et-Garonne" },
    { name: "La Ville-Dieu-du-Temple", postalCode: "82290", department: "Tarn-et-Garonne" },
    { name: "Saint-Porquier", postalCode: "82700", department: "Tarn-et-Garonne" },
    { name: "Les Barthes", postalCode: "82100", department: "Tarn-et-Garonne" }
  ]
};
