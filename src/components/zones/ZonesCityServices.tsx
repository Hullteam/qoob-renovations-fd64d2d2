
import { Link } from "react-router-dom";
import { City } from "@/data/zones/types";
import { serviceDetailsData } from "@/data/serviceDetailsData";
import { metierDetailsData } from "@/data/metierDetailsData";
import { generateLocalBusinessSchema, generateMetierCityMetadata, generateServiceCityMetadata } from "@/utils/locationMetadata";
import { Helmet } from "react-helmet";

interface ZonesCityServicesProps {
  city: City;
  showSchema?: boolean;
}

const ZonesCityServices = ({ city, showSchema = false }: ZonesCityServicesProps) => {
  // Select primary services and métiers for this city
  const primaryServices = serviceDetailsData.slice(0, 2);
  const primaryMetiers = metierDetailsData.slice(0, 3);
  
  // Generate metadata for the combinations
  const serviceMetadata = generateServiceCityMetadata(
    primaryServices[0].slug,
    city.name,
    city.department
  );
  
  const metierMetadata = generateMetierCityMetadata(
    primaryMetiers[0].id,
    city.name,
    city.department
  );
  
  return (
    <div className="py-6 border rounded-lg bg-white p-6 shadow-sm">
      {showSchema && serviceMetadata && (
        <Helmet>
          <title>{serviceMetadata.title}</title>
          <meta name="description" content={serviceMetadata.description} />
          <meta name="keywords" content={serviceMetadata.keywords.join(', ')} />
          <script type="application/ld+json">
            {JSON.stringify(
              generateLocalBusinessSchema(primaryServices[0].title, city.name)
            )}
          </script>
        </Helmet>
      )}
      
      <h3 className="text-xl font-semibold mb-4">
        Services à {city.name}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Services section */}
        <div>
          <h4 className="font-medium mb-2 text-warmBeige-700">Rénovation à {city.name}</h4>
          <ul className="space-y-2">
            {primaryServices.map((service) => (
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
        </div>
        
        {/* Métiers section */}
        <div>
          <h4 className="font-medium mb-2 text-warmBeige-700">Corps de métier</h4>
          <ul className="space-y-2">
            {primaryMetiers.map((metier) => (
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
        </div>
      </div>
      
      <p className="text-sm text-warmBeige-600">
        {city.postalCode} - {city.department}
      </p>
    </div>
  );
};

export default ZonesCityServices;
