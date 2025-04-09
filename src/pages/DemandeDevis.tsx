
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, Send } from 'lucide-react';

const DemandeDevis = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire ici
  };

  return (
    <>
      <Helmet>
        <title>Demande de Devis | qoob rénovations</title>
        <meta name="description" content="Demandez un devis gratuit pour votre projet de rénovation avec qoob rénovations, experts en rénovation d'habitat à Paris." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-warmBeige-800 mb-4">
                Demandez votre devis gratuit
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Décrivez votre projet et nos experts vous contacteront rapidement pour discuter de vos besoins et vous fournir un devis personnalisé sans engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                          <Label htmlFor="firstName">Prénom</Label>
                          <Input id="firstName" placeholder="Votre prénom" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom</Label>
                          <Input id="lastName" placeholder="Votre nom" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="votre@email.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input id="phone" placeholder="Votre numéro de téléphone" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse du projet</Label>
                        <Input id="address" placeholder="Adresse complète" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Type de service</Label>
                        <Select>
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
                        <Label htmlFor="budget">Budget approximatif (€)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez une fourchette budgétaire" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="moins-5000">Moins de 5 000 €</SelectItem>
                            <SelectItem value="5000-15000">Entre 5 000 € et 15 000 €</SelectItem>
                            <SelectItem value="15000-30000">Entre 15 000 € et 30 000 €</SelectItem>
                            <SelectItem value="30000-50000">Entre 30 000 € et 50 000 €</SelectItem>
                            <SelectItem value="plus-50000">Plus de 50 000 €</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description du projet</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Décrivez votre projet en détail (travaux souhaités, superficie, contraintes particulières...)" 
                          rows={5} 
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-5 w-5" /> Envoyer ma demande de devis
                      </Button>
                      
                      <p className="text-sm text-gray-500 text-center mt-4">
                        En soumettant ce formulaire, vous acceptez notre politique de confidentialité et de traitement des données.
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
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DemandeDevis;
