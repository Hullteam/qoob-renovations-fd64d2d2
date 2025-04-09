
import { Home, Paintbrush, Wrench, Bath } from "lucide-react";

const serviceItems = [
  {
    title: "Rénovation Intérieure",
    description: "Modernisez votre intérieur avec nos services complets de rénovation: peinture, revêtements de sol, plafonds et plus encore.",
    icon: <Home className="w-12 h-12 text-primary mb-4" />,
  },
  {
    title: "Rénovation Extérieure",
    description: "Donnez un nouveau visage à votre habitat avec notre expertise en façades, toitures, terrasses et aménagements extérieurs.",
    icon: <Paintbrush className="w-12 h-12 text-primary mb-4" />,
  },
  {
    title: "Isolation",
    description: "Améliorez le confort et l'efficacité énergétique de votre foyer avec nos solutions d'isolation thermique et acoustique.",
    icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
  },
  {
    title: "Aménagement Cuisines & Salles de Bains",
    description: "Créez des espaces fonctionnels et élégants avec notre expertise en design et installation de cuisines et salles de bains.",
    icon: <Bath className="w-12 h-12 text-primary mb-4" />,
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
