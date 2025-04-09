import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { scrollToElement } from "@/utils/scrollUtils";

interface ServiceCTAProps {
  title: string;
}

const ServiceCTA = ({ title }: ServiceCTAProps) => {
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
    <section className="py-16 px-4 bg-primary/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6">
          Prêt à transformer votre intérieur ?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de votre projet de {title.toLowerCase()} et obtenir un devis personnalisé gratuit.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/demande-devis">
              Demander un devis gratuit
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={handleScrollToForm}>
            Nous appeler : 07 85 01 06 33
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
