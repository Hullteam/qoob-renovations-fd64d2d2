
import { useState } from "react";
import { EstimationFormData, FormErrors } from "../types/estimationFormTypes";
import { validateEstimationForm } from "../utils/estimationFormValidation";
import { submitEstimationForm } from "@/utils/formSubmission";

const initialFormData: EstimationFormData = {
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
};

export const useEstimationForm = () => {
  const [formData, setFormData] = useState<EstimationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    const { isValid, errors: validationErrors } = validateEstimationForm(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      setFormError("Veuillez corriger les erreurs dans le formulaire");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await submitEstimationForm(formData);
      
      if (success) {
        setFormData(initialFormData);
      }
    } catch (error) {
      setFormError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    formError,
    handleChange,
    handleSelectChange,
    handleCheckboxChange,
    handleSubmit
  };
};
