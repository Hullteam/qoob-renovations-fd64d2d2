
import { Clock, Check, Award, PiggyBank, ClipboardCheck } from "lucide-react";

const advantages = [
  {
    title: "Expérience",
    description: "Plus de 15 ans d'expertise dans la rénovation résidentielle avec des centaines de projets achevés.",
    icon: <Award className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Qualité garantie",
    description: "Tous nos travaux sont soumis à des contrôles rigoureux et garantis pour votre tranquillité d'esprit.",
    icon: <Check className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Respect des délais",
    description: "Nous respectons scrupuleusement les délais annoncés pour éviter tout désagrément.",
    icon: <Clock className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Devis gratuits et transparents",
    description: "Des devis détaillés sans engagement et sans mauvaises surprises sur la facture finale.",
    icon: <PiggyBank className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Gestion de projet incluse",
    description: "Conducteur de travaux, OPC et suivi de chantier professionnel inclus dans toutes nos prestations.",
    icon: <ClipboardCheck className="w-12 h-12 text-secondary" />,
  },
];

const Advantages = () => {
  return (
    <section className="py-20 px-4 bg-warmBeige-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Pourquoi Nous Choisir</h2>
        <p className="section-subtitle text-center">
          Découvrez ce qui fait de Maison Accueillante votre partenaire idéal en rénovation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-warmBeige-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
