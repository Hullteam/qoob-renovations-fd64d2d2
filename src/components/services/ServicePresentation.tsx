
import { CheckCircle2, Clock } from "lucide-react";

interface ServicePresentationProps {
  presentationTitle: string;
  presentationText: string[];
  presentationImage: string;
  benefits: string[];
  averageDuration: string;
  title: string;
}

const ServicePresentation = ({ 
  presentationTitle, 
  presentationText, 
  presentationImage, 
  benefits,
  averageDuration,
  title
}: ServicePresentationProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-warmBeige-800 mb-6">
              {presentationTitle}
            </h2>
            <div className="space-y-4 text-gray-700">
              {presentationText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img 
              src={"/lovable-uploads/74e30d7e-1a1c-4a99-8b0b-cbd7dbe83a21.png"} 
              alt={`${title} par qoob rénovations`} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Délai moyen</span>
              </div>
              <p className="text-sm">{averageDuration}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePresentation;
