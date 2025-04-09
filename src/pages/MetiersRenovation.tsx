
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetiersHero from "@/components/metiers/MetiersHero";
import MetiersIntroduction from "@/components/metiers/MetiersIntroduction";
import MetiersList from "@/components/metiers/MetiersList";
import MetiersNormes from "@/components/metiers/MetiersNormes";
import MetiersFormations from "@/components/metiers/MetiersFormations";
import MetiersCoordination from "@/components/metiers/MetiersCoordination";
import MetiersFAQ from "@/components/metiers/MetiersFAQ";
import MetiersCTA from "@/components/metiers/MetiersCTA";
import MetiersSchemaOrg from "@/components/metiers/MetiersSchemaOrg";

const MetiersRenovation = () => {
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
      </Helmet>
      <MetiersSchemaOrg />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <MetiersHero />

          {/* Introduction */}
          <MetiersIntroduction />

          {/* Navigation par onglets */}
          <MetiersList />

          {/* Section Normes et réglementations */}
          <MetiersNormes />

          {/* Section Formations et Certifications */}
          <MetiersFormations />

          {/* Section Coordination des Corps de Métier */}
          <MetiersCoordination />

          {/* Section FAQ */}
          <MetiersFAQ />

          {/* CTA Final */}
          <MetiersCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MetiersRenovation;
