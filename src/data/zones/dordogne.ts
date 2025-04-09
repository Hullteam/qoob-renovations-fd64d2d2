
import { Department } from './types';

export const dordogne: Department = {
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
};
