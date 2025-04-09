
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send } from "lucide-react";
import { useEstimationForm } from "./hooks/useEstimationForm";
import PersonalInfoSection from "./form-sections/PersonalInfoSection";
import PropertyInfoSection from "./form-sections/PropertyInfoSection";
import ProjectDescriptionSection from "./form-sections/ProjectDescriptionSection";

const EstimationForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    formError,
    handleChange,
    handleSelectChange,
    handleCheckboxChange,
    handleSubmit
  } = useEstimationForm();
  
  return (
    <section id="estimation-form" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Demander une estimation avant achat</h2>
        <p className="section-subtitle text-center mb-12">
          Remplissez le formulaire ci-dessous pour être contacté par nos experts
        </p>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Votre projet d'estimation</CardTitle>
              <CardDescription>Partagez les détails du bien que vous souhaitez acquérir</CardDescription>
            </CardHeader>
            <CardContent>
              {formError && (
                <Alert className="mb-6 bg-destructive/15 border-destructive text-destructive">
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <PersonalInfoSection 
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />
                
                <PropertyInfoSection
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  handleSelectChange={handleSelectChange}
                />
                
                <ProjectDescriptionSection
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  handleCheckboxChange={handleCheckboxChange}
                />
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" /> 
                  {isSubmitting ? "Envoi en cours..." : "Demander une estimation gratuite"}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  * Champs obligatoires
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EstimationForm;
