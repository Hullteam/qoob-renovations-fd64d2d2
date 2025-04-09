
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const EstimationCTA = () => {
  return (
    <section className="py-16 px-4 bg-primary/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6">
          Besoin d'une estimation rapide ?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Nos experts sont disponibles pour vous accompagner dans votre projet d'acquisition et d'estimation des travaux.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="flex items-center">
            <a href="tel:0785010633">
              <Phone className="mr-2 h-5 w-5" /> Nous appeler : 07 85 01 06 33
            </a>
          </Button>
          <WhatsAppButton 
            phoneNumber="0785010633"
            message="Bonjour, je souhaite obtenir des informations sur votre service d'estimation avant achat."
            variant="outline"
            size="lg"
          />
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:qoob.sas@gmail.com">
              <Calendar className="mr-2 h-5 w-5" /> Prendre rendez-vous
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EstimationCTA;
