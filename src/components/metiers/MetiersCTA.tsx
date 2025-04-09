import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/utils/scrollUtils";

const MetiersCTA = () => {
  const location = useLocation();
  
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're on the homepage, scroll to the form directly
    if (location.pathname === '/') {
      scrollToElement("contact", 100);
    } else {
      // Otherwise navigate to homepage with a hash to scroll to form
      window.location.href = '/#contact';
    }
  };
  
  return (
    <section className="py-16 bg-warmBeige-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Confiez votre projet à nos artisans experts
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Que vous ayez besoin d'un corps de métier spécifique ou d'une équipe complète pour votre rénovation, 
          qoob rénovations vous assure qualité et professionnalisme à chaque étape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/demande-devis">
              Obtenir un devis détaillé
            </Link>
          </Button>
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-warmBeige-800" size="lg" onClick={handleScrollToForm}>
            Remplir le formulaire rapide
          </Button>
        </div>
        <p className="text-sm text-warmBeige-200 mt-4">
          En nous contactant, vous acceptez notre <Link to="/confidentialite" className="underline hover:text-white">politique de confidentialité</Link>.
          Nous respectons vos données personnelles conformément au RGPD.
        </p>
      </div>
    </section>
  );
};

export default MetiersCTA;
