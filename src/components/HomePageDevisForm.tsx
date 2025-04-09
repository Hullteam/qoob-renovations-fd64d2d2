
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Send } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const HomePageDevisForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
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
        title: "Demande de devis envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.",
      });
      setIsSubmitting(false);
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
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 hero-pattern">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Demandez votre devis gratuit</h2>
        <p className="section-subtitle text-center">
          Décrivez votre projet et nos experts vous contacteront rapidement pour un devis personnalisé
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Votre projet</CardTitle>
                <CardDescription>Partagez les détails de votre projet de rénovation</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Votre prénom" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Votre nom" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="votre@email.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Votre numéro de téléphone" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service *</Label>
                    <Select 
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange("service", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="renovation-interieure">Rénovation Intérieure</SelectItem>
                        <SelectItem value="renovation-exterieure">Rénovation Extérieure</SelectItem>
                        <SelectItem value="isolation">Isolation</SelectItem>
                        <SelectItem value="cuisines-salles-de-bains">Aménagement Cuisines & Salles de bains</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description du projet *</Label>
                    <Textarea 
                      id="description" 
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet en détail (travaux souhaités, superficie, contraintes particulières...)" 
                      rows={4} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="consent" 
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleCheckboxChange("consent", checked === true)}
                      />
                      <Label htmlFor="consent" className="text-sm text-gray-600 font-normal cursor-pointer">
                        J'accepte que mes données soient traitées conformément à la <Link to="/confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> de qoob rénovations. *
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="marketingConsent" 
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked === true)}
                      />
                      <Label htmlFor="marketingConsent" className="text-sm text-gray-600 font-normal cursor-pointer">
                        J'accepte de recevoir des informations commerciales de la part de qoob rénovations.
                      </Label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    <Send className="mr-2 h-5 w-5" /> {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Nous contacter</CardTitle>
                <CardDescription>Contactez-nous directement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Par téléphone</p>
                    <p className="text-gray-600">07 85 01 06 33</p>
                    <p className="text-sm text-gray-500">Lun-Ven: 8h30-19h00, Sam: 9h00-17h00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Par email</p>
                    <p className="text-gray-600">qoob.sas@gmail.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24-48h</p>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-medium mb-2">Pourquoi nous choisir ?</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Devis détaillé et transparent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Équipe expérimentée et qualifiée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Garantie décennale sur nos travaux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Accompagnement pour les aides financières</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageDevisForm;
