
import { QuoteFormData } from "./formValidation";
import { toast } from "@/hooks/use-toast";
import { validateOrigin, validateCSRFToken, prepareFormWithCSRF } from "./securityUtils";

/**
 * Submits the quote form data to the server with enhanced security
 */
export const submitQuoteForm = async (formData: QuoteFormData): Promise<boolean> => {
  try {
    // Check if origin is allowed
    if (!validateOrigin()) {
      console.error('Security violation: Invalid origin');
      toast({
        title: "Erreur de sécurité",
        description: "Demande non autorisée. Veuillez actualiser la page et réessayer.",
        variant: "destructive"
      });
      return false;
    }
    
    // Verify CSRF token
    const csrfToken = sessionStorage.getItem('qoob_csrf_token');
    if (!csrfToken || !validateCSRFToken(csrfToken)) {
      console.error('Security violation: Invalid CSRF token');
      toast({
        title: "Erreur de sécurité",
        description: "Session invalide ou expirée. Veuillez actualiser la page et réessayer.",
        variant: "destructive"
      });
      return false;
    }
    
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
    formSubmitData.append("CSRF_Token", csrfToken); // Ajouter le jeton CSRF
    
    // Add secure headers
    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      'Origin': window.location.origin,
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty'
    });
    
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
      headers: headers,
      body: formSubmitData,
      credentials: 'same-origin'
    });

    if (response.ok) {
      toast({
        title: "Demande de devis envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.",
      });
      
      // Révoquer le jeton CSRF utilisé
      sessionStorage.removeItem('qoob_csrf_token');
      sessionStorage.removeItem('qoob_csrf_created');
      return true;
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
    return false;
  }
};

/**
 * Submits the estimation form data for pre-purchase property assessment
 */
export const submitEstimationForm = async (formData: any): Promise<boolean> => {
  try {
    // Check if origin is allowed
    if (!validateOrigin()) {
      console.error('Security violation: Invalid origin');
      toast({
        title: "Erreur de sécurité",
        description: "Demande non autorisée. Veuillez actualiser la page et réessayer.",
        variant: "destructive"
      });
      return false;
    }
    
    // Verify CSRF token
    const csrfToken = sessionStorage.getItem('qoob_csrf_token');
    if (!csrfToken || !validateCSRFToken(csrfToken)) {
      console.error('Security violation: Invalid CSRF token');
      toast({
        title: "Erreur de sécurité",
        description: "Session invalide ou expirée. Veuillez actualiser la page et réessayer.",
        variant: "destructive"
      });
      return false;
    }
    
    // FormSubmit.co endpoint with your email
    const formEndpoint = "https://formsubmit.co/qoob.sas@gmail.com";
    
    // Prepare form data for submission
    const formSubmitData = new FormData();
    formSubmitData.append("Prénom", formData.firstName);
    formSubmitData.append("Nom", formData.lastName);
    formSubmitData.append("Email", formData.email);
    formSubmitData.append("Téléphone", formData.phone);
    formSubmitData.append("Adresse du bien", formData.propertyAddress);
    formSubmitData.append("Type de bien", formData.propertyType);
    formSubmitData.append("Surface", formData.propertySize);
    formSubmitData.append("Année de construction", formData.propertyYear);
    formSubmitData.append("Date de visite souhaitée", formData.visitDate);
    formSubmitData.append("Budget", formData.budget);
    formSubmitData.append("Description du projet", formData.projectDescription);
    formSubmitData.append("CSRF_Token", csrfToken); // Ajouter le jeton CSRF
    
    // Add secure headers
    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      'Origin': window.location.origin,
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty'
    });
    
    // Add redirect URL back to the site after submission
    formSubmitData.append("_next", window.location.href);
    
    // Prevent spam with honeypot
    formSubmitData.append("_honey", "");
    
    // Disable captcha
    formSubmitData.append("_captcha", "false");
    
    // Subject for the email
    formSubmitData.append("_subject", "Nouvelle demande d'estimation avant achat - qoob rénovations");

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: headers,
      body: formSubmitData,
      credentials: 'same-origin'
    });

    if (response.ok) {
      toast({
        title: "Demande d'estimation envoyée !",
        description: "Nous vous contacterons très rapidement pour organiser l'estimation de votre bien.",
      });
      
      // Révoquer le jeton CSRF utilisé
      sessionStorage.removeItem('qoob_csrf_token');
      sessionStorage.removeItem('qoob_csrf_created');
      return true;
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
    return false;
  }
};

// Export the function from securityUtils to be used in other components
export { prepareFormWithCSRF };

// Original functions are now removed as they are replaced with the imports from securityUtils
