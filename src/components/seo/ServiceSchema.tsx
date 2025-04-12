
import { Helmet } from "react-helmet";

interface ServiceSchemaProps {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

const ServiceSchema = ({ title, description, slug, imageUrl }: ServiceSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.qoob-renovations.fr/services/${slug}#service`,
    "name": title,
    "description": description,
    "url": `https://www.qoob-renovations.fr/services/${slug}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.qoob-renovations.fr/#organization"
    },
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
    "image": imageUrl || "https://www.qoob-renovations.fr/images/social-share.jpg"
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.qoob-renovations.fr/services/${slug}#webpage`,
    "url": `https://www.qoob-renovations.fr/services/${slug}`,
    "name": `${title} | qoob rénovations`,
    "description": description,
    "isPartOf": {
      "@id": "https://www.qoob-renovations.fr/#website"
    },
    "about": {
      "@id": `https://www.qoob-renovations.fr/services/${slug}#service`
    },
    "breadcrumb": {
      "@id": `https://www.qoob-renovations.fr/services/${slug}#breadcrumb`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.qoob-renovations.fr/services/${slug}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.qoob-renovations.fr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": `https://www.qoob-renovations.fr/services/${slug}`
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
