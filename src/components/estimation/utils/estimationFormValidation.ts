
import { EstimationFormData, FormErrors } from "../types/estimationFormTypes";

export const validateEstimationForm = (formData: EstimationFormData): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};
  let isValid = true;
  
  if (!formData.firstName.trim()) {
    errors.firstName = "Le prénom est requis";
    isValid = false;
  }
  
  if (!formData.lastName.trim()) {
    errors.lastName = "Le nom est requis";
    isValid = false;
  }
  
  if (!formData.email.trim()) {
    errors.email = "L'email est requis";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "Format d'email invalide";
    isValid = false;
  }
  
  if (!formData.phone.trim()) {
    errors.phone = "Le téléphone est requis";
    isValid = false;
  }
  
  if (!formData.propertyAddress.trim()) {
    errors.propertyAddress = "L'adresse du bien est requise";
    isValid = false;
  }
  
  if (!formData.propertyType) {
    errors.propertyType = "Le type de bien est requis";
    isValid = false;
  }
  
  if (!formData.projectDescription.trim()) {
    errors.projectDescription = "La description du projet est requise";
    isValid = false;
  }
  
  if (!formData.consent) {
    errors.consent = "Vous devez accepter les conditions";
    isValid = false;
  }
  
  return { isValid, errors };
};
