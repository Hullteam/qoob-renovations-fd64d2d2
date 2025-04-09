
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Combien coûte une estimation avant achat ?",
    answer: "Notre service d'estimation avant achat est facturé à partir de 3€/m², selon la superficie et la complexité du bien. Ce montant est déductible si vous nous confiez ensuite vos travaux de rénovation."
  },
  {
    question: "Dans quels délais pouvez-vous réaliser une estimation ?",
    answer: "Nous pouvons généralement organiser une visite technique dans un délai de 3 à 5 jours ouvrés après votre demande. Le rapport d'estimation complet vous est ensuite remis sous 48 à 72 heures."
  },
  {
    question: "L'estimation est-elle vraiment précise ?",
    answer: "Notre estimation s'appuie sur l'expertise de nos professionnels et des tarifs actuels du marché. Elle inclut une marge d'erreur de 5 à 10% selon la complexité des travaux. Pour les travaux nécessitant des études spécifiques (structure, assainissement), nous vous orienterons vers des diagnostics complémentaires."
  },
  {
    question: "Pouvez-vous m'accompagner lors d'une visite avec l'agent immobilier ?",
    answer: "Absolument, nous pouvons vous accompagner lors d'une visite avec l'agent immobilier pour vous fournir un avis technique immédiat. Ce service est particulièrement utile dans un marché immobilier où les décisions doivent être prises rapidement."
  },
  {
    question: "Que contient votre rapport d'estimation ?",
    answer: "Notre rapport comprend un diagnostic de l'état actuel du bien, une liste détaillée des travaux recommandés avec priorités (urgents, nécessaires, d'amélioration), un budget estimatif par poste, un planning prévisionnel des travaux et des recommandations techniques."
  },
  {
    question: "Est-ce que vous réalisez ensuite les travaux estimés ?",
    answer: "Oui, nous pouvons prendre en charge la réalisation des travaux suite à notre estimation. Cela assure une cohérence entre l'estimation et la réalisation. Si vous nous confiez les travaux, le coût de l'estimation est déduit du montant total."
  }
];

const EstimationFAQ = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Questions fréquentes</h2>
        <p className="section-subtitle text-center mb-12">
          Tout ce que vous devez savoir sur notre service d'estimation avant achat
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EstimationFAQ;
