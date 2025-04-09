
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

interface Expertise {
  title: string;
  description: string;
  features: string[];
}

interface MetierExpertiseProps {
  expertises: Expertise[];
  title: string;
}

const MetierExpertise = ({ expertises, title }: MetierExpertiseProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-12">
          Nos expertises en {title.toLowerCase()}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
                <p className="text-gray-700 mb-4">{expertise.description}</p>
                <ul className="space-y-2 mb-6">
                  {expertise.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetierExpertise;
