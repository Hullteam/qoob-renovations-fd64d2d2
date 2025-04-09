
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Calendar, FileCheck, Users } from 'lucide-react';

const ProjectManagementInfo = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Gestion de projet incluse</CardTitle>
        <CardDescription>Nos prestations comprennent les services suivants</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-start">
            <ClipboardCheck className="w-5 h-5 mt-1 mr-3 text-primary" />
            <div>
              <p className="font-medium">Conducteur de travaux</p>
              <p className="text-sm text-gray-600">
                Un expert technique dédié à votre projet qui supervise l'ensemble des travaux et s'assure du respect des normes et des plans.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Calendar className="w-5 h-5 mt-1 mr-3 text-primary" />
            <div>
              <p className="font-medium">OPC (Ordonnancement, Pilotage et Coordination)</p>
              <p className="text-sm text-gray-600">
                Planification détaillée des interventions pour optimiser les délais et assurer une progression fluide du chantier.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FileCheck className="w-5 h-5 mt-1 mr-3 text-primary" />
            <div>
              <p className="font-medium">Suivi de chantier</p>
              <p className="text-sm text-gray-600">
                Contrôles réguliers, rapports d'avancement et validation des étapes importantes pour garantir la qualité de réalisation.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Users className="w-5 h-5 mt-1 mr-3 text-primary" />
            <div>
              <p className="font-medium">Coordination des artisans</p>
              <p className="text-sm text-gray-600">
                Sélection et gestion des différents corps de métier pour une collaboration harmonieuse et efficace.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2">Les avantages pour vous :</p>
          <ul className="text-sm space-y-1">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Un seul interlocuteur pour l'ensemble du projet</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Respect rigoureux des délais et du budget</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Résolution rapide des problèmes techniques</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Qualité garantie par des contrôles réguliers</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectManagementInfo;
