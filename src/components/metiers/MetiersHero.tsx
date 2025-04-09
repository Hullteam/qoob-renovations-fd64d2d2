
import { Award, Book, Ruler } from "lucide-react";

const MetiersHero = () => {
  return (
    <section className="bg-gradient-to-b from-warmBeige-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-warmBeige-800 mb-6">
            Les Métiers de la Rénovation
          </h1>
          <p className="text-xl text-warmBeige-700 mb-10">
            Guide complet des corps de métiers du bâtiment : compétences, normes et spécificités
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-warmBeige-100 rounded-full px-4 py-2 text-warmBeige-800 flex items-center">
              <Award className="h-4 w-4 mr-2" />
              <span>Expertises certifiées</span>
            </div>
            <div className="bg-warmBeige-100 rounded-full px-4 py-2 text-warmBeige-800 flex items-center">
              <Book className="h-4 w-4 mr-2" />
              <span>Normes & réglementations</span>
            </div>
            <div className="bg-warmBeige-100 rounded-full px-4 py-2 text-warmBeige-800 flex items-center">
              <Ruler className="h-4 w-4 mr-2" />
              <span>Techniques spécifiques</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetiersHero;
