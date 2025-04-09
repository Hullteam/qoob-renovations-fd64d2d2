
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MetiersCTA = () => {
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
  );
};

export default MetiersCTA;
