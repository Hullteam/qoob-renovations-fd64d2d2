
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll to anchor if on homepage
  const handleAnchorClick = (anchor: string) => {
    setIsMenuOpen(false);
    
    // If we're on the homepage, scroll to the anchor
    if (location.pathname === '/') {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Determine if the current path is a service or métier page
  const isServicePage = location.pathname.includes('/services/');
  const isZonesPage = location.pathname.includes('/zones-intervention');
  const isEstimationPage = location.pathname.includes('/estimation-avant-achat');

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/e02a151a-8159-4939-a4d2-8e859e5d6296.png" 
                alt="rénovations logo" 
                className="h-20" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#services" 
              className={`${isServicePage ? 'text-primary' : 'text-gray-600'} hover:text-primary transition-colors`}
              onClick={() => handleAnchorClick('services')}
            >
              Nos Services
            </Link>
            <Link
              to="/zones-intervention"
              className={`${isZonesPage ? 'text-primary' : 'text-gray-600'} hover:text-primary transition-colors`}
            >
              Zones d'Intervention
            </Link>
            <Link
              to="/estimation-avant-achat"
              className={`${isEstimationPage ? 'text-primary' : 'text-gray-600'} hover:text-primary transition-colors`}
            >
              Estimation Avant Achat
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-gray-600 hover:text-primary transition-colors" 
              onClick={() => handleAnchorClick('testimonials')}
            >
              Témoignages
            </Link>
            <Link 
              to="/#gallery" 
              className="text-gray-600 hover:text-primary transition-colors" 
              onClick={() => handleAnchorClick('gallery')}
            >
              Réalisations
            </Link>
            <Link 
              to="/#contact" 
              className="text-gray-600 hover:text-primary transition-colors" 
              onClick={() => handleAnchorClick('contact')}
            >
              Contact
            </Link>
            <Button className="cta-button cta-pulse" asChild>
              <Link to="/demande-devis">
                Demander un Devis
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/#services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isServicePage ? 'text-primary' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
              onClick={() => handleAnchorClick('services')}
            >
              Nos Services
            </Link>
            <Link
              to="/zones-intervention"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isZonesPage ? 'text-primary' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
            >
              Zones d'Intervention
            </Link>
            <Link
              to="/estimation-avant-achat"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isEstimationPage ? 'text-primary' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
            >
              Estimation Avant Achat
            </Link>
            <Link
              to="/#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => handleAnchorClick('testimonials')}
            >
              Témoignages
            </Link>
            <Link
              to="/#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => handleAnchorClick('gallery')}
            >
              Réalisations
            </Link>
            <Link
              to="/#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => handleAnchorClick('contact')}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="cta-button cta-pulse w-full" asChild>
                <Link to="/demande-devis">
                  Demander un Devis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
