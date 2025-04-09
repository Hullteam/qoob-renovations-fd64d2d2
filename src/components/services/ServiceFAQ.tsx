
import { Card, CardContent } from "@/components/ui/card";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

const ServiceFAQ = ({ faqs }: ServiceFAQProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
          Questions fréquentes
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-3 flex items-start">
                  <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">Q</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-8">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
