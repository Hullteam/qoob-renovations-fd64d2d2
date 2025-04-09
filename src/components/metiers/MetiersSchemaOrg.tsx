
import { Helmet } from "react-helmet";
import { metierDetailsData } from "@/data/metierDetailsData";

const MetiersSchemaOrg = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "qoob rénovations - Expertise en métiers du bâtiment",
          "description": "Entreprise spécialisée dans tous les métiers de la rénovation et de la construction",
          "areaServed": "Lot-et-Garonne et départements limitrophes",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de rénovation",
            "itemListElement": metierDetailsData.map((metier, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": metier.title,
                "description": metier.subtitle
              },
              "position": index + 1
            }))
          }
        })}
      </script>
    </Helmet>
  );
};

export default MetiersSchemaOrg;
