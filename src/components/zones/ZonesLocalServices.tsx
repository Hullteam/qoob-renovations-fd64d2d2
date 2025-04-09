
import { Link } from "react-router-dom";
import { serviceDetailsData } from "@/data/serviceDetailsData";
import { majorCities } from "@/data/zonesInterventionData";
import { metierDetailsData } from "@/data/metierDetailsData";
import { generateServiceCityMetadata, generateMetierCityMetadata } from "@/utils/locationMetadata";

const ZonesLocalServices = () => {
  // Select top cities and services for highlighting
  const topCities = majorCities.slice(0, 3);
  const topServices = serviceDetailsData.slice(0, 4);
  const topMetiers = metierDetailsData.slice(0, 3);
  
  return (
    <section className="py-16 bg-white border-t border-warmBeige-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-2">
          Nos services près de chez vous
        </h2>
        <p className="text-center text-warmBeige-700 mb-10 max-w-3xl mx-auto">
          Découvrez nos prestations de rénovation disponibles dans les principales villes de notre zone d'intervention
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCities.map((city) => (
            <div key={`${city.name}-${city.postalCode}`} className="bg-warmBeige-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Nos services à {city.name}
              </h3>
              <ul className="space-y-2">
                {topServices.map((service) => (
                  <li key={service.slug} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="text-warmBeige-800 hover:text-primary transition-colors"
                    >
                      {service.title} à {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Corps de métier section */}
              <h4 className="font-medium mt-4 mb-2 text-warmBeige-700">Corps de métier à {city.name}</h4>
              <ul className="space-y-2">
                {topMetiers.map((metier) => (
                  <li key={metier.id} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <Link 
                      to={`/services/${metier.serviceSlug}/metiers/${metier.id}`}
                      className="text-warmBeige-800 hover:text-primary transition-colors"
                    >
                      {metier.title} à {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <p className="mt-4 text-sm text-warmBeige-600">
                {city.postalCode} - {city.department}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-warmBeige-700 mb-4">
            Contactez-nous pour découvrir l'ensemble de nos services disponibles dans votre commune
          </p>
          <Link 
            to="/demande-devis" 
            className="inline-flex items-center text-primary hover:underline"
          >
            Demander plus d'informations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ZonesLocalServices;
