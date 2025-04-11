
import { Expertise } from "@/types/metierTypes";

interface MetierExpertiseProps {
  expertises: Expertise[];
  title: string;
}

const MetierExpertise = ({ expertises, title }: MetierExpertiseProps) => {
  return (
    <section className="py-16 bg-warmBeige-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-center text-warmBeige-800 mb-10">
          Les expertises d'un {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((expertise, index) => (
            <div
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-serif font-semibold text-warmBeige-800 mb-3">
                {expertise.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {expertise.description}
              </p>
              <ul className="space-y-2">
                {expertise.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetierExpertise;
