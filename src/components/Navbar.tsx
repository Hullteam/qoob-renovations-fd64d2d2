
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="text-primary font-serif text-2xl font-bold">Maison Accueillante</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Nos Services
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
              Témoignages
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-primary transition-colors">
              Réalisations
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="cta-button">
              Demander un Devis
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
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
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Services
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Réalisations
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="cta-button w-full">
                Demander un Devis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
