
import { Check, AlertTriangle, Banknote, Clock, BadgeCheck, Lightbulb } from "lucide-react";

const benefits = [
  {
    title: "Anticipez les coûts cachés",
    description: "Identifiez les travaux nécessaires et leur coût avant même d'acheter pour éviter les mauvaises surprises.",
    icon: <AlertTriangle className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Améliorez votre pouvoir d'achat",
    description: "Négociez le prix d'achat en fonction des travaux à réaliser grâce à une estimation professionnelle.",
    icon: <Banknote className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Gagnez du temps",
    description: "Planifiez vos travaux en amont et réduisez le délai entre l'acquisition et l'emménagement.",
    icon: <Clock className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Expertise professionnelle",
    description: "Bénéficiez des conseils d'artisans qualifiés qui vous guident dans vos choix techniques.",
    icon: <BadgeCheck className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Vision claire de votre projet",
    description: "Obtenez une vision précise du potentiel de votre futur bien et des possibilités de transformation.",
    icon: <Lightbulb className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Priorisez vos travaux",
    description: "Identifiez les travaux urgents et ceux qui peuvent être différés pour mieux planifier votre budget.",
    icon: <Check className="h-12 w-12 text-primary mb-4" />
  }
];

const EstimationBenefits = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Pourquoi demander une estimation avant d'acheter ?</h2>
        <p className="section-subtitle text-center mb-12">
          Un achat immobilier est un investissement important. Sécurisez votre projet avec notre service d'estimation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstimationBenefits;
