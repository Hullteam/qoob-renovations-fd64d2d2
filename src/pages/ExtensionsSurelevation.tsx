
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServicePresentation from "@/components/services/ServicePresentation";
import ServiceDetailedTabs from "@/components/services/ServiceDetailedTabs";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ExtensionTypes from "@/components/extensions/ExtensionTypes";
import ExtensionProcess from "@/components/extensions/ExtensionProcess";
import ExtensionRegulations from "@/components/extensions/ExtensionRegulations";

import { serviceDetailsData } from "@/data/serviceDetailsData";

// For Schema.org SEO
const extensionServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Residential Extension",
  "provider": {
    "@type": "LocalBusiness",
    "name": "qoob rénovations",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "987 route du Bladet",
      "addressLocality": "Lavergne",
      "postalCode": "47800",
      "addressRegion": "Lot-et-Garonne",
      "addressCountry": "FR"
    },
    "telephone": "+33XXXXXXXXX",
    "image": "https://qoobrenovations.com/logo.png"
  },
  "areaServed": "Lot-et-Garonne et départements limitrophes",
  "description": "Services d'extensions et de surélévations pour maisons individuelles : agrandissement horizontal, vertical, extension de toit et solutions modulaires.",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "1200",
      "priceCurrency": "EUR",
      "unitText": "m²",
      "valueAddedTaxIncluded": true
    }
  }
};

const ExtensionsSurelevation = () => {
  // Find the extension service data
  const serviceData = serviceDetailsData.find(service => service.slug === "extensions-surelevation");

  // Safety check
  if (!serviceData) {
    return <div>Service data not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Extensions et Surélévations de Maison | qoob rénovations</title>
        <meta name="description" content="Agrandissez votre espace de vie et valorisez votre bien avec nos services d'extensions et de surélévations sur mesure. Devis gratuit et sans engagement." />
        <meta name="keywords" content={serviceData.keywords.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify(extensionServiceSchema)}
        </script>
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://qoobrenovations.com/services/extensions-surelevation" />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Extensions et Surélévations de Maison | qoob rénovations" />
        <meta property="og:description" content="Agrandissez votre espace de vie et valorisez votre bien avec nos services d'extensions sur mesure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qoobrenovations.com/services/extensions-surelevation" />
        <meta property="og:image" content="https://qoobrenovations.com/images/extensions-hero.jpg" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero */}
          <ServiceHero 
            title={serviceData.title} 
            subtitle={serviceData.subtitle}
            heroImage={serviceData.heroImage}
          />

          {/* Présentation */}
          <ServicePresentation 
            presentationTitle={serviceData.presentationTitle}
            presentationText={serviceData.presentationText}
            presentationImage={serviceData.presentationImage}
            benefits={serviceData.benefits}
            averageDuration={serviceData.averageDuration}
            title={serviceData.title}
          />

          {/* Types d'extensions - Composant spécifique */}
          <ExtensionTypes />

          {/* Services détaillés */}
          <ServiceDetailedTabs 
            serviceTitle={serviceData.title}
            detailedServices={serviceData.detailedServices}
            serviceSlug="extensions-surelevation"
          />
          
          {/* Processus de réalisation - Composant spécifique */}
          <ExtensionProcess />
          
          {/* Réglementations - Composant spécifique */}
          <ExtensionRegulations />

          {/* FAQ */}
          <ServiceFAQ faqs={serviceData.faqs} />

          {/* CTA */}
          <ServiceCTA title={serviceData.title} />

          {/* Témoignages */}
          <ServiceTestimonials testimonials={serviceData.testimonials} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ExtensionsSurelevation;
