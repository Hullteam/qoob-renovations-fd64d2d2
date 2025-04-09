
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/form/QuoteForm';
import ContactInfo from '@/components/form/ContactInfo';
import ProjectManagementInfo from '@/components/form/ProjectManagementInfo';

const DemandeDevis = () => {
  return (
    <>
      <Helmet>
        <title>Demande de Devis | qoob rénovations</title>
        <meta name="description" content="Demandez un devis gratuit pour votre projet de rénovation avec qoob rénovations, experts en rénovation d'habitat à Paris." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-warmBeige-800 mb-4">
                Demandez votre devis gratuit
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Décrivez votre projet et nos experts vous contacteront rapidement pour discuter de vos besoins et vous fournir un devis personnalisé sans engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <QuoteForm />
              </div>
              
              <div className="space-y-6">
                <ContactInfo />
                <ProjectManagementInfo />
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DemandeDevis;
