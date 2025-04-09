
import React, { useEffect } from 'react';
import QuoteForm from './form/QuoteForm';
import ContactInfo from './form/ContactInfo';

const HomePageDevisForm = () => {
  useEffect(() => {
    // Handle direct navigation with hash
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <section id="contact" className="py-20 px-4 hero-pattern">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Demandez votre devis gratuit</h2>
        <p className="section-subtitle text-center">
          Décrivez votre projet et nos experts vous contacteront rapidement pour un devis personnalisé
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
          
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageDevisForm;

