
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ArrowRight, Ruler, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const extensionTypes = [
  {
    title: "Extension Latérale",
    description: "Idéale pour les terrains avec espace sur les côtés",
    icon: <Building className="h-8 w-8 text-primary" />,
    features: [
      "Parfaite pour agrandir cuisine ou séjour",
      "Connexion directe avec espaces existants",
      "Nouveau volume harmonieux avec l'existant"
    ],
    surfaceRange: "15 à 50m²",
    timeframe: "3 à 5 mois"
  },
  {
    title: "Extension Arrière",
    description: "Solution classique pour les maisons avec jardin",
    icon: <Building className="h-8 w-8 text-primary" />,
    features: [
      "Agrandissement vers le jardin",
      "Création de vérandas ou pièces à vivre",
      "Possibilité de grandes baies vitrées"
    ],
    surfaceRange: "20 à 60m²",
    timeframe: "3 à 6 mois"
  },
  {
    title: "Surélévation Totale",
    description: "Pour doubler la surface habitable",
    icon: <Building className="h-8 w-8 text-primary" />,
    features: [
      "Création d'un étage complet",
      "Solution adaptée aux terrains limités",
      "Transformation majeure du volume"
    ],
    surfaceRange: "Selon emprise au sol existante",
    timeframe: "4 à 8 mois"
  },
  {
    title: "Surélévation Partielle",
    description: "Pour les projets plus modestes ou ciblés",
    icon: <Building className="h-8 w-8 text-primary" />,
    features: [
      "Surélévation d'une partie de la maison",
      "Création d'un espace spécifique",
      "Moins d'impact sur la structure"
    ],
    surfaceRange: "15 à 40m²",
    timeframe: "3 à 5 mois"
  },
  {
    title: "Extension Modulaire",
    description: "Solution rapide et moderne",
    icon: <Building className="h-8 w-8 text-primary" />,
    features: [
      "Fabrication en atelier, assemblage sur site",
      "Délais de réalisation courts",
      "Design contemporain"
    ],
    surfaceRange: "20 à 50m²",
    timeframe: "2 à 3 mois"
  }
];

const ExtensionTypes = () => {
  return (
    <section className="py-16 px-4" id="types-extensions">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-4">
          Types d'Extensions et Surélévations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez les différentes possibilités pour agrandir votre espace de vie, 
          adaptées à vos besoins spécifiques et à la configuration de votre habitat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extensionTypes.map((type, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start space-y-0 gap-4">
                <div>
                  {type.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-warmBeige-800">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Ruler className="h-4 w-4 mr-2 text-primary" />
                    <span>Surface moyenne: {type.surfaceRange}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Délai moyen: {type.timeframe}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/demande-devis" className="flex items-center gap-2">
              Demander un devis personnalisé <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExtensionTypes;
