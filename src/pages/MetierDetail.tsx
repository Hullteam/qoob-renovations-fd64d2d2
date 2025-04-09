
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, BadgeCheck, Clock } from "lucide-react";

// Import des données des métiers
import { metierDetailsData } from "@/data/metierDetailsData";

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
          <div 
            className="relative bg-cover bg-center py-20 px-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${metierData.heroImage})`,
              backgroundAttachment: "fixed"
            }}
          >
            <div className="max-w-7xl mx-auto text-center">
              <div className="text-white mb-4">
                <Link to={`/services/${serviceSlug}`} className="hover:underline">
                  {metierData.serviceName}
                </Link> &gt; {metierData.title}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                {metierData.title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                {metierData.subtitle}
              </p>
              <Button size="lg">
                Demander un devis gratuit
              </Button>
            </div>
          </div>

          {/* Présentation détaillée */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6">
                    {metierData.presentationTitle}
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    {metierData.presentationText.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <ul className="space-y-3">
                      {metierData.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={metierData.presentationImage} 
                    alt={metierData.title} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Expertises spécifiques */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
                Nos expertises en {metierData.title.toLowerCase()}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {metierData.expertises.map((expertise, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
                      <p className="text-gray-700 mb-4">{expertise.description}</p>
                      <ul className="space-y-2 mb-6">
                        {expertise.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Processus de travail */}
          <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
                Notre méthodologie de travail
              </h2>
              
              <div className="space-y-8">
                {metierData.workProcess.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                      {step.duration && (
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{step.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
                Questions fréquentes sur {metierData.title.toLowerCase()}
              </h2>

              <div className="space-y-6">
                {metierData.faqs.map((faq, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-3 flex items-start">
                        <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">Q</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 pl-8">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4 bg-primary/10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6">
                Vous avez un projet de {metierData.title.toLowerCase()} ?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé gratuit de la part de nos experts en {metierData.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">
                  Demander un devis gratuit
                </Button>
                <Button size="lg" variant="outline">
                  Nous appeler : 07 85 01 06 33
                </Button>
              </div>
            </div>
          </section>

          {/* Navigation entre sections */}
          <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-4">Explorer nos autres expertises en {metierData.serviceName}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {metierData.relatedMetiers.map((related, index) => (
                    <Button key={index} variant="outline" className="justify-start" asChild>
                      <Link to={`/services/${serviceSlug}/metiers/${related.id}`}>
                        <span>{related.name}</span>
                        <ArrowRight className="ml-auto h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MetierDetail;
