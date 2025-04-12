
import { Helmet } from "react-helmet";

const HomePageSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.qoob-renovations.fr/#organization",
    "name": "qoob rénovations",
    "url": "https://www.qoob-renovations.fr/",
    "logo": "https://www.qoob-renovations.fr/images/logo.png",
    "image": "https://www.qoob-renovations.fr/images/social-share.jpg",
    "description": "Transformez votre habitat avec style et confort. qoob rénovations, experts en rénovation intérieure et extérieure.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "987 route du Bladet",
      "addressLocality": "Lavergne",
      "postalCode": "47800",
      "addressRegion": "Lot-et-Garonne",
      "addressCountry": "FR"
    },
    "telephone": "+33785010633",
    "email": "qoob.sas@gmail.com",
    "sameAs": [
      "https://www.facebook.com/qoobrenovations/",
      "https://www.instagram.com/qoobrenovations/"
    ],
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "44.4019",
          "longitude": "0.6981"
        },
        "geoRadius": "100km"
      }
    ],
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
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.qoob-renovations.fr/#website",
    "url": "https://www.qoob-renovations.fr/",
    "name": "qoob rénovations",
    "description": "Experts en Rénovation d'Habitat",
    "publisher": {
      "@id": "https://www.qoob-renovations.fr/#organization"
    }
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.qoob-renovations.fr/#webpage",
    "url": "https://www.qoob-renovations.fr/",
    "name": "qoob rénovations | Experts en Rénovation d'Habitat",
    "description": "Transformez votre habitat avec style et confort. qoob rénovations, experts en rénovation intérieure et extérieure.",
    "isPartOf": {
      "@id": "https://www.qoob-renovations.fr/#website"
    },
    "about": {
      "@id": "https://www.qoob-renovations.fr/#organization"
    },
    "breadcrumb": {
      "@id": "https://www.qoob-renovations.fr/#breadcrumb"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.qoob-renovations.fr/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.qoob-renovations.fr/"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(homePageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default HomePageSchema;
