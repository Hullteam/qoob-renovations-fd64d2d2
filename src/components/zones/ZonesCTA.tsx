
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { majorCities } from "@/data/zonesInterventionData";
import { scrollToElement } from "@/utils/scrollUtils";
import WhatsAppButton from "@/components/WhatsAppButton";

const ZonesCTA = () => {
  // Get top cities to highlight in CTA
  const topCities = majorCities.slice(0, 5).map(city => city.name).join(', ');
  
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement("contact", 100);
  };
  
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à transformer votre habitat ?
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          Quelle que soit votre localisation dans notre zone d'intervention, nos artisans experts sont prêts à vous accompagner dans vos projets de rénovation.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Disponibles notamment à {topCities} et dans les communes environnantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
            <Link to="/demande-devis">
              Demander un Devis
            </Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" onClick={handleScrollToForm}>
            Nous Contacter
          </Button>
          <WhatsAppButton 
            phoneNumber="0785010633" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 bg-transparent" 
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ZonesCTA;
