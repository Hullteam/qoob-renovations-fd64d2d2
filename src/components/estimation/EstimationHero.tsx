
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/utils/scrollUtils";

const EstimationHero = () => {
  const handleScrollToForm = () => {
    scrollToElement("estimation-form", 100);
  };

  return (
    <section 
      className="relative py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/e485f733-4f74-4a8f-b947-4a3ae077586b.png')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
          Estimation Gratuite de Travaux Avant Achat
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
          Évitez les mauvaises surprises et budgétisez vos travaux avant même d'acheter. Nos experts analysent votre futur bien et vous fournissent une estimation détaillée.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            onClick={handleScrollToForm}
            className="bg-primary hover:bg-primary/90"
          >
            Demander une estimation gratuite <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white border-white hover:bg-white/20"
            onClick={() => scrollToElement("process", 100)}
          >
            Comment ça marche ?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EstimationHero;
