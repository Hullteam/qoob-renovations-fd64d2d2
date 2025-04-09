
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
import { Alert, AlertDescription } from "@/components/ui/alert";

const serviceOptions = [
  { value: 'renovation-interieure', label: 'Rénovation Intérieure' },
  { value: 'renovation-exterieure', label: 'Rénovation Extérieure' },
  { value: 'isolation', label: 'Isolation' },
  { value: 'cuisines-salles-de-bains', label: 'Aménagement Cuisines & Salles de bains' }
];

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
  consent?: string;
}

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when field is modified
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when field is modified
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
    
    // Clear error when field is modified
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
      isValid = false;
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
      isValid = false;
    }
    
    // Validate phone (basic French phone format)
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
      isValid = false;
    }
    
    // Validate service
    if (!formData.service) {
      newErrors.service = "Veuillez sélectionner un service";
      isValid = false;
    }
    
    // Validate description
    if (!formData.description.trim()) {
      newErrors.description = "La description du projet est requise";
      isValid = false;
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Veuillez fournir une description plus détaillée (minimum 20 caractères)";
      isValid = false;
    }
    
    // Validate consent
    if (!formData.consent) {
      newErrors.consent = "Vous devez accepter la politique de confidentialité";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    // Validate form
    if (!validateForm()) {
      setFormError("Veuillez corriger les erreurs dans le formulaire");
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
        {formError && (
          <Alert className="mb-6 bg-destructive/15 border-destructive text-destructive">
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}
        
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
              error={errors.firstName}
            />
            <FormInput 
              id="lastName" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              label="Nom"
              placeholder="Votre nom"
              required
              error={errors.lastName}
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
              error={errors.email}
            />
            <FormInput 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Téléphone"
              placeholder="Votre numéro de téléphone"
              required
              error={errors.phone}
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
            error={errors.service}
          />
          
          <FormTextarea 
            id="description" 
            name="description"
            value={formData.description}
            onChange={handleChange}
            label="Description du projet"
            placeholder="Décrivez votre projet en détail (travaux souhaités, superficie, contraintes particulières...)"
            required
            error={errors.description}
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
              error={errors.consent}
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
