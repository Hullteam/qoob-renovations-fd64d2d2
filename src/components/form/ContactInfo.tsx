
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Phone, Mail } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const ContactInfo = () => {
  return (
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
            <div className="mt-2">
              <WhatsAppButton phoneNumber="0785010633" size="sm" />
            </div>
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
  );
};

export default ContactInfo;
