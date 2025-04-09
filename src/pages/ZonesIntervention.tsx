
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZonesHero from "@/components/zones/ZonesHero";
import ZonesMap from "@/components/zones/ZonesMap";
import ZonesMajorCities from "@/components/zones/ZonesMajorCities";
import ZonesDepartments from "@/components/zones/ZonesDepartments";
import ZonesFAQ from "@/components/zones/ZonesFAQ";
import ZonesCTA from "@/components/zones/ZonesCTA";

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
          <ZonesHero />
          <ZonesMap />
          <ZonesMajorCities />
          <ZonesDepartments />
          <ZonesFAQ />
          <ZonesCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ZonesIntervention;
