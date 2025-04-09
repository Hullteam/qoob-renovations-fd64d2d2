
import { Helmet } from "react-helmet";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  mainLocation, 
  serviceRadius, 
  departments, 
  majorCities, 
  interventionFAQs 
} from "@/data/zonesInterventionData";

const ZonesIntervention = () => {
  return (
    <>
      <Helmet>
        <title>Zones d'Intervention | qoob rénovations</title>
        <meta 
          name="description" 
          content="Découvrez les zones d'intervention de qoob rénovations. Nous intervenons dans un rayon de 50 km autour de Lavergne (47800), notamment dans les départements du Lot-et-Garonne, Lot, Dordogne, Tarn-et-Garonne et Gers." 
        />
        <meta 
          name="keywords" 
          content="rénovation Lavergne, travaux Lot-et-Garonne, artisan Agen, rénovation Marmande, rénovation Villeneuve-sur-Lot, rénovation Bergerac, artisan Lot, rénovation Dordogne" 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero section */}
          <section className="bg-warmBeige-50 py-12 md:py-20 border-b border-warmBeige-100">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warmBeige-900">
                  Nos Zones d'Intervention
                </h1>
                <p className="text-lg md:text-xl text-warmBeige-700 mb-8 max-w-3xl mx-auto">
                  qoob rénovations intervient dans un rayon de {serviceRadius} km autour de {mainLocation.name} ({mainLocation.postalCode}), couvrant plusieurs départements du Sud-Ouest.
                </p>
              </div>
            </div>
          </section>

          {/* Carte et informations principales */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-warmBeige-100">
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Notre siège social</h3>
                        <p className="text-warmBeige-700">
                          {mainLocation.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <Navigation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Rayon d'intervention</h3>
                        <p className="text-warmBeige-700">
                          {serviceRadius} km autour de {mainLocation.name} ({mainLocation.postalCode})
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Contactez-nous</h3>
                        <p className="text-warmBeige-700">
                          Vous ne trouvez pas votre ville ? Contactez-nous pour vérifier si nous pouvons intervenir dans votre zone.
                        </p>
                        <Button className="cta-button mt-4" asChild>
                          <Link to="/demande-devis">
                            Demander un Devis
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
                    {/* Placeholder pour une carte interactive que nous pourrons ajouter ultérieurement */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-70" 
                      style={{backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop')"}} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
                      <div className="bg-white/90 p-4 rounded-lg shadow-lg">
                        <h3 className="font-semibold text-lg mb-1">Zone d'intervention</h3>
                        <p className="text-sm">
                          Nous intervenons principalement dans les départements du Lot-et-Garonne, Lot, Dordogne, Tarn-et-Garonne et Gers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Villes principales */}
          <section className="bg-warmBeige-50 py-12 border-y border-warmBeige-100">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-12">Principales Villes Couvertes</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {majorCities.map((city) => (
                  <Card key={`${city.name}-${city.postalCode}`} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{city.name}</CardTitle>
                      <CardDescription>{city.postalCode} - {city.department}</CardDescription>
                    </CardHeader>
                    {city.description && (
                      <CardContent className="pt-0 text-sm">
                        <p>{city.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Tableau des départements et communes */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-4">
                Découvrez toutes nos zones d'intervention
              </h2>
              <p className="section-subtitle text-center">
                Consultez la liste complète des communes où nous intervenons dans chaque département.
              </p>
              
              <div className="mt-10">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {departments.map((dept) => (
                    <AccordionItem key={dept.code} value={dept.code} className="border border-warmBeige-200 rounded-lg shadow-sm bg-white">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center">
                          <span className="text-lg font-semibold">{dept.name}</span>
                          <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                            {dept.cities.length} communes
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <div className="text-warmBeige-700 mb-4">
                          {dept.description}
                        </div>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Ville</TableHead>
                                <TableHead>Code Postal</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {dept.cities.sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                                <TableRow key={`${city.name}-${city.postalCode}`}>
                                  <TableCell className="font-medium">{city.name}</TableCell>
                                  <TableCell>{city.postalCode}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section className="bg-warmBeige-50 py-12 border-t border-warmBeige-100">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-12">
                Questions fréquentes sur nos zones d'intervention
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {interventionFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left text-base font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-warmBeige-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à transformer votre habitat ?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Quelle que soit votre localisation dans notre zone d'intervention, nos artisans experts sont prêts à vous accompagner dans vos projets de rénovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
                  <Link to="/demande-devis">
                    Demander un Devis
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
                  <Link to="/#contact">
                    Nous Contacter
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ZonesIntervention;
