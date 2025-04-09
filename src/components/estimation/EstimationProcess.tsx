
import { Phone, ClipboardCheck, Home, Calculator, FileText, MessageSquare } from "lucide-react";

const steps = [
  {
    title: "Premier contact",
    description: "Vous nous contactez pour nous faire part de votre projet d'achat et de vos besoins en estimation.",
    icon: <Phone className="h-10 w-10 text-primary" />
  },
  {
    title: "Rendez-vous",
    description: "Nous organisons une visite du bien immobilier que vous envisagez d'acheter.",
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />
  },
  {
    title: "Visite technique",
    description: "Notre expert réalise un diagnostic complet du bien et identifie les travaux nécessaires.",
    icon: <Home className="h-10 w-10 text-primary" />
  },
  {
    title: "Estimation détaillée",
    description: "Nous calculons le coût estimatif des travaux à réaliser selon vos besoins et priorités.",
    icon: <Calculator className="h-10 w-10 text-primary" />
  },
  {
    title: "Remise du rapport",
    description: "Vous recevez un rapport détaillé avec les coûts estimés et les recommandations de nos experts.",
    icon: <FileText className="h-10 w-10 text-primary" />
  },
  {
    title: "Conseil personnalisé",
    description: "Nous discutons ensemble des résultats pour vous aider à prendre votre décision d'achat.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />
  }
];

const EstimationProcess = () => {
  return (
    <section id="process" className="py-16 px-4 bg-gray-50 hero-pattern">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Comment fonctionne notre estimation avant achat ?</h2>
        <p className="section-subtitle text-center mb-12">
          Un processus simple et efficace pour vous aider à prendre la bonne décision
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Step content */}
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3 flex items-center">
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-primary text-white text-sm mr-3">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Icon for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-primary/20 items-center justify-center">
                    {step.icon}
                  </div>
                  
                  {/* Empty div for layout */}
                  <div className="md:w-1/2"></div>
                </div>
                
                {/* Icon for mobile */}
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimationProcess;
