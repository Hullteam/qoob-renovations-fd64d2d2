
import { QuoteFormData } from "./formValidation";
import { toast } from "@/hooks/use-toast";

/**
 * Submits the quote form data to the server
 */
export const submitQuoteForm = async (formData: QuoteFormData): Promise<boolean> => {
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
