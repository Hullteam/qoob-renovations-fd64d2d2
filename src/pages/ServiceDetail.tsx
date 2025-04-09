
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight, Clock, ThumbsUp, Banknote } from "lucide-react";

// Import des données de services
import { serviceDetailsData } from "@/data/serviceDetailsData";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const serviceData = serviceDetailsData.find(service => service.slug === serviceSlug);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Service non trouvé</h1>
        <Button className="mt-4" asChild>
          <a href="/#services">Retour aux services</a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{serviceData.title} | qoob rénovations</title>
        <meta name="description" content={serviceData.metaDescription} />
        <meta name="keywords" content={serviceData.keywords.join(', ')} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero de la page service */}
          <div 
            className="relative bg-cover bg-center py-20 px-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${serviceData.heroImage})`,
              backgroundAttachment: "fixed"
            }}
          >
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                {serviceData.title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                {serviceData.subtitle}
              </p>
              <Button size="lg">
                Demander un devis gratuit
              </Button>
            </div>
          </div>

          {/* Présentation du service */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6">
                    {serviceData.presentationTitle}
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    {serviceData.presentationText.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <ul className="space-y-3">
                      {serviceData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={serviceData.presentationImage} 
                    alt={`${serviceData.title} par qoob rénovations`} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      <span className="font-medium">Délai moyen</span>
                    </div>
                    <p className="text-sm">{serviceData.averageDuration}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services détaillés */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
                Nos prestations de {serviceData.title.toLowerCase()}
              </h2>

              <Tabs defaultValue={serviceData.detailedServices[0].id} className="w-full">
                <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 bg-transparent">
                  {serviceData.detailedServices.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="border border-gray-200 rounded-md py-2 px-3 text-center data-[state=active]:border-primary data-[state=active]:bg-primary/10"
                    >
                      {service.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {serviceData.detailedServices.map((service) => (
                  <TabsContent key={service.id} value={service.id} className="border rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                        <div className="space-y-4 mb-6">
                          {service.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-700">{paragraph}</p>
                          ))}
                        </div>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="flex items-center gap-2">
                          Demander un devis <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-auto rounded-lg shadow-md mb-4"
                        />
                        {service.price && (
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <Banknote className="w-5 h-5 text-primary mr-2" />
                              <span className="font-medium">Tarif indicatif</span>
                            </div>
                            <p className="text-sm mb-2">{service.price}</p>
                            <p className="text-xs text-gray-500">*Prix variable selon la complexité du projet</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
                Questions fréquentes
              </h2>

              <div className="space-y-6">
                {serviceData.faqs.map((faq, index) => (
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
                Prêt à transformer votre intérieur ?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet de {serviceData.title.toLowerCase()} et obtenir un devis personnalisé gratuit.
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

          {/* Témoignages */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
                Ce que nos clients disent
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceData.testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <ThumbsUp 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
