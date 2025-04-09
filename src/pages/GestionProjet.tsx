
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/services/ServiceCTA";
import ProjectManagementInfo from "@/components/form/ProjectManagementInfo";
import { ClipboardCheck, Clock, Users, FileCheck, PencilRuler, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const GestionProjet = () => {
  return (
    <>
      <Helmet>
        <title>Gestion de Projet de Rénovation | Conducteur de Travaux | qoob rénovations</title>
        <meta 
          name="description" 
          content="Service de gestion de projet de rénovation : conducteur de travaux, OPC, suivi de chantier et coordination des corps de métier. Expertise complète pour votre projet."
        />
        <meta 
          name="keywords" 
          content="gestion projet rénovation, conducteur de travaux, OPC chantier, suivi chantier, coordination artisans, maître d'œuvre, gestion travaux, pilotage chantier"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Gestion de Projet de Rénovation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "qoob rénovations",
              "telephone": "0785010633",
              "email": "qoob.sas@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "987 route du Bladet",
                "addressLocality": "Lavergne",
                "postalCode": "47800",
                "addressCountry": "FR"
              }
            },
            "areaServed": "Lot-et-Garonne et départements limitrophes",
            "description": "Service complet de gestion de projet de rénovation incluant conducteur de travaux, OPC, suivi de chantier et coordination des artisans.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "Inclus dans nos projets de rénovation"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero section */}
          <div 
            className="relative bg-cover bg-center py-20 px-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/lovable-uploads/1cb0d0e5-f255-4b90-a116-7db3d6b843be.png)`,
              backgroundAttachment: "fixed"
            }}
          >
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                Gestion de Projet de Rénovation
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                Un accompagnement sur-mesure avec notre service de conducteur de travaux, OPC et coordination des corps de métier.
              </p>
            </div>
          </div>

          {/* Présentation principale */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6 text-center">
                Une gestion experte pour votre projet de rénovation
              </h2>
              <div className="prose prose-lg max-w-none mb-10">
                <p>
                  La réussite d'un projet de rénovation ne dépend pas uniquement de la qualité des matériaux et du savoir-faire des artisans. Elle repose également sur une <strong>gestion de projet rigoureuse et efficace</strong>, capable de coordonner l'ensemble des intervenants et de garantir le respect des délais et du budget.
                </p>
                <p>
                  Chez qoob rénovations, nous intégrons systématiquement dans nos prestations un service complet de gestion de projet, assuré par des professionnels expérimentés. Ce service est <strong>inclus dans tous nos projets de rénovation</strong>, quelle que soit leur envergure.
                </p>
              </div>
              
              {/* Services inclus */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <ClipboardCheck className="w-10 h-10 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Conducteur de travaux</h3>
                      <p className="text-gray-700">
                        Expert technique qui supervise l'ensemble du projet, garantit le respect des plans et des normes, et assure la coordination technique entre les différents corps de métier.
                      </p>
                    </div>
                  </div>
                  <ul className="ml-14 list-disc text-gray-600 space-y-1">
                    <li>Validation des solutions techniques</li>
                    <li>Contrôle de la conformité des travaux</li>
                    <li>Gestion des imprévus techniques</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <Clock className="w-10 h-10 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">OPC (Ordonnancement, Pilotage et Coordination)</h3>
                      <p className="text-gray-700">
                        Planification détaillée et optimisée du calendrier d'intervention de chaque corps de métier pour garantir une progression fluide du chantier.
                      </p>
                    </div>
                  </div>
                  <ul className="ml-14 list-disc text-gray-600 space-y-1">
                    <li>Élaboration du planning détaillé</li>
                    <li>Optimisation des délais d'intervention</li>
                    <li>Anticipation et gestion des contraintes temporelles</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <FileCheck className="w-10 h-10 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Suivi de chantier</h3>
                      <p className="text-gray-700">
                        Contrôle régulier de l'avancement des travaux avec des visites de chantier planifiées et des rapports détaillés pour vous tenir informé.
                      </p>
                    </div>
                  </div>
                  <ul className="ml-14 list-disc text-gray-600 space-y-1">
                    <li>Visites hebdomadaires du chantier</li>
                    <li>Rapports d'avancement détaillés</li>
                    <li>Validation des étapes clés du projet</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <Users className="w-10 h-10 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Coordination des corps de métier</h3>
                      <p className="text-gray-700">
                        Sélection rigoureuse des artisans et gestion des interactions entre les différents intervenants pour assurer une collaboration efficace.
                      </p>
                    </div>
                  </div>
                  <ul className="ml-14 list-disc text-gray-600 space-y-1">
                    <li>Sélection d'artisans qualifiés et certifiés</li>
                    <li>Organisation des réunions de coordination</li>
                    <li>Gestion des interfaces entre corps d'état</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Processus de gestion */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-10 text-center">
                Notre processus de gestion de projet
              </h2>
              
              <div className="relative">
                {/* Ligne verticale connectant les étapes */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 flex-shrink-0 flex items-center justify-center relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    <div className="flex-grow md:ml-8 mt-4 md:mt-0">
                      <h3 className="text-xl font-serif font-semibold mb-3 flex items-center">
                        <PencilRuler className="w-6 h-6 mr-2 text-primary hidden md:block" />
                        Étude et conception
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Analyse approfondie de votre projet, définition des besoins et conception détaillée des solutions techniques adaptées.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Livrables:</h4>
                        <ul className="list-disc ml-5 text-gray-600 text-sm">
                          <li>Plan d'exécution détaillé</li>
                          <li>Cahier des charges techniques</li>
                          <li>Planning prévisionnel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 flex-shrink-0 flex items-center justify-center relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                    </div>
                    <div className="flex-grow md:ml-8 mt-4 md:mt-0">
                      <h3 className="text-xl font-serif font-semibold mb-3 flex items-center">
                        <Users className="w-6 h-6 mr-2 text-primary hidden md:block" />
                        Sélection des intervenants
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Choix rigoureux des artisans qualifiés pour chaque corps de métier nécessaire à votre projet, selon des critères de qualité et d'expertise.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Critères de sélection:</h4>
                        <ul className="list-disc ml-5 text-gray-600 text-sm">
                          <li>Certifications et qualifications professionnelles</li>
                          <li>Expérience dans des projets similaires</li>
                          <li>Références vérifiées</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 flex-shrink-0 flex items-center justify-center relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                    </div>
                    <div className="flex-grow md:ml-8 mt-4 md:mt-0">
                      <h3 className="text-xl font-serif font-semibold mb-3 flex items-center">
                        <Clock className="w-6 h-6 mr-2 text-primary hidden md:block" />
                        Exécution et contrôle
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Supervision quotidienne de l'avancement des travaux, contrôles qualité réguliers et ajustements nécessaires pour garantir le respect du cahier des charges.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Suivi continu:</h4>
                        <ul className="list-disc ml-5 text-gray-600 text-sm">
                          <li>Réunions de chantier hebdomadaires</li>
                          <li>Points de contrôle à chaque étape clé</li>
                          <li>Communication régulière avec le client</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-16 flex-shrink-0 flex items-center justify-center relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                    </div>
                    <div className="flex-grow md:ml-8 mt-4 md:mt-0">
                      <h3 className="text-xl font-serif font-semibold mb-3 flex items-center">
                        <CheckCircle2 className="w-6 h-6 mr-2 text-primary hidden md:block" />
                        Livraison et garanties
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Validation finale du projet, remise des documents de fin de chantier et mise en place des garanties post-travaux pour votre tranquillité.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Documents remis:</h4>
                        <ul className="list-disc ml-5 text-gray-600 text-sm">
                          <li>Procès-verbal de réception</li>
                          <li>Dossier des ouvrages exécutés (DOE)</li>
                          <li>Certificats de garantie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Avantages */}
          <section className="py-16 px-4 bg-warmBeige-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-10 text-center">
                Les avantages de notre gestion de projet
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Un interlocuteur unique</h3>
                  <p className="text-gray-700">
                    Vous disposez d'un point de contact dédié qui centralise toutes les informations et coordonne l'ensemble des intervenants.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Maîtrise des délais</h3>
                  <p className="text-gray-700">
                    Grâce à une planification rigoureuse et un suivi quotidien, nous garantissons le respect des échéances définies.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Contrôle des coûts</h3>
                  <p className="text-gray-700">
                    Une gestion transparente du budget avec anticipation des dépenses et prévention des surcoûts imprévus.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Expertise technique</h3>
                  <p className="text-gray-700">
                    Des professionnels qualifiés qui connaissent parfaitement les contraintes techniques et réglementaires de votre projet.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Coordination optimale</h3>
                  <p className="text-gray-700">
                    Une synchronisation efficace des différents corps de métier pour éviter les temps morts et les conflits d'intervention.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Tranquillité d'esprit</h3>
                  <p className="text-gray-700">
                    Vous êtes libéré des contraintes de gestion tout en restant informé de l'avancement de votre projet à chaque étape.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-10 text-center">
                Questions fréquentes sur la gestion de projet
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Le service de gestion de projet est-il facturé en supplément ?</h3>
                  <p className="text-gray-700">
                    Non, chez qoob rénovations, la gestion de projet est systématiquement incluse dans nos prestations de rénovation, sans coût supplémentaire. Nous considérons qu'un projet réussi nécessite une coordination professionnelle.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Puis-je participer au suivi du chantier ?</h3>
                  <p className="text-gray-700">
                    Absolument. Nous encourageons votre participation aux réunions de chantier programmées et nous vous tenons régulièrement informé de l'avancement des travaux. Votre implication est précieuse pour les prises de décision importantes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Comment sont gérés les imprévus pendant le chantier ?</h3>
                  <p className="text-gray-700">
                    Notre conducteur de travaux identifie rapidement tout imprévu technique et vous propose des solutions adaptées. Une provision pour aléas est généralement prévue dans le budget initial pour faire face aux situations imprévues sans compromettre le projet.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif font-semibold mb-3">Quel est le profil du conducteur de travaux qui suivra mon projet ?</h3>
                  <p className="text-gray-700">
                    Nos conducteurs de travaux sont des professionnels expérimentés, formés aux techniques de construction et de rénovation, avec une parfaite connaissance des réglementations en vigueur. Ils possèdent généralement une formation BTS, DUT ou ingénieur dans le domaine du bâtiment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <ServiceCTA title="Gestion de Projet" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GestionProjet;
