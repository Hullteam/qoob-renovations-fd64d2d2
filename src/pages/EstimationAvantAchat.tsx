
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EstimationHero from "@/components/estimation/EstimationHero";
import EstimationBenefits from "@/components/estimation/EstimationBenefits";
import EstimationProcess from "@/components/estimation/EstimationProcess";
import EstimationForm from "@/components/estimation/EstimationForm";
import EstimationFAQ from "@/components/estimation/EstimationFAQ";
import EstimationTestimonials from "@/components/estimation/EstimationTestimonials";
import EstimationCTA from "@/components/estimation/EstimationCTA";

const EstimationAvantAchat = () => {
  return (
    <>
      <Helmet>
        <title>Estimation de Travaux Avant Achat | qoob rénovations</title>
        <meta
          name="description"
          content="Estimez le coût des travaux avant d'acheter votre bien immobilier. Notre expertise vous aide à anticiper votre budget rénovation et à prendre une décision éclairée."
        />
        <meta
          name="keywords"
          content="estimation travaux, achat immobilier, rénovation avant achat, budget rénovation, visite technique, conseil achat immobilier"
        />
        <link rel="canonical" href="https://qoob-renovations.fr/estimation-avant-achat" />
        <meta property="og:title" content="Estimation de Travaux Avant Achat | qoob rénovations" />
        <meta
          property="og:description"
          content="Estimez le coût des travaux avant d'acheter votre bien immobilier. Notre expertise vous aide à anticiper votre budget rénovation et à prendre une décision éclairée."
        />
        <meta property="og:url" content="https://qoob-renovations.fr/estimation-avant-achat" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <EstimationHero />
          <EstimationBenefits />
          <EstimationProcess />
          <EstimationTestimonials />
          <EstimationFAQ />
          <EstimationForm />
          <EstimationCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EstimationAvantAchat;
