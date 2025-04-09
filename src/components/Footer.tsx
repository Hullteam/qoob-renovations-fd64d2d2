
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-warmBeige-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/e02a151a-8159-4939-a4d2-8e859e5d6296.png" 
                alt="rénovations logo" 
                className="h-16" 
              />
            </div>
            <p className="text-warmBeige-200 mb-4">Votre partenaire de confiance pour tous vos projets de rénovation depuis 2016.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-warmBeige-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-warmBeige-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                <span>07 85 01 06 33</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                <span>qoob.sas@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                <span>15 Avenue des Artisans<br />75011 Paris, France</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-warmBeige-200 hover:text-white transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-warmBeige-200 hover:text-white transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="text-warmBeige-200 hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-warmBeige-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Horaires d'Ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span>8h30 - 19h00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi:</span>
                <span>9h00 - 17h00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-warmBeige-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-warmBeige-300">
            © {new Date().getFullYear()} qoob rénovations. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-4 text-sm text-warmBeige-300">
              <li>
                <Link to="/confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/conditions-generales" className="hover:text-white transition-colors">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
