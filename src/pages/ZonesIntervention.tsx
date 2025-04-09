
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZonesHero from "@/components/zones/ZonesHero";
import ZonesMap from "@/components/zones/ZonesMap";
import ZonesMajorCities from "@/components/zones/ZonesMajorCities";
import ZonesDepartments from "@/components/zones/ZonesDepartments";
import ZonesFAQ from "@/components/zones/ZonesFAQ";
import ZonesCTA from "@/components/zones/ZonesCTA";
import ZonesLocalServices from "@/components/zones/ZonesLocalServices";
import ZonesCityServices from "@/components/zones/ZonesCityServices";
import { mainLocation, serviceRadius, departments, majorCities } from "@/data/zonesInterventionData";
import { serviceDetailsData } from "@/data/serviceDetailsData";
import { metierDetailsData } from "@/data/metierDetailsData";

const ZonesIntervention = () => {
  // Generate a list of department names for SEO
  const departmentNames = departments.map(d => d.name).join(', ');

  // Find Agen in our cities
  const agenCity = majorCities.find(city => city.name === "Agen");

  // Primary service and métier for our featured combination
  const renovationInterieure = serviceDetailsData.find(s => s.slug === "renovation-interieure");
  const electricien = metierDetailsData.find(m => m.id === "electricien");

  // Generate local business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "qoob rénovations",
    "image": "https://your-website.com/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": mainLocation.address,
      "addressLocality": mainLocation.name,
      "postalCode": mainLocation.postalCode,
      "addressRegion": mainLocation.department,
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": mainLocation.coordinates.lat,
      "longitude": mainLocation.coordinates.lng
    },
    "url": "https://your-website.com/",
    "telephone": "+33XXXXXXXXX",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": mainLocation.coordinates.lat,
        "longitude": mainLocation.coordinates.lng
      },
      "geoRadius": `${serviceRadius}km`
    },
    "priceRange": "€€-€€€"
  };

  // Service schema data for featured service-city combination
  const serviceSchema = agenCity && renovationInterieure ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": renovationInterieure.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "qoob rénovations"
    },
    "areaServed": {
      "@type": "City",
      "name": agenCity.name
    },
    "description": `Services de ${renovationInterieure.title} à ${agenCity.name} et dans tout le département ${agenCity.department}`,
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": `${renovationInterieure.title} à ${agenCity.name}`
      }
    }
  } : null;
  
  return <>
      <Helmet>
        <title>Zones d'Intervention | qoob rénovations</title>
        <meta name="description" content={`Découvrez les zones d'intervention de qoob rénovations. Nous intervenons dans un rayon de ${serviceRadius} km autour de ${mainLocation.name} (${mainLocation.postalCode}), notamment dans les départements du ${departmentNames}.`} />
        <meta name="keywords" content={`rénovation ${mainLocation.name}, travaux ${mainLocation.department}, artisan ${departments[0].name}, rénovation ${departments[1].name}, rénovation ${departments[2].name}, artisan ${departments[3].name}, rénovation ${departments[4].name}`} />
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        {/* Service Schema for Agen-Renovation intérieure */}
        {serviceSchema && <script type="application/ld+json">
            {JSON.stringify(serviceSchema)}
          </script>}
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <ZonesHero />
          <ZonesMap />
          <ZonesMajorCities />
          
          {/* Featured City-Service-Métier Combination Section */}
          <section className="py-16 bg-warmBeige-50">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-2">
                Nos services et corps de métier par ville
              </h2>
              <p className="text-center text-warmBeige-700 mb-10 max-w-3xl mx-auto">
                Découvrez nos prestations de rénovation et nos corps de métier disponibles dans les principales villes de notre zone d'intervention
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agenCity && <ZonesCityServices city={agenCity} showSchema={true} />}
                
                {majorCities.filter(city => city.name !== "Agen").slice(0, 2).map(city => <ZonesCityServices key={`${city.name}-${city.postalCode}`} city={city} />)}
              </div>
              
              {/* Highlighted Service-Métier Combination - Fixed rendering issue here */}
              {agenCity && renovationInterieure && electricien && (
                <div className="mt-10 p-6 border bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    {electricien.title} pour {renovationInterieure.title} à {agenCity.name}
                  </h3>
                  <p className="text-warmBeige-700 mb-4">
                    Profitez de l'expertise de nos {electricien.title.toLowerCase()} pour vos projets de {renovationInterieure.title.toLowerCase()} à {agenCity.name} et ses environs.
                  </p>
                  <Link 
                    to={`/services/${electricien.serviceSlug}/metiers/${electricien.id}`}
                    className="text-primary hover:underline flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </section>
          
          <ZonesLocalServices />
          <ZonesDepartments />
          <ZonesFAQ />
          <ZonesCTA />
        </main>
        
        <Footer />
      </div>
    </>;
};
export default ZonesIntervention;
