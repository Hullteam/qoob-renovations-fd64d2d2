
import { useEffect, useRef } from "react";
import { mainLocation, serviceRadius } from "@/data/zonesInterventionData";

interface GoogleMapProps {
  apiKey: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = ({ apiKey }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Fonction pour initialiser la carte
    window.initMap = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        // Coordonnées du siège social
        const center = { 
          lat: mainLocation.coordinates.lat, 
          lng: mainLocation.coordinates.lng 
        };
        
        // Création de la carte
        const mapOptions = {
          center,
          zoom: 9,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: false,
          zoomControl: true,
        };
        
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
        
        // Marqueur pour le siège social
        new window.google.maps.Marker({
          position: center,
          map: mapInstanceRef.current,
          title: `${mainLocation.name} - Siège social`,
          animation: window.google.maps.Animation.DROP,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          },
        });
        
        // Cercle pour le rayon d'intervention
        new window.google.maps.Circle({
          strokeColor: "#FF6B35",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF6B35",
          fillOpacity: 0.15,
          map: mapInstanceRef.current,
          center,
          radius: serviceRadius * 1000, // Conversion en mètres
        });
      }
    };

    // Chargement du script Google Maps seulement si la clé API est fournie
    if (apiKey && !scriptRef.current) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      scriptRef.current = script;

      return () => {
        if (scriptRef.current) {
          document.head.removeChild(scriptRef.current);
          scriptRef.current = null;
          delete window.initMap;
        }
      };
    }
  }, [apiKey]);

  return (
    <>
      <div ref={mapRef} className="w-full h-full" />
      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-white rounded-md shadow-md p-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Siège social</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 bg-orange-500 rounded-full opacity-50"></div>
            <span>Rayon d'intervention ({serviceRadius} km)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
