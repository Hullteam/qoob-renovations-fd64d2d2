
import { CheckCircle2, FileText, Users, Home, Ruler, HardHat, ClipboardCheck } from "lucide-react";

const processSteps = [
  {
    icon: <Users className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
    title: "Consultation initiale",
    description: "Nous échangeons sur vos besoins, vos attentes, votre budget et la faisabilité technique de votre projet.",
    timeframe: "1 à 2 semaines"
  },
  {
    icon: <Ruler className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
    title: "Étude & conception",
    description: "Notre équipe technique et nos architectes élaborent des plans détaillés et des visuels 3D de votre extension ou surélévation.",
    timeframe: "2 à 4 semaines"
  },
  {
    icon: <FileText className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
    title: "Démarches administratives",
    description: "Nous préparons et déposons les demandes de permis de construire ou les déclarations préalables de travaux.",
    timeframe: "2 à 6 mois"
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
    title: "Travaux de gros œuvre",
    description: "Fondations, structure, toiture et clos-couvert : cette étape constitue l'ossature principale de votre extension.",
    timeframe: "1 à 3 mois"
  },
  {
    icon: <Home className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
    title: "Second œuvre & finitions",
    description: "Installation des réseaux, isolation, cloisons, revêtements de sols, peintures et équipements divers.",
    timeframe: "1 à 2 mois"
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />,
    title: "Livraison & garanties",
    description: "Réception des travaux, remise des documents techniques et activation des garanties décennale et biennale.",
    timeframe: "1 semaine"
  }
];

const ExtensionProcess = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-4">
          Processus de Réalisation
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          De la première consultation à la livraison finale, découvrez les étapes clés de votre projet d'extension ou de surélévation.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute h-full w-1 bg-primary/20 left-4 md:left-1/2 top-0 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Timeline content */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-center">
                <div className={`w-full md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-16 text-left' : 'md:order-1 md:pl-16 text-left md:text-right'}`}>
                  <h3 className="text-xl font-semibold text-warmBeige-800 flex md:block items-center gap-3">
                    <div className="md:hidden">{step.icon}</div>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                  <div className="text-sm text-primary font-medium mt-2 flex items-center md:justify-start">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    <span>Durée moyenne: {step.timeframe}</span>
                  </div>
                </div>
                
                {/* Center icon, visible only on md+ */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-full p-1 border-2 border-primary">
                    {step.icon}
                  </div>
                </div>
                
                {/* Empty div to maintain layout on even items */}
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-0' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionProcess;
