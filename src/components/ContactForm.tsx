
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter notre politique de confidentialité pour envoyer le formulaire.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formulaire envoyé !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 hero-pattern">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Contactez-nous</h2>
        <p className="section-subtitle text-center">
          Vous avez un projet en tête ? N'hésitez pas à nous contacter pour obtenir un devis gratuit
        </p>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom *
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Votre prénom"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom *
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@exemple.com"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone *
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Votre numéro de téléphone"
                className="w-full"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Votre projet *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Décrivez brièvement votre projet de rénovation..."
                className="w-full min-h-[120px]"
              />
            </div>
            <div className="md:col-span-2 flex items-start space-x-2">
              <Checkbox 
                id="consent" 
                checked={formData.consent}
                onCheckedChange={handleCheckboxChange}
              />
              <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                J'accepte que mes données soient traitées conformément à la <Link to="/confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> de qoob rénovations. *
              </label>
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="cta-button-secondary w-full" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                * Champs obligatoires. Vous pouvez exercer vos droits d'accès, de rectification et de suppression en nous contactant.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
