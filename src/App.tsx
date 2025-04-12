
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import MetierDetail from "./pages/MetierDetail";
import MetierCategory from "./pages/MetierCategory";
import DemandeDevis from "./pages/DemandeDevis";
import ZonesIntervention from "./pages/ZonesIntervention";
import MetiersRenovation from "./pages/MetiersRenovation";
import Confidentialite from "./pages/Confidentialite";
import MentionsLegales from "./pages/MentionsLegales";
import ConditionsGenerales from "./pages/ConditionsGenerales";
import GestionProjet from "./pages/GestionProjet";
import EstimationAvantAchat from "./pages/EstimationAvantAchat";
import ExtensionsSurelevation from "./pages/ExtensionsSurelevation";
import { Helmet } from "react-helmet";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet titleTemplate="%s | qoob rénovations" defaultTitle="qoob rénovations | Experts en Rénovation d'Habitat">
        <meta name="description" content="Transformez votre habitat avec style et confort. qoob rénovations, experts en rénovation intérieure et extérieure à Paris." />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Index />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/services/:serviceSlug/metiers/:metierId" element={<MetierDetail />} />
          <Route path="/services/gestion-projet" element={<GestionProjet />} />
          <Route path="/services/extensions-surelevation" element={<ExtensionsSurelevation />} />
          <Route path="/demande-devis" element={<DemandeDevis />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/metiers-renovation" element={<MetiersRenovation />} />
          <Route path="/metiers-renovation/categories/:categoryId" element={<MetierCategory />} />
          <Route path="/estimation-avant-achat" element={<EstimationAvantAchat />} />
          
          {/* RGPD pages */}
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
          
          {/* Redirects for potential old URLs */}
          <Route path="/devis" element={<Navigate to="/demande-devis" replace />} />
          <Route path="/service/:serviceSlug" element={<Navigate to="/services/:serviceSlug" replace />} />
          <Route path="/metier/:metierId" element={<Navigate to="/services" replace />} />
          <Route path="/metiers/:metierId" element={<Navigate to="/services" replace />} />
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
