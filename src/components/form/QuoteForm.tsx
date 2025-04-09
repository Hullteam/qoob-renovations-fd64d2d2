
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import QuoteFormFields from './QuoteFormFields';
import { FormErrors, QuoteFormData, validateQuoteForm } from '@/utils/formValidation';
import { submitQuoteForm } from '@/utils/formSubmission';

const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    // Validate form
    const { isValid, errors: validationErrors } = validateQuoteForm(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      setFormError("Veuillez corriger les erreurs dans le formulaire");
      return;
    }
    
    setIsSubmitting(true);
    
    const success = await submitQuoteForm(formData);
    
    if (success) {
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
    }
    
    setIsSubmitting(false);
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
          <QuoteFormFields 
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            handleCheckboxChange={handleCheckboxChange}
          />
          
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
