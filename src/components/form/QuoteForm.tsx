
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import QuoteFormFields from './QuoteFormFields';
import { useQuoteForm } from '@/hooks/useQuoteForm';

const QuoteForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    formError,
    handleChange,
    handleSelectChange,
    handleCheckboxChange,
    handleSubmit
  } = useQuoteForm();

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
