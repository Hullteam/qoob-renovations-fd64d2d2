import { Home, Paintbrush, Wrench, Bath, ClipboardCheck, Search, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    title: "Rénovation Intérieure",
    description: "Modernisez votre intérieur avec nos services complets de rénovation: peinture, revêtements de sol, plafonds et plus encore.",
    icon: <Home className="w-12 h-12 text-primary mb-4" />,
    slug: "renovation-interieure"
  },
  {
    title: "Rénovation Extérieure",
    description: "Donnez un nouveau visage à votre habitat avec notre expertise en façades, toitures, terrasses et aménagements extérieurs.",
    icon: <Paintbrush className="w-12 h-12 text-primary mb-4" />,
    slug: "renovation-exterieure"
  },
  {
    title: "Extensions - Surélévation",
    description: "Agrandissez votre espace de vie avec nos services d'extensions et de surélévations personnalisés selon vos besoins.",
    icon: <Building className="w-12 h-12 text-primary mb-4" />,
    slug: "extensions-surelevation"
  },
  {
    title: "Rénovation Énergétique",
    description: "Améliorez le confort et l'efficacité énergétique de votre foyer avec nos solutions d'isolation thermique et acoustique.",
    icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
    slug: "renovation-energetique"
  },
  {
    title: "Aménagement Cuisines & Salles de Bains",
    description: "Créez des espaces fonctionnels et élégants avec notre expertise en design et installation de cuisines et salles de bains.",
    icon: <Bath className="w-12 h-12 text-primary mb-4" />,
    slug: "cuisines-salles-de-bains"
  },
  {
    title: "Gestion de Projet",
    description: "Bénéficiez d'un suivi complet avec notre service de conducteur de travaux, OPC et coordination des corps de métier.",
    icon: <ClipboardCheck className="w-12 h-12 text-primary mb-4" />,
    slug: "gestion-projet"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 hero-pattern">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Nos Services</h2>
        <p className="section-subtitle text-center">
          Nous proposons une gamme complète de services de rénovation pour transformer votre habitat
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link to={`/services/${service.slug}`}>
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="flex justify-center mb-4">
            <Search className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3">
            Vous recherchez un bien à acheter ?
          </h3>
          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
            Avant de finaliser votre achat, estimez le coût des travaux nécessaires avec notre service d'estimation avant achat (à partir de 3€/m²). 
            Évitez les mauvaises surprises et planifiez votre budget total.
          </p>
          <Button asChild>
            <Link to="/estimation-avant-achat">
              Demander une estimation avant achat
            </Link>
          </Button>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Découvrez l'expertise de nos artisans dans chaque corps de métier
          </p>
          <Button variant="link" asChild>
            <Link to="/metiers-renovation" className="text-primary hover:text-primary/80">
              Voir tous les métiers de la rénovation →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
