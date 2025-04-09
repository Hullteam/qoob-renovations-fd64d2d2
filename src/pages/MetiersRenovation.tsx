import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { metierDetailsData } from "@/data/metierDetailsData";
import { Wrench, Book, Award, Ruler, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MetiersRenovation = () => {
  // Regrouper les métiers par type de service
  const metiersByService = metierDetailsData.reduce((acc, metier) => {
    if (!acc[metier.serviceName]) {
      acc[metier.serviceName] = [];
    }
    acc[metier.serviceName].push(metier);
    return acc;
  }, {} as Record<string, typeof metierDetailsData>);

  // Liste des services dans l'ordre souhaité
  const serviceOrder = [
    "Rénovation Intérieure", 
    "Rénovation Extérieure", 
    "Rénovation Énergétique", 
    "Aménagement Cuisines & Salles de Bains"
  ];

  return (
    <>
      <Helmet>
        <title>Les Métiers de la Rénovation | Guide Complet | qoob rénovations</title>
        <meta 
          name="description" 
          content="Découvrez tous les métiers de la rénovation: compétences, normes, techniques et spécificités. Guide complet pour comprendre les expertises nécessaires à vos projets." 
        />
        <meta 
          name="keywords" 
          content="métiers rénovation, artisans bâtiment, compétences rénovation, normes métiers, électricien, plombier, peintre, menuisier, carreleur" 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "qoob rénovations - Expertise en métiers du bâtiment",
            "description": "Entreprise spécialisée dans tous les métiers de la rénovation et de la construction",
            "areaServed": "Lot-et-Garonne et départements limitrophes",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de rénovation",
              "itemListElement": metierDetailsData.map((metier, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": metier.title,
                  "description": metier.subtitle
                },
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-warmBeige-50 to-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-warmBeige-800 mb-6">
                  Les Métiers de la Rénovation
                </h1>
                <p className="text-xl text-warmBeige-700 mb-10">
                  Guide complet des corps de métiers du bâtiment : compétences, normes et spécificités
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="bg-warmBeige-100 rounded-full px-4 py-2 text-warmBeige-800 flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Expertises certifiées</span>
                  </div>
                  <div className="bg-warmBeige-100 rounded-full px-4 py-2 text-warmBeige-800 flex items-center">
                    <Book className="h-4 w-4 mr-2" />
                    <span>Normes & réglementations</span>
                  </div>
                  <div className="bg-warmBeige-100 rounded-full px-4 py-2 text-warmBeige-800 flex items-center">
                    <Ruler className="h-4 w-4 mr-2" />
                    <span>Techniques spécifiques</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800">
                  Comprendre les Corps de Métiers du Bâtiment
                </h2>
                <p className="text-gray-700 mb-4">
                  La rénovation d'un habitat fait appel à de multiples compétences et savoir-faire spécialisés. 
                  Chaque corps de métier possède son expertise propre, ses techniques spécifiques et doit respecter 
                  des normes précises pour garantir qualité et sécurité.
                </p>
                <p className="text-gray-700 mb-4">
                  Chez qoob rénovations, nous réunissons des artisans experts dans tous les domaines de la rénovation, 
                  qu'elle soit intérieure, extérieure ou énergétique. Comprendre les spécificités de chaque métier 
                  vous permettra de mieux appréhender votre projet et les interventions nécessaires à sa réussite.
                </p>
                <p className="text-gray-700 mb-6">
                  Découvrez ci-dessous notre guide complet des métiers de la rénovation, leurs domaines d'expertise, 
                  les normes qu'ils respectent et comment leurs compétences s'articulent pour transformer votre habitat.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation par onglets */}
          <section className="py-12 bg-warmBeige-50">
            <div className="container mx-auto px-4">
              <Tabs defaultValue={serviceOrder[0]} className="w-full">
                <TabsList className="bg-white mb-8 p-1 flex flex-wrap justify-center">
                  {serviceOrder.map((serviceName) => (
                    <TabsTrigger 
                      key={serviceName} 
                      value={serviceName}
                      className="data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {serviceName}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {serviceOrder.map((serviceName) => (
                  <TabsContent key={serviceName} value={serviceName} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {metiersByService[serviceName]?.map((metier) => (
                        <div 
                          key={metier.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={metier.heroImage} 
                              alt={`${metier.title} - qoob rénovations`} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-serif font-semibold mb-2 text-warmBeige-800">
                              {metier.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {metier.subtitle}
                            </p>
                            <div className="mb-4">
                              <h4 className="font-medium text-warmBeige-700 mb-2 text-sm">Expertises principales:</h4>
                              <ul className="list-disc pl-5 text-sm text-gray-600">
                                {metier.expertises.slice(0, 2).map((expertise, idx) => (
                                  <li key={idx}>{expertise.title}</li>
                                ))}
                              </ul>
                            </div>
                            <Button variant="outline" className="w-full" asChild>
                              <Link to={`/services/${metier.serviceSlug}/metiers/${metier.id}`}>
                                Découvrir ce métier
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* Section Normes et réglementations */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800">
                  Normes et Réglementations en Rénovation
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Normes Électriques</h3>
                  <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
                    <h4 className="font-medium mb-2">NF C 15-100</h4>
                    <p className="text-gray-700 text-sm">
                      Norme française régissant les installations électriques à basse tension. Elle définit les règles 
                      de conception, de réalisation et d'entretien des installations électriques pour assurer la sécurité 
                      des personnes et des biens.
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Tout électricien doit respecter cette norme pour les nouveaux circuits et la mise aux normes 
                    des installations existantes. Elle couvre les équipements de protection, le nombre de prises par pièce, 
                    les circuits spécialisés, etc.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Normes Plomberie et Sanitaires</h3>
                  <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
                    <h4 className="font-medium mb-2">NF DTU 60.1 et NF DTU 60.11</h4>
                    <p className="text-gray-700 text-sm">
                      Documents techniques unifiés qui définissent les règles de l'art pour les travaux de plomberie 
                      sanitaire et les installations d'alimentation en eau.
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Ces normes encadrent les diamètres de canalisations, pressions d'eau, systèmes anti-retour, 
                    acoustique des installations et raccordements. Essentielles pour tout plombier intervenant sur votre réseau.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Réglementations Thermiques</h3>
                  <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
                    <h4 className="font-medium mb-2">RT 2012 et RE 2020</h4>
                    <p className="text-gray-700 text-sm">
                      Réglementations thermiques définissant les exigences en matière de performance énergétique 
                      des bâtiments neufs et des rénovations lourdes. La RE 2020 a remplacé la RT 2012 avec des exigences accrues.
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Ces réglementations impactent tous les corps de métier liés à l'isolation, au chauffage, 
                    à la ventilation et à l'étanchéité à l'air. Elles visent à réduire la consommation énergétique des bâtiments.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Accessibilité PMR</h3>
                  <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
                    <h4 className="font-medium mb-2">Loi du 11 février 2005</h4>
                    <p className="text-gray-700 text-sm">
                      Réglementation pour l'égalité des droits et des chances des personnes handicapées, imposant des normes 
                      d'accessibilité pour les établissements recevant du public et certaines catégories de logements.
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Cette réglementation définit les dimensions minimales des espaces de circulation, hauteurs de prises, 
                    accessibilité des sanitaires, etc. Elle concerne particulièrement les menuisiers, plombiers et électriciens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Formations et Certifications */}
          <section className="py-16 bg-warmBeige-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800 text-center">
                  Formations et Certifications des Artisans
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Qualifications RGE</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      "Reconnu Garant de l'Environnement" est une qualification octroyée aux professionnels 
                      réalisant des travaux d'économie d'énergie ou d'installation d'équipements utilisant 
                      des énergies renouvelables.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Cette certification est indispensable pour que vos travaux de rénovation énergétique 
                      soient éligibles aux aides financières de l'État.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Qualibat</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Organisme indépendant qui délivre des certifications aux entreprises du bâtiment, 
                      attestant de leurs compétences techniques, de leur savoir-faire et de leur fiabilité.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Les certifications Qualibat sont classées par métier et par niveau de technicité, 
                      garantissant l'expertise des artisans dans leur domaine d'intervention.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-10">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Parcours de Formation</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Les artisans du bâtiment suivent généralement un parcours de formation initiale comprenant:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 text-sm">
                    <li>CAP ou BEP dans leur domaine de spécialité (électricien, plombier, menuisier...)</li>
                    <li>Brevet Professionnel (BP) pour approfondir leur expertise</li>
                    <li>Bac Pro ou BTS pour les postes à responsabilité technique</li>
                    <li>Formation continue pour s'adapter aux évolutions technologiques et réglementaires</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    De nombreux artisans complètent leur formation par un apprentissage auprès de maîtres-artisans, 
                    perpétuant ainsi des savoir-faire traditionnels tout en les adaptant aux exigences modernes.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    Chez qoob rénovations, nous sélectionnons des artisans qualifiés et certifiés, 
                    garantissant une expertise reconnue dans chaque corps de métier.
                  </p>
                  <Button asChild>
                    <Link to="/demande-devis">
                      Demander un devis avec nos artisans experts
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Section Coordination des Corps de Métier */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800">
                  Coordination des Corps de Métier
                </h2>
                <p className="text-gray-700 mb-6">
                  La réussite d'un projet de rénovation repose en grande partie sur une coordination efficace 
                  entre les différents corps de métier. Chez qoob rénovations, nous assurons cette coordination 
                  pour garantir que chaque intervention s'intègre harmonieusement dans le processus global.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Ordre d'Intervention</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li>
                      <span className="font-medium">Travaux de structure et de gros œuvre</span>
                      <p className="text-sm mt-1">
                        Abattement de cloisons, création d'ouvertures, renforcements structurels réalisés par les maçons.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Réseaux techniques</span>
                      <p className="text-sm mt-1">
                        Installation des réseaux d'électricité, plomberie et ventilation avant fermeture des murs et plafonds.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Isolation et cloisons</span>
                      <p className="text-sm mt-1">
                        Mise en place de l'isolation thermique et acoustique, puis construction des nouvelles cloisons.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Revêtements</span>
                      <p className="text-sm mt-1">
                        Pose des revêtements de sol, carrelage, puis peintures et finitions murales.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Menuiseries et équipements</span>
                      <p className="text-sm mt-1">
                        Installation des menuiseries intérieures, cuisines, salles de bains et autres aménagements.
                      </p>
                    </li>
                    <li>
                      <span className="font-medium">Finitions</span>
                      <p className="text-sm mt-1">
                        Dernières retouches, nettoyage et livraison du chantier.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="bg-warmBeige-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Interactions entre corps de métier</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Certains métiers doivent travailler en étroite collaboration pour garantir la qualité de la rénovation:
                  </p>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>
                      <span className="font-medium">Électricien et Plaquiste</span>: coordination pour l'emplacement des boîtiers électriques et passages de câbles avant fermeture des murs.
                    </li>
                    <li>
                      <span className="font-medium">Plombier et Carreleur</span>: planification des arrivées d'eau et évacuations avant la pose du carrelage.
                    </li>
                    <li>
                      <span className="font-medium">Menuisier et Peintre</span>: chronologie des interventions pour éviter d'endommager les finitions.
                    </li>
                    <li>
                      <span className="font-medium">Designer d'intérieur et tous corps d'état</span>: transmission des plans et exigences esthétiques à respecter par chaque intervenant.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section FAQ */}
          <section className="py-16 bg-warmBeige-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800 text-center">
                  Questions Fréquentes sur les Métiers de la Rénovation
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Comment choisir le bon artisan pour mes travaux ?</h3>
                    <p className="text-gray-700">
                      Vérifiez les qualifications et certifications (RGE, Qualibat), demandez des références et photos de réalisations 
                      similaires, et assurez-vous que l'artisan est assuré avec une garantie décennale. Avec qoob rénovations, 
                      nous sélectionnons pour vous des artisans qualifiés et expérimentés dans chaque domaine.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Quelle différence entre un artisan et une entreprise générale du bâtiment ?</h3>
                    <p className="text-gray-700">
                      Un artisan est spécialisé dans un métier spécifique (plomberie, électricité, etc.) tandis qu'une entreprise générale 
                      coordonne plusieurs corps de métier pour des projets complets. qoob rénovations agit comme entreprise générale 
                      en coordonnant des artisans experts, vous offrant ainsi le meilleur des deux mondes : expertise spécialisée et coordination globale.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Quels métiers sont indispensables pour rénover une salle de bains ?</h3>
                    <p className="text-gray-700">
                      Une rénovation complète de salle de bains nécessite généralement l'intervention d'un plombier (sanitaires, évacuations), 
                      d'un électricien (éclairage, prises sécurisées), d'un carreleur (sol et murs), et parfois d'un menuisier 
                      pour les meubles sur mesure. Un étanchéiste peut également intervenir pour l'imperméabilisation des zones humides.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Comment savoir si un artisan respecte les normes en vigueur ?</h3>
                    <p className="text-gray-700">
                      Un artisan sérieux doit pouvoir vous présenter ses certifications et qualifications. Il doit également 
                      vous fournir, en fin de travaux, des attestations de conformité (comme le Consuel pour l'électricité). 
                      Chez qoob rénovations, nous garantissons que tous nos intervenants respectent les normes et réglementations 
                      en vigueur, et nous vous fournissons tous les documents nécessaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 bg-warmBeige-800 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                Confiez votre projet à nos artisans experts
              </h2>
              <p className="max-w-2xl mx-auto mb-8">
                Que vous ayez besoin d'un corps de métier spécifique ou d'une équipe complète pour votre rénovation, 
                qoob rénovations vous assure qualité et professionnalisme à chaque étape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/demande-devis">
                    Demander un devis gratuit
                  </Link>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-warmBeige-800" size="lg" asChild>
                  <Link to="/zones-intervention">
                    Voir nos zones d'intervention
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

export default MetiersRenovation;
