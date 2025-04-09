
import { allCities, majorCities, departments } from "@/data/zonesInterventionData";
import { serviceDetailsData } from "@/data/serviceDetailsData";
import { metierDetailsData } from "@/data/metierDetailsData";

/**
 * Generates metadata for services in specific locations
 * This helps with SEO by creating connections between services and geographic areas
 */
export interface LocationMetadata {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * Generates metadata for a specific service in a specific city
 */
export const generateServiceCityMetadata = (serviceSlug: string, cityName: string, departmentName: string): LocationMetadata | null => {
  const service = serviceDetailsData.find(s => s.slug === serviceSlug);
  
  if (!service) return null;
  
  return {
    title: `${service.title} à ${cityName} (${departmentName})`,
    description: `qoob rénovations propose des services professionnels de ${service.title.toLowerCase()} à ${cityName} et dans tout le département ${departmentName}. Devis gratuit et intervention rapide.`,
    keywords: [
      `${service.title.toLowerCase()} ${cityName}`,
      `travaux ${cityName}`,
      `rénovation ${cityName}`,
      `artisan ${departmentName}`,
      ...service.keywords
    ]
  };
};

/**
 * Generates metadata for a specific métier in a specific city
 */
export const generateMetierCityMetadata = (metierId: string, cityName: string, departmentName: string): LocationMetadata | null => {
  const metier = metierDetailsData.find(m => m.id === metierId);
  
  if (!metier) return null;
  
  return {
    title: `${metier.title} à ${cityName} (${departmentName})`,
    description: `qoob rénovations vous propose ses services de ${metier.title.toLowerCase()} à ${cityName} et dans tout le département ${departmentName}. Expertise et savoir-faire pour tous vos projets.`,
    keywords: [
      `${metier.title.toLowerCase()} ${cityName}`,
      `artisan ${metier.title.toLowerCase()} ${departmentName}`,
      `professionnel ${metier.title.toLowerCase()}`,
      `rénovation ${cityName}`,
      ...metier.keywords
    ]
  };
};

/**
 * Returns the top major cities for SEO focus
 */
export const getTopCities = (limit = 5) => {
  return majorCities.slice(0, limit);
};

/**
 * Finds a city by name
 */
export const findCityByName = (name: string) => {
  return allCities.find(city => city.name.toLowerCase() === name.toLowerCase());
};

/**
 * Finds a department by code
 */
export const findDepartmentByCode = (code: string) => {
  return departments.find(dept => dept.code === code);
};

/**
 * Generates Schema.org LocalBusiness JSON-LD data for SEO
 */
export const generateLocalBusinessSchema = (serviceTitle: string, cityName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `qoob rénovations - ${serviceTitle} à ${cityName}`,
    "image": "https://your-website.com/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "987 route du Bladet",
      "addressLocality": "Lavergne",
      "postalCode": "47800",
      "addressRegion": "Lot-et-Garonne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.4019",
      "longitude": "0.6981"
    },
    "url": `https://your-website.com/services/${serviceTitle.toLowerCase().replace(/ /g, '-')}`,
    "telephone": "+33XXXXXXXXX",
    "areaServed": cityName,
    "priceRange": "€€-€€€"
  };
};
