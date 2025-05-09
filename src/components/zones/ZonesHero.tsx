
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mainLocation, serviceRadius } from "@/data/zonesInterventionData";
import { serviceDetailsData } from "@/data/serviceDetailsData";

const ZonesHero = () => {
  // Get the first 3 services to highlight
  const highlightedServices = serviceDetailsData.slice(0, 3);
  
  return (
    <section className="bg-warmBeige-50 py-12 md:py-20 border-b border-warmBeige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warmBeige-900">
            Nos Zones d'Intervention
          </h1>
          <p className="text-lg md:text-xl text-warmBeige-700 mb-6 max-w-3xl mx-auto">
            qoob rénovations intervient dans un rayon de {serviceRadius} km autour de {mainLocation.name} ({mainLocation.postalCode}), couvrant plusieurs départements du Sud-Ouest.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {highlightedServices.map((service) => (
              <Button key={service.slug} variant="outline" className="bg-white border-warmBeige-200" asChild>
                <Link to={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZonesHero;
