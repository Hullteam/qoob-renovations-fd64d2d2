
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const ServiceNotFound = () => {
  const location = useLocation();
  
  // Détermine si nous sommes sur une page de métiers
  const isMetiersPage = location.pathname.includes('/metiers-renovation');
  
  // Définit le texte du bouton et la destination en fonction de la page
  const buttonText = isMetiersPage ? "Retour aux métiers" : "Retour aux services";
  const buttonLink = isMetiersPage ? "/metiers-renovation" : "/#services";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Service non trouvé</h1>
      <Button className="mt-4" asChild>
        <a href={buttonLink}>
          {buttonText}
        </a>
      </Button>
    </div>
  );
};

export default ServiceNotFound;
