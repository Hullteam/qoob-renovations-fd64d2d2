
import { Helmet } from "react-helmet";
import { metierDetailsData, metierCategories } from "@/data/metierDetailsData";

const MetiersSchemaOrg = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "qoob rénovations - Expertise en métiers du bâtiment",
          "description": "Entreprise spécialisée dans tous les métiers de la rénovation et de la construction",
          "url": "https://qoobrenovations.com/metiers-renovation",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "987 route du Bladet",
            "addressLocality": "Lavergne",
            "postalCode": "47800",
            "addressCountry": "FR"
          },
          "telephone": "0785010633",
          "email": "qoob.sas@gmail.com",
          "priceRange": "€€-€€€€",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "areaServed": "Lot-et-Garonne et départements limitrophes",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catégories de métiers du bâtiment",
            "itemListElement": metierCategories.map((category, index) => ({
              "@type": "OfferCatalog",
              "name": category.name,
              "description": category.description,
              "url": `https://qoobrenovations.com/metiers-renovation/categories/${category.id}`,
              "itemListElement": metierDetailsData
                .filter(metier => metier.categoryId === category.id)
                .map((metier, metierIndex) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": metier.title,
                    "description": metier.subtitle,
                    "url": `https://qoobrenovations.com/services/${metier.serviceSlug}/metiers/${metier.id}`
                  },
                  "position": metierIndex + 1
                })),
              "position": index + 1
            }))
          }
        })}
      </script>
    </Helmet>
  );
};

export default MetiersSchemaOrg;
