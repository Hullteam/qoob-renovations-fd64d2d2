import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import MetierHero from "@/components/metiers/MetierHero";
import MetierPresentation from "@/components/metiers/MetierPresentation";
import MetierExpertise from "@/components/metiers/MetierExpertise";
import MetierWorkProcess from "@/components/metiers/MetierWorkProcess";
import MetierNavigation from "@/components/metiers/MetierNavigation";

// Import des données des métiers
import { metierDetailsData } from "@/data/metierDetailsData";

// Define the standard FAQ interface to match ServiceFAQ requirements
interface FAQ {
  question: string;
  answer: string;
}

const MetierDetail = () => {
  const { serviceSlug, metierId } = useParams();
  const metierData = metierDetailsData.find(metier => metier.id === metierId && metier.serviceSlug === serviceSlug);

  if (!metierData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Corps de métier non trouvé</h1>
        <Button className="mt-4" asChild>
          <Link to={`/services/${serviceSlug}`}>Retour au service</Link>
        </Button>
      </div>
    );
  }

  // Transform FAQs to ensure they match the required format
  const standardizedFaqs: FAQ[] = metierData.faqs.map(faq => {
    // If the FAQ has a description instead of an answer, use the description as the answer
    if ('description' in faq && !('answer' in faq)) {
      return {
        question: faq.question,
        answer: faq.description
      };
    }
    // Otherwise, return the FAQ as is (it should have an answer)
    return faq as FAQ;
  });

  return (
    <>
      <Helmet>
        <title>{metierData.title} | qoob rénovations</title>
        <meta name="description" content={metierData.metaDescription} />
        <meta name="keywords" content={metierData.keywords.join(', ')} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero de la page métier */}
          <MetierHero 
            serviceSlug={serviceSlug!}
            serviceName={metierData.serviceName}
            title={metierData.title}
            subtitle={metierData.subtitle}
            heroImage={metierData.heroImage}
          />

          {/* Présentation détaillée */}
          <MetierPresentation
            presentationTitle={metierData.presentationTitle}
            presentationText={metierData.presentationText}
            presentationImage={metierData.presentationImage}
            keyPoints={metierData.keyPoints}
            title={metierData.title}
          />

          {/* Expertises spécifiques */}
          <MetierExpertise 
            expertises={metierData.expertises}
            title={metierData.title}
          />

          {/* Processus de travail */}
          <MetierWorkProcess workProcess={metierData.workProcess} />

          {/* FAQ */}
          <ServiceFAQ faqs={standardizedFaqs} />

          {/* CTA */}
          <ServiceCTA title={metierData.title} />

          {/* Navigation entre sections */}
          <MetierNavigation 
            serviceName={metierData.serviceName}
            serviceSlug={serviceSlug!}
            relatedMetiers={metierData.relatedMetiers}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MetierDetail;
