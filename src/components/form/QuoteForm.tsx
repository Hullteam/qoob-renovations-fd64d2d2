
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';

const serviceOptions = [
  { value: 'renovation-interieure', label: 'Rénovation Intérieure' },
  { value: 'renovation-exterieure', label: 'Rénovation Extérieure' },
  { value: 'isolation', label: 'Isolation' },
  { value: 'cuisines-salles-de-bains', label: 'Aménagement Cuisines & Salles de bains' }
];

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    budget: "",
    description: "",
    consent: false,
    marketingConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter notre politique de confidentialité pour envoyer le formulaire.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // FormSubmit.co endpoint with your email
      const formEndpoint = "https://formsubmit.co/qoob.sas@gmail.com";
      
      // Prepare form data for submission
      const formSubmitData = new FormData();
      formSubmitData.append("Prénom", formData.firstName);
      formSubmitData.append("Nom", formData.lastName);
      formSubmitData.append("Email", formData.email);
      formSubmitData.append("Téléphone", formData.phone);
      formSubmitData.append("Service", formData.service);
      formSubmitData.append("Description", formData.description);
      formSubmitData.append("Marketing Consent", formData.marketingConsent ? "Oui" : "Non");
      
      // Add redirect URL back to the site after submission
      formSubmitData.append("_next", window.location.href);
      
      // Prevent spam with honeypot
      formSubmitData.append("_honey", "");
      
      // Disable captcha
      formSubmitData.append("_captcha", "false");
      
      // Subject for the email
      formSubmitData.append("_subject", "Nouvelle demande de devis - qoob rénovations");

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formSubmitData,
      });

      if (response.ok) {
        toast({
          title: "Demande de devis envoyée !",
          description: "Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.",
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          budget: "",
          description: "",
          consent: false,
          marketingConsent: false
        });
      } else {
        throw new Error("Problème lors de l'envoi du formulaire");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive"
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Votre projet</CardTitle>
        <CardDescription>Partagez les détails de votre projet de rénovation</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput 
              id="firstName" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              label="Prénom"
              placeholder="Votre prénom"
              required
            />
            <FormInput 
              id="lastName" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              label="Nom"
              placeholder="Votre nom"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              placeholder="votre@email.com"
              type="email"
              required
            />
            <FormInput 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Téléphone"
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>
          
          <FormSelect
            id="service"
            name="service"
            value={formData.service}
            onValueChange={(value) => handleSelectChange("service", value)}
            label="Type de service"
            placeholder="Choisissez un service"
            options={serviceOptions}
            required
          />
          
          <FormTextarea 
            id="description" 
            name="description"
            value={formData.description}
            onChange={handleChange}
            label="Description du projet"
            placeholder="Décrivez votre projet en détail (travaux souhaités, superficie, contraintes particulières...)"
            required
          />
          
          <div className="space-y-4">
            <FormCheckbox 
              id="consent" 
              name="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleCheckboxChange("consent", checked)}
              label={
                <>
                  J'accepte que mes données soient traitées conformément à la <Link to="/confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> de qoob rénovations. *
                </>
              }
            />
            
            <FormCheckbox 
              id="marketingConsent" 
              name="marketingConsent"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked)}
              label="J'accepte de recevoir des informations commerciales de la part de qoob rénovations."
            />
          </div>
          
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            <Send className="mr-2 h-5 w-5" /> {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            * Champs obligatoires
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
