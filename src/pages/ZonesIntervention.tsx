
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZonesHero from "@/components/zones/ZonesHero";
import ZonesMap from "@/components/zones/ZonesMap";
import ZonesMajorCities from "@/components/zones/ZonesMajorCities";
import ZonesDepartments from "@/components/zones/ZonesDepartments";
import ZonesFAQ from "@/components/zones/ZonesFAQ";
import ZonesCTA from "@/components/zones/ZonesCTA";
import ZonesLocalServices from "@/components/zones/ZonesLocalServices";
import { mainLocation, serviceRadius, departments } from "@/data/zonesInterventionData";

const ZonesIntervention = () => {
  // Generate a list of department names for SEO
  const departmentNames = departments.map(d => d.name).join(', ');
  
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

  return (
    <>
      <Helmet>
        <title>Zones d'Intervention | qoob rénovations</title>
        <meta 
          name="description" 
          content={`Découvrez les zones d'intervention de qoob rénovations. Nous intervenons dans un rayon de ${serviceRadius} km autour de ${mainLocation.name} (${mainLocation.postalCode}), notamment dans les départements du ${departmentNames}.`}
        />
        <meta 
          name="keywords" 
          content={`rénovation ${mainLocation.name}, travaux ${mainLocation.department}, artisan ${departments[0].name}, rénovation ${departments[1].name}, rénovation ${departments[2].name}, artisan ${departments[3].name}, rénovation ${departments[4].name}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <ZonesHero />
          <ZonesMap />
          <ZonesMajorCities />
          <ZonesLocalServices />
          <ZonesDepartments />
          <ZonesFAQ />
          <ZonesCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ZonesIntervention;
