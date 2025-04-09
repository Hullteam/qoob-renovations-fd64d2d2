
/**
 * Form validation utility functions
 */

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
  consent?: string;
}

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  budget: string;
  description: string;
  consent: boolean;
  marketingConsent: boolean;
}

/**
 * Validates the quote form data
 */
export const validateQuoteForm = (formData: QuoteFormData): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};
  let isValid = true;
  
  // Validate first name
  if (!formData.firstName.trim()) {
    errors.firstName = "Le prénom est requis";
    isValid = false;
  }
  
  // Validate last name
  if (!formData.lastName.trim()) {
    errors.lastName = "Le nom est requis";
    isValid = false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = "L'email est requis";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Veuillez entrer un email valide";
    isValid = false;
  }
  
  // Validate phone (basic French phone format)
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  if (!formData.phone.trim()) {
    errors.phone = "Le téléphone est requis";
    isValid = false;
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Format de téléphone invalide";
    isValid = false;
  }
  
  // Validate service
  if (!formData.service) {
    errors.service = "Veuillez sélectionner un service";
    isValid = false;
  }
  
  // Validate description
  if (!formData.description.trim()) {
    errors.description = "La description du projet est requise";
    isValid = false;
  } else if (formData.description.trim().length < 20) {
    errors.description = "Veuillez fournir une description plus détaillée (minimum 20 caractères)";
    isValid = false;
  }
  
  // Validate consent
  if (!formData.consent) {
    errors.consent = "Vous devez accepter la politique de confidentialité";
    isValid = false;
  }
  
  return { isValid, errors };
};
