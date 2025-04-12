
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import ServiceSchema from "@/components/seo/ServiceSchema";

// Import components
import ServiceHero from "@/components/services/ServiceHero";
import ServicePresentation from "@/components/services/ServicePresentation";
import ServiceDetailedTabs from "@/components/services/ServiceDetailedTabs";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceNotFound from "@/components/services/ServiceNotFound";

// Import des données de services
import { serviceDetailsData } from "@/data/serviceDetailsData";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const serviceData = serviceDetailsData.find(service => service.slug === serviceSlug);

  if (!serviceData) {
    return <ServiceNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{serviceData.title} | qoob rénovations</title>
        <meta name="description" content={serviceData.metaDescription} />
        <meta name="keywords" content={serviceData.keywords.join(', ')} />
        <link rel="canonical" href={`https://www.qoob-renovations.fr/services/${serviceSlug}`} />
        <meta property="og:title" content={`${serviceData.title} | qoob rénovations`} />
        <meta property="og:description" content={serviceData.metaDescription} />
        <meta property="og:url" content={`https://www.qoob-renovations.fr/services/${serviceSlug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={serviceData.heroImage} />
      </Helmet>
      
      <ServiceSchema 
        title={serviceData.title}
        description={serviceData.metaDescription}
        slug={serviceSlug || ''}
        imageUrl={serviceData.heroImage}
      />

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

          {/* Services détaillés */}
          <ServiceDetailedTabs 
            serviceTitle={serviceData.title}
            detailedServices={serviceData.detailedServices}
            serviceSlug={serviceSlug || ''}
          />

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

export default ServiceDetail;
