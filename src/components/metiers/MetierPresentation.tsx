
import { CheckCircle2 } from "lucide-react";

interface MetierPresentationProps {
  presentationTitle: string;
  presentationText: string[];
  presentationImage: string;
  keyPoints: string[];
  title: string;
}

const MetierPresentation = ({ 
  presentationTitle, 
  presentationText, 
  presentationImage, 
  keyPoints,
  title 
}: MetierPresentationProps) => {
  return (
    <section className="py-16 px-4 bg-white">
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
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img 
              src={presentationImage} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetierPresentation;
