
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Si nous sommes déjà sur la page d'accueil, faisons défiler jusqu'à la section des services
    if (location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si nous sommes sur une autre page, naviguons vers la page d'accueil avec l'ancre #services
      navigate('/#services');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
            Transformez Votre Habitat avec Style et Confort
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Confiez vos projets à nos artisans experts en rénovation
          </p>
          <div className="space-x-4">
            <Button className="cta-button text-lg" asChild>
              <Link to="/demande-devis">
                Obtenir mon Devis Gratuit
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-medium py-3 px-6 rounded-md transition-colors duration-300" 
              asChild
            >
              <Link 
                to="/#services" 
                onClick={handleServicesClick}
              >
                Découvrir nos Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
