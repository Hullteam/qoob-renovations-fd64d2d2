import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import FormTextarea from "@/components/form/FormTextarea";
import FormCheckbox from "@/components/form/FormCheckbox";
import { submitEstimationForm } from "@/utils/formSubmission";

type PropertyType = "apartment" | "house" | "land" | "commercial" | "other";

interface EstimationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertyType: PropertyType | "";
  propertySize: string;
  propertyYear: string;
  visitDate: string;
  projectDescription: string;
  budget: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const propertyTypeOptions = [
  { value: "apartment", label: "Appartement" },
  { value: "house", label: "Maison" },
  { value: "land", label: "Terrain" },
  { value: "commercial", label: "Local commercial" },
  { value: "other", label: "Autre" },
];

const EstimationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<EstimationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    propertySize: "",
    propertyYear: "",
    visitDate: "",
    projectDescription: "",
    budget: "",
    consent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
      isValid = false;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
      isValid = false;
    }
    
    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = "L'adresse du bien est requise";
      isValid = false;
    }
    
    if (!formData.propertyType) {
      newErrors.propertyType = "Le type de bien est requis";
      isValid = false;
    }
    
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "La description du projet est requise";
      isValid = false;
    }
    
    if (!formData.consent) {
      newErrors.consent = "Vous devez accepter les conditions";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    if (!validateForm()) {
      setFormError("Veuillez corriger les erreurs dans le formulaire");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await submitEstimationForm(formData);
      
      if (success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          propertyAddress: "",
          propertyType: "",
          propertySize: "",
          propertyYear: "",
          visitDate: "",
          projectDescription: "",
          budget: "",
          consent: false
        });
      }
    } catch (error) {
      setFormError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
                
                <FormInput
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  label="Adresse du bien à estimer"
                  placeholder="Adresse complète du bien"
                  required
                  error={errors.propertyAddress}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormSelect
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onValueChange={(value) => handleSelectChange("propertyType", value)}
                    label="Type de bien"
                    placeholder="Sélectionnez le type"
                    options={propertyTypeOptions}
                    required
                    error={errors.propertyType}
                  />
                  
                  <FormInput
                    id="propertySize"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    label="Surface (m²)"
                    placeholder="Surface approximative"
                    error={errors.propertySize}
                  />
                  
                  <FormInput
                    id="propertyYear"
                    name="propertyYear"
                    value={formData.propertyYear}
                    onChange={handleChange}
                    label="Année de construction"
                    placeholder="Si connue"
                    error={errors.propertyYear}
                  />
                </div>
                
                <FormInput
                  id="visitDate"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  label="Date de visite souhaitée"
                  placeholder="Quand souhaitez-vous visiter le bien ?"
                  error={errors.visitDate}
                />
                
                <FormInput
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  label="Budget envisagé"
                  placeholder="Budget approximatif pour l'achat et les travaux"
                  error={errors.budget}
                />
                
                <FormTextarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  label="Description du projet"
                  placeholder="Décrivez votre projet d'acquisition et les travaux que vous envisagez"
                  required
                  error={errors.projectDescription}
                />
                
                <FormCheckbox
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleCheckboxChange("consent", checked)}
                  label={
                    <>
                      J'accepte que mes données soient utilisées pour me recontacter concernant ma demande d'estimation*
                    </>
                  }
                  error={errors.consent}
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
