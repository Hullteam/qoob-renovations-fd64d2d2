
// Données des zones d'intervention à 50km autour de Lavergne (47800)

type City = {
  name: string;
  postalCode: string;
  department: string;
  isMajor?: boolean;
  description?: string;
}

type Department = {
  name: string;
  code: string;
  description: string;
  cities: City[];
}

export const mainLocation = {
  name: "Lavergne",
  postalCode: "47800",
  department: "Lot-et-Garonne",
  coordinates: {
    lat: 44.4019,
    lng: 0.6981
  },
  address: "987 route du Bladet, 47800 Lavergne"
};

export const serviceRadius = 50; // en kilomètres

export const departments: Department[] = [
  {
    name: "Lot-et-Garonne",
    code: "47",
    description: "Le Lot-et-Garonne est un département où nous intervenons principalement, avec notre siège basé à Lavergne.",
    cities: [
      { name: "Lavergne", postalCode: "47800", department: "Lot-et-Garonne", isMajor: true },
      { name: "Agen", postalCode: "47000", department: "Lot-et-Garonne", isMajor: true, description: "Préfecture du département" },
      { name: "Marmande", postalCode: "47200", department: "Lot-et-Garonne", isMajor: true },
      { name: "Villeneuve-sur-Lot", postalCode: "47300", department: "Lot-et-Garonne", isMajor: true },
      { name: "Nérac", postalCode: "47600", department: "Lot-et-Garonne", isMajor: true },
      { name: "Tonneins", postalCode: "47400", department: "Lot-et-Garonne" },
      { name: "Fumel", postalCode: "47500", department: "Lot-et-Garonne" },
      { name: "Casteljaloux", postalCode: "47700", department: "Lot-et-Garonne" },
      { name: "Bon-Encontre", postalCode: "47240", department: "Lot-et-Garonne" },
      { name: "Monflanquin", postalCode: "47150", department: "Lot-et-Garonne" },
      { name: "Aiguillon", postalCode: "47190", department: "Lot-et-Garonne" },
      { name: "Boé", postalCode: "47550", department: "Lot-et-Garonne" },
      { name: "Layrac", postalCode: "47390", department: "Lot-et-Garonne" },
      { name: "Sainte-Livrade-sur-Lot", postalCode: "47110", department: "Lot-et-Garonne" },
      { name: "Foulayronnes", postalCode: "47510", department: "Lot-et-Garonne" },
      { name: "Clairac", postalCode: "47320", department: "Lot-et-Garonne" },
      { name: "Penne-d'Agenais", postalCode: "47140", department: "Lot-et-Garonne" },
      { name: "Le Passage", postalCode: "47520", department: "Lot-et-Garonne" },
      { name: "Feugarolles", postalCode: "47230", department: "Lot-et-Garonne" },
      { name: "Castillonnès", postalCode: "47330", department: "Lot-et-Garonne" },
      // Ajout de communes supplémentaires autour d'Agen
      { name: "Pont-du-Casse", postalCode: "47480", department: "Lot-et-Garonne" },
      { name: "Estillac", postalCode: "47310", department: "Lot-et-Garonne" },
      { name: "Roquefort", postalCode: "47310", department: "Lot-et-Garonne" },
      { name: "Moirax", postalCode: "47310", department: "Lot-et-Garonne" },
      { name: "Laplume", postalCode: "47310", department: "Lot-et-Garonne" },
      { name: "Sérignac-sur-Garonne", postalCode: "47310", department: "Lot-et-Garonne" },
      // Ajout de communes autour de Marmande
      { name: "Sainte-Bazeille", postalCode: "47180", department: "Lot-et-Garonne" },
      { name: "Beaupuy", postalCode: "47200", department: "Lot-et-Garonne" },
      { name: "Virazeil", postalCode: "47200", department: "Lot-et-Garonne" },
      { name: "Saint-Pardoux-du-Breuil", postalCode: "47200", department: "Lot-et-Garonne" },
      { name: "Birac-sur-Trec", postalCode: "47200", department: "Lot-et-Garonne" },
      { name: "Gontaud-de-Nogaret", postalCode: "47400", department: "Lot-et-Garonne" },
      { name: "Escassefort", postalCode: "47350", department: "Lot-et-Garonne" },
      // Ajout de communes autour de Villeneuve-sur-Lot
      { name: "Bias", postalCode: "47300", department: "Lot-et-Garonne" },
      { name: "Pujols", postalCode: "47300", department: "Lot-et-Garonne" },
      { name: "Le Lédat", postalCode: "47300", department: "Lot-et-Garonne" },
      { name: "Casseneuil", postalCode: "47440", department: "Lot-et-Garonne" },
      { name: "Sainte-Colombe-de-Villeneuve", postalCode: "47300", department: "Lot-et-Garonne" },
      { name: "Saint-Antoine-de-Ficalba", postalCode: "47340", department: "Lot-et-Garonne" },
      // Ajout de communes autour de Nérac
      { name: "Lavardac", postalCode: "47230", department: "Lot-et-Garonne" },
      { name: "Barbaste", postalCode: "47230", department: "Lot-et-Garonne" },
      { name: "Mézin", postalCode: "47170", department: "Lot-et-Garonne" },
      { name: "Montagnac-sur-Auvignon", postalCode: "47600", department: "Lot-et-Garonne" },
      { name: "Andiran", postalCode: "47170", department: "Lot-et-Garonne" },
      { name: "Calignac", postalCode: "47600", department: "Lot-et-Garonne" },
      { name: "Espiens", postalCode: "47600", department: "Lot-et-Garonne" }
    ]
  },
  {
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
  },
  {
    name: "Dordogne",
    code: "24",
    description: "Nous intervenons également dans le sud de la Dordogne.",
    cities: [
      { name: "Bergerac", postalCode: "24100", department: "Dordogne", isMajor: true },
      { name: "Périgueux", postalCode: "24000", department: "Dordogne", isMajor: true },
      { name: "Sarlat-la-Canéda", postalCode: "24200", department: "Dordogne", isMajor: true },
      { name: "Eymet", postalCode: "24500", department: "Dordogne" },
      { name: "Issigeac", postalCode: "24560", department: "Dordogne" },
      { name: "Lalinde", postalCode: "24150", department: "Dordogne" },
      { name: "Le Bugue", postalCode: "24260", department: "Dordogne" },
      { name: "Monpazier", postalCode: "24540", department: "Dordogne" },
      { name: "Beaumont-du-Périgord", postalCode: "24440", department: "Dordogne" },
      { name: "Villefranche-du-Périgord", postalCode: "24550", department: "Dordogne" },
      // Ajout de communes autour de Bergerac
      { name: "Prigonrieux", postalCode: "24130", department: "Dordogne" },
      { name: "Gardonne", postalCode: "24680", department: "Dordogne" },
      { name: "Lamonzie-Saint-Martin", postalCode: "24680", department: "Dordogne" },
      { name: "Mouleydier", postalCode: "24520", department: "Dordogne" },
      { name: "Creysse", postalCode: "24100", department: "Dordogne" },
      { name: "Cours-de-Pile", postalCode: "24520", department: "Dordogne" },
      { name: "Saint-Nexans", postalCode: "24100", department: "Dordogne" },
      { name: "Colombier", postalCode: "24560", department: "Dordogne" },
      // Ajout de communes autour de Périgueux
      { name: "Coulounieix-Chamiers", postalCode: "24660", department: "Dordogne" },
      { name: "Chancelade", postalCode: "24650", department: "Dordogne" },
      { name: "Marsac-sur-l'Isle", postalCode: "24430", department: "Dordogne" },
      { name: "Champcevinel", postalCode: "24750", department: "Dordogne" },
      { name: "Trélissac", postalCode: "24750", department: "Dordogne" },
      { name: "Boulazac", postalCode: "24750", department: "Dordogne" },
      { name: "Château-l'Évêque", postalCode: "24460", department: "Dordogne" },
      // Ajout de communes autour de Sarlat
      { name: "Carsac-Aillac", postalCode: "24200", department: "Dordogne" },
      { name: "Vitrac", postalCode: "24200", department: "Dordogne" },
      { name: "Marquay", postalCode: "24620", department: "Dordogne" },
      { name: "Proissans", postalCode: "24200", department: "Dordogne" },
      { name: "Sainte-Nathalène", postalCode: "24200", department: "Dordogne" },
      { name: "Saint-Vincent-le-Paluel", postalCode: "24200", department: "Dordogne" },
      { name: "Calviac-en-Périgord", postalCode: "24370", department: "Dordogne" },
      { name: "Beynac-et-Cazenac", postalCode: "24220", department: "Dordogne" },
      { name: "Domme", postalCode: "24250", department: "Dordogne" }
    ]
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

// Toutes les villes combinées pour un accès facile
export const allCities = departments.flatMap(dept => dept.cities);

// Villes principales pour la mise en avant
export const majorCities = allCities.filter(city => city.isMajor);

export const interventionFAQs = [
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons dans un rayon de 50 km autour de notre siège à Lavergne (47800), couvrant notamment les départements du Lot-et-Garonne, du Lot, du Tarn-et-Garonne, du Gers et de la Dordogne."
  },
  {
    question: "Des frais supplémentaires sont-ils appliqués selon la distance ?",
    answer: "Pour les chantiers situés dans notre zone principale d'intervention (moins de 30 km de Lavergne), aucun frais supplémentaire n'est appliqué. Pour les distances comprises entre 30 et 50 km, des frais de déplacement modérés peuvent s'appliquer, qui seront clairement indiqués dans votre devis."
  },
  {
    question: "Puis-je vous contacter même si ma commune n'est pas listée ?",
    answer: "Bien sûr ! Même si votre commune n'apparaît pas dans notre liste, n'hésitez pas à nous contacter. Nous étudions toutes les demandes et pouvons parfois intervenir au-delà de notre zone habituelle selon la nature et l'ampleur du projet."
  },
  {
    question: "Proposez-vous des services différents selon les zones géographiques ?",
    answer: "Non, nous offrons la même gamme complète de services de rénovation dans toutes les zones où nous intervenons. Que vous soyez à Lavergne ou à 50 km de là, vous bénéficiez de la même qualité de service et d'expertise."
  },
  {
    question: "Quel est votre délai d'intervention ?",
    answer: "Nos délais d'intervention dépendent de plusieurs facteurs : notre planning, la nature du projet et sa localisation. Généralement, nous essayons de répondre aux demandes de devis sous 48h et d'établir un planning d'intervention sous 2 semaines après validation du devis."
  }
];
