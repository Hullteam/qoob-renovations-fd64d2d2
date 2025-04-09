
import { useState } from "react";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mainLocation, serviceRadius } from "@/data/zonesInterventionData";
import GoogleMap from "./GoogleMap";

const ZonesMap = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiInput, setShowApiInput] = useState<boolean>(true);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  const handleApiSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setShowApiInput(false);
      setMapLoaded(true);
      // Stockage temporaire de la clé API dans le localStorage
      localStorage.setItem("google_maps_api_key", apiKey);
    }
  };

  const storedApiKey = localStorage.getItem("google_maps_api_key");

  // Si une clé API est déjà stockée, l'utiliser directement
  if (storedApiKey && !mapLoaded && showApiInput) {
    setApiKey(storedApiKey);
    setShowApiInput(false);
    setMapLoaded(true);
  }

  return <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-warmBeige-100">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Zones d'intervention</h3>
                  <p className="text-warmBeige-700">
                    Lot et Garonne et départements limitrophes
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
            {showApiInput ? <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-md p-6">
                <form onSubmit={handleApiSubmit} className="h-full flex flex-col justify-center">
                  <h3 className="font-semibold text-lg mb-4 text-center">Google Maps</h3>
                  <p className="text-sm text-center mb-4">
                    Veuillez entrer votre clé API Google Maps pour afficher la carte
                  </p>
                  <div className="mb-4">
                    <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="Entrez votre clé API Google Maps" required />
                  </div>
                  <Button type="submit" className="w-full">Afficher la carte</Button>
                </form>
              </div> : mapLoaded ? <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
                <GoogleMap apiKey={apiKey || storedApiKey || ""} />
              </div> : <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop')"
            }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/90 p-4 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-lg mb-1">Zone d'intervention</h3>
                    <p className="text-sm">
                      Nous intervenons principalement dans les départements du Lot-et-Garonne, Lot, Dordogne, Tarn-et-Garonne et Gers.
                    </p>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </section>;
};

export default ZonesMap;
