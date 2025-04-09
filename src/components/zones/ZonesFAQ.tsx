
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { interventionFAQs } from "@/data/zonesInterventionData";

const ZonesFAQ = () => {
  return (
    <section className="bg-warmBeige-50 py-12 border-t border-warmBeige-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Questions fréquentes sur nos zones d'intervention
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {interventionFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-warmBeige-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ZonesFAQ;
