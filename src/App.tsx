
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import MetierDetail from "./pages/MetierDetail";
import DemandeDevis from "./pages/DemandeDevis";
import { Helmet } from "react-helmet";

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/services/:serviceSlug/metiers/:metierId" element={<MetierDetail />} />
          <Route path="/demande-devis" element={<DemandeDevis />} />
          {/* Redirects pour gérer les anciennes URL potentielles */}
          <Route path="/devis" element={<Navigate to="/demande-devis" replace />} />
          <Route path="/service/:serviceSlug" element={<Navigate to="/services/:serviceSlug" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
