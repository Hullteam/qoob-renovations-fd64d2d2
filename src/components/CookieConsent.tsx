
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShowBanner(false);
    toast({
      title: "Préférences enregistrées",
      description: "Vous avez accepté tous les cookies."
    });
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setShowBanner(false);
    toast({
      title: "Préférences enregistrées",
      description: "Vous avez accepté uniquement les cookies essentiels."
    });
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h3 className="text-lg font-semibold mb-2">Votre vie privée</h3>
            <p className="text-sm text-gray-600 mb-4">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic 
              et personnaliser le contenu. En cliquant sur "Accepter tous", vous consentez à notre utilisation 
              de cookies. Vous pouvez également choisir quels cookies vous acceptez en cliquant sur "Personnaliser".
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" onClick={acceptAll}>
                Accepter tous
              </Button>
              <Button variant="outline" onClick={acceptEssential}>
                Cookies essentiels uniquement
              </Button>
              <Button variant="link" asChild>
                <Link to="/confidentialite">
                  En savoir plus
                </Link>
              </Button>
            </div>
          </div>
          <button 
            onClick={closeBanner} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fermer la bannière de cookies"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
