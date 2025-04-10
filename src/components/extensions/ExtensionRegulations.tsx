
import { AlertCircle, FileText, CheckCircle2, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

// SEO schema for regulations
const regulationsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelles sont les démarches administratives pour une extension ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour une extension inférieure à 20m², une déclaration préalable de travaux suffit. Au-delà, un permis de construire est nécessaire. En zone urbaine, le seuil peut être de 40m² sous certaines conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles normes doivent respecter les extensions de maison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les extensions doivent respecter les normes de la RT 2020, les règles d'urbanisme locales (PLU, PLUi), les règles de mitoyenneté, d'accessibilité, ainsi que les normes électriques (NF C 15-100) et les normes de sécurité incendie."
      }
    }
  ]
};

const ExtensionRegulations = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(regulationsSchema)}
        </script>
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-4" id="reglementations">
          Réglementations et Normes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Les projets d'extension et de surélévation sont soumis à diverses réglementations 
          que nous maîtrisons pour vous garantir un projet conforme et sans complications.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-warmBeige-50 p-6 rounded-lg border border-warmBeige-200">
            <div className="flex items-start mb-4">
              <FileText className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-warmBeige-800">Démarches Administratives</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Déclaration préalable pour extensions ≤ 20m²</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Permis de construire pour extensions > 20m²</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Jusqu'à 40m² avec simple déclaration en zone urbaine (si surface totale &lt; 150m²)</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Recours à un architecte obligatoire si surface totale > 150m² après travaux</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-warmBeige-50 p-6 rounded-lg border border-warmBeige-200">
            <div className="flex items-start mb-4">
              <FileText className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-warmBeige-800">Normes Techniques</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>RT 2020 pour les performances thermiques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>DTU (Documents Techniques Unifiés) spécifiques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Norme électrique NF C 15-100</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Normes d'accessibilité PMR si applicable</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-warmBeige-50 p-6 rounded-lg border border-warmBeige-200">
            <div className="flex items-start mb-4">
              <FileText className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-warmBeige-800">Contraintes Locales</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>PLU ou PLUi (Plan Local d'Urbanisme)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Respect des distances avec les limites séparatives</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Règles spécifiques en zone protégée (ABF)</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Contraintes liées aux lotissements et copropriétés</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-serif font-semibold text-warmBeige-800 mb-6 text-center">
            Questions Fréquentes sur la Réglementation
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Quelles sont les différences entre déclaration préalable et permis de construire ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  La déclaration préalable est une procédure simplifiée pour des travaux de moindre importance. 
                  Le délai d'instruction est généralement de 1 mois (2 mois en zone protégée). Le permis de construire, 
                  plus complexe, nécessite un dossier plus complet et un délai d'instruction de 2 à 3 mois. Il concerne 
                  les projets plus importants et doit obligatoirement être élaboré par un architecte si la surface finale 
                  dépasse 150m².
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Comment savoir si mon terrain permet une extension ou une surélévation ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Plusieurs facteurs déterminent la faisabilité : le Plan Local d'Urbanisme (PLU) avec ses règles 
                  de hauteur, d'emprise au sol et de coefficient d'occupation des sols ; la solidité des fondations 
                  existantes pour une surélévation ; les servitudes éventuelles ; et les règles de mitoyenneté. 
                  Nous réalisons une étude de faisabilité complète pour évaluer ces contraintes sur votre propriété.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Quels documents sont nécessaires pour déposer un permis de construire ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Le dossier de permis de construire comprend : le formulaire CERFA approprié, un plan de situation du 
                  terrain, un plan de masse, un plan de coupe, les plans des façades et toitures, une notice descriptive 
                  du projet, des documents photographiques, et l'attestation RT 2020. Pour les extensions nécessitant un 
                  architecte, les plans doivent être signés par un professionnel inscrit à l'Ordre des Architectes.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Quelles sont les aides financières disponibles pour les extensions ?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Plusieurs aides peuvent financer votre projet : le Prêt à Taux Zéro (PTZ) pour l'agrandissement de 
                  résidence principale, le Crédit d'Impôt pour la Transition Énergétique (CITE) pour les travaux 
                  d'économie d'énergie, la TVA réduite à 5,5% pour les améliorations énergétiques, les aides de l'ANAH 
                  pour certains ménages, et des prêts spécifiques comme l'éco-PTZ. Nous vous accompagnons dans l'obtention 
                  de ces aides.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-start">
            <HelpCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <p className="text-blue-800 text-sm">
              <strong>Besoin d'informations spécifiques à votre projet ?</strong> Nos experts en réglementation 
              sont disponibles pour vous accompagner dans toutes vos démarches administratives et répondre à vos 
              questions particulières concernant votre situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionRegulations;
