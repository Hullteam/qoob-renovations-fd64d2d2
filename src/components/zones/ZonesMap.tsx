
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mainLocation, serviceRadius } from "@/data/zonesInterventionData";

const ZonesMap = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-warmBeige-100">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notre siège social</h3>
                  <p className="text-warmBeige-700">
                    {mainLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Navigation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rayon d'intervention</h3>
                  <p className="text-warmBeige-700">
                    {serviceRadius} km autour de {mainLocation.name} ({mainLocation.postalCode})
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contactez-nous</h3>
                  <p className="text-warmBeige-700">
                    Vous ne trouvez pas votre ville ? Contactez-nous pour vérifier si nous pouvons intervenir dans votre zone.
                  </p>
                  <Button className="cta-button mt-4" asChild>
                    <Link to="/demande-devis">
                      Demander un Devis
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-70" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop')"}} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/90 p-4 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-lg mb-1">Zone d'intervention</h3>
                  <p className="text-sm">
                    Nous intervenons principalement dans les départements du Lot-et-Garonne, Lot, Dordogne, Tarn-et-Garonne et Gers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZonesMap;
