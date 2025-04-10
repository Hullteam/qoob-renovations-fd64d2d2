import { useState, useEffect } from 'react';
import { FormErrors, QuoteFormData, validateQuoteForm } from '@/utils/formValidation';
import { submitQuoteForm, prepareFormWithCSRF } from '@/utils/formSubmission';

/**
 * Custom hook for handling the quote form state and logic
 */
export const useQuoteForm = () => {
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

  // Générer un nouveau jeton CSRF lors du chargement initial du formulaire
  useEffect(() => {
    const initForm = async () => {
      await prepareFormWithCSRF();
    };
    
    initForm();
  }, []);

  /**
   * Handle input field changes
   */
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

  /**
   * Handle select field changes
   */
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

  /**
   * Handle checkbox changes
   */
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

  /**
   * Handle form submission
   */
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
      
      // Générer un nouveau jeton CSRF pour une utilisation ultérieure
      await prepareFormWithCSRF();
    }
    
    setIsSubmitting(false);
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
